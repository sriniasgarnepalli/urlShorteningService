import mongoose, { model } from "mongoose";
import bcrypt from "bcrypt";

// User Schema to store or update application data as well
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: /.+\@.+\..+/
  },
  password: {
    type: String,
    required: true,
    minlength: 6
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  profile: {
    firstName: { type: String },
    lastName: { type: String }
  },
  applicationData: {
    urlShorteningData: [{ type: mongoose.Schema.Types.ObjectId, ref: "Url" }],
    lastLogin: { type: Date },
    activityHistory: [
      {
        action: { type: String },
        timestamp: { type: Date, default: Date.now }
      }
    ]
  }
});

// Hashing password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

const User = mongoose.model("User", userSchema);

export default User;
