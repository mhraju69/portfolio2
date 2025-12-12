import React from 'react'
import StaggeredMenu from './StaggeredMenu';
import './StaggeredMenu.css';
const menuItems = [
  { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
  { label: 'About', ariaLabel: 'Learn about us', link: '#about' },
  { label: 'Projects', ariaLabel: 'View our services', link: '#projects' },
  { label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
];

const socialItems = [
  { label: 'Twitter', link: 'https://twitter.com' },
  { label: 'GitHub', link: 'https://github.com/mhraju069' },
  { label: 'LinkedIn', link: 'https://linkedin.com/mhraju69' }
];
export default function Menu() {
  return (
    <StaggeredMenu
      position="right"
      items={menuItems}
      socialItems={socialItems}
      displaySocials={true}
      displayItemNumbering={true}
      menuButtonColor="#fff"
      openMenuButtonColor="#fff"
      changeMenuColorOnOpen={true}
      colors={['#B19EEF', '#5227FF']}
      logoUrl="/logo.png"
      accentColor="#ff6b6b"
    />
  )
}
