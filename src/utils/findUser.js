import User from "../models/User.js";

async function isUserAvailable(email) {
  try {
    const userData = await User.findOne({ email });
    if (userData) {
      return userData;
    }
    return false;
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
}

export default isUserAvailable;
