// * time :  O(n)
// ~ space :  O(n)
const s = '[{( ) ';

const isValid = s => {
  const stack = []; // ~ O(n)
  //* O(n)
  for (let i = 0; i < s.length; i++) {
    const char = s[i]; // ~ O(1)

    if (char === '(' || char === '[' || char === '{') {
      stack.push (char);
    } else if (char === ')' || char === ']' || char === '}') {
      if (isEmpty (stack)) {
        return false;
      }
      const top = stack.pop ();
      if (
        (top === '(' && char !== ')') ||
        (top === '[' && char !== ']') ||
        (top === '{' && char !== '}')
      ) {
        return false;
      }
    }
  }
  return isEmpty (stack);
};
const isEmpty = stack => stack.length === 0;//* O(n)
console.log (isValid (s));
