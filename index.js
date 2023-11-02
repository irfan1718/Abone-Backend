import express from 'express';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import cors from 'cors';
import userRoute from './routes/userRoute.js';
import productRoute from "./routes/productRoute.js"
dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.listen(PORT, () => {
  console.log(`server is running on Port ${PORT}`);
});

app.use('/user', userRoute);
app.use('/product', productRoute);
