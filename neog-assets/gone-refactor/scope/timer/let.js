const funA = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 3000)
  }
}
funA()
/*
TODO: HOW WORKING IN EC && HOW THESE VARIBLE WILL DECLARE --> IS GARABAGE COLLECTOR not removing it due to block scope
- it is block scope so save 
{i - 0}
{i - 1}
{i - 2}
{i - 3}
*** settime out now ref to it 
*/