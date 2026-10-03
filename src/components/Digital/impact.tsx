import React from 'react';
import { BarChart3, Users, Filter, TrendingUp } from 'lucide-react';

const OurImpact: React.FC = () => {
  const impacts = [
    {
      icon: <BarChart3 size={24} strokeWidth={2} />,
      value: "3X",
      title: "Average Traffic Growth",
      description: "More visibility, more opportunities."
    },
    {
      icon: <Users size={24} strokeWidth={2} />,
      value: "2.5X",
      title: "Higher Engagement",
      description: "Stronger connection with your audience."
    },
    {
      icon: <Filter size={24} strokeWidth={2} />,
      value: "40%",
      title: "Increase in Lead Generation",
      description: "Turn visitors into valuable customers."
    },
    {
      icon: <TrendingUp size={24} strokeWidth={2} />,
      value: "4.8X",
      title: "Higher ROI",
      description: "Data-driven strategies that deliver real results."
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .oi-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 60px 16px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .oi-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .oi-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
          margin-bottom: 36px;
        }

        .oi-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 14px;
        }

        .oi-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
        }

        .oi-line {
          width: 32px;
          height: 2px;
          background-color: rgba(26, 77, 63, 0.3);
        }

        .oi-title {
          font-size: 24px;
          line-height: 1.25;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
          max-width: 100%;
        }

        .oi-title br {
          display: none;
        }

        .oi-description-wrap {
          display: flex;
          align-items: flex-start;
        }

        .oi-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 100%;
          margin: 0;
        }

        /* --- Impact Grid --- */
        .oi-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .oi-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 24px 20px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          
    
          align-items: center;
          text-align: center;
        }

        .oi-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
          border-color: #e5e7eb;
        }

        .oi-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          margin-bottom: 16px;
          flex-shrink: 0;
        }

        .oi-value {
          font-size: 26px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 6px 0;
          line-height: 1;
        }

        .oi-card-title {
          font-size: 14px;
          font-weight: 600;
          color: #374151;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .oi-card-desc {
          font-size: 13px;
          color: #6b7280;
          line-height: 1.5;
          margin: 0;
        }

        /* --- MEDIA QUERIES (Responsive) --- */

        /* Tablet: 2 columns */
        @media (min-width: 600px) {
          .oi-section {
            padding: 70px 24px;
          }

          .oi-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 20px;
          }

          .oi-header {
            gap: 24px;
            margin-bottom: 48px;
          }

          .oi-title {
            font-size: 30px;
          }

          .oi-title br {
            display: inline;
          }
        }

        /* Desktop: 4 columns - Content Left Aligned */
        @media (min-width: 1024px) {
          .oi-section {
            padding: 80px 24px;
          }

          .oi-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: flex-start;
          }

          .oi-title {
            font-size: 40px;
            max-width: 400px;
          }

          .oi-description-wrap {
            justify-content: flex-end;
            padding-top: 8px;
          }

          .oi-description {
            max-width: 450px;
          }

          .oi-grid {
            grid-template-columns: repeat(4, 1fr);
          }

          
          .oi-card {
            align-items: flex-start;
            text-align: left;
            padding: 24px;
          }
        }
      `}</style>

      <section className="oi-section">
        <div className="oi-container">
          
          {/* --- Header Section --- */}
          <div className="oi-header">
            
            {/* Left: Title */}
            <div>
              <div className="oi-subtitle-wrap">
                <span className="oi-subtitle">Our Impact</span>
                <div className="oi-line"></div>
              </div>
              
              <h2 className="oi-title">
                Real Results That Drive  Business Growth
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="oi-description-wrap">
              <p className="oi-description">
                Our digital solutions have helped businesses achieve higher 
                visibility, better engagement and measurable growth.
              </p>
            </div>
            
          </div>

          {/* --- Impact Grid Section --- */}
          <div className="oi-grid">
            {impacts.map((item, index) => (
              <div key={index} className="oi-card">
                
                {/* Icon Circle */}
                <div className="oi-icon-wrap">
                  {item.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="oi-value">{item.value}</h3>
                <h4 className="oi-card-title">{item.title}</h4>
                <p className="oi-card-desc">{item.description}</p>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default OurImpact;