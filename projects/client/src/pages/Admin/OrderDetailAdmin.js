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
  Stepper,
  Step,
  StepLabel,
  StepContent,
  Paper,
  Typography,
  Box,
} from '@mui/material';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

import { Link } from 'react-router-dom';

import '../../assets/styles/OrderDetailAdmin.css';

export default function OrderDetailAdmin() {
  const goBack = () => {
    this.props.history.goBack();
  };

  const [activeStep, setActiveStep] = useState(1);
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
    {
      label: 'Cancelled',
      description: `Order is cancelled`,
    },
  ];

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
          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((step, index) => (
              <Step key={step.label}>
                <StepLabel
                // optional={index === 2 ? <Typography variant="caption">Last step</Typography> : null}
                >
                  {step.label}
                </StepLabel>
                <StepContent>
                  <Typography>{step.description}</Typography>
                  <Box sx={{ mb: 2 }}>
                    <div>
                      {/* {index === steps.length - 1 || index === 0 ? (
                        <Button disabled onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                          Waiting
                        </Button>
                      ) : (
                        <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                          Continue
                        </Button>
                      )} */}

                      {/* <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                        {index === steps.length - 1 || index === 0 ? 'Finish' : 'Continue'}
                      </Button> */}
                      {index === 0 ? (
                        <Button disabled sx={{ mt: 1, mr: 1 }}>
                          Waiting
                        </Button>
                      ) : null}

                      {index === 1 ? (
                        <>
                          <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                            Accept
                          </Button>
                          <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                            Reject
                          </Button>
                        </>
                      ) : null}

                      {/* <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                        Back
                      </Button> */}
                    </div>
                  </Box>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length && (
            <Paper square elevation={0} sx={{ p: 3 }}>
              <Typography>All steps completed - you&apos;re finished</Typography>
              <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                Reset
              </Button>
            </Paper>
          )}
        </div>
      </div>
    </Container>
  );
}
