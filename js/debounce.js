const debounce = (callback, timeoutDelay = 500) => {
  let timeoutId;
  let callCounter = 0;
  let resetCallCounterId;

  return () => {
    clearTimeout(timeoutId);
    clearTimeout(resetCallCounterId);
    resetCallCounterId = setTimeout(() => callCounter = 0, timeoutDelay);
    if (callCounter === 0) {
      callback();
      callCounter++;
    } else {
      timeoutId = setTimeout(callback, timeoutDelay);
    }
  };
};
