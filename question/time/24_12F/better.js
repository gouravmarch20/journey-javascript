const convertTo12HourFormat = (time) => {
  let [hour, minutes] = time.split(":").map(Number);
  minutes = minutes.toString().padStart(2, "0"); // Ensures two-digit minutes

  let period = hour >= 12 ? "PM" : "AM";

  hour = hour % 12 || 12; // Converts 0 to 12 (midnight) and keeps 12 as 12 (noon)

  return `${hour}:${minutes}${period}`;
};

const time1 = "12:43"; // 7:03PM
const time2 = "0:33"; // 12:33AM

console.log(convertTo12HourFormat(time1)); // 7:03PM ✅
console.log(convertTo12HourFormat(time2)); // 12:33AM ✅
