import React from "react";

const DigitalSolutionsHero: React.FC = () => {
  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
        }

        .digital-hero {
          width: 100%;
          background: #ffffff;
          overflow: hidden;
          font-family: Arial, Helvetica, sans-serif;
        }

        .digital-hero-container {
          width: 100%;
          max-width: 1440px;
          /* Height తగ్గించాను (620px -> 520px) */
          min-height: 520px;
          margin: 0 auto;

          display: grid;
          grid-template-columns: 48% 52%;
          align-items: center; /* Content ని నిలువుగా మధ్యలో ఉంచడానికి */

          position: relative;
        }

        /* =================================
           LEFT CONTENT
        ================================= */

        .digital-hero-content {
          padding: 50px 30px 50px 8%;

          display: flex;
          flex-direction: column;
          justify-content: center;

          position: relative;
          z-index: 5;

          background: #ffffff;
        }

        /* =================================
           EYEBROW
        ================================= */

        .eyebrow {
          font-size: 15px;
          line-height: 1;

          font-weight: 700;
          letter-spacing: 1.5px;

          color: #738087;

          margin-bottom: 18px;
        }

        /* =================================
           MAIN HEADING
        ================================= */

        .digital-hero h1 {
          margin: 0;

          font-size: clamp(44px, 4.3vw, 64px);
          line-height: 1;

          letter-spacing: -2.5px;
          font-weight: 700;

          color: #101315;
        }

        .digital-hero h1 .green-text {
          color: #075c4d;
        }

        /* =================================
           DESCRIPTION
        ================================= */

        .hero-description {
          margin: 24px 0 28px;

          font-size: 15px;
          line-height: 1.55;

          color: #6d777d;

          font-weight: 400;
        }

        /* =================================
           BUTTONS
        ================================= */

        .hero-buttons {
          display: flex;
          align-items: center;

          gap: 12px;

          margin-top: 2px;
        }

        .primary-btn,
        .secondary-btn {
          height: 46px;

          padding: 0 20px;

          display: inline-flex;
          align-items: center;
          justify-content: center;

          gap: 10px;

          text-decoration: none;

          font-size: 13px;
          font-weight: 600;

          border-radius: 5px;

          transition:
            transform 0.25s ease,
            background 0.25s ease,
            box-shadow 0.25s ease;
        }

        /* =================================
           PRIMARY BUTTON
        ================================= */

        .primary-btn {
          min-width: 185px;

          background: #075c4d;
          color: #ffffff;
        }

        .primary-btn:hover {
          background: #064d41;

          transform: translateY(-2px);

          box-shadow:
            0 8px 22px rgba(7, 92, 77, 0.18);
        }

        /* =================================
           SECONDARY BUTTON
        ================================= */

        .secondary-btn {
          min-width: 115px;

          background: #ffffff;

          color: #1b2428;

          border: 1px solid #dfe3e5;
        }

        .secondary-btn:hover {
          background: #f7f8f8;

          transform: translateY(-2px);
        }

        .btn-arrow {
          font-size: 17px;
          line-height: 1;
        }

        /* =================================
           RIGHT IMAGE (AS CARD)
        ================================= */

        .digital-hero-image-wrap {
          position: relative;
          width: 100%;
          height: 100%;

          display: flex;
          align-items: center;
          justify-content: center;

          /* కార్డ్ కి space ఇవ్వడానికి padding */
          padding: 40px 40px 40px 20px;
        }

        /* ఇమేజ్ కార్డ్ స్టైల్ */
        .digital-hero-image-card {
          width: 100%;
          height: 100%;
          max-width: 680px;
          max-height: 440px;

          border-radius: 16px; /* Rounded corners */
          overflow: hidden;

          box-shadow: 0 20px 45px rgba(0, 0, 0, 0.10); /* Card shadow */
          border: 1px solid #f0f0f0;

          background-color: #f9f9f9;
        }

        .digital-hero-image-card img {
          width: 100%;
          height: 100%;

          object-fit: cover;
          object-position: center;

          display: block;
        }

        /* =================================
           TABLET
        ================================= */

        @media (max-width: 1100px) {

          .digital-hero-container {
            grid-template-columns: 50% 50%;

            min-height: 480px;
          }

          .digital-hero-content {
            padding-left: 6%;
            padding-top: 45px;
            padding-bottom: 45px;
          }

          .digital-hero h1 {
            font-size: 46px;
          }

          .hero-description {
            font-size: 14px;
          }

          .digital-hero-image-wrap {
            padding: 30px 30px 30px 15px;
          }

          .digital-hero-image-card {
            max-height: 400px;
          }
        }

        /* =================================
           MOBILE
        ================================= */

        @media (max-width: 768px) {

          .digital-hero-container {
            display: flex;

            flex-direction: column;

            min-height: auto;
          }

          .digital-hero-content {
            width: 100%;

            padding: 40px 22px 25px;

            order: 1;
          }

          .eyebrow {
            font-size: 12px;

            letter-spacing: 1.2px;

            margin-bottom: 14px;
          }

          .digital-hero h1 {
            font-size: 38px;

            line-height: 1.05;

            letter-spacing: -1.5px;
          }

          .hero-description {
            font-size: 14px;

            line-height: 1.55;

            margin: 18px 0 22px;
          }

          .desktop-break {
            display: none;
          }

          .hero-buttons {
            gap: 9px;

            flex-wrap: wrap;
          }

          .primary-btn,
          .secondary-btn {
            height: 44px;

            font-size: 12px;

            padding: 0 16px;
          }

          .primary-btn {
            min-width: 175px;
          }

          .secondary-btn {
            min-width: 105px;
          }

          /* IMAGE CARD (Mobile) */

          .digital-hero-image-wrap {
            order: 2;

            width: 100%;

            padding: 5px 22px 40px;
          }

          .digital-hero-image-card {
            max-height: 300px;

            border-radius: 12px;
          }
        }

        /* =================================
           SMALL MOBILE
        ================================= */

        @media (max-width: 480px) {

          .digital-hero-content {
            padding: 32px 18px 20px;
          }

          .digital-hero h1 {
            font-size: 32px;

            letter-spacing: -1.2px;
          }

          .hero-description {
            font-size: 13px;
          }

          .hero-buttons {
            gap: 8px;
          }

          .primary-btn {
            min-width: 170px;
          }

          .secondary-btn {
            min-width: 100px;
          }

          .digital-hero-image-wrap {
            padding: 5px 18px 32px;
          }

          .digital-hero-image-card {
            max-height: 240px;
          }
        }
      `}</style>

      <section className="digital-hero">

        <div className="digital-hero-container">

          {/* =================================
              LEFT CONTENT
          ================================= */}

          <div className="digital-hero-content">

            {/* Small Heading */}

            <div className="eyebrow">
              DIGITAL SOLUTIONS
            </div>

            {/* Main Heading */}

            <h1>
              Turn Ideas Into
              <br />

              Measurable{" "}
              <span className="green-text">
                Growth
              </span>
            </h1>

            {/* Description */}

            <p className="hero-description">
              We create data-driven digital solutions that help
              <br className="desktop-break" />

              businesses grow, engage customers and stay ahead
              <br className="desktop-break" />

              in the digital world.
            </p>

            {/* Buttons */}

            <div className="hero-buttons">

              <a
                href="#contact"
                className="primary-btn"
              >
                Get a Free Consultation

                <span className="btn-arrow">
                  →
                </span>
              </a>

              <a
                href="#work"
                className="secondary-btn"
              >
                Our Work

                <span className="btn-arrow">
                  →
                </span>
              </a>

            </div>

          </div>

          {/* =================================
              RIGHT IMAGE (AS CARD)
          ================================= */}

          <div className="digital-hero-image-wrap">

            <div className="digital-hero-image-card">

              <img
                src="/Images/seohero.png"
                alt="Digital solutions dashboard"
              />

            </div>

          </div>

        </div>

      </section>
    </>
  );
};

export default DigitalSolutionsHero;