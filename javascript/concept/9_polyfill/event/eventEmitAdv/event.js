class Events {
    constructor() {
      this._subscriptions = {}; // Stores all event subscriptions.
    }
  
    // Subscribe to an event
    subscribe(name, callback) {
      if (typeof callback !== "function") {
        throw new TypeError("Callback should be a function");
      }
  
      if (!this._subscriptions[name]) {
        this._subscriptions[name] = [];
      }
  
      const subscription = { callback };
      this._subscriptions[name].push(subscription);
  
      return {
        remove: () => {
          const eventSubscriptions = this._subscriptions[name];
          if (eventSubscriptions) {
            this._subscriptions[name] = eventSubscriptions.filter(
              (sub) => sub.callback !== callback
            );
          }
        },
      };
    }
  
    // Subscribe once (runs only once)
    subscribeOnce(name, callback) {
      const removeOnce = this.subscribe(name, (payload) => {
        callback(payload);
        removeOnce.remove(); // Remove after execution
      });
    }
  
    // Subscribe once and return a Promise (async)
    async subscribeOnceAsync(name) {
      return new Promise((resolve) => {
        const removeOnce = this.subscribe(name, (payload) => {
          resolve(payload);
          removeOnce.remove(); // Remove after execution
        });
      });
    }
  
    // Publish an event (Triggers all callbacks for an event name)
    publish(name, data) {
      const eventSubscriptions = this._subscriptions[name];
      if (!eventSubscriptions) return;
      eventSubscriptions.forEach((sub) => sub.callback(data));
    }
  
    // Publish all events (Triggers all stored subscriptions)
    publishAll(data) {
      Object.values(this._subscriptions).forEach((eventSubscriptions) => {
        eventSubscriptions.forEach((sub) => sub.callback(data));
      });
    }
  }
  
  // ---------------------- Test Cases ----------------------
  
  const eventSystem = new Events();
  
  // Test: Normal Subscription
  const sub1 = eventSystem.subscribe("testEvent", (data) => {
    console.log("Listener 1 received:", data);
  });
  const sub2 = eventSystem.subscribe("testEvent", (data) => {
    console.log("Listener 2 received:", data);
  });
  
  // Publishing "testEvent" - both listeners should receive data
  console.log("\nPublishing 'testEvent' with 'Hello, World!'");
  eventSystem.publish("testEvent", "Hello, World!");
  
  // Remove first listener and publish again
  sub1.remove();
  console.log("\nPublishing 'testEvent' again after removing Listener 1:");
  eventSystem.publish("testEvent", "Event after removal");
  
  // Test: subscribeOnce
  console.log("\nSubscribing Once and Publishing...");
  eventSystem.subscribeOnce("onceEvent", (data) => {
    console.log("subscribeOnce received:", data);
  });
  
  eventSystem.publish("onceEvent", "Fires once!"); // Should fire
  eventSystem.publish("onceEvent", "Should NOT fire again!"); // Should not fire
  
  // Test: subscribeOnceAsync
  console.log("\nSubscribing Once Async...");
  (async () => {
    const result = await eventSystem.subscribeOnceAsync("asyncEvent");
    console.log("subscribeOnceAsync received:", result);
  })();
  
  eventSystem.publish("asyncEvent", "Async fires!");
  
  // Test: publishAll
  console.log("\nTesting publishAll...");
  eventSystem.subscribe("globalEvent", (data) => {
    console.log("Global listener received:", data);
  });
  eventSystem.publishAll("Broadcast to all events!");
  