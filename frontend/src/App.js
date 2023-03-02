import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";
import AdminLoginScreen from "./screens/AdminLoginScreen";
import UserLoginScreen from "./screens/UserLoginScreen";
import HomeScreen from "./screens/HomeScreen";

import UserListScreen from "./screens/UserListScreen";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <div>
      <Container>
        <Routes>
          <Route path="/" element={<HomeScreen />} exact />
          <Route path="/admin/login" element={<AdminLoginScreen />} exact />
          <Route path="/user/login" element={<UserLoginScreen />} exact />
          <Route path="/userlist" element={<UserListScreen />} exact />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
