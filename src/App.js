import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./pages/login/Login"
function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/home" element={<HomeLayout />}/>
          <Route path="/login" element={<SignIn/>} />
          {/* <Route path="/admin/dashboard" element={<AdminLayout/>} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
