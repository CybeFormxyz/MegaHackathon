import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import Button from 'react-bootstrap/Button';
import ReactDOM from "react-dom/client";
import UserViewForm from './form';
import Mainbody from './Mainbody';
import CreateForm from './CreateForm';
import App from "./App";
import {LinkContainer} from 'react-router-bootstrap'
import Stack from 'react-bootstrap/Stack';

import {
  Link,
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";


function MoralisNavbar() {

    let [menuText1, setMenuText1] = useState("Login");

    const { authenticate, isAuthenticated, isAuthenticating, user, account, logout } = useMoralis();

    useEffect(() => {
    if (isAuthenticated) {
      // add your logic here
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated]);

    const login = async () => {
      if (!isAuthenticated) {

        await authenticate({signingMessage: "Log in using Moralis" })
          .then(function (user) {
            console.log("logged in user:", user);
            if(user){
              const fullAddress = user.get("ethAddress");
              const briefAddress = fullAddress.substring(0, 8)+"..."+fullAddress.substring(fullAddress.length-2);
              setMenuText1(briefAddress);
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      }
    }

    const logOut = async () => {
      await logout();
      console.log("logged out");
    }

//   return (
//     <div>
      
//     </div>
//   );
  return (
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="/home">CyberForm</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <LinkContainer to='/manageform'>
              <Nav.Link href="/manageform">Manage Form</Nav.Link>
              </LinkContainer>
              <LinkContainer to='/createform'>
              <Nav.Link href="/createform">Create Form</Nav.Link>
              </LinkContainer>
              {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Stack direction="horizontal" gap={3}>
            <Button variant="dark" onClick={login}>{menuText1}</Button> {' '}
            <div className="vr" />

            <Button variant="dark" onClick={logOut} disabled={isAuthenticating}>Logout</Button>
            </Stack>
          </Navbar.Collapse>
        </Container>
      </Navbar>

  );
}

export default MoralisNavbar;