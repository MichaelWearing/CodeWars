const UpperCaseAlpha = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
const lowerCaseAlpha = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];


function rot13(message) {
  let newMessage = "";
  let splitWord = message.split("");

  splitWord.map((letter) => {
    if (isLetter(letter)) {
      let index = upperOrLower(letter) + 1;

      let rot13Index = index + 13;

      if (rot13Index > 26) {
        rot13Index -= 26;
      }
      console.log("It's a letter", rot13Index)
      console.log(wordGrabber(letter, rot13Index))
      newMessage = newMessage + wordGrabber(letter, rot13Index);

    } else if (letter === " ") {
        console.log("Space" , letter)
        newMessage = newMessage + " ";
    } else {
        console.log("Not a letter", letter)
      newMessage = newMessage + letter;
    }
  });

  return newMessage;
}

const upperOrLower = (letter) => {
  if (letter == letter.toUpperCase()) {
    return UpperCaseAlpha.indexOf(letter);
  } else {
    return lowerCaseAlpha.indexOf(letter);
  }
};

const wordGrabber = (letter, rot13Index) => {
  if (letter == letter.toUpperCase()) {
    return UpperCaseAlpha[rot13Index - 1];
  } else {
    return lowerCaseAlpha[rot13Index - 1];
  }
};

const isLetter = (letter) => {
  return letter.length === 1 && letter.match(/[a-z]/i);
};

/* console.log(rot13("Ruby is cool!"));
//Ehol vf pbby! */

/* console.log(rot13("10+2 is twelve."));
//10+2 vf gjryir. */

console.log(rot13("abcdefghijklmnopqrstuvwxyz "))
