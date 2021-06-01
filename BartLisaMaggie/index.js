function list(names) {
  //your code here
  let formatedString = "";

  for (let i = 0; i < names.length; i++) {
    if (names.length <= 1) {
        console.log("0 or 1 name")
        formatedString = names[i].name
    } else if (i === names.length - 2) {
        console.log("last 2")
        formatedString = formatedString + names[i].name + " & " + names[i + 1].name
        i++
    } else {
        console.log("Basic add name + ,")
        formatedString = formatedString + names[i].name + ", "
    }
  }

  return formatedString;
}

const result = list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }]);

console.log(result);
