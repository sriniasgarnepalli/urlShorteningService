import bcrypt from "bcrypt";

async function isPasswordMatching(userPassword, recordPassword) {
  const isMatch = await bcrypt.compare(userPassword, recordPassword);
  if (!isMatch) {
    return false;
  }
  return true;
}

export default isPasswordMatching;
