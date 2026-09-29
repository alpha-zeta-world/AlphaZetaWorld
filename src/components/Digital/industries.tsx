import React from 'react';
import { Heart, Home, ShoppingCart, GraduationCap, Landmark, Rocket } from 'lucide-react';

const IndustriesWeServe: React.FC = () => {
  const industries = [
    {
      icon: <Heart size={22} strokeWidth={2.5} />,
      title: "Healthcare",
      subtitle: "Hospitals, Clinics & Wellness Brands"
    },
    {
      icon: <Home size={22} strokeWidth={2.5} />,
      title: "Real Estate",
      subtitle: "Builders, Realtors & Property Platforms"
    },
    {
      icon: <ShoppingCart size={22} strokeWidth={2.5} />,
      title: "E-commerce",
      subtitle: "Online Stores & Marketplaces"
    },
    {
      icon: <GraduationCap size={22} strokeWidth={2.5} />,
      title: "Education",
      subtitle: "Schools, Colleges & EdTech Brands"
    },
    {
      icon: <Landmark size={22} strokeWidth={2.5} />,
      title: "Finance",
      subtitle: "Banks, Fintech & Financial Services"
    },
    {
      icon: <Rocket size={22} strokeWidth={2.5} />,
      title: "Startups",
      subtitle: "Innovative Ideas to Scalable Brands"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .iws-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .iws-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .iws-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .iws-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .iws-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .iws-description-wrap {
          display: flex;
          align-items: flex-start;
        }

        .iws-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 420px;
          margin: 0;
        }

        /* --- Industries Grid --- */
        .iws-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .iws-card {
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

        .iws-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
          border-color: #e5e7eb;
        }

        .iws-icon-wrap {
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

        .iws-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .iws-name {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.2;
        }

        .iws-type {
          font-size: 12px;
          color: #6b7280;
          font-weight: 500;
          margin: 0;
          line-height: 1.4;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 640px) {
          .iws-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .iws-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: flex-start;
          }

          .iws-title {
            font-size: 40px;
          }

          .iws-description-wrap {
            justify-content: flex-end;
            padding-top: 8px;
          }

          .iws-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>

      <section className="iws-section">
        <div className="iws-container">
          
          {/* --- Header Section --- */}
          <div className="iws-header">
            
            {/* Left: Title */}
            <div>
              <span className="iws-subtitle">Industries We Help</span>
              <h2 className="iws-title">
                Industries We Serve
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="iws-description-wrap">
              <p className="iws-description">
                We work with businesses across different industries, providing 
                customized digital solutions for their unique needs.
              </p>
            </div>
            
          </div>

          {/* --- Industries Grid Section --- */}
          <div className="iws-grid">
            {industries.map((industry, index) => (
              <div key={index} className="iws-card">
                
                {/* Icon Circle */}
                <div className="iws-icon-wrap">
                  {industry.icon}
                </div>
                
                {/* Text Content */}
                <div className="iws-text-wrap">
                  <h3 className="iws-name">{industry.title}</h3>
                  <p className="iws-type">{industry.subtitle}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default IndustriesWeServe;