import jwt from "jsonwebtoken";
import User from "../models/User.js";

// Middleware used to protect routes and verify JWT token for delete or update actions

const protect = async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      // Fetch the token from headers
      token = req.headers.authorization.split(" ")[1];

      // Verify the token and extract the USER ID
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Verifying if user is available based on id available in decoded token
      const user = await User.findById(decoded.id).select("-password");
      if (!user) {
        return res.status(401).json({ message: "Not authorized" });
      }

      req.user = user;
      next();
    } catch (error) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }
  if (!token) {
    return res
      .status(401)
      .json({ message: "Not authorized, token is missing" });
  }
};

export default protect;
