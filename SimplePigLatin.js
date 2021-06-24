const pigIt = (str) => {

  let pigString = "";
  str.split(" ").map((word) => {

    if (word.match(/^[.,:!?]/)) {
      pigString = pigString + word + " ";

    } else {
        
      let firstLetter = word.charAt(0);
      let pigWord = word.replace(firstLetter, "");

      pigWord = pigWord + firstLetter + "ay";
      pigString = pigString + pigWord + " ";
    }
  });

  return pigString.trim();
};

console.log(pigIt("Pig latin is cool !")); // igPay atinlay siay oolcay
