import "./App.css";

// rrds
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Hooks
import { useState, createContext, useEffect } from "react";
// import GobalEffect from "./hooks/GobalEffect";

// MUI componenrs
import CustomizedAccordions from "./components/Customization";

// pages
import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Note from "./pages/Note";
import History from "./pages/History";
import PieChart from "./pages/PieChart";

// Create Context:
export const tryContext = createContext();

function App() {
  const [item, setItem] = useState([]);

  // 在這裡處理從 localStorage 中讀取資料的邏輯
  useEffect(() => {
    const storedItem = JSON.parse(localStorage.getItem("item")) || [];
    setItem(storedItem);
  }, []);
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
            <Route path="/chartpages" element={<PieChart />} />
          </Routes>
        </tryContext.Provider>
      </Router>
    </>
  );
}

export default App;
