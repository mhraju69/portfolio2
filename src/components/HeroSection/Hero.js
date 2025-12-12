import React from 'react'
import LaserFlow from './LaserFlow';
import Shuffle from '../text/shuffle';
import './Hero.css'; // <-- add custom styles here
import { FaTwitter, FaGithub, FaLinkedin } from 'react-icons/fa';

export default function Hero() {
    return (
        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
            <LaserFlow
                style={{ pointerEvents: 'none' }} // <-- allow clicks through the canvas
                color="#DA9FF5"
                horizontalBeamOffset={0.2}
                verticalBeamOffset={-0.46}
                horizontalSizing={0.5}
                verticalSizing={1.5}
                wispDensity={1.0}
                wispSpeed={15.0}
                wispIntensity={5.0}
                flowSpeed={0.1}
                flowStrength={0.3}
                fogIntensity={0.5}
                fogScale={0.3}
                fogFallSpeed={0.6}
                mouseTiltStrength={0.01}
                mouseSmoothTime={0.0}
                decay={1.1}
                falloffStart={1.2}
            />

            <div className="hero-content" style={{ position: 'absolute', zIndex: 1, }}>
                <Shuffle
                    text="Hi, I'm Raju"
                    tag="p"
                    shuffleDirection="left"
                    duration={0.4}
                    shuffleTimes={2}
                    animationMode="evenodd"
                    ease="power2.out"
                    stagger={0.05}
                    triggerOnce={true}
                    className="hero-subtitle"
                />
                <Shuffle
                    text="Blockchain Developer"
                    tag="h1"
                    shuffleDirection="right"
                    duration={0.45}
                    animationMode="evenodd"
                    shuffleTimes={2}
                    ease="power3.out"
                    stagger={0.04}
                    threshold={0.2}
                    triggerOnce={true}
                    className="hero-title"
                />



                <p className="hero-desc">
                    Building decentralized applications that revolutionize industries.
                    Specializing in Solidity, Rust, and full-stack Web3 development
                    with a focus on security and scalability.
                </p>
                {/* Buttons */}
                <div style={{ display: 'flex', gap: '20px' }} className='hero-buttons '>
                    <a href="#contact"><button className='btn btn-primary' >Get in Touch</button></a>
                    <a href="#projects"><button className='btn ' >View Projects</button></a>
                </div>


                {/* Socials */}
                <div className="hero-socials">
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter />
                    </a>
                    <a href="https://github.com/mhraju069" target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                    </a>
                    <a href="https://linkedin.com/in/mhraju69" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin />
                    </a>
                </div>
            </div>

        </div>
    )
}
