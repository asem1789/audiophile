export const genId = (() => {
  let count = 1;
  return () => {
    return (++count).toString();
  };
})();