import React, { useState, useEffect, useRef } from 'react';
import CTA from "../components/Home/CTA";

// 🎨 LOGO COLORS (AlphaZetaWorld deep teal green)
const COLORS = {
  primary: '#032522',
  primaryDark: '#0e3a37',
  accent: '#17554d',
  accentSoft: '#ccfbf1',
  accentVerySoft: '#d1fae5',
};

// ================== DATA: SOLUTIONS ==================
const solutionsData = [
  {
    id: 1,
    title: 'Web & Mobile App Development',
    description: 'Full-stack SaaS solutions, web apps, responsive platforms, and robust cross-platform mobile products optimized for conversion and scale.',
    tags: ['React', 'Node.js', 'Next.js', 'Flutter'],
    image: '/Images/serweb.svg',
  },
  {
    id: 2,
    title: 'AI Video Ads & Content',
    description: 'Production-grade automated video generation, Instagram Reels, Shorts, virtual influencers, and digital ad ecosystems powered by autonomous agents.',
    tags: ['Synthetic Avatars', 'Lip Sync', 'Autonomous Editors'],
    image: '/Images/serai.svg',
  },
  {
    id: 3,
    title: 'Google SEO & AI Search',
    description: 'Strategic search engine positioning (SEO) optimized for traditional search algorithms, ChatGPT, Perplexity, and Google AI Overviews.',
    tags: ['Schema Markup', 'Core Web Vitals', 'Content Networks'],
    image: '/Images/serseo.svg',
  },
  {
    id: 4,
    title: 'Digital Product Lab',
    description: 'Our proprietary laboratory where we build and commercialize tools, SaaS platforms, and software, applying first-hand lessons directly into client work.',
    tags: ['In-House SaaS', 'Rapid Prototyping'],
    image: '/Images/serdigi.svg',
  },
];

// ================== DATA: WORKFLOW ==================
const workflowSteps = [
  { id: '01', title: 'Discovery', description: 'Understanding the problem, user metrics, and scaling objectives.' },
  { id: '02', title: 'Design', description: 'Crafting intuitive layouts, technical specifications, and system maps.' },
  { id: '03', title: 'Engineering', description: 'Developing production-grade modules using Next.js, Node, or Rust.' },
  { id: '04', title: 'Launch', description: 'Rigorous testing and seamless deployment to scalable cloud infrastructure.' },
  { id: '05', title: 'Growth', description: 'AI-powered content, Sales and SEO search campaigns driving traffic.' },
];

// ================== DATA: STATS ==================
const statsData = [
  {
    id: 1,
    value: '3x',
    label: 'Faster Development Cycles',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10"></line>
        <line x1="18" y1="20" x2="18" y2="4"></line>
        <line x1="6" y1="20" x2="6" y2="16"></line>
      </svg>
    ),
  },
  {
    id: 2,
    value: '100%',
    label: 'Consistent Brand Voice & Quality',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <circle cx="12" cy="12" r="6"></circle>
        <circle cx="12" cy="12" r="2"></circle>
      </svg>
    ),
  },
  {
    id: 3,
    value: '1',
    label: 'Unified Team & Communication',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={COLORS.primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
        <circle cx="9" cy="7" r="4"></circle>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
      </svg>
    ),
  },
];

// ================== CUSTOM HOOK: Scroll Reveal ==================
const useScrollReveal = (threshold = 0.15) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
};

