useEffect(() => {
  function handleKeyDown(event) {
      console.log("Key pressed:", event.key);
  }

  window.addEventListener("keydown", handleKeyDown);

  return () => {
      window.removeEventListener("keydown", handleKeyDown);
  };
}, []);
