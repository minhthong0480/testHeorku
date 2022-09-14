//import all pages
import Login from "./auth/Login";
import Home from "./components/Home";
import Register from "./auth/Register";
import Navbar from "./components/Navbar";
import MyAccount from "./user/MyAccount";
import ForgotPassword from "./components/ForgotPassword";
import UserDashboard from "./user/UserDashboard";
import UserDashbooking from "./user/UserDashBooking";
import UserBooking from "./user/Userbooking";
import UserPet from "./user/UserPet";
import StaffDashboard from "./staff/StaffDashboard";
import StaffDashBooking from "./staff/StaffDashBooking";
import StaffBooking from "./staff/StaffBooking";
import EditPet from "./user/EditPet";
import ViewBooking from "./components/ViewBooking";

//import dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PrivateRoute from "./components/PrivateRoute";
import Redirect from "./components/Redirect";
import StaffPet from "./staff/StaffPet";
import ResetPass from "./components/ResetPass";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-center" autoClose={3000} />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/redirect" element={<Redirect />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/myaccount" element={<MyAccount />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password/:token" element={<ResetPass />} />
          <Route exact path="/user/update-user/:userId" element={<MyAccount />} />

        {/* code for private route */}
        <Route element={<PrivateRoute />}>
          <Route exact path="/user/dashboard" element={<UserDashboard />} />
          <Route exact path="/booking/:bookingId" element={<ViewBooking />} />
          <Route
            exact
            path="/user/dashboard/booking"
            element={<UserDashbooking />}
          />
          <Route exact path="/user/booking" element={<UserBooking />} />
          <Route exact path="/user/create-pet" element={<UserPet />} />
          <Route exact path="/staff/create-pet" element={<StaffPet />} />
          <Route exact path="/staff/dashboard" element={<StaffDashboard />} />
          <Route
            exact
            path="/staff/dashboard/booking"
            element={<StaffDashBooking />}
          />
          <Route exact path="/staff/booking" element={<StaffBooking />} />
          <Route exact path="/user/edit-pet/:petId" element={<EditPet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );

  // )
}

export default App;
