function sortArray(array) {

    // Sort with arguments odd and even
  
    let odd = []
    let even = []
    let evenIndex = []

    array.map(number => {
        if (number % 2 === 0) {
            even.push(number)
            evenIndex.push(array.indexOf(number))
        } else {
            odd.push(number)
        }
    })

    console.log("odd", odd)
    odd.sort()
    console.log("odd sorted", odd)
    console.log("even", even)
    console.log("evenIndex", evenIndex)

    for (let i = 0; i < even.length; i++) {
        odd.splice(evenIndex[i], 0, even[i])
    }

    

    console.log("odd final", odd)
    console.log("even final", even)

  return odd
}

console.log("Answer = " + sortArray([1, 11, 2, 8, 3, 4, 5]));
//console.log("Answer = " + sortArray([5, 3, 2, 8, 1, 4]));
