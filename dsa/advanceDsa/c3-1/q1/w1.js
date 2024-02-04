// Solution 1
// l1 : slice --> two edge use --. slice(0 , 10) : till 10 char , slice(15) : till end 
const insert = (mainString, insString, pos) => {
    if (typeof pos === "undefined") {
      pos = 0;
    }
    if (typeof insString === "undefined") {
      insString = "";
    }
    return mainString.slice(0, pos) + insString + mainString.slice(pos);
  };
  
  console.log(insert("We are doing some problem solving.", "JavaScript ", 18));