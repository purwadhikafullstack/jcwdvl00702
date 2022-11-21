import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import "../assets/styles/AddressList.css";
import { Container } from "@mui/material";

class AddressList extends React.Component {
    render() {
        const addressDetails = [
          {
            addressInfo: "Home",
            addressDesc: "Citra Garden 6 Blue Ginger. Jakarta Barat",
          },
          {
            addressInfo: "Office",
            addressDesc: "PT Surya Prima Eltrindo. Taman Palem Q1. Jakarta Barat",
          },
          {
            addressInfo: "Warehouse",
            addressDesc: "Gudang Sedayu. Tangerang.",
          },
        ];
        return (
          <>
            <Container maxWidth="xs" className="mobile">
              <div className="address-page">
                <div className="address-arrow-detail">
                  <ArrowBackIcon />
                  <div>Select address</div>
                </div>
                <div className="address-list">
                  {addressDetails.map((addressDetail, index) => (
                    <div className="address">
                      <LocationOnOutlinedIcon />
                      <div className="address-info">
                        <div className="address-type">
                          {addressDetail.addressInfo}
                        </div>
                        <div className="address-detail">
                          {addressDetail.addressDesc}
                        </div>
                      </div>
                      <input type="radio" className="radio-css" />
                    </div>
                  ))}
                </div>
                <button className="button-new-address">Add New Address</button>
                <button className="button-confirm">Confirm</button>
              </div>
            </Container>
          </>
        );
    }
}

export default AddressList;