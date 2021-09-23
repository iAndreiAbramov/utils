const deepArrayCopy = (arr) => {
  return arr.reduce((acc, cur) => {
    if (!Array.isArray(cur)) {
      acc.push(cur);
    } else if (Array.isArray(cur)) {
      acc.push(deepArrayCopy(cur));
    }
    return acc;
  }, []);
}
