import React from 'react';

// ==========================================
// 1. INLINE SVG ICONS (Only for the Left Section)
// ==========================================
const Icons = {
  Image: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>,
  Share: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/></svg>,
  Download: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>,
  Smartphone: () => <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>,
  Eye: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>,
  ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
};

// ==========================================
// 2. HELPER COMPONENT
// ==========================================
function FeatureItem({ icon, title }: { icon: React.ReactNode; title: string }) {
  return (
    <div className="sow-feature-item">
      <div className="sow-feature-icon">{icon}</div>
      <span>{title}</span>
    </div>
  );
}

// ==========================================
// 3. MAIN COMPONENT
// ==========================================
export default function ServicesOverview() {
  const IMAGE_URL = "/Images/servicecard.webp";
  const DOWNLOAD_FILENAME = "AlphaZetaWorld-Services-Overview.png";

  const handleDownload = async () => {
    try {
      const response = await fetch(IMAGE_URL);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = DOWNLOAD_FILENAME;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      const link = document.createElement("a");
      link.href = IMAGE_URL;
      link.download = DOWNLOAD_FILENAME;
      link.target = "_blank";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handlePreview = () => {
    window.open(IMAGE_URL, "_blank");
  };

  return (
    <>
      <style>{`
        .sow-container {
          background-color: #FFFFFF; 
          font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1.5rem;
          position: relative;
          overflow: hidden;
          color: #1e293b;
          box-sizing: border-box;
        }
        .sow-container *, .sow-container *::before, .sow-container *::after {
          box-sizing: border-box;
        }

      
        .sow-grid {
          max-width: 1200px; width: 100%; display: grid;
          grid-template-columns: 1fr; gap: 2.5rem; align-items: center;
          position: relative; z-index: 10;
        }
        @media (min-width: 1024px) {
         
          .sow-grid { grid-template-columns: 0.85fr 1.15fr; gap: 2.5rem; }
        }

       
        .sow-left { display: flex; flex-direction: column; max-width: 500px; }
        .sow-badge-wrap { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 0.75rem; }
        .sow-badge {
          background-color: #ecfdf5; color: #047857;
          font-size: 0.65rem;                
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 0.3rem 0.85rem;              
          border-radius: 9999px;
        }
        .sow-badge-line { height: 1px; width: 3rem; background-color: #a7f3d0; }

        .sow-heading {
          font-size: 1.85rem;                 
          font-weight: 800;
          line-height: 1.2;
          margin-bottom: 0.85rem;
          color: #0f172a;
        }
        .sow-heading span { color: #064e3b; }
        @media (min-width: 1024px) {
          .sow-heading { font-size: 2.25rem; } 
        }

        .sow-para {
          color: #64748b;
          font-size: 0.9rem;                  
          line-height: 1.6;
          margin-bottom: 1.25rem;
        }

        /* Features Grid */
        .sow-features {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 0.85rem;
          margin-bottom: 1.5rem;
        }
        @media (min-width: 640px) {
          .sow-features { grid-template-columns: repeat(4, 1fr); }
        }

        .sow-feature-item { display: flex; flex-direction: column; align-items: center; text-align: center; gap: 0.4rem; }
        .sow-feature-icon {
          width: 2.5rem;                        
          height: 2.5rem;
          background-color: #ecfdf5;
          border: 1px solid rgba(167, 243, 208, 0.5);
          border-radius: 0.85rem;
          display: flex; align-items: center; justify-content: center;
          color: #047857;
        }
        .sow-feature-item span {
          font-size: 0.72rem;                    
          font-weight: 600;
          color: #334155;
          line-height: 1.2;
        }

        /* Buttons */
        .sow-buttons { display: flex; flex-wrap: wrap; gap: 0.75rem; }
        .sow-btn-primary, .sow-btn-secondary {
          display: flex; align-items: center; gap: 0.45rem;
          padding: 0.65rem 1.25rem;             
          border-radius: 9999px;
          font-weight: 600;
          font-size: 0.85rem;                   
          cursor: pointer;
          transition: all 0.2s ease;
          border: none;
        }
        .sow-btn-primary {
          background-color: #0F4C3A;
          color: white;
          box-shadow: 0 10px 15px -3px rgba(15, 76, 58, 0.2);
        }
        .sow-btn-primary:hover { background-color: #0a3829; transform: translateY(-2px); }
        .sow-btn-icon-right { margin-left: 0.35rem; transition: transform 0.2s; }
        .sow-btn-primary:hover .sow-btn-icon-right { transform: translateX(4px); }
        .sow-btn-secondary {
          background-color: white;
          color: #0F4C3A;
          border: 1px solid #0F4C3A;
        }
        .sow-btn-secondary:hover { background-color: #f8fafc; }

    
        .sow-right {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .sow-image-frame {
          width: 100%;
          height: 400px;                        
          border-radius: 1.5rem;
          overflow: hidden;
          box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15);
          background-color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0.5rem;                      
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .sow-image-frame:hover {
          transform: translateY(-5px);
          box-shadow: 0 30px 60px -12px rgba(15, 76, 58, 0.25);
        }

        .sow-right-image {
          width: 100%;
          height: 100%;
          object-fit: contain;
          object-position: center;
          display: block;
          border-radius: 1rem;
        }

        /* Tablet */
        @media (max-width: 1024px) {
          .sow-image-frame { height: 480px; }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .sow-container { padding: 1.5rem 1rem; }
          .sow-heading { font-size: 1.5rem; }
          .sow-para { font-size: 0.85rem; }
          .sow-features { gap: 0.65rem; }
          .sow-feature-icon { width: 2.25rem; height: 2.25rem; }
          .sow-feature-item span { font-size: 0.68rem; }
          .sow-buttons { flex-direction: column; width: 100%; }
          .sow-btn-primary, .sow-btn-secondary { width: 100%; justify-content: center; }

          .sow-image-frame { height: 360px; padding: 0.4rem; }
        }

        /* Small Mobile */
        @media (max-width: 400px) {
          .sow-image-frame { height: 280px; }
          .sow-heading { font-size: 1.35rem; }
        }
      `}</style>

      <div className="sow-container">
        <div className="sow-grid">

          {/* Left Section: Content */}
          <div className="sow-left">
            <div className="sow-badge-wrap">
              <span className="sow-badge">Services Overview</span>
              <div className="sow-badge-line"></div>
            </div>

            <h1 className="sow-heading">
              Download Our <br />
              <span>Services Overview</span>
            </h1>

            <p className="sow-para">
              Get a complete overview of Alpha Zeta World's digital solutions,
              including all our services, benefits, and contact details in a single
              high-quality image. Download, share, or use it for your reference
              anytime.
            </p>

            <div className="sow-features">
              <FeatureItem icon={<Icons.Image />} title="High Resolution" />
              <FeatureItem icon={<Icons.Share />} title="Easy to Share" />
              <FeatureItem icon={<Icons.Download />} title="One Click Download" />
              <FeatureItem icon={<Icons.Smartphone />} title="Works on All Devices" />
            </div>

            <div className="sow-buttons">
              <button
                className="sow-btn-primary"
                onClick={handleDownload}
                type="button"
              >
                <Icons.Download />
                Download Image
                <span className="sow-btn-icon-right"><Icons.ArrowRight /></span>
              </button>

              <button
                className="sow-btn-secondary"
                onClick={handlePreview}
                type="button"
              >
                <Icons.Eye />
                Preview Image
              </button>
            </div>
          </div>

          {/* Right Section: Image */}
          <div className="sow-right">
            <div className="sow-image-frame">
              <img
                src={IMAGE_URL}
                alt="Alpha Zeta World Services Overview"
                className="sow-right-image"
              />
            </div>
          </div>

        </div>
      </div>
    </>
  );
}