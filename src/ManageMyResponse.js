import Table from 'react-bootstrap/Table';
import "./Mainbody.css"
import { JsonToTable } from "react-json-to-table";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import { useParams } from "react-router";
// import {db} from './firebase'
import axios from "axios";
import { useCallback } from 'react';
import { useNavigate } from "react-router-dom";
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from '@material-ui/core/Button';
import Styles from "./Styles";

function MyResponse() {
    const notify = () => toast("Revoke Successfully !");

    const myJson = {
        "employed": true,
        "name": "Julie",
        "email": "yuanjess@usc.edu",
        "discord": "discord#123",
        "favoriteColor": "University of Southern California",
        "Finished": [
            "dorahacks",
            "metajam"
        ],
        "role": "developer",
        "notes": "123"
    };

    return (
        <Styles>
            <br />
            <br />
            <h1>Mega Hackathon NFT Airdrop information collections</h1>
            <div className="mainbody">
                <br />
                <br />

                <div>
                    <Alert key="light" variant="light">
                        <h2>Your Response</h2>
                        <p>
                            <JsonToTable json={myJson} />
                        </p>
                        <Button variant="dark" onClick={notify}>
                            Revoke Form Owner's Access
                        </Button>
                    </Alert>
                {/* <ToastContainer /> */}

                    <ToastContainer
                        position="top-right"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                    />
                    {/* Same as
                    <ToastContainer /> */}

                </div>
                <br />
                <br />

            </div>

        </Styles>

    );
};

export default MyResponse;