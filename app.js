// app.js
import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import dbconnection from "./database/dbconnection.js";
import { Errorhandler, errormiddleware } from "./error/error.js";
import router from "./routes/reservationRoute.js"; // Adjusted import

const app = express();
dotenv.config({ path: "./config/config.env" });

app.use(
    cors({
        origin: [process.env.FRONTEND_URL],
        methods: ["POST"],
        credentials: true,
    })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(`/api/v1/reservation`, router); // Using the reservationRouter

dbconnection();

app.use(errormiddleware);

export default app;
