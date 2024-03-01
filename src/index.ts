import bodyParser from "body-parser";
import cors from "cors";
import express, { Express } from "express";
import http from "http";
import dotenv from "dotenv";
import router from "./routes/routes";
import mongoose, { Mongoose } from "mongoose";

const app: Express = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set("PORT", 3000);
app.set("BASE_URL", "localhost");

dotenv.config();

app.use("/api/v1", router);

const mongoUri = process.env.MONGODB_URI;

if (!mongoUri) {
  console.error("Mongo Db url is not defined");
  process.exit(1);
}
mongoose
  .connect(mongoUri, {})
  .then(() => {
    console.log("Mongo Db  is connected");
  })
  .catch((error) => {
    console.log(error);
  });

try {
  const port: Number = app.get("PORT");
  const base_url: String = app.get("BASE_URL");
  server.listen(port, (): void => {
    console.log("Server is running");
  });
} catch (error) {
  console.log(error);
}

export default server;
