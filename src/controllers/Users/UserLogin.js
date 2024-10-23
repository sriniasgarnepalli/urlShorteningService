import jwt from "jsonwebtoken";
import User from "../../models/User.js";

const loginUser = async (req, res) => {
  const user = req.user; // User is already attached to req by the middleware

  try {
    // Generate a JWT token (or handle session-based authentication)
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h" // Token expiry
    });

    res.status(200).json({
      message: "Login successful",
      token, // Return the token to the client
      user: {
        name: user.name,
        email: user.email
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error", error });
  }
};

export default loginUser;
