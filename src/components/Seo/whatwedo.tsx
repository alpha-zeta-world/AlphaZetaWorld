import React from 'react';
import { Search, Target, BarChart3, FileText } from 'lucide-react';

const WhatWeDo: React.FC = () => {
  const services = [
    {
      icon: <Search size={22} strokeWidth={2.5} />,
      title: "Website Analysis",
      description: "In-depth audit to identify opportunities and technical issues."
    },
    {
      icon: <Target size={22} strokeWidth={2.5} />,
      title: "Strategy Planning",
      description: "Custom SEO & AI search strategy based on your business goals."
    },
    {
      icon: <BarChart3 size={22} strokeWidth={2.5} />,
      title: "Implementation",
      description: "On-page, off-page and technical SEO execution."
    },
    {
      icon: <FileText size={22} strokeWidth={2.5} />,
      title: "Monitoring & Reporting",
      description: "Regular reports with insights and continuous improvement."
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .wwd-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .wwd-container {
          max-width: 1200px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .wwd-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          margin-bottom: 56px;
        }

        .wwd-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .wwd-subtitle {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
        }

        .wwd-line {
          width: 32px;
          height: 2px;
          background-color: rgba(26, 77, 63, 0.3);
        }

        .wwd-title {
          font-size: 36px;
          line-height: 1.15;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .wwd-title .highlight {
          color: #1A4D3F;
        }

        .wwd-description-wrap {
          display: flex;
          align-items: flex-start;
        }

        .wwd-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 500px;
          margin: 0;
        }

        /* --- Cards Grid --- */
        .wwd-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .wwd-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 12px;
          padding: 24px;
          box-shadow: 0 2px 10px -3px rgba(0, 0, 0, 0.05);
          transition: all 0.3s ease;
        }

        .wwd-card:hover {
          box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
          transform: translateY(-2px);
        }

        .wwd-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          margin-bottom: 24px;
        }

        .wwd-card-title {
          font-size: 17px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 12px 0;
        }

        .wwd-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 768px) {
          .wwd-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .wwd-header {
            grid-template-columns: 1fr 1fr;
            gap: 80px;
            align-items: flex-start;
          }

          .wwd-title {
            font-size: 44px;
          }

          .wwd-description-wrap {
            padding-top: 48px; /* కుడి వైపు పేరాగ్రాఫ్ కొద్దిగా కిందకి */
          }

          .wwd-description {
            font-size: 16px;
          }

          .wwd-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="wwd-section">
        <div className="wwd-container">
          
          {/* --- Header Section --- */}
          <div className="wwd-header">
            
            {/* Left: Title */}
            <div>
              <div className="wwd-subtitle-wrap">
                <span className="wwd-subtitle">What We Do</span>
                <div className="wwd-line"></div>
              </div>
              
              <h2 className="wwd-title">
                Grow Your Business <br />
                with SEO & <span className="highlight">AI Search</span>
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="wwd-description-wrap">
              <p className="wwd-description">
                We combine proven SEO strategies with AI search optimization to improve 
                your online visibility, attract high-quality traffic and keep your brand 
                ahead of the competition.
              </p>
            </div>
            
          </div>

          {/* --- Cards Grid Section --- */}
          <div className="wwd-grid">
            {services.map((service, index) => (
              <div key={index} className="wwd-card">
                
                {/* Icon Circle */}
                <div className="wwd-icon-wrap">
                  {service.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="wwd-card-title">{service.title}</h3>
                <p className="wwd-card-desc">{service.description}</p>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default WhatWeDo;