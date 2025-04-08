const array = [
  { skill: "css", user: "bill" },
  { skill: "javascript", user: "chan" },
  { skill: "css4", user: "bill" },
  { skill: "javascript6", user: "sue" },
  { skill: "html", user: "sue" },
];
const hasInArray = (array, curr, toFind, toAdd) => {
  array.forEach((element) => {
    // console.log("the_user", array, curr, element[toFind] == curr[toFind]);

    if (element[toFind] == curr[toFind]) {
      //   console.log("the_user", array, curr, element[toFind] == curr[toFind]);
      console.log("found");
      //*NOTE: STILL NOT BREAK
      return true;
    }
  });
  return false;
};
hasInArray(array, { skill: "html", user: "bill" }, "user", "skill");
