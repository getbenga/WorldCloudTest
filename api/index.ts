
import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import cors from "cors";
import {getWordCloudData} from "./wordCloudService";
import routes from "./routes";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 8000;

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`)
});

app.use('/api', routes);

