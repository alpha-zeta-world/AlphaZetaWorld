import React from 'react';

// ==========================================
// 1. CSS STYLES
// ==========================================
const styles = `
  .different-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 80px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
  }

  .different-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  /* ============================
     HEADER SECTION
     ============================ */
  .different-header {
    text-align: center;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .different-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .different-label span {
    color: #0F3D2E;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 13px;
  }

  .different-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }

  /* 👈 ఇక్కడ క్లాస్ పేరు 'different-heading' అని మార్చాను */
  .different-heading {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 38px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 16px 0;
    line-height: 1.2;
    letter-spacing: -0.5px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .different-heading { font-size: 52px; }
  }

  .different-highlight {
    color: #0F3D2E;
  }

  .different-description {
    color: #4B5563;
    font-size: 17px;
    line-height: 1.6;
    max-width: 650px;
    margin: 0 auto;
    text-align: center;
  }

  /* ============================
     CARDS GRID
     ============================ */
  .different-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (min-width: 640px) {
    .different-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .different-grid { grid-template-columns: repeat(4, 1fr); gap: 0; }
  }

  /* Individual Card */
  .diff-card {
    display: flex;
    flex-direction: column;
    position: relative;
    padding: 0 24px;
  }

  /* Vertical Divider Line (Desktop only) */
  .diff-card:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 0;
    height: 100%;
    width: 1px;
    background-color: #E5E7EB;
    display: none;
  }

  @media (min-width: 1024px) {
    .diff-card:not(:last-child)::after {
      display: block;
    }
  }

  /* Top Row: Icon + Number */
  .card-top {
    display: flex;
    align-items: center;
    gap: 20px;
    margin-bottom: 24px;
  }

  .icon-wrapper {
    width: 80px;
    height: 80px;
    background-color: #E8F0EA;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }

  .number-wrapper {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .card-number {
    font-size: 28px;
    font-weight: 300;
    color: #9CA3AF;
    line-height: 1;
  }

  .number-line {
    width: 40px;
    height: 1px;
    background-color: #9CA3AF;
  }

  /* Text Content */
  .card-title {
    font-family: Georgia, 'Times New Roman', serif;
    font-size: 22px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 12px 0;
    line-height: 1.3;
  }

  .card-desc {
    font-size: 15px;
    color: #4B5563;
    line-height: 1.6;
    margin: 0;
  }

  /* ============================
     MOBILE ADJUSTMENTS
     ============================ */
  @media (max-width: 1024px) {
    .different-section {
      padding: 60px 16px;
    }
    .different-header {
      margin-bottom: 48px;
    }
    .different-heading { font-size: 32px; }
    .different-description { font-size: 15px; }
    
    .different-grid {
      gap: 48px; 
    }

    .diff-card { 
      padding: 0; 
      padding-bottom: 32px;
      border-bottom: 1px solid #E5E7EB;
    }

    .diff-card:last-child {
      border-bottom: none;
      padding-bottom: 0;
    }

    .card-top { 
      gap: 16px; 
      margin-bottom: 20px;
    }
    .icon-wrapper { 
      width: 70px; 
      height: 70px; 
    }
    .card-title { 
      font-size: 20px; 
      margin-bottom: 10px;
    }
    .card-desc {
      font-size: 14px;
    }
  }
`;

// ==========================================
// 2. SVG ICONS
// ==========================================
const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="9" />
    <circle cx="12" cy="12" r="5" />
    <circle cx="12" cy="12" r="1.5" fill="#0F3D2E" />
  </svg>
);

const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z" />
    <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1" />
  </svg>
);

const SpeedometerIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3.34 19a10 10 0 1 1 17.32 0" />
    <path d="m12 14 4-4" />
    <circle cx="12" cy="14" r="1.5" fill="#0F3D2E" />
    <line x1="5" y1="17" x2="7" y2="17" />
    <line x1="17" y1="17" x2="19" y2="17" />
    <line x1="7" y1="11" x2="8.5" y2="12" />
  </svg>
);

const GrowthChartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 20h16" />
    <rect x="6" y="13" width="3" height="6" rx="0.5" fill="#0F3D2E" />
    <rect x="11" y="10" width="3" height="9" rx="0.5" fill="#0F3D2E" />
    <rect x="16" y="7" width="3" height="12" rx="0.5" fill="#0F3D2E" />
    <path d="M6 9 C 10 5, 14 4, 19 5" />
    <path d="M19 5 L 17 3 M19 5 L 17 7" />
  </svg>
);

// ==========================================
// 3. DATA FOR CARDS
// ==========================================
const diffData = [
  {
    icon: <TargetIcon />,
    number: '01',
    title: 'Business-First Thinking',
    desc: 'We focus on your business goals and create solutions that deliver real, measurable results.'
  },
  {
    icon: <ChatIcon />,
    number: '02',
    title: 'Transparent Communication',
    desc: 'We keep you informed at every step with clear updates, honest feedback and open collaboration.'
  },
  {
    icon: <SpeedometerIcon />,
    number: '03',
    title: 'Fast Execution',
    desc: 'We follow a streamlined process to deliver high-quality solutions on time without compromising on quality.'
  },
  {
    icon: <GrowthChartIcon />,
    number: '04',
    title: 'Scalable Solutions',
    desc: 'We build flexible and future-ready solutions that grow with your business needs.'
  }
];

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
const WhatMakesUsDifferentSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="different-section">
        <div className="different-container">
          
          {/* Header */}
          <div className="different-header">
            <div className="different-label">
              <div className="different-line"></div>
              <span>What Makes Us Different</span>
              <div className="different-line"></div>
            </div>

            {/* 👈 ఇక్కడ క్లాస్ పేరు 'different-heading' అని మార్చాను */}
            <h2 className="different-heading">
              A Smarter Approach to <span className="different-highlight">Real Results</span>
            </h2>

            <p className="different-description">
              We combine business understanding, clear communication and technical expertise to deliver solutions that create long-term value.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="different-grid">
            {diffData.map((item, index) => (
              <div className="diff-card" key={index}>
                
                {/* Icon + Number */}
                <div className="card-top">
                  <div className="icon-wrapper">
                    {item.icon}
                  </div>
                  <div className="number-wrapper">
                    <span className="card-number">{item.number}</span>
                    <div className="number-line"></div>
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="card-title">{item.title}</h3>
                <p className="card-desc">{item.desc}</p>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatMakesUsDifferentSection;