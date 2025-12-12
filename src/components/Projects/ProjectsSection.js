import React from 'react'
import ScrollStack, { ScrollStackItem } from './ScrollStack'

export default function ProjectsSection({ id }) {
  const projects = [
    {
      id: 1,
      title: "NFTMart",
      description: "A modern WEB 3.0 NFT marketplace",
      tags: ["React", "Django", "Solidity", "Bootstrap", "Ether.js", "OpenZeppelin"],
      image: "NFT.png",
      github: "https://github.com/mhraju069/NFTMart.DApp",
      live: "https://mhraju069.github.io/NFTMart.DApp"

    },
    {
      id: 2,
      title: "Decentralized Finance",
      description: "A decentralized finance platform to deposit ETH, stake for rewards, and unstake anytime with lower gas fees and faster transactions.",
      tags: ["React", "Solidity", "Bootstrap", "Ether.js", "OpenZeppelin"],
      image: "/DEFI.png",
      github: "https://github.com/mhraju069/DeFi.DApp",
      live: "https://mhraju069.github.io/DeFi.DApp/"
    },
    {
      id: 3,
      title: "Token Mining",
      description: "A decentralized token mining platform that allows users to mine custom tokens using a smart contract on the Ethereum blockchain.",
      tags: ["React", "Solidity", "Bootstrap", "Ether.js", "OpenZeppelin"],
      image: "/TokenMining.png",
      github: "https://github.com/mhraju069/TokenMining.DApp",
      live: "https://mhraju069.github.io/TokenMining.DApp/"
    },
    {
      id: 4,
      title: "Decentralized Escrow",
      description: "A decentralized escrow platform that allows users to deposit and withdraw funds using a smart contract on the Ethereum blockchain.",
      tags: ["Solidity", "OpenZeppelin"],
      // gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      image: "https://images.pexels.com/photos/5483071/pexels-photo-5483071.jpeg",
      github: "https://github.com/mhraju069/Escrow.DApp",
      // live: "https://mhraju069.github.io/Escrow.DApp/"
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
          color: 'rgba(255, 255, 255, 1)',
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
        rotationAmount={0}
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
                  <a href={project.live} target="_blank" rel="noopener noreferrer"><button className="project-button project-button--primary">Live</button></a>
                  <a href={project.github} target="_blank" rel="noopener noreferrer"><button className="project-button project-button--secondary">GitHub</button></a>
                </div>
              </div>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>
    </div>
  )
}
