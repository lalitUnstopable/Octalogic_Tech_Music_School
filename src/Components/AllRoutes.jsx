import React from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import NewCourse from "./NewCourse";
import PrivateRoute from "./PrivateRoute";
import Home from "./Home";
import Course from "./Course";

const AllRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/course" element={<Course />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/newCourse" element={<NewCourse />} />
      </Routes>
    </Router>
  );
};

export default AllRoutes;
