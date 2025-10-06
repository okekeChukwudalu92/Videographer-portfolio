// 1. Import React and the useState hook
import React, { useState } from 'react';

// 2. Import the CSS file to style the navbar
import './Navbar.css';

// 3. Define the Navbar component
const Navbar = () => {
  // 4. State to track whether the mobile menu is open (true) or closed (false)
  const [menuOpen, setMenuOpen] = useState(false);

  // 5. Function to scroll to a specific section on the page by its ID
  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setMenuOpen(false); // Close the mobile menu after click
  };

  // 6. Return the JSX (HTML-like code) for rendering the navbar
  return (
    <nav className="navbar">
  <div className="navbar-logo">Uju Njoku</div>

  <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
    <a onClick={() => scrollToSection('home')}>Home</a>
    <a onClick={() => scrollToSection('about')}>About</a>
    <a onClick={() => scrollToSection('portfolio')}>Portfolio</a>
    <a onClick={() => scrollToSection('contact')}>Contact</a>
</div>
    <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
      <div className="bar" />
      <div className="bar" />
      <div className="bar" />
    </div>
  
</nav>
  );
};

export default Navbar;

