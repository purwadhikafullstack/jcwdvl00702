import Axios from 'axios';
import { useState, useEffect } from 'react';
import { ArrowBack, Search, SportsSoccerOutlined } from '@mui/icons-material';
import { useHistory, useParams } from 'react-router-dom';
import { Container, IconButton, Select, MenuItem } from '@mui/material';

import '../../assets/styles/ProductStockHistory.css';

export default function ProductStockHistory() {
  const history = useHistory();

  const { id } = useParams();

  const goBack = () => {
    history.goBack();
  };

  const [month, setMonth] = useState('month');
  const [year, setYear] = useState('year');
  const [admin, isAdmin] = useState(true);
  const [warehouse, setWarehouse] = useState(0);

  const [getProduct, setGetProduct] = useState({});
  const [getHistory, setGetHistory] = useState([]);
  const [refreshHistory, setRefreshHistory] = useState([]);

  const [stockInitial, setStockInitial] = useState(0);
  const [increment, setIncrement] = useState(0);
  const [reduction, setReduction] = useState(0);
  const [stockFinal, setStockFinal] = useState(0);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = (year, month) => {
    Axios.get(`http://localhost:3300/api/product/product-stock-history/${id}?year=${year}&month=${month}`)
      .then((result) => {
        setGetProduct(result.data.getProduct);
        setGetHistory(result.data.getHistory);
        let initial;
        let final;
        const incrementArray = [];
        const decrementArray = [];
        const startArray = [];
        const endArray = [];
        for (let i = 0; i < result.data.getHistory.length; i++) {
          if (parseInt(result.data.getHistory[i].warehouse_id) === warehouse) {
            if (result.data.getHistory[i].math === '+') {
              incrementArray.push(parseInt(result.data.getHistory[i].quantity));
            } else if (parseInt(result.data.getHistory[i].warehouse_id) === warehouse) {
              decrementArray.push(parseInt(result.data.getHistory[i].quantity));
            }
            startArray.push(parseInt(result.data.getHistory[i].start));
            endArray.push(parseInt(result.data.getHistory[i].end));
          }
        }
        if (startArray.length === 0) {
          initial = 0;
        } else {
          initial = startArray[0];
        }
        if (endArray.length === 0) {
          final = 0;
        } else {
          final = endArray[endArray.length - 1];
        }

        const increment = incrementArray.reduce((partialSum, a) => partialSum + a, 0);
        const decrement = decrementArray.reduce((partialSum, a) => partialSum + a, 0);

        setStockInitial(initial);
        setIncrement(increment);
        setReduction(decrement);
        setStockFinal(final);
        setRefreshHistory(getHistory);
      })
      .catch((err) => {
        alert('Terjadi kesalahan di server');
      });
  };

  const stockHistory = () => {
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
            <span classname="pswh-item-2">{stockInitial}</span>
            <span classname="pswh-item-2">{increment}</span>
            <span classname="pswh-item-2">{reduction}</span>
            <span classname="pswh-item-2">{stockFinal}</span>
          </div>
        </div>
      </>
    );
  };

  const mutationHistory = () => {
    return getHistory.map((val, index) => {
      let date = val.createdAt.slice(0, 10);
      let time = val.createdAt.slice(11, 19);
      if (parseInt(val.warehouse_id) === warehouse) {
        return (
          <>
            <div className="mhistory-main">
              <div className="mhistory-subdetail">
                <div className="mhistory-detail-name">From</div>
                <div className="mhistory-detail-name">To</div>
                <div className="mhistory-detail-subname">Date</div>
                <div className="mhistory-detail-subname">Qty</div>
              </div>
              <div className="mhistory-detail">
                <div className="mhistory-detail-name">Warehouse {val.warehouse_id}</div>
                {val.requester !== 'super_admin' ? (
                  <>
                    <div className="mhistory-detail-name">Warehouse {val.requester}</div>
                  </>
                ) : (
                  <>
                    <div className="mhistory-detail-name">{val.requester}</div>
                  </>
                )}
                <div className="mhistory-detail-subname">
                  {date} {time}
                </div>
                <div className="mhistory-detail-subname">{val.quantity}</div>
              </div>
              <div className="mhistory-detail-bottom">
                {val.math} {val.quantity}
              </div>
            </div>
          </>
        );
      } else {
        return null;
      }
    });
  };

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="prodsh-main">
        <div className="prodsh-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
        </div>

        <img className="prodsh-img" src={getProduct.picture} alt="Product" />

        <div className="prodsh-detail">
          <div className="prodsh-detail-title">
            <div className="prodsh-desc-title-1">
              <span className="prodsh-desc-name">{getProduct.name}</span>
            </div>
            <div className="prodsh-desc-title-4">Product ID: {getProduct.id}</div>
            <div className="prodsh-desc-title-2">
              <SportsSoccerOutlined />
              <div className="prodsh-desc-title-3">{getProduct.category}</div>
            </div>
          </div>
          <hr className="splitter" />
          <div className="prodsh-desc">
            <div className="prodsh-desc-1-text">Stock History</div>
            <div className="prodsh-desc-1">
              <div className="prodsh-desc-1-select">
                <Select
                  sx={{ width: '100%', height: '38px', fontSize: '12px', padding: '0px' }}
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}>
                  <MenuItem value={'year'}>
                    <em>Year</em>
                  </MenuItem>
                  <MenuItem value={'2021'}>
                    <span>2021</span>
                  </MenuItem>
                  <MenuItem value={'2022'}>
                    <span>2022</span>
                  </MenuItem>
                  <MenuItem value={'2023'}>
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
                  <MenuItem value={'month'}>
                    <em>Month</em>
                  </MenuItem>
                  <MenuItem value={'01'}>
                    <span>01</span>
                  </MenuItem>
                  <MenuItem value={'02'}>
                    <span>02</span>
                  </MenuItem>
                  <MenuItem value={'03'}>
                    <span>03</span>
                  </MenuItem>
                  <MenuItem value={'04'}>
                    <span>04</span>
                  </MenuItem>
                  <MenuItem value={'05'}>
                    <span>05</span>
                  </MenuItem>
                  <MenuItem value={'06'}>
                    <span>06</span>
                  </MenuItem>
                  <MenuItem value={'07'}>
                    <span>07</span>
                  </MenuItem>
                  <MenuItem value={'08'}>
                    <span>08</span>
                  </MenuItem>
                  <MenuItem value={'09'}>
                    <span>09</span>
                  </MenuItem>
                  <MenuItem value={'10'}>
                    <span>10</span>
                  </MenuItem>
                  <MenuItem value={'11'}>
                    <span>11</span>
                  </MenuItem>
                  <MenuItem value={'12'}>
                    <span>12</span>
                  </MenuItem>
                </Select>
              </div>
            </div>
            <div className="prodsh-desc-1">
              <div className="prodsh-desc-1-select">
                {admin ? (
                  <>
                    <Select
                      sx={{ width: '140px', height: '38px', fontSize: '12px', padding: '0px' }}
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={warehouse}
                      onChange={(e) => setWarehouse(e.target.value)}>
                      <MenuItem value={0}>
                        <em>Location</em>
                      </MenuItem>
                      <MenuItem value={1}>
                        <span>Warehouse 1</span>
                      </MenuItem>
                      <MenuItem value={2}>
                        <span>Warehouse 2</span>
                      </MenuItem>
                      <MenuItem value={3}>
                        <span>Warehouse 3</span>
                      </MenuItem>
                    </Select>
                  </>
                ) : (
                  <>
                    <div style={{ marginLeft: '220px', fontWeight: 'bolder', fontSize: 'large' }}>Warehouse A</div>
                  </>
                )}
              </div>

              <div className="prodsh-desc-1-icon">
                <IconButton onClick={() => fetchProducts(year, month)}>
                  <Search />
                </IconButton>
              </div>
            </div>
            <div className="prodsh-desc-2">{stockHistory()}</div>
          </div>
          <hr className="splitter" />
        </div>
        {warehouse !== 0 ? (
          <>
            <div className="prodsh-stock">{mutationHistory()}</div>
          </>
        ) : null}
      </div>
    </Container>
  );
}
