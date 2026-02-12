// Import React hooks: useState (for state) and useEffect (for lifecycle events)
import { useState, useEffect } from 'react';

// Import React-Bootstrap components used to build the navbar
import { Navbar, Container, Nav } from 'react-bootstrap';

// Import images used in the navbar
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// Create and export the Navbar component
export const MyNavbar = () => {

  // activeLink stores which navigation link is currently active (default = 'home')
  const [activeLink, setActiveLink] = useState('home');

  // scrolled stores whether the page is scrolled more than 50px
  const [scrolled, setScrolled] = useState(false);

  // useEffect runs once after component loads (empty dependency array [])
  useEffect(() => {

    // Function that checks scroll position
    const onScroll = () => setScrolled(window.scrollY > 50);

    // Add scroll event listener
    window.addEventListener('scroll', onScroll);

    // Cleanup: remove event listener when component unmounts
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Function to update the currently active navigation link
  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  // JSX returned by the component
  return (

    // Navbar component (adds 'scrolled' class when page is scrolled)
    <Navbar expand="lg" className={scrolled ? 'scrolled' : ''}>
      <Container>

        {/* Logo section */}
        <Navbar.Brand href="#home">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        {/* Mobile toggle button */}
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>

        {/* Collapsible navbar content */}
        <Navbar.Collapse id="basic-navbar-nav">

          {/* Navigation links */}
          <Nav className="me-auto">

            {/* About link */}
            <Nav.Link
              href="#about"
              className={activeLink === 'about' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('about')}
            >
              About
            </Nav.Link>

            {/* Skills link */}
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>

            {/* Projects link */}
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>

          </Nav>

          {/* Right-side content (social icons + connect button) */}
          <span className='navbar-text'>

            {/* Social media icons */}
            <div className='social-icon'>
              <a href='#'><img src={navIcon1} alt=""/></a>
              <a href='#'><img src={navIcon2} alt=""/></a>
              <a href='#'><img src={navIcon3} alt=""/></a>
            </div>

            {/* Connect button */}
            <a href="#connect">
              <button className='vvd'>
                <span>Let's Connect</span>
              </button>
            </a>

          </span>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
