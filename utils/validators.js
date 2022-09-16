const emailRegex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/i;

export const validateEmail = (email) => {
  console.log("\n\nEMAIL:", email);
  return emailRegex.test(email);
};
