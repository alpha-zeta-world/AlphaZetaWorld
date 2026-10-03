import React, { useState, useEffect, useRef } from 'react';

const styles = `
  .achievements-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 80px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
  }

  .achievements-container {
    max-width: 1280px;
    margin: 0 auto;
  }

 
  .achievements-header {
    text-align: center;
    margin-bottom: 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  
  .achievements-label {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 16px;
    margin-bottom: 16px;
  }

  .achievements-label span {
    color: #0F3D2E;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 13px;
  }

 
  .achievements-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }


  .achievements-heading {
    font-size: 36px;
    font-weight: 800;
    color: #111827;
    margin: 0 0 16px 0;
    line-height: 1.2;
    letter-spacing: -0.5px;
    text-align: center;
  }

  @media (min-width: 768px) {
    .achievements-heading { font-size: 48px; }
  }

  .achievements-highlight {
    color: #0F3D2E;
  }

  .achievements-description {
    color: #4B5563;
    font-size: 17px;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    text-align: center;
  }

 
  .stats-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 40px;
  }

  @media (min-width: 640px) {
    .stats-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .stats-grid { grid-template-columns: repeat(4, 1fr); gap: 0; }
  }

  
  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;
    padding: 0 16px;
  }

  /* Vertical Divider Line (Desktop only) */
  .stat-item:not(:last-child)::after {
    content: '';
    position: absolute;
    right: 0;
    top: 10%;
    height: 80%;
    width: 1px;
    background-color: #E5E7EB;
    display: none;
  }

  @media (min-width: 1024px) {
    .stat-item:not(:last-child)::after {
      display: block;
    }
  }

  /* Number */
  .stat-number {
    font-size: 56px;
    font-weight: 400;
    color: #111827;
    margin: 0 0 12px 0;
    line-height: 1;
    letter-spacing: -1px;
  }

  /* Label */
  .stat-label {
    font-size: 16px;
    color: #4B5563;
    margin: 0 0 16px 0;
    font-weight: 500;
    text-align: center;
  }

  /* Small line under label */
  .stat-underline {
    width: 40px;
    height: 2px;
    background-color: #0F3D2E;
    border-radius: 2px;
  }

  /* Mobile Adjustments */
  @media (max-width: 1024px) {
    .achievements-heading { font-size: 32px; }
    .achievements-description { font-size: 15px; }
    .stat-number { font-size: 44px; }
  }
`;


interface CountUpProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const CountUp: React.FC<CountUpProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.3 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      const easeOutProgress = 1 - (1 - progress) * (1 - progress);
      
      setCount(Math.floor(easeOutProgress * end));

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(animate);
  }, [hasStarted, end, duration]);

  return <div ref={elementRef}>{count}{suffix}</div>;
};


const statsData = [
  { number: 150, suffix: '+', label: 'Projects Delivered' },
  { number: 100, suffix: '+', label: 'Happy Clients' },
  { number: 5, suffix: '+', label: 'Years of Experience' },
  { number: 98, suffix: '%', label: 'Client Satisfaction' }
];


const AchievementsSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="achievements-section">
        <div className="achievements-container">
          
          {/* Header */}
          <div className="achievements-header">
           
            <div className="achievements-label">
              <div className="achievements-line"></div>
              <span>Our Achievements</span>
              <div className="achievements-line"></div>
            </div>

       
            <h2 className="achievements-heading">
              Numbers That Tell <span className="achievements-highlight">Our Story</span>
            </h2>

         
            <p className="achievements-description">
              These numbers reflect the trust our clients place in us and the impact we've created together.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="stats-grid">
            {statsData.map((stat, index) => (
              <div className="stat-item" key={index}>
                <div className="stat-number">
                  <CountUp end={stat.number} suffix={stat.suffix} duration={2000} />
                </div>
                <p className="stat-label">{stat.label}</p>
                <div className="stat-underline"></div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default AchievementsSection;