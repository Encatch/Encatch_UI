import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Auth/login";
import SignUp from "../components/Auth/signUp";
import Home from "../components/home";
import Appointments from "../features/appointments/appointments";
import Activities from "../features/daycare/Activities";
import ActivityDetail from "../features/daycare/ActivityDetail";


export const RoutingAll = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }
      />
      <Route path="/appointments" element={<Appointments />} />
      <Route path="/activities" element={<PrivateRoute><Activities /></PrivateRoute>} />
      <Route path="/activities/:id" element={<PrivateRoute><ActivityDetail /></PrivateRoute>} />
    </Routes>
  );
};

export default RoutingAll;
