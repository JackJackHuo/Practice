//宣告多個物件
// 分別宣告過於冗長
// let card1 = {
//     name:"Jack",
//     phone:"0985"
// }
// let card2 = {
//     name:"Kevin",
//     phone:"0977"
// }
// let card3 = {
//     name:"Jennifer",
//     phone:"0911"
// }
// ===========================================

// 結構函數
// 把多個物件打包
// function CardName(addName , addPhone) {
//     this.name = addName
//     this.phone = addPhone
//     this.hello = function(){ //此函示會包含在物件內

//        console.log('Hello',this.name)

//     }
// }

// let a1 = new CardName("Jack" ,"0985")
// let a2 = new CardName("Kevin","0977")
// let a3 = new CardName("Jennifer","0911")
// console.log(a1);
// console.log(a2);
// console.log(a3);
// a1.hello()
// a2.hello()
// a3.hello()
// ===========================================


//class宣告的結構函數
//與結構函數功能一樣
class Card{
    constructor(addName , addPhone){
        this.name = addName
        this.phone = addPhone  
        
        //綁定this方法一
        //在constructor內新增bind語法如下行
        //this.hellooo = this.hello.bind(this) 
    }
    //此hello函式並不是宣告在constructor打包的物件內 
    //只是宣告在protype上面 
    //a1物件裡看不到 
    //因此當有100個物件調用Card類別時 
    //都只是產生100個包含construction裡面的物件 
    //hello函式不在這100個物件當中 
    //不影響運算負擔 
    //可是this就無法綁定在hello函式上 
    hello(){ //此函示不會包含在物件內
        console.log("hello", this.name);
    
    //綁定this方法二
    //利用箭頭語法綁定this
    //方法一跟二雖然能綁定this
    //但缺點是每當物件在調用Card時
    //連hello函式一起調用
    //增加運算負擔   
    // hello = () => {
    //     console.log("hello", this.name);
    }
}
let a1 = new Card("Jack" ,"0985")
let a2 = new Card("Kevin","0977")
let a3 = new Card("Jennifer","0911")

console.log(a1);
console.log(a2);
console.log(a3);

a1.hello()

//新增另一個新的物件c1
//當此物件去調用Card裡面的hello函式時
//此時裡面的this.name會被替換成新物件的name "Kobe"
let c1 = {
    name: "Kobe",
    phone:"0900"
}
c1.hell000 = a1.hello
c1.hell000() 
//此時hello()裡面的this.name已經替換成當下c1的name


// function hello(params) {}
//可以在任何地方callback函式

// let hello = function(){}
//將函式宣告在某個變數的缺點是，只能在宣告的下面callback
//不然仍是找不到變數

// let hello = () => {} 利用箭頭語法綁定this到原物件