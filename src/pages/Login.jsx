import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";
import { getFirstPermittedPath } from "../constants/permissions";
import { ArrowRight, LockKeyhole, ShieldCheck } from "lucide-react";

const Login = () => {
    const navigate = useNavigate();
    const { login } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await api.post("/admin/login", {
                email: email.trim().toLowerCase(),
                password
            });

            if (!response.data?.status || !response.data?.data?.token || !response.data?.data?.admin) {
                throw new Error(response.data?.message || "The server returned an invalid login response.");
            }
            login(response.data.data.admin, response.data.data.token);
            navigate(getFirstPermittedPath(response.data.data.admin), { replace: true });
        } catch (requestError) {
            setError(
                requestError.response?.data?.message ||
                (requestError.request
                    ? "Could not reach the admin server. Check your connection and try again."
                    : requestError.message || "Login failed. Please try again.")
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="login-page">
            <section className="login-brand-panel">
                <a className="login-brand" href="/login"><span className="brand-mark">AZ</span><span><strong>Alpha Zeta World</strong><small>ADMINISTRATION</small></span></a>
                <div className="login-brand-message">
                    <span className="login-kicker"><ShieldCheck size={15} /> Secure workspace</span>
                    <h2>Everything you need to manage your world.</h2>
                    <p>Manage your catalog, enquiries, staff access, and activity from one place.</p>
                </div>
                <div className="login-brand-footer">A clearer view of your business.</div>
            </section>
            <section className="login-form-panel">
                <div className="login-box">
                    <div className="login-icon"><LockKeyhole size={20} /></div>
                    <p className="eyebrow">Alpha Zeta World</p>
                    <h1>Welcome back</h1>
                    <p className="login-subtitle">Sign in to continue to your admin workspace.</p>
                    {error && <div className="login-error" role="alert">{error}</div>}
                    <form onSubmit={handleSubmit}>
                        <label className="field">Email address<input type="email" placeholder="you@example.com" autoComplete="username" value={email} onChange={(e) => setEmail(e.target.value)} required /></label>
                        <label className="field">Password<input type="password" placeholder="Enter your password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required /></label>
                        <button className="login-submit" type="submit" disabled={loading}>{loading ? "Signing in…" : <>Sign in <ArrowRight size={17} /></>}</button>
                    </form>
                    <div className="login-form-footer">© {new Date().getFullYear()} Alpha Zeta World</div>
                </div>
            </section>
        </div>
    );
};

export default Login;
