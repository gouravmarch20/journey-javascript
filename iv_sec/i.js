
// If you have upcoming interviews on platforms like Codility, CoderPad, etc., and you know the environment in advance — make sure to practice in that setup beforehand.

// I had issues during my Splunk interview because their environment didn’t support window or setTimeout. Spent a lot of time debugging, only to realize it wasn’t a code issue — just the environment. It worked fine later on JSBin.

// 🧠 Round 1 – JavaScript 

// • What's the difference between debounce and throttle? When to use what?  
// • Implement a throttle function  
// • Extend throttle to support leading and trailing options 

// ⚙️ Karat Interview – API Design (First 30 mins)

// Design a REST API for a system where employees can track & manage expenses (used by web & mobile clients). interviewer asked me to explain all status codes like 200,501,503,404.

// Questions:
// 1. Create an expense  
// 2. Fetch all expenses  
// 3. Approve/Reject an expense  
// 4. View pending expenses  
// 5. Filter expenses by category  
// 6. Delete an expense  

// Follow-up:
// 🔹 Approval requires supporting documents (uploaded at creation or later).  
// ➡️ How would you design the upload flow?

// 🔹 OCR processing of uploaded documents may be slow.  
// ➡️ How would you notify the client once it's done? 

// ⚛️ Karat Interview – React Coding (Next 30 mins)

// They have an existing implementation with list of items. You need to:

// • Add pagination  
// • Add Prev/Next buttons  
// • Enable/Disable buttons based on current page

// They have an existing implementation that displays all rows in the table. You need to:

// Q2: Editable Table  
// • Add row editing  
// • Include Update and Cancel buttons