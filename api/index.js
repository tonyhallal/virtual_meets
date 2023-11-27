import express from 'express'
import cors from 'cors'
import {config} from "dotenv";
import router from "./routes/routes.js";

config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(process.env.APP_BASE_PREFIX, router);

const PORT = process.env.APP_PORT;
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})