import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Typography, Grid, Paper, Button } from '@mui/material';
import { useNavigate, Link } from 'react-router-dom';

const Dashboard = () => {
  const [userDetails, setUserDetails] = useState({});
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const response = await axios.get('http://localhost:3000/getuserdetails', {
          headers: {
            Authorization: `Bearer ${token}`,
          }
        });
        setUserDetails(response.data);
      } catch (error) {
        console.error('Error fetching user details:', error);
      }
    };

    if (token) {
      fetchUserDetails();
    }
  }, [token]);

  const handleCreateOrder = () => {
    navigate('/createorder');
  };

  return (
    <Container maxWidth="md" sx={{ paddingTop: 4, paddingBottom: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ marginBottom: 2, textAlign: 'center' }}>
        Dashboard
      </Typography>
      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <Typography variant="h6" gutterBottom>
              User Details
            </Typography>
            <Grid container spacing={1} direction="column">
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  <strong>Name:</strong> {userDetails.name}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  <strong>Email:</strong> {userDetails.email}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body1" gutterBottom>
                  <strong>Date of Birth:</strong> {userDetails.dob ? new Date(userDetails.dob).toLocaleDateString() : ''}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      <Grid container justifyContent="center" sx={{ marginTop: 2 }}>
        <Button variant="contained" color="primary" onClick={handleCreateOrder} sx={{ marginRight: 2 }}>
          Create Order
        </Button>
        <Button variant="contained" color="primary" component={Link} to="/myorders">
          View My Orders
        </Button>
      </Grid>
    </Container>
  );
};

export default Dashboard;
