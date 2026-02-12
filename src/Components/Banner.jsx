// Import React hooks for state and side effects
import { useState, useEffect } from "react";

// Import layout components from React-Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import icon from react-bootstrap-icons
import { ArrowRightCircle } from "react-bootstrap-icons";

// Import banner image
import headerImg from "../assets/img/header-img.svg";

// Import animate.css for CSS animations
import 'animate.css';

// Import component to detect when element is visible on screen
import TrackVisibility from 'react-on-screen';

// (Not used here) named import for visibility checking
import { isVisible } from "react-on-screen";

// Create and export Banner component
export const Banner = () => {

  // Keeps track of how many times text animation has looped
  const [loopNum, setLoopNum] = useState(0);

  // Determines whether text is being deleted or typed
  const [isDeleting, setIsDeleting] = useState(false);

  // Array of text strings for typing animation
  const toRotate = [" a Computer Engineering Student"];

  // Stores the currently displayed animated text
  const [text, setText] = useState("");

  // Controls typing speed (randomized for natural effect)
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  // Pause time after full text is typed
  const period = 2000;

  // useEffect runs whenever `text` changes
  useEffect(() => {

    // Calls tick() repeatedly based on delta timing
    let ticker = setInterval(() => {
      tick();
    }, delta);

    // Cleanup function to clear interval
    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  // Function that controls typing & deleting animation
  const tick = () => {

    // Get index of current text
    let i = loopNum % toRotate.length;

    // Full text that needs to be typed
    let fullText = toRotate[i];

    // Decide whether to type or delete characters
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1) // delete character
      : fullText.substring(0, text.length + 1); // add character

    // Update displayed text
    setText(updatedText);

    // Speed up deleting animation
    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    // When typing is complete, start deleting
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } 
    // When deleting is complete, restart typing
    else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(500);
    }
  };

  // JSX returned by the component
  return (

    // Main banner section with id for navigation
    <section className="banner" id="about">
      <Container>

        {/* Align content vertically */}
        <Row className="align-items-center">

          {/* Left column (text content) */}
          <Col xs={12} md={6} xl={7}>

            {/* Detects when this section appears on screen */}
            <TrackVisibility>
              {({ isVisible }) =>

                // Apply animation only when visible
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>

                  {/* Small heading */}
                  <span className="tagline">Welcome to my Portfolio</span>

                  {/* Main heading with animated text */}
                  <h1>
                    {`Hi, I'm Aayushma, `}
                    <span className="wrap">{text}</span>
                  </h1>

                  {/* Description paragraph */}
                  <p>
                    “Passionate about web development, 
                    I enjoy building projects that are both functional and engaging.”
                  </p>

                  {/* Button with icon */}
                  <button onClick={() => console.log("connect")}>
                    Let's Connect <ArrowRightCircle size={25} />
                  </button>

                </div>
              }
            </TrackVisibility>
          </Col>

          {/* Right column (image) */}
          <Col xs={12} md={6} xl={5}>
            <img src={headerImg} alt="Header Img" />
          </Col>

        </Row>
      </Container>
    </section>
  );
};