// ================== ANIMATION KEYFRAMES + RESPONSIVE ==================
const animationStyles = `
  @keyframes fadeInUp {
    from { opacity: 0; transform: translateY(40px); }
    to { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInLeft {
    from { opacity: 0; transform: translateX(-40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes fadeInRight {
    from { opacity: 0; transform: translateX(40px); }
    to { opacity: 1; transform: translateX(0); }
  }
  @keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
  }
  @keyframes pulseGlow {
    0%, 100% { box-shadow: 0 4px 6px -1px ${COLORS.primary}33, 0 2px 4px -1px ${COLORS.primary}1a; }
    50% { box-shadow: 0 8px 20px -2px ${COLORS.primary}55, 0 4px 8px -1px ${COLORS.primary}33; }
  }
  @keyframes scaleIn {
    from { opacity: 0; transform: scale(0.9); }
    to { opacity: 1; transform: scale(1); }
  }

  /* ================= BASE / DESKTOP STYLES ================= */
  .hsw-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
  }

  /* Solutions */
  .hsw-solutions-wrapper { padding: 3rem 2rem 4rem; }
  .hsw-solutions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 2rem;
    align-items: stretch;
  }

  /* Workflow */
  .hsw-workflow-wrapper { padding: 3rem 2rem 4rem; }
  .hsw-workflow-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1.5rem;
    align-items: stretch;
  }

  /* Growth */
  .hsw-growth-wrapper { padding: 2.5rem 2rem 3.5rem; }
  .hsw-growth-container {
    max-width: 1200px;
    margin: 0 auto;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 4rem;
    align-items: center;
  }

  /* ============ TABLET (<= 1024px) ============ */
  @media (max-width: 1024px) {
    .hsw-solutions-wrapper { padding: 2.5rem 1.5rem 3rem; }
    .hsw-workflow-wrapper  { padding: 2.5rem 1.5rem 3rem; }
    .hsw-growth-wrapper    { padding: 2rem 1.5rem 2.5rem; }

    .hsw-solutions-grid { grid-template-columns: 1fr; gap: 1.5rem; }
    .hsw-workflow-grid  { grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 1.25rem; }
    .hsw-growth-container { gap: 2.5rem; }

    .hsw-solutions-title,
    .hsw-workflow-title,
    .hsw-growth-title { font-size: 2rem !important; }

    .hsw-header-description { font-size: 0.95rem !important; }
  }

  /* ============ MOBILE (<= 640px) ============ */
  @media (max-width: 640px) {
    .hsw-solutions-wrapper { padding: 2rem 1rem 2.5rem; }
    .hsw-workflow-wrapper  { padding: 2rem 1rem 2.5rem; }
    .hsw-growth-wrapper    { padding: 1.75rem 1rem 2rem; }

    .hsw-header { margin-bottom: 2rem !important; }
    .hsw-subtitle { font-size: 0.7rem !important; }

    .hsw-solutions-title,
    .hsw-workflow-title,
    .hsw-growth-title {
      font-size: 1.6rem !important;
      line-height: 1.25 !important;
    }

    .hsw-header-description { font-size: 0.9rem !important; }

    /* 🎯 SOLUTIONS: ONE BY ONE (1 column) */
    .hsw-solutions-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }

    /* 🎯 Image height */
    .hsw-image-container {
      height: 180px !important;
    }

    .hsw-card-content {
      padding: 1.25rem !important;
      gap: 0.75rem !important;
    }

    .hsw-solution-title {
      font-size: 1.1rem !important;
      line-height: 1.3 !important;
    }

    .hsw-solution-desc {
      font-size: 0.85rem !important;
      line-height: 1.5 !important;
    }

    /* 🎯 WORKFLOW: ONE BY ONE (1 column) */
    .hsw-workflow-grid {
      grid-template-columns: 1fr !important;
      gap: 1rem !important;
    }

    .hsw-workflow-card {
      padding: 1.5rem 1.25rem !important;
      border-radius: 1rem !important;
    }

    .hsw-step-number {
      font-size: 1.25rem !important;
      margin-bottom: 1rem !important;
    }

    .hsw-workflow-title-text {
      font-size: 1.05rem !important;
      margin-bottom: 0.5rem !important;
    }

    .hsw-workflow-desc {
      font-size: 0.85rem !important;
      line-height: 1.5 !important;
    }

    /* Growth: stack text + stats */
    .hsw-growth-container { grid-template-columns: 1fr; gap: 2rem; }
    .hsw-description { font-size: 0.9rem !important; max-width: 100% !important; }
    .hsw-stat-card { padding: 0.875rem 1rem !important; gap: 1rem !important; }
    .hsw-icon-circle { width: 2.5rem !important; height: 2.5rem !important; }
    .hsw-value { font-size: 1.4rem !important; }
    .hsw-label { font-size: 0.8rem !important; }
  }

  /* ============ SMALL MOBILE (<= 400px) ============ */
  @media (max-width: 400px) {
    .hsw-solutions-wrapper { padding: 1.75rem 1rem 2rem; }
    .hsw-workflow-wrapper  { padding: 1.75rem 1rem 2rem; }
    .hsw-growth-wrapper    { padding: 1.5rem 1rem 1.75rem; }

    .hsw-solutions-title,
    .hsw-workflow-title,
    .hsw-growth-title { font-size: 1.4rem !important; }

    .hsw-image-container { height: 160px !important; }
    .hsw-workflow-card { padding: 1.25rem 1rem !important; }
  }
`;

