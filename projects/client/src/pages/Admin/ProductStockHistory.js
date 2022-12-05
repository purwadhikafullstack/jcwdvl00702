import { useState } from 'react';
import { ArrowBack, Search } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import { Container, IconButton, Select, MenuItem } from '@mui/material';

import '../../assets/styles/ProductStockHistory.css';

export default function ProductStockHistory() {
  const history = useHistory();

  const goBack = () => {
    history.goBack();
  };

  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [admin, isAdmin] = useState(true);
  const [warehouse, setWarehouse] = useState(0);

  const stockHistory = (year, month) => {
    return (
      <>
        <div className="prodsh-stock-period">
          {year} - {month}
        </div>
        <div className="prodsh-stock-wh">
          <div className="pswh-item-left">
            <span classname="pswh-item-1">Stock Initial</span>
            <span classname="pswh-item-1">Increment</span>
            <span classname="pswh-item-1">Reduction</span>
            <span classname="pswh-item-1">Stock Final</span>
          </div>
          <div className="pswh-item-right">
            <span classname="pswh-item-2">21</span>
            <span classname="pswh-item-2">12</span>
            <span classname="pswh-item-2">2</span>
            <span classname="pswh-item-2">31</span>
          </div>
        </div>
      </>
    );
  };

  const mutationHistory = (from, to, math, number) => {
    return (
      <div className="mhistory-main">
        <div className="mhistory-subdetail">
          <div className="mhistory-detail-name">From</div>
          <div className="mhistory-detail-name">To</div>
          <div className="mhistory-detail-subname">Date</div>
          <div className="mhistory-detail-subname">Qty</div>
        </div>
        <div className="mhistory-detail">
          <div className="mhistory-detail-name">{from}</div>
          <div className="mhistory-detail-name">{to}</div>
          <div className="mhistory-detail-subname">03-12-2022 17:59</div>
          <div className="mhistory-detail-subname">{number}</div>
        </div>
        <div className="mhistory-detail-bottom">
          {math} {number}
        </div>
      </div>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="prodsh-main">
        <div className="prodsh-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <div className="prodsh-banner-wh">
            {admin ? (
              <>
                <Select
                  sx={{ width: '140px', height: '38px', fontSize: '12px', padding: '0px', marginLeft: '200px' }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={warehouse}
                  onChange={(e) => setWarehouse(e.target.value)}>
                  <MenuItem value={0}>
                    <em>Location</em>
                  </MenuItem>
                  <MenuItem value={1}>
                    <span>Warehouse A</span>
                  </MenuItem>
                  <MenuItem value={2}>
                    <span>Warehouse B</span>
                  </MenuItem>
                  <MenuItem value={3}>
                    <span>Warehouse C</span>
                  </MenuItem>
                </Select>
              </>
            ) : (
              <>
                <div style={{ marginLeft: '220px', fontWeight: 'bolder', fontSize: 'large' }}>Warehouse A</div>
              </>
            )}
          </div>
        </div>

        <img
          className="prodsh-img"
          src="https://www.freepnglogos.com/uploads/shoes-png/mens-shoes-png-transparent-images-images-11.png"
        />

        <div className="prodsh-detail">
          <div className="prodsh-detail-title">
            <div className="prodsh-desc-title-1">
              <span className="prodsh-desc-name">Suga Leather Shoes Ukuran Besar Ada Banyak Macam</span>
            </div>
            <div className="prodsh-desc-title-4">Product ID: 701241</div>
            <div className="prodsh-desc-title-2">
              <SportsSoccerOutlined />
              <div className="prodsh-desc-title-3">Sports</div>
            </div>
          </div>
          <hr className="splitter" />
          <div className="prodsh-desc">
            <div className="prodsh-desc-1">
              <div className="prodsh-desc-1-text">Stock History</div>
              <div className="prodsh-desc-1-select">
                <Select
                  sx={{ width: '100%', height: '38px', fontSize: '12px', padding: '0px' }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}>
                  <MenuItem value={0}>
                    <em>Year</em>
                  </MenuItem>
                  <MenuItem value={1}>
                    <span>2021</span>
                  </MenuItem>
                  <MenuItem value={2}>
                    <span>2022</span>
                  </MenuItem>
                  <MenuItem value={3}>
                    <span>2023</span>
                  </MenuItem>
                </Select>
              </div>
              <div className="prodsh-desc-1-select">
                <Select
                  sx={{ width: '100%', height: '38px', fontSize: '12px', padding: '0px' }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}>
                  <MenuItem value={0}>
                    <em>Month</em>
                  </MenuItem>
                  <MenuItem value={1}>
                    <span>Jan</span>
                  </MenuItem>
                  <MenuItem value={2}>
                    <span>Feb</span>
                  </MenuItem>
                  <MenuItem value={3}>
                    <span>Mar</span>
                  </MenuItem>
                  <MenuItem value={4}>
                    <span>Apr</span>
                  </MenuItem>
                  <MenuItem value={5}>
                    <span>May</span>
                  </MenuItem>
                  <MenuItem value={6}>
                    <span>Jun</span>
                  </MenuItem>
                  <MenuItem value={7}>
                    <span>Jul</span>
                  </MenuItem>
                  <MenuItem value={8}>
                    <span>Aug</span>
                  </MenuItem>
                  <MenuItem value={9}>
                    <span>Sep</span>
                  </MenuItem>
                  <MenuItem value={10}>
                    <span>Oct</span>
                  </MenuItem>
                  <MenuItem value={11}>
                    <span>Nov</span>
                  </MenuItem>
                  <MenuItem value={12}>
                    <span>Dec</span>
                  </MenuItem>
                </Select>
              </div>
              <div className="prodsh-desc-1-icon">
                <IconButton>
                  <Search />
                </IconButton>
              </div>
            </div>
            <div className="prodsh-desc-2">{stockHistory('2022', 'Dec')}</div>
          </div>

          <hr className="splitter" />
        </div>

        <div className="prodsh-stock">
          {mutationHistory('WH001', '19450817235959', '-', '2')}
          {mutationHistory('WH003', 'WH001', '+', '1')}
          {mutationHistory('WH001', 'WH002', '-', '1')}
        </div>
      </div>
    </Container>
  );
}
