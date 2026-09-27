import { useCallback, useEffect, useState } from "react";
import { Plus, RefreshCw, Trash2, UserRoundPen } from "lucide-react";
import Swal from "sweetalert2";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { ALL_PERMISSION_IDS, hasPermission, PERMISSIONS } from "../constants/permissions";

const makeEmptyForm = (admin) => ({
    name: "",
    email: "",
    password: "",
    isActive: true,
    permissions: PERMISSIONS.filter(({ id }) => hasPermission(admin, id)).slice(0, 1).map(({ id }) => id),
});

const StaffList = () => {
    const { admin: currentAdmin } = useAuth();
    const [staff, setStaff] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [form, setForm] = useState(() => makeEmptyForm(currentAdmin));
    const [editing, setEditing] = useState(null);
    const [saving, setSaving] = useState(false);

    const loadStaff = useCallback(async () => {
        setLoading(true); setError("");
        try { const { data } = await api.get("/admin/staff"); setStaff(data.data || []); }
        catch (requestError) { setError(requestError.response?.data?.message || "Could not load staff members."); }
        finally { setLoading(false); }
    }, []);

    useEffect(() => { void Promise.resolve().then(() => loadStaff()); }, [loadStaff]);

    const updateField = (event) => setForm((value) => ({ ...value, [event.target.name]: event.target.name === "isActive" ? event.target.checked : event.target.value }));
    const startEdit = (member) => { setEditing(member); setForm({ name: member.name, email: member.email, password: "", isActive: member.isActive, permissions: member.permissions || ALL_PERMISSION_IDS }); setError(""); };
    const cancelEdit = () => { setEditing(null); setForm(makeEmptyForm(currentAdmin)); setError(""); };
    const togglePermission = (permission) => setForm((value) => ({
        ...value,
        permissions: value.permissions.includes(permission)
            ? value.permissions.filter((item) => item !== permission)
            : [...value.permissions, permission],
    }));
    const canManageMember = (member) => (member.permissions || ALL_PERMISSION_IDS)
        .every((permission) => hasPermission(currentAdmin, permission));

    const saveStaff = async (event) => {
        event.preventDefault(); setSaving(true); setError("");
        try {
            const payload = { ...form, name: form.name.trim(), email: form.email.trim().toLowerCase() };
            if (editing && !payload.password) delete payload.password;
            if (editing) await api.patch(`/admin/staff/${editing.id}`, payload);
            else await api.post("/admin/staff", payload);
            cancelEdit(); await loadStaff();
        } catch (requestError) { setError(requestError.response?.data?.message || "Could not save staff member."); }
        finally { setSaving(false); }
    };

    const removeStaff = async (member) => {
        const result = await Swal.fire({ title: `Remove ${member.name}?`, text: "This staff account will no longer be able to sign in.", icon: "warning", showCancelButton: true, confirmButtonText: "Remove", cancelButtonText: "Cancel", reverseButtons: true, customClass: { popup: "admin-swal-popup", confirmButton: "admin-swal-danger", cancelButton: "admin-swal-cancel" }, buttonsStyling: false });
        if (!result.isConfirmed) return;
        try { await api.delete(`/admin/staff/${member.id}`); await loadStaff(); }
        catch (requestError) { setError(requestError.response?.data?.message || "Could not remove staff member."); }
    };

    return <section className="page-section">
        <div className="page-heading"><div><p className="eyebrow">Access</p><h1>Staff</h1><p className="page-subtitle">Add and manage people who can access the admin panel.</p></div></div>
        {error && <div className="notice notice-error" role="alert">{error}</div>}
        <div className="staff-layout">
            <form className="staff-form" onSubmit={saveStaff}>
                <div className="staff-form-heading"><UserRoundPen size={18} /><strong>{editing ? "Edit staff member" : "Add staff member"}</strong></div>
                <label className="field">Name <span className="required-mark">*</span><input name="name" value={form.name} onChange={updateField} required maxLength={120} /></label>
                <label className="field">Email <span className="required-mark">*</span><input name="email" type="email" value={form.email} onChange={updateField} required maxLength={254} /></label>
                <label className="field">{editing ? "New password" : "Password"} <span className="required-mark">{editing ? "(optional)" : "*"}</span><input name="password" type="password" value={form.password} onChange={updateField} required={!editing} minLength={8} placeholder={editing ? "Leave blank to keep current password" : "At least 8 characters"} /></label>
                <fieldset className="permission-fieldset">
                    <legend>Page access <span className="required-mark">*</span></legend>
                    <p>Choose the pages this staff member can open.</p>
                    <div className="permission-options">
                        {PERMISSIONS.filter(({ id }) => hasPermission(currentAdmin, id)).map(({ id, label, description }) => <label className="permission-option" key={id}>
                            <input type="checkbox" checked={form.permissions.includes(id)} onChange={() => togglePermission(id)} />
                            <span><strong>{label}</strong><small>{description}</small></span>
                        </label>)}
                    </div>
                    {form.permissions.length === 0 && <span className="permission-error">Select at least one page.</span>}
                </fieldset>
                {editing && editing.id !== currentAdmin?.id && <label className="checkbox-field"><input name="isActive" type="checkbox" checked={form.isActive} onChange={updateField} /> Account is active</label>}
                <div className="staff-form-actions">{editing && <button className="button button-secondary" type="button" onClick={cancelEdit}>Cancel</button>}<button className="button button-primary" disabled={saving || form.permissions.length === 0} type="submit"><Plus size={16} />{saving ? "Saving…" : editing ? "Save changes" : "Add staff"}</button></div>
            </form>
            <div><div className="table-toolbar"><div className="toolbar-meta"><span>{staff.length} {staff.length === 1 ? "member" : "members"}</span></div><button className="icon-button" type="button" onClick={loadStaff} aria-label="Refresh staff" title="Refresh"><RefreshCw size={17} /></button></div>
            {loading ? <div className="table-state">Loading staff…</div> : <div className="table-wrap"><table className="data-table"><thead><tr><th>Staff member</th><th>Page access</th><th>Status</th><th>Added</th><th className="actions-heading">Actions</th></tr></thead><tbody>{staff.length === 0 ? <tr><td colSpan="5"><div className="table-state"><strong>No staff accounts yet</strong><span>Add a staff member using the form.</span></div></td></tr> : staff.map((member) => <tr key={member.id}><td><div className="contact-person"><strong>{member.name}</strong><span>{member.email}</span></div></td><td><div className="staff-permission-tags">{(member.permissions || ALL_PERMISSION_IDS).map((permission) => <span key={permission}>{PERMISSIONS.find(({ id }) => id === permission)?.label || permission}</span>)}</div></td><td><span className={`status-pill status-${member.isActive ? "active" : "inactive"}`}>{member.isActive ? "Active" : "Inactive"}</span></td><td>{member.createdAt ? new Date(member.createdAt).toLocaleDateString() : "—"}</td><td><div className="row-actions">{canManageMember(member) && <button className="icon-button" onClick={() => startEdit(member)} type="button" title="Edit" aria-label={`Edit ${member.name}`}><UserRoundPen size={16} /></button>}{member.id !== currentAdmin?.id && canManageMember(member) && <button className="icon-button danger-action" onClick={() => removeStaff(member)} type="button" title="Remove" aria-label={`Remove ${member.name}`}><Trash2 size={16} /></button>}</div></td></tr>)}</tbody></table></div>}</div>
        </div>
    </section>;
};

export default StaffList;
