import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StevePage from "./component/pages/StevePage";
import MarkPage from "./component/pages/MarkPage";
import ElonPage from "./component/pages/ElonPage";
import JackPage from "./component/pages/JackPage";
import ErrorPage from "./component/pages/ErrorPage";
import Contact from "./component/pages/Contact";
import Navbar from "./component/Navbar";
import BilPage from "./component/pages/BilPage";
import Yoda from "./component/pages/Yoda";
//import { useState } from "react";

//color={color}
function App() {
//  const[color, setColor] = useState("bg-blue-600");
  return (
    <Router>
      <Navbar 
        />

      <Routes>
        <Route path="/" element={<StevePage />} />
        <Route path="/mark" element={<MarkPage />} />
        <Route path="/elon" element={<ElonPage />} />
        <Route path="/jack" element={<JackPage />} />
        <Route path="/*" element={<ErrorPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Bil" element={<BilPage />} />
        <Route path="/Yoda" element={<Yoda />} />
      </Routes>
    </Router>
  );
}

export default App;
