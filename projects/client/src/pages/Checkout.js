import React from "react";
import "../assets/styles/checkout.css"
import { Container } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowBackIcon from '@mui/icons-material/ArrowBack'



class Checkout extends React.Component{

    checkoutList = () => {
        return (
          <div className="card-main">
            <div className="card-image">
              <img
                src="https://cf.shopee.co.id/file/442835254598ddfbf47d10830a99b3a8"
                className="card-product"
                alt="Product Image"
              />
            </div>
            <div className="card-detail">
              <div className="card-detail-name">Nike Mercurial Vapor 8</div>
              <div className="card-detail-subname">White | shoes | 41</div>
              <div className="card-detail-bottom">
                <div className="card-detail-bottom-price">Rp. 2.250.000 ,-</div>
                <div className="card-detail-bottom-qty">Qty: 1</div>
              </div>
            </div>
          </div>
        );
      };

    render(){
        return(
         <Container maxWidth="xs">
           <div className="checkoutPage">
             <div className="backPage"><ArrowBackIcon/>  Checkout</div>
             <hr className="pembatas"></hr>
             <div className="shippingTitle">Shipping Address</div>
             <button className="optionBtn">
                <LocationOnIcon/>
                <span className="optionBtnText">Home</span>
                <EditIcon/>
             </button>
             <div className="orderTitle">Order List</div>
             <div className="orderBox">
                    {this.checkoutList()}
                    {this.checkoutList()}
                    {this.checkoutList()}
                    {this.checkoutList()}
            </div>
            <div className="chooseShipp">Choose Shipping Type</div>
            <button className="optionBtn">
                <LocalShippingIcon/>
                <span className="optionBtnText">Choose Shipping Type</span>
                <ArrowForwardIosIcon/>
             </button>
            <div className="dataBox">
              <div className="dataBox-content">
                <div className="dataBox-text">Amount</div>
                <div className="dataBox-price">Rp 5.000.000,-</div>
              </div>
              <div className="dataBox-content">
                <div className="dataBox-text">Shipping</div>
                <div className="dataBox-price">Rp 20.000,-</div>
              </div>
              <hr className="pembatas"/>
              <div className="dataBox-content">
                <div ClassName="dataBox-text">Total</div>
                <div ClassName="dataBox-price">Rp 5.020.000,-</div>
              </div>
            </div>
            <button class="btn-lp">Continue Payment</button>
           </div>
         </Container>
        )
    }
}

export default Checkout