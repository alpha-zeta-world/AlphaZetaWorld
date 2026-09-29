import React from 'react';
import { Heart, Home, ShoppingCart, GraduationCap, Landmark, Rocket } from 'lucide-react';

const IndustriesWeHelp: React.FC = () => {
  const industries = [
    {
      icon: <Heart size={22} strokeWidth={2.5} />,
      title: "Healthcare",
      subtitle: "Hospitals & Clinics"
    },
    {
      icon: <Home size={22} strokeWidth={2.5} />,
      title: "Real Estate",
      subtitle: "Builders & Realtors"
    },
    {
      icon: <ShoppingCart size={22} strokeWidth={2.5} />,
      title: "E-commerce",
      subtitle: "Online Stores"
    },
    {
      icon: <GraduationCap size={22} strokeWidth={2.5} />,
      title: "Education",
      subtitle: "Schools & Colleges"
    },
    {
      icon: <Landmark size={22} strokeWidth={2.5} />,
      title: "Finance",
      subtitle: "Banks & Fintech"
    },
    {
      icon: <Rocket size={22} strokeWidth={2.5} />,
      title: "Startups",
      subtitle: "Innovative Brands"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .iwh-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .iwh-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .iwh-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .iwh-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .iwh-description-wrap {
          display: flex;
          align-items: center;
        }

        .iwh-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 420px;
          margin: 0;
        }

        /* --- Industries Grid --- */
        .iwh-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .iwh-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 24px 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 12px;
        }

        .iwh-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
          border-color: #e5e7eb;
        }

        .iwh-icon-wrap {
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          margin-bottom: 4px;
        }

        .iwh-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .iwh-name {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.2;
        }

        .iwh-type {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 640px) {
          .iwh-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .iwh-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .iwh-title {
            font-size: 40px;
          }

          .iwh-description-wrap {
            justify-content: flex-end;
          }

          .iwh-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>

      <section className="iwh-section">
        <div className="iwh-container">
          
          {/* --- Header Section --- */}
          <div className="iwh-header">
            
            {/* Left: Title */}
            <div>
              <h2 className="iwh-title">
                Industries We Help
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="iwh-description-wrap">
              <p className="iwh-description">
                We work with businesses across different industries, providing 
                customized SEO and AI search solutions for their unique needs.
              </p>
            </div>
            
          </div>

          {/* --- Industries Grid Section --- */}
          <div className="iwh-grid">
            {industries.map((industry, index) => (
              <div key={index} className="iwh-card">
                
                {/* Icon Circle */}
                <div className="iwh-icon-wrap">
                  {industry.icon}
                </div>
                
                {/* Text Content */}
                <div className="iwh-text-wrap">
                  <h3 className="iwh-name">{industry.title}</h3>
                  <p className="iwh-type">{industry.subtitle}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesWeHelp;