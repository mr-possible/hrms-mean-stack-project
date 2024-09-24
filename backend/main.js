require('dotenv').config();

const express = require('express');
const app = express();

// Connect to MongoDB
const connectDB = require('./config/db');
connectDB();

// Middleware for parsing JSON
app.use(express.json());

// Routes
const employeeRoutes = require('./routes/employee');
app.use('/backend/', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
