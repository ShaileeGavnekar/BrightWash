import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import { Container, Typography, Grid, Paper } from '@mui/material';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const token = localStorage.getItem('token'); 
  let userId = null;
  
  if (token) {
    try {
      const decoded = jwtDecode(token);
      userId = decoded.userId;
      console.log('Decoded userId:', userId);
    } catch (error) {
      console.error('Error decoding token:', error);
    }
  }
  else{
    console.log('here');
  }

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/getuserdetails/${userId}`, {
          headers: {
            Authorization: `Bearer ${token}`, // Add token in headers if needed
          }
        });
        setUserDetails(response.data);
        console.log('Fetched user details:', response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (userId) {
      fetchUserDetails();
    }
  }, [userId, token]);

  return (
    <Container maxWidth="md">
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Details
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Name:</strong> {userDetails.name }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Email:</strong> {userDetails.email }
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Date of Birth:</strong> {userDetails.dob ? new Date(userDetails.dob).toLocaleDateString() :new Date(userDetails.dob).toLocaleDateString()}
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>Age:</strong> {userDetails.age }
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Dashboard;
