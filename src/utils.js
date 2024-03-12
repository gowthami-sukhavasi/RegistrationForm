export const validateFullName = (fullName) => {
  return String(fullName).match(/^([a-zA-z]+)\s([a-zA-z]+)$/);
};

export const validateContactNumber = (contactNumber) => {
  return String(contactNumber).match(/\d{10}/g);
};

export const validateEmailAddress = (emailId) => {
  return String(emailId).match(/^[\a-zA-Z0-9.\.]+@([\w-]+\.)+[\w-]{2,4}$/g);
};

export const validatePassword = (password) => {
  return String(password).match(/^([a-zA-z0-9]+)$/);
};
