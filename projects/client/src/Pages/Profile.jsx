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
            <div className="page">
                <div className="widhtPage">
                <div className="pageTitle"> 
                 <h3 className="pageName"><ArrowBackIcon/> Back to Home Page</h3>
               </div>
               <hr className="shareHr"/>
                  <div className="profileUserImgA">
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
    <hr className="shareHr"/>

    <div className="editOption">
    <div className="editProfile">
            <div className="editContent">
              <div className="logo">
              <EditIcon  />
              </div>
              <div className="description">
                 <h6>Edit Profile</h6>
             </div>
              <div className="editDirection">
               <ArrowForwardIosIcon/>
              </div>
            </div>
    </div>
    <div className="editProfile">
            <div className="editContent">
              <div className="logo">
              <EditIcon  />
              </div>
              <div className="description">
                 <h6>Edit Password</h6>
             </div>
              <div className="editDirection">
               <ArrowForwardIosIcon/>
              </div>
            </div>
    </div>
    </div>
           <hr className="shareHr"/>
           <div className="editProfile">
            <div className="editContent">
              <div className="logo">
              <ShoppingCartIcon  />
              </div>
              <div className="description">
                 <h6>Your Cart</h6>
             </div>
              <div className="editDirection">
               <ArrowForwardIosIcon/>
              </div>
            </div>
           </div>
           <div className="editProfile">
            <div className="editContent">
              <div className="logo">
              <LocationOnIcon  />
              </div>
              <div className="description">
                 <h6>Address List</h6>
             </div>
              <div className="editDirection">
               <ArrowForwardIosIcon/>
              </div>
            </div>
           </div>
                </div>
            </div>
        )
    }
}

export default Profile