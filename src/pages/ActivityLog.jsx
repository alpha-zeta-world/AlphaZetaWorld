import { useCallback, useEffect, useMemo, useState } from "react";
import { RefreshCw, ScrollText } from "lucide-react";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { hasPermission } from "../constants/permissions";

const formatDate = (value) => {
    if (!value) return { date: "—", time: "—", timestamp: "" };
    const timestamp = new Date(value);
    if (Number.isNaN(timestamp.getTime())) return { date: "—", time: "—", timestamp: String(value) };
    return {
        date: timestamp.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "2-digit" }),
        time: timestamp.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit", second: "2-digit", timeZoneName: "short" }),
        timestamp: timestamp.toISOString(),
    };
};

const ActivityLog = () => {
    const { admin: currentAdmin } = useAuth();
    const [logs, setLogs] = useState([]);
    const [staffById, setStaffById] = useState({});
    const [pagination, setPagination] = useState({ page: 1, totalPages: 1, total: 0 });
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const loadLogs = useCallback(async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const [logsResponse, staffResponse] = await Promise.all([
                api.get("/admin/activity-logs", { params: { page, limit: 20 } }),
                hasPermission(currentAdmin, "staff") ? api.get("/admin/staff") : Promise.resolve(null),
            ]);
            setLogs(logsResponse.data.data?.items || []);
            setPagination(logsResponse.data.data?.pagination || { page: 1, totalPages: 1, total: 0 });
            setStaffById(Object.fromEntries((staffResponse?.data.data || []).map((member) => [String(member.id), member])));
        } catch (requestError) {
            setError(requestError.response?.data?.message || "Could not load the activity log.");
        } finally {
            setLoading(false);
        }
    }, [currentAdmin]);

    useEffect(() => { void Promise.resolve().then(() => loadLogs()); }, [loadLogs]);

    const visibleLogs = useMemo(() => {
        const query = search.trim().toLowerCase();
        if (!query) return logs;
        return logs.filter((log) => {
            const actor = staffById[String(log.actor)] || (String(log.actor) === String(currentAdmin?.id) ? currentAdmin : null);
            return [log.description, log.action, log.resource, log.actorName, actor?.email]
                .some((value) => String(value || "").toLowerCase().includes(query));
        });
    }, [currentAdmin, logs, search, staffById]);

    return <section className="page-section">
        <div className="page-heading">
            <div><p className="eyebrow">Audit trail</p><h1>Activity Log</h1><p className="page-subtitle">Review administrative actions and when they happened.</p></div>
            <div className="inbox-total"><strong>{pagination.total}</strong><span>activities</span></div>
        </div>
        {error && <div className="notice notice-error" role="alert">{error}</div>}
        <div className="table-toolbar activity-toolbar">
            <div className="toolbar-meta"><ScrollText size={16} /><span>Newest activity first · {pagination.total} total</span></div>
            <div className="activity-tools">
                <label className="search-field"><span className="sr-only">Search activity</span><input type="search" placeholder="Search action, admin, or email" value={search} onChange={(event) => setSearch(event.target.value)} /></label>
                <button className="icon-button" type="button" onClick={() => loadLogs(pagination.page)} aria-label="Refresh activity log" title="Refresh"><RefreshCw size={17} /></button>
            </div>
        </div>
        {loading ? <div className="table-state">Loading activity…</div> : visibleLogs.length === 0 ? <div className="table-state"><strong>{search ? "No matching activity" : "No activity recorded yet"}</strong><span>{search ? "Try another name, email, or action." : "Administrative actions will appear here when recorded by the server."}</span></div> : <div className="table-wrap"><table className="data-table activity-table"><thead><tr><th>Activity</th><th>Action</th><th>Admin / staff</th><th>Email</th><th>Date</th><th>Time</th><th>Timestamp</th></tr></thead><tbody>{visibleLogs.map((log) => {
            const actor = staffById[String(log.actor)] || (String(log.actor) === String(currentAdmin?.id) ? currentAdmin : null);
            const dateTime = formatDate(log.createdAt);
            return <tr key={log._id}>
                <td className="activity-description">{log.description || "—"}</td>
                <td><span className="activity-type">{String(log.action || log.resource || "activity").replaceAll("_", " ")}</span></td>
                <td>{log.actorName || actor?.name || "System"}</td>
                <td>{actor?.email || <span className="muted">Unavailable</span>}</td>
                <td>{dateTime.date}</td>
                <td>{dateTime.time}</td>
                <td className="activity-timestamp">{dateTime.timestamp || "—"}</td>
            </tr>;
        })}</tbody></table></div>}
        {!loading && pagination.totalPages > 1 && <div className="pagination"><span>Page {pagination.page} of {pagination.totalPages} · 20 per page</span><div><button className="button button-secondary" type="button" disabled={pagination.page <= 1} onClick={() => loadLogs(pagination.page - 1)}>Previous</button><button className="button button-secondary" type="button" disabled={pagination.page >= pagination.totalPages} onClick={() => loadLogs(pagination.page + 1)}>Next</button></div></div>}
    </section>;
};

export default ActivityLog;
