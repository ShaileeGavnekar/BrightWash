import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
// import { AppBar, Toolbar, Button, Typography, Tabs, Tab, Switch } from '@mui/material';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import CreateOrder from './Components/CreateOrder';
import MyOrders from './Components/MyOrders';
import Home from './Components/Home';
import Account from './Components/Account';
import { AuthProvider } from './Components/AuthContext';
import { ThemeProvider } from './ThemeContext';
import NavigationTabs from './Components/NavigationTabs';
// const NavigationTabs = () => {
//   const navigate = useNavigate();
//   const location = useLocation();
//   const currentTab = location.pathname;
//   const { isAuthenticated, logout } = useContext(AuthContext);
//   const { darkMode, toggleTheme } = useContext(ThemeContext);

//   const handleChange = (event, newValue) => {
//     navigate(newValue);
//   };

//   return (
//     <AppBar position="static" color={darkMode ? 'default' : 'primary'}>
//       <Toolbar>
//         <Typography variant="h6" sx={{ flexGrow: 1 }}>
//           MyApp
//         </Typography>
//         <Switch checked={darkMode} onChange={toggleTheme} />
//         {!isAuthenticated ? (
//           <>
//             <Button color="inherit" component={Link} to="/login">
//               Login
//             </Button>
//             <Button color="inherit" component={Link} to="/signup">
//               Sign Up
//             </Button>
//           </>
//         ) : (
//           <>
//             <Tabs value={currentTab} onChange={handleChange} centered>
//               <Tab label="Home" value="/home" />
//               <Tab label="My Orders" value="/myorders" />
//               <Tab label="Account" value="/account" />
//             </Tabs>
//             <Button color="inherit" onClick={logout}>
//               Logout
//             </Button>
//           </>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// };

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <NavigationTabs />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/home" element={<PrivateRoute><Home /></PrivateRoute>} />
            <Route path="/account" element={<PrivateRoute><Account /></PrivateRoute>} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/createorder" element={<PrivateRoute><CreateOrder /></PrivateRoute>} />
            <Route path="/myorders" element={<PrivateRoute><MyOrders /></PrivateRoute>} />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
