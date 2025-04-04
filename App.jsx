// import Navbar from "./Components/Navbar";
// import Login from "./Components/Login";
// import RegistrationPage from "./Components/RegistrationPage";
// import Dashboard from "./components/Dashboard"; // Corrected import path to match casing
// import Home from "./Components/Home"; // Importing Home
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./Components/about";
// import Contact from "./Components/Contact";

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//       <Route path="/Home" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/registrationpage" element={<RegistrationPage />} /> {/* Updated route */}
//         <Route path="/dashboard" element={<Dashboard />} /> {/* Adding Dashboard route */}
//       </Routes>
//     </BrowserRouter>
//   );
// }

import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Login from "./Components/Login";
import RegistrationPage from "./Components/RegistrationPage";
import Dashboard from "./Components/Dashboard";

export default function App() {
  return (
    <Router>
      <MainRoutes />
    </Router>
  );
}

function MainRoutes() {
  const location = useLocation();

  return (
    <>
      {/* Show Navbar only when not on Login, Signup, or Contact */}
      {!(["/login", "/registrationpage", "/contact", "/home", "/about"].includes(location.pathname)) && <Navbar />}

      <Routes>
        <Route path="/" element={<Dashboard />} /> {/* Default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrationpage" element={<RegistrationPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </>
  );
}
