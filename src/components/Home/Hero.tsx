import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      {/* =====================================================
          HERO SECTION
      ===================================================== */}
      <section className="hero-section">

        {/* Background Image */}
        <div className="hero-image"></div>

        {/* White Gradient */}
        <div className="hero-overlay"></div>

        {/* Hero Container */}
        <div className="hero-container">

          <div className="hero-content">

            {/* Eyebrow */}
            <div className="hero-eyebrow">
              <span>
                DIGITAL SOLUTIONS FOR A BRIGHTER TOMORROW
              </span>

              <i></i>
            </div>

            {/* Main Heading */}
            <h1>
              Ideas Today.
              <br />

              <span>Greater Possibilities</span>

              <br />

              Tomorrow.
            </h1>

            {/* Description */}
            <p className="hero-description">
              At AlphaZetaWorld, we help businesses grow with
              innovative digital solutions in SEO, AI Videos,
              Web Development and Digital Solutions.
            </p>

            {/* Buttons */}
            <div className="hero-buttons">

              <a
                href="/contact"
                className="primary-button"
              >
                <span>Get Started</span>

                <span className="button-arrow">
                  →
                </span>
              </a>

              <a
                href="/services"
                className="secondary-button"
              >
                Explore Services
              </a>

            </div>

            {/* Stats */}
            <div className="hero-stats">

              <div className="stat">
                <h3>150+</h3>
                <p>Projects Delivered</p>
              </div>

              <div className="stat-divider"></div>

              <div className="stat">
                <h3>100+</h3>
                <p>Happy Clients</p>
              </div>

              <div className="stat-divider"></div>

              <div className="stat">
                <h3>5+</h3>
                <p>Years of Experience</p>
              </div>

              <div className="stat-divider"></div>

              <div className="stat">
                <h3>98%</h3>
                <p>Client Satisfaction</p>
              </div>

            </div>

          </div>
        </div>

      </section>


      {/* =====================================================
          TRUSTED BY SECTION
      ===================================================== */}
      <section className="trusted-section">

        <div className="trusted-container">

          {/* Trusted Heading */}
          <div className="trusted-heading">

            <h2>
              Trusted by
              <br />
              <strong>Leading Brands</strong>
            </h2>

          </div>


          {/* Divider */}
          <div className="trusted-main-divider"></div>


          {/* Brand Slider */}
          <div className="brand-slider">

            <div className="brand-list">

              {/* Google */}
              <div className="brand">
                <span className="google-logo">Google</span>
              </div>

              {/* Meta */}
              <div className="brand">
                <span className="meta-logo"><b>∞</b>Meta</span>
              </div>

              {/* AWS */}
              <div className="brand">
                <span className="aws-logo">aws</span>
              </div>

              {/* Microsoft */}
              <div className="brand">
                <span className="microsoft-logo">
                  <b className="microsoft-icon">
                    <i></i><i></i><i></i><i></i>
                  </b>
                  Microsoft
                </span>
              </div>

              {/* HubSpot */}
              <div className="brand">
                <span className="hubspot-logo">HubSpot</span>
              </div>

              {/* Canva */}
              <div className="brand">
                <span className="canva-logo">Canva</span>
              </div>

              {/* Notion */}
              <div className="brand">
                <span className="notion-logo"><b>N</b>Notion</span>
              </div>

              {/* ===== Duplicate set for seamless slider (desktop + mobile) ===== */}
              <div className="brand brand-duplicate"><span className="google-logo">Google</span></div>
              <div className="brand brand-duplicate"><span className="meta-logo"><b>∞</b>Meta</span></div>
              <div className="brand brand-duplicate"><span className="aws-logo">aws</span></div>
              <div className="brand brand-duplicate">
                <span className="microsoft-logo">
                  <b className="microsoft-icon"><i></i><i></i><i></i><i></i></b>
                  Microsoft
                </span>
              </div>
              <div className="brand brand-duplicate"><span className="hubspot-logo">HubSpot</span></div>
              <div className="brand brand-duplicate"><span className="canva-logo">Canva</span></div>
              <div className="brand brand-duplicate"><span className="notion-logo"><b>N</b>Notion</span></div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CSS
      ===================================================== */}

      <style>{`

        /* =====================================================
           RESET
        ===================================================== */

        .hero-section,
        .hero-section *,
        .trusted-section,
        .trusted-section * {
          box-sizing: border-box;
        }


        /* =====================================================
           HERO
        ===================================================== */

        .hero-section {
          position: relative;
          width: 100%;
          min-height: 615px;
          overflow: hidden;
          background: #f5f7f6;
          margin: 0;
          padding: 0;
        }


        /* =====================================================
           BACKGROUND IMAGE
        ===================================================== */

        .hero-image {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          background-image: url("/Images/hero.png");
          background-size: cover;
          background-position: center right;
          background-repeat: no-repeat;
        }


        /* =====================================================
           HERO OVERLAY
        ===================================================== */

        .hero-overlay {
          position: absolute;
          inset: 0;
          z-index: 1;
          background:
            linear-gradient(
              90deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.99) 20%,
              rgba(255, 255, 255, 0.96) 31%,
              rgba(255, 255, 255, 0.82) 43%,
              rgba(255, 255, 255, 0.48) 55%,
              rgba(255, 255, 255, 0.10) 72%,
              rgba(255, 255, 255, 0) 100%
            );
        }


        /* =====================================================
           HERO CONTAINER
        ===================================================== */

        .hero-container {
          position: relative;
          z-index: 2;
          width: min(1280px, calc(100% - 64px));
          min-height: 600px;
          margin: 0 auto;
          padding: 0;
          display: flex;
          align-items: flex-start;
        }


        /* =====================================================
           HERO CONTENT
        ===================================================== */

        .hero-content {
          width: 650px;
          padding-top: 48px;
        }


        /* =====================================================
           EYEBROW
        ===================================================== */

        .hero-eyebrow {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 0 0 18px 0;
          color: #4e5963;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2.5px;
          line-height: 1.4;
          white-space: nowrap;
        }


        .hero-eyebrow i {
          display: block;
          width: 42px;
          height: 2px;
          flex-shrink: 0;
          background: #6c7975;
        }


        /* =====================================================
           HEADING
        ===================================================== */

        .hero-content h1 {
          margin: 0;
          padding: 0;
          color: #0c131a;
          font-size: clamp(50px, 4.4vw, 68px);
          line-height: 1.04;
          font-weight: 700;
          letter-spacing: -2.8px;
        }


        .hero-content h1 span {
          color: #075b43;
        }


        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .hero-description {
          width: 100%;
          max-width: 580px;
          margin: 20px 0 0 0;
          padding: 0;
          color: #59636e;
          font-size: 17px;
          line-height: 1.55;
          font-weight: 400;
        }


        /* =====================================================
           BUTTONS
        ===================================================== */

        .hero-buttons {
          display: flex;
          align-items: center;
          gap: 18px;
          margin-top: 23px;
        }


        .primary-button,
        .secondary-button {
          height: 50px;
          padding: 0 27px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 7px;
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          line-height: 1;
          transition:
            transform 0.25s ease,
            background 0.25s ease,
            color 0.25s ease;
        }


        /* =====================================================
           PRIMARY BUTTON
        ===================================================== */

        .primary-button {
          gap: 15px;
          background: #075b43;
          color: #ffffff;
        }


        .button-arrow {
          font-size: 20px;
          line-height: 1;
        }


        .primary-button:hover {
          background: #043f2f;
          transform: translateY(-2px);
        }


        /* =====================================================
           SECONDARY BUTTON
        ===================================================== */

        .secondary-button {
          border: 1px solid #075b43;
          background: rgba(255, 255, 255, 0.78);
          color: #075b43;
        }


        .secondary-button:hover {
          background: #075b43;
          color: #ffffff;
          transform: translateY(-2px);
        }


        /* =====================================================
           STATS
        ===================================================== */

        .hero-stats {
          width: 640px;
          display: flex;
          align-items: center;
          margin-top: 28px;
        }


        .stat {
          min-width: 125px;
          display: flex;
          flex-direction: column;
        }


        .stat h3 {
          margin: 0;
          padding: 0;
          color: #111820;
          font-size: 27px;
          line-height: 1.1;
          font-weight: 700;
        }


        .stat p {
          margin: 5px 0 0 0;
          padding: 0;
          color: #59636e;
          font-size: 13px;
          line-height: 1.3;
        }


        .stat-divider {
          width: 1px;
          height: 45px;
          margin: 0 22px;
          flex-shrink: 0;
          background: #cbd1d0;
        }


        /* =====================================================
           TRUSTED SECTION
        ===================================================== */

        .trusted-section {
          width: 100%;
          margin: 0;
          padding: 0;
          background: #ffffff;
          border-top: 1px solid #eeeeee;
          border-bottom: 1px solid #eeeeee;
          overflow: hidden;
        }


        .trusted-container {
          width: min(1280px, calc(100% - 64px));
          min-height: 130px;
          margin: 0 auto;
          display: flex;
          align-items: center;
        }


        /* =====================================================
           TRUSTED HEADING
        ===================================================== */

        .trusted-heading {
          width: 235px;
          flex-shrink: 0;
        }


        .trusted-label {
          display: flex;
          align-items: center;
          gap: 9px;
          margin-bottom: 7px;
        }


        .trusted-label span {
          width: 32px;
          height: 2px;
          flex-shrink: 0;
          background: #075b43;
        }


        .trusted-label p {
          margin: 0;
          color: #59636e;
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 1.7px;
        }


        .trusted-heading h2 {
          margin: 0;
          color: #111820;
          font-size: 24px;
          line-height: 1.15;
          font-weight: 700;
          letter-spacing: -0.6px;
        }


        .trusted-heading h2 strong {
          color: #075b43;
          font-weight: 700;
        }


        /* =====================================================
           TRUSTED DIVIDER
        ===================================================== */

        .trusted-main-divider {
          width: 1px;
          height: 65px;
          margin-right: 20px;
          flex-shrink: 0;
          background: #d8dddb;
        }


        /* =====================================================
           BRAND SLIDER  (DESKTOP)
        ===================================================== */

        .brand-slider {
          flex: 1;
          min-width: 0;
          overflow: hidden;
          position: relative;
        }


        /* =====================================================
           BRAND LIST  (DESKTOP SLIDER TRACK)
        ===================================================== */

        .brand-list {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          flex-wrap: nowrap;

          width: max-content;
          min-width: max-content;
          height: 54px;

          margin: 0;
          padding: 0;

          animation: trustedPartnersSlide 28s linear infinite;

          will-change: transform;
        }


        .brand-slider:hover .brand-list {
          animation-play-state: paused;
        }


        @keyframes trustedPartnersSlide {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }


        /* =====================================================
           BRAND
        ===================================================== */

        .brand {
          width: 160px;
          min-width: 160px;
          height: 54px;
          padding: 0 14px;

          display: flex;
          align-items: center;
          justify-content: center;

          flex: 0 0 160px;

          border-right: 1px solid #e4e7e6;
        }


        .brand:last-child {
          border-right: none;
        }


        .brand-duplicate {
          display: flex;
        }


        /* =====================================================
           GOOGLE
        ===================================================== */

        .google-logo {
          color: #555d66;
          font-size: 24px;
          font-weight: 500;
          letter-spacing: -1px;
        }


        /* =====================================================
           META
        ===================================================== */

        .meta-logo {
          display: flex;
          align-items: center;
          gap: 5px;
          color: #555d66;
          font-size: 23px;
          font-weight: 500;
        }


        .meta-logo b {
          font-size: 30px;
          font-weight: 400;
          line-height: 1;
        }


        /* =====================================================
           AWS
        ===================================================== */

        .aws-logo {
          color: #555d66;
          font-size: 27px;
          font-weight: 700;
        }


        /* =====================================================
           MICROSOFT
        ===================================================== */

        .microsoft-logo {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #555d66;
          font-size: 17px;
          font-weight: 600;
        }


        .microsoft-icon {
          width: 24px;
          height: 24px;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 1fr 1fr;
          gap: 2px;
        }


        .microsoft-icon i {
          display: block;
          background: #555d66;
        }


        /* =====================================================
           HUBSPOT
        ===================================================== */

        .hubspot-logo {
          color: #555d66;
          font-size: 18px;
          font-weight: 600;
        }


        /* =====================================================
           CANVA
        ===================================================== */

        .canva-logo {
          color: #555d66;
          font-size: 26px;
          font-family: cursive;
          font-style: italic;
          font-weight: 600;
        }


        /* =====================================================
           NOTION
        ===================================================== */

        .notion-logo {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #555d66;
          font-size: 17px;
          font-weight: 600;
        }


        .notion-logo b {
          width: 24px;
          height: 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 2px solid #555d66;
          border-radius: 4px;
          font-size: 14px;
        }


        /* =====================================================
           TABLET
        ===================================================== */

        @media (max-width: 1000px) {

          .hero-section {
            min-height: 570px;
          }


          .hero-container {
            width: calc(100% - 48px);
            min-height: 570px;
          }


          .hero-content {
            width: 570px;
            padding-top: 42px;
          }


          .hero-content h1 {
            font-size: 54px;
            letter-spacing: -2.3px;
          }


          .hero-description {
            font-size: 16px;
          }


          .hero-stats {
            width: 570px;
          }


          .stat {
            min-width: 110px;
          }


          .stat-divider {
            margin: 0 13px;
          }


          /* Trusted */

          .trusted-container {
            width: calc(100% - 48px);
          }


          .trusted-heading {
            width: 190px;
          }


          .trusted-heading h2 {
            font-size: 21px;
          }


          .trusted-main-divider {
            margin-right: 10px;
          }


          .brand {
            width: 120px;
            min-width: 120px;
            flex: 0 0 120px;
            padding: 0 7px;
          }


          .google-logo,
          .meta-logo {
            font-size: 18px;
          }


          .aws-logo {
            font-size: 21px;
          }


          .microsoft-logo {
            font-size: 13px;
          }


          .hubspot-logo {
            font-size: 14px;
          }


          .canva-logo {
            font-size: 20px;
          }


          .notion-logo {
            font-size: 13px;
          }

        }


        /* =====================================================
           MOBILE
        ===================================================== */

        @media (max-width: 760px) {

          /* =====================================================
             MOBILE HERO
          ===================================================== */

          .hero-section {
            min-height: 0;
            height: auto;
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: #ffffff;
          }


          .hero-container {
            width: calc(100% - 28px);
            min-height: 0;
            height: auto;
            margin: 0 auto;
            padding: 0 0 26px;
            display: flex;
            flex-direction: column;
          }


          .hero-content {
            order: 1;
            width: 100%;
            padding-top: 26px;
            position: relative;
            z-index: 3;
          }


          /* Mobile-specific image */
          .hero-image {
            position: relative;
            inset: auto;
            order: 2;
            display: block;
            width: 100%;
            height: 250px;
            margin: 8px 0 0;
            background-image: url("/Images/hero.png");
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            border-radius: 0;
            z-index: 1;
          }


          .hero-overlay {
            display: none;
          }


          .hero-eyebrow {
            width: 100%;
            display: flex;
            align-items: center;
            gap: 7px;
            margin: 0 0 13px 0;
            font-size: 7.5px;
            line-height: 1.4;
            letter-spacing: 1.25px;
            white-space: normal;
          }


          .hero-eyebrow span {
            max-width: calc(100% - 30px);
          }


          .hero-eyebrow i {
            width: 22px;
            height: 1.5px;
            flex-shrink: 0;
          }


          .hero-content h1 {
            max-width: 100%;
            margin: 0;
            font-size: clamp(32px, 9.5vw, 39px);
            line-height: 1.04;
            letter-spacing: -1.4px;
          }


          .hero-description {
            width: 100%;
            max-width: 100%;
            margin: 15px 0 0 0;
            font-size: 13.5px;
            line-height: 1.52;
          }


          .hero-buttons {
            width: 100%;
            display: flex;
            align-items: stretch;
            gap: 8px;
            margin-top: 19px;
          }


          .primary-button,
          .secondary-button {
            min-width: 0;
            height: 44px;
            padding: 0 13px;
            border-radius: 7px;
            font-size: 11px;
            white-space: nowrap;
          }


          .primary-button {
            flex: 1;
            gap: 8px;
          }


          .secondary-button {
            flex: 1;
          }


          .button-arrow {
            font-size: 16px;
          }


          .hero-stats {
            width: 100%;
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 16px 18px;
            margin-top: 25px;
          }


          .stat {
            min-width: 0;
          }


          .stat h3 {
            margin: 0;
            font-size: 22px;
            line-height: 1.1;
          }


          .stat p {
            margin: 4px 0 0 0;
            font-size: 10.5px;
            line-height: 1.3;
          }


          .stat-divider {
            display: none;
          }


          /* =====================================================
             TRUSTED PARTNERS - MOBILE
          ===================================================== */

          .trusted-section {
            width: 100%;
            margin-top: 22px;
            padding: 0 0 20px;
            overflow: hidden;
          }


          .trusted-container {
            width: calc(100% - 28px);
            min-height: auto;
            margin: 0 auto;
            padding: 34px 0 8px;
            display: block;
          }


          .trusted-heading {
            width: 100%;
            margin: 0 0 20px;
            text-align: center;
          }


          .trusted-label {
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 0 7px;
          }


          /* Remove line before OUR PARTNERS */
          .trusted-label span {
            display: none;
          }


          .trusted-label p {
            margin: 0;
            font-size: 9px;
            line-height: 1.2;
            letter-spacing: 1.5px;
            text-align: center;
          }


          .trusted-heading h2 {
            margin: 0;
            text-align: center;
            font-size: 23px;
            line-height: 1.05;
          }


          .trusted-main-divider {
            display: none;
          }


          /* Slider viewport */
          .brand-slider {
            display: block;
            width: 100%;
            height: 72px;
            margin: 0;
            padding: 0;
            overflow: hidden;
            position: relative;
            visibility: visible;
            opacity: 1;
          }


          /* Moving track */
          .brand-list {
            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-wrap: nowrap;

            width: max-content;
            min-width: max-content;
            height: 72px;

            margin: 0;
            padding: 0;

            animation: trustedPartnersSlide 32s linear infinite;

            will-change: transform;
          }


          /* Every logo is always visible */
          .brand {
            width: 150px;
            min-width: 150px;
            height: 72px;

            padding: 8px 15px;

            display: flex;
            align-items: center;
            justify-content: center;

            flex: 0 0 150px;

            border-right: 1px solid #e4e7e6;
            border-bottom: none;

            background: #ffffff;
          }


          .brand-duplicate {
            display: flex;
          }


          .brand-slider:hover .brand-list {
            animation-play-state: paused;
          }


          .google-logo {
            font-size: 18px;
          }


          .meta-logo {
            font-size: 18px;
          }


          .meta-logo b {
            font-size: 25px;
          }


          .aws-logo {
            font-size: 21px;
          }


          .microsoft-logo {
            font-size: 13px;
          }


          .microsoft-icon {
            width: 21px;
            height: 21px;
          }


          .hubspot-logo {
            font-size: 14px;
          }


          .canva-logo {
            font-size: 21px;
          }


          .notion-logo {
            font-size: 13px;
          }


          .notion-logo b {
            width: 21px;
            height: 21px;
            font-size: 12px;
          }

        }


        @media (max-width: 420px) {

          /* HERO ONLY */

          .hero-container {
            width: calc(100% - 26px);
            min-height: 0;
            height: auto;
            padding-bottom: 30px;
          }


          .hero-content {
            padding-top: 24px;
          }


          .hero-content h1 {
            font-size: 34px;
            line-height: 1.05;
            letter-spacing: -1.2px;
          }


          .hero-description {
            font-size: 13px;
            line-height: 1.5;
          }


          .hero-buttons {
            gap: 7px;
            margin-top: 18px;
          }


          .primary-button,
          .secondary-button {
            height: 43px;
            padding: 0 10px;
            font-size: 10.5px;
          }


          .hero-stats {
            gap: 15px 8px;
            margin-top: 23px;
          }


          .stat h3 {
            font-size: 21px;
          }


          .stat p {
            font-size: 10px;
          }


          /* TRUSTED PARTNERS */

          .trusted-section {
            margin-top: 24px;
          }


          .trusted-container {
            width: calc(100% - 26px);
            padding-top: 32px;
          }


          .trusted-heading h2 {
            font-size: 22px;
          }


          .brand {
            width: 140px;
            min-width: 140px;
            flex-basis: 140px;
          }


          .hero-image {
            height: 220px;
            margin-top: 8px;
            background-position: center;
          }

        }

      `}</style>
    </>
  );
};

export default Hero;