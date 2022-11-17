import axios from "axios"
import "../assets/styles/productDetail.css"
import {useState,useEffect,useContext} from "react"
import {ArrowBack,FavoriteBorder,StarHalf} from "@mui/icons-material"
import {Link} from "react-router-dom"

export default function ProductDetail(){
    return(
        <div className="product-wrapper">
            <div className="product-img">
                {/* <Link><ArrowBack/></Link> */}
                <ArrowBack/>
                <img className="detail-img" src="https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png" />
            </div>
            <div className="product-spec">
                <div className="product-title">
                    <div className="desc-1">
                        <span className="desc-name">Suga Leather Shoes</span>
                        <span className="desc-icon"><FavoriteBorder/></span>
                    </div>
                    <div className="desc-2">
                        <div className="desc-sold">5000 sold</div>
                        <div className="desc-rating-icon"><StarHalf/></div>
                        <div className="desc-score">4.7(2000 reviews)</div>
                    </div>
                </div>
                <hr className="splitter"/>
                <div className="product-desc">
                    <div>
                        <div className="desc">Description</div>
                        <div className="desc-word">Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum ullam eius odio aliquid, nam quas libero? Aliquam similique consequuntur molestias. Maxime nesciunt soluta ea aliquam, excepturi illum impedit praesentium!</div>
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
                                <button className="spec-color-select" style={{backgroundColor:"black"}}></button>
                                <button className="spec-color-select" style={{backgroundColor:"gray"}}></button>
                                <button className="spec-color-select" style={{backgroundColor:"brown"}}></button>
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
                        <div className="price">$750</div>
                    </div>
                    <div>
                        <button className="add-cart">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    )
}