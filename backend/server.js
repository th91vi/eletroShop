const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const errors = require('./middleware/errorMiddleware');
const productRoutes = require('./routes/productRoutes');

dotenv.config();

connectDB();

const app = express();

app.use('/api/products', productRoutes);

app.use(errors.notFound);

app.use(errors.errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(`running in ${process.env.NODE_ENV} on port ${PORT}`)
);
