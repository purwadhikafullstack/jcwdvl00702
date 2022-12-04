import React, { useContext, useState, useEffect } from "react";
import "../assets/styles/profile.css";

import PersonIcon from "@mui/icons-material/Person";
import EmailIcon from "@mui/icons-material/Email";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import Axios from "axios";

function Profile() {
  const { user: currentUser } = useContext(AuthContext);
  //  console.log(currentUser);
  const userUID = currentUser?.uid;
  console.log(userUID);

  const [fullname, setFullname] = useState("");
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    console.log(userUID, "useeffect check");
    if (userUID) {
      const getUserById = async (userUID) => {
        const response = await Axios.get(
          `http://localhost:3300/api/customer/profile/${userUID}`
        );
        console.log(JSON.stringify(response));
        setPicture(response.data.picture);
        setFullname(response.data.fullname);
        setEmail(response.data.email);
      };
      getUserById(userUID);
    }
  }, [userUID]);
  return (
    <Container maxWidth="xs">
      <div className="profilePage">
        <div className="backPage">
          <ArrowBackIcon /> Homepage
        </div>
        <div className="profilePic">
          <img className="profileUserImg" src={picture} alt="" />
        </div>
        <div className="profilebar">
          <div className="profileWrapper">
            <ul className="profileList">
              <li className="profileListItem">
                <PersonIcon className="profileIcon" />
                <span className="profileListItemText">{fullname}</span>
              </li>
              <li className="profileListItem">
                <EmailIcon className="profileIcon" />
                <span className="profileListItemText">{email}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="profileOption">
          <button className="optionBtn">
            <EditIcon />
            <span className="optionBtnText">Edit Profile</span>
            <ArrowForwardIosIcon />
          </button>
          <Link to="/change-password">
            <button className="optionBtn">
              <EditIcon />
              <span className="optionBtnText">Edit Password</span>
              <ArrowForwardIosIcon />
            </button>
          </Link>
          <button className="optionBtn">
            <ShoppingCartIcon />
            <span className="optionBtnText">Your Cart</span>
            <ArrowForwardIosIcon />
          </button>
          <button className="optionBtn">
            <LocationOnIcon />
            <span className="optionBtnText">address List</span>
            <ArrowForwardIosIcon />
          </button>
        </div>
      </div>
    </Container>
  );
}

export default Profile;
