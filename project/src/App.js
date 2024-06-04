// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
// import Login from './Components/Login';
// import Signup from './Components/SignUp';
// import { AppBar, Toolbar, Button, Typography } from '@mui/material';

// const App = () => {
//   return (
//     <Router>
//       <AppBar position="static">
//         <Toolbar>
//           <Typography variant="h6" sx={{ flexGrow: 1 }}>
//             MyApp
//           </Typography>
//           <Button color="inherit" component={Link} to="/login">
//             Login
//           </Button>
//           <Button color="inherit" component={Link} to="/signup">
//             Sign Up
//           </Button>
//         </Toolbar>
//       </AppBar>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route path="/signup" element={<Signup />} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;
//************************************* */
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/SignUp';
import Dashboard from './Components/Dashboard';
import { AppBar, Toolbar, Button, Typography } from '@mui/material';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MyApp
          </Typography>
          <Button color="inherit" component={Link} to="/login">
            Login
          </Button>
          <Button color="inherit" component={Link} to="/signup">
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
