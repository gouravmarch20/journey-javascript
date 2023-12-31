const getSecretCode = (string, place) => {
  for (const char of string) {
    // console.log(char[0], ' --- or --- ', char)
    const asciiValue = char.charCodeAt()
    console.log(asciiValue);
  }
}

getSecretCode('abcdz', 2)
