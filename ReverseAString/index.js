function spinWords(string) {
  let newString = "";

  const dividedString = string.split(" ");

    dividedString.map((word) => {
      if (word.length > 4) {
        let reversed = word.split("").reverse().join("");
        newString = newString + " " + reversed;
      } else {
        newString = newString + " " + word;
      }
    });

  return newString.trim();
}

console.log(spinWords("Welcome"))

