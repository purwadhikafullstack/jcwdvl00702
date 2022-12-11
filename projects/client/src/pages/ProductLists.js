import React from 'react';
import axios from 'axios';
import SearchIcon from '@mui/icons-material/Search';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import '../assets/styles/ProductLists.css';
import { SortTwoTone } from '@mui/icons-material';
import { Container, Stack, Pagination, IconButton, InputBase, Menu, MenuItem } from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';
import { URL_API } from '../API';

class ProductLists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataProduct: [],
      pages: 0,
      sort: '',
      search: '',
    };
  }

  componentDidMount() {
    this.getDataProduct(0);
  }

  getDataProduct = (page, sort, search) => {
    axios
      .get(
        URL_API +
          `/api/product/get?page=${page}&sort=${sort ? sort : this.state.sort}&search=${
            search ? search : this.state.search
          }`
      )
      .then((res) => {
        this.setState({
          ...this.state,
          dataProduct: [...res.data.result],
          pages: res.data.pages,
          ...(sort && { sort: sort }),
          ...(search && { search: search }),
        });
        //   sort
        //     ? this.setState({
        //         ...this.state,
        //         dataProduct: [...res.data.result],
        //         pages: res.data.pages,
        //         sort: sort,
        //       })
        //     : this.setState({
        //         ...this.state,
        //         dataProduct: [...res.data.result],
        //         pages: res.data.pages,
        //       });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  searchHandler = (event) => {
    this.setState({ ...this.state, search: event.target.value });
  };

  render() {
    return (
      <>
        <Container maxWidth="xs" className="mobile">
          <div className="product-page">
            <div className="product-arrow-search">
              <ArrowBackIcon />
              <div>Result for "All"</div>
            </div>
            <div className="search-bar-detail">
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search"
                inputProps={{ 'aria-label': 'Search' }}
                className="search-bar"
                onChange={this.searchHandler}
              />
              <IconButton
                type="button"
                sx={{ p: '10px' }}
                aria-label="search"
                onClick={() => this.getDataProduct(0, '', this.state.search)}>
                <SearchIcon />
              </IconButton>
              <PopupState variant="popover" popupId="demo-popup-menu">
                {(popupState) => (
                  <React.Fragment>
                    <button className="account-button" variant="contained" {...bindTrigger(popupState)}>
                      <IconButton>
                        <SortTwoTone />
                      </IconButton>
                    </button>
                    <Menu {...bindMenu(popupState)}>
                      <MenuItem
                        onClick={() => {
                          this.getDataProduct(0, 'name');
                          // this.setState({ ...this.state, page: 0 });
                        }}
                        sx={{ fontFamily: 'Lora' }}>
                        {/* <img src="https://img.icons8.com/fluency-systems-filled/22/null/sort-numeric-up.png" /> */}
                        Name
                      </MenuItem>
                      <MenuItem onClick={() => this.getDataProduct(0, 'createdAt')} sx={{ fontFamily: 'Lora' }}>
                        {/* <img src="https://img.icons8.com/windows/24/null/sort-numeric-up-reversed.png" /> */}
                        CreatedAt
                      </MenuItem>
                    </Menu>
                  </React.Fragment>
                )}
              </PopupState>
            </div>
            <div className="product-card">
              {this.state.dataProduct.map((ListProduct, index) => (
                <div key={ListProduct.id}>
                  <div
                    className="
                      product-list">
                    <img src="https://cf.shopee.co.id/file/d7622a165c1b915b19e63e1ebd246ba4" alt="Product Image" />
                    <div>{ListProduct.name}</div>
                    <div>{ListProduct.price}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
        <Container maxWidth="xs" className="mobile2">
          <Stack spacing={1} sx={{ width: '110%', marginLeft: '110px', fontFamily: 'Lora' }}>
            <Pagination
              count={this.state.pages}
              onChange={(e, value) => this.getDataProduct(value - 1, this.state.sort)}
            />
          </Stack>
        </Container>
      </>
    );
  }
}

export default ProductLists;
