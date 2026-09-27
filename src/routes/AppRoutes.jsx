import { Routes, Route, Navigate } from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import AdminLayout from "../layouts/AdminLayout";
import ProtectedRoute from "./ProtectedRoute";
import CatalogList from "../pages/CatalogList";
import CatalogForm from "../pages/CatalogForm";
import ContactList from "../pages/contact/ContactList";
import StaffList from "../pages/StaffList";
import ActivityLog from "../pages/ActivityLog";
import { getFirstPermittedPath } from "../constants/permissions";
import { useAuth } from "../context/useAuth";

const AppRoutes = () => {
    const { admin } = useAuth();
    return (
        <Routes>

            {/* Public */}
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                    <Route index element={<Navigate to={getFirstPermittedPath(admin)} replace />} />
                    <Route element={<ProtectedRoute permission="dashboard" />}><Route path="/dashboard" element={<Dashboard />} /></Route>
                    <Route element={<ProtectedRoute permission="products" />}>
                        <Route path="/products" element={<CatalogList type="products" />} />
                        <Route path="/products/new" element={<CatalogForm type="products" />} />
                        <Route path="/products/:id/edit" element={<CatalogForm type="products" />} />
                    </Route>
                    <Route element={<ProtectedRoute permission="services" />}>
                        <Route path="/services" element={<CatalogList type="services" />} />
                        <Route path="/services/new" element={<CatalogForm type="services" />} />
                        <Route path="/services/:id/edit" element={<CatalogForm type="services" />} />
                    </Route>
                    <Route element={<ProtectedRoute permission="contacts" />}><Route path="/contacts" element={<ContactList />} /></Route>
                    <Route element={<ProtectedRoute permission="staff" />}><Route path="/staff" element={<StaffList />} /></Route>
                    <Route element={<ProtectedRoute permission="activity-log" />}><Route path="/activity-log" element={<ActivityLog />} /></Route>
                </Route>
            </Route>

            {/* Unknown route */}
            <Route
                path="*"
                element={<Navigate to="/login" replace />}
            />

        </Routes>
    );
};

export default AppRoutes;
