// Experience: 8+ Years / Product Based
// College: Tier 3
// Applied directly
// Current CTC: 54LPA + 8LPA (Bonus)
// WFH

// Coding

// 1. Memoised function for async callback based tasks.
// Discussed serializing params to generate unique key for storing results.
// Error handling.
// Took 5 mins to implement.

// Scale up: How would you handle tasks completion without passing successCallback to task?
// Ans: Can use promises (await).

// Scale up: Another way to memoise async function without using promises or callbacks ?
// Ans: Felt Interviewer was keen on getting for specific answer that he knew. Please comment how it can be done.

// 2. Call paginated APIs and render some items
// React Task.
// Read through code.
// API code required to pass cursor (garbage value) for first page request too. I mean why ????
// Rendered list pretty quickly.
// Added load more button at bottom to fetch next page.
// Took 10mins.

// Scale up: How can we imlpement infinite scroll?
// Ans:
// 1.Add a container and on scroll check how far we are from bottom, fetch next page, cache results for some time so that we are not making alot of requests.

// Use Intersection observer
// Scale up: Implement Infinite scroll
// Ans: Chose scroll based fetching as I was more familiar with it and googling was not allowed.

// Scale up: Do this without adding event listener.
// Ans: Mentioned it could be done with Intersection Observer but Interviewer was again reluctant on getting some solution other than mentioned above. Please comment how it can be done per interviewer's constraints.

// Read some reviews over Glassdoor to feel better about not getting selected.

// 
// Implement a function called parallelLimit that takes two parameters: (similar question asked in rippling)

// tasks: An array of functions that return promises
// limit: Maximum number of tasks to run in parallel

// The parallelLimit function should execute the tasks in parallel, but limit the number of concurrent tasks to limit.
// The function should return a promise that resolves to an array of results, where each result is either the resolved value of the task.

// More details here - https://preparefrontend.com/practise?id=6&title=Parallel-task-limit