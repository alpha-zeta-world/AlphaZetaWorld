import { useEffect, useState } from "react";
import { ArrowUpRight, BriefcaseBusiness, MessageSquareText, Package } from "lucide-react";
import { Link } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { hasPermission } from "../constants/permissions";

const Dashboard = () => {
    const { admin } = useAuth();
    const [counts, setCounts] = useState({ products: 0, services: 0, contacts: 0 });

    useEffect(() => {
        api.get("/admin/dashboard-summary").then(({ data }) => setCounts(data.data || { products: 0, services: 0, contacts: 0 })).catch(() => {});
    }, []);

    const sections = [
        { title: "Products", description: "Catalog items and pricing", count: counts.products, to: "/products", icon: Package },
        { title: "Services", description: "Service descriptions and status", count: counts.services, to: "/services", icon: BriefcaseBusiness },
        { title: "Contacts", description: "Website enquiries and requests", count: counts.contacts, to: "/contacts", icon: MessageSquareText },
    ].filter(({ to }) => hasPermission(admin, to.slice(1)));

    return (
        <section className="page-section">
            <div className="page-heading"><div><p className="eyebrow">Workspace</p><h1>Dashboard</h1><p className="page-subtitle">Your catalog and customer enquiries at a glance.</p></div></div>
            {sections.length > 0 ? <div className="dashboard-links">{sections.map(({ title, description, count, to, icon: Icon }) => <Link className="dashboard-link" to={to} key={title}><span className="dashboard-icon"><Icon size={20} /></span><span className="dashboard-copy"><strong>{title}</strong><span>{description}</span></span><span className="dashboard-count">{count}</span><ArrowUpRight className="dashboard-arrow" size={18} /></Link>)}</div> : <div className="notice notice-info">Your account has dashboard access. Ask a staff administrator if you need access to other pages.</div>}
        </section>
    );
};

export default Dashboard;
