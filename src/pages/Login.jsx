import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/useAuth";

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

            if (!response.data?.success || !response.data?.token || !response.data?.admin) {
                throw new Error(response.data?.message || "The server returned an invalid login response.");
            }
            login(response.data.admin, response.data.token);
            navigate("/dashboard");
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
            <div className="login-box">
                <h1>Admin Login</h1>

                {error && (
                    <div className="login-error" role="alert">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Email</label>

                        <input
                            type="email"
                            placeholder="Enter email"
                            autoComplete="username"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            required
                        />
                    </div>

                    <div>
                        <label>Password</label>

                        <input
                            type="password"
                            placeholder="Enter password"
                            autoComplete="current-password"
                            value={password}
                            onChange={(e) =>
                                setPassword(e.target.value)
                            }
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
