import React, { useEffect, useRef, useState } from "react";

const cards = [
  {
    icon: "sparkle",
    title: "We Build Our Own Products",
    description: (
      <>
        Not just an agency – we ship real
        <br />
        products. Our Digital Product Lab is live
        <br />
        proof of our engineering and execution
        <br />
        capability.
      </>
    ),
  },
  {
    icon: "bulb",
    title: (
      <>
        Full-Stack Technical
        <br />
        Capability
      </>
    ),
    description: (
      <>
        React, Next.js, Node.js, Flutter, Python –
        <br />
        we cover the full technical stack from
        <br />
        frontend to backend and mobile.
      </>
    ),
  },
  {
    icon: "megaphone",
    title: (
      <>
        AI-Powered Content
        <br />
        Production
      </>
    ),
    description: (
      <>
        Faster, scalable video and content
        <br />
        production powered by AI – ads, reels,
        <br />
        shorts, avatars, and motion graphics.
      </>
    ),
  },
  {
    icon: "phone",
    title: "SEO + AI Search Optimization",
    description: (
      <>
        Google visibility plus emerging AI search
        <br />
        platforms – ChatGPT, Perplexity, and
        <br />
        beyond. We cover it all.
      </>
    ),
  },
  {
    icon: "bolt",
    title: (
      <>
        One Partner, Complete
        <br />
        Digital Stack
      </>
    ),
    description: (
      <>
        Development, content, and search
        <br />
        optimization – all under one roof, one
        <br />
        team, one vision.
      </>
    ),
  },
  {
    icon: "grid",
    title: "Transparent Partnership",
    description: (
      <>
        We work as an extension of your team –
        <br />
        clear communication, honest timelines,
        <br />
        and measurable outcomes.
      </>
    ),
  },
];

