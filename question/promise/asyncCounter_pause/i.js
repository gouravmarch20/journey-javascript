const timer = (init = 0, step = 1) => {
  let intervalId;
  let count = init;

  const startTimer = () => {
    if (!intervalId) {
      intervalId = setInterval(() => {
        console.log(count);
        count += step;
      }, 1000);
    }
  };

  const stopTimer = () => {
    clearInterval(intervalId);
    intervalId = null;
  };
  const getTimerValue = () => {
    console.log("test" , count);
    return count;
  };
  // * closure base acess
  return {
    startTimer,
    stopTimer,
    getTimerValue,
  };
};

// Function to test the timer using closure
const testTimer = () => {
  const t = timer(5, 2);
  t.startTimer();

  setTimeout(() => {
    t.stopTimer();

    // Using closure to verify the timer output
  }, 3500); // Allow at least 3 intervals before stopping
  setTimeout(() => {
    t.getTimerValue();

    // Using closure to verify the timer output
  }, 5500);
};

testTimer();
