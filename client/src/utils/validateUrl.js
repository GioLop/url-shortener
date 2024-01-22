const validateUrl = (string) => {
  try {
    return new URL(string);
  } catch (err) {
    return false;
  }
};

export default validateUrl;