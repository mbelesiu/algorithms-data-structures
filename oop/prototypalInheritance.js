// Prototypal Inheritance of Built-in Objects

const arr = [1,2,4,4,5,5]

console.log(arr)

Array.prototype.unique = function(){
    return [...new Set(this)]
}

console.log(arr.unique());