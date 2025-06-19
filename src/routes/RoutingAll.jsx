import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Auth/login";
import SignUp from "../components/Auth/signUp";
import Home from "../components/home";
import Appointments from "../features/appointments/appointments";
import Activities from "../features/daycare/Activities";
import ActivityDetail from "../features/daycare/ActivityDetail";


import Assignments from "../features/assignments/Assignments";
import Subjects from "../features/assignments/Subjects";
import SubjectAssignment from "../features/assignments/SubjectAssignment";
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

      <Route path="/classes" element={<PrivateRoute><Assignments /></PrivateRoute>} />
      <Route path="/assignments/:classId" element={<PrivateRoute><Subjects /></PrivateRoute>} />
      <Route path="/assignments/:classId/:subject" element={<PrivateRoute><SubjectAssignment /></PrivateRoute>} />
</Routes>
  );
};

export default RoutingAll;
