                
// helper function to create a promise 
//* reduce sync run async function
// that resolves after a certain time
const asyncTask = function(time) {
  return new Promise((resolve, reject) => {
      setTimeout(() => resolve(`Completing ${time}`), 100*time);
  });
}

// create an array of task
const promises = [
  asyncTask(3),
  asyncTask(1),
  asyncTask(7),
  asyncTask(2),
  asyncTask(5),
];

// main function to run promise in series
const asyncSeriesExecuter = function(promises) {
  promises.reduce((acc, curr) => {
      // return when previous promise is resolved
      return acc.then(() => {
          // run the current promise
          return curr.then(val => {console.log(val)});
      });
  }, Promise.resolve());
};

asyncSeriesExecuter(promises);
              
          