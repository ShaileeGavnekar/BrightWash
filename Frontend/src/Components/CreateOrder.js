import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Paper, FormControl, FormLabel, RadioGroup, FormControlLabel, Radio, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from '@mui/icons-material/Google';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    shirt: 0,
    jeans: 0,
    sheets: 0,
    shirtCost: 20.0, // Fixed price per shirt
    jeansCost: 50.0, // Fixed price per jeans
    sheetsCost: 30.0, // Fixed price per sheet
    paymentMethod: 'cod', // Default payment method
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleChange = (e) => {
    // Ensure only non-negative integer values are set
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value) && value >= 0) {
      setOrderData({
        ...orderData,
        [e.target.name]: value
      });
    }
  };

  const handlePaymentChange = (e) => {
    setOrderData({
      ...orderData,
      paymentMethod: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const totalCost = (
      orderData.shirt * orderData.shirtCost +
      orderData.jeans * orderData.jeansCost +
      orderData.sheets * orderData.sheetsCost
    ).toFixed(2);

    if (totalCost <= 0) {
      setErrorMessage('Please add some clothes to place an order.');
      return;
    }

    const dataToSend = {
      ...orderData,
      totalCost: parseFloat(totalCost)
    };

    try {
      await axios.post('http://localhost:3000/orders/createorder', dataToSend, {
        headers: {
          Authorization: `Bearer ${token}`,
        }
      });
      setSuccessMessage('Laundry booked successfully!');
      setErrorMessage(''); // Clear error message on success
    } catch (error) {
      console.error('Error creating order:', error);
      setErrorMessage('Error creating order. Please try again later.');
    }
  };

  const handleRedirectToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <Container maxWidth="sm" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Paper elevation={3} sx={{ p: 2 }}>
        <Typography variant="h5" gutterBottom>
          Create Order
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField
                label="Shirts"
                name="shirt"
                type="number"
                value={orderData.shirt}
                onChange={handleChange}
                fullWidth
                inputProps={{ min: 0 }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Price per Shirt"
                name="shirtCost"
                type="number"
                value={orderData.shirtCost}
                fullWidth
                disabled // Fixed price, user cannot change
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Jeans"
                name="jeans"
                type="number"
                value={orderData.jeans}
                onChange={handleChange}
                fullWidth
                inputProps={{ min: 0 }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Price per Jeans"
                name="jeansCost"
                type="number"
                value={orderData.jeansCost}
                fullWidth
                disabled // Fixed price, user cannot change
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Sheets"
                name="sheets"
                type="number"
                value={orderData.sheets}
                onChange={handleChange}
                fullWidth
                inputProps={{ min: 0 }}
                required
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                label="Price per Sheet"
                name="sheetsCost"
                type="number"
                value={orderData.sheetsCost}
                fullWidth
                disabled // Fixed price, user cannot change
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h6" gutterBottom>
                Total Cost: ₹{(
                  orderData.shirt * orderData.shirtCost +
                  orderData.jeans * orderData.jeansCost +
                  orderData.sheets * orderData.sheetsCost
                ).toFixed(2)}
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl component="fieldset">
                <FormLabel component="legend">Payment Method</FormLabel>
                <RadioGroup
                  name="paymentMethod"
                  value={orderData.paymentMethod}
                  onChange={handlePaymentChange}
                >
                  <FormControlLabel 
                    value="cod" 
                    control={<Radio />} 
                    label="Cash on Delivery" 
                  />
                  <FormControlLabel 
                    value="gpay" 
                    control={<Radio />} 
                    label={<Box display="flex" alignItems="center"><GoogleIcon sx={{ mr: 1 }} />Pay via GPay</Box>} 
                  />
                  <FormControlLabel 
                    value="paytm" 
                    control={<Radio />} 
                    label={<Box display="flex" alignItems="center"><AccountBalanceWalletIcon sx={{ mr: 1 }} />Pay via Paytm</Box>} 
                  />
                  <FormControlLabel 
                    value="phonepe" 
                    control={<Radio />} 
                    label={<Box display="flex" alignItems="center"><PhoneAndroidIcon sx={{ mr: 1 }} />Pay via PhonePe</Box>} 
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Place Order
              </Button>
            </Grid>
          </Grid>
        </form>
        {/* Error message */}
        {errorMessage && (
          <Typography variant="body1" color="error" sx={{ mt: 2 }}>
            {errorMessage}
          </Typography>
        )}
        {/* Success message */}
        {successMessage && (
          <>
            <Typography variant="body1" color="success" sx={{ mt: 2 }}>
              {successMessage}
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
              <Button variant="contained" color="primary" onClick={handleRedirectToDashboard}>
                Go to Dashboard
              </Button>
            </Box>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default CreateOrder;

