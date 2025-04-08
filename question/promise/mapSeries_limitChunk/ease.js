// Helper function to chop array in chunks of given size
const chunk = (array, size) => {
  if (!size) return [];

  const chunkedArr = [];
  let index = 0;

  while (index < array.length) {
    chunkedArr.push(array.slice(index, index + size));
    index += size;
  }
  return chunkedArr;
};

const asyncBatch = (array, batch_size, fn) => {
  const chunked = chunk(array, batch_size);
  let index = 0;

  const processBatch = () => {
    if (index >= chunked.length) return Promise.resolve([]);

    const batch = chunked[index++];

    return Promise.all(batch.map(fn)).then((results) =>
      processBatch().then((nextResults) => results.concat(nextResults))
    );
  };

  return processBatch();
};

// Test Case: All the logins resolve
const users = [1, 2, 3, 4, 5];
const login = (user) =>
  new Promise((resolve) => setTimeout(() => resolve(user), 1000));

asyncBatch(users, 2, login)
  .then((results) => console.log("Success:", results))
  .catch((error) => console.log("Error:", error));
