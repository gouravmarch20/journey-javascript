export class UserTracker {
  constructor() {
    this.visitedUsers = new Set(); // Track unique visitors
    this.lastVisit = new Map(); // Store last visit timestamps
    this.activeUsers = new WeakSet(); // Track active users
  }

  addUser(user) {
    try {
      if (!user || typeof user !== "object" || !user.name) {
        throw new Error("Invalid user object");
      }
      if (!this.visitedUsers.has(user.name)) {
        this.visitedUsers.add(user.name);
      }
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  updateLastVisit(user) {
    try {
      if (!user || typeof user !== "object" || !user.name) {
        throw new Error("Invalid user object");
      }
      if (!this.visitedUsers.has(user.name)) {
        throw new Error("User has not visited before");
      }
      this.lastVisit.set(user.name, new Date().toISOString());
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  getVisitDetails(user) {
    try {
      if (!user || typeof user !== "object" || !user.name) {
        throw new Error("Invalid user object");
      }
      return {
        hasVisited: this.visitedUsers.has(user.name),
        lastVisit: this.lastVisit.get(user.name) || "No visit recorded",
      };
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  markActive(user) {
    try {
      if (!user || typeof user !== "object" || !user.name) {
        throw new Error("Invalid user object");
      }
      this.activeUsers.add(user);
      setTimeout(() => {
        if (this.activeUsers.has(user)) {
          console.log(`${user.name} is now inactive.`);
        }
      }, 5000);
    } catch (error) {
      return `Error: ${error.message}`;
    }
  }

  getState() {
    return {
      visitedUsers: [...this.visitedUsers], // Convert Set to array
      lastVisit: Object.fromEntries(this.lastVisit), // Convert Map to object
      activeUsers: "WeakSet cannot be displayed directly", // WeakSet is not iterable
    };
  }
}

// === DEMO TESTING ===

// Create a tracker instance
const tracker = new UserTracker();

// Sample users
const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

// Add users
console.log("Adding Users:");
tracker.addUser(user1);
tracker.addUser(user2);
console.log("Users added.\n");

// Update last visit
console.log("Updating Last Visit:");
tracker.updateLastVisit(user1);
tracker.updateLastVisit(user2);
console.log("Last visits updated.\n");

// Retrieve and display visit details
console.log("User Visit Details:");
console.log(user1.name, tracker.getVisitDetails(user1));
console.log(user2.name, tracker.getVisitDetails(user2));

// Visualizing last visit timestamps
console.log("\nStored Last Visit Data:");
console.table({
  [user1.name]: tracker.getVisitDetails(user1),
  [user2.name]: tracker.getVisitDetails(user2),
});

// Mark users as active
console.log("\nMarking Users as Active:");
tracker.markActive(user1);
tracker.markActive(user2);
console.log("Users marked active.\n");

// Wait 6 seconds to see the inactive log messages
setTimeout(() => {
  console.log("Checking active users after timeout...");
  // === LOG FULL STATE ===
console.log("\n=== FULL CLASS STATE ===");
console.dir(tracker, { depth: null });  // Deep inspect the object
console.log("\nState via method:", tracker.getState()); // Log readable state
}, 6000);

