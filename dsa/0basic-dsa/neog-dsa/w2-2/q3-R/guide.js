const reverseWordWise = sentence => {
	const wordsArray = sentence.split(" ")
	let result = ""
	for(let i = wordsArray.length - 1 ;i >= 0 ;i--){
		result += wordsArray[i]
		// **  space case
		if( i > 0){
			result += " "
		}
	}
	return result
}

console.log(reverseWordWise("Welcome to neoG Camp"))