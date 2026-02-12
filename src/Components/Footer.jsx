// Import layout components (Container, Row, Col) from React Bootstrap
// These help create responsive grid layouts
import { Container, Row, Col } from "react-bootstrap";

// Import logo image from assets folder
import logo from "../assets/img/logo.svg";

// Import social media icon images
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

// Create and export Footer functional component
export const Footer = () => {

  // Return JSX (UI structure)
  return (

    // Footer HTML element with class "footer" (used for styling)
    <footer className="footer">

      {/* Bootstrap container to center content and add spacing */}
      <Container>

        {/* Row to arrange content horizontally */}
        <Row className="align-items-center">

          {/* First column (left side) - takes 6 columns on small screens and above */}
          <Col sm={6}>
            {/* Display logo image */}
            <img src={logo} alt="Logo" />
          </Col>

          {/* Second column (right side) - text aligned center on small devices
              and aligned right on small screens and above */}
          <Col sm={6} className="text-center text-sm-end">

            {/* Social media icon section */}
            <div className="social-icon">

              {/* Social icon 1 wrapped inside anchor tag (link) */}
              <a href="#">
                <img src={navIcon1} alt="social icon 1" />
              </a>

              {/* Social icon 2 */}
              <a href="#">
                <img src={navIcon2} alt="social icon 2" />
              </a>

              {/* Social icon 3 */}
              <a href="#">
                <img src={navIcon3} alt="social icon 3" />
              </a>

            </div>

            {/* Copyright text section */}
            <div>
              <p>© 2026 Aayushma Ghale | Computer Engineering Student</p>
            </div>

          </Col>

        </Row>
      </Container>
    </footer>
  );
};
