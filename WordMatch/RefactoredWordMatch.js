const wordMatch = (word, wordList) => {
    let wordsToReturn = [];
    const splitWord = word.split("");
  
    for (let i = 0; i < wordList.length; i++) {
      const splitWordList = wordList[i].split("");
  
      const currentWordlLength = wordList[i].length;
      let counter = 0;
  
      splitWordList.map((currentWord) => {
        if (splitWord.includes(currentWord)) {
          counter++;
        }
      });
  
      if (counter === currentWordlLength) {
        wordsToReturn.push(wordList[i]);
      }
    }
  
    return wordsToReturn.length > 0 ? wordsToReturn : "No matches for that word";
  };
  
  console.log(
    wordMatch("torps", ["apple", "orange", "dog", "cat", "sport", "ports"])
  );
  