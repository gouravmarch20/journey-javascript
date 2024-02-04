function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
   
    return newString; // "olleh"
}
 
reverseString('hello');