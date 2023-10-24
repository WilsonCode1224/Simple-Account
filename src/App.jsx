import "./App.css";

// rrds
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// MUI componenrs
import CustomizedAccordions from "./components/Customization";

// pages

import Login from "./pages/Login";
import Home from "./pages/Home";
import Note from "./pages/Note";
import History from "./pages/History";
import PieChart from "./pages/PieChart";
import HomePageDemo from "./pages/HomePageDemo";

// Context:
import { ItemProvider } from "./AppContext/ItemContext";

function App() {
  return (
    <>
      <ItemProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePageDemo />} />
            <Route path="/login" element={<Login />} />
            <Route path="/apphome" element={<Home />} />
            <Route path="/appnote" element={<Note />} />
            <Route path="/apphistory" element={<History />} />
            <Route path="/chartpages" element={<PieChart />} />
            <Route
              path="/customizedAccordions"
              element={<CustomizedAccordions />}
            />
          </Routes>
        </Router>
      </ItemProvider>
    </>
  );
}

export default App;
