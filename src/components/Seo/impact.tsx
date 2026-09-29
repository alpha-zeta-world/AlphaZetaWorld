import React from 'react';
import { TrendingUp, Users, Filter, Trophy } from 'lucide-react';

const RealResults: React.FC = () => {
  const stats = [
    {
      icon: <TrendingUp size={24} strokeWidth={2} />,
      value: "3X",
      label: "Average Traffic Growth"
    },
    {
      icon: <Users size={24} strokeWidth={2} />,
      value: "200+",
      label: "Keywords Ranked"
    },
    {
      icon: <Filter size={24} strokeWidth={2} />,
      value: "70%",
      label: "Increase in Leads"
    },
    {
      icon: <Trophy size={24} strokeWidth={2} />,
      value: "95%",
      label: "Client Satisfaction"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .rr-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .rr-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .rr-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .rr-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .rr-description-wrap {
          display: flex;
          align-items: center;
        }

        .rr-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 400px;
          margin: 0;
        }

        /* --- Stats Grid --- */
        .rr-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 16px;
        }

        .rr-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 16px;
        }

        .rr-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        .rr-icon-wrap {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          flex-shrink: 0;
        }

        .rr-text-wrap {
          display: flex;
          flex-direction: column;
        }

        .rr-value {
          font-size: 24px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 2px 0;
          line-height: 1;
        }

        .rr-label {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          margin: 0;
          line-height: 1.3;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 768px) {
          .rr-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .rr-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .rr-title {
            font-size: 40px;
          }

          .rr-description-wrap {
            justify-content: flex-end;
          }

          .rr-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="rr-section">
        <div className="rr-container">
          
          {/* --- Header Section --- */}
          <div className="rr-header">
            
            {/* Left: Title */}
            <div>
              <h2 className="rr-title">
                Real Results, Measurable Growth
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="rr-description-wrap">
              <p className="rr-description">
                Our SEO and AI search strategies have helped businesses 
                increase visibility, attract more traffic and generate quality leads.
              </p>
            </div>
            
          </div>

          {/* --- Stats Grid Section --- */}
          <div className="rr-grid">
            {stats.map((stat, index) => (
              <div key={index} className="rr-card">
                
                {/* Icon Circle */}
                <div className="rr-icon-wrap">
                  {stat.icon}
                </div>
                
                {/* Text Content */}
                <div className="rr-text-wrap">
                  <h3 className="rr-value">{stat.value}</h3>
                  <p className="rr-label">{stat.label}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default RealResults;