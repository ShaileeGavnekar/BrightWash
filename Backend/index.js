// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const User = require('./models/User'); // Ensure this path is correct

// const app = express();
// const port = 3000;
// const secretKey = 'your_secret_key'; // Use a more secure key and store it safely

// app.use(express.json());
// app.use(cors());
// app.use(cookieParser());

// const dbURI = 'mongodb+srv://admin:test123@details.65oegff.mongodb.net/?retryWrites=true&w=majority&appName=Details';
// mongoose.connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('MongoDB connected...');
// }).catch(err => {
//     console.error('Connection error', err);
// });

// const verifyToken = (req, res, next) => {
//     const token = req.cookies.token || (req.header('Authorization') && req.header('Authorization').replace('Bearer ', ''));

//     if (!token) {
//         return res.status(401).send('Access Denied');
//     }

//     try {
//         const verified = jwt.verify(token, secretKey);
//         req.user = verified;
//         next();
//     } catch (error) {
//         res.status(400).send('Invalid Token');
//     }
// };



// const verifyUser = async (username, email, password) => {
//     const user = await User.findOne({ $or: [{ email: email }, { name: username }] });
//     if (!user) {
//         return { success: false, message: 'User not found' };
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//         return { success: false, message: 'Invalid credentials' };
//     }

//     const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
//     return { success: true, token, userId: user._id }; // Return userId
// };

// // Signup endpoint
// app.post('/signup', async (req, res) => {
//     const { customer_id, name, email, dob, age, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).send('User already exists');
//         }

