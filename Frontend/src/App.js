import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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

const App = () => {
  return (
    <ThemeProvider>
      <AuthProvider>
        <Router>
          <NavigationTabs />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/home"
              element={
                <PrivateRoute>
                  <Home />
                </PrivateRoute>
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/createorder"
              element={
                <PrivateRoute>
                  <CreateOrder />
                </PrivateRoute>
              }
            />
            <Route
              path="/myorders"
              element={
                <PrivateRoute>
                  <MyOrders />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to="/login" />} />
          </Routes>
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
};

export default App;
