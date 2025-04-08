const array = [
  { skill: "css", user: "bill" },
  { skill: "javascript", user: "chan" },
  { skill: "css4", user: "bill" },
  { skill: "javascript6", user: "sue" },
  { skill: "html", user: "sue" },
];
// const hasInArray = (array, curr, toFind, toAdd) => {
//   array.forEach((element) => {
//     // console.log("the_user", array, curr, element[toFind] == curr[toFind]);

//     if (element[toFind] == curr[toFind]) {
//       console.log("the_user", array, curr, element[toFind] == curr[toFind]);

//       //   element[toAdd] = [...element[toAdd], curr[toAdd]];
//       return true;
//     }
//   });
//   return false;
// };
const hasInArray = (array, curr, toFind, toAdd) => {
  for (const element of array) {
    if (element[toFind] == curr[toFind]) {
      element[toAdd].push(curr[toAdd]);
      console.log("the_user", array, curr, element[toFind] == curr[toFind]);
      return true;
    }
  }
  return false;
};

const aggerate = (array, key, key1) => {
  const r = array.reduce((acc, curr) => {
    if (hasInArray(acc, curr, key, key1) == true) {
      console.log("----");
    } else {
      const value = curr[key1];
      curr[key1] = [];
      //   console.log("the" , value , key1)
      curr[key1].push(value);
      acc.push(curr);
    }
    return acc;
  }, []);
  console.log(r);
};
aggerate(array, "user", "skill");
