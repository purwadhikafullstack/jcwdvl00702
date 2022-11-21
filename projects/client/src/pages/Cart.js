import React from "react";
import { Container } from "@mui/material";
import {Button, ButtonGroup} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCart from "@mui/icons-material/ShoppingCart";


class Cart extends React.Component{

  cartList = () => {
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
          <div className="card-detail-title">
           <div className="card-detail-name">Mercurial Vapor 8</div>
           <IconButton>
             <DeleteIcon/>
           </IconButton>
          </div>
          <div className="card-detail-subname">White | shoes | 41</div>
          <div className="card-detail-bottom">
            <div className="card-detail-bottom-price">Rp. 2.250.000 ,-</div>
          </div>
          <ButtonGroup className="card-button">
              <Button className="card-button-list" sx={{borderRadius: '20px', fontSize: '15px', backgroundColor: 'gray', border: 'none', fontWeight: '900', color:'black' }}>
               -
              </Button >
              <Button className="card-button-list" sx={{borderRadius: '20px', fontSize: '15px', backgroundColor: 'gray', border: 'none', fontWeight: '700', color:'black' }}>
               1
              </Button>
              <Button className="card-button-list" sx={{borderRadius: '20px', fontSize: '15px', backgroundColor: 'gray', border: 'none', fontWeight: '900', color:'black' }}>
               +
              </Button>
           </ButtonGroup>
        </div>
      </div>
    );
  };
    render(){
        return(
         <Container maxWidth="xs">
           <div className="cartPage">
             <div className="backPage"><ShoppingCart/> Cart</div>
             <hr className="pembatas"></hr>
             <div className="cartBox">
                    {this.cartList()}
                    {this.cartList()}
                    {this.cartList()}
                    {this.cartList()}
            </div>
            <div className="footer">
                <div className="priceContainer">
                  <div className="priceTitle">Total Price</div>
                  <div className="totalPrice">Rp. 9.000.000,-</div>
                </div>
                <div className="checkoutBtn">Checkout</div>
            </div>   
           </div>
         </Container>
        )
    }
}

export default Cart