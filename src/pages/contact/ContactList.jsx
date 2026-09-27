import { useCallback, useEffect, useState } from "react";
import { RefreshCw } from "lucide-react";
import api from "../../api/axios";

const ContactList = () => {
    const [contacts, setContacts] = useState([]);
    const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 1 });
    const [status, setStatus] = useState("all");
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const timer = window.setTimeout(() => setSearch(searchInput.trim()), 250);
        return () => window.clearTimeout(timer);
    }, [searchInput]);

    const loadContacts = useCallback(async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const params = { page, limit: 10 };
            if (status !== "all") params.status = status;
            if (search) params.search = search;
            const { data } = await api.get("/contacts", { params });
            setContacts(data.data?.items || []);
            setPagination(data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not load contact submissions.");
        } finally {
            setLoading(false);
        }
    }, [search, status]);

    useEffect(() => {
        let active = true;
        const params = { page: 1, limit: 10 };
        if (status !== "all") params.status = status;
        if (search) params.search = search;
        api.get("/contacts", { params }).then(({ data }) => {
            if (!active) return;
            setContacts(data.data?.items || []);
            setPagination(data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        }).catch((requestError) => {
            if (active) setError(requestError.response?.data?.message || "Could not load contact submissions.");
        }).finally(() => {
            if (active) setLoading(false);
        });
        return () => { active = false; };
    }, [search, status]);

    const updateStatus = async (contact, nextStatus) => {
        try {
            await api.patch(`/contacts/${contact.id}/status`, { status: nextStatus });
            await loadContacts(pagination.page);
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not update contact status.");
        }
    };

    return (
        <section className="page-section">
            <div className="page-heading">
                <div><p className="eyebrow">Inbox</p><h1>Contacts</h1><p className="page-subtitle">Website enquiries and service requests.</p></div>
                <div className="inbox-total"><strong>{pagination.total}</strong><span>submissions</span></div>
            </div>
            {error && <div className="notice notice-error" role="alert">{error}</div>}
            <div className="table-toolbar contact-toolbar">
                <div className="segmented-control" aria-label="Filter contact status">
                    {["all", "pending", "success"].map((value) => <button key={value} type="button" className={status === value ? "selected" : ""} onClick={() => setStatus(value)}>{value === "all" ? "All" : value === "success" ? "Resolved" : "Pending"}</button>)}
                </div>
                <div className="contact-tools"><label className="search-field"><span className="sr-only">Search contacts</span><input type="search" placeholder="Search name, email, phone" value={searchInput} onChange={(event) => setSearchInput(event.target.value)} /></label><button className="icon-button" type="button" onClick={() => loadContacts(pagination.page)} aria-label="Refresh contacts" title="Refresh"><RefreshCw size={17} /></button></div>
            </div>
            {loading ? <div className="table-state">Loading contact submissions…</div> : contacts.length === 0 ? <div className="table-state"><strong>No contacts found</strong><span>New website enquiries will appear here.</span></div> : (
                <div className="table-wrap"><table className="data-table contacts-table"><thead><tr><th>Contact</th><th>Phone</th><th>Services</th><th>Message</th><th>Received</th><th>Status</th></tr></thead><tbody>
                    {contacts.map((contact) => <tr key={contact.id}>
                        <td><div className="contact-person"><strong>{contact.fullName}</strong><a href={`mailto:${contact.email}`}>{contact.email}</a></div></td>
                        <td><a href={`tel:${contact.contactNumber}`}>{contact.contactNumber}</a></td>
                        <td><div className="service-tags">{(contact.services || []).map((service) => <span key={service}>{service}</span>)}</div></td>
                        <td className="message-cell">{contact.description || <span className="muted">No message</span>}</td>
                        <td>{contact.createdAt ? new Date(contact.createdAt).toLocaleString() : "—"}</td>
                        <td><select aria-label={`Status for ${contact.fullName}`} className={`status-select status-${contact.status}`} value={contact.status} onChange={(event) => updateStatus(contact, event.target.value)}><option value="pending">Pending</option><option value="success">Resolved</option></select></td>
                    </tr>)}
                </tbody></table></div>
            )}
            {!loading && pagination.totalPages > 1 && <div className="pagination"><span>Page {pagination.page} of {pagination.totalPages} · 10 per page</span><div><button className="button button-secondary" type="button" disabled={pagination.page <= 1} onClick={() => loadContacts(pagination.page - 1)}>Previous</button><button className="button button-secondary" type="button" disabled={pagination.page >= pagination.totalPages} onClick={() => loadContacts(pagination.page + 1)}>Next</button></div></div>}
        </section>
    );
};

export default ContactList;
