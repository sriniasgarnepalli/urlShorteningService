import { mongoose } from "mongoose";

// URL Schema

const urlSchema = new mongoose.Schema({
  originalUrl: {
    type: String,
    required: true,
    match: /https?:\/\/.+/ // regex for url validation
  },
  shortUrl: {
    type: String,
    required: true,
    unique: true
  },
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User model
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
