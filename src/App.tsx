import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <PrivateRoutes>
              <DashboardLayout />
            </PrivateRoutes>
          }
        >
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </AuthContextProvider>
  );
}

export default App;
