import React from "react";

import { Link } from "react-router-dom";
import Input from "react-validation/build/input";
import Form from "react-validation/build/form";
import CheckButton from "react-validation/build/button";

const AdminLoginScreen = (props) => {
  const submitHandler = (e) => {
    e.preventDefault();
    console.log("login");
  };

  return (
    <Form onSubmit={submitHandler}>
      <Form.Group controlId="email">
        <Form.Label>Email Address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" variant="primary">
        Sign In
      </Button>
    </Form>
  );
};

export default AdminLoginScreen;
