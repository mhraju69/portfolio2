import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function ProjectsSection({ id }) {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern shopping experience built with Next.js and Stripe integration.",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)",
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80"
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Smart productivity tool that uses AI to prioritize your daily tasks.",
      tags: ["React", "Python", "OpenAI", "FastAPI"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=800&q=80"
    },
    {
      id: 3,
      title: "Social Dashboard",
      description: "Real-time analytics dashboard for social media management.",
      tags: ["Vue.js", "D3.js", "Firebase", "SCSS"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
    },
    {
      id: 4,
      title: "Crypto Portfolio",
      description: "Track your cryptocurrency investments with real-time market data.",
      tags: ["React Native", "Redux", "CoinGecko API"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&q=80"
    }
  ];

  return (
    <div id={id} className="projects-section" style={{ background: '#000000ff', color: '#fff', padding: '10px' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        marginBottom: '-50px',
        padding: '0 20px 50px',
        textAlign: 'center',

      }}>
        <h2 style={{
          color: '#fff',
          fontSize: '3rem',
          marginBottom: '0rem',
          fontWeight: '700'
        }}>
          My Projects
        </h2>
        <p style={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: '1.2rem',
          marginBottom: '0',
          maxWidth: '600px',
          margin: '0 auto'
        }}>
          Explore my latest work and creative solutions
        </p>
      </div>
      <ScrollStack
        useWindowScroll={true}
        itemDistance={120}
        itemScale={0.05}
        itemStackDistance={20}
        stackPosition="20%"
        baseScale={0.9}
        rotationAmount={1}
        blurAmount={2}
        onStackComplete={() => console.log('Stack animation complete!')}
      >
        {projects.map((project) => (
          <ScrollStackItem key={project.id}>
            <div className="project-card-content">
              <img src={project.image} alt={project.title} className="project-image" />
              <div className="project-overlay" style={{ background: project.gradient }} />
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
                <div className="project-actions">
                  <button className="project-button project-button--primary">
                    View Project
                  </button>
                  <button className="project-button project-button--secondary">
                    GitHub
                  </button>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  )
}
