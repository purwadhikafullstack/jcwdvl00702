import React from "react";
import "../assets/styles/editProfile.css"
import {
  InputAdornment,
  Input,
  FormControl,
} from "@mui/material"
import {Email, Person} from "@mui/icons-material"
import Container from "@mui/material/Container"
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto'


class EditProfile extends React.Component {
    render(){
        return(
           <Container maxWidth="xs">
             <div className="editProfilePage">
                <div className="backPage"><ArrowBackIcon/>   Profile</div>
                <div className="profilePic">
                    <img
                    className="profileUserImg"
                    src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                    alt=""
                    />
                    <button className="editPicBtn"><AddAPhotoIcon/></button>
                </div>
                <div className="editForm">
                    <FormControl variant="standard" className="editFormInput">
                        <Input
                        sx={{ padding: '7px' }}
                        endAdornment={
                           <InputAdornment position="end">
                            <Person />
                           </InputAdornment>
                        }
                         placeholder="Username"
                        />
                    </FormControl>
                    
                    <FormControl className="editFormInput">
                        <Input
                        sx={{ padding: '7px' }}
                        endAdornment={
                           <InputAdornment position="end">
                            <Email />
                           </InputAdornment>
                        }
                         placeholder="Email"
                        />
                    </FormControl>
                </div>
                <div className="saveButton">
                <button class="btn-lp">Save Your Profile</button>
                </div>
            </div>
           </Container>
        )
    }
}

export default EditProfile