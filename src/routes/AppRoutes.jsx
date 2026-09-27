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

const AppRoutes = () => {
    return (
        <Routes>

            {/* Public */}
            <Route path="/login" element={<Login />} />

            {/* Protected Admin Routes */}
            <Route element={<ProtectedRoute />}>
                <Route element={<AdminLayout />}>
                    <Route
                        path="/dashboard"
                        element={<Dashboard />}
                    />
                    <Route path="/products" element={<CatalogList type="products" />} />
                    <Route path="/products/new" element={<CatalogForm type="products" />} />
                    <Route path="/products/:id/edit" element={<CatalogForm type="products" />} />
                    <Route path="/services" element={<CatalogList type="services" />} />
                    <Route path="/services/new" element={<CatalogForm type="services" />} />
                    <Route path="/services/:id/edit" element={<CatalogForm type="services" />} />
                    <Route path="/contacts" element={<ContactList />} />
                    <Route path="/staff" element={<StaffList />} />
                    <Route path="/activity-log" element={<ActivityLog />} />
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
