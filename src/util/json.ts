export const jsonParse = str => {
  try {
    return JSON.parse(str);
  } catch (error) {
    return {};
  }
};