// ================== REVEAL WRAPPER ==================
const Reveal: React.FC<{ children: React.ReactNode; delay?: number; direction?: 'up' | 'left' | 'right' }> = ({ children, delay = 0, direction = 'up' }) => {
  const { ref, isVisible } = useScrollReveal();
  const animationName = direction === 'left' ? 'fadeInLeft' : direction === 'right' ? 'fadeInRight' : 'fadeInUp';

  return (
    <div
      ref={ref}
      style={{
        height: '100%',
        opacity: isVisible ? 1 : 0,
        animation: isVisible ? `${animationName} 0.8s ease-out ${delay}s both` : 'none',
      }}
    >
      {children}
    </div>
  );
};

const HomeSections: React.FC = () => {
  const [hoveredSolution, setHoveredSolution] = useState<number | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  return (
    <>
      {/* Inject keyframes + responsive styles */}
      <style>{animationStyles}</style>

      {/* ================= SOLUTIONS SECTION ================= */}
      <div className="hsw-solutions-wrapper" style={styles.solutionsWrapper}>
        <div className="hsw-container" style={styles.container}>
          <Reveal>
            <div className="hsw-header" style={styles.header}>
              <span className="hsw-subtitle" style={styles.subtitle}>WHAT WE BUILD & DELIVER</span>
              <h2 className="hsw-solutions-title" style={styles.solutionsTitle}>
                Digital Solutions That <br />
                <span style={styles.highlight}>Drive Growth</span>
              </h2>
              <p className="hsw-header-description" style={styles.headerDescription}>
                From robust custom application development to systemic SEO and advanced AI content creation, we build cohesive growth stacks under one roof.
              </p>
            </div>
          </Reveal>

          <div className="hsw-solutions-grid" style={styles.solutionsGrid}>
            {solutionsData.map((item, index) => {
              const isHovered = hoveredSolution === item.id;
              return (
                <Reveal key={item.id} delay={index * 0.1}>
                  <div
                    onMouseEnter={() => setHoveredSolution(item.id)}
                    onMouseLeave={() => setHoveredSolution(null)}
                    style={{
                      ...styles.solutionCard,
                      ...(isHovered ? styles.solutionCardHovered : {}),
                    }}
                  >
                    <div className="hsw-image-container" style={styles.imageContainer}>
                      <img
                        src={item.image}
                        alt={item.title}
                        style={{
                          ...styles.image,
                          transform: isHovered ? 'scale(1.08)' : 'scale(1)',
                          transition: 'transform 0.5s ease',
                        }}
                      />
                    </div>
                    <div className="hsw-card-content" style={styles.cardContent}>
                      <h3 className="hsw-solution-title" style={styles.solutionCardTitle}>{item.title}</h3>
                      <p className="hsw-solution-desc" style={styles.solutionCardDescription}>{item.description}</p>
                      <div style={styles.tagsContainer}>
                        {item.tags.map((tag, i) => (
                          <span
                            key={i}
                            style={{
                              ...styles.tag,
                              transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
                              transition: `transform 0.3s ease ${i * 0.05}s`,
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= GROWTH FOCUS SECTION ================= */}
      <div className="hsw-growth-wrapper" style={styles.growthWrapper}>
        <div className="hsw-growth-container" style={styles.growthContainer}>
          <Reveal direction="left">
            <div style={styles.textColumn}>
              <div style={styles.subtitleWrapper}>
                <span className="hsw-subtitle" style={styles.subtitle}>OUR PRINCIPAL GROWTH FOCUS AREA</span>
                <div style={styles.subtitleLine}></div>
              </div>

              <h2 className="hsw-growth-title" style={styles.growthTitle}>
                Stop Managing <span style={styles.highlight}>Separate Vendors</span>
              </h2>

              <p className="hsw-description" style={styles.description}>
                Usually, businesses work with multiple vendors for development,
                content, and marketing. With Alpha Zeta World, you get everything
                under one roof — a unified team, streamlined processes, and
                consistent quality, helping you save time, reduce costs, and
                accelerate your growth.
              </p>
            </div>
          </Reveal>

          <div style={styles.statsColumn}>
            {statsData.map((stat, index) => (
              <Reveal key={stat.id} direction="right" delay={index * 0.15}>
                <div
                  className="hsw-stat-card"
                  style={styles.statCard}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-4px) translateX(4px)';
                    e.currentTarget.style.boxShadow = `0 12px 20px -5px ${COLORS.primary}22`;
                    e.currentTarget.style.borderColor = COLORS.accentSoft;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) translateX(0)';
                    e.currentTarget.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = '#f1f5f9';
                  }}
                >
                  <div className="hsw-icon-circle" style={styles.iconCircle}>{stat.icon}</div>
                  <div className="hsw-value" style={styles.value}>{stat.value}</div>
                  <div className="hsw-label" style={styles.label}>{stat.label}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      {/* ================= WORKFLOW SECTION ================= */}
      <div className="hsw-workflow-wrapper" style={styles.workflowWrapper}>
        <div className="hsw-container" style={styles.container}>
          <Reveal>
            <div className="hsw-header" style={styles.header}>
              <span className="hsw-subtitle" style={styles.subtitle}>THE WORKFLOW</span>
              <h2 className="hsw-workflow-title" style={styles.workflowTitle}>How We Bring Your Tech To Life</h2>
            </div>
          </Reveal>

          <div className="hsw-workflow-grid" style={styles.workflowGrid}>
            {workflowSteps.map((step, index) => {
              const isHovered = hoveredCard === step.id;
              return (
                <Reveal key={step.id} delay={index * 0.12}>
                  <div
                    className="hsw-workflow-card"
                    onMouseEnter={() => setHoveredCard(step.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    style={{
                      ...styles.workflowCard,
                      ...(isHovered ? styles.workflowCardHovered : {}),
                      animation: `pulseGlow 3s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                    }}
                  >
                    <div
                      className="hsw-step-number"
                      style={{
                        ...styles.stepNumber,
                        transform: isHovered ? 'scale(1.15)' : 'scale(1)',
                        transition: 'transform 0.3s ease',
                      }}
                    >
                      {step.id}
                    </div>
                    <h3 className="hsw-workflow-title-text" style={styles.workflowCardTitle}>{step.title}</h3>
                    <p className="hsw-workflow-desc" style={styles.workflowCardDescription}>{step.description}</p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================= CTA SECTION ================= */}
      <CTA />
    </>
  );
};

// --- All Styles in one place (desktop defaults) ---
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
  },
  header: {
    marginBottom: '3rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    maxWidth: '800px',
  },
  subtitle: {
    fontSize: '0.75rem',
    fontWeight: 700,
    letterSpacing: '0.15em',
    color: COLORS.primary,
    textTransform: 'uppercase',
    marginBottom: '0.75rem',
  },
  highlight: {
    color: COLORS.primary,
  },
  headerDescription: {
    fontSize: '1rem',
    lineHeight: 1.6,
    color: '#64748b',
    margin: 0,
  },

  // ===== Solutions Section =====
  solutionsWrapper: {
    width: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '3rem 2rem 4rem',
    boxSizing: 'border-box',
  },
  solutionsTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1e293b',
    margin: '0 0 1rem 0',
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
  },
  solutionsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '2rem',
    alignItems: 'stretch',
  },
  solutionCard: {
    backgroundColor: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '1rem',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, border-color 0.4s ease',
    cursor: 'pointer',
    height: '100%',
    boxSizing: 'border-box',
  },
  solutionCardHovered: {
    transform: 'translateY(-8px)',
    boxShadow: `0 20px 25px -5px ${COLORS.primary}26, 0 10px 10px -5px ${COLORS.primary}0d`,
    borderColor: COLORS.primary,
  },
  imageContainer: {
    width: '100%',
    height: '220px',
    backgroundColor: '#f1f5f9',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  cardContent: {
    padding: '1.5rem',
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    flex: 1,
  },
  solutionCardTitle: {
    fontSize: '1.25rem',
    fontWeight: 700,
    color: '#1e293b',
    margin: 0,
  },
  solutionCardDescription: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: '#64748b',
    margin: 0,
  },
  tagsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem',
    marginTop: 'auto',
    paddingTop: '0.5rem',
  },
  tag: {
    fontSize: '0.7rem',
    fontWeight: 600,
    color: COLORS.primary,
    backgroundColor: COLORS.accentSoft,
    padding: '0.25rem 0.75rem',
    borderRadius: '9999px',
  },

  // ===== Workflow Section =====
  workflowWrapper: {
    width: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '3rem 2rem 4rem',
    boxSizing: 'border-box',
  },
  workflowTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1e293b',
    margin: 0,
    letterSpacing: '-0.025em',
  },
  workflowGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '1.5rem',
    alignItems: 'stretch',
  },
  workflowCard: {
    backgroundColor: COLORS.primary,
    border: '1px solid transparent',
    borderRadius: '1rem',
    padding: '2rem 1.5rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    height: '100%',
    boxSizing: 'border-box',
    boxShadow: `0 4px 6px -1px ${COLORS.primary}33, 0 2px 4px -1px ${COLORS.primary}1a`,
    transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.4s ease, background-color 0.4s ease, border-color 0.4s ease',
    cursor: 'pointer',
  },
  workflowCardHovered: {
    transform: 'translateY(-8px) scale(1.02)',
    backgroundColor: COLORS.primaryDark,
    boxShadow: `0 20px 25px -5px ${COLORS.primary}66, 0 10px 10px -5px ${COLORS.primary}33`,
    border: `1px solid ${COLORS.accent}`,
  },
  stepNumber: {
    fontSize: '1.5rem',
    fontWeight: 800,
    color: COLORS.accentSoft,
    marginBottom: '1.5rem',
    letterSpacing: '-0.05em',
    display: 'inline-block',
  },
  workflowCardTitle: {
    fontSize: '1.125rem',
    fontWeight: 700,
    color: '#ffffff',
    margin: '0 0 0.75rem 0',
  },
  workflowCardDescription: {
    fontSize: '0.875rem',
    lineHeight: 1.6,
    color: '#d1fae5',
    margin: 0,
    marginTop: 'auto',
  },

  // ===== Growth Focus Section =====
  growthWrapper: {
    width: '100%',
    backgroundColor: '#ffffff',
    fontFamily: 'system-ui, -apple-system, sans-serif',
    padding: '2.5rem 2rem 3.5rem',
    boxSizing: 'border-box',
  },
  growthContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    width: '100%',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '4rem',
    alignItems: 'center',
  },
  textColumn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  subtitleWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: '1rem',
    marginBottom: '1rem',
  },
  subtitleLine: {
    width: '3rem',
    height: '2px',
    backgroundColor: COLORS.accent,
  },
  growthTitle: {
    fontSize: '2.5rem',
    fontWeight: 800,
    color: '#1e293b',
    margin: '0 0 1.5rem 0',
    lineHeight: 1.2,
    letterSpacing: '-0.025em',
  },
  description: {
    fontSize: '1rem',
    lineHeight: 1.7,
    color: '#64748b',
    margin: 0,
    maxWidth: '500px',
  },
  statsColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  statCard: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    border: '1px solid #f1f5f9',
    borderRadius: '1rem',
    padding: '1rem 1.5rem',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
    gap: '1.25rem',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
    cursor: 'pointer',
  },
  iconCircle: {
    width: '3rem',
    height: '3rem',
    borderRadius: '50%',
    backgroundColor: COLORS.accentVerySoft,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  value: {
    fontSize: '1.75rem',
    fontWeight: 800,
    color: COLORS.primary,
    marginRight: '0.5rem',
  },
  label: {
    fontSize: '0.875rem',
    fontWeight: 600,
    color: '#1e293b',
  },
};

export default HomeSections;