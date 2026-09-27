import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Edit2, Plus, RefreshCw, Search, Trash2, X } from "lucide-react";
import Swal from "sweetalert2";
import api from "../api/axios";
import { resolveImageUrl } from "../utils/imageUrl";

const config = {
    products: { singular: "Product", plural: "Products" },
    services: { singular: "Service", plural: "Services" },
};

const PAGE_SIZE = 10;

const CatalogList = ({ type }) => {
    const itemConfig = config[type];
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [pagination, setPagination] = useState({ page: 1, total: 0, totalPages: 1 });
    const [searchInput, setSearchInput] = useState("");
    const [search, setSearch] = useState("");

    useEffect(() => {
        const timer = window.setTimeout(() => setSearch(searchInput.trim()), 250);
        return () => window.clearTimeout(timer);
    }, [searchInput]);

    const loadItems = useCallback(async (page = 1) => {
        setLoading(true);
        setError("");
        try {
            const params = { status: "all", page, limit: PAGE_SIZE };
            if (search) params.search = search;
            const response = await api.get(`/${type}`, { params });
            setItems(response.data.data?.items || []);
            setPagination(response.data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        } catch (requestError) {
            setError(requestError.response?.data?.message || `Could not load ${itemConfig.plural.toLowerCase()}.`);
        } finally {
            setLoading(false);
        }
    }, [type, itemConfig.plural, search]);

    useEffect(() => {
        let active = true;
        const params = { status: "all", page: 1, limit: PAGE_SIZE };
        if (search) params.search = search;
        api.get(`/${type}`, { params }).then((response) => {
            if (active) setItems(response.data.data?.items || []);
            if (active) setPagination(response.data.data?.pagination || { page: 1, total: 0, totalPages: 1 });
        }).catch((requestError) => {
            if (active) setError(requestError.response?.data?.message || `Could not load ${itemConfig.plural.toLowerCase()}.`);
        }).finally(() => {
            if (active) setLoading(false);
        });
        return () => { active = false; };
    }, [type, itemConfig.plural, search]);

    const removeItem = async (item) => {
        const confirmation = await Swal.fire({
            title: `Delete ${item.name}?`,
            text: "This will permanently remove the record from your catalog.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Delete",
            cancelButtonText: "Keep item",
            reverseButtons: true,
            focusCancel: true,
            customClass: { popup: "admin-swal-popup", confirmButton: "admin-swal-danger", cancelButton: "admin-swal-cancel" },
            buttonsStyling: false,
        });
        if (!confirmation.isConfirmed) return;
        try {
            await api.delete(`/${type}/${item._id}`);
            const nextPage = items.length === 1 && pagination.page > 1 ? pagination.page - 1 : pagination.page;
            await loadItems(nextPage);
            await Swal.fire({ toast: true, position: "top-end", icon: "success", title: `${itemConfig.singular} deleted`, showConfirmButton: false, timer: 2200, timerProgressBar: true });
        } catch (requestError) {
            await Swal.fire({ icon: "error", title: "Delete failed", text: requestError.response?.data?.message || `Could not delete ${itemConfig.singular.toLowerCase()}.` });
        }
    };

    return (
        <section className="page-section">
            <div className="page-heading">
                <div><p className="eyebrow">Catalog</p><h1>{itemConfig.plural}</h1><p className="page-subtitle">Manage the items shown in your public catalog.</p></div>
                <Link className="button button-primary" to={`/${type}/new`}><Plus size={17} /> Add {itemConfig.singular}</Link>
            </div>
            {error && <div className="notice notice-error" role="alert">{error}</div>}
            <div className="table-toolbar">
                <label className="search-field catalog-search"><Search size={16} /><span className="sr-only">Search {itemConfig.plural.toLowerCase()}</span><input type="search" placeholder={`Search ${itemConfig.plural.toLowerCase()}`} value={searchInput} onChange={(event) => setSearchInput(event.target.value)} />{searchInput && <button className="search-clear" type="button" onClick={() => setSearchInput("")} aria-label="Clear search"><X size={15} /></button>}</label>
                <div className="toolbar-meta"><span>{pagination.total} {pagination.total === 1 ? "item" : "items"}</span><button className="icon-button" type="button" onClick={() => loadItems(pagination.page)} aria-label="Refresh list" title="Refresh"><RefreshCw size={17} /></button></div>
            </div>
            {loading ? <div className="table-state">Loading {itemConfig.plural.toLowerCase()}…</div> : items.length === 0 ? <div className="table-state"><strong>No {itemConfig.plural.toLowerCase()} found</strong><span>Add your first {itemConfig.singular.toLowerCase()} to get started.</span></div> : (
                <div className="table-wrap"><table className="data-table"><thead><tr><th>{itemConfig.singular}</th><th>Description</th><th>Status</th><th>Updated</th><th className="actions-heading">Actions</th></tr></thead><tbody>
                    {items.map((item) => <tr key={item._id}>
                        <td><div className="item-cell">{item.image ? <img className="item-image" src={resolveImageUrl(item.image)} alt="" /> : <div className="item-image image-placeholder">{item.name?.slice(0, 1)?.toUpperCase()}</div>}<strong>{item.name}</strong></div></td>
                        <td className="description-cell">{item.description || <span className="muted">No description</span>}</td>
                        <td><span className={`status-pill status-${item.status}`}>{item.status}</span></td>
                        <td>{item.updatedAt ? new Date(item.updatedAt).toLocaleDateString() : "—"}</td>
                        <td><div className="row-actions"><Link className="icon-button" to={`/${type}/${item._id}/edit`} aria-label={`Edit ${item.name}`} title="Edit"><Edit2 size={17} /></Link><button className="icon-button danger-action" type="button" onClick={() => removeItem(item)} aria-label={`Delete ${item.name}`} title="Delete"><Trash2 size={17} /></button></div></td>
                    </tr>)}
                </tbody></table></div>
            )}
            {!loading && pagination.totalPages > 1 && <div className="pagination"><span>Page {pagination.page} of {pagination.totalPages} · 10 per page</span><div><button className="button button-secondary" type="button" disabled={pagination.page <= 1} onClick={() => loadItems(pagination.page - 1)}>Previous</button><button className="button button-secondary" type="button" disabled={pagination.page >= pagination.totalPages} onClick={() => loadItems(pagination.page + 1)}>Next</button></div></div>}
        </section>
    );
};

export default CatalogList;
