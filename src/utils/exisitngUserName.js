import User from "../models/User.js";

async function isUserNameAvailable(username) {
  try {
    const userNameTaken = await User.findOne({ username });
    if (userNameTaken) {
      return true;
    }
    return false;
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default isUserNameAvailable;
