import React from 'react';


const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Inter:wght@400;500;600;800&display=swap');

  .our-story-section {
    background-color: #ffffff;
    padding: 80px 20px;
    font-family: 'Inter', sans-serif;
    box-sizing: border-box;
  }

  .our-story-section * {
    box-sizing: border-box;
  }

  .our-story-container {
    max-width: 1200px;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 50px;
  }


  .story-images-wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  .story-img-large {
    width: 100%;
    height: 250px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .story-img-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .story-img-small {
    width: 100%;
    height: 220px;
    border-radius: 24px;
    overflow: hidden;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }

  .story-img-large img,
  .story-img-small img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }


  .story-content-wrapper {
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .story-subtitle-wrapper {
    display: flex;
    align-items: center;
    gap: 12px;
    margin-bottom: 16px;
  }

  .story-subtitle {
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 0.2em;
    color: #64748b;
    text-transform: uppercase;
  }

  .story-line {
    height: 1px;
    width: 48px;
    background-color: #cbd5e1;
  }

  .story-title {
    font-size: 48px;
    font-weight: 800;
    color: #0f172a;
    line-height: 1.2;
    margin: 0 0 24px 0;
  }

  .story-title-highlight {
    color: #1a3c34;
  }

  .story-text {
    display: flex;
    flex-direction: column;
    gap: 20px;
    color: #475569;
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 40px;
  }

  .story-text p {
    margin: 0;
  }

  .story-signature-block {
    display: flex;
    flex-direction: column;
  }

  .story-signature {
    font-family: 'Dancing Script', cursive;
    font-size: 36px;
    color: #1a3c34;
    margin: 0 0 4px 0;
    font-weight: 700;
  }

  .story-signature-sub {
    font-size: 14px;
    font-weight: 500;
    color: #64748b;
    margin: 0;
  }

  
  @media (max-width: 1024px) {
    .our-story-container {
      flex-direction: column;
      gap: 40px;
    }
    .story-title {
      font-size: 40px;
    }
    .story-img-large {
      height: 320px;
    }
    .story-img-small {
      height: 180px;
    }
  }


  @media (max-width: 768px) {
    .our-story-section {
      padding: 50px 16px;
    }
    
    .our-story-container {
      flex-direction: column-reverse; 
      gap: 40px;
    }
    .story-title {
      font-size: 32px;
    }
    .story-img-large {
      height: 250px;
      border-radius: 16px;
    }
    .story-img-grid {
      grid-template-columns: 1fr;
    }
    .story-img-small {
      height: 200px;
      border-radius: 16px;
    }
    .story-signature {
      font-size: 32px;
    }
  }
`;


const OurStory: React.FC = () => {
  return (
    <>
   
      <style>{styles}</style>

      <section className="our-story-section">
        <div className="our-story-container">
          
          {/* LEFT SIDE: Image Grid */}
          <div className="story-images-wrapper">
            
            {/* Top Large Image */}
            <div className="story-img-large">
              <img 
                src="/Images/story1.webp" 
                alt="Team collaborating around a laptop" 
              />
            </div>

            {/* Bottom Two Images */}
            <div className="story-img-grid">
              
              <div className="story-img-small">
                <img 
                  src="/Images/story2.webp" 
                  alt="Hand stacking wooden blocks" 
                />
              </div>

              <div className="story-img-small">
                <img 
                  src="/Images/story3.webp" 
                  alt="Our Journey diagram on glass" 
                />
              </div>
              
            </div>
          </div>

          {/* RIGHT SIDE: Text Content */}
          <div className="story-content-wrapper">
            
            <div className="story-subtitle-wrapper">
              <span className="story-subtitle">OUR STORY</span>
              <div className="story-line"></div>
            </div>

            <h2 className="story-title">
              From Ideas to <br />
              <span className="story-title-highlight">Impactful Solutions</span>
            </h2>

            <div className="story-text">
              <p>
                AlphaZetaWorld was founded with a simple belief — technology 
                and creativity can solve real business challenges. What started 
                as a small team with big ideas has grown into a digital agency 
                trusted by businesses across different industries.
              </p>
              <p>
                We combine strategy, design and technology to build solutions 
                that are practical, scalable and result-driven. Every project we 
                work on is an opportunity to create something meaningful 
                for our clients.
              </p>
            </div>

            <div className="story-signature-block">
              <h3 className="story-signature">
                AlphaZetaWorld
              </h3>
              <p className="story-signature-sub">
                Our Journey Continues...
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
};

export default OurStory;