//         const dobDate = new Date(dob);
//         if (isNaN(dobDate)) {
//             return res.status(400).send('Invalid date of birth format');
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({
//             customer_id,
//             name,
//             email,
//             dob: dobDate,
//             age,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.send('User registered successfully');
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).send('Error registering user');
//     }
// });


// app.post('/login', async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const result = await verifyUser(null, email, password);
//         if (!result.success) {
//             return res.status(400).send(result.message);
//         }
//         res.cookie('token', result.token, { httpOnly: true, secure: false,sameSite:'none' }); // Use secure: true in production with HTTPS
//         res.json({ message: 'Login successful', userId: result.userId }); // Include userId in the response
//     } catch (error) {
//         console.error('Error logging in:', error);
//         res.status(500).send('Error logging in');
//     }
// });

// // Protected route to get user details

// app.get('/getuserdetails/:id', verifyToken, async (req, res) => {
//     const userId = req.params.id;
//     try {
//         console.log('Fetching user details for ID:', userId); // Debug log
//         const userDetails = await User.findById(userId);
//         if (userDetails) {
//             console.log('User details found:', userDetails); // Debug log
//             res.json({
//                 name: userDetails.name,
//                 email: userDetails.email,
//                 dob: userDetails.dob,
//                 age: userDetails.age
//             });
//         } else {
//             res.status(404).json({ message: 'User not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching user details:', error); // Debug log
//         res.status(500).json({ message: 'Error fetching user details' });
//     }
// });

// // Save user details endpoint
// app.post('/saveuserdetails', verifyToken, async (req, res) => {
//     const userDetails = req.body;
//     const newUser = new User(userDetails);

//     try {
//         await newUser.save();
//         console.log('Received user details:', userDetails);
//         res.send('User details received and logged.');
//     } catch (error) {
//         console.error('Error saving user details:', error);
//         res.status(500).send('Error saving user details');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });

//*************************** */
// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const path = require('path');
// const User = require('./models/User'); // Ensure this path is correct


// const app = express();
// const port = 3000;
// const secretKey = 'your_secret_key'; // Use a more secure key and store it safely

// const corsOptions = {
//   origin: 'http://localhost:3000', // Your frontend's origin
//   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//   credentials: true, // Allow credentials (cookies, authorization headers, etc.)
//   allowedHeaders: 'Content-Type,Authorization'
// };

// app.use(express.json());
// // app.use(cors());
// app.use(cors(corsOptions));
// app.use(cookieParser());

// const dbURI = 'mongodb+srv://admin:test123@details.65oegff.mongodb.net/?retryWrites=true&w=majority&appName=Details';
// mongoose.connect(dbURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// }).then(() => {
//     console.log('MongoDB connected...');
// }).catch(err => {
//     console.error('Connection error', err);
// });

// const verifyToken = (req, res, next) => {
//     const token = req.cookies.token || (req.header('Authorization') && req.header('Authorization').replace('Bearer ', ''));

//     if (!token) {
//         return res.status(401).send('Access Denied');
//     }

//     try {
//         const verified = jwt.verify(token, secretKey);
//         req.user = verified;
//         next();
//     } catch (error) {
//         res.status(400).send('Invalid Token');
//     }
// };

// // Function to verify user existence and generate JWT token
// const verifyUser = async (username, email, password) => {
//     const user = await User.findOne({ $or: [{ email: email }, { name: username }] });
//     if (!user) {
//         return { success: false, message: 'User not found' };
//     }

//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//         return { success: false, message: 'Invalid credentials' };
//     }

//     const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
//     return { success: true, token };
// };

// // Signup endpoint
// app.post('/signup', async (req, res) => {
//     const { customer_id, name, email, dob, age, password } = req.body;
//     try {
//         const existingUser = await User.findOne({ email });
//         if (existingUser) {
//             return res.status(400).send('User already exists');
//         }

//         const dobDate = new Date(dob);
//         if (isNaN(dobDate)) {
//             return res.status(400).send('Invalid date of birth format');
//         }

//         const hashedPassword = await bcrypt.hash(password, 10);

//         const newUser = new User({
//             customer_id,
//             name,
//             email,
//             dob: dobDate,
//             password: hashedPassword
//         });

//         await newUser.save();
//         res.send('User registered successfully');
//     } catch (error) {
//         console.error('Error registering user:', error);
//         res.status(500).send('Error registering user');
//     }
// });

// // Login endpoint
// // app.post('/login', async (req, res) => {
// //     const { email, password } = req.body;
// //     try {
// //         const result = await verifyUser(null, email, password);
// //         if (!result.success) {
// //             return res.status(400).send(result.message);
// //         }
// //         res.cookie('token', result.token, { httpOnly: true, secure: false }); // Use secure: true in production with HTTPS
// //         res.json({ message: 'Login successful' });
// //     } catch (error) {
// //         console.error('Error logging in:', error);
// //         res.status(500).send('Error logging in');
// //     }
// // });
// app.post('/login', async (req, res) => {
//   const { email, password } = req.body;
//   try {
//     const result = await verifyUser(null, email, password);
//     if (!result.success) {
//       return res.status(400).send(result.message);
//     }
//     res.cookie('token', result.token, { httpOnly: true, secure: false });
//     res.json({ message: 'Login successful', token: result.token }); // Include token in response
//   } catch (error) {
//     console.error('Error logging in:', error);
//     res.status(500).send('Error logging in');
//   }
// });

// // Protected route to get user details
// app.get('/getuserdetails', verifyToken, async (req, res) => {
//     const userId = req.user.userId;
//     try {
//         console.log('Fetching user details for ID:', userId); // Debug log
//         const userDetails = await User.findById(userId);
//         if (userDetails) {
//             console.log('User details found:', userDetails); // Debug log
//             res.json({
//                 name: userDetails.name,
//                 email: userDetails.email,
//                 dob: userDetails.dob,
//             });
//         } else {
//             res.status(404).json({ message: 'User not found' });
//         }
//     } catch (error) {
//         console.error('Error fetching user details:', error); // Debug log
//         res.status(500).json({ message: 'Error fetching user details' });
//     }
// });

// // Save user details endpoint
// app.post('/saveuserdetails', verifyToken, async (req, res) => {
//     const userDetails = req.body;
//     const newUser = new User(userDetails);

//     try {
//         await newUser.save();
//         console.log('Received user details:', userDetails);
//         res.send('User details received and logged.');
//     } catch (error) {
//         console.error('Error saving user details:', error);
//         res.status(500).send('Error saving user details');
//     }
// });

// app.listen(port, () => {
//     console.log(`Server is running on http://localhost:${port}`);
// });
//******************************************************* */
// backend/index.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const path = require('path');
const User = require('./models/User'); // Ensure this path is correct
const orderRoutes = require('./Routes/OrderRoutes'); // Import the order routes

const app = express();
const port = 3000;
const secretKey = 'your_secret_key'; // Use a more secure key and store it safely

const corsOptions = {
  origin: 'http://localhost:3000', // Your frontend's origin
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true, // Allow credentials (cookies, authorization headers, etc.)
  allowedHeaders: 'Content-Type,Authorization'
};

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

const dbURI = 'mongodb+srv://admin:test123@details.65oegff.mongodb.net/?retryWrites=true&w=majority&appName=Details';
mongoose.connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected...');
}).catch(err => {
    console.error('Connection error', err);
});

