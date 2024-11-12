import "./App.css";
import HomeLayout from "./layout/HomeLayout";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import SignIn from "./pages/login/Login";
import AdminLayout from "./layout/AdminLayout";

function App() {
  const ProtectedRoute = ({ children, allowedRole }) => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const role = localStorage.getItem("role");

    if (!isAuthenticated) {
      return <Navigate to="/login" replace />;
    }

    if (allowedRole === "admin" && role !== "admin") {
      return <Navigate to="/login" replace />;
    }
    if (allowedRole === "lender" && role !== "lender") {
      return <Navigate to="/login" replace />;
    }

    return children;
  };

  const AuthRoute = () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    const role = localStorage.getItem("role");

    if (isAuthenticated) {
      return <Navigate to={role === "admin" ? "/admin" : "/home"} replace />;
    }
    return <SignIn />;
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Public routes */}
          <Route
            path="/home"
            element={
              // <ProtectedRoute allowedRole="Lender">
              <HomeLayout />
              // </ProtectedRoute>
            }
          />

          {/* Login Route */}
          <Route path="/login" element={<AuthRoute />} />

          {/* Protected admin route */}
          <Route
            path="/admin"
            element={
              // <ProtectedRoute allowedRole="Admin">
              <AdminLayout />
              // </ProtectedRoute>
            }
          />

          {/* Redirect to /login for unmatched routes */}
          <Route path="*" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
