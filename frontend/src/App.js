import React from "react";
import "./App.css";

import { Container } from "react-bootstrap";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

LoginScreen


const App = () => {
  return (
    <div>
      <Header />

      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} exact />
            <Route path = "/admin/login" element = {<AdminLoginScreen/>} exact />
            <Route path = "/user/login" element = {<UserLoginScreen/>} exact />
            <Routes/>
        <Container/>
      </main>
      </div>
         
  );
}

export default App;

            