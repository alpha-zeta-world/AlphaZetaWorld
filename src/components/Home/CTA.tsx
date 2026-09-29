import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">

        <h2 className="cta-title">
          Ready to Build Your <span>Digital Future?</span>
        </h2>

        <p className="cta-description">
          Whether you need a custom platform, AI-powered content, or search
          visibility – let's talk. Alpha Zeta World is ready to build,
          <br />
          launch, and grow with you.
        </p>

        <h3 className="cta-subtitle">
          Unlock Your Digital Potential Today
        </h3>

        <div className="cta-buttons">
          <button className="cta-primary">
            <span>Start a Project</span>
            <span className="cta-arrow">→</span>
          </button>

          <button className="cta-secondary">
            Book a Strategy Call
          </button>
        </div>

      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        .cta-section {
          width: 100%;
          background: #ffffff;
          padding: 70px 20px 80px;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .cta-container {
          width: 100%;
          max-width: 1400px;
          margin: 0 auto;
          text-align: center;
        }

        /* =========================
           HEADING
        ========================= */

        .cta-title {
          margin: 0;
          color: #152535;
          font-size: 48px;
          line-height: 1.1;
          font-weight: 700;
          letter-spacing: -2px;
        }

        .cta-title span {
          color: #0A4B3F;
        }

        /* =========================
           DESCRIPTION
        ========================= */

        .cta-description {
          margin: 24px auto 0;
          color: #536174;
          font-size: 18px;
          line-height: 1.5;
          font-weight: 400;
        }

        /* =========================
           SUBTITLE
        ========================= */

        .cta-subtitle {
          margin: 30px 0 25px;
          color: #0A4B3F;
          font-size: 22px;
          line-height: 1.3;
          font-weight: 600;
        }

        /* =========================
           BUTTONS
        ========================= */

        .cta-buttons {
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 20px;
        }

        .cta-primary,
        .cta-secondary {
          height: 56px;
          min-width: 290px;
          padding: 0 28px;
          border-radius: 30px;
          font-family: inherit;
          font-size: 17px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        /* =========================
           PRIMARY BUTTON
        ========================= */

        .cta-primary {
          position: relative;

          display: flex;
          align-items: center;
          justify-content: center;
          gap: 20px;

          border: none;
          background: #0A4B3F;
          color: #ffffff;

          overflow: hidden;

          box-shadow:
            0 0 0 rgba(10, 75, 63, 0);
        }

        .cta-arrow {
          font-size: 27px;
          font-weight: 400;
          line-height: 1;

          transition: transform 0.3s ease;
        }

        .cta-primary:hover {
          transform: translateY(-3px);

          box-shadow:
            0 12px 28px rgba(10, 75, 63, 0.28);
        }

        .cta-primary:hover .cta-arrow {
          transform: translateX(6px);
        }

        /* =========================
           SECONDARY BUTTON
        ========================= */

        .cta-secondary {
          border: 1.5px solid #0A4B3F;
          background: #ffffff;
          color: #0A4B3F;
        }

        .cta-secondary:hover {
          background: #eaf2f0;
          transform: translateY(-3px);

          box-shadow:
            0 12px 24px rgba(10, 75, 63, 0.12);
        }

        /* =========================
           TABLET
        ========================= */

        @media (max-width: 900px) {
          .cta-section {
            padding: 60px 20px 65px;
          }

          .cta-title {
            font-size: 40px;
          }

          .cta-description {
            font-size: 16px;
          }

          .cta-subtitle {
            font-size: 20px;
          }

          .cta-primary,
          .cta-secondary {
            min-width: 250px;
            height: 52px;
            font-size: 16px;
          }
        }

        /* =========================
           MOBILE
        ========================= */

        @media (max-width: 600px) {
          .cta-section {
            padding: 50px 18px 55px;
          }

          .cta-title {
            font-size: 32px;
            line-height: 1.15;
            letter-spacing: -1px;
          }

          .cta-description {
            margin-top: 18px;
            font-size: 15px;
            line-height: 1.5;
          }

          .cta-description br {
            display: none;
          }

          .cta-subtitle {
            margin: 24px 0 20px;
            font-size: 18px;
          }

          .cta-buttons {
            flex-direction: column;
            gap: 12px;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            min-width: 0;
            height: 50px;
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  );
};

export default CTASection;