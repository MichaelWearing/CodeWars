/*
Given a list of words and an anagram, you must return all of the words that can be made up of that given anagram
*/

const wordMatch = (word, wordList) => {
    let wordsToReturn = [];
    const splitWord = word.split("");
  
    for (let i = 0; i < wordList.length; i++) {
      const splitWordList = wordList[i].split("");
  
      const currentWordlLength = wordList[i].length;
      console.log("Current Word Length ....", currentWordlLength);
      let counter = 0;
  
      // here we loop through every letter in the split word
      for (let j = 0; j < splitWordList.length; j++) {
        // We should compare every char in word to every char in split word
        // add to counter if match
        console.log(splitWordList[j]);
        if (splitWord.includes(splitWordList[j])) {
          counter++;
          console.log("Counter is now = ", counter);
        }
      }
  
      if (counter === currentWordlLength) {
        console.log("WE HAVE A WORD MATCH");
        wordsToReturn.push(wordList[i]);
      }
      console.log("");
    }
  
    if (wordsToReturn.length > 0) {
      console.log("Return me");
      return wordsToReturn;
    } else {
      return "No matches for that word";
    }
  };
  
  //console.log(wordMatch("eppla", ["apple", "orange", "dog", "cat"]));
  console.log(
    wordMatch("torps", ["apple", "orange", "dog", "cat", "sport", "ports"])
  );
  
  
  