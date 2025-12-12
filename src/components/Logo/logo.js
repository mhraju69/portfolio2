import LogoLoop from './LogoLoop'; // Correct import
import { SiReact, SiPython, SiSolidity, SiEthereum, SiGithub, SiDocker, SiDjango, SiJavascript, SiPostgresql, SiCelery, SiRedis, SiKotlin } from 'react-icons/si';

const techLogos = [
  { node: <SiJavascript />, title: "JavaScript", href: "https://javascript.com" },
  { node: <SiPython />, title: "Python", href: "https://python.org" },
  { node: <SiKotlin />, title: "Kotlin", href: "https://kotlinlang.org" },
  { node: <SiSolidity />, title: "Solidity", href: "https://soliditylang.org" },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiDjango />, title: "Django", href: "https://www.djangoproject.com" },
  { node: <SiEthereum />, title: "Ethereum", href: "https://www.ethereum.org" },
  { node: <SiPostgresql />, title: "Postgresql", href: "https://www.postgresql.org" },
  { node: <SiCelery />, title: "Celery", href: "https://www.celeryproject.org" },
  { node: <SiRedis />, title: "Redis", href: "https://www.redis.com" },
  { node: <SiGithub />, title: "Github", href: "https://github.com" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
];


export default function Logo({ direction }) {
  return (
    <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
      <LogoLoop
        logos={techLogos}
        speed={120}
        direction={direction}
        logoHeight={48}
        gap={40}
        pauseOnHover
        scaleOnHover
        fadeOut
        fadeOutColor="rgb(0, 0, 0)"
        ariaLabel="Technology partners"
        logoColor="#fff" // Customize logo color here
        customStyles={{
          background: 'linear-gradient(135deg,rgb(0, 0, 0) 0%,rgb(0, 0, 0) 100%)',
          borderRadius: '12px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',


        }}
      />
    </div>
  );
}