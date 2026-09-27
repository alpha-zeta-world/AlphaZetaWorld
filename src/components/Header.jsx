import { useEffect, useRef, useState } from "react";
import { ChevronDown, CircleUserRound, KeyRound, LogOut } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { admin, logout } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const profileRef = useRef(null);

    useEffect(() => {
        const handlePointerDown = (event) => {
            if (!profileRef.current?.contains(event.target)) setMenuOpen(false);
        };
        const handleKeyDown = (event) => {
            if (event.key === "Escape") setMenuOpen(false);
        };
        document.addEventListener("pointerdown", handlePointerDown);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("pointerdown", handlePointerDown);
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    const handleLogout = () => {
        logout();
        navigate("/login");
    };

    const openPasswordDialog = async () => {
        setMenuOpen(false);
        const result = await Swal.fire({
            title: "Change password",
            html: `<div class="password-dialog-fields">
                <label for="current-password">Current password</label>
                <input id="current-password" class="swal2-input" type="password" autocomplete="current-password" placeholder="Current password">
                <label for="new-password">New password</label>
                <input id="new-password" class="swal2-input" type="password" autocomplete="new-password" placeholder="At least 8 characters">
                <label for="confirm-password">Confirm new password</label>
                <input id="confirm-password" class="swal2-input" type="password" autocomplete="new-password" placeholder="Re-enter new password">
            </div>`,
            showCancelButton: true,
            confirmButtonText: "Update password",
            cancelButtonText: "Cancel",
            focusConfirm: false,
            showLoaderOnConfirm: true,
            allowOutsideClick: () => !Swal.isLoading(),
            didOpen: () => document.getElementById("current-password")?.focus(),
            preConfirm: async () => {
                const currentPassword = document.getElementById("current-password").value;
                const newPassword = document.getElementById("new-password").value;
                const confirmation = document.getElementById("confirm-password").value;
                if (!currentPassword || !newPassword || !confirmation) {
                    Swal.showValidationMessage("Complete all password fields");
                    return false;
                }
                if (newPassword.length < 8) {
                    Swal.showValidationMessage("New password must be at least 8 characters");
                    return false;
                }
                if (newPassword !== confirmation) {
                    Swal.showValidationMessage("The new passwords do not match");
                    return false;
                }
                try {
                    await api.post("/admin/change-password", { currentPassword, newPassword });
                    return true;
                } catch (error) {
                    Swal.showValidationMessage(error.response?.data?.message || "Could not change the password");
                    return false;
                }
            },
        });

        if (result.isConfirmed) {
            await Swal.fire({ icon: "success", title: "Password updated", text: "Your new password is ready to use.", timer: 1800, showConfirmButton: false });
        }
    };

    const displayName = admin?.name || admin?.email || "Administrator";
    const pageSections = [
        ["/dashboard", "Dashboard"],
        ["/products", "Products"],
        ["/services", "Services"],
        ["/contacts", "Contacts"],
        ["/staff", "Staff & access"],
        ["/activity-log", "Activity log"],
    ];
    const sectionName = pageSections.find(([path]) => location.pathname.startsWith(path))?.[1] || "Workspace";

    return (
        <header className="header">
            <div className="header-page-title"><span>ALPHA ZETA WORLD</span><strong>{sectionName}</strong></div>
            <div className="profile-area" ref={profileRef}>
                <button className="profile-trigger" type="button" aria-label="Open profile menu" aria-haspopup="menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
                    <span className="profile-avatar"><CircleUserRound size={20} /></span>
                    <span className="profile-name">{displayName}</span>
                    <ChevronDown className={menuOpen ? "chevron-open" : ""} size={15} />
                </button>
                {menuOpen && <div className="profile-menu" role="menu">
                    <div className="profile-menu-heading"><strong>{displayName}</strong><span>{admin?.email || "Admin account"}</span></div>
                    <button type="button" role="menuitem" onClick={openPasswordDialog}><KeyRound size={16} /> Change password</button>
                    <div className="profile-menu-divider" />
                    <button className="profile-logout" type="button" role="menuitem" onClick={handleLogout}><LogOut size={16} /> Log out</button>
                </div>}
            </div>
        </header>
    );
};

export default Header;
