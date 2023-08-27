import express from "express";
import cors from "cors";
import dotenv from "dotenv";

const app = express();

app.use(express.json());
app.use(cors());
dotenv.config();

app.listen(process.env.PORT, () => console.log(`App listening in port ${process.env.PORT}`));