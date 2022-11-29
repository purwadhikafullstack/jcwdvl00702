import axios from 'axios';
import { useState } from 'react';
import {
  ArrowBack,
  SportsSoccerOutlined,
  BusinessCenterOutlined,
  DirectionsBikeOutlined,
  HikingOutlined,
  HandymanOutlined,
  MonitorHeartOutlined,
  FitnessCenterOutlined,
} from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { Container, Button, IconButton, InputBase, Select, MenuItem, Box, TextField } from '@mui/material';

import '../../assets/styles/ProductAdd.css';

export default function ProductAdd() {
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
      <div className="pdadd-stock-wh">
        <div className="pdadd-stock-name">Warehouse {name}</div>
        <div className="pdadd-stock-qty">
          {/* <div className="pdadd-stock-qty-input"> */}
          <InputBase
            sx={{ fontFamily: 'Lora', width: '100px' }}
            placeholder="Amount"
            className="pdadd-stock-qty-input"
          />
          {/* </div> */}
          <span className="pdadd-stock-qty-text">pcs</span>
        </div>
      </div>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="pdadd-main">
        <div className="pdadd-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <div className="adduser-banner-text">Add New Product</div>
        </div>

        <div className="pdadd-img">
          <Button variant="contained" component="label" sx={{ marginLeft: '130px', marginTop: '100px ' }}>
            Upload
            <input hidden accept="image/*" multiple type="file" />
          </Button>
        </div>

        <div className="pdadd-detail">
          <div className="pdadd-detail-title">
            <div className="pdadd-desc-title-1">
              <TextField
                id="outlined-basic"
                className="pdadd-desc-name-input"
                label="Product Name"
                variant="outlined"
              />
            </div>
            <div className="pdadd-desc-title-2-input">
              <Select
                sx={{ width: '150px', height: '38px', fontSize: '12px', padding: '0px' }}
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectIcon}
                onChange={(e) => setSelectIcon(e.target.value)}>
                <MenuItem value={0}>
                  <em>Category</em>
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
          <div className="pdadd-desc">
            <div className="pdadd-desc-1">Description</div>
            <div className="pdadd-desc-2">
              <TextField
                sx={{ width: '100%', fontSize: '12px', padding: 0 }}
                id="outlined-multiline-static"
                multiline
                rows={4}
                placeholder="Product Description"
              />
            </div>
          </div>
          <div className="pdadd-pricing">
            <div className="pdadd-price-title">Price</div>
            <div className="pdadd-price-input">
              <span className="pdadd-price-input-1">$</span>
              <InputBase
                sx={{ fontFamily: 'Lora', width: '100px' }}
                placeholder="Amount"
                className="pdadd-price-input-2"
              />
            </div>
          </div>
          <hr className="splitter" />
        </div>

        <div className="pdadd-stock">
          {warehouseStock('A')}
          {warehouseStock('B')}
          {warehouseStock('C')}
        </div>

        <div className="pdadd-button">
          <button class="pdadd-button-2">Add New Product</button>
        </div>
      </div>
    </Container>
  );
}
