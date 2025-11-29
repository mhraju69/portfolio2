import React from 'react';
import MagicBento from './MagicBento';

const aboutData = [
    {
        color: '#060010',
        title: 'Blockchain Expert',
        description: 'Building decentralized applications with Solidity & Rust',
        label: 'Web3',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
    },
    {
        color: '#060010',
        title: 'Full Stack Developer',
        description: 'React, Next.js, Node.js, TypeScript expert',
        label: 'Development',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
        color: '#060010',
        title: '5+ Years Experience',
        description: 'Building scalable applications for global companies',
        label: 'Experience',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
    },
    {
        color: '#060010',
        title: 'Smart Contracts',
        description: 'Deploying secure DeFi protocols and NFT marketplaces',
        label: 'Blockchain',
        image: 'https://images.unsplash.com/photo-1644194193734-c1e95a5ec41a?w=800&q=80'
    },
    {
        color: '#060010',
        title: 'UI/UX Design',
        description: 'Creating beautiful, user-centered interfaces',
        label: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
        color: '#060010',
        title: 'Open Source',
        description: 'Contributing to the developer community',
        label: 'Community',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80'
    }
];

export default function AboutMe() {
    return (
        <div style={{
            background: '#000',
            padding: '100px 0',
            minHeight: '100vh'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                padding: '0 20px',
                textAlign: 'center'
            }}>
                <h2 style={{
                    color: '#fff',
                    fontSize: '3rem',
                    marginBottom: '1rem',
                    fontWeight: '700'
                }}>
                    About Me
                </h2>
                <p style={{
                    color: 'rgba(255, 255, 255, 0.6)',
                    fontSize: '1.2rem',
                    marginBottom: '50px',
                    maxWidth: '600px',
                    margin: '0 auto 50px'
                }}>
                    Passionate blockchain developer crafting the future of web3
                </p>
            </div>

            <MagicBento
                cardData={aboutData}
                textAutoHide={true}
                enableStars={true}
                enableSpotlight={true}
                enableBorderGlow={true}
                enableTilt={true}
                enableMagnetism={true}
                clickEffect={true}
                spotlightRadius={300}
                particleCount={12}
                glowColor="132, 0, 255"
            />
        </div>
    );
}
