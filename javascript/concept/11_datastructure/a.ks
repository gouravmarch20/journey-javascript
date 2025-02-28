export class UserTracker {
    constructor() {
        this.visitedUsers = new Set();  // Track unique visitors
        this.lastVisit = new Map();     // Store last visit timestamps
        this.activeUsers = new WeakSet(); // Track active users
    }

    addUser(user) {
        if (!user || typeof user !== "object" || !user.name) {
            throw new Error("Invalid user object");
        }
        if (!this.visitedUsers.has(user.name)) {
            this.visitedUsers.add(user.name);
        }
    }

    updateLastVisit(user) {
        if (!user || typeof user !== "object" || !user.name) {
            throw new Error("Invalid user object");
        }
        if (!this.visitedUsers.has(user.name)) {
            throw new Error("User has not visited before");
        }
        this.lastVisit.set(user.name, new Date().toISOString());
    }

    getVisitDetails(user) {
        if (!user || typeof user !== "object" || !user.name) {
            throw new Error("Invalid user object");
        }
        return {
            hasVisited: this.visitedUsers.has(user.name),
            lastVisit: this.lastVisit.get(user.name) || "No visit recorded"
        };
    }

    markActive(user) {
        if (!user || typeof user !== "object" || !user.name) {
            throw new Error("Invalid user object");
        }
        this.activeUsers.add(user);
        setTimeout(() => {
            if (this.activeUsers.has(user)) {
                console.log(`${user.name} is now inactive.`);
            }
        }, 5000);
    }

    // === METHOD TO VIEW FULL STATE ===
    getState() {
        return {
            visitedUsers: [...this.visitedUsers], // Convert Set to array
            lastVisit: Object.fromEntries(this.lastVisit), // Convert Map to object
            activeUsers: "WeakSet cannot be displayed directly", // WeakSet is not iterable
        };
    }
}

// === DEMO TESTING ===

const tracker = new UserTracker();
const user1 = { name: "Alice" };
const user2 = { name: "Bob" };

tracker.addUser(user1);
tracker.addUser(user2);
tracker.updateLastVisit(user1);
tracker.updateLastVisit(user2);
tracker.markActive(user1);
tracker.markActive(user2);

// === LOG FULL STATE ===
console.log("\n=== FULL CLASS STATE ===");
console.dir(tracker, { depth: null });  // Deep inspect the object
console.log("\nState via method:", tracker.getState()); // Log readable state
