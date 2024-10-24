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
  // user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to User model
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  },
  clicks: { type: Number, default: 0 },
  accessLog: [
    {
      ipAddress: String, // To log the IP address of the user
      userAgent: String, // User-agent string
      referrer: String, // Referrer URL, if available
      timestamp: { type: Date, default: Date.now } // Timestamp of the access
    }
  ]
});

const Url = mongoose.model("Url", urlSchema);

export default Url;
