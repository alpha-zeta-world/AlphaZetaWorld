import React from 'react';
import { 
  Search, 
  FileText, 
  Link as LinkIcon, 
  Settings, 
  Bot, 
  MapPin, 
  PenTool, 
  PieChart,
  ArrowRight
} from 'lucide-react';

const ComprehensiveServices: React.FC = () => {
  const services = [
    {
      icon: <Search size={22} strokeWidth={2} />,
      title: "Keyword Research & Strategy",
      description: "Find the right keywords that drive real business opportunities."
    },
    {
      icon: <FileText size={22} strokeWidth={2} />,
      title: "On-Page SEO Optimization",
      description: "Optimize content, meta tags, structure and internal linking."
    },
    {
      icon: <LinkIcon size={22} strokeWidth={2} />,
      title: "Off-Page SEO & Link Building",
      description: "Build high-quality backlinks to improve authority."
    },
    {
      icon: <Settings size={22} strokeWidth={2} />,
      title: "Technical SEO",
      description: "Improve site speed, indexing, crawlability and overall performance."
    },
    {
      icon: <Bot size={22} strokeWidth={2} />,
      title: "AI Search Optimization",
      description: "Optimize for ChatGPT, Google SGE, Perplexity and other AI search platforms."
    },
    {
      icon: <MapPin size={22} strokeWidth={2} />,
      title: "Local SEO",
      description: "Help your business rank in local searches and Google Maps."
    },
    {
      icon: <PenTool size={22} strokeWidth={2} />,
      title: "Content Strategy & Creation",
      description: "Create SEO-friendly content that engages and converts."
    },
    {
      icon: <PieChart size={22} strokeWidth={2} />,
      title: "Analytics & Reporting",
      description: "Track rankings, traffic, leads and ROI with detailed reports."
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .cs-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .cs-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .cs-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 48px;
        }

        .cs-subtitle-wrap {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 16px;
        }

        .cs-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
        }

        .cs-line {
          width: 32px;
          height: 2px;
          background-color: rgba(26, 77, 63, 0.3);
        }

        .cs-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .cs-description-wrap {
          display: flex;
          align-items: flex-end;
        }

        .cs-description {
          font-size: 15px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 400px;
          margin: 0;
        }

        /* --- Cards Grid --- */
        .cs-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 20px;
        }

        .cs-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 8px;
          padding: 24px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }

        .cs-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
          border-color: #e5e7eb;
        }

        .cs-icon-wrap {
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

        .cs-card-title {
          font-size: 16px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 10px 0;
          line-height: 1.3;
        }

        .cs-card-desc {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          margin: 0 0 20px 0;
          flex-grow: 1;
        }

        .cs-learn-more {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 600;
          color: #111827;
          text-decoration: none;
          margin-top: auto;
          transition: color 0.2s ease;
        }

        .cs-learn-more:hover {
          color: #1A4D3F;
        }

        .cs-learn-more svg {
          transition: transform 0.2s ease;
        }

        .cs-learn-more:hover svg {
          transform: translateX(4px);
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 768px) {
          .cs-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .cs-header {
            grid-template-columns: 1.5fr 1fr;
            gap: 60px;
            align-items: flex-end;
          }

          .cs-title {
            font-size: 40px;
          }

          .cs-grid {
            grid-template-columns: repeat(4, 1fr);
          }
        }
      `}</style>

      <section className="cs-section">
        <div className="cs-container">
          
          {/* --- Header Section --- */}
          <div className="cs-header">
            
            {/* Left: Title */}
            <div>
              <div className="cs-subtitle-wrap">
                <span className="cs-subtitle">Our Services</span>
                <div className="cs-line"></div>
              </div>
              
              <h2 className="cs-title">
                Comprehensive SEO & AI Search Services
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="cs-description-wrap">
              <p className="cs-description">
                End-to-end solutions to help your brand rank higher on traditional 
                search engines and modern AI search platforms.
              </p>
            </div>
            
          </div>

          {/* --- Cards Grid Section --- */}
          <div className="cs-grid">
            {services.map((service, index) => (
              <div key={index} className="cs-card">
                
                {/* Icon Circle */}
                <div className="cs-icon-wrap">
                  {service.icon}
                </div>
                
                {/* Text Content */}
                <h3 className="cs-card-title">{service.title}</h3>
                <p className="cs-card-desc">{service.description}</p>
                
                {/* Learn More Link */}
                <a href="#" className="cs-learn-more">
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

export default ComprehensiveServices;