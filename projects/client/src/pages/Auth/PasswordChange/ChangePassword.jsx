import axios from "axios"
import "../../../assets/styles/passwordChange.css"
import {useState,useEffect,useContext} from "react"
import {ArrowBack,Email} from "@mui/icons-material"
import { Link } from "react-router-dom"

export default function ChangePassword(){
    return(
        <div className="changepass-wrapper">
            <div className="changepass-topside">
                <div className="changepass-title">
                    <div>
                        <Link to ="/">
                            <button className="arrowback"><ArrowBack/></button>
                        </Link>
                    </div>
                    <div className="changepass-text">Change Password</div>
                </div>
                <div className="changepass-img-container">
                    <img className="changepass-img" src="http://cdn.onlinewebfonts.com/svg/img_398183.png"/>
                </div>
            </div>
            <div className="changepass-botside">
                <div className="changepass-email-text">Please enter your email below</div>
                <div className="email-wrapper">
                    <div className="email-icon"><Email/></div>
                    <div className="email-input"><input type="email" className="changepass-email"/></div>
                </div>
                <div className="divider"><hr className="changepass-line" /></div>
                <div className="changepass-button">
                    <Link to='/resetpass'>
                        <button className="changepass-continue">Send</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}