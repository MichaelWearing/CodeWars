const solution = number => {

  let sum = 0
  for (let i = 1; i < number; i++) {
    i % 3 == 0 || i % 5 == 0 ? sum += i : null
  }

  return sum
};

console.log(solution(10)); //23
