import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

// 🎯 Footer links — proper React Router paths tho
const footerLinks = {
  company: [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ],
  services: [
    { label: "Web & App Development", path: "/web-app-development" },
    { label: "AI Video & Content", path: "/ai-video" },
    { label: "Google SEO & AI Search", path: "/seo-ai" },
    { label: "Digital Solution", path: "/services" },
  ],
  products: [
    { label: "Digital Product Lab", path: "/products-lab" },
    { label: "SaaS Tools", path: "/products-lab" },
    { label: "Consumer Apps", path: "/products-lab" },
  ],
};

// 🔗 Social links — mee actual URLs ikkada pettandi
const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/alphazetaworld",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z" />
      </svg>
    ),
  },
  {
    id: "instagram",
    label: "Instagram",
    href: "https://www.instagram.com/alphazetaworld?stkn=eDVlZGFxbHpsNnZi",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
      </svg>
    ),
  },
  {
    id: "phone",
    label: "Phone",
    href: "tel:+917703977002",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
];

const Footer: React.FC = () => {
  const logoUrl = "/Images/logo.webp";
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(entry.isIntersecting);
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <footer
      ref={sectionRef}
      className={`ft-footer${isVisible ? " ft-visible" : ""}`}
    >
      <div className="ft-container">

        {/* Top Section */}
        <div className="ft-top-section">

          {/* Brand Column */}
          <div className="ft-brand-column">

            <img
              src={logoUrl}
              alt="Alpha Zeta Logo"
              className="ft-logo"
            />

            <p className="ft-description">
              Alpha Zeta World is a hybrid technology company and digital
              product studio. We build, launch, and monetize proprietary
              digital products.
            </p>

            <a
              href="mailto:hello@alphazetaworld.com"
              className="ft-email-link"
            >
             alphazetaworld@gmail.com
            </a>

          </div>

          {/* Links Grid */}
          <div className="ft-links-grid">

            {/* Company */}
            <div className="ft-link-column">
              <h4 className="ft-column-title">Company</h4>

              <div className="ft-title-underline"></div>

              <ul className="ft-link-list">
                {footerLinks.company.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.path}
                      className="ft-link"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="ft-link-column">
              <h4 className="ft-column-title">Services</h4>

              <div className="ft-title-underline"></div>

              <ul className="ft-link-list">
                {footerLinks.services.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="ft-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products */}
            <div className="ft-link-column">
              <h4 className="ft-column-title">Products</h4>

              <div className="ft-title-underline"></div>

              <ul className="ft-link-list">
                {footerLinks.products.map((link) => (
                  <li key={link.label}>
                    <Link to={link.path} className="ft-link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        {/* Divider */}
        <div className="ft-divider"></div>

        {/* Bottom Section */}
        <div className="ft-bottom-section">

          <p className="ft-copyright">
            @2026 Alpha Zeta World. All Rights Reserved.
          </p>

          {/* 🎯 SOCIAL ICONS — RIGHT SIDE */}
          <div className="ft-social-row">
            {socialLinks.map((social) => (
              <a
                key={social.id}
                href={social.href}
                target={social.id === "phone" ? "_self" : "_blank"}
                rel="noopener noreferrer"
                aria-label={social.label}
                className="ft-social-btn"
              >
                {social.icon}
              </a>
            ))}
          </div>

          <div className="ft-legal-links">
            <a href="#" className="ft-legal-link">
              Privacy Policy
            </a>

            <span className="ft-separator">|</span>

            <a href="#" className="ft-legal-link">
              Terms &amp; Conditions
            </a>

            <span className="ft-separator">|</span>

            <a href="#" className="ft-legal-link">
              Cookie Policy
            </a>
          </div>

        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        /* =========================
           FOOTER
        ========================= */

        .ft-footer {
          width: 100%;

          background: #033129;

          color: #ffffff;

          padding: 4rem 2rem 2rem;

          font-family:
            system-ui,
            -apple-system,
            Arial,
            Helvetica,
            sans-serif;

          position: relative;

          overflow: hidden;
        }

   
        .ft-footer::before {
          content: "";

          position: absolute;

          top: -50%;
          right: -10%;

          width: 60%;
          height: 200%;

          background:
            radial-gradient(
              circle,
              rgba(79, 179, 162, 0.08) 0%,
              rgba(79, 179, 162, 0.03) 40%,
              transparent 70%
            );

          pointer-events: none;

          animation:
            ftGlowFloat
            12s
            ease-in-out
            infinite;
        }

        .ft-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;

          position: relative;
          z-index: 2;
        }

        /* =========================
           TOP SECTION
        ========================= */

        .ft-top-section {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          gap: 4rem;

          margin-bottom: 3rem;
        }

        /* =========================
           BRAND COLUMN
        ========================= */

        .ft-brand-column {
          flex: 1 1 300px;
          max-width: 400px;

          display: flex;
          flex-direction: column;

          gap: 1.5rem;

          align-items: center;
          text-align: center;
        }

        .ft-logo {
          height: 80px;
          width: auto;
          max-width: 100%;

          object-fit: contain;
          display: block;

          opacity: 0;

          filter:
            drop-shadow(0 4px 12px rgba(79, 179, 162, 0.15));

          transition:
            transform 0.4s ease,
            filter 0.4s ease;
        }

        .ft-logo:hover {
          transform: scale(1.05);

          filter:
            drop-shadow(0 8px 20px rgba(79, 179, 162, 0.35));
        }

        .ft-description {
          font-size: 0.95rem;
          line-height: 1.6;
          color: #c9d4d1;
          margin: 0;

          opacity: 0;
        }

        .ft-email-link {
          font-size: 1rem;
          font-weight: 600;
          color: #4fb3a2;
          text-decoration: none;

          margin-top: 0.5rem;

          position: relative;

          opacity: 0;

          transition: color 0.3s ease;
        }

        .ft-email-link::after {
          content: "";

          position: absolute;

          left: 0;
          bottom: -3px;

          width: 0;
          height: 1.5px;

          background: #4fb3a2;

          transition: width 0.3s ease;
        }

        .ft-email-link:hover {
          color: #6ec4b5;
        }

        .ft-email-link:hover::after {
          width: 100%;
        }

       

        .ft-social-row {
          display: flex;
          align-items: center;
          justify-content: flex-end;

          gap: 0.75rem;

          opacity: 0;
        }

        .ft-social-btn {
          width: 42px;
          height: 42px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          background: rgba(79, 179, 162, 0.1);
          border: 1px solid rgba(79, 179, 162, 0.25);

          color: #4fb3a2;
          text-decoration: none;

          transition:
            background 0.3s ease,
            color 0.3s ease,
            border-color 0.3s ease,
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .ft-social-btn:hover {
          background: #4fb3a2;
          color: #033129;
          border-color: #4fb3a2;

          transform: translateY(-4px) scale(1.08);

          box-shadow:
            0 10px 20px -4px rgba(79, 179, 162, 0.5),
            0 4px 8px -2px rgba(79, 179, 162, 0.3);
        }

        /* Continuous floating effect on hover active */
        .ft-social-btn:hover svg {
          animation: ftIconBounce 0.6s ease;
        }

        /* =========================
           LINKS GRID
        ========================= */

        .ft-links-grid {
          display: grid;

          grid-template-columns:
            repeat(
              auto-fit,
              minmax(150px, 1fr)
            );

          gap: 3rem;

          flex: 2 1 500px;
        }

        .ft-link-column {
          display: flex;
          flex-direction: column;
        }

        .ft-column-title {
          font-size: 1.125rem;
          font-weight: 700;
          color: #ffffff;

          margin: 0 0 0.5rem 0;

          opacity: 0;
        }

        .ft-title-underline {
          width: 2rem;
          height: 2px;

          background:
            linear-gradient(
              90deg,
              #4fb3a2,
              #0A4B3F
            );

          margin-bottom: 1rem;

          transform-origin: left center;

          transform: scaleX(0);
          opacity: 0;
        }

        .ft-link-list {
          list-style: none;
          padding: 0;
          margin: 0;

          display: flex;
          flex-direction: column;

          gap: 0.75rem;
        }

        .ft-link {
          font-size: 0.9rem;
          color: #c9d4d1;
          text-decoration: none;

          position: relative;

          opacity: 0;

          transition:
            color 0.3s ease,
            transform 0.3s ease;
        }

        .ft-link::before {
          content: "";

          position: absolute;

          left: -14px;
          top: 50%;

          width: 0;
          height: 1.5px;

          background: #4fb3a2;

          transform: translateY(-50%);

          transition: width 0.3s ease;
        }

        .ft-link:hover {
          color: #4fb3a2;
          transform: translateX(6px);
        }

        .ft-link:hover::before {
          width: 10px;
        }

        /* =========================
           DIVIDER
        ========================= */

        .ft-divider {
          width: 100%;
          height: 1px;

          background:
            rgba(255, 255, 255, 0.15);

          margin-bottom: 2rem;

          transform-origin: center;

          transform: scaleX(0);
          opacity: 0;
        }

        /* =========================
           BOTTOM SECTION
        ========================= */

        .ft-bottom-section {
          display: flex;
          justify-content: space-between;
          align-items: center;

          flex-wrap: wrap;

          gap: 1rem;
        }

        .ft-copyright {
          font-size: 0.875rem;
          color: #8a9a96;
          margin: 0;

          opacity: 0;
        }

        .ft-legal-links {
          display: flex;
          align-items: center;

          gap: 1rem;

          opacity: 0;
        }

        .ft-legal-link {
          font-size: 0.875rem;
          color: #c9d4d1;
          text-decoration: none;

          transition: color 0.3s ease;
        }

        .ft-legal-link:hover {
          color: #4fb3a2;
        }

        .ft-separator {
          color: #3a6660;
          font-size: 0.875rem;
        }

       

        .ft-footer.ft-visible .ft-logo {
          animation:
            ftLogoIn
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            0s
            forwards;
        }

        .ft-footer.ft-visible .ft-description {
          animation:
            ftBlurIn
            0.9s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.2s
            forwards;
        }

        .ft-footer.ft-visible .ft-email-link {
          animation:
            ftFadeUp
            0.7s
            ease
            0.4s
            forwards;
        }

       
        .ft-footer.ft-visible .ft-social-row {
          animation:
            ftSocialRowIn
            0.7s
            ease
            0.55s
            forwards;
        }

        .ft-footer.ft-visible .ft-social-btn:nth-child(1) {
          animation:
            ftSocialPop
            0.6s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            0.65s
            both;
        }

        .ft-footer.ft-visible .ft-social-btn:nth-child(2) {
          animation:
            ftSocialPop
            0.6s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            0.75s
            both;
        }

        .ft-footer.ft-visible .ft-social-btn:nth-child(3) {
          animation:
            ftSocialPop
            0.6s
            cubic-bezier(0.34, 1.56, 0.64, 1)
            0.85s
            both;
        }

        /* Column title stagger */
        .ft-footer.ft-visible .ft-column-title {
          animation:
            ftSlideDown
            0.7s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(1) .ft-column-title {
          animation-delay: 0.5s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(2) .ft-column-title {
          animation-delay: 0.65s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(3) .ft-column-title {
          animation-delay: 0.8s;
        }

        /* Column underline */
        .ft-footer.ft-visible .ft-title-underline {
          animation:
            ftLineGrow
            0.8s
            cubic-bezier(0.22, 1, 0.36, 1)
            forwards;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(1) .ft-title-underline {
          animation-delay: 0.65s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(2) .ft-title-underline {
          animation-delay: 0.8s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(3) .ft-title-underline {
          animation-delay: 0.95s;
        }

        /* Links fade up */
        .ft-footer.ft-visible .ft-link {
          animation:
            ftFadeUp
            0.6s
            ease
            forwards;
        }

        /* Company links */
        .ft-footer.ft-visible
        .ft-link-column:nth-child(1) .ft-link-list li:nth-child(1) .ft-link {
          animation-delay: 0.75s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(1) .ft-link-list li:nth-child(2) .ft-link {
          animation-delay: 0.83s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(1) .ft-link-list li:nth-child(3) .ft-link {
          animation-delay: 0.91s;
        }

        /* Services links */
        .ft-footer.ft-visible
        .ft-link-column:nth-child(2) .ft-link-list li:nth-child(1) .ft-link {
          animation-delay: 0.9s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(2) .ft-link-list li:nth-child(2) .ft-link {
          animation-delay: 0.98s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(2) .ft-link-list li:nth-child(3) .ft-link {
          animation-delay: 1.06s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(2) .ft-link-list li:nth-child(4) .ft-link {
          animation-delay: 1.14s;
        }

        /* Products links */
        .ft-footer.ft-visible
        .ft-link-column:nth-child(3) .ft-link-list li:nth-child(1) .ft-link {
          animation-delay: 1.05s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(3) .ft-link-list li:nth-child(2) .ft-link {
          animation-delay: 1.13s;
        }

        .ft-footer.ft-visible
        .ft-link-column:nth-child(3) .ft-link-list li:nth-child(3) .ft-link {
          animation-delay: 1.21s;
        }

        /* Divider */
        .ft-footer.ft-visible .ft-divider {
          animation:
            ftDividerGrow
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            1.3s
            forwards;
        }

        /* Copyright */
        .ft-footer.ft-visible .ft-copyright {
          animation:
            ftFadeUp
            0.7s
            ease
            1.5s
            forwards;
        }

        /* Legal links */
        .ft-footer.ft-visible .ft-legal-links {
          animation:
            ftFadeUp
            0.7s
            ease
            1.65s
            forwards;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes ftLogoIn {
          0% {
            opacity: 0;
            transform: scale(0.6) translateY(-15px);
          }

          70% {
            opacity: 1;
            transform: scale(1.08) translateY(0);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        @keyframes ftBlurIn {
          from {
            opacity: 0;
            transform: translateY(18px);
            filter: blur(5px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes ftSlideDown {
          from {
            opacity: 0;
            transform: translateY(-14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ftLineGrow {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes ftFadeUp {
          from {
            opacity: 0;
            transform: translateY(14px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes ftDividerGrow {
          from {
            transform: scaleX(0);
            opacity: 0;
          }

          to {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes ftGlowFloat {
          0%,
          100% {
            transform: translate(0, 0);
            opacity: 0.9;
          }

          50% {
            transform: translate(-25px, 25px);
            opacity: 1;
          }
        }

        /* 🎯 Social row entrance — slide from right */
        @keyframes ftSocialRowIn {
          from {
            opacity: 0;
            transform: translateX(30px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* 🎯 Social icon pop-in */
        @keyframes ftSocialPop {
          0% {
            opacity: 0;
            transform: scale(0.4) translateY(10px);
          }

          70% {
            transform: scale(1.12) translateY(-2px);
          }

          100% {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }

        /* 🎯 Icon bounce on hover */
        @keyframes ftIconBounce {
          0%, 100% { transform: translateY(0); }
          50%      { transform: translateY(-4px); }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .ft-footer {
            padding: 3.5rem 1.75rem 1.75rem;
          }

          .ft-top-section {
            gap: 3rem;
          }

          .ft-links-grid {
            gap: 2rem;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 700px) {
          .ft-footer {
            padding: 2rem 1.25rem 1rem;

            background: #033129 !important;
          }

          .ft-footer::before {
            display: none !important;
          }

          .ft-top-section {
            flex-direction: column;
            gap: 0.75rem;
            margin-bottom: 1.5rem;

            align-items: center;
          }

          .ft-brand-column {
            max-width: 100%;
            width: 100%;
            align-items: center;
            text-align: center;
            gap: 0.75rem;

            flex: 0 0 auto;
          }

          .ft-logo {
            height: 55px;
          }

          .ft-links-grid {
            grid-template-columns:
              repeat(
                2,
                minmax(0, 1fr)
              );

            gap: 1.25rem 1rem;

            width: 100%;
            max-width: 400px;

            flex: 0 0 auto;

            margin-top: 0.25rem;
          }

          .ft-link-column {
            align-items: center;
            text-align: center;
          }

          .ft-title-underline {
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 0.5rem;
          }

          .ft-link-list {
            gap: 0.4rem;
          }

          /* 🎯 Bottom section — mobile stacked */
          .ft-bottom-section {
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 0.75rem;
          }

          .ft-social-row {
            order: -1;    
            justify-content: center;
            gap: 0.6rem;
          }

          .ft-social-btn {
            width: 38px;
            height: 38px;
          }

          .ft-divider {
            margin-bottom: 1rem;
          }

          .ft-legal-links {
            flex-wrap: wrap;
            justify-content: center;
            gap: 0.4rem;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 420px) {
          .ft-footer {
            padding: 1.75rem 1rem 0.75rem;

            background: #033129 !important;
          }

          .ft-logo {
            height: 50px;
          }

          .ft-description {
            font-size: 0.85rem;
          }

          .ft-social-btn {
            width: 36px;
            height: 36px;
          }

          .ft-social-btn svg {
            width: 18px;
            height: 18px;
          }

          .ft-links-grid {
            grid-template-columns: 1fr;
            gap: 1rem;
          }

          .ft-column-title {
            font-size: 1rem;
          }

          .ft-copyright,
          .ft-legal-link,
          .ft-separator {
            font-size: 0.8rem;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .ft-footer *,
          .ft-footer *::before,
          .ft-footer *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
            transform: none !important;
            filter: none !important;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;