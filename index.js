import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./src/routes/router.js";
import userRouter from "./src/routes/userRouter.js";
import config from "./src/config/index.js";
import { connectDB } from "./src/config/db.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = config.server.port;
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors("*"));
app.use("/api", userRouter);
app.use("/application/shorten", router);

connectDB();

app.listen(PORT, () => {
  console.log(`Server is listening on PORT ${PORT}`);
});
