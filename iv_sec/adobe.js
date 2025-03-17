// Hi Guys ,
// This is my first post on any platform. Pardon me for any mistakes.
// Recently I have given interview for Adobe .
// No of Rounds -> 5
// Result -> Selected
// The interview went like:
// R1 ->Introductions , Javascript fundamentals (event loop -> interviewer didn't directly asked but given a scenario and want to to explain the behaviour), questions related to closures, and react fundamentals) then asked me 2 DS Algo questions (related to trees (medium) and array manipulation (easy-medium)).
// R2 -> Introductions, Then he asked me how do we do cache invalidation in our project. How our project is being served to millions of users daily (have to explain from deployment to user device the process in between). Then he asked to some indepth questions related to fronted optimizations that we have used in our project. Then he asked me a DS - Algo Question -> Related to trees (medim problem).
// R3->It was a hiring manager round -> introductions then he asked me to explain one of my projects that i am proud of and why ?. Then he asked me 2 DS Algo Questions related to trees( He wanted we to code it from scratch bottom view of a binary tree) , Binary search related problem (like aggressive cows)
// R4 -> It was a senior hiring manager round -> First we introduced ourselves , then he asked to explain my current project then he asked me a fronted machine coding problem (medium) in react. After that he asked me a reasoning problem. it goes like a 4 * 4 * 4 cm cube is given i want to cut 1cm^3 cube . How many i can cut from it. Follow up was if we paint that cube from all the sides how many cubes that we cut had all 3 sides colored. After that he asked me one ds / algo question related to tree (medium) .

// R5 -> it was a desing and architect round ->(I was expecting the general questions like desing a whatsapp/ youtube) but The interviewer first asked me about the previous interview experience , then he asked me about my project what are the impactful changes i am proud of, then he asked me to explain the whole project flow in a drawing tool where i have to make a kind of hld of my own project. He also asked me various question related to my project like why you did something like this , what could have been done. After that we had a discussion about why i haven't used lodash library in my project. Then he asked me to implement one of the functions of lodash library. At last he gave me a problem to print fibonacci sequence without storing it anywhere , lets say you call fib(10) . then this function should print the first 10 fibonacci numbers . you can't store the numbers anywhere. I used recursion and some extra logic to print that.

// I Just want to say , Learn everyday and If you are interviewing and wanted to switch , I know its hard but as steve jobs said:
// At the end you will be able to connect the dots. I have failed a lot of interview myself by doing silly mistakes or not being prepared enough.
// Just learn from your mistakes and don't repeat them, that is the way of learning. (Just try again)

// Thanks a lot guys , I got a lot from the community.

// Status: Experience of 7+ years
// Position: CS-1 at Adobe
// Location: Noida, India
// Date: Dec , 2022

// This interview was for Computer Scientist -1 role, though I didn't knew as I was expecting cs2 based on my experience . There were a total of 5 rounds for me including one Hiring Manager and HR round.

// Recriuter screening (~20 minutes ) :

// The Recruiter called me and explained about the role and tech stack required for the role . She also explained the entire interview process. She asked for some details and few behaviour questions like why Adobe etc.
// The first two rounds were supposed to happen on first day followed by two other rounds. Finally she scheduled the intereviews.

// Round 1( ~70 minutes ):

// This was a pure Javascript and web development round. The interviewer was a cs2 and very kind and humble.

// We started with HTML5 , css3 , ES5 concepts and went very deeper to concepts like
// async | defer . How a web page is rendered in UI (lifecycles).

// Then there were few output based questions covering various JS topics like hoisting , deep clone compostion , currying etc.
// Then few problem solving questions like writing polyfill for promise.allSettled arr.map .

// I was surprised no DS Algo questions were asked. Overall this round went well. I got stuck in few problems but the interviewer helped me.

// Round - 2 ( ~ 80 mins ):

// This round was purely problem solving round and went really well for me. The interviwer was another CS1. Total 4 questions were asked. I couldn't find them on Leetcode.

// Q1 . Design a class which supports method chaining based on a requirement.

//           e.g   `obj.test(2).method2().print()`
// Q2. Design a class which acts like producer-consumer. Producer will submit messages , consumers should listen and print the message. Initially I struggled to understand the ask but then wrote a class to simulate it.

//     // producer 
    
//    const producer = new Producer();
//    producer.send('chat',{message: "hi"});
   
//    // consumer 
   
//    const consumer = new Consumer();
//   	consumer.subscribe('chat',(msg)=>{
//   	    console.log("msg : ",msg);
//   	})
   
// followup :
// We should be able to cancel the subscription by calling a method cancelSubscription(id) .
// Implemented a hashmap to maintain the list and do the needful.

// Q3 : This was a LC medium question on dp. Based on https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

// Q4. It was 2 sum problem with a twist that you're not supposed to use extra space.

// Round 3 (~60 mins):

// This round was with Senior Computer Scientist. It was supposed to be a design + React round.

// Q1. Design a game app.

// Q2. I was asked to implement UI part of the game. No logic was expected but the UI should be there. I had option to choose any framework of my choice.

// Q3. General questions about performance techniques , i18n etc.

// Overall this round went really well.

// Round - 4: HM round

// Mostly asked questions related to current role and projects. Also involved behavioural questions. After that, he asked a coding questions in vanilla js :

// Q1. Implement a UI widget using vanilla js.

// I did it very quickly. Then he went on and explained about the product and expectations.

// Received the call next day that I have been selected and they are moving ahead with the offer. Whole process took ~4 weeks time.

// Compensation details: https://leetcode.com/discuss/compensation/3272395/Adobe-or-CS1-or-Noida-or-Accepted