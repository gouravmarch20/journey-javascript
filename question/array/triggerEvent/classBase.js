class ObservableArray {
  constructor() {
    this.array = [];
    this.listeners = {
      push: [],
      pop: [],
    };
  }

  // Custom push method with event
  pushWithEvent(...elements) {
    const result = this.array.push(...elements);
    this.triggerEvent("push", elements);
    return result;
  }

  // Custom pop method with event
  popWithEvent() {
    const element = this.array.pop();
    this.triggerEvent("pop", element);
    return element;
  }

  // Add event listener
  addListener(eventName, callback) {
    if (!this.listeners[eventName]) {
      this.listeners[eventName] = [];
    }
    this.listeners[eventName].push(callback);
  }

  // Remove event listener
  removeListener(eventName, callback) {
    if (this.listeners[eventName]) {
      this.listeners[eventName] = this.listeners[eventName].filter(
        (listener) => listener !== callback
      );
    }
  }

  // Trigger all callbacks for an event
  triggerEvent(eventName, data) {
    if (this.listeners[eventName]) {
      this.listeners[eventName].forEach((callback) =>
        callback(data, this.array)
      );
    }
  }

  // Optional: Delegate other array methods (like forEach, map, etc.)
  forEach(...args) {
    return this.array.forEach(...args);
  }

  // ... (Add other array methods as needed)
}

// Test Case
const observableArr = new ObservableArray();

const onPush = (items, arr) => {
  console.log("Items added:", items);
};

const onPop = (item, arr) => {
  console.log("Item removed:", item);
};

observableArr.addListener("push", onPush);
observableArr.addListener("pop", onPop);

observableArr.pushWithEvent(1, 2, 3); // Triggers 'push' event
observableArr.pushWithEvent(3); // Triggers 'push' event

observableArr.popWithEvent(); // Triggers 'pop' event

console.log(observableArr.array); // [1, 2]
