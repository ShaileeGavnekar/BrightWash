import React, { useContext } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import laundry from '../Images/Laundry.jpg';
import { ThemeContext } from '../ThemeContext';

const Home = () => {
  const navigate = useNavigate();
  const { darkMode } = useContext(ThemeContext);
  
  const handleCreateOrder = () => {
    navigate('/createorder');
  };

  return (
    <Box
      sx={{
        height: '100vh',
        width: '100vw',
        backgroundImage: `url(${laundry})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <Container
        sx={{
          color: darkMode ? 'white' : 'black',
          padding: '20px',
          borderRadius: '5px',
          maxWidth: '80%',
          marginBottom: '20px',
          marginLeft: '50px',
        }}
      >
        <Typography variant="h4" gutterBottom>
          Home
        </Typography>
        <Typography gutterBottom>
          Welcome to our laundry service app! We provide top-notch washing, dry cleaning, and delivery services right to your doorstep. Our mission is to make laundry day hassle-free and convenient for you. Enjoy our affordable and reliable service with no hidden charges.
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateOrder}
          sx={{ mt: 2 }}
        >
          Create Order
        </Button>
      </Container>
      <Box
        sx={{
          position: 'absolute',
          top: '4%', 
          right: '2%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2,
        }}
      >
        {['Washing', 'Dry Cleaning', 'Pick Up and Delivery', 'No Shipping Charges'].map((text, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              color: darkMode ? 'white' : 'black',
              padding: '8px 16px',
              borderRadius: 1,
              width: 'max-content',
            }}
          >
            <CheckCircleIcon sx={{ color: 'green', marginRight: '8px' }} />
            <Typography variant="body1">{text}</Typography>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0, 
          left: 0,
          right: 0,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'black', 
          padding: '10px',
          borderRadius: '0 0 5px 5px',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            gap: 6, 
            marginBottom: 2,
            paddingLeft: '10px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <LocationOnIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white' }}>123 Laundry St, Wash City</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <EmailIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white' }}>laundry@example.com</Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <PhoneIcon sx={{ color: 'white' }} />
            <Typography sx={{ color: 'white' }}>+1234567890</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            backgroundColor: 'black',
            padding: '10px',
            borderRadius: '0 0 5px 5px',
            gap: 4,
          }}
        >
          <Box>
            <InstagramIcon sx={{ color: 'white', fontSize: 30 }} />
          </Box>
          <Box>
            <FacebookIcon sx={{ color: 'blue', fontSize: 30 }} />
          </Box>
          <Box>
            <YouTubeIcon sx={{ color: 'red', fontSize: 30 }} />
          </Box>
          <Box>
            <TwitterIcon sx={{ color: '#1DA1F2', fontSize: 30 }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Home;
