export const generateYears = () => {
  const years = [];
  for (let i = 2015; i <= new Date().getFullYear(); i++) {
    years.push(i.toString());
  }

  return years;
};
