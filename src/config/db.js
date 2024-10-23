import mongoose from "mongoose";

const dbConfig = {
  url: process.env.DB_URL || "mongodb://localhost:27017/urlshortner"
};

export const connectDB = async () => {
  try {
    await mongoose.connect(dbConfig.url);
    console.log("MONGODB CONNECTED");
  } catch (error) {
    console.log("Database connection failed:", error);
    process.exit(1);
  }
};
