import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ClientFeedback: React.FC = () => {
  const testimonials = [
    {
      quote: "The team helped us improve our online presence significantly. We saw a 3X increase in website traffic and better quality leads.",
      name: "Rahul Mehta",
      role: "Founder, RealEstatePro",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
    },
    {
      quote: "Professional, creative and result-oriented. Their digital marketing strategies have helped our brand grow consistently.",
      name: "Priya Sharma",
      role: "Marketing Head, HealthPlus",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .cf-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .cf-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .cf-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 40px;
        }

        .cf-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .cf-subtitle {
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.15em;
          color: #1A4D3F;
          text-transform: uppercase;
        }

        .cf-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* Arrow Buttons */
        .cf-nav-buttons {
          display: flex;
          gap: 12px;
        }

        .cf-nav-btn {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          border: 1px solid #e5e7eb;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: #1A4D3F;
          transition: all 0.2s ease;
        }

        .cf-nav-btn:hover {
          background-color: #1A4D3F;
          color: white;
          border-color: #1A4D3F;
        }

        /* --- Testimonials Grid --- */
        .cf-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .cf-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          gap: 20px;
          transition: all 0.3s ease;
          align-items: flex-start;
        }

        .cf-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        /* Avatar */
        .cf-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        /* Content */
        .cf-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .cf-quote {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0 0 20px 0;
          font-style: normal;
        }

        .cf-author-name {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .cf-author-role {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 1024px) {
          .cf-title {
            font-size: 40px;
          }

          .cf-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="cf-section">
        <div className="cf-container">
          
          {/* --- Header Section --- */}
          <div className="cf-header">
            <div className="cf-title-wrap">
              <span className="cf-subtitle">Client Feedback</span>
              <h2 className="cf-title">What Our Clients Say</h2>
            </div>
            
            <div className="cf-nav-buttons">
              <button className="cf-nav-btn" aria-label="Previous testimonial">
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
              <button className="cf-nav-btn" aria-label="Next testimonial">
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* --- Testimonials Grid --- */}
          <div className="cf-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="cf-card">
                
                {/* Avatar Image */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="cf-avatar"
                />
                
                {/* Quote & Author */}
                <div className="cf-content">
                  <p className="cf-quote">"{item.quote}"</p>
                  
                  <div>
                    <h4 className="cf-author-name">{item.name}</h4>
                    <p className="cf-author-role">{item.role}</p>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ClientFeedback;