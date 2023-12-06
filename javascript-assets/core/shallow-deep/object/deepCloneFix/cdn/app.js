// ! please check on localhost
const developerOne = {
  name: "gourav",
  skills: { primary: "mern stack ", secondary: "devop" },
  joiningDate: new Date(),
  calculateAge: function () {
    return 30;
  },
};

let devTwo = _.cloneDeep(developerOne);
devTwo.skills.city = "lundon";
console.log(devTwo);
