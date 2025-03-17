// I recently interviewed for a frontend position in Microsoft for SDE2 role.

// Round 1: DSA + Javascript

// min stack
// move zeroes in matrix
// Javascript concepts in depth (Closures, promises etc)
// Round 2 DSA + Frontend:

// Right view of binary tree.
// Remove duplicate node from linkedlist.
// Create a spinner with CSS.
// React concepts in depth.
// Round 3: Component Design + Behavioural

// Create a grid component with React.
// Some behavioural questions.
// Round 4: Hiring Manager

// HLD of one of my previous projects.
// Some behavioral questions.
// Verdict: Hired

// I declined the offer since I was expecting L62 or above role but was granted L61.
// See my compensation post: https://leetcode.com/discuss/compensation/5367548/microsoft-sde-2-frontend-offer-expected/2506852

// Highlights
// 🎯 What is useEffect? A React hook for performing side effects based on state changes.
// ⚙️ Structure of useEffect: Comprises code to run, a dependency array, and an optional return function for cleanup.
// 🔄 State Changes: useEffect is triggered when specified state (like count) changes.
// ♻️ Cleanup Function: Optional return function for managing resources and preventing memory leaks.
// 📈 Lifecycle Understanding: useEffect runs on component mount and unmount, similar to component lifecycle methods.
// 💡 Essential Hook: Fundamental for managing side effects, crucial for any React developer.

// Key Insights
// 🔗 Side Effects Defined: Side effects in programming are actions that occur as a consequence of other actions, allowing developers to create dynamic applications that react to user interactions. This concept is central to the functionality of useEffect.
// 📊 Dependency Array Importance: The dependency array determines when useEffect runs. Providing the correct dependencies ensures that side effects are executed only when necessary, optimizing performance and preventing unnecessary renders.
// 🔄 Guaranteed Execution: useEffect guarantees execution on component mount, making it reliable for initializing state or side effects when a component renders for the first time.
// 🚨 Editor Warnings: IDEs provide helpful warnings for missing dependencies, guiding developers to avoid potential bugs by ensuring necessary variables are monitored within the dependency array.
// 🧹 Cleanup Necessity: The optional cleanup function is vital for preventing memory leaks, especially in cases involving timers or subscriptions, ensuring resources are released when the component is no longer in use.
// 🎓 Learning Application: Mastering useEffect prepares developers to handle complex state management and side effects, enhancing their coding proficiency and allowing them to mentor others effectively.
// 🔑 Foundation for React: Understanding useEffect alongside useState is essential for building robust React applications, forming the basis for managing component behavior and interactivity.