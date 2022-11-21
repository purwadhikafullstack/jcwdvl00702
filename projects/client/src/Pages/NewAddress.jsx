import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Container, FormControl, Input, Button } from "@mui/material";
import "../assets/styles/NewAddress.css";
import GoogleMaps from "../components/GoogleMaps";


class NewAddress extends React.Component {
    render() {
        return (
          <>
            <Container maxWidth="xs" className="mobile">
              <div className="new-address-page">
                <div className="new-address-detail">
                  <ArrowBackIcon />
                  <div>Create New Address</div>
                </div>
                <GoogleMaps />
                <div className="margin-size">Address Label</div>
                <FormControl
                  variant="standard"
                  className="address-type-form-input"
                >
                  <Input sx={{ padding: "7px" }} />
                </FormControl>
                <div className="margin-size">Address Detail</div>
                <FormControl
                  variant="standard"
                  className="address-type-form-input"
                >
                  <Input sx={{ padding: "7px" }} />
                </FormControl>
                <Button
                  sx={{ borderRadius: "20px", backgroundColor: "black", marginTop:"20px" }}
                  variant="contained"
                  className="add-address-button"
                >
                   Add Address
                </Button>
              </div>
            </Container>
          </>
        );
    }
}

export default NewAddress;


