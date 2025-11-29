import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A modern shopping experience built with Next.js and Stripe integration.",
      tags: ["Next.js", "TypeScript", "Stripe", "Tailwind"],
      gradient: "linear-gradient(135deg, #FF6B6B 0%, #556270 100%)"
    },
    {
      id: 2,
      title: "AI Task Manager",
      description: "Smart productivity tool that uses AI to prioritize your daily tasks.",
      tags: ["React", "Python", "OpenAI", "FastAPI"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      id: 3,
      title: "Social Dashboard",
      description: "Real-time analytics dashboard for social media management.",
      tags: ["Vue.js", "D3.js", "Firebase", "SCSS"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      id: 4,
      title: "Crypto Portfolio",
      description: "Track your cryptocurrency investments with real-time market data.",
      tags: ["React Native", "Redux", "CoinGecko API"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    }
  ];

  return (
    <div className="projects-section" style={{ background: '#111', color: '#fff' }}>
      <ScrollStack
        useWindowScroll={true}
        itemDistance={80}
        itemScale={0.05}
        itemStackDistance={20}
        stackPosition="30%"
        baseScale={0.9}
        rotationAmount={2}
        blurAmount={2}
        onStackComplete={() => console.log('Stack animation complete!')}
      >
        {projects.map((project) => (
          <ScrollStackItem key={project.id}>
            <div className="project-card-content" style={{ background: project.gradient }}>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="project-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  )
}