const CardIcon = ({ type }: { type: string }) => {
  if (type === "sparkle") {
    return (
      <svg viewBox="0 0 64 64" className="aw-icon-svg">
        <path
          d="M27 11c1.2 8.7 5.3 12.8 14 14-8.7 1.2-12.8 5.3-14 14-1.2-8.7-5.3-12.8-14-14 8.7-1.2 12.8-5.3 14-14Z"
          fill="currentColor"
        />
        <path
          d="M44 33c.7 5.2 3.1 7.6 8.3 8.3-5.2.7-7.6 3.1-8.3 8.3-.7-5.2-3.1-7.6-8.3-8.3 5.2-.7 7.6-3.1 8.3-8.3Z"
          fill="currentColor"
        />
        <path
          d="M18 38c.5 3.7 2.2 5.4 5.9 5.9-3.7.5-5.4 2.2-5.9 5.9-.5-3.7-2.2-5.4-5.9-5.9 3.7-.5 5.4-2.2 5.9-5.9Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (type === "bulb") {
    return (
      <svg viewBox="0 0 64 64" className="aw-icon-svg">
        <path
          d="M32 9c-10.5 0-19 8.3-19 18.5 0 6.6 3.5 11.4 7.8 15.2 2.2 1.9 3.5 4.2 3.5 6.8V52h15.4v-2.5c0-2.6 1.3-4.9 3.5-6.8 4.3-3.8 7.8-8.6 7.8-15.2C51 17.3 42.5 9 32 9Z"
          fill="currentColor"
        />
        <path
          d="M26 56h12"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M32 23v17M25 30l7 7 7-7"
          fill="none"
          stroke="#0A4B3F"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  if (type === "megaphone") {
    return (
      <svg viewBox="0 0 64 64" className="aw-icon-svg">
        <path
          d="M14 28v8h8l17 11V17L22 28h-8Z"
          fill="currentColor"
        />
        <path
          d="M22 36l4 14c.7 2.5 3.4 3.7 5.6 2.3 1.8-1.1 2.4-3.4 1.5-5.3L29 36"
          fill="currentColor"
        />
        <path
          d="M45 25l5-5M48 32h7M45 39l5 5"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (type === "phone") {
    return (
      <svg viewBox="0 0 64 64" className="aw-icon-svg">
        <rect
          x="20"
          y="8"
          width="24"
          height="48"
          rx="4"
          fill="currentColor"
        />
        <rect
          x="25"
          y="13"
          width="14"
          height="34"
          rx="1.5"
          fill="#0A4B3F"
        />
        <circle
          cx="32"
          cy="51"
          r="2.2"
          fill="#0A4B3F"
        />
      </svg>
    );
  }

  if (type === "bolt") {
    return (
      <svg viewBox="0 0 64 64" className="aw-icon-svg">
        <path
          d="M37 7 17 35h13l-3 22 20-30H34l3-20Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 64 64" className="aw-icon-svg">
      <rect
        x="11"
        y="10"
        width="17"
        height="17"
        rx="5"
        fill="currentColor"
      />
      <rect
        x="36"
        y="10"
        width="17"
        height="17"
        rx="5"
        fill="currentColor"
      />
      <rect
        x="11"
        y="36"
        width="17"
        height="17"
        rx="5"
        fill="currentColor"
      />
      <path
        d="M44.5 36v17M36 44.5h17"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
    </svg>
  );
};

const Arrow = () => {
  return (
    <svg viewBox="0 0 24 24" className="aw-arrow">
      <path
        d="M5 12h13"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="m13 6 6 6-6 6"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

const WhyAlphaZeta: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  /* =====================================================
     INTERSECTION OBSERVER — Repeats on scroll up/down
  ===================================================== */

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
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <style>{`

        * {
          box-sizing: border-box;
        }

        .alpha-why-section {
          width: 100%;
          background: #ffffff;
          padding: 28px 4.2% 32px;
          font-family: Arial, Helvetica, sans-serif;
        }

        .alpha-why-container {
          width: 100%;
          max-width: 1240px;
          margin: 0 auto;
        }

        /* =========================
           HEADING
        ========================= */

        .alpha-why-heading {
          margin: 0;
          text-align: center;

          font-size: clamp(40px, 4vw, 54px);
          line-height: 0.95;

          font-weight: 800;
          letter-spacing: -2px;

          color: #1f2a3d;

          opacity: 0;
        }

        .alpha-why-heading-green {
          color: #0A4B3F;
        }

        .alpha-why-heading-dark {
          color: #1f2a3d;
        }

        /* =========================
           INTRO
        ========================= */

        .alpha-why-intro {
          max-width: 1110px;

          margin: 13px auto 0;

          text-align: center;

          color: #4a5568;

          font-size: 17px;
          line-height: 1.4;

          font-weight: 400;

          letter-spacing: -0.1px;

          opacity: 0;
        }

        /* =========================
           GRID
        ========================= */

        .alpha-why-grid {
          display: grid;

          grid-template-columns:
            repeat(3, minmax(0, 1fr));

          column-gap: 42px;

          row-gap: 30px;

          margin-top: 26px;
        }

        .alpha-why-card {
          min-width: 0;

          text-align: center;

          display: flex;
          flex-direction: column;
          align-items: center;

          opacity: 0;

          transition: transform 0.4s ease;
        }

        .alpha-why-card:hover {
          transform: translateY(-6px);
        }

        /* =========================
           ICON CIRCLE
        ========================= */

        .alpha-icon-orbit {
          position: relative;

          width: 95px;
          height: 95px;

          border-radius: 50%;

          display: flex;
          align-items: center;
          justify-content: center;

          margin-bottom: 14px;

          border: 1.5px solid #4fb3a2;

          background:
            radial-gradient(
              circle at center,
              rgba(10, 75, 63, 0.06) 0%,
              rgba(10, 75, 63, 0.02) 50%,
              rgba(10, 75, 63, 0) 72%
            );

          box-shadow:
            0 0 14px rgba(10, 75, 63, 0.06),
            0 0 24px rgba(10, 75, 63, 0.03);

          transition:
            transform 0.4s ease,
            box-shadow 0.4s ease,
            border-color 0.4s ease;
        }

        .alpha-why-card:hover .alpha-icon-orbit {
          transform: translateY(-4px) scale(1.05);

          border-color: #0A4B3F;

          box-shadow:
            0 0 20px rgba(10, 75, 63, 0.15),
            0 0 36px rgba(10, 75, 63, 0.07);
        }

        .alpha-icon-orbit .aw-pulse-ring {
          position: absolute;

          inset: -1.5px;

          border-radius: 50%;

          border: 1.5px solid rgba(10, 75, 63, 0.35);

          opacity: 0;

          pointer-events: none;

          animation:
            awPulseRing
            3s
            ease-out
            infinite;
        }

        .alpha-icon-orbit::before {
          content: "";

          position: absolute;

          width: 68px;
          height: 68px;

          border-radius: 50%;

          background:
            linear-gradient(
              135deg,
              #0F5C4A 0%,
              #0A4B3F 100%
            );

          box-shadow:
            inset 0 1px 0 rgba(255,255,255,0.15),
            0 4px 12px rgba(10, 75, 63, 0.15);

          transition: transform 0.4s ease;
        }

        .alpha-why-card:hover .alpha-icon-orbit::before {
          transform: scale(0.96);
        }

        .alpha-icon-orbit::after {
          content: "";

          position: absolute;

          width: 9px;
          height: 9px;

          top: 10px;
          right: 10px;

          border-radius: 50%;

          background: #4fb3a2;

          box-shadow:
            0 0 6px rgba(79, 179, 162, 0.7),
            0 0 12px rgba(79, 179, 162, 0.35);

          z-index: 4;

          animation:
            awDotBlink
            2.4s
            ease-in-out
            infinite;
        }

        .aw-icon-svg {
          position: relative;

          z-index: 3;

          width: 29px;
          height: 29px;

          color: #ffffff;

          transition: transform 0.4s ease;
        }

        .alpha-why-card:hover .aw-icon-svg {
          transform: scale(1.15) rotate(-8deg);
        }

        /* =========================
           TITLE / DESCRIPTION / LEARN MORE
        ========================= */

        .alpha-why-title {
          margin: 0;

          min-height: 49px;

          display: flex;
          align-items: flex-start;
          justify-content: center;

          color: #1f2a3d;

          font-size: 22px;
          line-height: 1.18;

          font-weight: 700;

          letter-spacing: -0.4px;
        }

        .alpha-why-description {
          margin: 10px 0 0;

          min-height: 74px;

          color: #4a5568;

          font-size: 16.5px;
          line-height: 1.4;

          font-weight: 400;

          letter-spacing: -0.1px;
        }

        .alpha-learn-more {
          display: inline-flex;

          align-items: center;
          justify-content: center;

          gap: 10px;

          margin-top: 10px;

          color: #0A4B3F;

          text-decoration: none;

          font-size: 16px;
          line-height: 1;

          font-weight: 700;

          transition: color 0.25s ease;
        }

        .alpha-learn-more:hover {
          color: #073B32;
        }

        .aw-arrow {
          width: 42px;
          height: 42px;

          padding: 11px;

          border-radius: 50%;

          color: #0A4B3F;

          background: #eaf2f0;

          transition:
            transform 0.25s ease,
            background 0.25s ease;
        }

        .alpha-learn-more:hover .aw-arrow {
          transform: translateX(5px);
          background: #dce9e6;
        }

        /* =========================
           VISIBLE STATE — Animations
        ========================= */

        .alpha-why-section.aw-visible .alpha-why-heading {
          animation:
            awHeadingIn
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0s
            forwards;
        }

        .alpha-why-section.aw-visible .alpha-why-intro {
          animation:
            awIntroIn
            1s
            cubic-bezier(0.22, 1, 0.36, 1)
            0.25s
            forwards;
        }

        .alpha-why-section.aw-visible .alpha-why-card {
          animation:
            awCardFlipIn
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            forwards;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(1) {
          animation-delay: 0.5s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(2) {
          animation-delay: 0.65s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(3) {
          animation-delay: 0.8s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(4) {
          animation-delay: 0.95s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(5) {
          animation-delay: 1.1s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(6) {
          animation-delay: 1.25s;
        }

        .alpha-why-section.aw-visible .alpha-icon-orbit {
          animation:
            awOrbitIn
            0.9s
            cubic-bezier(0.34, 1.4, 0.64, 1)
            forwards;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(1) .alpha-icon-orbit {
          animation-delay: 0.6s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(2) .alpha-icon-orbit {
          animation-delay: 0.75s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(3) .alpha-icon-orbit {
          animation-delay: 0.9s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(4) .alpha-icon-orbit {
          animation-delay: 1.05s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(5) .alpha-icon-orbit {
          animation-delay: 1.2s;
        }

        .alpha-why-section.aw-visible
        .alpha-why-card:nth-child(6) .alpha-icon-orbit {
          animation-delay: 1.35s;
        }

        /* =========================
           KEYFRAMES
        ========================= */

        @keyframes awHeadingIn {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.96);
            letter-spacing: 4px;
          }

          to {
            opacity: 1;
            transform: translateY(0) scale(1);
            letter-spacing: -2px;
          }
        }

        @keyframes awIntroIn {
          from {
            opacity: 0;
            transform: translateY(24px);
            filter: blur(4px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
            filter: blur(0);
          }
        }

        @keyframes awCardFlipIn {
          0% {
            opacity: 0;
            transform: perspective(900px) rotateX(-25deg) translateY(40px);
          }

          60% {
            opacity: 1;
            transform: perspective(900px) rotateX(6deg) translateY(-6px);
          }

          100% {
            opacity: 1;
            transform: perspective(900px) rotateX(0) translateY(0);
          }
        }

        @keyframes awOrbitIn {
          0% {
            opacity: 0;
            transform: scale(0.4) rotate(-45deg);
          }

          70% {
            opacity: 1;
            transform: scale(1.08) rotate(8deg);
          }

          100% {
            opacity: 1;
            transform: scale(1) rotate(0);
          }
        }

        @keyframes awPulseRing {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }

          100% {
            transform: scale(1.25);
            opacity: 0;
          }
        }

        @keyframes awDotBlink {
          0%,
          100% {
            opacity: 1;
            transform: scale(1);
          }

          50% {
            opacity: 0.5;
            transform: scale(0.85);
          }
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 1050px) {

          .alpha-why-section {
            padding: 25px 4% 30px;
          }

          .alpha-why-grid {
            column-gap: 25px;
            row-gap: 28px;
          }

          .alpha-icon-orbit {
            width: 90px;
            height: 90px;
          }

          .alpha-icon-orbit::before {
            width: 64px;
            height: 64px;
          }

          .alpha-icon-orbit::after {
            width: 8px;
            height: 8px;
            top: 9px;
            right: 9px;
          }

          .aw-icon-svg {
            width: 27px;
            height: 27px;
          }

          .alpha-why-title {
            font-size: 20px;
          }

          .alpha-why-description {
            font-size: 15.5px;
          }
        }

        /* =====================================================
           MOBILE — Stacked layout (no slider)
        ===================================================== */

        @media (max-width: 760px) {

          .alpha-why-section {
            padding: 23px 0 28px;
          }

          .alpha-why-container {
            padding: 0 16px;
          }

          .alpha-why-heading {
            font-size: 38px;
            letter-spacing: -1.5px;
          }

          .alpha-why-intro {
            margin-top: 12px;

            font-size: 15px;
            line-height: 1.45;
          }

          .desktop-break {
            display: none;
          }

          /* Stacked grid */
          .alpha-why-grid {
            grid-template-columns: 1fr;

            column-gap: 0;
            row-gap: 34px;

            margin-top: 30px;
          }

          .alpha-why-card {
            padding: 4px 0 12px;
          }

          .alpha-icon-orbit {
            width: 85px;
            height: 85px;

            margin-bottom: 12px;
          }

          .alpha-icon-orbit::before {
            width: 61px;
            height: 61px;
          }

          .alpha-icon-orbit::after {
            width: 8px;
            height: 8px;
            top: 8px;
            right: 8px;
          }

          .aw-icon-svg {
            width: 26px;
            height: 26px;
          }

          .alpha-why-title {
            min-height: auto;
            font-size: 20px;
          }

          .alpha-why-description {
            min-height: auto;

            margin-top: 9px;

            font-size: 15px;
            line-height: 1.4;
          }

          .alpha-learn-more {
            margin-top: 10px;
            font-size: 15px;
          }

          .aw-arrow {
            width: 40px;
            height: 40px;

            padding: 10px;
          }
        }

        /* =========================
           SMALL MOBILE
        ========================= */

        @media (max-width: 480px) {

          .alpha-why-container {
            padding: 0 14px;
          }

          .alpha-why-heading {
            font-size: 32px;
          }

          .alpha-why-intro {
            font-size: 14px;
          }

          .alpha-why-grid {
            margin-top: 26px;
            row-gap: 30px;
          }

          .alpha-icon-orbit {
            width: 78px;
            height: 78px;

            margin-bottom: 10px;
          }

          .alpha-icon-orbit::before {
            width: 56px;
            height: 56px;
          }

          .alpha-icon-orbit::after {
            width: 7px;
            height: 7px;
            top: 7px;
            right: 7px;
          }

          .aw-icon-svg {
            width: 24px;
            height: 24px;
          }

          .alpha-why-title {
            font-size: 19px;
          }

          .alpha-why-description {
            font-size: 14px;
          }

          .alpha-learn-more {
            font-size: 14.5px;
          }

          .aw-arrow {
            width: 38px;
            height: 38px;

            padding: 10px;
          }
        }

        /* =========================
           REDUCED MOTION
        ========================= */

        @media (prefers-reduced-motion: reduce) {
          .alpha-why-section *,
          .alpha-why-section *::before,
          .alpha-why-section *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
          }
        }

      `}</style>

      <section
        ref={sectionRef}
        className={`alpha-why-section${
          isVisible ? " aw-visible" : ""
        }`}
      >
        <div className="alpha-why-container">

          <h2 className="alpha-why-heading">
            <span className="alpha-why-heading-dark">
              Why{" "}
            </span>

            <span className="alpha-why-heading-green">
              Alpha Zeta World
            </span>
          </h2>

          <p className="alpha-why-intro">
            We’re not just an agency. We build our own products, ship real
            software, and bring a full-stack technical capability to every
            <br className="desktop-break" />
            client engagement – development, content, and search under one
            roof.
          </p>

          <div className="alpha-why-grid">

            {cards.map((card, index) => (
              <article
                className="alpha-why-card"
                key={index}
              >

                <div className="alpha-icon-orbit">
                  <span className="aw-pulse-ring" />
                  <CardIcon type={card.icon} />
                </div>

                <h3 className="alpha-why-title">
                  {card.title}
                </h3>

                <p className="alpha-why-description">
                  {card.description}
                </p>

                <a
                  href="#"
                  className="alpha-learn-more"
                >
                  <span>Learn More</span>
                  <Arrow />
                </a>

              </article>
            ))}

          </div>

        </div>
      </section>
    </>
  );
};

export default WhyAlphaZeta;