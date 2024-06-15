import React,{useContext} from 'react';
import { useNavigate, useLocation ,Link} from 'react-router-dom';
import { AppBar, Toolbar, Button, Typography, Tabs, Tab, Switch } from '@mui/material';
import { AuthContext} from './AuthContext';
import { ThemeContext} from '../ThemeContext';

const NavigationTabs = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentTab = location.pathname;
  const { isAuthenticated, logout } = useContext(AuthContext);
  const { darkMode, toggleTheme } = useContext(ThemeContext);

  const handleChange = (event, newValue) => {
    navigate(newValue);
  };

  return (
    <AppBar position="static" color={darkMode ? 'default' : 'primary'}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          MyApp
        </Typography>
        <Switch checked={darkMode} onChange={toggleTheme} />
        {!isAuthenticated ? (
          <>
            <Button color="inherit" component={Link} to="/login">
              Login
            </Button>
            <Button color="inherit" component={Link} to="/signup">
              Sign Up
            </Button>
          </>
        ) : (
          <>
            <Tabs value={currentTab} onChange={handleChange} centered>
              <Tab label="Home" value="/home" />
              <Tab label="My Orders" value="/myorders" />
              <Tab label="Account" value="/account" />
            </Tabs>
            <Button color="inherit" onClick={logout}>
              Logout
            </Button>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};
export default NavigationTabs;