export const apiCall = (data: {}) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ message: 'success' });
    }, 1000);
  });
};
