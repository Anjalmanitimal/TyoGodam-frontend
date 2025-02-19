import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Register from "./pages/Register";
import Spaces from "./pages/Spaces";
import Login from "./pages/Login";
import UserLayout from "./pages/UserLayout";
import UserPage from "./pages/UserPage";
import UserSpaces from "./pages/UserSpaces";
import Notifications from "./pages/Notifications";
import SpaceOwnerLayout from "./pages/SpaceOwnerLayout";
import SpaceOwnerPage from "./pages/SpaceOwnerPage";
import ManageSpaces from "./pages/ManageSpaces"; // Space Owner manage spaces page
import OwnerBookings from "./pages/OwnerBookings";
// import Bookings from "./pages/Bookings";         // Space Owner bookings page
// import Profile from "./pages/Profile";           // Space Owner profile page

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<App />}>
          <Route index element={<Spaces />} />
          <Route path="register" element={<Register />} />
          <Route path="login" element={<Login />} />
          <Route path="spaces" element={<Spaces />} />
        </Route>

        {/* User Interface for regular users */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<UserPage />} />
          <Route path="spaces" element={<UserSpaces />} />
          <Route path="notifications" element={<Notifications />} />
        </Route>

        {/* Space Owner Interface */}
        <Route path="/spaceowner" element={<SpaceOwnerLayout />}>
          <Route index element={<SpaceOwnerPage />} />
          <Route path="manage" element={<ManageSpaces />} />
          <Route path="/spaceowner/bookings" element={<OwnerBookings />} /> {/* Add this line */}
          {/* <Route path="bookings" element={<Bookings />} />
          <Route path="profile" element={<Profile />} /> */}
        </Route>

        {/* Catch-all Route */}
        <Route path="*" element={<h2>404 - Page Not Found</h2>} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
