import React from 'react';

// ==========================================
// 1. CSS STYLES
// ==========================================
const styles = `
  .projects-section {
    width: 100%;
    background-color: #FAFAF9;
    padding: 60px 20px 80px 20px;
    font-family: system-ui, -apple-system, sans-serif;
    box-sizing: border-box;
    overflow: hidden;
  }

  .projects-container {
    max-width: 1280px;
    margin: 0 auto;
  }

  /* Header Section */
  .projects-header {
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }

  @media (min-width: 768px) {
    .projects-header {
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-end;
    }
  }

  .header-left {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .section-label {
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .section-label span {
    color: #0F3D2E;
    font-weight: 700;
    letter-spacing: 3px;
    text-transform: uppercase;
    font-size: 12px;
  }

  .label-line {
    height: 1px;
    width: 40px;
    background-color: #9CA3AF;
  }

  .section-title {
    font-size: 32px;
    font-weight: 800;
    color: #111827;
    margin: 0;
    line-height: 1.2;
  }

  @media (min-width: 768px) {
    .section-title { font-size: 40px; }
  }

  .view-all-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-size: 15px;
    font-weight: 600;
    color: #0F3D2E;
    text-decoration: none;
    cursor: pointer;
    transition: color 0.2s;
    background: none;
    border: none;
    padding: 0;
  }

  .view-all-link:hover {
    color: #1a5c46;
    text-decoration: underline;
  }

  /* Cards Grid */
  .projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 24px;
  }

  @media (min-width: 640px) {
    .projects-grid { grid-template-columns: 1fr 1fr; }
  }

  @media (min-width: 1024px) {
    .projects-grid { grid-template-columns: repeat(4, 1fr); gap: 20px; }
  }

  /* Individual Project Card */
  .project-card {
    display: flex;
    flex-direction: column;
    gap: 12px;
    cursor: pointer;
    transition: transform 0.3s ease;
  }

  .project-card:hover {
    transform: translateY(-4px);
  }

  .project-image-wrapper {
    width: 100%;
    height: 180px;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px -3px rgba(0, 0, 0, 0.08);
    border: 1px solid #F3F4F6;
    background-color: #FFFFFF;
  }

  .project-image-wrapper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }

  .project-card:hover .project-image-wrapper img {
    transform: scale(1.05);
  }

  .project-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .project-title {
    font-size: 16px;
    font-weight: 700;
    color: #111827;
    margin: 0;
  }

  .project-category {
    font-size: 13px;
    color: #6B7280;
    margin: 0;
    font-weight: 500;
  }
`;

// ==========================================
// 2. SVG ICONS
// ==========================================
const ArrowRightIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
  </svg>
);

// ==========================================
// 3. DATA FOR PROJECTS
// ==========================================
const projectsData = [
  {
    title: 'E-commerce Website',
    category: 'Web Development',
    img: '/Images/eco.png'
  },
  {
    title: 'Hospital Website',
    category: 'Web Development',
    img: '/Images/hospital.png'
  },
  {
    title: 'CRM Dashboard',
    category: 'Web Application',
    img: 'Images/dash.png'
  },
  {
    title: 'Digital Marketing Campaign',
    category: 'SEO & Digital Solutions',
    img: 'Images/digi.png'
  }
];

// ==========================================
// 4. MAIN COMPONENT
// ==========================================
const ProjectsSection = () => {
  return (
    <>
      <style>{styles}</style>
      
      <section className="projects-section">
        <div className="projects-container">
          
          {/* Header */}
          <div className="projects-header">
            <div className="header-left">
              <div className="section-label">
                <span>Our Work</span>
            
              </div>
              <h2 className="section-title">
                Projects That Create Impact
              </h2>
            </div>

            <button className="view-all-link">
              View All Projects
              <ArrowRightIcon />
            </button>
          </div>

          {/* Projects Grid */}
          <div className="projects-grid">
            {projectsData.map((project, index) => (
              <div className="project-card" key={index}>
                
                {/* Image */}
                <div className="project-image-wrapper">
                  <img src={project.img} alt={project.title} />
                </div>

                {/* Info */}
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-category">{project.category}</p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
};

export default ProjectsSection;