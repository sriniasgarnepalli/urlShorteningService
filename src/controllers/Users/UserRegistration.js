import User from "../../models/User.js";
import { isValidEmail, isValidPassword } from "../../utils/validation.js";
import isUserNameAvailable from "../../utils/exisitngUserName.js";

async function registerUser(req, res) {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const userNameTaken = await isUserNameAvailable(username);
  if (userNameTaken) {
    return res.status(200).json({ message: "Username is taken" });
  }
  const validEmail = isValidEmail(email);
  if (!validEmail) {
    return res.status(400).json({ message: "Invalid email" });
  }
  const validPassword = isValidPassword(password);
  if (!validPassword) {
    return res
      .status(400)
      .json({ message: "Password should be least 6 characters" });
  }

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists." });
    }

    // Creating a new user
    const newUser = new User({ username, email, password });
    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
}

export default registerUser;
