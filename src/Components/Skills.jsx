// Import layout components from React Bootstrap
import { Container, Row, Col } from 'react-bootstrap';

// Import Carousel component from react-multi-carousel library
import Carousel from 'react-multi-carousel';

// Import carousel default styles
import 'react-multi-carousel/lib/styles.css';

// Import skill meter images
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";

// Import background decorative image
import colorSharp from "../assets/img/color-sharp.png";

// Import animation CSS library
import 'animate.css';

// Import TrackVisibility to detect when section appears on screen
import TrackVisibility from 'react-on-screen';

// (This import is not necessary because isVisible comes from TrackVisibility)
import { isVisible } from "react-on-screen";

// Create and export Skills functional component
export const Skills = () => {

  // Responsive settings for carousel
  // Defines how many items to show at different screen sizes
  const responsive = {

    // Very large screens (3000px - 4000px)
    superLargeDesktop: { 
      breakpoint: { max: 4000, min: 3000 }, 
      items: 5 
    },

    // Desktop screens (1024px - 3000px)
    desktop: { 
      breakpoint: { max: 3000, min: 1024 }, 
      items: 3 
    },

    // Tablet screens (464px - 1024px)
    tablet: { 
      breakpoint: { max: 1024, min: 464 }, 
      items: 2 
    },

    // Mobile screens (0px - 464px)
    mobile: { 
      breakpoint: { max: 464, min: 0 }, 
      items: 1 
    }
  };

  // Return JSX
  return (

    // Main section with id "skills"
    <section className="skill" id="skills">

      <Container>
        <Row>
          <Col>

            {/* Detect visibility to trigger animation */}
            <TrackVisibility>
              {({ isVisible }) => (

                // Add animation class when visible
                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>

                  {/* Skill box container */}
                  <div className="skill-bx">

                    {/* Section heading */}
                    <h2>Skills</h2>

                    {/* Description paragraph */}
                    <p>
                      As a Computer Engineering student, I create interactive web projects
                      that combine creativity and practical solutions. 
                      I love learning new technologies and sharpening my coding skills 
                      through hands-on experience.
                    </p>

                    {/* Carousel component */}
                    <Carousel 
                      responsive={responsive}   // Apply responsive settings
                      infinite={true}           // Enable infinite scrolling
                      className="skill-slider"  // Custom CSS class
                    >

                      {/* Skill Item 1 */}
                      <div className="item">
                        <img src={meter1} alt="React" />
                        <h5>React</h5>
                      </div>

                      {/* Skill Item 2 */}
                      <div className="item">
                        <img src={meter2} alt="Django" />
                        <h5>Django</h5>
                      </div>

                      {/* Skill Item 3 */}
                      <div className="item">
                        <img src={meter3} alt="JavaScript" />
                        <h5>JavaScript</h5>
                      </div>

                    </Carousel>

                  </div>
                </div>
              )}
            </TrackVisibility>

          </Col>
        </Row>
      </Container>

      {/* Decorative background image on the left side */}
      <img 
        className="background-image-left" 
        src={colorSharp} 
        alt="background" 
      />

    </section>
  );
};
