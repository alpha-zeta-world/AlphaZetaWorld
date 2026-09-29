import React from 'react';


const styles = `
  .people-section {
    width: 100%;
    background-color: #FAFAF9;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
    min-height: 500px;
    display: flex;
    align-items: center;
  }

  .people-container {
    width: 100%;
    max-width: 1400px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr;
    position: relative;
    z-index: 10;
  }

  @media (min-width: 1024px) {
    .people-container {
      grid-template-columns: 1fr 1.2fr;
      min-height: 550px;
    }
  }

  
  .people-left {
    padding: 60px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start; 
    text-align: left;       
    z-index: 20;
  }

  @media (min-width: 1024px) {
    .people-left {
      padding: 80px 0 80px 80px;
    }
  }

 
  .section-label {
    display: flex;
    align-items: center;
    justify-content: flex-start; 
    gap: 16px;
    margin-bottom: 24px;
  }

  .section-label span {
    color: #0F3D2E;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 13px;
  }

  .label-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }

 
  .main-heading {
    font-family: 'Georgia', 'Times New Roman', serif;
    font-size: 48px;           
    font-weight: 700;          
    color: #1A1A1A;            
    line-height: 1.1;
    margin: 0 0 24px 0;
    letter-spacing: -1px;
    text-align: left;          
    display: flex;            
    flex-direction: column;    
    align-items: flex-start;   
  }

  
  .main-heading span {
    display: block;          
    text-align: left;        
    width: 100%;               
  }

  .highlight-green {
    color: #0F3D2E;
  }

  .description {
    color: #4B5563;
    font-size: 17px;
    line-height: 1.6;
    margin-bottom: 32px;
    max-width: 450px;
    text-align: left;         
    margin-left: 0;            
    margin-right: 0;
  }

  .cta-button {
    background-color: #0F3D2E;
    color: white;
    padding: 14px 28px;
    border-radius: 8px;
    font-weight: 500;
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    width: fit-content;
    margin: 0;              
  }

  .cta-button:hover {
    background-color: #1a5c46;
    transform: translateY(-2px);
  }

  /* Dotted Pattern */
  .dots-pattern {
    position: absolute;
    bottom: 60px;
    right: 40px;
    width: 100px;
    height: 60px;
    background-image: radial-gradient(#0F3D2E 2px, transparent 2px);
    background-size: 12px 12px;
    opacity: 0.3;
    z-index: 5;
    display: none;
  }

  @media (min-width: 1024px) {
    .dots-pattern { display: block; }
  }

  
  .people-right {
    position: relative;
    width: 100%;
    height: 400px;
    overflow: hidden;
    z-index: 10;
    margin-top: 40px;
  }

  @media (min-width: 1024px) {
    .people-right {
      height: auto;
      min-height: 550px;
      border-top-left-radius: 150px;
      border-bottom-left-radius: 150px;
      box-shadow: -10px 0 30px rgba(0,0,0,0.05);
      margin-top: 0;
    }
  }

  .people-right img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  /* =========================================
     TABLET / MOBILE  (≤1024px)
     Height తగ్గించబడింది: 350px → 260px
  ========================================= */
  @media (max-width: 1024px) {
    .people-left { padding: 40px 20px; }
    .main-heading { font-size: 34px; }
    .description { font-size: 15px; }
    .people-right { height: 260px; }
  }

  /* =========================================
     SMALL PHONES  (≤480px)
     ఇంకా తగ్గించబడింది: 260px → 200px
  ========================================= */
  @media (max-width: 480px) {
    .people-left { padding: 32px 18px; }
    .main-heading { font-size: 28px; }
    .description { font-size: 14px; }
    .people-right { height: 200px; }
  }
`;

// ==========================================
// 2. SVG ICONS
// ==========================================
const ArrowRightIcon: React.FC = () => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    width="18" 
    height="18" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
const PeopleBehindSection: React.FC = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="people-section">
        <div className="people-container">
          
          {/* Left Section */}
          <div className="people-left">
            
            <div className="section-label">
              <span>About Us</span>
              <div className="label-line"></div>
            </div>

          
            <h1 className="main-heading">
              <span>PEOPLE BEHIND</span>
              <span className="highlight-green">DIGITAL</span>
              <span className="highlight-green">POSSIBILITIES</span>
            </h1>

            <p className="description">
              We are a team of passionate creators, developers and strategists building digital solutions that help businesses grow, innovate and make a real impact.
            </p>

            <button className="cta-button">
              Get to Know Us
              <ArrowRightIcon />
            </button>

            <div className="dots-pattern"></div>
          </div>

          {/* Right Section */}
          <div className="people-right">
            <img 
              src="/Images/abouthero.png" 
              alt="Office Workspace" 
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default PeopleBehindSection;