function processArray(arr, commands) {
    return commands.map(({ start, end, operation }) => {
      const slicedArray = arr.slice(start, end);
  
      switch (operation) {
        case "reverse":
          return [...slicedArray].reverse(); // Ensures immutability
        case "sum":
          return slicedArray.reduce((sum, num) => sum + num, 0);
        case "length":
          return slicedArray.length;
        default:
          throw new Error("Invalid operation");
      }
    });
  }
  
  // Test Cases
  const arr = [10, 20, 30, 40, 50];
  const commands = [
    { start: 1, end: 4, operation: "reverse" },
    { start: 0, end: 2, operation: "sum" },
    { start: 2, end: 5, operation: "length" }
  ];
  
  console.log(processArray(arr, commands));