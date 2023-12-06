// ! redo
const getUpperCase = letter => {
	const asciiValue = letter.charCodeAt(0)
	//** preserving ascii if current letter is already in uppercase
	let finalAscii = asciiValue
	
	// if current letter is in smaller case
	if(asciiValue >= 97 && asciiValue <= 122){
		// difference between ascii of small and capital alphabet is 32
		// Eg: a -> 97 ; A -> 65 | 97 - 65 = 32
		finalAscii -= 32
	}

	return String.fromCharCode(finalAscii)
}

const getSentenceCase = sentence => {
	const wordsArray = sentence.trim().split(" ")
	wordsArray.forEach( (word, index) => {
		wordsArray[index] = getUpperCase(word[0]) + word.slice(1)
	})

	return wordsArray.join(" ")
}

console.log(getSentenceCase('We are neoGrammers'))