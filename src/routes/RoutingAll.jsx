import { Routes, Route } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Login from "../components/Auth/login";
import SignUp from "../components/Auth/signUp";
import Home from "../components/home";
import Appointments from "../pages/Appointments/appointments";
import Page1 from "../pages/Resouces/page1";


export const RoutingAll = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signUp" element={<SignUp/>} />
      <Route path="/" element={<PrivateRoute><Home /></PrivateRoute>}/>
      <Route path="/appointments" element={<Appointments/>} />
      <Route path="/page1" element={<Page1/>} />
    </Routes>
  );
};

export default RoutingAll;
