import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/connect.db.js';
import registerRoute from './routes/register.route.js';
import serviceRoute from './routes/services.route.js';
import coverageRoute from './routes/coverageArea.route.js';

const port = process.env.PORT || 4000;
const app = express();
dotenv.config();

// MIDDLEWARES

app.use(cors())
app.use(express.json());
app.use('/api/register', registerRoute);
app.use('/api/service', serviceRoute);
app.use('/api/coverage-area', coverageRoute);

// CONNECTION

app.listen(port, () => {
  connectDB();
  console.log(`Connected on port ${port}`);
});
