// Status: B.Tech Tier - 3 College in Computer Science
// Y.O.E - 4.5+
// Position: Senior Software Engineer - UI at C2FO
// Location: Noida
// Date: Sep, 2024

// Round 1:

// Output of this

//   for(var i =0; i < 3; i++) {
//   	setTimeout(function log() {
//   		console.log(j)
//   	}, 1000)
//   	}
//   };
// Follow up of the above problem - need to output 1, 2, 3 without using let keyword, discussion around closure.

// Flatten an array - write a prototype.

// [1, [2, [3, [4, 5]]], 6]

// 		1 => [1, 2, [3, [4, 5]], 6]
// 		2 => [1, 2, 3, [4, 5], 6]

// 		Array.prototype.myFlat = function(depth=Infinity){
// 		}

// 		const arr = [1, [2, [3, [4, 5]]], 6]
// 		console.log('flattend', arr.myFlat())
// What will be the output?

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
// Write a generic memoization function

//   	const memoize = (fn) => {
//   	}

//   	const multiply = (a, b) => a * b;
//   	const memoizeMultiply = memoize(multiply);

//   	 // 10 -> execute logic

//   	console.log(memoizeMultiply(5,2))

//   	console.log(memoizeMultiply(5,2)) // 10 -> return from memory
// Round 2:

// Detailed discussion around CSR VS SSR, caching strategies in SSR VS CSR (25 mins)

// Code understanding & output based.

//   	 function test () {
//   		const a = 10;
//   		fetch (newAPI).then( () => {
//   			console.log(a + 1)
//   		}).catch(() => {
//   			console.log(a + 2)
//   		});
//   		console.log(a + 3)
//   	}

//   	test()

//   	async function test () {
//   		const a = 10;
//   		await try{
//   		callMybackend();
//   	} catch{
//   		doSomething();
//   	}
//   		console.log(a + 3)
//   	}
// Discussion around Event Bubbling, capturing and event delegation

//   	<section onclick="alert('section')">
//   	   <div onclick="alert('div')">
//   		 <p onclick="alert('paragraph')">
//   			This is paragraph
//   		 </p>
//   	   </div>
//   	</section>
  	
// Write a custom chunking function

//   	Array.prototype.myChunk = function(n = 1){
//   	}
//   	console.log([1,2,3,4,5,6,7,8,9,10].myChunk())
// Round 3:

// Discussion around the specific product for which they were hiring.
// How would we design that app? (It was their stealth mode product, so I won’t disclose specifics here. Just know that you need to build a banking related app—focus on security and other critical aspects.)
// Verdict - Passed

// Compensation Details -

// (C2FO) https://leetcode.com/discuss/compensation/6059790/C2FO-or-Senior-Software-Engineer-UI

// (Birdeye) https://leetcode.com/discuss/compensation/6057997/Birdeye-or-Senior-Software-Engineer-or-Frontend-UI-or-React-or-Remote-(WFH)