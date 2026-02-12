// Import useState hook from React to manage component state
import { useState } from "react";

// Import layout components from React Bootstrap
import { Container, Row, Col } from "react-bootstrap";

// Import contact image from assets folder
import contacting from "../assets/img/contact-img.svg";

// Create and export Contact functional component
export const Contact = () => {

  // Initial form field values (empty by default)
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  };

  // State to store form input values
  const [formDetails, setFormDetails] = useState(formInitialDetails);

  // State to control button text (Send / Sending...)
  const [buttonText, setButtonText] = useState("Send");

  // State to store submission status (success or error message)
  const [status, setStatus] = useState({});

  // Function to update form fields dynamically
  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,          // Spread existing form values
      [category]: value       // Update only the selected field
    });
  };

  // Function that runs when form is submitted
  const handleSubmit = async (e) => {
    e.preventDefault();       // Prevent page reload
    setButtonText("Sending...");  // Change button text while sending

    try {
      // Send POST request to backend server
      const response = await fetch("http://localhost:5000/contact", {
        method: "POST",  // HTTP method
        headers: { "Content-Type": "application/json;charset=utf-8" }, // Send JSON data
        body: JSON.stringify(formDetails) // Convert form data to JSON
      });

      // Convert response to JSON format
      const result = await response.json();

      // Reset form fields after submission
      setFormDetails(formInitialDetails);

      // Reset button text
      setButtonText("Send");

      // If backend returns success code
      if (result.code === 200) {
        setStatus({ success: true, message: "Message sent successfully" });
      } else {
        // If backend returns error
        setStatus({
          success: false,
          message: "Something went wrong, please try again later."
        });
      }
    } catch (error) {
      // If network error happens
      setButtonText("Send");
      setStatus({
        success: false,
        message: "Network error! Please try again later."
      });

      // Print error in console for debugging
      console.error(error);
    }
  };

  // JSX UI rendering
  return (
    // Section wrapper with id "connect"
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">

          {/* Left side image column */}
          <Col md={6}>
            <img src={contacting} alt="Contact Us" />
          </Col>

          {/* Right side form column */}
          <Col md={6}>
            <h2>Get In Touch</h2>

            {/* Form with submit handler */}
            <form onSubmit={handleSubmit}>
              <Row>

                {/* First Name Input */}
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="First Name"
                    value={formDetails.firstName}  // Bind state value
                    onChange={(e) => onFormUpdate("firstName", e.target.value)} // Update state
                  />
                </Col>

                {/* Last Name Input */}
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Last Name"
                    value={formDetails.lastName}
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>

                {/* Email Input */}
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    placeholder="Email Address"
                    value={formDetails.email}
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>

                {/* Phone Input */}
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    placeholder="Phone Number"
                    value={formDetails.phone}
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>

                {/* Message Textarea */}
                <Col sm={12} className="px-1">
                  <textarea
                    rows="6"
                    placeholder="Message"
                    value={formDetails.message}
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                </Col>

                {/* Submit Button */}
                <Col sm={12} className="px-1">
                  <button type="submit">
                    <span>{buttonText}</span> {/* Dynamic button text */}
                  </button>
                </Col>

                {/* Display success or error message */}
                {status.message && (
                  <Col sm={12}>
                    <p className={status.success === false ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}

              </Row>
            </form>
          </Col>

        </Row>
      </Container>
    </section>
  );
};
