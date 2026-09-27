export const PERMISSIONS = [
    { id: "dashboard", label: "Dashboard", description: "View workspace overview" },
    { id: "products", label: "Products", description: "Manage product catalog" },
    { id: "services", label: "Services", description: "Manage service catalog" },
    { id: "contacts", label: "Contacts", description: "Review and update enquiries" },
    { id: "staff", label: "Staff", description: "Manage staff accounts and access" },
    { id: "activity-log", label: "Activity Log", description: "Review administrative activity" },
];

export const ALL_PERMISSION_IDS = PERMISSIONS.map(({ id }) => id);

export const hasPermission = (admin, permission) => {
    const granted = admin?.permissions;
    // Admin records created before page permissions were added keep full access.
    return !Array.isArray(granted) || granted.includes(permission);
};

export const getFirstPermittedPath = (admin) => {
    const permission = PERMISSIONS.find(({ id }) => hasPermission(admin, id));
    return permission ? `/${permission.id}` : "/login";
};
