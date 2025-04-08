const time1 = "2:05AM";
const time2 = "7:09PM";

const convertTo24HourFormat = (time) => {
  let [hour, minutesPeriod] = time.split(":");
  let minutes = minutesPeriod.slice(0, -2);
  let period = minutesPeriod.slice(-2);

  if (period === "AM") {
    hour = hour === "12" ? "00" : hour;
  } else if (period === "PM") {
    hour = hour === "12" ? hour : String(+hour + 12);
  }

  return `${hour}:${minutes}`;
};

console.log(convertTo24HourFormat(time1)); // 02:05
console.log(convertTo24HourFormat(time2)); // 19:09
