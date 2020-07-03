export const apiCall = (data: {}) => {
  return new Promise((res) => {
    setTimeout(() => {
      res(data);
    }, 1000);
  });
};
