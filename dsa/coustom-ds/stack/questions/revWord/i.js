// * time complexity : O(2n) ==> O(n)
//& space complexity : O(2n) ==> O(n)

const reverseWord = s => {
  const splitS = s.split (' '); //*O(n) => time //& O(1) ==> space
  const stack = []; //& O(n)
  //* O(N)
  for (const i of splitS) {
    stack.push (i);
  }
  let finalS = '';
  //*  O(N)
  while (stack.length !== 0) {
    const current = stack.pop ();
    if (current) {
      finalS += ' ' + current;
    }
  }
  return finalS.trim ();
};
console.log (reverseWord ('the sky is blue'));
