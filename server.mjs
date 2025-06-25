import express from "express";
import cors from "cors";
import "dotenv/config"
import chalk from "chalk";

export const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 2000;

export const connectServer = () => {
    app.listen(PORT, () => {
        console.log(`Server started on port ${chalk.yellowBright(PORT)}`);
    });
};