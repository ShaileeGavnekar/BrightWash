import React, { useContext } from 'react';
import { Container, Typography } from '@mui/material';
import { ThemeContext } from '../ThemeContext';
import Dashboard from './Dashboard'; // Adjust the path based on your project structure

const Account = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <Container
      maxWidth="md"
      sx={{
        backgroundColor: darkMode ? 'rgba(0, 0, 0, 0.5)' : 'white',
        color: darkMode ? 'white' : 'black',
        padding: '20px',
        borderRadius: '5px',
        marginTop: '50px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Account
      </Typography>
      <Typography variant="body1" gutterBottom>
        This is the account page. Here you can view and edit your account details.
      </Typography>

      {/* Render Dashboard Component */}
      <Dashboard />
    </Container>
  );
};

export default Account;
