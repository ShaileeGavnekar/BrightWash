import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Grid, Box, Link, IconButton, InputAdornment } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { AuthContext } from './AuthContext';

axios.defaults.withCredentials = true;

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleClickShowConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/signup', {
        customer_id: 1,
        name: formData.name,
        email: formData.email,
        dob: new Date(formData.dob).toISOString(), 
        age: new Date().getFullYear() - new Date(formData.dob).getFullYear(),
        password: formData.password
      });
      console.log('User details saved:', response.data);

      // Save token to localStorage
      localStorage.setItem('token', response.data.token);

      // Call login function from AuthContext to update the authentication state
      login();

      setSuccessMessage('Account created successfully. Please login to continue.');
      setErrorMessage('');
      
    } catch (error) {
      console.error('Error saving user details:', error);
      setErrorMessage('Failed to save user details. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Date of Birth"
                name="dob"
                type="date"
                InputLabelProps={{
                  shrink: true,
                }}
                value={formData.dob}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Password"
                name="password"
                type={showPassword ? "text" : "password"}
                value={formData.password}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                value={formData.confirmPassword}
                onChange={handleChange}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowConfirmPassword}
                        edge="end"
                      >
                        {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </Grid>
            {successMessage && (
              <Grid item xs={12}>
                <Typography color="primary" align="center">
                  {successMessage}
                </Typography>
              </Grid>
            )}
            {errorMessage && (
              <Grid item xs={12}>
                <Typography color="error" align="center">
                  {errorMessage}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Sign Up
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                Already have an account? <Link component={RouterLink} to="/login">Login</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default SignUp;
