//誰調用了包含「this」的function，誰就是this

// function hello() {
//     console.log("name",this.name);
    
// }
// const b = {name:"jack"}
// const c = {name:"kevin"}

// b.hellooo = hello
// c.hellooo = hello

// b.hellooo()
// c.hellooo()

// ==============================================
// 用箭頭函式綁定this

// class Car{
//     constructor(carName){
//         this.name = carName
//     }
//     start =()=>{
//         console.log("啟動",this.name);
//     }
// }


// const myCar = new Car("保時捷")
// myCar.start()

// const myBus = {name:"公車"}
// myBus.initiate = myCar.start
// myBus.initiate()

// ===================================================
//call

// function hello(years, address) {
//     console.log(this.name)
//     console.log(years, "歲")
//     console.log("住址：", address)
//   }
//   const a = { name: "bruce" }
//   const b = { name: "mike" }
//   // bruce
//   // 100歲
//   hello.call(a, 100, "高雄市ＸＸＸ")
//   // mike
//   // 100歲
//   hello.call(b, 100, "台北市ＸＸＸ")
// ===================================================
//apply

// function hello(years, address) {
//     console.log(this.name)
//     console.log(years, "歲")
//     console.log("住址：", address)
//   }
//   const a = { name: "bruce" }
//   const b = { name: "mike" }
//   // bruce
//   // 100歲
//   // 只是把參數改成用array收集
//   hello.apply(a, [100, "高雄市ＸＸＸ"])
//   // mike
//   // 100歲
//   hello.apply(b, [100, "台北市ＸＸＸ"])
// ===================================================
//bind

// function hello(years, address) {
//     console.log(this.name)
//     console.log(years, "歲")
//     console.log("住址：", address)
//   }
//   const a = { name: "bruce" }
//   const b = { name: "mike" }
//   // 返回了新函數～～～
//   const newHelloA = hello.bind(a, 100, "高雄市ＸＸＸ")
//   const newHelloB = hello.bind(b, 100, "台北市ＸＸＸ")
//   // bruce
//   // 100歲
//   newHelloA()
//   // mike
//   // 100歲
//   newHelloB()