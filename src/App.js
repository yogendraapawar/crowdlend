import "./App.css";
import DashboardLayoutBasic from "./layout/DashboardLayoutBasic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<DashboardLayoutBasic />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
