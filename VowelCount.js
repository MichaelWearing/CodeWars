const getCount = (str) => {
  let vowelsCount = 0;

  //a, e, i, o, u
  str.split("").map((letter) => {
      if (letter === "a" ||
          letter === "e" ||
          letter === "i" ||
          letter === "o" ||
          letter === "u") {
          vowelsCount++
      }
  });

  return vowelsCount;
};

console.log(getCount("abracadabra")); //5
