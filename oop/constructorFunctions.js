// Constructor Functions example

function User(name) {
    this.name = name

    console.log(this)
}

User.prototype.printName = function(){
    console.log(this.name)
}

let testName = new User("Matthew")
testName.printName()

console.log(User.__proto__)