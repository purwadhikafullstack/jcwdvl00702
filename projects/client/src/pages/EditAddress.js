import React, { useEffect, useState, useContext } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, FormControl, Input, Button } from "@mui/material";
import "../assets/styles/NewAddress.css";
import { AuthContext } from "../context/AuthProvider";
import Axios from "axios";
import { useParams } from "react-router-dom";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

function EditAddress() {
  const [provinces, setProvinces] = useState();
  const [cities, setCities] = useState();
  const [postals, setPostals] = useState();
  //   const { user: currentUser } = useContext(AuthContext);
  const [address_name, setAddress_name] = useState();
  const [address, setAddress] = useState();
  const [province, setProvince] = useState();
  const [city, setCity] = useState();
  const [postal_code, setPostal_code] = useState();
  const [latitude, setLatitude] = useState();
  const [longitude, setLongitude] = useState();
  const { id } = useParams();
  //  console.log(currentUser);
  //   const userUID = currentUser?.uid;
  //   console.log(userUID);
  const { isLoggedIn, user } = useSelector((state) => ({
    isLoggedIn: state.auth.isLoggedIn,
    user: state.auth.user,
  }));
  const userUID = user?.customer_uid;
  console.log(user);

  useEffect(() => {
    const provinceDetails = async () => {
      try {
        const response = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/address/provinces`
        );
        let provincesArr = JSON.parse(response.data);
        setProvinces(provincesArr);
      } catch (error) {}
    };

    // call the function
    provinceDetails();
  }, []);

  useEffect(() => {
    const locationDetail = async () => {
      try {
        const response = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/address/cities`
        );
        let citiesArr = JSON.parse(response.data);
        setCities(citiesArr);
      } catch (error) {}
    };

    // call the function
    locationDetail();
  }, []);

  useEffect(() => {
    const postalsDetail = async () => {
      try {
        const response = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/address/postal-code`
        );
        let postalsArr = JSON.parse(response.data);
        setPostals(postalsArr);
      } catch (error) {}
    };

    // call the function
    postalsDetail();
  }, []);

  useEffect(() => {
    if (userUID) {
      const getAddressById = async (userUID) => {
        const getAddress = await Axios.get(
          `${process.env.REACT_APP_API_BASE_URL}/address/address-list/${userUID}/${id}`
        );
        console.log(getAddress);
        setAddress_name(getAddress.data.address_name);
        setAddress(getAddress.data.address);
        setProvince(getAddress.data.province);
        setCity(getAddress.data.city);
        setPostal_code(getAddress.data.postal_code);
        setLatitude(getAddress.data.latitude);
        setLongitude(getAddress.data.longitude);
      };
      getAddressById(userUID);
    }
  }, [userUID]);

  const postLatLong = async () => {
    const data = {
      city: city,
    };
    try {
      const response = await Axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/address/lat-long`,
        data
      );
      console.log(response, "latlong");
      console.log(response.data.results[0].geometry.lat, "test");
      setLatitude(response.data.results[0].geometry.lat);
      setLongitude(response.data.results[0].geometry.lng);
    } catch (error) {
      console.log(error);
    }
  };

  const editAddress = async (e) => {
    e.preventDefault();
    const data = {
      address_name: address_name,
      address: address,
      province: province,
      city: city,
      postal_code: postal_code,
      latitude: latitude,
      longitude: longitude,
    };
    try {
      await Axios.put(
        `${process.env.REACT_APP_API_BASE_URL}/address/edit-address/${userUID}/${id}`,
        data
      );
      console.log(id, "ini id nya");
      alert("Berhasil");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Container maxWidth="xs" className="mobile">
        <div className="new-address-page">
          <div className="new-address-detail">
            <ArrowBackIcon />
            <div>Edit Address</div>
          </div>
          <div className="margin-size">Address Label</div>
          <FormControl variant="standard" className="address-type-form-input">
            <Input
              sx={{ padding: "7px" }}
              value={address_name}
              onChange={(e) => setAddress_name(e.target.value)}
            />
          </FormControl>
          <div className="margin-size">Address Detail</div>
          <FormControl variant="standard" className="address-type-form-input">
            <Input
              sx={{ padding: "7px" }}
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormControl>
          <div className="margin-size">Choose Province</div>
          <label>
            <select
              className="select-style"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            >
              {provinces?.rajaongkir.results.map((provinceDetail) => {
                return <option>{provinceDetail.province}</option>;
              })}
            </select>
          </label>
          <div className="margin-size">Choose City</div>
          <label>
            <select
              className="select-style"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              onClick={postLatLong}
            >
              {cities?.rajaongkir.results.map((cityDetail, index) => {
                return <option>{cityDetail.city_name}</option>;
              })}
            </select>
          </label>
          <div className="margin-size">Latitude</div>
          <FormControl variant="standard" className="address-type-form-input">
            <Input
              sx={{ padding: "7px" }}
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
            />
          </FormControl>
          <div className="margin-size">Longitude</div>
          <FormControl variant="standard" className="address-type-form-input">
            <Input
              sx={{ padding: "7px" }}
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
            />
          </FormControl>
          <div className="margin-size">Choose Postal Code</div>
          <label>
            <select
              className="select-style"
              value={postal_code}
              onChange={(e) => setPostal_code(e.target.value)}
            >
              {postals?.rajaongkir.results.map((postalDetail, index) => {
                return <option>{postalDetail.postal_code}</option>;
              })}
            </select>
          </label>
          <Button
            sx={{
              borderRadius: "20px",
              backgroundColor: "black",
              marginTop: "20px",
            }}
            variant="contained"
            className="add-address-button"
            onClick={editAddress}
          >
            Edit Address
          </Button>
        </div>
      </Container>
    </>
  );
}

export default EditAddress;
