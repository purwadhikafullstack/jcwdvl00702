import React from "react";
import "../assets/styles/editProfile.css"

import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'


class EditProfile extends React.Component {
    render(){
        return(
            <div className="page">
                <div className="widhtPage">
                <div className="pageTitle"> 
                 <h3 className="pageName"><ArrowBackIcon/> Profile</h3>
               </div>
               <hr className="shareHr"/>
                 <div className="profileUserEdit">
                  <img
                   className="profileUserImg"
                   src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                   alt=""
                  />
                  <div className="profileUserEditIcon">
                  <AddAPhotoIcon/>
                  </div>
                 </div>

                 <div className="formEdit">
                            <input type="text" className="inputData" placeholder="Full Name"/>
                            <input type="text" className="inputData" placeholder="Email"/>
                    </div>
            
                <div className="saveButton">
                <button class="btn-lp">Save Your Profile</button>
                </div>

                </div>
                </div>
        )
    }
}

export default EditProfile