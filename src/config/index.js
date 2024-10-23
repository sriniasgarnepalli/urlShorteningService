import { connectDB } from "./db.js";
import serverConfig from "./server.js";

export default {
  db: connectDB,
  server: serverConfig
};
