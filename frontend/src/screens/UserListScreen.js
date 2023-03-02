import { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import { Table, Form, Button, Row, Col } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";

import { loginAction } from "../actions/userAction";

import React from "react";

import FormContainer from "../components/FormContainer";

import { useHistory } from "react-router-dom";

import { LinkContainer } from "react-router-bootstrap";

import { useNavigate } from "react-router-dom";

import { createBrowserHistory } from "history";

const UserListScreen = () => {
  const dispatch = useDispatch();

  const history = createBrowserHistory();

  const navigate = useNavigate();

  const { users, loading, error } = useSelector((state) => state.userList);

  useEffect(() => {
    // action dispatching for list of user
    //dispatch(UserListAction());
  }, UserListAction);

  const deleteHandler = (id) => {
    console.log(id);

    // action dispatch for deleting the project of the user

    //dispatch(UserDeleteAction(id));
  };

  return (
    <>
      <h1>Users</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Table striped bordered hover reponsive className="table-sm">
          <thead>
            <tr>
              <th>ID</th>
              <th>USER NAME</th>
              <th>PROJECT NAME</th>
              <th>EMAIL</th>
              <th>STATUS</th>
              <th>DELETE</th>
            </tr>
          </thead>

          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </td>
                <td>{user.projectName}</td>
                <td>{user.projectStatus}</td>
                <td>
                  <Button
                    variant="danger"
                    className="btn-sm"
                    onClick={() => deleteHandler(user._id)}
                  ></Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
};

export default UserListScreen;
