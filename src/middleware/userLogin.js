import { isValidEmail, isValidPassword } from "../utils/validation.js";
import User from "../models/User.js";
import { requiredFieldsForLogin } from "../utils/RequiredFields.js";
import isUserAvailable from "../utils/findUser.js";
import isPasswordMatching from "../utils/isValidPassword.js";

async function UserLogin(req, res, next) {
  const { email, password } = req.body;

  requiredFieldsForLogin(req.body);
  isValidEmail(email);
  isValidPassword(password);

  try {
    const findUser = await isUserAvailable(email);
    const recordPassword = findUser.password;
    const validPassword = await isPasswordMatching(password, recordPassword);
    if (!validPassword) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    req.user = findUser;
    next();
  } catch (error) {
    return res.status(401).json({ message: "Invalid credentials" });
  }
}

export default UserLogin;
