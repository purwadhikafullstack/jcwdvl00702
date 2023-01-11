import React from "react";
import "../assets/styles/Footer.css";
import SportsHandballOutlinedIcon from "@mui/icons-material/SportsHandballOutlined";
import { Container } from "@mui/material";

class Footer extends React.Component {
    render() {
        return (
          <>
            <Container maxWidth="xs" className="footer-margin">
              <SportsHandballOutlinedIcon className="logo-store" />
              <h5>Stayfit</h5>
              <div className="footer-data">
                <a href="#">About</a>
                <a href="#">Why Stayfit?</a>
                <a href="#">Privacy</a>
                <a href="#">Terms</a>
              </div>
              <div className="copyright-word">&copy; 2022 Stayfit</div>
            </Container>
          </>
        );
    }
}

export default Footer