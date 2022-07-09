/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import ReactDOM from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import { MoralisProvider } from "react-moralis";
import reportWebVitals from "./reportWebVitals";
import App from "./App"
import MoralisNavbar from './Navbar';
import UserViewForm from './form';
import Mainbody from './Mainbody';
import CreateForm from './CreateForm';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

ReactDOM.render(
  <Router>
    <MoralisProvider serverUrl="https://60r9ytb776t6.usemoralis.com:2053/server" appId="QlJ1itRM5T1dgd3VP0fWwmjFRZPcrkkQkI3mAq1H">
      <App/>
    </MoralisProvider>
    </Router>,
  document.getElementById("root")
);