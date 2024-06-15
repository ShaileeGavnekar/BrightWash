// import React from 'react';
// import { Container, Typography ,Button} from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const Home = () => {
//     const navigate = useNavigate();
//     const handleCreateOrder = () => {
    
//     navigate('/createorder');
//   };

//   return (
//     <Container>
//       <Typography variant="h4">Home</Typography>
//       <Typography>Welcome to the Home page!</Typography>
//         <Button variant="contained" color="primary" onClick={handleCreateOrder} sx={{ mt: 2 }}>
//         Create Order
//       </Button>
//     </Container>
//   );
// };

// export default Home;
//********************************* */
import React, { useContext } from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
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
          overflowX: 'hidden', // Prevent horizontal scrollbar
        }}
      >
      <Container
        sx={{
          // backgroundColor: 'white', // Background color of the container
          // color: 'black', // Text color
          color: darkMode ? 'white' : 'black',
          padding: '20px', // Padding inside the container
          borderRadius: '5px', // Rounded corners
          maxWidth: '80%', // Limit container width
          marginBottom: '20px', // Space below the container
          marginLeft: '50px', // Move container to the left
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
      {/* <Button
        variant="contained"
        size="small"
        onClick={toggleTheme}
        sx={{
          position: 'absolute',
          top: '20px',
          right: '20px',
          zIndex: '10',
          fontSize: '0.75rem',
          padding: '4px 8px',
        }}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </Button> */}
      <Box
        sx={{
          position: 'absolute',
          top: '%', // Adjust this value to move it slightly down
          right: '2%', // Move it to the extreme right
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: 2, // Gap between each item
        }}
      >
        {['Washing', 'Dry Cleaning', 'Pick Up and Delivery', 'No Shipping Charges'].map((text, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              // backgroundColor: 'rgba(255, 255, 255, 0.7)',
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
          left: '10px',
          right:0,
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: 'black', // Background color for the row
          padding: '10px', // Add padding for spacing
          borderRadius: '0 0 5px 5px', // Rounded corners at the bottom
        }}
        >
          <Box sx={{ marginRight: '20px' }}>
          <InstagramIcon sx={{ color: 'white', fontSize: 30 }} />
        </Box>
        <Box sx={{ marginRight: '20px' }}>
          <FacebookIcon sx={{ color: 'blue', fontSize: 30 }} />
        </Box>
        <Box sx={{ marginRight: '20px' }}>
          <YouTubeIcon sx={{ color: 'red', fontSize: 30 }} />
        </Box>
        <Box>
          <TwitterIcon sx={{ color: '#1DA1F2', fontSize: 30 }} /> 
        </Box> 
        </Box>
        

      </Box>
  );
};

export default Home;



      