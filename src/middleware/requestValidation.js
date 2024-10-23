import { isValidPassword } from "../utils/validation";
import isPasswordMatching from "./../utils/isValidPassword";

const validateRequest = (req, res, next) => {
  const { email, password } = req;
  const isPasswordValid = isPasswordMatching(password);
};
