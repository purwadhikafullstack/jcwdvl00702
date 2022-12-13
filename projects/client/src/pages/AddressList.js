import React, { useContext, useEffect, useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "../assets/styles/AddressList.css";
import { Container } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import Axios from "axios";
import { Link } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function AddressList() {
  // const { user: currentUser } = useContext(AuthContext);
  // const userUID = currentUser?.uid;
  // console.log(userUID);
  const { isLoggedIn, user } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  }));
  const userUID = user?.customer_uid;
  console.log(user);


  const [AddressDetails, setAddressDetails] = useState();

  useEffect(() => {
    if (userUID) {
      const getAddressById = async (userUID) => {
        console.log(userUID, "test");
        const response = await Axios.get(
          `http://localhost:3300/api/address/address-list/${userUID}`
        );
        //  console.log(response.data)
        setAddressDetails(response.data);
      };
      getAddressById(userUID);
    }
  }, [userUID]);

  return (
    <>
      <Container maxWidth="xs" className="mobile">
        <div className="address-page">
          <div className="address-arrow-detail">
            <ArrowBackIcon />
            <div>Select address</div>
          </div>
          <div className="address-list">
            {AddressDetails?.map((addressDetail) => (
              <div className="address">
                <LocationOnOutlinedIcon />
                <div className="address-info">
                  <div className="address-type">
                    {addressDetail.address_name}
                  </div>
                  <div className="address-detail">
                    {addressDetail.address}, {addressDetail.city},{" "}
                    {addressDetail.province}, {addressDetail.postal_code}
                  </div>
                </div>
                {/* <input type="radio" className="radio-css" /> */}
                <Link to={`/edit-address/${userUID}/${addressDetail.id}`}>
                  <ModeEditOutlineOutlinedIcon className="radio-css" />
                </Link>
              </div>
            ))}
          </div>
          <Link to={`/add-address/${userUID}`}>
            <button className="button-new-address">Add New Address</button>
          </Link>
          <button className="button-confirm">Confirm</button>
        </div>
      </Container>
    </>
  );
}

export default AddressList;
