//TODO: revision
const add2LargeNo = (no1, no2) => {
  const n1L = no1.length;
  const n2L = no2.length;
  const maxL = Math.max(n1L, n2L);
  let carry = 0;
  let sum = "";

  for (let i = 1; i <= maxL; i++) {
    const lastNo1 = i <= n1L ? +no1.charAt(n1L - i) : 0;
    const lastNo2 = i <= n2L ? +no2.charAt(n2L - i) : 0;

    let tempSum = lastNo1 + lastNo2 + carry;
    carry = Math.floor(tempSum / 10);
    tempSum = tempSum % 10;

    sum = tempSum + sum;
  }

  if (carry > 0) {
    sum = carry + sum;
  }

  return sum;
};

const no1 = "444";
const no2 = "11";
console.log(add2LargeNo(no1, no2));
