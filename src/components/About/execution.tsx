import React from 'react';

// ==========================================
// 1. CSS STYLES
// ==========================================
const styles = `
  .mvg-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 40px 20px 60px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
  }

  .mvg-container {
    max-width: 1200px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }

  @media (min-width: 768px) {
    .mvg-container {
      grid-template-columns: repeat(3, 1fr);
      gap: 24px;
    }
  }

  /* Card Style */
  .mvg-card {
    background-color: #FFFFFF;
    border-radius: 16px;
    padding: 32px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    box-shadow: 0 4px 20px -2px rgba(0, 0, 0, 0.05);
    border: 1px solid #F3F4F6;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }

  .mvg-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 25px -3px rgba(0, 0, 0, 0.08);
  }

  /* Icon Circle */
  .mvg-icon-wrapper {
    width: 64px;
    height: 64px;
    background-color: #E8F0EA; /* Light green bg */
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
  }

  /* Text Content */
  .mvg-title {
    font-size: 20px;
    font-weight: 700;
    color: #111827;
    margin: 0 0 12px 0;
  }

  .mvg-desc {
    font-size: 14px;
    color: #6B7280;
    line-height: 1.6;
    margin: 0;
    max-width: 280px;
  }
`;


const TargetIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
    <path d="m15 9 6-6" />
    <path d="M2 22l6-6" />
  </svg>
);

const EyeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const DiamondIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#0F3D2E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 3h12l4 6-10 13L2 9Z" />
    <path d="M11 3 8 9l4 13 4-13-3-6" />
    <path d="M2 9h20" />
  </svg>
);


const mvgData = [
  {
    icon: <TargetIcon />,
    title: 'Our Mission',
    desc: 'To help businesses grow through innovative, reliable and result-driven digital solutions.'
  },
  {
    icon: <EyeIcon />,
    title: 'Our Vision',
    desc: 'To be a global digital partner known for creativity, quality and long-term client success.'
  },
  {
    icon: <DiamondIcon />,
    title: 'Our Goal',
    desc: 'To create meaningful digital experiences that add real value to businesses and their users.'
  }
];


const MissionVisionGoalSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="mvg-section">
        <div className="mvg-container">
          {mvgData.map((item, index) => (
            <div className="mvg-card" key={index}>
              <div className="mvg-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="mvg-title">{item.title}</h3>
              <p className="mvg-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default MissionVisionGoalSection;