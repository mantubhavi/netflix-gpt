export const checkValidData = (name, email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid = /(^[a-zA-Z][a-zA-Z\s]{0,20}[a-zA-Z]$)/.test(name);

  if (isNameValid !== null && !isNameValid) {
    return "Full Name is not valid.";
  }

  if (!isEmailValid) {
    return "Email Id is not valid.";
  }

  if (!isPasswordValid) {
    return "Password is not valid.";
  }

  return null;
};
