const deepArrayCopy = (arr) => (
  arr.reduce((acc, cur) => (
    acc.concat(Array.isArray(cur) ? [deepCopyArr(cur)] : cur)
  ), [])
);
