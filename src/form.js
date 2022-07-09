/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import ReactDOM from "react-dom";
import Styles from "./Styles";
import { Form, Field } from "react-final-form";
import { MoralisProvider } from "react-moralis";
import reportWebVitals from "./reportWebVitals";
import App from "./App"
import Button from 'react-bootstrap/Button';
import MoralisNavbar from './Navbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
    toast("🎉Your submission has been saved encrypted, only your and the form owner's wallets can access it. ");
    await sleep(300);

    toast("💡If you don't want the form owner to access your data any more, Go to Manage Form and Cancel it");
  };
function UserViewForm (){
  const notify = () => toast("Revoke Successfully !");
  return(
  <Styles>
    <h1>Mega Hackathon NFT Airdrop information collections</h1>
    <Form
      onSubmit={onSubmit}
      initialValues={{ name: "", student: false }}
      render={({ handleSubmit, form, submitting, pristine, values }) => (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Your Name</label>
            <Field
              name="name"
              component="input"
              type="text"
            />
          </div>          
          <div>
            <label>Email</label>
            <Field
              name="email"
              component="input"
              type="text"
            />
          </div>
          <div>
            <label>Discord Handle</label>
            <Field
              name="discord"
              component="input"
              type="text"
              placeholder=""
            />
          </div>
          <div>
            <label>Student</label>
            <Field name="student" component="input" type="checkbox" />
          </div>
          <div>
            <label>University</label>
            <Field name="favoriteColor" component="select">
              <option />
              <option >University of Southern California</option>
              <option >Northwestern University</option>
              <option >UC Berkeley</option>
              <option >UC San Diego</option>
            </Field>
          </div>
          <div>
            <label>Finished</label>
            <Field name="Finished" component="select" multiple>
              <option value="retweet">retweet and follow us</option>
              <option value="dorahacks">submit on dorahacks</option>
              <option value="metajam">submit on metajam</option>
              <option value="github">have github ready</option>
            </Field>
          </div>
          <div>
            <label>Your role</label>
            <div>
              <label>
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value="developer"
                />{" "}
                💻 developer
              </label>
              <label>
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value="investor"
                />{" "}
                💰 investor
              </label>
              <label>
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value="designer"
                />{" "}
                🎨 designer
              </label>
              <label>
                <Field
                  name="role"
                  component="input"
                  type="radio"
                  value="newcomer"
                />{" "}
                🐤 new comer
              </label>            </div>
          </div>
          <div>
            <label>Notes</label>
            <Field name="notes" component="textarea" placeholder="Notes" />
          </div>
          <div className="buttons">
            <Button type="submit" disabled={submitting || pristine}>
              Submit
            </Button>
            <button
              type="button"
              onClick={form.reset}
              disabled={submitting || pristine}
            >
              Reset
            </button>
          </div>

          {/* <pre>{JSON.stringify(values, 0, 2)}</pre> */}
        </form>
      )}
    />
                        <ToastContainer/>

  </Styles>
);
}

export default UserViewForm;