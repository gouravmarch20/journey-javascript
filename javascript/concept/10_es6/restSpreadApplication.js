function organizeScores(scores) {
    if (!scores.length) return { highestScore: -Infinity, remainingScores: undefined }; // Fix for empty array

    const highestScore = Math.max(...scores); // Find the highest score
    const remainingScores = [...scores]; // Create a copy to maintain order

    // Remove only the first occurrence of highestScore
    const index = remainingScores.indexOf(highestScore);
    if (index !== -1) remainingScores.splice(index, 1);

    return {
        highestScore,
        remainingScores
    };
}

const val = organizeScores([78 , 97 , 80 , 44])
console.log(val)
