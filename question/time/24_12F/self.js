const time1 = "12:45"; // 7:03PM
const time2 = "0:33"; // 12:33AM

const convertTo12HourFormat = (time) => {
  let [hour, minutes] = time.split(":").map(Number);
  minutes = minutes.toString().padStart(2, "0"); // Ensures two-digit minutes

  let period = hour >= 12 ? "PM" : "AM";

  if (period === "AM") {
    hour = hour === "00" || hour == "0" ? "12" : hour;
  } else if (period === "PM") {
    hour = hour === 12 ? 12 : hour % 12;
  }

  return `${hour}:${minutes}${period}`;
};

console.log(convertTo12HourFormat(time1)); // 02:05
console.log(convertTo12HourFormat(time2)); // 19:09
