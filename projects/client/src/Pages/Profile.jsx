import React from "react";
import "../assets/styles/profile.css"

import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from "@mui/icons-material/Email"
import EditIcon from "@mui/icons-material/Edit"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import LocationOnIcon from '@mui/icons-material/LocationOn'


class Profile extends React.Component {
    render(){
        return(
           <div className="profilePage">
            <div className="backPage"><ArrowBackIcon/>  Homepage</div>
            <div className="profilePic">
                    <img
                    className="profileUserImg"
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                    />
            </div>
            <div className="profilebar">
      <div className="profileWrapper">
        <ul className="profileList">
          <li className="profileListItem">
          <PersonIcon className="profileIcon" />
            <span className="profileListItemText">Fullname</span>
          </li>
          <li className="profileListItem">
          <EmailIcon className="profileIcon" />
            <span className="profileListItemText">Email</span>
          </li>
        </ul>
      </div>
    </div>
            <div className="profileOption">
              <button className="optionBtn">
                <EditIcon/>
                <span className="optionBtnText">Edit Profile</span>
                <ArrowForwardIosIcon/>
              </button>
              <button className="optionBtn">
              <EditIcon/>
                <span className="optionBtnText">Edit Password</span>
              <ArrowForwardIosIcon/>
              </button>
              <button className="optionBtn">
              <ShoppingCartIcon/>
                <span className="optionBtnText">Your Cart</span>
              <ArrowForwardIosIcon/>
              </button>
              <button className="optionBtn">
              <LocationOnIcon/>
                <span className="optionBtnText">address List</span>
              <ArrowForwardIosIcon/>
              </button>
              </div>
           </div>
        )
    }
}

export default Profile