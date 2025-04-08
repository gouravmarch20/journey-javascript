class ApiStream {
    #subscribers = [];
  
    subscribe(cb) {
      if (typeof cb === "function") {
        this.#subscribers.push(cb);
      }
    }
  
    push(value) {
      this.#subscribers.forEach((callback) => callback(value));
    }
  }
  
  // Example usage
  const api = new ApiStream();
  api.subscribe((na) => console.log("the s1", na));
  api.subscribe((na) => console.log("the s2", na * 2));
  api.push(5);
  
  const api1 = new ApiStream();
  api1.subscribe((na) => console.log("the s_1_1", na));
  api1.subscribe((na) => console.log("the s_2_1", na * 2));
  api1.push(10);
  