import React from "react";
import { Container } from "@mui/material";
import {Button, ButtonGroup, Stack, Pagination,} from "@mui/material"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import "../assets/styles/cart.css"
import { useState, useEffect, useContext } from "react";
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import Axios from "axios";

class cart extends React.Component{
  state = {
    productList: [],
    page: 1,
    maxPage: 0,
    itemPerPage: 4,
    keyWord: '',
    id: ``
  };

    componentDidMount() {
    const { id } = useParams();
    this.setState({ id });
    this.cartProduct();
  }

    // Page Handler
    pageHandler = () => {
      if (this.state.page < this.state.maxPage) {
        this.setState({ page: this.state.page + 1 });
      } else if (this.state.page > 1) {
        this.setState({ page: this.state.page - 1 });
      }
    };
  
  
// mengambil cart dan product
  cartProduct = () => {
    Axios.get(`http://localhost:3300/api/cart/get-cart-product/${id}`)
    .then((result) => {
        this.setState({ productList: result.data, maxPage: Math.ceil(result.data.length / this.state.itemPerPage) });
        console.log(this.state.productList);
    })
    .catch(() => {
      alert('Terjadi kesalahan di server');
    });
  }

  // delete button handler
 deleteBtnHandler = (productId) => {
      const confirmDelete = window.confirm('Delete Product?');
      if (confirmDelete) {
        Axios.delete(`http://localhost:3300/api/cart/delete-cart/${productId}`)
          .then(() => {
            cartProduct();
          })
          .catch(() => {
            alert('Server Error!');
          });
      } else {
        alert('Cancel Delete Product');
      }
    };

    // setting qty product yg akan diambil

    addQtyHandler = (val) => {
      console.log("ini val", val)
      const data = {
        customer_uid: id,
        action: "add"
      }
      if(val.quantity === val.product.quantity ){
        alert(`Stock Hanya tersedia ${val.product.quantity}`)
      }else{
        Axios.put(`http://localhost:3300/api/cart/edit-qty/${val.id}`, data)
        .then(() => {
          cartProduct()
        })
        .catch((error) => {
          alert('Server Error');
        });
      }
   }
   minQtyHandler = (val) => {
    const data = {
      customer_uid: id,
      action: "min"
    }
    if(val.quantity <= 0 ){
      const confirmDelete = window.confirm('Delete Product?');
      if (confirmDelete) {
        Axios.delete(`http://localhost:3300/api/cart/delete-cart/${val.id}`)
          .then(() => {
            cartProduct();
          })
          .catch(() => {
            alert('Server Error!');
          });
      } else {
        alert('Cancel Delete Product');
      }
    }else{
      Axios.put(`http://localhost:3300/api/cart/edit-qty/${val.id}`, data)
      .then(() => {
        cartProduct()
      })
      .catch((error) => {
        alert('Nama Sudah Terpakai Atau Server Error');
      });
    }
   }
   
//    getTotalPrice = () => {
//     for (let i = 0; i < state.lenght; i++){
//       console.log("quantiti", state[i].quantity)
//       console.log("price", state[i].product.price)
//       let qty = state[i].quantity * state[i].product.price
//       let price = totalPrice + qty
//       console.log("price x qty", price)
//       setTotalPrice(price)
//     }
//  }

 renderProduct = () => {
    const beginningIndex = (this.state.page - 1) * this.state.itemPerPage;
    const currentData = this.state.productList.slice(beginningIndex, beginningIndex + this.state.itemPerPage);

    return currentData.map((val) => {
      return (
        <div className="card-main">
        <div className="card-image">
          <img
            src={val.product.picture}
            className="card-product"
            alt="Product Image"
          />
        </div>
        <div className="card-detail">
          <div className="card-detail-title">
           <div className="card-detail-name">{val.product.name}</div>
           <IconButton onClick={() => deleteBtnHandler(val.id)}>
             <DeleteIcon/>
           </IconButton>
          </div>
          <div className="card-detail-subname">{val.product.product_detail}</div>
          <div className="card-detail-bottom">
            <div className="card-detail-bottom-price">$ {val.product.price}</div>
            {/* <div className="card-detail-bottom-qty">{val.quantity} pcs on Cart</div> */}
          </div>
          <ButtonGroup className="card-button">
              <Button onClick={()=> minQtyHandler(val)} className="card-button-list" sx={{borderRadius: '20px', fontSize: '15px', backgroundColor: 'gray', border: 'none', fontWeight: '900', color:'black' }}>
               -
              </Button >
              <Button className="card-button-list" sx={{borderRadius: '20px', fontSize: '15px', backgroundColor: 'gray', border: 'none', fontWeight: '700', color:'black' }}>
              {val.quantity}
              </Button>
              <Button onClick={()=> addQtyHandler(val)} className="card-button-list" sx={{borderRadius: '20px', fontSize: '15px', backgroundColor: 'gray', border: 'none', fontWeight: '900', color:'black' }}>
               +
              </Button>
           </ButtonGroup>
        </div>
      </div>
      );
    });
  };


    render(){
        return(
            <>
<Container maxWidth="xs">
           <div className="cartPage">
             <div className="backPage"><ShoppingCart/> Cart</div>
             <hr className="pembatas"></hr>
             <div className="cartBox">
                    {cartList()}
            </div>
            <Container maxWidth="xs" className="mobile2">
          <Stack spacing={1} sx={{ width: '110%', marginTop: '10px',marginBottom:'10px', fontFamily: 'Lora' }}>
            <Pagination
              count={this.state.maxPage}
              onChange={pageHandler()}
            />
          </Stack>
        </Container>
            <div className="footer">
                <div className="priceContainer">
                  <div className="priceTitle">Total Price</div>
                  <div className="totalPrice">Rp. 9.000.000,-</div>
                </div>
                <div className="checkoutBtn">Checkout</div>
            </div>   
           </div>
         </Container>
</>
        )
    }
}

export default cart