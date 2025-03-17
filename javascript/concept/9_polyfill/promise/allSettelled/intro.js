// Function to simulate an API request with success or failure
const mockApi = (name, shouldReject, delay) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (shouldReject) {
          reject(`❌ ${name} failed`);
        } else {
          resolve(`✅ ${name} success`);
        }
      }, delay);
    });
  };
  
  // Creating multiple promises
  const promises = [
    mockApi("API 1", false, 1000), // Success after 1s
    mockApi("API 2", true, 2000),  // Fails after 2s
    mockApi("API 3", false, 1500), // Success after 1.5s
    mockApi("API 4", true, 500),   // Fails quickly
  ];
  
  // Using Promise.allSettled()
  Promise.allSettled(promises).then((results) => {
    console.log("\n🔎 Promise.allSettled() Results:" , results);
    // results.forEach((result, index) => {
    //   if (result.status === "fulfilled") {
    //     console.log(`✅ Promise ${index + 1} resolved:`, result.value);
    //   } else {
    //     console.log(`❌ Promise ${index + 1} rejected:`, result.reason);
    //   }
    // });
  });
  