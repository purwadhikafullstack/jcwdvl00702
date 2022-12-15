import Axios from "axios";
import "../assets/styles/productDetail.css";
import { useState, useEffect } from "react";
import { ArrowBack, FavoriteBorder, StarHalf } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { Container } from "@mui/material";
import { AuthContext } from "../context/AuthProvider";
import {shallowEqual, useDispatch,useSelector} from 'react-redux'
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const {id} = useParams()
  console.log(id)
  const [singleProduct,setSingleProduct]=useState([])

  const specProduct=()=>{
    Axios.get(`http://localhost:3300/api/product/get-product/${id}`)
      .then((res) => {
        setSingleProduct(res.data)
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(()=>{
    specProduct()
  },[])

  return (
    <div className="pd-wrap">
      {console.log(singleProduct)}
      <Container maxWidth="xs" className="container-product-detail">
        <div className="product-img">
          <Link to="/">
            <ArrowBack />
          </Link>
          <img
            className="detail-img"
            src={singleProduct.picture}
          />
        </div>
        <div className="product-spec">
          <div className="product-title">
            <div className="desc-1">
              <span className="desc-name">{singleProduct.name}</span>
              <span className="desc-icon">
                <FavoriteBorder />
              </span>
            </div>
            <div className="desc-2">
              <div className="desc-sold">5000 sold</div>
              <div className="desc-rating-icon">
                <StarHalf />
              </div>
              <div className="desc-score">4.7(2000 reviews)</div>
            </div>
          </div>
          <hr className="splitter" />
          <div className="product-desc">
            <div>
              <div className="desc">Description</div>
              <div className="desc-word">
                {singleProduct.product_detail}
              </div>
            </div>
            <div className="spec-select">
              <div className="spec-1">
                <div className="spec-size">Size</div>
                <div className="spec-selector">
                  <button className="spec-size-select">39</button>
                  <button className="spec-size-select">40</button>
                  <button className="spec-size-select">41</button>
                  <button className="spec-size-select">42</button>
                </div>
              </div>
              <div className="spec-2">
                <div className="spec-color">Color</div>
                <div className="spec-selector">
                  <button
                    className="spec-color-select"
                    style={{ backgroundColor: "black" }}
                  ></button>
                  <button
                    className="spec-color-select"
                    style={{ backgroundColor: "gray" }}
                  ></button>
                  <button
                    className="spec-color-select"
                    style={{ backgroundColor: "brown" }}
                  ></button>
                </div>
              </div>
            </div>
            <div className="spec-qty">
              <div className="spec-qty-title">Quantity</div>
              <div className="spec-qty-selector">
                <span className="sub-qty-select">-</span>
                <span className="sub-qty">1</span>
                <span className="sub-qty-select">+</span>
              </div>
            </div>
          </div>
          <hr className="splitter" />
          <div className="pay-segment">
            <div className="pricing">
              <div className="price-title">Total Price</div>
              <div className="price">${singleProduct.price}</div>
            </div>
            <div>
              <button className="add-cart">Add to Cart</button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
