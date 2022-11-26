import axios from 'axios';
import { useState, useEffect, useContext } from 'react';
import {
  Add,
  ArrowBack,
  FavoriteBorder,
  Remove,
  SportsSoccerOutlined,
  StarHalf,
  BusinessCenterOutlined,
  DirectionsBikeOutlined,
  HikingOutlined,
  HandymanOutlined,
  MonitorHeartOutlined,
  FitnessCenterOutlined,
} from '@mui/icons-material';
import { Link, useHistory } from 'react-router-dom';
import { Container, Button, IconButton, InputBase, Select, MenuItem, Box, TextField } from '@mui/material';

import '../../assets/styles/ProductDetailAdmin.css';

export default function ProductDetailAdmin() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const [isEdit, setIsEdit] = useState(false);
  const [selectIcon, setSelectIcon] = useState(0);

  const [descript, setDescript] = useState('');

  const handleChange = (event) => {
    setDescript(event.target.value);
  };

  const warehouseStock = (name) => {
    return (
      <div className="pdadmin-stock-wh">
        <div className="pdadmin-stock-name">Warehouse {name}</div>
        <div className="pdadmin-stock-qty">20 pcs</div>
        <div className="pdadmin-stock-edit">
          <InputBase sx={{ fontFamily: 'Lora' }} placeholder="0" className="pdadmin-stock-text" />
          <IconButton className="pdadmin-stock-add">
            <Add />
          </IconButton>
        </div>
        <div className="pdadmin-stock-edit">
          <InputBase sx={{ fontFamily: 'Lora' }} placeholder="0" className="pdadmin-stock-text" />
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

          {isEdit ? (
            <>
              <Button
                disabled
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
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(153,255,255,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                onClick={() => setIsEdit(false)}
                className="pdadmin-banner-edit">
                Save
              </Button>
            </>
          ) : (
            <>
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
              <Button
                sx={{
                  borderRadius: '20px',
                  backgroundColor: 'rgb(255,204,153,0.9)',
                  fontSize: '8px',
                  fontFamily: 'Lora',
                  color: 'black',
                }}
                variant="contained"
                onClick={() => setIsEdit(true)}
                className="pdadmin-banner-edit">
                Edit
              </Button>
            </>
          )}
        </div>

        {isEdit ? (
          <>
            <img
              className="pdadmin-img"
              src="https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png"
            />
            <Button variant="contained" component="label" sx={{ marginLeft: '130px', marginTop: '10px' }}>
              Change Photo
              <input hidden accept="image/*" multiple type="file" />
            </Button>
          </>
        ) : (
          <img
            className="pdadmin-img"
            src="https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png"
          />
        )}

        {isEdit ? (
          <>
            <div className="pdadmin-detail">
              <div className="pdadmin-detail-title">
                <div className="pdadmin-desc-title-1">
                  <InputBase
                    sx={{ fontFamily: 'Lora' }}
                    placeholder="Suga Leather Shoes"
                    className="pdadmin-desc-name-input"
                  />
                </div>
                <div className="pdadmin-desc-title-2-input">
                  <Select
                    sx={{ width: '150px', height: '38px', fontSize: '12px', padding: '0px' }}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selectIcon}
                    onChange={(e) => setSelectIcon(e.target.value)}>
                    <MenuItem value={0}>
                      <em>
                        <SportsSoccerOutlined />
                        <span>Sports</span>
                      </em>
                    </MenuItem>
                    <MenuItem value={1}>
                      <SportsSoccerOutlined />
                      <span>Sports</span>
                    </MenuItem>
                    <MenuItem value={2}>
                      <BusinessCenterOutlined />
                      <span>Bags</span>
                    </MenuItem>
                    <MenuItem value={3}>
                      <DirectionsBikeOutlined />
                      <span>Bikes</span>
                    </MenuItem>
                    <MenuItem value={4}>
                      <HikingOutlined />
                      <span>Sportswear</span>
                    </MenuItem>
                    <MenuItem value={5}>
                      <HandymanOutlined />
                      <span>Accessories</span>
                    </MenuItem>
                    <MenuItem value={6}>
                      <MonitorHeartOutlined />
                      <span>Health</span>
                    </MenuItem>
                    <MenuItem value={7}>
                      <FitnessCenterOutlined />
                      <span>Fitness</span>
                    </MenuItem>
                  </Select>
                </div>
              </div>
              <hr className="splitter" />
              <div className="pdadmin-desc">
                <div className="pdadmin-desc-1">Description</div>
                <div className="pdadmin-desc-2">
                  <TextField
                    sx={{ width: '100%', fontSize: '12px', padding: 0 }}
                    id="outlined-multiline-static"
                    multiline
                    rows={4}
                    placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum cum ullam eius odio aliquid, nam quas
                    libero? Aliquam similique consequuntur molestias. Maxime nesciunt soluta ea aliquam, excepturi illum
                    impedit praesentium!"
                  />
                </div>
              </div>
              <div className="pdadmin-pricing">
                <div className="pdadmin-price-title">Price</div>
                <div className="pdadmin-price-input">
                  <span className="pdadmin-price-input-1">$</span>
                  <InputBase
                    sx={{ fontFamily: 'Lora', width: '100px' }}
                    placeholder="750"
                    className="pdadmin-price-input-2"
                  />
                </div>
              </div>
              <hr className="splitter" />
            </div>
          </>
        ) : (
          <>
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
          </>
        )}

        <div className="pdadmin-stock">
          {warehouseStock('A')}
          {warehouseStock('B')}
          {warehouseStock('C')}
        </div>
      </div>
    </Container>
  );
}
