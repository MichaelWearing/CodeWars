// Hand in
function findOutlier(integers) {
  let odds = [];
  let evens = [];

  integers.forEach((number) => {
    if (number % 2 === 0) {
      odds.push(number);
    } else {
      evens.push(number);
    }
  });

  if (odds.length === 1) {
    return odds[0];
  } else {
    return evens[0];
  }
}

console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]));

// Refactor
function findOutlier(int) {
  let even = int.filter(i => i % 2 == 0);
  let odd = int.filter(i => i % 2 !== 0);

  return even.length === 1 ? even[0] : odd[0];
}
