import React from 'react';

// ==========================================
// 1. CSS STYLES
// ==========================================
const styles = `
  .values-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 60px 20px 80px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
  }

  .values-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  /* ============================
     HEADER SECTION
     ============================ */
  .values-header {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
    margin-bottom: 56px;
    align-items: end;
  }

  @media (min-width: 1024px) {
    .values-header {
      grid-template-columns: 1fr 1fr;
      gap: 48px;
    }
  }


  .values-header-left {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }


  .values-label {
    display: flex;
    align-items: center;
    gap: 16px;
  }

  .values-label span {
    color: #0F3D2E;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 13px;
  }


  .values-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }


  .values-heading {
    font-size: 40px;
    font-weight: 800;
    color: #111827;
    margin: 0;
    line-height: 1.1;
    letter-spacing: -1px;
  }

  @media (min-width: 768px) {
    .values-heading { font-size: 52px; }
  }

  
  .values-header-right {
    display: flex;
    align-items: flex-end;
  }

  .values-description {
    color: #4B5563;
    font-size: 16px;
    line-height: 1.6;
    margin: 0;
    max-width: 480px;
  }

  /* ============================
     VALUES GRID
     ============================ */
  .values-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media (min-width: 640px) {
    .values-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .values-grid { grid-template-columns: repeat(4, 1fr); gap: 24px; }
  }

  /* Individual Value Item */
  .value-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    padding: 0 16px;
  }

  /* Vertical Divider Line (Desktop only) */
  .value-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: -12px;
    top: 20%;
    height: 60%;
    width: 1px;
    background-color: #E5E7EB;
    display: none;
  }

  @media (min-width: 1024px) {
    .value-item:not(:last-child)::after {
      display: block;
    }
  }

  .value-icon-wrapper {
    width: 72px;
    height: 72px;
    background-color: #E8F0EA;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    transition: transform 0.3s ease;
  }

  .value-item:hover .value-icon-wrapper {
    transform: translateY(-5px);
  }

  .value-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 10px 0;
  }

  .value-desc {
    font-size: 14px;
    color: #6B7280;
    line-height: 1.6;
    margin: 0;
    max-width: 240px;
  }
`;

// ==========================================
// 2. SVG ICONS
// ==========================================
const LightbulbIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-1 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
    <path d="M9 18h6" />
    <path d="M10 22h4" />
  </svg>
);

const UsersGroupIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

const HeartHandshakeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66" />
    <path d="m18 15-2-2" />
    <path d="m15 18-2-2" />
  </svg>
);


const valuesData = [
  {
    icon: <LightbulbIcon />,
    title: 'Innovation',
    desc: 'We embrace new ideas and technologies to solve real problems.'
  },
  {
    icon: <UsersGroupIcon />,
    title: 'Transparency',
    desc: 'We believe in clear communication and honest collaboration.'
  },
  {
    icon: <AwardIcon />,
    title: 'Excellence',
    desc: 'We are committed to delivering high-quality work in everything we do.'
  },
  {
    icon: <HeartHandshakeIcon />,
    title: 'Client Success',
    desc: 'Your growth is our success and we work as your long-term partner.'
  }
];

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
const OurValuesSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="values-section">
        <div className="values-container">
          
          {/* Header */}
          <div className="values-header">
            
            <div className="values-header-left">
         
              <div className="values-label">
                <span>Our Values</span>
                <div className="values-line"></div>
              </div>
       
              <h2 className="values-heading">
                What We Stand For
              </h2>
            </div>

           
            <div className="values-header-right">
            
              <p className="values-description">
                Our values guide everything we do — from how we work with clients to how we build products. They keep us focused on creating long-term impact.
              </p>
            </div>
          </div>

          {/* Values Grid */}
          <div className="values-grid">
            {valuesData.map((value, index) => (
              <div className="value-item" key={index}>
                <div className="value-icon-wrapper">
                  {value.icon}
                </div>
                <h3 className="value-title">{value.title}</h3>
                <p className="value-desc">{value.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default OurValuesSection;