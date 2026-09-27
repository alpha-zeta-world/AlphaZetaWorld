import {
    LayoutDashboard,
    Package,
    Briefcase,
    MessageSquare,
    UsersRound,
    ScrollText
} from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside className="sidebar">

            <div className="sidebar-logo">
                Admin Panel
            </div>

            <nav>

                <NavLink to="/dashboard" className={({ isActive }) => isActive ? "active" : ""}>
                    <LayoutDashboard size={20} />
                    Dashboard
                </NavLink>

                <NavLink to="/products" className={({ isActive }) => isActive ? "active" : ""}>
                    <Package size={20} />
                    Products
                </NavLink>

                <NavLink to="/services" className={({ isActive }) => isActive ? "active" : ""}>
                    <Briefcase size={20} />
                    Services
                </NavLink>

                <NavLink to="/contacts" className={({ isActive }) => isActive ? "active" : ""}>
                    <MessageSquare size={20} />
                    Contacts
                </NavLink>

                <NavLink to="/staff" className={({ isActive }) => isActive ? "active" : ""}>
                    <UsersRound size={20} />
                    Staff
                </NavLink>

                <NavLink to="/activity-log" className={({ isActive }) => isActive ? "active" : ""}>
                    <ScrollText size={20} />
                    Activity Log
                </NavLink>

            </nav>

        </aside>
    );
};

export default Sidebar;
