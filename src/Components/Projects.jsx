// Import required Bootstrap components for layout and tabs
import { Container, TabContent, TabContainer, Tab, Col, Row, Nav } from "react-bootstrap";

// Import reusable ProjectCard component
import { ProjectCard } from "./ProjectCard";

// Import background image
import colorSharp2 from "../assets/img/color-sharp2.png";

// Import project images
import projImg1 from "../assets/img/project- img1.png.jpg";
import projImg2 from "../assets/img/project- img2.png.avif";
import projImg3 from "../assets/img/project- img3.png.png";

// Import animation CSS library
import 'animate.css';

// Import TrackVisibility component to detect when element is visible on screen
import TrackVisibility from 'react-on-screen';

// (This import is not needed because isVisible is provided by TrackVisibility)
import { isVisible } from "react-on-screen";

// Create and export Projects functional component
export const Projects = () => {

    // Array of project objects
    // Each object contains title, description, and image
    const projects = [
      {
        title: "Todo-App",
        description: "A simple and interactive app to manage tasks efficiently with add, edit, and delete features.",
        imgUrl: projImg1,
      },
      {
        title: "Calculator-App",
        description: "A responsive calculator app for performing basic arithmetic operations easily.",
        imgUrl: projImg2,
      },
      {
        title: "Blog-App",
        description: "A dynamic blog platform to create, read, and manage posts with a clean interface.",
        imgUrl: projImg3,
      },
      // Repeated projects (can be different in real projects)
      {
        title: "Todo-App",
        description: "A simple and interactive app to manage tasks efficiently with add, edit, and delete features.",
        imgUrl: projImg1,
      },
      {
        title: "Calculator-App",
        description: "A responsive calculator app for performing basic arithmetic operations easily.",
        imgUrl: projImg2,
      },
      {
        title: "Blog-App",
        description: "A dynamic blog platform to create, read, and manage posts with a clean interface.",
        imgUrl: projImg3,
      },
    ];

    // Return JSX structure
    return (

        // Main section with id "projects"
        <section className="project" id="projects">

            <Container>
                <Row>
                    <Col>

                        {/* TrackVisibility detects if this section is visible on screen */}
                        <TrackVisibility>
                            {({ isVisible }) =>

                                // Apply animation class only when visible
                                <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                                    <h2>Projects</h2>

                                    {/* Description paragraph */}
                                    <p>
                                        This project showcases my web development journey as a Computer Engineering student. 
                                        I built practical apps like a To-Do App, Calculator, and Blog to improve my coding skills 
                                        and create interactive, real-world web applications.
                                    </p>
                                </div>
                            }
                        </TrackVisibility>

                        {/* Tab system container */}
                        <TabContainer id="projects-tabs" defaultActiveKey="first">

                            {/* Navigation tabs */}
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                                </Nav.Item>

                                <Nav.Item>
                                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                                </Nav.Item>
                            </Nav>

                            {/* Tab content area */}
                            <TabContent>

                                {/* First Tab Pane */}
                                <Tab.Pane eventKey="first">
                                    <Row>

                                        {/* Loop through projects array */}
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    // Spread operator passes all project properties as props
                                                    <ProjectCard
                                                        key={index}
                                                        {...project}
                                                    />
                                                )
                                            })
                                        }

                                    </Row>
                                </Tab.Pane>

                                {/* Second Tab Pane */}
                                <Tab.Pane eventKey="second">
                                    <h3>Skills and Tools</h3>
                                    <p>
                                        I work with modern web technologies to build responsive and
                                        interactive applications, focusing on clean code, user-friendly design,
                                        and real-world project development. My skill set includes HTML, CSS, JavaScript,
                                        React, Bootstrap, Git & GitHub, responsive design, Django, and basic UI/UX principles.
                                    </p>
                                </Tab.Pane>

                                {/* Third Tab Pane */}
                                <Tab.Pane eventKey="third">
                                    <h3>Goals and Growth</h3>
                                    <p>
                                        I aim to grow as a full-stack web developer by building meaningful projects,
                                        learning modern frameworks, and continuously improving my problem-solving
                                        and coding skills.
                                    </p>
                                </Tab.Pane>

                            </TabContent>

                        </TabContainer>

                    </Col>
                </Row>
            </Container>

            {/* Background decorative image */}
            <img className="background-image-right" src={colorSharp2}></img>

        </section>
    )
}
