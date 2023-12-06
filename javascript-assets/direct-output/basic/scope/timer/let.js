const funA = () => {
  for (let i = 0; i < 3; i++) {
    setTimeout(() => {
      console.log(i)
    }, 3000)
  }
}
funA()
/*
- let is block scope   , it gone by taking ref of current variable so  garbage COLLECTOR not removing it 
{i - 0}
{i - 1}
{i - 2}
{i - 3}
*** settime out now ref to it 
*/