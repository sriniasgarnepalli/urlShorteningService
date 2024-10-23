export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const valid = emailRegex.test(email);
  if (!valid) {
    return false;
  }
  return true;
};

// Utility function to validate password strength (basic validation)
export const isValidPassword = (password) => {
  const valid = password && password.length >= 6; // Password must be at least 6 characters
  if (!valid) {
    return false;
  }
  return true;
};
