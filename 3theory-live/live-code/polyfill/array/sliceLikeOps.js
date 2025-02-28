function processArray(arr, commands) {
    const results = [];
  
    commands.forEach(command => {
      const start = command.start;
      const end = command.end;
      const operation = command.operation;
      const slicedArray = arr.slice(start, end);
  
      if (operation === "reverse") {
        results.push(slicedArray.reverse());
      } else if (operation === "sum") {
        let sum = 0;
        for (let i = 0; i < slicedArray.length; i++) {
          sum += slicedArray[i];
        }
        results.push(sum);
      } else if (operation === "length") {
        results.push(slicedArray.length);
      } else {
        throw new Error("Invalid operation");
      }
    });
  
    return results;
  }
  
  // Test Cases
  const arr = [10, 20, 30, 40, 50];
  const commands = [
    { start: 1, end: 4, operation: "reverse" },
    { start: 0, end: 2, operation: "sum" },
    { start: 2, end: 5, operation: "length" }
  ];
  
  console.log(processArray(arr, commands));
  