export class UserTracker {
    constructor() {
        this.visitedUsers = new Set(); // Stores unique users
        this.lastVisit = new Map(); // Stores timestamps of last visits
        this.activeUsers = new WeakSet(); // Tracks active users
    }

    addUser(user) {
        try {
            if (!user || typeof user !== "object" || !user.name) {
                throw new Error("Invalid user object");
            }

            if (!this.visitedUsers.has(user)) {
                this.visitedUsers.add(user);
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

            this.lastVisit.set(user, new Date().toISOString());
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
                hasVisited: this.visitedUsers.has(user),
                lastVisit: this.lastVisit.get(user) || "No visit recorded",
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
}
