const arr = [6.1, 6.3, 6, 5, 7.1, 7.5];

const groupBy = (array, groupFn) =>
  array.reduce((acc, value) => {
    const key = groupFn(value);
    (acc[key] ??= []).push(value);
    return acc;
  }, {});

const result = groupBy(arr, Math.floor);
console.log(result);
