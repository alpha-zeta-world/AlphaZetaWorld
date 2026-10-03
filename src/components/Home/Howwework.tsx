import React from 'react';

// ==========================================
// 1. CSS STYLES
// ==========================================
const styles = `
  .process-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 80px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
    position: relative;
  }

  /* Background decorative curves */
  .process-section::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 300px;
    height: 300px;
    border: 1px solid #E5E7EB;
    border-radius: 50%;
    transform: translate(-50%, 50%);
    pointer-events: none;
  }
  .process-section::after {
    content: '';
    position: absolute;
    top: 20%;
    left: -100px;
    width: 200px;
    height: 200px;
    border: 1px solid #E5E7EB;
    border-radius: 50%;
    pointer-events: none;
  }

  .process-container {
    max-width: 1280px;
    margin: 0 auto;
    position: relative;
    z-index: 10;
  }

  /* Header Section */
  .process-header {
    text-align: center;
    margin-bottom: 64px;
    position: relative;
  }

  .process-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .process-label span {
    color: #0F3D2E;
    font-weight: bold;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 13px;
  }

  .label-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }

  .process-title {
    font-size: 36px;
    font-weight: 800;
    color: #111827;
    margin: 0 0 16px 0;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .process-title { font-size: 46px; }
  }

  .highlight-green {
    color: #0F3D2E;
  }

  .process-subtitle {
    color: #6B7280;
    font-size: 18px;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.6;
  }

  /* Handwritten Note */
  .handwritten-note {
    position: absolute;
    top: -20px;
    right: 20px;
    display: none;
    transform: rotate(5deg);
  }

  @media (min-width: 1024px) {
    .handwritten-note { display: block; }
  }

  .handwritten-note .text {
    font-family: 'Brush Script MT', cursive;
    font-size: 24px;
    color: #1F2937;
    line-height: 1;
    text-align: center;
  }

  .handwritten-note svg {
    margin-left: 40px;
    margin-top: -5px;
  }

  /* Steps Grid */
  .steps-wrapper {
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;
  }

  @media (min-width: 1024px) {
    .steps-wrapper {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;
      gap: 0;
    }
  }

  .step-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    position: relative;
    width: 100%;
    max-width: 220px;
  }

  /* Image Wrapper */
  .step-image-wrapper {
    position: relative;
    width: 160px;
    height: 160px;
    margin-bottom: 24px;
  }

  .step-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 50%; /* Perfect Circle */
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.15); /* Subtle shadow to lift it */
    position: relative;
    z-index: 2;
  }

  /* Step Number Badge */
  .step-number {
    position: absolute;
    bottom: 5px;
    left: 5px;
    background-color: #0F3D2E;
    color: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    font-size: 16px;
    z-index: 3;
    border: 3px solid #FAFAF9;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  }

  .step-title {
    font-size: 18px;
    font-weight: 700;
    color: #111827;
    margin-bottom: 12px;
    margin-top: 0;
  }

  .step-desc {
    font-size: 14px;
    color: #4B5563;
    line-height: 1.5;
    margin: 0;
  }

  /* Connecting Arrow (Desktop Only) */
  .connector {
    display: none;
  }

  @media (min-width: 1024px) {
    .connector {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 70px;
      right: -40px;
      width: 80px;
      z-index: 5;
    }
    
    .step-item:last-child .connector {
      display: none;
    }
  }

  .connector-line {
    width: 100%;
    height: 1px;
    border-top: 2px dashed #9CA3AF;
    position: relative;
  }

  .connector-arrow {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid #E5E7EB;
    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
  }

  /* For mobile connecting lines */
  @media (max-width: 1023px) {
    .step-item:not(:last-child)::after {
      content: '';
      position: absolute;
      bottom: -35px;
      left: 50%;
      transform: translateX(-50%);
      width: 2px;
      height: 30px;
      border-left: 2px dashed #9CA3AF;
    }
  }
`;

// ==========================================
// 2. SVG ICONS
// ==========================================
const ArrowRightSmall = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

const HandDrawnArrow = () => (
  <svg width="60" height="50" viewBox="0 0 60 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 5 C 55 15, 40 25, 30 30 C 20 35, 15 40, 10 45" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
    <path d="M10 45 L 18 42 M10 45 L 15 38" stroke="#1F2937" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
  </svg>
);

// ==========================================
// 3. DATA FOR STEPS
// ==========================================
const stepsData = [
  {
    id: '01',
    title: 'Discover & Understand',
    desc: 'We learn about your business, goals and target audience to understand your needs.',
    img: '/Images/pro1.webp'
  },
  {
    id: '02',
    title: 'Plan & Strategize',
    desc: 'We create a tailored strategy and roadmap with the right technologies and approach.',
    img: '/Images/pro2.webp'
  },
  {
    id: '03',
    title: 'Design & Develop',
    desc: 'Our team designs and builds high-quality, scalable and performance-driven solutions.',
    img: '/Images/pro3.webp'
  },
  {
    id: '04',
    title: 'Test & Optimize',
    desc: 'We rigorously test for performance, security and usability to ensure the best results.',
    img: '/Images/pro4.webp'
  },
  {
    id: '05',
    title: 'Launch & Support',
    desc: 'We deploy your solution and provide ongoing support to help you grow continuously.',
    img: '/Images/pro5.webp'
  }
];

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
const ProcessSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="process-section">
        <div className="process-container">
          
          {/* Header */}
          <div className="process-header">
            <div className="process-label">
              <div className="label-line"></div>
              <span>How We Work</span>
              <div className="label-line"></div>
            </div>
            
            <h2 className="process-title">
              A Simple Process. <span className="highlight-green">Real Results.</span>
            </h2>
            
            <p className="process-subtitle">
              We follow a clear and collaborative process to turn your ideas into impactful digital solutions.
            </p>

            {/* Handwritten Note */}
            <div className="handwritten-note">
              <div className="text">From<br/>Idea to Impact</div>
              <HandDrawnArrow />
            </div>
          </div>

          {/* Steps */}
          <div className="steps-wrapper">
            {stepsData.map((step, index) => (
              <div className="step-item" key={index}>
                
                {/* Image and Number */}
                <div className="step-image-wrapper">
                  <img src={step.img} alt={step.title} className="step-img" />
                  <div className="step-number">{step.id}</div>
                </div>

                {/* Text Content */}
                <h3 className="step-title">{step.title}</h3>
                <p className="step-desc">{step.desc}</p>

                {/* Connector Arrow (Not on last item) */}
                {index !== stepsData.length - 1 && (
                  <div className="connector">
                    <div className="connector-line">
                      <div className="connector-arrow">
                        <ArrowRightSmall />
                      </div>
                    </div>
                  </div>
                )}
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ProcessSection;