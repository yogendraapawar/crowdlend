import "./App.css";
import DashboardLayoutBasic from "./layout/DashboardLayoutBasic";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/login/Login"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/dashboard" element={<DashboardLayoutBasic />} />

          <Route path="/login" element={<SignIn/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
