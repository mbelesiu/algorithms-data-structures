// Given an array of integers and a value, 
// determine if there are any two integers in the array whose sum is equal to the given value.

const sumOfTwo = (arr, val) => {

    if(arr.length === 0){
        return false
    }

    for(let i = 0; i < arr.length; i++) {
        for ( let j = i + 1; j < arr.length; j++){
            if (arr[i] + arr[j] === val){
                return true
            }
        }
    }

    return false
}

a = []
b = [1,2,3,4]
c = [4,5,6,7,8]
d = [1]

target = 3

console.log(sumOfTwo(a,target)) // false
console.log(sumOfTwo(b,target)) // true
console.log(sumOfTwo(c,target)) // false
console.log(sumOfTwo(d,target)) // false 

