export const apiCall = (data: any) => {
  return new Promise((res) => {
    setTimeout(() => {
      res({ message: 'api call success' });
    }, 1000);
  });
};
