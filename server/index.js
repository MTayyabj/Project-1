import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from './config/Mongodb.js'
import authRouter from './Routes/AuthRoutes.js'
import userRouter from "./Routes/UserRoutes.js";

const app = express(); 
const port = process.env.PORT || 4000; 
connectDB();

//ALLOWING TO COMMUNICATE WITH THIS API, WE CAN ADD MORE
const allowedOrigins = ['http://localhost:5173']

app.use (express.json());
app.use(cookieParser());
app.use(cors(["*"]))


//API ENDPOINTS
app.get('/',(req,res)=> res.send("API is working wo hooo."));
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)

if (process.env.NODE_ENV !== "production") {
  const port = process.env.PORT || 4000;
  app.listen(port, () => console.log(`Server is listening on PORT ${port}`));
}

//Export server for Vercel
export default app;
