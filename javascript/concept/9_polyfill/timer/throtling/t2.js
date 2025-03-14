const throttleFnTimeBased = (fn, delay) => {
  let lastExecuted = null;
  let timerId = null;
  return function (...args) {
    if (!lastExecuted) {
      fn.apply(this, args);
      lastExecuted = Date.now();
    } else {
      // remove previous timer
      clearTimeout(timerId);
      // create new timer remaning time
      timerId = setTimeout(() => {
        if (Date.now() - lastExecuted >= delay) {
          fn.apply(this, args);
          lastExecuted = Date.now();
        }
      }, delay - (Date.now() - lastExecuted));
    }
  };
};
