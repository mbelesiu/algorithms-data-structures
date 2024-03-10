"use strict";

// you can write to stdout for debugging purposes, e.g.
console.log("This is a debug message");

const frameSum = (arr) => {
    const row = arr.length
    const col = arr[0].length

    let sum = 0

    // adding the rows

    for (let i = 0; i < row; i++) {
        sum += arr[i][0] //1
       if(row !== 1) sum += arr[i][col - 1] // 5
    }

    // add. the col
    for (let i = 1; i < col - 1; i++) {
        sum += arr[0][i] // 3, 2
        if(col !== 1) sum += arr[row - 1][i] //  3, 2
    }

    return sum

}

const theArray =
    [[1, 3, 2, 5],
    [5, 8, 3, 4],
    [3, 2, 1, 0],
    [9, 4, 2, 9],
    [2, 4, 6, 8]
    ]

const theArray2 = [[1, 3, 2, 5]]
const theArray3 = [[]]

console.log(frameSum(theArray3))