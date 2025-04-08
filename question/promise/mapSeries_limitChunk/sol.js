Array.prototype.chunk = function (size) {
  if (!size) size = 1;
  let out = [];
  for (let i = 0; i < this.length; i += size) {
    out.push(this.slice(i, i + size));
  }
  return out;
};

const mapLimit = async (arr, limit, fn) => {
  let results = [];
  let chunks = arr.chunk(limit);
    console.log("chunks" , chunks)
  for (const chunk of chunks) {
    const promises = chunk.map(
      (item) =>
        new Promise((resolve, reject) => {
          fn(item, (err, res) => (err ? reject(err) : resolve(res)));
        })
    );
    const res = await Promise.all(promises);
    results.push(...res);
  }

  return results;
};

// Test Case
const testFunction = (num, callback) => {
  setTimeout(() => {
    callback(null, num * 2);
  }, 1000);
};

mapLimit([1, 2, 3, 4, 5], 2, testFunction)
  .then((result) => console.log("Success:", result))
  .catch((err) => console.error("Error:", err));
