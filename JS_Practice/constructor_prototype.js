// let player1 ={
//     name: 'Kobe Bryant',
//     age: 23,
//     height: "6'9"
// }
// let player2 ={
//     name: 'Michael Jordan',
//     age: 29,
//     height: "6'7"
// }
// let player3 ={
//     name: 'Lebron James',
//     age: 18,
//     height: "6'6"
// }
// ==========constructor function========================================
function Player(name , age , height){
    this.name = name,
    this.age = age,
    this.height = height   
}
// Player.prototype = {
//     constructor: Player,
//     shoot(){
//             console.log(`${this.name} 投籃`)
//         },
//     dunk(){
//             console.log(`${this.name} 灌籃`)
//         }
// }
Player.prototype.shoot = function(){
    console.log(`${this.name} 投籃`)
}
Player.prototype.dunk = function(){
    console.log(`${this.name} 灌籃`)
}

let player1 = new Player('Kobe Bryant' , 23 , "6'9")
let player2 = new Player('Michael Jordan' , 29 , "6'7")
let player3 = new Player('Lebron James' , 18 , "6'6")

console.log(player1) 
//Player {name: "Kobe Bryant", age: 23, height: "6'9"}
console.log(player2) 
//Player {name: "Michael Jordan", age: 29, height: "6'7"}
console.log(player3) 
//Player {name: "Lebron James", age: 18, height: "6'6"}

player1.shoot() //Kobe Bryant 投籃
player2.dunk() //Michael Jordan 灌籃


console.log(Player.prototype)
console.log(player1.__proto__)

// ==========class========================================

// class Player{
//     constructor(name , age , height){
//         this.name = name,
//         this.age = age,
//         this.height = height   
//     }
//     shoot(){
//         console.log(`${this.name} 投籃`)
//     }
//     dunk(){
//         console.log(`${this.name} 灌籃`)
//     }
// }

// let player1 = new Player('Kobe Bryant' , 23 , "6'9")
// let player2 = new Player('Michael Jordan' , 29 , "6'7")
// let player3 = new Player('Lebron James' , 18 , "6'6")

// console.log(player1) 
// //Player {name: "Kobe Bryant", age: 23, height: "6'9"}
// console.log(player2) 
// //Player {name: "Michael Jordan", age: 29, height: "6'7"}
// console.log(player3) 
// //Player {name: "Lebron James", age: 18, height: "6'6"}

// player1.shoot() //Kobe Bryant 投籃
// player2.dunk() //Michael Jordan 灌籃







