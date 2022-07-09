import Table from 'react-bootstrap/Table';
import "./Mainbody.css"
import { JsonToTable } from "react-json-to-table";

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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Response() {
    const [show, setShow] = useState(false);
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

    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate('/manageform', { replace: true }), [navigate]);


    return (
        <Styles>                
        <br />
        <br />
        <h1>Mega Hackathon NFT Airdrop information collections</h1>            
        <div className="mainbody">
                <br/>
                <br />
                <Table striped bordered hover size="lg">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Wallet Address</th>
                            <th>Submission time</th>
                            <th>Access</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>0x7Dc2b15856320a8AE56209FC0565A8a095a2A803</td>
                            <td>2020-07-08 00:02:35</td>
                            <td>True</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>0x8907B7751f5986E17FAB1DcF5d9089d31Db594D8</td>
                            <td>2020-07-08 00:09:15</td>
                            <td>True</td>
                        </tr>
                        <tr onClick={() => toast("❌Access Denied.")}>
                            <td>3</td>
                            <td>0xc01259f8dd90cB44620c3a3c1c08Fa5Dc624fF77</td>
                            <td>2020-07-08 00:09:18</td>
                            <td>True</td>
                        </tr>
                    </tbody>

                </Table>
                { show ? 
                <div>
                    <Alert onClose={() => setShow(false)} >
                        <p>
                            <JsonToTable json={myJson} />
                        </p>
                        <div className="d-flex justify-content-end">
                            <Button onClick={() => setShow(false)} variant="outline-success">
                                Close
                            </Button>
                        </div>
                    </Alert>
                </div>
                : <></>}

                <br />
                <br />

            </div>
            <ToastContainer/>
        </Styles>

    );
};

export default Response;