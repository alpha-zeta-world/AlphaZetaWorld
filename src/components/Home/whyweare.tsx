import React from 'react';

// ==========================================
// 1. CSS STYLES
// ==========================================
const styles = `
  .why-choose-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 30px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  .why-container {
    max-width: 1280px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .why-container {
      grid-template-columns: 1fr 1.2fr;
      gap: 40px;
      align-items: center;
    }
  }

  /* --- Left Content --- */
  .left-content {
    display: flex;
    flex-direction: column;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 12px; 
  }

  .section-label span {
    color: #0F3D2E;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .label-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }

  .main-heading {
    font-size: 30px; 
    font-weight: 800;
    color: #111827;
    line-height: 1.15;
    margin: 0 0 12px 0; 
  }

  @media (min-width: 768px) {
    .main-heading { font-size: 38px; } 
  }

  .highlight-green {
    color: #0F3D2E;
  }

  .description {
    color: #4B5563;
    font-size: 15px; 
    line-height: 1.5;
    margin-bottom: 20px; 
    max-width: 450px;
  }

  .story-btn {
    background-color: #0F3D2E;
    color: white;
    padding: 10px 20px; 
    border-radius: 8px;
    font-weight: 500;
    font-size: 14px;
    display: inline-flex;
    align-items: center;
    gap: 10px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s;
    width: fit-content;
    margin-bottom: 24px; 
  }

  .story-btn:hover {
    background-color: #1a5c46;
  }

  /* Left Image Block */
  .image-block-wrapper {
    position: relative;
    width: 100%;
    max-width: 400px;
    margin-top: 0px;
  }

  .image-bg-patch {
    position: absolute;
    top: -12px;
    right: -12px;
    width: 140px;
    height: 180px;
    background-color: #0F3D2E;
    border-radius: 20px;
    z-index: 1;
  }

  .main-image {
    position: relative;
    width: 100%;
    height: 220px; 
    object-fit: cover;
    border-radius: 20px;
    z-index: 2;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  }

  /* Floating Growth Badge */
  .growth-badge {
    position: absolute;
    bottom: -12px;
    right: -12px;
    background-color: white;
    padding: 10px 14px; 
    border-radius: 12px;
    box-shadow: 0 15px 30px -5px rgba(0, 0, 0, 0.15);
    display: flex;
    align-items: center;
    gap: 8px;
    z-index: 3;
    border: 1px solid #F3F4F6;
  }

  .growth-badge .icon-box {
    background-color: #0F3D2E;
    border-radius: 6px;
    padding: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .growth-badge p {
    font-size: 11px;
    font-weight: 700;
    color: #111827;
    line-height: 1.2;
    margin: 0;
  }

  /* Dotted Patterns */
  .dots-left {
    position: absolute;
    bottom: -12px;
    left: -12px;
    width: 70px;
    height: 70px;
    background-image: radial-gradient(#0F3D2E 2px, transparent 2px);
    background-size: 10px 10px;
    opacity: 0.3;
    z-index: 0;
  }

  .dots-right {
    position: absolute;
    bottom: -12px;
    right: -24px;
    width: 70px;
    height: 70px;
    background-image: radial-gradient(#0F3D2E 2px, transparent 2px);
    background-size: 10px 10px;
    opacity: 0.3;
    z-index: 0;
    display: none;
  }

  @media (min-width: 1024px) {
    .dots-right { display: block; }
  }

  /* --- Right Content (Feature Grid) --- */
  .features-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 16px;
  }

  @media (min-width: 768px) {
    .features-grid {
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
  }

  .feature-card {
    background-color: white;
    border-radius: 16px;
    padding: 16px; /* Padding thagginchamu */
    display: flex;
    flex-direction: column;
    gap: 10px;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);
    border: 1px solid #F3F4F6;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .feature-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  .feature-icon {
    width: 36px;
    height: 36px;
    background-color: #E8F0EA;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .feature-text h3 {
    font-size: 15px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 4px 0;
  }

  .feature-text p {
    font-size: 12px;
    color: #6B7280;
    line-height: 1.4;
    margin: 0;
  }
`;

// ==========================================
// 2. SVG ICONS
// ==========================================
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const UsersGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const GearIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const BarChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="20" x2="12" y2="10" />
    <line x1="18" y1="20" x2="18" y2="4" />
    <line x1="6" y1="20" x2="6" y2="16" />
  </svg>
);

const ShieldCheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const HandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M11 17a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2z"/>
    <path d="M7 11H3a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4"/>
    <path d="M17 11h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4"/>
    <path d="M11 7V3a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v4"/>
    <path d="M11 17v4a2 2 0 0 0 2 2h0a2 2 0 0 0 2-2v-4"/>
  </svg>
);

const GrowthIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);


const featuresData = [
  {
    icon: <UsersGroupIcon />,
    title: 'Experienced Team',
    desc: 'A skilled team of developers, designers and marketers with industry expertise.'
  },
  {
    icon: <LightbulbIcon />,
    title: 'Strategic Approach',
    desc: 'We focus on understanding your goals and create tailored strategies for real results.'
  },
  {
    icon: <GearIcon />,
    title: 'End-to-End Solutions',
    desc: 'From strategy and design to development and marketing, we handle everything.'
  },
  {
    icon: <BarChartIcon />,
    title: 'Result-Oriented',
    desc: 'Our solutions are built to deliver measurable growth and long-term value.'
  },
  {
    icon: <ShieldCheckIcon />,
    title: 'Transparent Process',
    desc: 'Clear communication, regular updates and complete project transparency.'
  },
  {
    icon: <HandshakeIcon />,
    title: 'Long-Term Partnership',
    desc: 'We believe in building lasting relationships and supporting your growth journey.'
  }
];

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
const WhyChooseSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="why-choose-section">
        <div className="why-container">
          
          {/* --- Left Side --- */}
          <div className="left-content">
            <div className="section-label">
              <span>Why We Are</span>
              <div className="label-line"></div>
            </div>

            <h2 className="main-heading">
              Why Choose <br />
              <span className="highlight-green">AlphaZetaWorld?</span>
            </h2>

            <p className="description">
              We go beyond just delivering services. We become your growth partner, combining strategy, creativity and technology to build solutions that create real impact.
            </p>

            <button className="story-btn">
              Our Story
              <ArrowRightIcon />
            </button>

            {/* Image Block */}
            <div className="image-block-wrapper">
              <div className="image-bg-patch"></div>
              <img 
                src="/Images/why.webp" 
                alt="Team working together" 
                className="main-image"
              />
              
              <div className="growth-badge">
                <div className="icon-box">
                  <GrowthIcon />
                </div>
                <p>Your Growth<br/>Our Priority</p>
              </div>

              <div className="dots-left"></div>
              <div className="dots-right"></div>
            </div>
          </div>

          {/* --- Right Side (Feature Cards) --- */}
          <div className="features-grid">
            {featuresData.map((feature, index) => (
              <div className="feature-card" key={index}>
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <div className="feature-text">
                  <h3>{feature.title}</h3>
                  <p>{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhyChooseSection;