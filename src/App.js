import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useMoralis } from "react-moralis";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserViewForm from './form';
import Mainbody from './Mainbody';
import CreateForm from './CreateForm';
import MoralisNavbar from './Navbar';
import Image from 'react-bootstrap/Image';
import Home from './Home';
import Response from './Response';
import MyResponse from './ManageMyResponse';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Nav } from 'react-bootstrap';



function App() {
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

  return (
    <div>
      {/* <MoralisNavbar/> */}
      <MoralisNavbar/>
      <Routes>
        
      {/* <Route path="/" element={<App />}/> */}
        <Route path="/home" element={<Home />}/>
        <Route path="/response/123" element={<Response />}/>

        <Route path="/answer/123" element={<MyResponse />}/>

          {/* <Route index element={<Home />} /> */}
          <Route path="userviewform" element={<UserViewForm />}/>
          <Route path="manageform" element={<Mainbody />} />
          <Route path="createform" element={<CreateForm />} />
      </Routes>
      {/* <Button onClick={login}>{menuText1}</Button>
      <Button onClick={logOut} disabled={isAuthenticating}>Logout</Button>
       */}
    </div>
  );
}

export default App;