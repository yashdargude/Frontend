import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Profile from "./pages/Profile";
import DashboardLayout from "./layouts/DashboardLayout";
import PrivateRoutes from "./routes/PrivateRoutes";
import { AuthContextProvider } from "./contexts/AuthContext";
import CounselorProfile from "./pages/CounselorProfile";
import AdminRegistration from "./pages/AdminRegistration";

function App() {
  return (
    <AuthContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/adminregister" element={<AdminRegistration />} />

        <Route
          path="/counselorprofile"
          element={
            <PrivateRoutes>
              <CounselorProfile />
            </PrivateRoutes>
          }
        />
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
