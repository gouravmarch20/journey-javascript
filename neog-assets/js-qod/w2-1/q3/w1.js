const noSpacesForLoop = (str) => {
    let unspacedStr = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") {
        unspacedStr += str[i];
      }
    }
    return unspacedStr;
  };
  
  console.log(noSpacesForLoop("       We are     neoGrammers   "));