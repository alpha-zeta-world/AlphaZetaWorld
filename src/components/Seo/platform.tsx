import React from 'react';

const PlatformsWeOptimize: React.FC = () => {
  const platforms = [
    {
      name: "Google",
      type: "Search",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
    },
    {
      name: "ChatGPT",
      type: "Search",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg"
    },
    {
      name: "Perplexity",
      type: "AI",
      // Perplexity కి ఫ్రీ లోగో లేకపోవడం వల్ల ఒక సింపుల్ SVG వాడాను
      logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%231A4D3F' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'><path d='M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5'/></svg>"
    },
    {
      name: "Bing",
      type: "AI",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Bing_Fluent_Logo.svg"
    },
    {
      name: "Google",
      type: "SGE",
      // Google SGE కి స్టార్ లాంటి ఐకాన్
      logo: "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23F59E0B'><path d='M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z'/></svg>"
    },
    {
      name: "YouTube",
      type: "Search",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
    }
  ];

  return (
    <>
      <style>{`
        /* ================= CSS STYLES ================= */
        .pwo-section {
          width: 100%;
          background-color: #FAFAFA;
          padding: 80px 24px;
          font-family: 'Inter', system-ui, -apple-system, sans-serif;
          box-sizing: border-box;
        }

        .pwo-container {
          max-width: 1280px;
          margin: 0 auto;
        }

        /* --- Header Section --- */
        .pwo-header {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-bottom: 40px;
        }

        .pwo-title {
          font-size: 28px;
          line-height: 1.2;
          font-weight: 700;
          color: #111827;
          margin: 0;
          letter-spacing: -0.02em;
        }

        .pwo-description-wrap {
          display: flex;
          align-items: center;
        }

        .pwo-description {
          font-size: 14px;
          color: #6b7280;
          line-height: 1.6;
          max-width: 420px;
          margin: 0;
        }

        /* --- Platforms Grid --- */
        .pwo-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 12px;
        }

        .pwo-card {
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

        .pwo-card:hover {
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06);
          transform: translateY(-2px);
          border-color: #e5e7eb;
        }

        .pwo-logo-wrap {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pwo-logo-wrap img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
        }

        .pwo-text-wrap {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        .pwo-name {
          font-size: 15px;
          font-weight: 700;
          color: #111827;
          margin: 0;
          line-height: 1.2;
        }

        .pwo-type {
          font-size: 13px;
          color: #6b7280;
          font-weight: 500;
          margin: 0;
          line-height: 1.2;
        }

        /* --- MEDIA QUERIES (Responsive) --- */
        @media (min-width: 640px) {
          .pwo-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (min-width: 1024px) {
          .pwo-header {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            align-items: center;
          }

          .pwo-title {
            font-size: 36px;
          }

          .pwo-description-wrap {
            justify-content: flex-end;
          }

          .pwo-grid {
            grid-template-columns: repeat(6, 1fr);
          }
        }
      `}</style>

      <section className="pwo-section">
        <div className="pwo-container">
          
          {/* --- Header Section --- */}
          <div className="pwo-header">
            
            {/* Left: Title */}
            <div>
              <h2 className="pwo-title">
                Platforms We Optimize For
              </h2>
            </div>

            {/* Right: Paragraph */}
            <div className="pwo-description-wrap">
              <p className="pwo-description">
                We help your brand get discovered across traditional search 
                engines and AI-powered platforms.
              </p>
            </div>
            
          </div>

          {/* --- Platforms Grid Section --- */}
          <div className="pwo-grid">
            {platforms.map((platform, index) => (
              <div key={index} className="pwo-card">
                
                {/* Logo */}
                <div className="pwo-logo-wrap">
                  <img src={platform.logo} alt={`${platform.name} logo`} />
                </div>
                
                {/* Text Content */}
                <div className="pwo-text-wrap">
                  <h3 className="pwo-name">{platform.name}</h3>
                  <p className="pwo-type">{platform.type}</p>
                </div>
                
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default PlatformsWeOptimize;