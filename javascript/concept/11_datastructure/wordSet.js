function manageUniqueWords(words = []) {
    const wordSet = new Set(words);

    return {
        addWord(word) {
            wordSet.add(word);
            return this.getAllWords();
        },
        removeWord(word) {
            wordSet.delete(word);
            return this.getAllWords();
        },
        hasWord(word) {
            return wordSet.has(word);
        },
        getAllWords() {
            return [...wordSet].sort();
        }
    };
}

function testManageUniqueWords() {
    const manager = manageUniqueWords(["apple", "banana", "cherry"]);

    console.log("Initial words:", manager.getAllWords());

    manager.addWord("date");
    console.log("After adding 'date':", manager.getAllWords());

    manager.addWord("apple"); // Duplicate
    console.log("After adding duplicate 'apple':", manager.getAllWords());

    manager.removeWord("banana");
    console.log("After removing 'banana':", manager.getAllWords());

    console.log("Has 'cherry'?", manager.hasWord("cherry"));
    console.log("Has 'banana'?", manager.hasWord("banana"));
}

testManageUniqueWords();