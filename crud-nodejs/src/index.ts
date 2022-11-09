import express from "express";
import dotenv from "dotenv";
import router from "./routes/router";
import cors from "cors";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors())
app.use("/api",router);






app.listen(process.env.PORT, () => {
    console.log("servidor correndo na porta: " + process.env.PORT );
});

