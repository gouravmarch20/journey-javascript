function debounce(func, delay) {
    let timer;
    
    return function() {
      clearTimeout(timer);
      timer = setTimeout(func, delay)
    }
  }
  
  
  const logger = () => console.log("logging...")
  const delay = 3000;
  
  
  const debounced = debounce(logger, delay);
  
  console.log("running...")
  debounced();
  debounced();
  setTimeout(debounced, 1000);
  setTimeout(debounced, 1500);
  
  setTimeout(debounced, 5000)