import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import { Add, ArrowBack, FavoriteBorder, Remove, SportsSoccerOutlined, StarHalf } from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { Container, Button, IconButton } from '@mui/material';

import '../../assets/styles/ProductDetailAdmin.css';

export default function ProductDetailAdmin() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const warehouseStock = (name) => {
    return (
      <div className="pdadmin-stock-wh">
        <div className="pdadmin-stock-name">Warehouse {name}</div>
        <div className="pdadmin-stock-qty">20 pcs</div>
        <div className="pdadmin-stock-edit">
          <div className="pdadmin-stock-text">Add</div>
          <IconButton className="pdadmin-stock-add">
            <Add />
          </IconButton>
        </div>
        <div className="pdadmin-stock-edit">
          <div className="pdadmin-stock-text">Decrease</div>
          <IconButton className="pdadmin-stock-decrease">
            <Remove />
          </IconButton>
        </div>
      </div>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="pdadmin-main">
        <div className="pdadmin-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <Button
            sx={{
              borderRadius: '20px',
              backgroundColor: 'rgb(255,153,153,0.9)',
              fontSize: '8px',
              fontFamily: 'Lora',
              color: 'black',
              marginRight: '5px',
              marginLeft: '210px',
            }}
            variant="contained"
            className="pdadmin-banner-delete">
            Delete
          </Button>
          <Link to="/edit-user" className="userlist-banner-menu-link">
            <Button
              sx={{
                borderRadius: '20px',
                backgroundColor: 'rgb(255,204,153,0.9)',
                fontSize: '8px',
                fontFamily: 'Lora',
                color: 'black',
              }}
              variant="contained"
              className="pdadmin-banner-edit">
              Edit
            </Button>
          </Link>
        </div>

        <img
          className="pdadmin-img"
          src="https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png"
        />

        <div className="pdadmin-detail">
          <div className="pdadmin-detail-title">
            <div className="pdadmin-desc-title-1">
              <span className="pdadmin-desc-name">Suga Leather Shoes</span>
            </div>
            <div className="pdadmin-desc-title-2">
              <SportsSoccerOutlined />
              <div className="pdadmin-desc-title-3">Sports</div>
            </div>
          </div>
          <hr className="splitter" />
          <div className="pdadmin-desc">
            <div className="pdadmin-desc-1">Description</div>
            <div className="pdadmin-desc-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum ullam eius odio aliquid, nam quas
              libero? Aliquam similique consequuntur molestias. Maxime nesciunt soluta ea aliquam, excepturi illum
              impedit praesentium!
            </div>
          </div>
          <div className="pdadmin-pricing">
            <div className="pdadmin-price-title">Price</div>
            <div className="pdadmin-price">$750</div>
          </div>
          <hr className="splitter" />
        </div>

        <div className="pdadmin-stock">
          {warehouseStock('A')}
          {warehouseStock('B')}
          {warehouseStock('C')}
        </div>
      </div>
    </Container>
  );
}
