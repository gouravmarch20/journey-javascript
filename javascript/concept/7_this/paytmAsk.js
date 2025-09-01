const user = {
  name: "Gaurav",
  show: function () {
    const arrow1 = () => {
      console.log(this.name);

      const arrow2 = () => {
        console.log(this.name);
      };
      arrow2();
    };
    arrow1();
  },
};

user.show(); // 👉 "Gaurav"
