class EventEmitter {
    constructor() {
      this._eventSubscriptions = new Map();
    }
  
    // Subscribe to an event
    subscribe(eventName, callback) {
      if (typeof callback !== "function") {
        throw new TypeError("Callback should be a function");
      }
  
      if (!this._eventSubscriptions.has(eventName)) {
        this._eventSubscriptions.set(eventName, new Map());
      }
  
      const subscriptionId = Symbol();
      const subscriptions = this._eventSubscriptions.get(eventName);
      subscriptions.set(subscriptionId, callback);
  
      return {
        // * => function --> this of outer ... fail in 
        remove: () => {
          if (!subscriptions.has(subscriptionId)) {
            throw new Error("Subscription has already been removed");
          }
          subscriptions.delete(subscriptionId);
  
          // Remove event entry if no subscribers left
          if (subscriptions.size === 0) {
            this._eventSubscriptions.delete(eventName);
          }
        }
      };
    }
  
    // Emit an event
    emit(eventName, ...args) {
      const subscriptions = this._eventSubscriptions.get(eventName);
      if (!subscriptions) {
        console.warn(`No subscribers for event: ${eventName}`);
        return;
      }
  
      subscriptions.forEach(callback => callback(...args));
    }
  }
  
  // Example usage:
  const emitter = new EventEmitter();
  
  const subscription = emitter.subscribe("testEvent", (message) => {
    console.log("Received:", message);
  });
  
  emitter.emit("testEvent", "Hello, World!"); // Output: "Received: Hello, World!"
  emitter.emit("testEvent", "Hello, QuestionPro!"); // Output: "Received: Hello, World!"

  subscription.remove();
  emitter.emit("testEvent", "Should not be logged"); // No output, since it's unsubscribed
  