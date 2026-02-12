// Importing the main CSS file for styling the App component
import './App.css';

// Importing the custom Navbar component
import { MyNavbar } from './Components/Navbar';

// Importing the Banner section component
import { Banner } from './Components/Banner';

// Importing the Skills section component
import { Skills } from './Components/Skills'; // <-- Fixed here (was Skill)

// Importing the Projects section component
import { Projects } from './Components/Projects';

// Importing Bootstrap CSS for responsive layout and styling
import 'bootstrap/dist/css/bootstrap.min.css';

// Importing the Footer component
import { Footer } from './Components/Footer';

// Importing the Contact section component
import { Contact } from './Components/Contact';


// Creating the main functional component called App
function App() {
  return (
    // Main wrapper div with class name "App"
    <div className="App">

      {/* Displaying the navigation bar at the top */}
      <MyNavbar />

      {/* Displaying the banner (hero section) */}
      <Banner />

      {/* Displaying the skills section */}
      <Skills /> {/* <-- Fixed here */}

      {/* Displaying the projects section */}
      <Projects />

      {/* Displaying the footer section */}
      <Footer />

      {/* Displaying the contact section */}
      <Contact />

    </div>
  );
}

// Exporting App component so it can be used in index.js
export default App;
