import { NavLink } from "react-router-dom";
import { useState, type MouseEvent, type KeyboardEvent } from "react";

type NavItem = [label: string, path: string];

// 🎯 Nav links (Services teesesi — adi dropdown ga separate ga untundi)
const links: NavItem[] = [
  ["Home", "/"],
  ["About", "/about"],
  ["Products", "/products-lab"],
  ["Contact Us", "/contact"],
];

// 🎯 Services dropdown items
type ServiceItem = {
  label: string;
  path: string;
};

const serviceDropdown: ServiceItem[] = [
  { label: "Digital Solution", path: "/services" },
  { label: "Web App Development", path: "/web-app-development" },
  { label: "AI Video Content", path: "/ai-video" },
  { label: "SEO AI Search", path: "/seo-ai" },
];

export default function Header() {
  const [open, setOpen] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);

  const toggleServices = (
    e: MouseEvent<HTMLSpanElement> | KeyboardEvent<HTMLSpanElement>
  ): void => {
    e.preventDefault();
    setServicesOpen((prev) => !prev);
  };

  return (
    <>
      <header className="site-header">
        <div className="container nav-wrap">

          {/* Logo */}
          <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
            <img
              src="/Images/header.png"
              alt="Alpha Zeta World"
              className="brand-logo"
            />
          </NavLink>

          {/* Mobile Menu Button */}
          <button
            className="menu-btn"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            ☰
          </button>

          {/* Nav */}
          <nav className={open ? "nav open" : "nav"}>

            {/* 1️⃣ Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              Home
            </NavLink>

            {/* 2️⃣ About */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              About
            </NavLink>

            {/* 3️⃣ Services — dropdown */}
            <div
              className="nav-dropdown"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <span
                role="button"
                tabIndex={0}
                className={`nav-link nav-link-has-arrow ${
                  servicesOpen ? "active" : ""
                }`}
                onClick={toggleServices}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    toggleServices(e);
                  }
                }}
              >
                Services
                <span className="nav-arrow">▾</span>
              </span>

              <div
                className={
                  servicesOpen ? "dropdown-menu open" : "dropdown-menu"
                }
              >
                {serviceDropdown.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={({ isActive }) =>
                      isActive ? "dropdown-item active" : "dropdown-item"
                    }
                    onClick={() => {
                      setOpen(false);
                      setServicesOpen(false);
                    }}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>

            {/* 4️⃣ Products */}
            <NavLink
              to="/products-lab"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              Products
            </NavLink>

            {/* 5️⃣ Contact Us */}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "nav-link active" : "nav-link"
              }
              onClick={() => setOpen(false)}
            >
              Contact Us
            </NavLink>

            {/* CTA */}
            <NavLink
              to="/contact"
              className="nav-cta"
              onClick={() => setOpen(false)}
            >
              Get Started
            </NavLink>
          </nav>

        </div>
      </header>

      <style>{`
        * { box-sizing: border-box; }

        /* =========================
           HEADER
        ========================= */
        .site-header {
          position: sticky;
          top: 0;
          z-index: 100;
          width: 100%;
          background: #ffffff;
          border-bottom: 1px solid #e5ece9;
          font-family: system-ui, -apple-system, Arial, Helvetica, sans-serif;
        }

        .container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          padding: 0 3rem;
        }

        .nav-wrap {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 90px;
          gap: 2rem;
        }

        /* BRAND */
        .brand {
          display: inline-flex;
          align-items: center;
          text-decoration: none;
          flex-shrink: 0;
          margin-left: 1rem;
        }

        .brand-logo {
          height: 92px;
          width: auto;
          max-width: 460px;
          max-height: 92px;
          object-fit: contain;
          display: block;
          transition: transform 0.3s ease;
        }

        .brand-logo:hover { transform: scale(1.05); }

        /* NAV (desktop) */
        .nav {
          display: flex;
          align-items: center;
          gap: 2rem;
        }

        .nav-link {
          position: relative;
          font-size: 0.95rem;
          font-weight: 500;
          color: #1f2a3d;
          text-decoration: none;
          padding: 0.5rem 0;
          transition: color 0.25s ease;
          display: inline-flex;
          align-items: center;
          gap: 0.25rem;
          background: none;
          border: none;
          cursor: pointer;
          font-family: inherit;
          user-select: none;
        }

        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          width: 0;
          height: 2px;
          background: #0A4B3F;
          transition: width 0.3s ease;
        }

        .nav-link:hover { color: #0A4B3F; }
        .nav-link:hover::after { width: 100%; }

        .nav-link.active {
          color: #0A4B3F;
          font-weight: 700;
        }

        .nav-link.active::after { width: 100%; }

        .nav-link-has-arrow .nav-arrow {
          font-size: 0.7rem;
          margin-left: 0.15rem;
          transition: transform 0.3s ease;
          display: inline-block;
        }

        .nav-dropdown:hover .nav-arrow,
        .nav-link-has-arrow.active .nav-arrow {
          transform: rotate(180deg);
        }

        /* DROPDOWN (Desktop) */
        .nav-dropdown {
          position: relative;
          display: inline-block;
          padding: 0.5rem 0;
        }

        .dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          min-width: 240px;
          background: #ffffff;
          border: 1px solid #e5ece9;
          border-radius: 14px;
          padding: 0.5rem;
          box-shadow:
            0 20px 40px -10px rgba(10, 75, 63, 0.15),
            0 8px 16px -6px rgba(10, 75, 63, 0.08);
          opacity: 0;
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.25s ease;
          z-index: 50;
        }

        .dropdown-menu.open {
          opacity: 1;
          pointer-events: auto;
          transform: translateX(-50%) translateY(6px);
        }

        .dropdown-menu::before {
          content: "";
          position: absolute;
          top: -6px;
          left: 50%;
          transform: translateX(-50%) rotate(45deg);
          width: 12px;
          height: 12px;
          background: #ffffff;
          border-top: 1px solid #e5ece9;
          border-left: 1px solid #e5ece9;
          border-top-left-radius: 2px;
        }

        .dropdown-item {
          display: block;
          padding: 0.7rem 1rem;
          font-size: 0.9rem;
          font-weight: 500;
          color: #1f2a3d;
          text-decoration: none;
          border-radius: 10px;
          transition: background 0.2s ease, color 0.2s ease, transform 0.2s ease;
        }

        .dropdown-item:hover {
          background: #f2f7f5;
          color: #0A4B3F;
          transform: translateX(3px);
        }

        .dropdown-item.active {
          background: #ecfdf5;
          color: #0A4B3F;
          font-weight: 700;
        }

        /* CTA */
        .nav-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 1.35rem;
          height: 44px;
          border-radius: 24px;
          background: linear-gradient(135deg, #0A4B3F, #0F5C4A);
          color: #ffffff;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          box-shadow: 0 6px 16px rgba(10, 75, 63, 0.20);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .nav-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(10, 75, 63, 0.28);
        }

        /* MENU BUTTON */
        .menu-btn {
          display: none;
          width: 44px;
          height: 44px;
          border: 1px solid #dce8e3;
          border-radius: 10px;
          background: #ffffff;
          font-size: 1.25rem;
          line-height: 1;
          color: #0A4B3F;
          cursor: pointer;
          transition: background 0.25s ease, border-color 0.25s ease;
        }

        .menu-btn:hover {
          background: #f2f7f5;
          border-color: #0A4B3F;
        }

        /* TABLET */
        @media (max-width: 900px) {
          .container { padding: 0 2rem; }
          .nav-wrap { height: 80px; }
          .nav { gap: 1.25rem; }
          .nav-link { font-size: 0.9rem; }
          .brand { margin-left: 0.5rem; }
          .brand-logo { height: 60px; max-width: 220px; }
        }

        /* MOBILE */
        @media (max-width: 760px) {
          .container { padding: 0 1.25rem; }
          .nav-wrap { height: 72px; }
          .brand { margin-left: 0.5rem; }
          .brand-logo { height: 50px; max-width: 180px; }

          .menu-btn {
            display: flex;
            align-items: center;
            justify-content: center;
          }

          .nav {
            position: absolute;
            top: 72px;
            left: 0;
            right: 0;
            background: #ffffff;
            flex-direction: column;
            align-items: stretch;
            gap: 0;
            padding: 1rem 1.25rem 1.5rem;
            border-bottom: 1px solid #e5ece9;
            box-shadow: 0 12px 24px rgba(10, 75, 63, 0.08);
            transform: translateY(-20px);
            opacity: 0;
            pointer-events: none;
            transition: transform 0.3s ease, opacity 0.3s ease;
            max-height: 90vh;
            overflow-y: auto;
          }

          .nav.open {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }

          .nav > .nav-link {
            padding: 0.9rem 0;
            font-size: 1rem;
            color: #1f2a3d !important;
            border-bottom: 1px solid #eef3f1;
            width: 100%;
            justify-content: space-between;
          }

          .nav-link::after { display: none; }

          /* Services parent — FULL WIDTH */
          .nav-dropdown {
            display: block !important;
            padding: 0 !important;
            margin: 0 !important;
            width: 100% !important;
            position: static !important;
            border-bottom: 1px solid #eef3f1;
          }

          .nav-dropdown .nav-link {
            padding: 0.9rem 0 !important;
            font-size: 1rem;
            color: #1f2a3d !important;
            width: 100% !important;
            justify-content: space-between;
          }

          /* Sub-items wrapper — no left shift */
          .nav .dropdown-menu,
          .nav-dropdown .dropdown-menu,
          .dropdown-menu {
            position: static !important;
            top: auto !important;
            left: auto !important;
            right: auto !important;

            transform: none !important;

            margin: 0 !important;
            padding: 0 !important;

            width: 100% !important;
            min-width: 0 !important;
            max-width: 100% !important;

            background: #f7faf9 !important;
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            border-left: 3px solid #0A4B3F !important;

            opacity: 1 !important;
            pointer-events: auto !important;

            max-height: 0;
            overflow: hidden;

            transition: max-height 0.35s ease, padding 0.3s ease;

            display: block !important;
            visibility: visible !important;
          }

          .nav .dropdown-menu.open,
          .nav-dropdown .dropdown-menu.open,
          .dropdown-menu.open {
            max-height: 500px !important;
            padding: 0.25rem 0 !important;
          }

          .dropdown-menu::before { display: none !important; }

          /* Sub-items — text VISIBLE */
          .nav .dropdown-item,
          .nav-dropdown .dropdown-item,
          .dropdown-menu .dropdown-item,
          .dropdown-item {
            display: block !important;

            width: 100% !important;
            max-width: 100% !important;

            margin: 0 !important;
            padding: 0.8rem 1rem 0.8rem 1.25rem !important;

            font-size: 0.92rem !important;
            font-weight: 500 !important;
            line-height: 1.4 !important;

            color: #1f2a3d !important;
            -webkit-text-fill-color: #1f2a3d !important;

            background: transparent !important;

            text-decoration: none !important;
            text-align: left !important;

            border-bottom: 1px solid #e8efec !important;
            border-radius: 0 !important;

            transform: none !important;

            transition: background 0.2s ease, color 0.2s ease;

            box-sizing: border-box !important;

            opacity: 1 !important;
            visibility: visible !important;
            position: static !important;
          }

          .nav .dropdown-item:last-child,
          .dropdown-menu .dropdown-item:last-child {
            border-bottom: none !important;
          }

          .nav .dropdown-item:hover,
          .nav .dropdown-item:focus,
          .dropdown-menu .dropdown-item:hover,
          .dropdown-menu .dropdown-item:focus {
            background: #eaf3f0 !important;
            color: #0A4B3F !important;
            -webkit-text-fill-color: #0A4B3F !important;
            transform: none !important;
          }

          .nav .dropdown-item.active,
          .dropdown-menu .dropdown-item.active {
            background: #ecfdf5 !important;
            color: #0A4B3F !important;
            -webkit-text-fill-color: #0A4B3F !important;
            font-weight: 700 !important;
          }

          .nav-cta {
            margin-top: 1rem;
            width: 100%;
            height: 46px;
            font-size: 0.95rem;
          }
        }

        /* SMALL MOBILE */
        @media (max-width: 420px) {
          .container { padding: 0 1rem; }
          .nav-wrap { height: 66px; }
          .brand { margin-left: 0.25rem; }
          .brand-logo { height: 44px; max-width: 150px; }
          .menu-btn { width: 40px; height: 40px; font-size: 1.1rem; }

          .nav .dropdown-item,
          .dropdown-menu .dropdown-item {
            font-size: 0.88rem !important;
            padding: 0.7rem 0.85rem 0.7rem 1rem !important;
          }
        }
      `}</style>
    </>
  );
}