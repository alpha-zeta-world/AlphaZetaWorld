import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "Our organic traffic increased 4X in just 6 months. The team's SEO and AI search strategy delivered real business results.",
      name: "Rahul Mehta",
      role: "Founder, RealEstatePro",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=200&auto=format&fit=crop" 
    },
    {
      quote: "Highly professional team with deep knowledge of SEO and AI search. We saw a significant improvement in leads and brand visibility.",
      name: "Priya Sharma",
      role: "Marketing Head, HealthPlus",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .tst-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .tst-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .tst-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 40px;
        }

        .tst-title {
          font-size: 32px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        /* Arrow Buttons */
        .tst-nav-buttons {
          display: flex;
          gap: 12px;
        }

        .tst-nav-btn {
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

        .tst-nav-btn:hover {
          background-color: #1A4D3F;
          color: white;
          border-color: #1A4D3F;
        }

      
        .tst-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }

        .tst-card {
          background-color: white;
          border: 1px solid #f3f4f6;
          border-radius: 12px;
          padding: 32px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.02);
          display: flex;
          gap: 20px;
          transition: all 0.3s ease;
        }

        .tst-card:hover {
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
        }

        /* Avatar */
        .tst-avatar {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          object-fit: cover;
          flex-shrink: 0;
        }

        /* Content */
        .tst-content {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .tst-quote {
          font-size: 15px;
          color: #4b5563;
          line-height: 1.6;
          margin: 0 0 16px 0;
          font-style: normal;
        }

        .tst-author-name {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0 0 4px 0;
        }

        .tst-author-role {
          font-size: 13px;
          color: #6b7280;
          margin: 0;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 1024px) {
          .tst-title {
            font-size: 40px;
          }

          .tst-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>

      <section className="tst-section">
        <div className="tst-container">
          
          {/* --- Header Section --- */}
          <div className="tst-header">
            <h2 className="tst-title">What Our Clients Say</h2>
            
            <div className="tst-nav-buttons">
              <button className="tst-nav-btn" aria-label="Previous testimonial">
                <ArrowLeft size={18} strokeWidth={2.5} />
              </button>
              <button className="tst-nav-btn" aria-label="Next testimonial">
                <ArrowRight size={18} strokeWidth={2.5} />
              </button>
            </div>
          </div>

          {/* --- Testimonials Grid --- */}
          <div className="tst-grid">
            {testimonials.map((item, index) => (
              <div key={index} className="tst-card">
                
                {/* Avatar Image */}
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="tst-avatar"
                />
                
                {/* Quote & Author */}
                <div className="tst-content">
                  <p className="tst-quote">"{item.quote}"</p>
                  
                  <div>
                    <h4 className="tst-author-name">{item.name}</h4>
                    <p className="tst-author-role">{item.role}</p>
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

export default Testimonials;