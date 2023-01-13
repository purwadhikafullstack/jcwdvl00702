import React from 'react';
import { Button, IconButton, Container, Select, MenuItem, InputBase } from '@mui/material';
import {
  ArrowBack,
  Person,
  Email,
  Password,
  ArrowForwardIos,
  Badge,
  Schedule,
  VerifiedUser,
  Lock,
  PhotoCamera,
  Work,
} from '@mui/icons-material';
import { Link , useParams } from 'react-router-dom';
import '../../assets/styles/DetailUser.css';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import YupPassword from 'yup-password';
import { firebaseAuthentication } from '../../config/firebase';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../../redux/actionCreators/authActionCreators';

export default function DetailUser() {
  const dispatch = useDispatch()
  let history = useHistory();
  const{id} = useParams()

  const [isEdit, setIsEdit] = useState(false);
  const [securityValue, setSecurityValue] = useState(0);
  const [editDetail, setEditDetail] = useState([]);
  const [currentEmail, setCurrentEmail] = useState()
  const [dataFullname,setDataFullname] = useState()
  const [currentPass, setCurrentPass] = useState()

  const detailListing=()=>{
    Axios.get(`http://localhost:3300/api/customer/profile/${id}`) //fetch user detail
    .then(res=>{
      setEditDetail(res.data)
      setCurrentEmail(res.data.email)
    })
  }

  useEffect(() => {
    detailListing();
  }, []);

  const editHandler = () => {
    setIsEdit(true);
  };

  const saveHandler = () => {
    setIsEdit(false);
    window.location.reload()
  };

  const handleSecurityChange = (event) => {
    setSecurityValue(event.target.value);
  };

  const goBack = () => {
    history.goBack();
  };

  YupPassword(Yup);
  const formik = useFormik({
    initialValues: {
      email: '',
      newEmail: '',
      fullname: '',
      oldPass: '',
      newPass: '',
    },
    validationSchema: Yup.object().shape({
      email: Yup.string()
      .required('No email entered').email('Not an email format'),
      newEmail: Yup.string()
      .email('Not an email format'),
      fullname: Yup.string(),
      //   .matches(/^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi, 'Name can only contain Latin letters.')
      //   .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.'),
      oldPass: Yup.string().required('Please Enter your password'),
      newPass: Yup.string()
    }),
    validateOnChange: false,
    onSubmit: async (values) => {
      firebaseAuthentication
        .signInWithEmailAndPassword(values.email, values.oldPass)
        .then((res)=>{
          // console.log(res.user.providerData[0],'habis login')
          // if(!values.fullname){ 
          //   setDataFullname(editDetail.fullname) 
          // } else {
          //   setDataFullname(values.fullname) 
          // }

          // if(!values.newEmail){
          //   setCurrentEmail(editDetail.email)
          // } else{
          //   setCurrentEmail(values.newEmail)
          // }

          // if(!values.newPass){
          //   setCurrentPass(values.oldPass)
          // } else{
          //   setCurrentPass(values.newPass)
          // }
          const newData = {
            email:values.newEmail,
            fullname:values.fullname,
            password:values.oldPass,
          }
          
          firebaseAuthentication.currentUser.updateEmail(newData.email)
          .then((res)=>{
            Axios.put(`http://localhost:3300/api/admin/update-detail/${editDetail.customer_uid}`,newData)
                .then((res) => {
                  console.log(res.data)
                  // firebaseAuthentication.signOut()
                  // dispatch(logoutUser())
                })
                .catch((error) => {
                  console.log(error);
            });
          })
          .catch(err=>{
            alert(err)
          })

        }) 
        .catch((err)=>{
          alert(err)
        })
    },
  });

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="detailuser-main">
        <div className="detailuser-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <div className="detailuser-banner-text">User Detail</div>

          {isEdit ? (
            <>
              {/* <Button
                disabled
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,153,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                  marginRight: '5px',
                }}
                variant="contained"
                className="detailuser-banner-delete">
                Delete
              </Button> */}
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,255,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                onClick={saveHandler}
                className="detailuser-banner-edit">
                Exit Edit
              </Button>
            </>
          ) : (
            <>
              {/* <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,153,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                  marginRight: '5px',
                }}
                variant="contained"
                className="detailuser-banner-delete">
                Delete
              </Button> */}
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,204,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                onClick={editHandler}
                className="detailuser-banner-edit">
                Edit
              </Button>
            </>
          )}
        </div>
        <div className="detailuser-content">
          {isEdit ? (
            <>
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="label"
                sx={{ marginLeft: '250px', width: '40px', marginBottom: '-30px' }}>
                <input hidden accept="image/*" type="file" />
                <PhotoCamera />
              </IconButton>
              <div className="detailuser-content-avatar-edit">
                <img
                  className="profileUserImg"
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                  alt=""
                />
              </div>
            </>
          ) : (
            <>
              <div className="detailuser-content-avatar">
                <img
                  className="profileUserImg"
                  src="https://media.istockphoto.com/id/1309328823/photo/headshot-portrait-of-smiling-male-employee-in-office.jpg?b=1&s=170667a&w=0&k=20&c=MRMqc79PuLmQfxJ99fTfGqHL07EDHqHLWg0Tb4rPXQc="
                  alt=""
                />
              </div>
            </>
          )}
          <div className="detailuser-content-detail">
            <ul className="du-c-d-data">
              <li className="du-c-d-item">
                <Badge className="profileIcon" />
                <span className="du-c-d-item-1">ID User</span>
                <span className="du-c-d-item-2">{editDetail?.customer_uid}</span>
              </li>

              {isEdit ? (
                <>
                  <li className="du-c-d-item">
                    <Person className="profileIcon" />
                    <span className="du-c-d-item-1">Fullname</span>
                    <InputBase
                      sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                      placeholder={editDetail.fullname}
                      className="du-c-d-item-2-input"
                      onChange={(e) => formik.setFieldValue('fullname', e.target.value)}
                      // value={editDetail.fullname}
                    />
                  </li>
                  <li className="du-c-d-item">
                    <Email className="profileIcon" />
                    <span className="du-c-d-item-1">Old Email</span>
                    <InputBase
                      sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                      placeholder={editDetail.email}
                      className="du-c-d-item-2-input"
                      onChange={(e) => formik.setFieldValue('email', e.target.value)}
                      // value={editDetail.email}
                    />
                  </li>
                  <li className="du-c-d-item">
                    <Email className="profileIcon" />
                    <span className="du-c-d-item-1">New Email</span>
                    <InputBase
                      sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                      className="du-c-d-item-2-input"
                      onChange={(e) => formik.setFieldValue('newEmail', e.target.value)} //values.newemail bisa kepanggil
                    />
                  </li>
                  <li className="du-c-d-item">
                    <Password className="profileIcon" />
                    <span className="du-c-d-item-1">Old Password</span>
                    <InputBase
                      sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                      className="du-c-d-item-2-input"
                      placeholder={`Old password must be filled`}
                      onChange={(e) => formik.setFieldValue('oldPass', e.target.value)}
                    />
                  </li>
                  {/* <li className="du-c-d-item">
                    <Password className="profileIcon" />
                    <span className="du-c-d-item-1">New Password</span>
                    <InputBase
                      sx={{ fontFamily: 'Lora', fontSize: '12px' }}
                      className="du-c-d-item-2-input"
                      onChange={(e) => formik.setFieldValue('newPass', e.target.value)}
                    />
                  </li> */}
                </>
              ) : (
                <>
                  <li className="du-c-d-item">
                    <Person className="profileIcon" />
                    <span className="du-c-d-item-1">Fullname</span>
                    <span className="du-c-d-item-2">{editDetail?.fullname}</span>
                  </li>
                  <li className="du-c-d-item">
                    <Email className="profileIcon" />
                    <span className="du-c-d-item-1">Email</span>
                    <span className="du-c-d-item-2">{editDetail?.email}</span>
                  </li>
                </>
              )}

              <li className="du-c-d-item">
                <Schedule className="profileIcon" />
                <span className="du-c-d-item-1">Member since</span>
                <span className="du-c-d-item-2">{editDetail?.createdAt}</span>
              </li>
              <li className="du-c-d-item">
                <VerifiedUser className="profileIcon" />
                <span className="du-c-d-item-1">Status</span>
                <span className="du-c-d-item-2">{editDetail?.is_verified ? 'Verifed' : 'Not Verified'}</span>
              </li>
              <li className="du-c-d-item">
                {isEdit ? (
                  <>
                    <Lock className="profileIcon" />
                    <span className="du-c-d-item-1">Security</span>
                    <Select
                      sx={{ fontSize: '10px' }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={securityValue}
                      className="du-c-d-item-2-select"
                      onChange={handleSecurityChange}>
                      <MenuItem value={0}>
                        <em>Security Status</em>
                      </MenuItem>
                      <MenuItem value={1}>Safe</MenuItem>
                      <MenuItem value={2}>Banned</MenuItem>
                    </Select>
                  </>
                ) : (
                  <>
                    <Lock className="profileIcon" />
                    <span className="du-c-d-item-1">Security</span>
                    <span className="du-c-d-item-2">Banned</span>
                  </>
                )}
              </li>
              {isEdit ? <button type="submit" onClick={formik.handleSubmit}>Submit Changes</button> : null}
            </ul>
          </div>
          {/* <div className="detailuser-content-option">
            <Link to="/address-list" className="du-c-o-button">
              <button className="du-c-o">
                <Edit />
                <span className="du-c-o-text">Address List</span>
                <ArrowForwardIos />
              </button>
            </Link>
            <Link to="/my-order" className="du-c-o-button">
              <button className="du-c-o">
                <Edit />
                <span className="du-c-o-text">Order List</span>
                <ArrowForwardIos />
              </button>
            </Link>
          </div> */}
        </div>
      </div>
    </Container>
  );
}
