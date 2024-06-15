// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreateOrder = () => {
//   const [orderData, setOrderData] = useState({
//     shirt: 0,
//     jeans: 0,
//     sheets: 0,
//   });
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setOrderData({
//       ...orderData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:3000/orders/createorder', orderData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       });
//       navigate('/dashboard'); // Redirect to dashboard after successful order creation
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Create Order
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 label="Shirts"
//                 name="shirt"
//                 type="number"
//                 value={orderData.shirt}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Jeans"
//                 name="jeans"
//                 type="number"
//                 value={orderData.jeans}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 label="Sheets"
//                 name="sheets"
//                 type="number"
//                 value={orderData.sheets}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="primary" type="submit" fullWidth>
//                 Submit Order
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default CreateOrder;
//*********************************************** */
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreateOrder = () => {
//   const [orderData, setOrderData] = useState({
//     shirt: 0,
//     jeans: 0,
//     sheets: 0,
//     shirtCost: 20.0, // Fixed price per shirt
//     jeansCost: 50.0, // Fixed price per jeans
//     sheetsCost: 30.0, // Fixed price per sheet
//   });
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setOrderData({
//       ...orderData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const totalCost = (
//       orderData.shirt * orderData.shirtCost +
//       orderData.jeans * orderData.jeansCost +
//       orderData.sheets * orderData.sheetsCost
//     ).toFixed(2);

//     const dataToSend = {
//       ...orderData,
//       totalCost: parseFloat(totalCost)
//     };

//     try {
//       await axios.post('http://localhost:3000/orders/createorder', dataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       });
//       navigate('/dashboard'); // Redirect to dashboard after successful order creation
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Create Order
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField
//                 label="Shirts"
//                 name="shirt"
//                 type="number"
//                 value={orderData.shirt}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Shirt"
//                 name="shirtCost"
//                 type="number"
//                 value={orderData.shirtCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Jeans"
//                 name="jeans"
//                 type="number"
//                 value={orderData.jeans}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Jeans"
//                 name="jeansCost"
//                 type="number"
//                 value={orderData.jeansCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Sheets"
//                 name="sheets"
//                 type="number"
//                 value={orderData.sheets}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Sheet"
//                 name="sheetsCost"
//                 type="number"
//                 value={orderData.sheetsCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6" gutterBottom>
//                 Total Cost: ₹{(
//                   orderData.shirt * orderData.shirtCost +
//                   orderData.jeans * orderData.jeansCost +
//                   orderData.sheets * orderData.sheetsCost
//                 ).toFixed(2)}
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="primary" type="submit" fullWidth>
//                 Submit Order
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//       </Paper>
//     </Container>
//   );
// };

// export default CreateOrder;
//****************************************** */
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreateOrder = () => {
//   const [orderData, setOrderData] = useState({
//     shirt: 0,
//     jeans: 0,
//     sheets: 0,
//     shirtCost: 20.0, // Fixed price per shirt
//     jeansCost: 50.0, // Fixed price per jeans
//     sheetsCost: 30.0, // Fixed price per sheet
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setOrderData({
//       ...orderData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const totalCost = (
//       orderData.shirt * orderData.shirtCost +
//       orderData.jeans * orderData.jeansCost +
//       orderData.sheets * orderData.sheetsCost
//     ).toFixed(2);


//     const dataToSend = {
//       ...orderData,
//       totalCost: parseFloat(totalCost)
//     };

//     try {
//       await axios.post('http://localhost:3000/orders/createorder', dataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       });
//       setSuccessMessage('Laundry booked successfully!');
//     } catch (error) {
//       console.error('Error creating order:', error);
//     }
//   };

//   const handleRedirectToDashboard = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Create Order
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField
//                 label="Shirts"
//                 name="shirt"
//                 type="number"
//                 value={orderData.shirt}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Shirt"
//                 name="shirtCost"
//                 type="number"
//                 value={orderData.shirtCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Jeans"
//                 name="jeans"
//                 type="number"
//                 value={orderData.jeans}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Jeans"
//                 name="jeansCost"
//                 type="number"
//                 value={orderData.jeansCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Sheets"
//                 name="sheets"
//                 type="number"
//                 value={orderData.sheets}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Sheet"
//                 name="sheetsCost"
//                 type="number"
//                 value={orderData.sheetsCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6" gutterBottom>
//                 Total Cost: ₹{(
//                   orderData.shirt * orderData.shirtCost +
//                   orderData.jeans * orderData.jeansCost +
//                   orderData.sheets * orderData.sheetsCost
//                 ).toFixed(2)}
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="primary" type="submit" fullWidth>
//                 Submit Order
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         {/* Success message */}
//         {successMessage && (
//           <Typography variant="body1" color="success" sx={{ mt: 2 }}>
//             {successMessage}
//           </Typography>
//         )}
//         {/* Redirect button to dashboard */}
//         {successMessage && (
//           <Button variant="contained" color="primary" onClick={handleRedirectToDashboard} sx={{ mt: 2 }}>
//             Go to Dashboard
//           </Button>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default CreateOrder;
//******************************************* */
// import React, { useState } from 'react';
// import axios from 'axios';
// import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
// import { useNavigate } from 'react-router-dom';

// const CreateOrder = () => {
//   const [orderData, setOrderData] = useState({
//     shirt: 0,
//     jeans: 0,
//     sheets: 0,
//     shirtCost: 20.0, // Fixed price per shirt
//     jeansCost: 50.0, // Fixed price per jeans
//     sheetsCost: 30.0, // Fixed price per sheet
//   });
//   const [successMessage, setSuccessMessage] = useState('');
//   const [errorMessage, setErrorMessage] = useState('');
//   const token = localStorage.getItem('token');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setOrderData({
//       ...orderData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const totalCost = (
//       orderData.shirt * orderData.shirtCost +
//       orderData.jeans * orderData.jeansCost +
//       orderData.sheets * orderData.sheetsCost
//     ).toFixed(2);

//     if (totalCost <= 0) {
//       setErrorMessage('Please add some clothes to place an order.');
//       return;
//     }

//     const dataToSend = {
//       ...orderData,
//       totalCost: parseFloat(totalCost)
//     };

//     try {
//       await axios.post('http://localhost:3000/orders/createorder', dataToSend, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//         }
//       });
//       setSuccessMessage('Laundry booked successfully!');
//       setErrorMessage(''); // Clear error message on success
//     } catch (error) {
//       console.error('Error creating order:', error);
//       setErrorMessage('Error creating order. Please try again later.');
//     }
//   };

//   const handleRedirectToDashboard = () => {
//     navigate('/dashboard');
//   };

//   return (
//     <Container maxWidth="sm">
//       <Paper elevation={3} sx={{ p: 2 }}>
//         <Typography variant="h5" gutterBottom>
//           Create Order
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={6}>
//               <TextField
//                 label="Shirts"
//                 name="shirt"
//                 type="number"
//                 value={orderData.shirt}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Shirt"
//                 name="shirtCost"
//                 type="number"
//                 value={orderData.shirtCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Jeans"
//                 name="jeans"
//                 type="number"
//                 value={orderData.jeans}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Jeans"
//                 name="jeansCost"
//                 type="number"
//                 value={orderData.jeansCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Sheets"
//                 name="sheets"
//                 type="number"
//                 value={orderData.sheets}
//                 onChange={handleChange}
//                 fullWidth
//                 required
//               />
//             </Grid>
//             <Grid item xs={6}>
//               <TextField
//                 label="Price per Sheet"
//                 name="sheetsCost"
//                 type="number"
//                 value={orderData.sheetsCost}
//                 fullWidth
//                 disabled // Fixed price, user cannot change
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <Typography variant="h6" gutterBottom>
//                 Total Cost: ₹{(
//                   orderData.shirt * orderData.shirtCost +
//                   orderData.jeans * orderData.jeansCost +
//                   orderData.sheets * orderData.sheetsCost
//                 ).toFixed(2)}
//               </Typography>
//             </Grid>
//             <Grid item xs={12}>
//               <Button variant="contained" color="primary" type="submit" fullWidth>
//                 Submit Order
//               </Button>
//             </Grid>
//           </Grid>
//         </form>
//         {/* Error message */}
//         {errorMessage && (
//           <Typography variant="body1" color="error" sx={{ mt: 2 }}>
//             {errorMessage}
//           </Typography>
//         )}
//         {/* Success message */}
//         {successMessage && (
//           <Typography variant="body1" color="success" sx={{ mt: 2 }}>
//             {successMessage}
//           </Typography>
//         )}
//         {/* Redirect button to dashboard */}
//         {successMessage && (
//           <Button variant="contained" color="primary" onClick={handleRedirectToDashboard} sx={{ mt: 2 }}>
//             Go to Dashboard
//           </Button>
//         )}
//       </Paper>
//     </Container>
//   );
// };

// export default CreateOrder;
//********************* */
//After padding
import React, { useState } from 'react';
import axios from 'axios';
import { Container, TextField, Button, Typography, Grid, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const CreateOrder = () => {
  const [orderData, setOrderData] = useState({
    shirt: 0,
    jeans: 0,
    sheets: 0,
    shirtCost: 20.0, // Fixed price per shirt
    jeansCost: 50.0, // Fixed price per jeans
    sheetsCost: 30.0, // Fixed price per sheet
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setOrderData({
      ...orderData,
      [e.target.name]: e.target.value
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
              <Button variant="contained" color="primary" type="submit" fullWidth>
                Submit Order
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
          <Typography variant="body1" color="success" sx={{ mt: 2 }}>
            {successMessage}
          </Typography>
        )}
        {/* Redirect button to dashboard */}
        {successMessage && (
          <Button variant="contained" color="primary" onClick={handleRedirectToDashboard} sx={{ mt: 2 }}>
            Go to Dashboard
          </Button>
        )}
      </Paper>
    </Container>
  );
};

export default CreateOrder;
