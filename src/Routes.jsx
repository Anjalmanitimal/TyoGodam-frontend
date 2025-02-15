import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Spaces from "./pages/Spaces";
import Login from "./pages/Login";
import UserLayout from "./pages/UserLayout"; // Layout with navbar
import UserPage from "./pages/UserPage"; // Dashboard
import UserSpaces from "./pages/UserSpaces"; // Space listing
import Notifications from "./pages/Notifications"; // Notifications page
import SpaceOwnerLayout from "./pages/SpaceOwnerLayout"; // NEW Space Owner Layout
import SpaceOwnerPage from "./pages/SpaceOwnerPage"; // NEW Space Owner Dashboard

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* ✅ Public Routes (Before Login) */}
        <Route path="/" element={<App />}>
          <Route index element={<Spaces />} />
          <Route path="register" element={<Register />} />
          <Route path="spaces" element={<Spaces />} />
          <Route path="login" element={<Login />} />
        </Route>

        {/* ✅ User Routes (After Login) */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserPage />} /> {/* ✅ User Dashboard */}
          <Route path="spaces" element={<UserSpaces />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* ✅ Space Owner Routes (After Login) */}
        <Route path="/spaceowner" element={<SpaceOwnerLayout />}>
          <Route index element={<SpaceOwnerPage />} /> {/* ✅ Space Owner Dashboard */}
        </Route>

        {/* ✅ Catch-all Route (Handles 404 Errors) */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
