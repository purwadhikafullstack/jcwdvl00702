import axios from 'axios';
import { useState, Fragment } from 'react';
import { Add, ArrowBack, Remove, ReceiptLong, SportsSoccerOutlined, MoreHoriz } from '@mui/icons-material';
import { useHistory } from 'react-router-dom';
import {
  Container,
  Button,
  IconButton,
  InputBase,
  Select,
  MenuItem,
  TextField,
  Radio,
  FormControl,
  FormControlLabel,
  RadioGroup,
  Stack,
  Pagination,
  Menu,
} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/SalesReport.css';

export default function SalesReport() {
  const [month, setMonth] = useState(0);
  const [year, setYear] = useState(0);
  const [admin, isAdmin] = useState(true);
  const [warehouse, setWarehouse] = useState(0);
  const [filterValue, setFilterValue] = useState('all');

  const menuHandler = () => {
    return (
      <PopupState variant="popover" popupId="demo-popup-menu">
        {(popupState) => (
          <Fragment>
            <button className="account-button" variant="contained" {...bindTrigger(popupState)}>
              <IconButton>
                <MoreHoriz />
              </IconButton>
            </button>
            <Menu {...bindMenu(popupState)}>
              <MenuItem>
                <Link to="/dashboard" className="salesreport-banner-menu-link">
                  Dashboard
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/user-list" className="salesreport-banner-menu-link">
                  User List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/warehouse-management" className="salesreport-banner-menu-link">
                  Warehouse Mng.
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-list" className="salesreport-banner-menu-link">
                  Product List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/products-management-category" className="salesreport-banner-menu-link">
                  Product Category
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-mutation" className="salesreport-banner-menu-link">
                  Stock Mutation
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/order-list" className="salesreport-banner-menu-link">
                  Order List
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/sales-report" className="salesreport-banner-menu-link">
                  Sales Report
                </Link>
              </MenuItem>
              <MenuItem>
                <Link to="/stock-history" className="salesreport-banner-menu-link">
                  Stock History
                </Link>
              </MenuItem>
            </Menu>
          </Fragment>
        )}
      </PopupState>
    );
  };

  const resultCard = () => {
    return (
      <div className="srcard-main">
        <div className="srcard-image">
          <img
            src="https://i.pinimg.com/originals/6f/df/bc/6fdfbc41d6a8e26d4b9073bc1afd899f.jpg"
            className="srcard-product"
            alt="Product Image"
          />
        </div>
        <div className="srcard-detail">
          <div className="srcard-detail-name">Chelengan Kocheng Loecoe Aja Banyak</div>
          <div className="srcard-detail-subname">Product ID: 701241</div>
          <div className="srcard-detail-subname">
            <div className="srcard-detail-category">
              <SportsSoccerOutlined sx={{ marginRight: '3px' }} /> Sports
            </div>
          </div>
        </div>
        <div className="srcard-report">
          <div className="srcard-report-subdata">Date: 04-12-2022</div>
          <div className="srcard-report-subdata">Qty: 2 pcs</div>
          <div className="srcard-report-data">Rp. 10.750.000 ,-</div>
        </div>
      </div>
    );
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="salesreport-main">
        <div className="salesreport-banner">
          <div className="salesreport-banner-logo">
            <IconButton disabled>
              <ReceiptLong />
            </IconButton>
          </div>
          <div className="salesreport-banner-text">Sales Report</div>
          <div className="salesreport-banner-menu-link">{menuHandler()}</div>
        </div>
        <div className="salesreport-filter">
          <div className="salesreport-filter-wh">
            <div className="salesreport-filter-left">Location</div>
            {isAdmin ? (
              <>
                <div className="salesreport-filter-wh-select">
                  <Select
                    sx={{ width: '100%', height: '38px', fontSize: '12px', padding: '0px' }}
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
                </div>{' '}
              </>
            ) : (
              <>
                <div className="salesreport-filter-right">Warehouse A</div>
              </>
            )}
          </div>
          <div className="salesreport-filter-periode">
            <div className="salesreport-filter-left">Periode </div>
            <div className="salesreport-filter-right">
              <div className="salesreport-filter-select">
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
              <div className="salesreport-filter-select">
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
            </div>
          </div>
          <div className="salesreport-filter-radio">
            <div className="salesreport-filter-radio-left">Filter </div>
            <div className="salesreport-filter-right">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-controlled-radio-buttons-group"
                  name="controlled-radio-buttons-group"
                  value={filterValue}
                  onChange={(e) => setFilterValue(e.target.value)}>
                  <FormControlLabel value="all" control={<Radio />} label="All" />
                  <FormControlLabel value="category" control={<Radio />} label="Category" />
                </RadioGroup>
              </FormControl>
            </div>
          </div>
          <div className="salesreport-filter-search">
            <div className="salesreport-filter-left">Product</div>
            <div className="salesreport-filter-right">
              <InputBase
                sx={{ flex: 1, fontFamily: 'Lora' }}
                placeholder="Product ID"
                inputProps={{ 'aria-label': 'Search' }}
                className="salesreport-filter-right-search"
              />
            </div>
          </div>
          <div className="salesreport-filter-submit">
            <button className="salesreport-filter-submit-button">Search</button>
          </div>
        </div>

        <div className="salesreport-result">
          {resultCard()}
          {resultCard()}
          {resultCard()}
          {resultCard()}
          {resultCard()}
          {resultCard()}
          {resultCard()}
        </div>
        <Stack spacing={1} sx={{ marginLeft: '120px', width: '110%', fontFamily: 'Lora' }}>
          <Pagination count={10} />
        </Stack>
      </div>
    </Container>
  );
}
