const moveZeros = (arr) => {
    arr.map(i => {
        if (i === 0) {
            let index = arr.indexOf(i)
            arr.splice(index, 1)
            arr.push(0)
        }
    })  
    return arr  
}

  console.log(moveZeros([false,1,0,1,2,0,1,3,"a"]))
   // returns[false,1,1,2,1,3,"a",0,0]