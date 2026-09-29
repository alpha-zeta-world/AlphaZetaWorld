import React from 'react';
import { MessagesSquare, Lightbulb, Settings, TrendingUp } from 'lucide-react';

const HowWeWork: React.FC = () => {
  const steps = [
    {
      number: "01",
      icon: <MessagesSquare size={24} strokeWidth={2} />,
      title: "Understand Your Goals",
      description: "We learn about your business, audience and objectives."
    },
    {
      number: "02",
      icon: <Lightbulb size={24} strokeWidth={2} />,
      title: "Create Strategy",
      description: "We design a tailored digital strategy for your growth."
    },
    {
      number: "03",
      icon: <Settings size={24} strokeWidth={2} />,
      title: "Execute & Optimize",
      description: "We implement and optimize for maximum results."
    },
    {
      number: "04",
      icon: <TrendingUp size={24} strokeWidth={2} />,
      title: "Measure & Grow",
      description: "We track performance and scale what works best."
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .hww-section {
          width: 100%;
          background-color: #FAFAFA;
          /* మొబైల్ లో padding తగ్గించాను */
          padding: 50px 16px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .hww-container {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: flex-start;
        }

        /* --- LEFT COLUMN (Content) --- */
        .hww-content {
          max-width: 100%;
        }

        .hww-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .hww-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
        }

        .hww-line {
          width: 32px;
          height: 2px;
          background-color: rgba(26, 77, 63, 0.3);
        }

        .hww-title {
          font-size: 28px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0 0 14px 0;
          letter-spacing: -0.02em;
        }

        .hww-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        /* --- RIGHT COLUMN (Process Steps) --- */
        .hww-process {
          display: flex;
          flex-direction: column;
          gap: 24px;
          width: 100%;
        }

        .hww-step-wrapper {
          display: flex;
          flex-direction: column;
          width: 100%;
        }

        .hww-step {
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          gap: 16px;
          width: 100%;
          position: relative;
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 12px;
          padding: 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
        }

        /* Step Number (01, 02...) - Top Right */
        .hww-step-number {
          position: absolute;
          top: 16px;
          right: 20px;
          font-size: 13px;
          font-weight: 600;
          color: #9ca3af;
          letter-spacing: 0.05em;
          z-index: 2;
        }

        /* Icon Circle */
        .hww-icon-circle {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          flex-shrink: 0;
          border: 1px solid #f3f4f6;
        }

        /* Text Wrap */
        .hww-step-text-wrap {
          display: flex;
          flex-direction: column;
          padding-top: 4px;
          padding-right: 30px; /* Number కి space ఇవ్వడానికి */
        }

        .hww-step-title {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
          line-height: 1.3;
        }

        .hww-step-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        /* Hide dot on mobile */
        .hww-dot {
          display: none;
        }

        /* --- MEDIA QUERIES (Responsive) --- */

        /* Tablet */
        @media (min-width: 600px) {
          .hww-section {
            padding: 60px 24px;
          }

          .hww-container {
            gap: 40px;
          }

          .hww-title {
            font-size: 32px;
          }
        }

        /* Desktop: Horizontal Layout */
        @media (min-width: 1024px) {
          .hww-section {
            padding: 80px 24px;
          }

          .hww-container {
            grid-template-columns: 1fr 2.5fr;
            gap: 60px;
          }

          .hww-content {
            max-width: 400px;
          }

          .hww-title {
            font-size: 42px;
          }

          .hww-process {
            flex-direction: row;
            align-items: flex-start;
            justify-content: space-between;
            gap: 0;
          }

          .hww-step-wrapper {
            flex-direction: row;
            align-items: flex-start;
            flex: 1;
          }

          .hww-step {
            flex-direction: column;
            align-items: center;
            text-align: center;
            background: transparent;
            border: none;
            box-shadow: none;
            padding: 0;
            flex: 1;
            min-width: 0;
            gap: 0;
          }

          .hww-step-number {
            position: relative;
            top: auto;
            right: auto;
            font-size: 14px;
            font-weight: 500;
            margin-bottom: 12px;
            z-index: 2;
          }

          .hww-icon-circle {
            width: 72px;
            height: 72px;
            background-color: white;
            margin-bottom: 20px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.04);
          }

          .hww-step-text-wrap {
            padding-top: 0;
            padding-right: 0;
          }

          .hww-step-title {
            font-size: 14px;
            margin: 0 0 8px 0;
            max-width: 140px;
          }

          .hww-step-desc {
            font-size: 12px;
            max-width: 160px;
          }

          /* Show dot on desktop */
          .hww-dot {
            display: flex;
            align-items: center;
            justify-content: center;
            color: #1A4D3F;
            margin-top: 40px;
            padding: 0 4px;
            flex-shrink: 0;
          }

          .hww-dot::before {
            content: '';
            width: 5px;
            height: 5px;
            background-color: #1A4D3F;
            border-radius: 50%;
          }
        }

        /* Large Desktop */
        @media (min-width: 1200px) {
          .hww-step-title {
            max-width: 150px;
          }

          .hww-step-desc {
            max-width: 170px;
          }
        }
      `}</style>

      <section className="hww-section">
        <div className="hww-container">
          
          {/* --- LEFT COLUMN (Content) --- */}
          <div className="hww-content">
            <div className="hww-subtitle-wrap">
              <span className="hww-subtitle">Our Process</span>
              <div className="hww-line"></div>
            </div>
            
            <h2 className="hww-title">
              How We Work
            </h2>
            
            <p className="hww-description">
              A simple and transparent process to deliver digital 
              solutions that create real impact.
            </p>
          </div>

          {/* --- RIGHT COLUMN (Process Steps) --- */}
          <div className="hww-process">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="hww-step-wrapper">
                  <div className="hww-step">
                    
                    {/* Step Number */}
                    <div className="hww-step-number">{step.number}</div>
                    
                    {/* Icon Circle */}
                    <div className="hww-icon-circle">
                      {step.icon}
                    </div>
                    
                    {/* Text Wrapper */}
                    <div className="hww-step-text-wrap">
                      <h3 className="hww-step-title">{step.title}</h3>
                      <p className="hww-step-desc">{step.description}</p>
                    </div>
                    
                  </div>
                </div>
                
                {/* Dot (Don't show after last step) */}
                {index < steps.length - 1 && (
                  <div className="hww-dot"></div>
                )}
              </React.Fragment>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default HowWeWork;