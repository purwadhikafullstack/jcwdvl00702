import { useState, Fragment } from 'react';
import { ArrowBack } from '@mui/icons-material';
import {
  Container,
  Button,
  IconButton,
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import { useHistory } from 'react-router-dom';

import '../../assets/styles/OrderDetailAdmin.css';

export default function OrderDetailAdmin() {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  const [activeStep, setActiveStep] = useState(5);
  const [paymentIsDone, setPaymentIsDone] = useState(false);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const steps = [
    {
      label: 'Waiting For Payment',
      description: `Waiting for User to upload Proof of Payment. Automatic cancel on 11-12-2022 at 11:34.`,
    },
    {
      label: 'Payment Confirmation',
      description: 'See Proof of Payment first.',
    },
    {
      label: 'In Process',
      description: `Click "Done" only if the order is ready for shipping.`,
    },
    {
      label: 'In Delivery',
      description: `Wait for shipping update from provider. Track number: 0000123456789. Wait for user confirmation.`,
    },
    {
      label: 'Received',
      description: `Order is received by User. Process is finished.`,
    },
    // {
    //   label: 'Cancelled',
    //   description: `Order is cancelled`,
    // },
  ];

  const orderDetailCard = () => {
    return (
      <div className="od-card-main">
        <div className="od-card-image">
          <img
            src="https://cf.shopee.co.id/file/442835254598ddfbf47d10830a99b3a8"
            className="od-card-product"
            alt="Product Image"
          />
        </div>
        <div className="od-card-detail">
          <div className="od-card-detail-name">Mercurial Vapor 8 Tipe ABC Besar</div>
          <div className="od-card-detail-subname">White | shoes | 41</div>
          <div className="od-card-detail-bottom">
            <div className="od-card-detail-bottom-price">Rp. 2.250.000 ,-</div>
          </div>
          <Button
            disabled
            className="od-card-button-list"
            sx={{
              width: '50px',
              borderRadius: '20px',
              fontSize: '13px',
              backgroundColor: 'gray',
              border: 'none',
              fontWeight: '700',
              color: 'black',
            }}>
            1
          </Button>
        </div>
      </div>
    );
  };

  const orderDetailConst = [
    { title: 'Created Date', value: '11-11-2022' },
    { title: 'User ID', value: '19450817110256' },
    { title: 'User Name', value: 'Maria Marcelinus' },
    { title: 'Email', value: 'maria.marcelinus@mail.com' },
    { title: 'From', value: 'Warehouse A' },
    { title: 'Shipping', value: 'JNE - Express YES' },
    { title: 'Area', value: '1 - DKI Jakarta' },
    { title: 'City', value: 'West Jakarta' },
    { title: 'District', value: 'Grogol Petamburan' },
    { title: 'Sub-District', value: 'South Tanjung Duren' },
    {
      title: 'Address',
      value:
        'Letjen S. Parman St No.kav.28 Central Park Mall Lantai 20 Banyak Toko Ke kanan dan ke kiri Letjen S. Parman St No.kav.28 Letjen S. Parman St No.kav.28 ',
    },
  ];

  const paymentDetail = [
    { title: 'Total', value: 'Rp 126.789.999 ,-' },
    { title: 'Payment Method', value: 'Bank Transfer' },
  ];

  return (
    <Container maxWidth="xs" sx={{ backgroundColor: 'white' }}>
      <div className="oda-main">
        <div className="oda-banner">
          <IconButton onClick={goBack}>
            <ArrowBack />
          </IconButton>
          <div className="oda-banner-text">Order ID: 20220112235900</div>
        </div>
        <div className="oda-user">
          {orderDetailConst.map((item) => (
            <div
              className={`oda-user-wrapper ${
                item.title === 'Email' || item.title === 'Address' ? 'oda-user-divider' : ''
              }`}>
              <div className="oda-user-left">{item.title}</div>
              <div className="oda-user-right">{item.value}</div>
            </div>
          ))}
        </div>

        <div className="oda-step">
          <div className="oda-step-text">Order Status</div>

          <Box sx={{ mb: 2, fontFamily: 'Lora' }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel sx={{ fontFamily: 'Lora' }}>{step.label}</StepLabel>
                  <StepContent>
                    <Typography sx={{ fontFamily: 'Lora', fontSize: '11px' }}>{step.description}</Typography>
                    <Box sx={{ mb: 2 }}>
                      <div>
                        {index === 0 || index === 3 ? (
                          <Button disabled sx={{ mt: 1, mr: 1, fontFamily: 'Lora', fontSize: '12px' }}>
                            Waiting...
                          </Button>
                        ) : null}
                        {index === 1 ? (
                          <>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1, fontFamily: 'Lora', fontSize: '12px' }}>
                              Accept
                            </Button>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1, fontFamily: 'Lora', fontSize: '12px' }}>
                              Reject
                            </Button>
                          </>
                        ) : null}
                        {index === 2 ? (
                          <>
                            <Button
                              variant="contained"
                              onClick={handleNext}
                              sx={{ mt: 1, mr: 1, fontFamily: 'Lora', fontSize: '12px' }}>
                              Done
                            </Button>
                          </>
                        ) : null}
                      </div>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Paper square elevation={0} sx={{ p: 3 }}>
                <Typography sx={{ fontFamily: 'Lora', fontSize: '15px', fontWeight: 'bold' }}>
                  Order is complete !
                </Typography>
              </Paper>
            )}
          </Box>
        </div>

        <div className="oda-payment">
          <div className="oda-payment-text">Proof of Payment</div>
          <div className="oda-payment-detail">
            {paymentDetail.map((item) => (
              <div className="oda-payment-wrapper">
                <div className="oda-payment-left">{item.title}</div>
                <div className="oda-payment-right">{item.value}</div>
              </div>
            ))}
          </div>
          <img
            src="https://help.xendit.co/hc/article_attachments/4407785781389/Screen_Shot_2021-08-24_at_22.33.33.png"
            alt="Payment Proof"
            className="oda-payment-img"
          />
        </div>

        <div className="oda-list">
          <div className="oda-list-text">Items</div>
          <div className="oda-list-card">
            {orderDetailCard()}
            {orderDetailCard()}
            {orderDetailCard()}
            {orderDetailCard()}
            {orderDetailCard()}
          </div>
        </div>
      </div>
    </Container>
  );
}
