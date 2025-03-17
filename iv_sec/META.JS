// Status: Computer Science student at Poornima college of Engineering (3th year)
// Position: Front End Engineer Intern
// Location: London, United Kingdom
// Date: February 2022

// Although my application was ultimately rejected, the interview process provided valuable insights into the company's hiring practices.

// Application: I discovered the job opening on LinkedIn and applied through Meta's job portal. Fortunately, I received a positive response and made it through the resume screening round. Soon after, I received an email from the HR representative, who asked me fundamental questions regarding my JavaScript skills, front-end engineering experience, familiarity with data structures and algorithms, and my involvement in coding competitions or hackathons.

// Recruiter Phone Screen: Following the initial screening, I had a telephonic interview with a recruiter. The interview focused on basic technical questions, such as the concepts of .call and .apply, event delegation, closures, the usage of the this keyword, and discussions around stack, queue, and determining image load progress using plain JavaScript. Additionally, there was a question related to the tree(I dont exactly remember the question).

// Coding Interview: Upon successfully passing the recruiter phone screen, I advanced to a 45-minute coding interview with an engineer from Facebook. This interview aimed to assess my problem-solving skills in real-life scenarios and the ability to implement functions or methods from scratch. The question in this round revolved around the Event Emitter class, which had a medium level of difficulty. However, since I had limited exposure to the emitter class, I found it challenging to solve the problem, resulting in my rejection at this stage.

// Despite not receiving an offer from Meta, the interview experience provided me with valuable insights and learnings. I remain committed to enhancing my skills in front-end engineering, data structures, and algorithms to strengthen my future opportunities.

// If you have any questions feel free to reach out.

// Implement an engine that process async callbacks using javascript. Your task is to provide implementation of the class QueueCallbacks to meet all the condition.


// You should provide the implementation of the constructor and process methods, Do not change the names of these methods or the number of arguments they receive.

// The constructor method should recieve an optional string., The value of the string will be responsible for the order in which callbacks stored in the queue are processes.
// The only non-empty value it can recieve in the string LIFO(Last in first out). the default order of proecessing callbacks in the queue will be FIFO (First in first out)

// The process method recieve a singhe async function that should be executes by following the algorithim described below: 

// * If there is currently no async funcitn being executed by the class, the received callback method should be executed immediately.
// * If there is currently onl one async function currently being executed the callback method shoudl be executed immediatley as well.
// * If there are two async function currently being executed the callback method should be put int the queue.
// * After on of the currently executed async function is finished
// * When there were no argument passed to the contructor the first callback method that was pusehd into the queue should be executed (First in first out).
// * When the argument passed to the contructor was LIFO, the last callback in the queu should be executed.
// * If there are more than 6 callbacks in the queue discard any extra callbacks
// * If there are more than 3 callbacks in the queue, follow FIFO if no argument is passed to constructor