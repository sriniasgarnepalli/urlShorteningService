// Used to validate if the api request has all required fields
export const requiredFieldsForLogin = (reqBody) => {
  const { email, password } = reqBody;
  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }
  return true;
};
