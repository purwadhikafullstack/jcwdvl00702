import React from 'react';
import { Container } from "@mui/material";
import {Email,Password} from '@mui/icons-material'
import { useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { loginUser,logoutUser } from '../../redux/actionCreators/authActionCreators';
import { firebaseAuthentication } from '../../config/firebase';
import '../../assets/styles/reconfirmAdmin.css'

export default function Reconfirm(){
    return(
        <div className='reconfirm-wrap'>
            <Container maxWidth="xs" sx={{ backgroundColor: 'white' }} className='reconfirm-container'>
                <div className='top-wrapper'>
                    <div className='reconfirm-title'>
                        Admin Confirmation
                    </div>
                    <div className='img-wrapper'>
                        <img
                            className='reconfirm-img'
                            src="https://media.istockphoto.com/id/1124964231/vector/check-mark-logo-vector-or-icon.jpg?s=612x612&w=0&k=20&c=qDcZHKlPnO8Ux_1ja77xfUmcAUsZquejrSfFaJpPPYo=" 
                        />
                    </div>
                </div> 
                <div className='bot-wrapper'>
                    <div className='box-input'>
                        <Email style={{ fill: "gray", marginLeft: "5px" }} />
                        <input
                            placeholder="Email"
                            className="input-admin"
                        />
                    </div>
                    <div className='box-input'>
                        <Password style={{ fill: "gray", marginLeft: "5px" }} />
                        <input
                            placeholder="Password"
                            className="input-admin"
                        />
                    </div>
                </div>
                <div className='btn-wrapper'>
                    <button className='btn-confirm'>Confirm</button>
                </div>
            </Container>
        </div>
        
    )
}