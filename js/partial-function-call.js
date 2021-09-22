const partial = (fn, ...args) => {
  return (..._args) => {
    return fn(...args, ..._args);
  }
}
