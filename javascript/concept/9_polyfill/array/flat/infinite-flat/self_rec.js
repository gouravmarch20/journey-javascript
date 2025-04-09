// const arr = [1, [2, 3, [4, 5]]];
const arr = [1, [2, [{ 4: "ff" }, { 4: "ff" }, [{ 4: "ff" }]], [4, 5]], 6];

const flatA = (arr) => {
  console.log("--");
  let res = [];
  // if (arr?.length === 0) return [];
  if (!Array.isArray(arr)) return []; // handle null/undefined or non-array input

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (Array.isArray(element)) {
      res = [...res, ...flatA(element)];
    } else {
      res.push(element);
    }
  }
  console.log("the", res);
  return res;
};
flatA(arr);
