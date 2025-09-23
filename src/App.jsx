import React from "react";
import "./App.css"
import { Route, Router, Routes } from "react-router-dom";

// import LoginPage from "./pages/login";
import AuthRoute from "./Routes/AuthRoute";
import SingUpPage from "./pages/singup";
import PrivateRoute from "./Routes/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";
import UserCourse from "./pages/UserCourse";
import AllCourses from "./pages/UserCourse/AllCourses";
import LandingPage from "./pages/landing page";
import EnrolledFrom from "./pages/UserDeshbord/EnrolledFrom";
import UserDeshbord from "./pages/UserDeshbord/UserDeshbord";
import UpdateUserProfile from "./pages/update/updateUserProfile";

const App = () => {
  return (
    <>
      <Routes>
        <Route element={<AuthRoute />}>
          {/* <Route path="/login" element={<LoginPage />} /> */}
          <Route path="/Signup" element={<SingUpPage />} />
        </Route>

        <Route path="*" element={<NotFound />} />
        <Route index element={<LandingPage />} />

        <Route element={<PrivateRoute />}>
          <Route path="/All-Courses" element={<AllCourses />} />
          <Route path="UserCourse" element={<UserCourse />} />
          <Route path="/UserDeshbord" element={<UserDeshbord />} />
          <Route path="/EnrolledFrom" element={<EnrolledFrom />} />
          <Route path="/updateUserProfile" element={<UpdateUserProfile />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
