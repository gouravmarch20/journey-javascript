// The Intersection Observer API provides a way to observe when elements enter or leave the viewport, making it perfect for implementing lazy loading, infinite scrolling, and scroll-based animations.

// Basic Implementation
// Here's a simple example of how to create and use an Intersection Observer:

// // Create the observer
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       entry.target.classList.add('visible');
//       // Optional: stop observing after first intersection
//       // observer.unobserve(entry.target);
//     }
//   });
// }, {
//   threshold: 0.5, // 50% of element must be visible
//   rootMargin: '0px' // margin around root
// });

// // Start observing elements
// document.querySelectorAll('.observe-me').forEach(element => {
//   observer.observe(element);
// });
// Let's break down the key concepts in this code:

// Observer Creation

// The IntersectionObserver constructor takes two arguments:
// A callback function that executes when intersection changes
// An options object for configuring the observer.

// Callback Function

// Receives an array of IntersectionObserverEntry objects
// Each entry contains information about the intersection change
// isIntersecting tells us if the element is visible in the viewport.

// Configuration Options

// threshold: 0.5 means the callback triggers when 50% of the element is visible
// rootMargin adds a margin around the viewport (root) for earlier/later detection.

// Observer Usage

// Use querySelectorAll to select multiple elements with class 'observe-me'
// Call observe() on each element to start monitoring
// The observer will track each element's intersection with the viewport.

// Performance Benefits

// More efficient than scroll event listeners
// Browser optimizes intersection calculations
// Reduces main thread work and improves scrolling performance

// Read more about it here - https://preparefrontend.com/blog/blog/mastering-intersection-observer-in-javascript