const verifyToken = (req, res, next) => {
    const token = req.cookies.token || (req.header('Authorization') && req.header('Authorization').replace('Bearer ', ''));

    if (!token) {
        return res.status(401).send('Access Denied');
    }

    try {
        const verified = jwt.verify(token, secretKey);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).send('Invalid Token');
    }
};

// Function to verify user existence and generate JWT token
const verifyUser = async (username, email, password) => {
    const user = await User.findOne({ $or: [{ email: email }, { name: username }] });
    if (!user) {
        return { success: false, message: 'User not found' };
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        return { success: false, message: 'Invalid credentials' };
    }

    const token = jwt.sign({ userId: user._id }, secretKey, { expiresIn: '1h' });
    return { success: true, token };
};

// Signup endpoint
app.post('/signup', async (req, res) => {
    const { customer_id, name, email, dob, age, password } = req.body;
    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).send('User already exists');
        }

        const dobDate = new Date(dob);
        if (isNaN(dobDate)) {
            return res.status(400).send('Invalid date of birth format');
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            customer_id,
            name,
            email,
            dob: dobDate,
            password: hashedPassword
        });

        await newUser.save();
        res.send('User registered successfully');
    } catch (error) {
        console.error('Error registering user:', error);
        res.status(500).send('Error registering user');
    }
});

// Login endpoint
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const result = await verifyUser(null, email, password);
        if (!result.success) {
            return res.status(400).send(result.message);
        }
        res.cookie('token', result.token, { httpOnly: true, secure: false });
        res.json({ message: 'Login successful', token: result.token }); // Include token in response
    } catch (error) {
        console.error('Error logging in:', error);
        res.status(500).send('Error logging in');
    }
});

// Protected route to get user details
app.get('/getuserdetails', verifyToken, async (req, res) => {
    const userId = req.user.userId;
    try {
        console.log('Fetching user details for ID:', userId); // Debug log
        const userDetails = await User.findById(userId);
        if (userDetails) {
            console.log('User details found:', userDetails); // Debug log
            res.json({
                name: userDetails.name,
                email: userDetails.email,
                dob: userDetails.dob,
            });
        } else {
            res.status(404).json({ message: 'User not found' });
        }
    } catch (error) {
        console.error('Error fetching user details:', error); // Debug log
        res.status(500).json({ message: 'Error fetching user details' });
    }
});

// Save user details endpoint
app.post('/saveuserdetails', verifyToken, async (req, res) => {
    const userDetails = req.body;
    const newUser = new User(userDetails);

    try {
        await newUser.save();
        console.log('Received user details:', userDetails);
        res.send('User details received and logged.');
    } catch (error) {
        console.error('Error saving user details:', error);
        res.status(500).send('Error saving user details');
    }
});

app.use('/orders', orderRoutes); // Use the order routes
// app.post('/orders/createorder', verifyToken, async (req, res) => {
//   const { shirt, jeans, sheets, totalCost } = req.body;
//   const userId = req.user.userId;

//   const newOrder = new Order({
//     shirt,
//     jeans,
//     sheets,
//     totalCost,
//     userId,
//   });

//   try {
//     const savedOrder = await newOrder.save();
//     res.json(savedOrder);
//   } catch (error) {
//     console.error('Error saving order:', error); // Log the error to the console
//     res.status(500).json({ message: 'Error saving order', error: error.message }); // Send error details in the response
//   }
// });
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
