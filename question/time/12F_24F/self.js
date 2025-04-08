const t1 = "2:05AM";
const t2 = "7:09PM";
const formatTime = (time) => {
  const t = time.split(":");
  //   console.log(t[1].endsWith("PM"));
  //   console.log(t);
  const lastD = t[1].slice(0, 2);
  //   console.log("lastD", lastD);
  if (t[1].endsWith("PM")) {
    return `${12 + Number(t[0])}:${lastD}`;
  } else {
    return `0${t[0] % 12}:${lastD}`;
  }
};

console.log(formatTime(t1));
console.log(formatTime(t2));
