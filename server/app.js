import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import dbconnect from "./config/db.js";
import productRouter from "./routes/productRoutes.js";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();
const app = express();
app.use(express.json());
dbconnect();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);
app.use("/api", productRouter);
app.use("/auth", authRoutes);

app.use((err, req, res, next) => {
  console.log(err.message, err.statusCode, err.stack);
  res.status(err.statusCode).json({
    message: err.message,
  });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on port ${process.env.PORT}`);
});
