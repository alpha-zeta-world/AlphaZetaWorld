import {
    LayoutDashboard,
    Package,
    Briefcase,
    MessageSquare,
    UsersRound,
    ScrollText
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useAuth } from "../context/useAuth";
import { hasPermission } from "../constants/permissions";

const Sidebar = () => {
    const { admin } = useAuth();
    const items = [
        { to: "/dashboard", label: "Dashboard", permission: "dashboard", icon: LayoutDashboard },
        { to: "/products", label: "Products", permission: "products", icon: Package },
        { to: "/services", label: "Services", permission: "services", icon: Briefcase },
        { to: "/contacts", label: "Contacts", permission: "contacts", icon: MessageSquare },
        { to: "/staff", label: "Staff & access", permission: "staff", icon: UsersRound },
        { to: "/activity-log", label: "Activity log", permission: "activity-log", icon: ScrollText },
    ];

    return (
        <aside className="sidebar">
            <NavLink to="/dashboard" className="sidebar-brand" aria-label="Alpha Zeta World home">
                <span className="brand-mark">AZ</span>
                <span className="brand-copy"><strong>Alpha Zeta</strong><small>WORLD ADMIN</small></span>
            </NavLink>
            <div className="sidebar-section-label">WORKSPACE</div>
            <nav aria-label="Main navigation">
                {items.filter(({ permission }) => hasPermission(admin, permission)).map(({ to, label, icon: Icon }) => (
                    <NavLink key={to} to={to} end={to === "/dashboard"} className={({ isActive }) => isActive ? "active" : ""}>
                        <Icon size={18} strokeWidth={1.8} />
                        <span>{label}</span>
                    </NavLink>
                ))}
            </nav>
            <div className="sidebar-bottom"><span className="sidebar-status-dot" /> Secure administration</div>
        </aside>
    );
};

export default Sidebar;
