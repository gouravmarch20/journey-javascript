const createSummation = () => {
  let accumulatedSum = 0;
  return (newNumber) => {
    console.log(accumulatedSum + newNumber);
    accumulatedSum += newNumber;
    return accumulatedSum + newNumber;
  };
};

const sum = createSummation(0);
sum(7);
sum(4);
sum(9);
