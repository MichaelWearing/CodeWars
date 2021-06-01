function createPhoneNumber(numbers) {
  let phoneNumber = "";

  let counter = 0;
  numbers.map((number) => {
    if (counter === 0) {
      phoneNumber = phoneNumber + "(" + number;
    } else if (counter === 3) {
      phoneNumber = phoneNumber + ") " + number;
    } else if (counter === 6) {
      phoneNumber = phoneNumber + "-" + number;
    } else {
      phoneNumber = phoneNumber + number;
    }

    counter++;
  });
  return phoneNumber;
}

const result = createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]); // => returns "(123) 456-7890"

console.log(result);
