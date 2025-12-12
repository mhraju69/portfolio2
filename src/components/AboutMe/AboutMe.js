import React from 'react';
import MagicBento from './MagicBento';

const aboutData = [
    {
        color: '#060010',
        // title: 'Education',
        description:
            `BSC at Physics 2021 - 2025
        National University of Bangladesh
        
        HSC at Science 2018 - 2020
        Mohammadpur Govt. College
        
        SSC at Science 2016 - 2018
        Badda Alatunessa High School`,
        label: 'Educations',
        image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80'
    },
    {
        color: '#060010',
        description:
            `
        Software Developer At JVAI (BetopiaGroup)
        (July 2024 - running)
        
        Customer Service Officer at Genex Infosys
        (Oct 2023 - Nov 2024)
        
        Executive Officer at Infinity Marketing LTD
        (Mar 2021 - Aug 2023)`,
        label: 'Experiences',
        image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80'
    },
    {
        color: '#060010',
        description:
            `Experienced in designing, developing, and deploying decentralized applications (DApps) with Solidity, Ethereum, and Web3.js/Ethers.js.
            Skilled in building smart contracts for DeFi protocols, NFT platforms, and DEX systems. Strong understanding of blockchain security, gas optimization, and token standards (ERC-20, ERC-721, ERC-1155).
            
            Languages: Solidity.
            
            Tools: Hardhat, Truffle, Ganache, Foundry,OpenZeppelin.
            
            Platforms: Ethereum,Polygon, Binance Smart Chain.

            Libraries: Web3.js, Ethers.js.

            Other Skills: Smart contract development & auditing, DApp integration, DeFi protocols, NFT standards.
            `,
        label: 'Block Chain',
        image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&q=80'
    },
    {
        color: '#060010',
        description: `A passionate and results-driven Django Developer with hands-on experience in building scalable web applications.
        Proficient in backend development, REST API integration, user authentication, and admin panel customization.
        Experienced in integrating blockchain functionality (Web3) into Django projects.
        A strong team player with attention to detail and problem-solving skills.

        Languages: Python.

        Tools: Django, Django REST framework, Git, GitHub, Docker, PostgreSQL ,Redis, Celery.

        Other Skills: Web development, API integration, user authentication, admin panel customization, blockchain integration,Docker Containerization, GitHub Actions CI/CD deployment.
`,
        label: 'Backend',
        image: 'https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg'
    },
    {
        color: '#060010',
        description: 'Creating beautiful, user-centered interfaces',
        label: 'Design',
        image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
        color: '#060010',
        description: 'Contributing to the developer community',
        label: 'Community',
        image: 'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?w=800&q=80'
    }
];

export default function AboutMe() {
    return (
        <div style={{
            background: '#000',
            padding: '0 0 100px 0',
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
