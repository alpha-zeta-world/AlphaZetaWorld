import React from 'react';
import { Megaphone, Settings, TrendingUp, Users } from 'lucide-react';

const DigitalSolutions: React.FC = () => {
  const features = [
    {
      icon: <Megaphone size={22} strokeWidth={2.5} />,
      title: "Strategy & Planning",
      description: "Understand your business goals and create a customized digital strategy."
    },
    {
      icon: <Settings size={22} strokeWidth={2.5} />,
      title: "Execution & Optimization",
      description: "Implement data-driven campaigns and continuously optimize for better results."
    },
    {
      icon: <TrendingUp size={22} strokeWidth={2.5} />,
      title: "Growth & Scale",
      description: "Help your brand reach the right audience and scale sustainably."
    },
    {
      icon: <Users size={22} strokeWidth={2.5} />,
      title: "Ongoing Support",
      description: "Continuous monitoring, reporting and support to ensure long-term success."
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .ds-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .ds-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .ds-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }

        .ds-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .ds-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
        }

        .ds-line {
          width: 32px;
          height: 2px;
          background-color: rgba(26, 77, 63, 0.3);
        }

        .ds-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .ds-description-wrap {
          display: flex;
          align-items: center;
        }

        .ds-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 450px;
          margin: 0;
        }

        /* --- Features Grid --- */
        .ds-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 60px;
        }

        .ds-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .ds-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
          border-color: #e5e7eb;
        }

        .ds-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          margin-bottom: 20px;
        }

        .ds-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .ds-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        /* --- Bottom Strip (Our Digital Solutions) --- */
        .ds-bottom-strip {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid #e5e7eb;
          flex-wrap: wrap;
          gap: 16px;
        }

        .ds-bottom-title {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #6b7280;
          text-transform: uppercase;
          margin: 0;
        }

        .ds-bottom-desc {
          font-size: 14px;
          color: #6b7280;
          margin: 0;
          text-align: right;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 768px) {
          .ds-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .ds-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .ds-title {
            font-size: 40px;
          }

          .ds-description-wrap {
            justify-content: flex-end;
          }

          .ds-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="ds-section">
        <div className="ds-container">
          
          {/* --- Top Header Section --- */}
          <div className="ds-header">
            
            {/* Left: Title */}
            <div>
              <div className="ds-subtitle-wrap">
                <span className="ds-subtitle">What We Do</span>
                <div className="ds-line"></div>
              </div>
              
              <h2 className="ds-title">
                End-to-End Digital Solutions <br />
                for Modern Businesses
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="ds-description-wrap">
              <p className="ds-description">
                From strategy to execution, we help you build a strong digital 
                presence, attract the right audience and achieve measurable results 
                through innovative and effective solutions.
              </p>
            </div>
            
          </div>

          {/* --- Features Grid Section --- */}
          <div className="ds-grid">
            {features.map((feature, index) => (
              <div key={index} className="ds-card">
                
                {/* Icon Circle */}
                <div className="ds-icon-wrap">
                  {feature.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="ds-card-title">{feature.title}</h3>
                <p className="ds-card-desc">{feature.description}</p>
                
              </div>
            ))}
          </div>

          

        </div>
      </section>
    </>
  );
};

export default DigitalSolutions;