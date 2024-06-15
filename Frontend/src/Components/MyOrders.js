import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import { Container, Typography, Paper, Grid } from '@mui/material';
import { format } from 'date-fns';
import { ThemeContext } from '../ThemeContext';

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  const token = localStorage.getItem('token');
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await axios.get('http://localhost:3000/orders/getallmyorders', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setOrders(response.data);
      } catch (error) {
        console.error('Error fetching orders:', error);
      }
    };

    fetchOrders();
  }, [token]);

  return (
    <Container
      maxWidth="md"
      sx={{
        paddingTop: 4,
        paddingBottom: 4,
        backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.7)' : 'white',
        color: darkMode ? 'white' : 'black',
        borderRadius: 8,
        boxShadow: 3,
        marginTop: 4,
      }}
    >
      <Typography variant="h4" gutterBottom>
        My Orders
      </Typography>
      {orders.map((order, index) => (
        <Paper
          key={index}
          elevation={3}
          sx={{
            p: 2,
            mb: 2,
            backgroundColor: darkMode ? 'rgba(255, 255, 255, 0.1)' : 'white',
            color: darkMode ? 'white' : 'black',
            borderRadius: 4,
          }}
        >
          <Typography variant="h6">
            Order placed on: {order.createdAt ? format(new Date(order.createdAt), 'PPP') : 'Unknown Date'}
          </Typography>
          <Grid container spacing={2} sx={{ marginTop: 2 }}>
            <Grid item xs={4}>
              <Typography>Shirts: {order.shirt}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Jeans: {order.jeans}</Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography>Sheets: {order.sheets}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Total Cost: ₹{order.totalCost ? order.totalCost.toFixed(2) : 'N/A'}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography>Status: {order.status}</Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Container>
  );
};

export default MyOrders;
