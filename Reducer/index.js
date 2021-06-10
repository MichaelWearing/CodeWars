const numbers = [1, 2, 3, 4, 5]

// ack in this case is somthing that holds the total value of each itteration of the addition.
// ack = ack (0) + 1
// ack = ack (1) + 2
// ack = ack (3) + 3
// ack = ack (6) + 4
// ack = ack (10) + 5
// ack = ack (15)

const reduced = numbers.reduce((ack, number) => ack + number)

console.log(reduced)