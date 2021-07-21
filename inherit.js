//父層class Car
class Car{
    constructor(intName){
        this.name = intName
    }

    start(){
        console.log("車子啟動");
    }
}

// const a1 = new Car("fARARI")
// console.log(a1.name);

// class Porche{

//     start(){
//         console.log("車子啟動");
//     }
// }
// const p1 = new Car()
// const p2 = new Porche()

// p1.start()  
// p2.start()

// ================================
//Porche 繼承 Car

class Porche extends Car{ //繼承父層

    constructor(carName){
        super(carName) //調用父層的construtor結構函數
    }

    start(){ //Porche自己本身的start
        super.start() //調用父層的start
        console.log("車輛排氣");
    }
}

const p1 = new Porche("MUSCLE")
console.log(p1.name);
p1.start()