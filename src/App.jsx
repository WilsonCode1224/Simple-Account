import "./App.css";

// rrds
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Hooks
import { useState, createContext } from "react";

// pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Note from "./pages/Note";
import History from "./pages/History";
import CustomizedAccordions from "./components/Customization";

// Create Context:
export const tryContext = createContext();

function App() {
  const [item, setItem] = useState([]);
  return (
    <>
      <Router>
        <tryContext.Provider value={{ item, setItem }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apphome" element={<Home />} />
            <Route path="/appnote" element={<Note />} />
            <Route path="/apphistory" element={<History />} />
            <Route path="/test" element={<CustomizedAccordions />} />
          </Routes>
        </tryContext.Provider>
      </Router>
    </>
  );
}

export default App;
