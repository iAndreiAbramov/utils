const getUniqueId = (digits = 9) => {
  const dateNow = Date.now();
  const getUniqueNumber = () => {
    const id = Date.now();
    if (dateNow !== id) {
      return id;
    }
    return getUniqueNumber();
  }
  return getUniqueNumber().toString().slice(-digits);
}
