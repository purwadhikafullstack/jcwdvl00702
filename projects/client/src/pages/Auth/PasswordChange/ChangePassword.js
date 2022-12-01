import axios from "axios";
import "../../../assets/styles/passwordChange.css";
import { useState, useEffect, useContext, useRef } from "react";
import { ArrowBack, Email } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { AuthContext } from "../../../context/AuthProvider";
import { firebaseAuthentication } from "../../../config/firebase";


export default function ChangePassword() {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [email, setEmail] = useState("");

  const inputHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    firebaseAuthentication
      .sendPasswordResetEmail(email)
      .then(() => {
        alert("Cek email untuk ubah password");
        window.history.push("/reset-password");
      })
      .catch((error) => {
        alert(error.message);
      });
    console.log(email);

  };
  return (
    <div className="password-wrap">
      <Container maxWidth="xs" className="password-container">
        <div className="changepass-wrapper">
          <div className="changepass-topside">
            <div className="changepass-title">
              <div>
                {/* <Link to="/"> */}
                <button className="arrowback">
                  <ArrowBack />
                </button>
                {/* </Link> */}
              </div>
              <div className="changepass-text">Change Password</div>
            </div>
            <div className="changepass-img-container">
              <img
                className="changepass-img"
                src="http://cdn.onlinewebfonts.com/svg/img_398183.png"
              />
            </div>
          </div>
          <div className="changepass-botside">
            <div className="changepass-email-text">
              Please Enter Your Email Below
            </div>
            <div className="password-input">
              <Email style={{ fill: "gray", marginLeft: "5px" }} />
              <input
                placeholder="Email"
                className="reset-input"
                onChange={inputHandler}
                value={email}
              />
            </div>
            <div className="changepass-button">
              <Link to="/reset-password">
                <button className="changepass-continue" onClick={submitHandler}>
                  Send
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
