const validateUrl = (string) => {
  console.log(string);
  try {
    new URL(string);
  } catch (err) {
    return false;
  }
};

export default validateUrl;