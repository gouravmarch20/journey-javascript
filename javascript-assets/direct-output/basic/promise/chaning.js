const p = new Promise((res, rej) => res(2))
// finally not take res ==> of promises
p.then(res => {
   console.log(res);
   return res * 2
}).then((res) => {
   console.log(res);
   return res * 2
}).finally((res) => {
   console.log("finally" , res);
   return 0
}).then((res) => {
   console.log(res);
   return res * 2
}).catch((r)=>{
   console.log(r);
   return 2
}).finally((res) => {
   console.log("finally" , res);
})