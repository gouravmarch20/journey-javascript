// Birdeye | Senior Software Engineer | Frontend - UI

// Anonymous User
// 885
// Nov 18, 2024
// Nov 19, 2024
// BirdEye
// React
// Frontend
// JavaScript
// Interview
// Status: B.Tech Tier - 3 College in Computer Science
// Y.O.E - 4.5+
// Position: Senior Software Engineer at Birdeye, India
// Location: WFH
// Date: Oct, 2024

// Round 1:

// Leetcode - Two Sum, Longest Substring Without Repeating Characters

// Create a function truncate(str, maxlength) that checks the length of the str and, if it exceeds maxlength – replaces the end of str with the ellipsis character … , to make its length equal to maxlength.

//   	The result of the function should be the truncated (if needed) string.
  	
//   	For instance:
//   	truncate("What I'd like to tell on this topic is:", 20)
//   	// "What I'd like to te…"

//   	truncate("Hi everyone!", 20)
// Implement map and filter array methods from scratch.

// What will be the output?

//  	const promise1 = Promise.resolve('First')
//  	const promise2 = Promise.resolve('Second')
//  	const promise3 = Promise.reject('Third')
//  	const promise4 = Promise.resolve('Fourth')

//  	const runPromises = async () => {
//  	const res1 = await Promise.all([promise1, promise2])
//  	const res2  = await Promise.all([promise3, promise4])
//  	return [res1, res2]
//  	}

//  	runPromises()
//  	.then(res => console.log(res))
//  	.catch(err => console.log(err))
// What will be the output?

//   	console.log(1);

//   	setTimeout(() => console.log(2));

//   	Promise.resolve().then(() => console.log(3));

//   	Promise.resolve().then(() => setTimeout(() => console.log(4)));

//   	Promise.resolve().then(() => console.log(5));

//   	setTimeout(() => console.log(6));

//   	console.log(7);
// Create an object calculator with three methods:

//   	read() takes two values and saves them as object properties with names a and b respectively.
//   	sum() returns the sum of saved values.
//   	mul() multiplies saved values and returns the result.
// Round 2:

// Create a Tic Tac Toe Game in React using custom hook (45 mins)
// Explain Reconcilation in React and also explain functional programming paradigm?
// Round 3:

// Discussion around SSR VS CSR
// Web Vitals - how to improve them in depth discussion
// how web works with critical rendering path
// Observer pattern in JS
// other questions using browser console
// Verdict - Passed

// Compensation Details -
// (Birdeye) https://leetcode.com/discuss/compensation/6057997/Birdeye-or-Senior-Software-Engineer-or-Frontend-UI-or-React-or-Remote-(WFH)

// (C2FO) https://leetcode.com/discuss/compensation/6059790/C2FO-or-Senior-Software-Engineer-UI

// !

// Frontend
// JavaScript
// Interview
// Status: B.Tech Tier -3 College in Computer Scienece
// Y.O.E - 4.5+
// Position: Senior Software Engineer at Birdeye, India
// Location: India
// Date: Oct, 2024

// Round 1:

// Output of this, follow up how to print 1, 2, 3 without using let keyword :

//  			for(var i =0; i < 3; i++) {
//  					setTimeout(function log() {
//  						console.log(i)
//  					 }, 1000)
//  				}
// Flatten an array

//   		[1, [2, [3, [4, 5]]], 6]
//   		1 => [1, 2, [3, [4, 5]], 6]
//   		2 => [1, 2, 3, [4, 5], 6]

//   		Array.prototype.myFlat = function(depth=Infinity){
//   		}

//   		const arr = [1, [2, [3, [4, 5]]], 6]
//   		console.log('flattend', arr.myFlat())
// Output based

//   	console.log(1)
//   	const promise = new Promise((resolve, reject)=> {
//   	  console.log("Inside Promise");
//   	  resolve();
//   	  console.log("Promise Resolve");
//   	  reject();
//   	  console.log("Promise Rejected");
//   	});

//   	promise
//   	.then(() => {
//   	  console.log(5)
//   	})
//   	.then(() => {
//   	  console.log(6)
//   	  return 4;
//   	})
//   	.then(console.log)
//   	.catch(() => {
//   	  console.log("Error");
//   	})
//   	console.log(7)
// Write a generic memoize function in Js.

//   			const memoize = (fn) => {
  			
//   			}

//   			const multiply = (a, b) => a * b;
//   			const memoizeMultiply = memoize(multiply);

//   			 // 10 -> execute logic

//   			console.log(memoizeMultiply(5,2))

//   			console.log(memoizeMultiply(5,2)) // 10 -> return from memory
// Round 2:

// Detail dicussion CSR VS SSR (20-25 min)

// Code Understanding

//   function test () {
//   	const a = 10;
//   	fetch (newAPI).then( () => {
//   		console.log(a + 1)
//   	}).catch(() => {
//   		console.log(a + 2)
//   	});
//   	console.log(a + 3)
//   }

//   		test()

//   	async function test () {

//   		const a = 10;

//   		await try{

//   		callMybackend();

//   	} catch{

//   	doSomething();

//   	}

//   		console.log(a + 3)

//   	}
// Dicussion about Event bubbling, capturing & event delegation

//   		<section onclick="alert('section')">
//   		   <div onclick="alert('div')">
//   			 <p onclick="alert('paragraph')">
//   				This is paragraph
//   			 </p>
//   		   </div>
//   		</section>
// Chunk | Chop an array

//   		Array.prototype.myChunk = function(n = 1){

//   		}
//   		// const newArr = [1,2,3,4,5,6,7,8,9,10]
//   		console.log([1,2,3,4,5,6,7,8,9,10].myChunk())
// Round 3:

// Product discussion about the product they are hiring for (30 mins)
// Design an App which we discussed for 30 mins? (It was their stealth mode product, so I won’t disclose specifics here. Just know that you need to build an app similar to banking app—focus on security and other critical aspects.)
// Verdict - Strong Hire

// Compensation details -
// (Birdeye) https://leetcode.com/discuss/interview-experience/6057964/Birdeye-or-Senior-Software-Engineer-or-Frontend-UI

// (C2FO) https://leetcode.com/discuss/interview-experience/6057964/Birdeye-or-Senior-Software-Engineer-or-Frontend-UI