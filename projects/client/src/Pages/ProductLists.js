import React from "react";
import IconButton from "@mui/material/IconButton";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import "../assets/styles/ProductLists.css"

class ProductLists extends React.Component {
    render() {
        const ListProducts = [
          {
            image:
              "https://dks.scene7.com/is/image/GolfGalaxy/22ADIUWC2022CMP5XSCB_White_Pantone?qlt=70&wid=600&fmt=pjpeg",
            description: "Ball",
            price: "900.000",
          },
          {
            image:
              "https://cf.shopee.co.id/file/d7622a165c1b915b19e63e1ebd246ba4",
            description: "Adidas Bag",
            price: "300.000",
          },
          {
            image:
              "https://www.wilson.com/en-us/media/catalog/product/W/T/WTB7500ID__b722ae318490e0f2e686864dc70fd730.png",
            description: "Wilson Basketball",
            price: "400.000",
          },
          {
            image:
              "https://id.brompton.com/-/media/sections/my22/ux-project/cutout-bikes/c-line/c-line-659x437.ashx?h=437&w=659&la=id-ID&hash=D96DD87397FB04775257AD8C1814A20B",
            description: "Brompton Bicycle",
            price: "65.000.000",
          },
          {
            image:
              "https://cdn.eraspace.com/pub/media/catalog/product/a/p/apple_watch_series_7_41mm_midnight_sport_band_1_1.jpg",
            description: "Apple Watch Series 7",
            price: "7.000.000",
          },
          {
            image:
              "https://m.media-amazon.com/images/I/31sjSruHyIL._AC_SY1000_.jpg",
            description: "Ball Pump",
            price: "150.000",
          },
          {
            image:
              "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a48c5834-daa2-4ef6-b04d-19a04fcda866/heritage-backpack-cPq0Vl.png",
            description: "Nike Bag",
            price: "299.000",
          },
        ];
        return (
          <>
            <div className="mobile">
              <div className="product-page">
                <div className="product-arrow-search">
                  <ArrowBackIcon />
                  <div>Result for "All"</div>
                </div>
                <div className="search-bar-detail">
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search"
                    inputProps={{ "aria-label": "Search" }}
                    className="search-bar"
                  />
                  <IconButton
                    type="button"
                    sx={{ p: "10px" }}
                    aria-label="search"
                  >
                    <SearchIcon />
                  </IconButton>
                </div>
                <div className="product-card">
                  {ListProducts.map((ListProduct, index) => (
                    <div>
                      <div className="
                      product-list">
                        <img src={ListProduct.image} alt="" />
                        <div>{ListProduct.description}</div>
                        <div>{ListProduct.price}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        );
    }
}

export default ProductLists