import React from "react";

const topServices = [
  "STRATEGY",
  "DEVELOPMENT",
  "MARKETING",
];

const bottomServices = [
  "CUSTOM SOFTWARE",
  "WEB APPS",
  "AI SOLUTIONS",
  "INFOTECH",
  "CLOUD SERVICES",
  "DIGITAL GROWTH",
  "CUSTOM SOFTWARE",
];

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        /* =====================================================
           RESET
        ===================================================== */

        .az-hero,
        .az-hero * {
          box-sizing: border-box;
        }

        /* =====================================================
           HERO
        ===================================================== */

        .az-hero {
          position: relative;
          width: 100%;
          height: 600px;
          min-height: 600px;

          overflow: hidden;

          background: #ffffff;
          color: #111820;

          font-family:
            Arial,
            Helvetica,
            sans-serif;
        }

        /* =====================================================
           MAIN CONTAINER
        ===================================================== */

        .az-hero-container {
          position: relative;
          z-index: 5;

          width: 100%;
          height: 580px;

          display: grid;
          grid-template-columns: 58% 42%;

          align-items: center;

          padding:
            35px
            5%
            65px
            8%;
        }

        /* =====================================================
           LEFT CONTENT
        ===================================================== */

        .az-hero-left {
          position: relative;
          z-index: 10;

          padding-top: 10px;
        }

        .az-hero-title {
          margin: 0;

          font-size:
            clamp(
              52px,
              5.2vw,
              82px
            );

          line-height: 0.94;

          letter-spacing: -3px;

          font-weight: 800;

          opacity: 0;

          animation:
            azHeroLeft
            0.8s
            ease
            0s
            forwards;
        }

        .az-black {
          color: #101419;
        }

        .az-green {
          background:
            linear-gradient(
              100deg,
              #073B32 0%,
              #0A4B3F 30%,
              #0F5C4A 50%,
              #0A4B3F 70%,
              #073B32 100%
            );

          -webkit-background-clip: text;
          background-clip: text;

          color: transparent;

          background-size: 200% 200%;

          animation:
            azGreenShift
            5s
            ease
            infinite;
        }

        /* =====================================================
           DESCRIPTION
        ===================================================== */

        .az-hero-description {
          margin-top: 22px;

          color: #3e4959;

          font-size: 18px;

          line-height: 1.5;

          font-weight: 400;

          opacity: 0;

          animation:
            azFadeUp
            0.9s
            ease
            0.35s
            forwards;
        }

        /* =====================================================
           ACTIONS
        ===================================================== */

        .az-hero-actions {
          display: flex;
          align-items: center;

          gap: 25px;

          margin-top: 26px;

          opacity: 0;

          animation:
            azFadeUp
            0.9s
            ease
            0.7s
            forwards;
        }

        /* =====================================================
           START BUTTON
        ===================================================== */

        .az-start-btn {
          position: relative;

          width: 210px;
          height: 56px;

          border: none;
          border-radius: 40px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 18px;

          cursor: pointer;

          overflow: hidden;

          color: #ffffff;

          font-size: 14px;
          font-weight: 700;

          background:
            linear-gradient(
              135deg,
              #0A4B3F,
              #0F5C4A
            );

          box-shadow:
            0 10px 25px
            rgba(
              10,
              75,
              63,
              0.22
            );

          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;

          animation:
            azBtnPulse
            3s
            ease
            1.6s
            infinite;
        }

        .az-start-btn::before {
          content: "";

          position: absolute;

          top: 0;
          left: -120%;

          width: 80%;
          height: 100%;

          background:
            linear-gradient(
              120deg,
              transparent,
              rgba(255, 255, 255, 0.35),
              transparent
            );

          transform: skewX(-20deg);

          animation:
            azShine
            3.5s
            ease-in-out
            2s
            infinite;
        }

        .az-start-btn:hover {
          transform: translateY(-3px);

          box-shadow:
            0 15px 30px
            rgba(
              10,
              75,
              63,
              0.32
            );
        }

        .az-arrow {
          font-size: 25px;
          line-height: 1;
          font-weight: 400;

          transition:
            transform 0.3s ease;
        }

        .az-start-btn:hover .az-arrow {
          transform:
            translateX(6px);
        }

        /* =====================================================
           WATCH VIDEO
        ===================================================== */

        .az-watch-btn {
          border: none;

          background: transparent;

          display: flex;
          align-items: center;

          gap: 12px;

          cursor: pointer;

          color: #202731;

          font-size: 15px;
          font-weight: 500;
        }

        .az-play-circle {
          position: relative;

          width: 56px;
          height: 56px;

          display: flex;
          align-items: center;
          justify-content: center;

          border-radius: 50%;

          border:
            2px solid
            #d3d7dc;

          background: #ffffff;

          transition:
            transform 0.3s ease,
            border-color 0.3s ease;
        }

        .az-play-circle::after {
          content: "";

          position: absolute;
          inset: -6px;

          border-radius: 50%;

          border:
            2px solid
            rgba(
              10,
              75,
              63,
              0.45
            );

          opacity: 0;

          animation:
            azPulseRing
            2.4s
            ease-out
            1.8s
            infinite;
        }

        .az-watch-btn:hover .az-play-circle {
          transform: scale(1.05);

          border-color: #0A4B3F;
        }

        .az-play-icon {
          color: #0A4B3F;

          font-size: 17px;

          margin-left: 3px;

          transition:
            transform 0.3s ease;
        }

        .az-watch-btn:hover .az-play-icon {
          transform: scale(1.15);
        }

        /* =====================================================
           RIGHT IMAGE
        ===================================================== */

        .az-hero-right {
          position: relative;

          width: 100%;
          height: 200px;

          display: flex;
          align-items: center;
          justify-content: flex-start;

          opacity: 0;

          animation:
            azHeroRight
            1s
            ease
            0.4s
            forwards;
        }

        .az-hero-image {
          display: block;

          width: 100%;
          max-width: 480px;

          height: 440px;

          object-fit: contain;
          object-position: center;

          transform: translateX(20px);
        }

        /* =====================================================
           GREEN DIAGONAL RIBBON (TOP)
        ===================================================== */

        .az-top-ribbon {
          position: absolute;

          top: 50px;
          right: -210px;

          z-index: 45;

          width: 950px;
          height: 65px;

          display: flex;
          align-items: center;
          justify-content: center;

          gap: 45px;

          background:
            linear-gradient(
              100deg,
              #0A4B3F 0%,
              #0F5C4A 50%,
              #073B32 100%
            );

          transform: rotate(38deg);

          transform-origin: center;

          box-shadow:
            0 8px 25px
            rgba(
              10,
              75,
              63,
              0.08
            );

          overflow: hidden;

          opacity: 0;

          animation:
            azRibbonEnter
            0.9s
            ease
            1s
            forwards;
        }

        .az-top-ribbon::before {
          content: "";

          position: absolute;
          inset: 0;

          background:
            linear-gradient(
              100deg,
              transparent 0%,
              rgba(255, 255, 255, 0.18) 50%,
              transparent 100%
            );

          animation:
            azRibbonSweep
            4s
            ease-in-out
            1.8s
            infinite;
        }

        .az-ribbon-item {
          display: flex;
          align-items: center;

          gap: 32px;

          white-space: nowrap;

          opacity: 0;

          animation:
            azFadeUp
            0.5s
            ease
            forwards;
        }

        .az-ribbon-item:nth-child(1) {
          animation-delay: 1.3s;
        }

        .az-ribbon-item:nth-child(2) {
          animation-delay: 1.5s;
        }

        .az-ribbon-item:nth-child(3) {
          animation-delay: 1.7s;
        }

        .az-ribbon-text {
          color: #ffffff;

          font-size: 16px;

          font-weight: 700;

          letter-spacing: -0.3px;
        }

        .az-ribbon-dot {
          width: 15px;
          height: 15px;

          flex-shrink: 0;

          border-radius: 50%;

          background: #ffffff;

          animation:
            azDotBlink
            2s
            ease-in-out
            2s
            infinite;
        }

        /* =====================================================
           BOTTOM DIAGONAL RIBBON
        ===================================================== */

        .az-bottom-ribbon {
          position: absolute;

          z-index: 35;

          left: -80px;
          bottom: 30px;

          width:
            calc(
              100% + 160px
            );

          height: 78px;

          background: #f1f3f5;

          transform: rotate(-10deg);

          display: flex;

          align-items: center;

          overflow: hidden;

          box-shadow:
            0 -2px 20px
            rgba(
              20,
              30,
              40,
              0.04
            );

          opacity: 0;

          animation:
            azBottomRibbonEnter
            0.9s
            ease
            1.2s
            forwards;
        }

        .az-services {
          width: 100%;

          display: flex;

          align-items: center;
          justify-content: center;

          gap: 45px;

          transform: rotate(0deg);

          animation:
            azMarquee
            22s
            linear
            2s
            infinite;
        }

        .az-service {
          display: flex;

          align-items: center;

          gap: 21px;

          white-space: nowrap;
        }

        .az-service-text {
          color: #11171c;

          font-size: 13px;

          font-weight: 600;
        }

        .az-service-dot {
          width: 13px;
          height: 13px;

          border-radius: 50%;

          background: #0A4B3F;

          animation:
            azDotBlink
            2.4s
            ease-in-out
            2.4s
            infinite;
        }

        /* =====================================================
           ANIMATIONS
        ===================================================== */

        @keyframes azHeroLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes azHeroRight {
          from {
            opacity: 0;
            transform: translateX(35px);
          }

          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes azFadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes azGreenShift {
          0%,
          100% {
            background-position: 0% 50%;
          }

          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes azBtnPulse {
          0%,
          100% {
            box-shadow:
              0 10px 25px
              rgba(10, 75, 63, 0.22);
          }

          50% {
            box-shadow:
              0 12px 32px
              rgba(10, 75, 63, 0.38);
          }
        }

        @keyframes azShine {
          0% {
            left: -120%;
          }

          60% {
            left: 130%;
          }

          100% {
            left: 130%;
          }
        }

        @keyframes azPulseRing {
          0% {
            transform: scale(1);
            opacity: 0.7;
          }

          100% {
            transform: scale(1.4);
            opacity: 0;
          }
        }

        @keyframes azRibbonSweep {
          0% {
            transform: translateX(-100%);
          }

          50%,
          100% {
            transform: translateX(100%);
          }
        }

        @keyframes azDotBlink {
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

        @keyframes azMarquee {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes azRibbonEnter {
          from {
            opacity: 0;
            transform: rotate(38deg) translateY(-30px);
          }

          to {
            opacity: 1;
            transform: rotate(38deg) translateY(0);
          }
        }

        @keyframes azBottomRibbonEnter {
          from {
            opacity: 0;
            transform: rotate(-10deg) translateY(30px);
          }

          to {
            opacity: 1;
            transform: rotate(-10deg) translateY(0);
          }
        }

        /* =====================================================
           TABLET — 1100px
        ===================================================== */

        @media (max-width: 1100px) {
          .az-hero {
            height: 560px;
            min-height: 560px;
          }

          .az-hero-container {
            height: 560px;
            padding:
              30px
              5%
              60px
              7%;
          }

          .az-hero-title {
            font-size: 62px;
          }

          .az-hero-description {
            font-size: 16px;
          }

          .az-hero-right {
            height: 340px;
          }

          .az-hero-image {
            max-width: 420px;
            height: 340px;
          }

          .az-top-ribbon {
            top: 90px;
            right: -240px;
            width: 950px;
            height: 88px;
          }
        }

        /* =====================================================
           TABLET — 900px
        ===================================================== */

        @media (max-width: 900px) {
          .az-hero {
            height: auto;
            min-height: auto;
          }

          .az-hero-container {
            height: auto;
            min-height: auto;
            grid-template-columns: 1fr;

            padding:
              130px
              6%
              100px;
          }

          .az-hero-left {
            text-align: center;
            padding-top: 20px;
          }

          .az-hero-title {
            font-size:
              clamp(
                44px,
                7.5vw,
                64px
              );
          }

          .az-hero-description {
            font-size: 16px;
          }

          .az-hero-actions {
            justify-content: center;
          }

          .az-hero-right {
            height: 360px;
            margin-top: 10px;
            justify-content: center;
          }

          .az-hero-image {
            width: 100%;
            max-width: 440px;
            height: 340px;
            transform: none;
          }

          .az-top-ribbon {
            top: 40px;
            right: -210px;
            width: 850px;
            height: 78px;
            gap: 28px;
            transform:
              rotate(45deg)
              scale(0.82);

            transform-origin: right center;

            animation: none;
            opacity: 1;
          }

          .az-ribbon-item {
            gap: 22px;
            opacity: 1;
            animation: none;
          }

          .az-ribbon-text {
            font-size: 13px;
          }

          .az-ribbon-dot {
            width: 12px;
            height: 12px;
          }

          .az-bottom-ribbon {
            display: flex;

            left: -10%;
            right: auto;

            width: 120%;

            bottom: 12px;

            height: 62px;

            transform: rotate(-5deg);
            transform-origin: center;

            animation: none;
            opacity: 1;
          }

          .az-services {
            gap: 32px;
          }

          .az-service {
            gap: 16px;
          }

          .az-service-text {
            font-size: 12px;
          }

          .az-service-dot {
            width: 11px;
            height: 11px;
          }
        }

        /* =====================================================
           MOBILE — 768px (Tablet portrait)
        ===================================================== */

        @media (max-width: 768px) {
          .az-hero-container {
            padding:
              110px
              24px
              100px;
          }

          .az-hero-title {
            font-size: 46px;
            letter-spacing: -2px;
          }

          .az-hero-description {
            font-size: 15.5px;
          }

          .az-hero-right {
            height: 320px;
          }

          .az-hero-image {
            max-width: 380px;
            height: 300px;
          }

          .az-top-ribbon {
            top: 25px;
            right: -180px;
            width: 720px;
            height: 68px;
            gap: 24px;
            transform:
              rotate(42deg)
              scale(0.78);

            transform-origin: right center;
          }

          .az-ribbon-item {
            gap: 18px;
          }

          .az-ribbon-text {
            font-size: 12px;
          }

          .az-ribbon-dot {
            width: 10px;
            height: 10px;
          }

          .az-bottom-ribbon {
            left: -8%;
            width: 116%;
            bottom: 10px;
            height: 56px;
            transform: rotate(-5deg);
          }

          .az-services {
            gap: 26px;
          }

          .az-service {
            gap: 14px;
          }

          .az-service-text {
            font-size: 11px;
          }

          .az-service-dot {
            width: 10px;
            height: 10px;
          }
        }

        /* =====================================================
           MOBILE — 600px
           TOP RIBBON HIDDEN, HEADING MOVED TO TOP
        ===================================================== */

        @media (max-width: 600px) {

          /* HIDE TOP RIBBON ON MOBILE */
          .az-top-ribbon {
            display: none !important;
          }

          /* REDUCE TOP PADDING — heading moves up */
          .az-hero-container {
            padding:
              40px
              18px
              90px;
          }

          .az-hero-left {
            padding-top: 0;
          }

          .az-hero-title {
            font-size: 36px;
            line-height: 1;
            letter-spacing: -1.5px;
          }

          .az-hero-description {
            margin-top: 18px;
            font-size: 14.5px;
            line-height: 1.55;
          }

          .az-desktop-break {
            display: none;
          }

          .az-hero-actions {
            flex-direction: column;
            gap: 16px;
            margin-top: 24px;
            align-items: center;
          }

          .az-start-btn {
            width: 100%;
            max-width: 270px;
            height: 54px;
            font-size: 14px;
          }

          .az-play-circle {
            width: 52px;
            height: 52px;
          }

          .az-watch-btn {
            font-size: 14px;
            justify-content: center;
          }

          .az-hero-right {
            height: 280px;
            margin-top: 10px;
            justify-content: center;
          }

          .az-hero-image {
            width: 100%;
            max-width: 360px;
            height: 270px;
            object-fit: contain;
            transform: none;
          }

          /* BOTTOM RIBBON — full bleed, corners touch */
          .az-bottom-ribbon {
            display: flex;

            left: -8%;
            right: auto;

            width: 116%;

            bottom: 10px;

            height: 52px;

            transform: rotate(-5deg);
            transform-origin: center;

            animation: none;
            opacity: 1;
          }

          .az-services {
            gap: 22px;

            animation:
              azMarquee
              18s
              linear
              0.5s
              infinite;
          }

          .az-service {
            gap: 12px;
          }

          .az-service-text {
            font-size: 10.5px;
          }

          .az-service-dot {
            width: 9px;
            height: 9px;
          }
        }

        /* =====================================================
           SMALL MOBILE — 480px
        ===================================================== */

        @media (max-width: 480px) {

          /* TOP RIBBON HIDDEN */
          .az-top-ribbon {
            display: none !important;
          }

          .az-hero-container {
            padding:
              35px
              16px
              82px;
          }

          .az-hero-title {
            font-size: 32px;
            line-height: 1.02;
            letter-spacing: -1.2px;
          }

          .az-hero-description {
            margin-top: 16px;
            font-size: 14px;
            line-height: 1.5;
          }

          .az-hero-actions {
            gap: 14px;
            margin-top: 22px;
          }

          .az-start-btn {
            max-width: 250px;
            height: 52px;
            font-size: 13px;
          }

          .az-play-circle {
            width: 48px;
            height: 48px;
          }

          .az-watch-btn {
            font-size: 13px;
            gap: 10px;
          }

          .az-hero-right {
            height: 250px;
          }

          .az-hero-image {
            max-width: 320px;
            height: 240px;
          }

          /* BOTTOM RIBBON */
          .az-bottom-ribbon {
            left: -8%;
            width: 116%;

            bottom: 8px;

            height: 48px;

            transform: rotate(-5deg);
          }

          .az-services {
            gap: 18px;
          }

          .az-service {
            gap: 10px;
          }

          .az-service-text {
            font-size: 9.5px;
          }

          .az-service-dot {
            width: 8px;
            height: 8px;
          }
        }

        /* =====================================================
           EXTRA SMALL — 380px
        ===================================================== */

        @media (max-width: 380px) {

          /* TOP RIBBON HIDDEN */
          .az-top-ribbon {
            display: none !important;
          }

          .az-hero-container {
            padding:
              30px
              14px
              76px;
          }

          .az-hero-title {
            font-size: 28px;
            letter-spacing: -1px;
          }

          .az-hero-description {
            font-size: 13px;
          }

          .az-start-btn {
            max-width: 230px;
            height: 50px;
            font-size: 12px;
          }

          .az-hero-right {
            height: 220px;
          }

          .az-hero-image {
            max-width: 280px;
            height: 210px;
          }

          /* BOTTOM RIBBON */
          .az-bottom-ribbon {
            left: -8%;
            width: 116%;

            bottom: 6px;

            height: 44px;

            transform: rotate(-5deg);
          }

          .az-services {
            gap: 14px;
          }

          .az-service {
            gap: 8px;
          }

          .az-service-text {
            font-size: 9px;
          }

          .az-service-dot {
            width: 7px;
            height: 7px;
          }
        }

        /* =====================================================
           REDUCED MOTION
        ===================================================== */

        @media (prefers-reduced-motion: reduce) {
          .az-hero *,
          .az-hero *::before,
          .az-hero *::after {
            animation: none !important;
            transition: none !important;
            opacity: 1 !important;
          }
        }
      `}</style>

      <section className="az-hero">
        {/* TOP GREEN RIBBON (hidden on mobile via CSS) */}
        <div className="az-top-ribbon">
          {topServices.map((service, index) => (
            <div className="az-ribbon-item" key={service}>
              <span className="az-ribbon-text">{service}</span>
              {index !== topServices.length - 1 && (
                <span className="az-ribbon-dot" />
              )}
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="az-hero-container">
          {/* LEFT */}
          <div className="az-hero-left">
            <h1 className="az-hero-title">
              <span className="az-black">Build Your</span>
              <br />
              <span className="az-black">Tech.</span>{" "}
              <span className="az-green">Flood It</span>
              <br />
              <span className="az-green">With Customers.</span>
            </h1>

            <p className="az-hero-description">
              Strategy, development, and marketing solutions
              <br className="az-desktop-break" />
              that help businesses build, grow, and scale in
              <br className="az-desktop-break" />
              the digital world.
            </p>

            <div className="az-hero-actions">
              <button type="button" className="az-start-btn">
                <span>GET STARTED</span>
                <span className="az-arrow">→</span>
              </button>

              <button type="button" className="az-watch-btn">
                <span className="az-play-circle">
                  <span className="az-play-icon">▶</span>
                </span>
                <span>Watch Video</span>
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="az-hero-right">
            <img
              src="/Images/heroimage.png"
              alt="Technology"
              className="az-hero-image"
            />
          </div>
        </div>

        {/* BOTTOM GREY RIBBON */}
        <div className="az-bottom-ribbon">
          <div className="az-services">
            {[...bottomServices, ...bottomServices].map(
              (service, index) => (
                <div className="az-service" key={index}>
                  <span className="az-service-text">{service}</span>
                  <span className="az-service-dot" />
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;