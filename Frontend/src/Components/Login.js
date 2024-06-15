// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Grid, Box, Link, IconButton, InputAdornment } from '@mui/material';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import axios from 'axios';

// axios.defaults.withCredentials=true;
// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/login', formData);
//       console.log('Login successful:', response.data);
    
//       // document.cookie = `token=${response.data.token}; path=/`;
//       setErrorMessage('');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Failed to login. Please try again.');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   )
//                 }}
//               />
//             </Grid>
//             {errorMessage && (
//               <Grid item xs={12}>
//                 <Typography color="error" align="center">
//                   {errorMessage}
//                 </Typography>
//               </Grid>
//             )}
//             <Grid item xs={12}>
//               <Button type="submit" fullWidth variant="contained" color="primary">
//                 Login
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography align="center">
//                 Don't have an account? <Link component={RouterLink} to="/signup">Create one</Link>
//               </Typography>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;

// import React, { useState } from 'react';
// import { Container, TextField, Button, Typography, Grid, Box, Link, IconButton, InputAdornment } from '@mui/material';
// import { Link as RouterLink, useNavigate } from 'react-router-dom';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import axios from 'axios';

// axios.defaults.withCredentials = true;

// const Login = () => {
//   const [formData, setFormData] = useState({
//     email: '',
//     password: ''
//   });
//   const [showPassword, setShowPassword] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleClickShowPassword = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await axios.post('http://localhost:3000/login', formData);
//       console.log('Login successful:', response.data);

//       // Save token to localStorage
//       localStorage.setItem('token', response.data.token);

//       setErrorMessage('');
//       navigate('/dashboard');
//     } catch (error) {
//       console.error('Error logging in:', error);
//       setErrorMessage('Failed to login. Please try again.');
//     }
//   };

//   return (
//     <Container maxWidth="sm">
//       <Box sx={{ mt: 4 }}>
//         <Typography variant="h4" align="center" gutterBottom>
//           Login
//         </Typography>
//         <form onSubmit={handleSubmit}>
//           <Grid container spacing={2}>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Email"
//                 name="email"
//                 type="email"
//                 value={formData.email}
//                 onChange={handleChange}
//               />
//             </Grid>
//             <Grid item xs={12}>
//               <TextField
//                 variant="outlined"
//                 fullWidth
//                 label="Password"
//                 name="password"
//                 type={showPassword ? "text" : "password"}
//                 value={formData.password}
//                 onChange={handleChange}
//                 InputProps={{
//                   endAdornment: (
//                     <InputAdornment position="end">
//                       <IconButton
//                         aria-label="toggle password visibility"
//                         onClick={handleClickShowPassword}
//                         edge="end"
//                       >
//                         {showPassword ? <VisibilityOff /> : <Visibility />}
//                       </IconButton>
//                     </InputAdornment>
//                   )
//                 }}
//               />
//             </Grid>
//             {errorMessage && (
//               <Grid item xs={12}>
//                 <Typography color="error" align="center">
//                   {errorMessage}
//                 </Typography>
//               </Grid>
//             )}
//             <Grid item xs={12}>
//               <Button type="submit" fullWidth variant="contained" color="primary">
//                 Login
//               </Button>
//             </Grid>
//             <Grid item xs={12}>
//               <Typography align="center">
//                 Don't have an account? <Link component={RouterLink} to="/signup">Create one</Link>
//               </Typography>
//             </Grid>
//           </Grid>
//         </form>
//       </Box>
//     </Container>
//   );
// };

// export default Login;

//********************************* */
import React, { useState, useContext } from 'react';
import { Container, TextField, Button, Typography, Grid, Box, Link, IconButton, InputAdornment } from '@mui/material';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import axios from 'axios';
import { AuthContext } from './AuthContext';

axios.defaults.withCredentials = true;

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/login', formData);
      console.log('Login successful:', response.data);

      // Save token to localStorage
      localStorage.setItem('token', response.data.token);

      // Call login function from AuthContext to update the authentication state
      login();

      setErrorMessage('');
      navigate('/home');
    } catch (error) {
      console.error('Error logging in:', error);
      setErrorMessage('Failed to login. Please try again.');
    }
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" align="center" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
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
            {errorMessage && (
              <Grid item xs={12}>
                <Typography color="error" align="center">
                  {errorMessage}
                </Typography>
              </Grid>
            )}
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Login
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Typography align="center">
                Don't have an account? <Link component={RouterLink} to="/signup">Create one</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </Box>
    </Container>
  );
};

export default Login;

