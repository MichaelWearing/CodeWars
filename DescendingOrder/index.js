function descendingOrder(n) {
  let nToString = String(n).split("").sort().reverse();
  let toReturn = 0;

  if (nToString.length <= 1) {
    console.log("first number");
    toReturn = n.toString()[0];
  } else {
    console.log(nToString);
    for (let i = 0; i < nToString.length; i++) {
      console.log(nToString[i]);
      if (toReturn === 0) {
        toReturn = nToString[i];
      } else {
        toReturn = toReturn + nToString[i];
      }
    }
  }

  return parseInt(toReturn);
}

const result = descendingOrder(42145);

console.log(result)
