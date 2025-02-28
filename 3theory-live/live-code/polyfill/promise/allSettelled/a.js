async function fetchAllSettled() {
  const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/invalid-url', // This will fail
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

  const results = await Promise.allSettled(urls.map(url => fetch(url)));
  console.log("results" , results)

  // results.forEach((result, index) => {
  //   if (result.status === 'fulfilled') {
  //     console.log(`✅ Response ${index + 1}:`, result.value);
  //   } else {
  //     console.error(`❌ Error fetching API ${index + 1}:`, result.reason);
  //   }
  // });
}

fetchAllSettled();
