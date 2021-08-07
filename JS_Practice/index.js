let money = 4
let word = 'wow'

let protoTypeNumber = Object.getPrototypeOf(money)
console.log(protoTypeNumber)

let protoTypeString= Object.getPrototypeOf(word)
console.log(protoTypeString)
console.log(word.__proto__)

function Card(name , age){
    this.name = name
    this.age = age
}

Card.prototype.hello = function(){
    console.log("hello",this.name)
}

let a1 = new Card('jack',28)
console.log(a1.__proto__)

