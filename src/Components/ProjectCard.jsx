// Import Col component from React Bootstrap
// Col is used to create responsive columns in the grid system
import { Col } from "react-bootstrap";

// Create and export ProjectCard functional component
// It receives props: title, description, and imgUrl
export const ProjectCard = ({ title, description, imgUrl }) => {

    // Return JSX (UI structure)
    return (

        // Bootstrap column
        // size={12} → full width on extra small screens
        // sm={6} → half width on small screens
        // md={4} → 4 columns width (1/3) on medium screens
        <Col size={12} sm={6} md={4}>

            {/* Main project image box container */}
            <div className="proj-imgbx">

                {/* Display project image using imgUrl prop */}
                <img src={imgUrl} />

                {/* Text overlay container */}
                <div className="proj-txtx">

                    {/* Display project title */}
                    <h4>{title}</h4>

                    {/* Display project description */}
                    <span>{description}</span>

                </div>
            </div>

        </Col>
    )
}
