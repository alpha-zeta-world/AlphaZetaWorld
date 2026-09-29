import React from 'react';
import { 
  Monitor, 
  BarChart2, 
  PenTool, 
  Users, 
  FileText, 
  PieChart, 
  ArrowRight 
} from 'lucide-react';

const ServicesWeOffer: React.FC = () => {
  const services = [
    {
      icon: <Monitor size={22} strokeWidth={2.5} />,
      title: "Digital Marketing",
      description: "SEO, social media, paid ads and content marketing to boost your online presence."
    },
    {
      icon: <BarChart2 size={22} strokeWidth={2.5} />,
      title: "Performance Marketing",
      description: "Data-driven campaigns focused on measurable results and higher ROI."
    },
    {
      icon: <PenTool size={22} strokeWidth={2.5} />,
      title: "Brand Strategy & Consulting",
      description: "Build a strong brand identity and positioning for long-term growth."
    },
    {
      icon: <Users size={22} strokeWidth={2.5} />,
      title: "Social Media Management",
      description: "Engage your audience with creative content and consistent brand communication."
    },
    {
      icon: <FileText size={22} strokeWidth={2.5} />,
      title: "Content Creation",
      description: "High-quality content that connects with your audience and drives action."
    },
    {
      icon: <PieChart size={22} strokeWidth={2.5} />,
      title: "Analytics & Reporting",
      description: "Track performance with detailed reports and insights for continuous improvement."
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .swo-section {
          width: 100%;
          background-color: #FAFAFA;
          /* Gap తగ్గించడానికి padding-top తగ్గించాను */
          padding: 10px 24px 60px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .swo-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .swo-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .swo-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
          margin-bottom: 12px;
          display: block;
        }

        .swo-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .swo-description-wrap {
          display: flex;
          align-items: center;
        }

        .swo-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 450px;
          margin: 0;
        }

        /* --- Services Grid --- */
        .swo-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .swo-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 10px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
          cursor: pointer;
        }

        /* HOVER EFFECT: Card becomes Dark Green */
        .swo-card:hover {
          background-color: #1A4D3F;
          border-color: #1A4D3F;
          box-shadow: 0 10px 25px rgba(26, 77, 63, 0.3);
          transform: translateY(-4px);
        }

        .swo-icon-wrap {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background-color: #E8F3EF;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #1A4D3F;
          margin-bottom: 20px;
          transition: all 0.3s ease;
        }

        /* HOVER: Icon Circle changes */
        .swo-card:hover .swo-icon-wrap {
          background-color: rgba(255, 255, 255, 0.15);
          color: #ffffff;
        }

        .swo-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px 0;
          line-height: 1.3;
          transition: color 0.3s ease;
        }

        /* HOVER: Title becomes White */
        .swo-card:hover .swo-card-title {
          color: #ffffff;
        }

        .swo-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex-grow: 1;
          transition: color 0.3s ease;
        }

        /* HOVER: Description becomes White */
        .swo-card:hover .swo-card-desc {
          color: rgba(255, 255, 255, 0.85);
        }

        .swo-learn-more {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          text-decoration: none;
          margin-top: auto;
          transition: color 0.3s ease;
        }

        /* HOVER: Learn More becomes White */
        .swo-card:hover .swo-learn-more {
          color: #ffffff;
        }

        .swo-learn-more svg {
          transition: transform 0.2s ease;
        }

        .swo-learn-more:hover svg {
          transform: translateX(4px);
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 768px) {
          .swo-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .swo-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .swo-title {
            font-size: 40px;
          }

          .swo-description-wrap {
            justify-content: flex-end;
          }

          .swo-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>

      <section className="swo-section">
        <div className="swo-container">
          
          {/* --- Header Section --- */}
          <div className="swo-header">
            
            {/* Left: Title */}
            <div>
              <span className="swo-subtitle">Our Digital Solutions</span>
              <h2 className="swo-title">
                Services We Offer
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="swo-description-wrap">
              <p className="swo-description">
                A complete range of digital solutions to help your brand 
                grow and stay ahead in a competitive market.
              </p>
            </div>
            
          </div>

          {/* --- Services Grid Section --- */}
          <div className="swo-grid">
            {services.map((service, index) => (
              <div key={index} className="swo-card">
                
                {/* Icon Circle */}
                <div className="swo-icon-wrap">
                  {service.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="swo-card-title">{service.title}</h3>
                <p className="swo-card-desc">{service.description}</p>
                
                {/* Learn More Link */}
                <a href="#" className="swo-learn-more">
                  Learn More 
                  <ArrowRight size={14} strokeWidth={2.5} />
                </a>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ServicesWeOffer;