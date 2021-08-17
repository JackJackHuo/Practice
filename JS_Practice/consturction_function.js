// 把多個物件打包
// function結構函數1

function CardName(addName , addPhone) {
    this.name = addName
    this.phone = addPhone
    this.hello = function(){
      console.log('Hello',this.name)
    }
}

let a1 = new CardName("Jack" ,"0985") 
let a2 = new CardName("Kevin","0977") 
let a3 = new CardName("Jennifer","0911") 

console.log(a1);   
// CardName { name: 'Jack', phone: '0985', hello: [Function] }
// 函式包含在物件內 
console.log(a2);  
// CardName { name: 'Kevin', phone: '0977', hello: [Function] }
// 函式包含在物件內 
console.log(a3);  
// CardName { name: 'Jennifer', phone: '0911', hello: [Function] }
// 函式包含在物件內 

a1.hello()

let c1 = {
    name: "Kobe",
    phone:"0900"
}
c1.hellooo = a1.hello
// 誰調用了包含「this」的function，誰就是this
c1.hellooo() 
// ==========================================
// function結構函數2
function CardName1(addName , addPhone) {
    this.name = addName
    this.phone = addPhone
}

CardName1.prototype.hello = function(){
      console.log('Hello',this.name)
}

let g1 = new CardName1("Jack" ,"0985") 
let g2 = new CardName1("Kevin","0977") 
let g3 = new CardName1("Jennifer","0911") 

console.log(g1);   
// CardName1 { name: 'Jack', phone: '0985' }
// 用prototype建立函式，函式不會包含在物件內，只會建立在prototype裡面
console.log(g2);  
// CardName1 { name: 'Kevin', phone: '0977' }
// 用prototype建立函式，函式不會包含在物件內，只會建立在prototype裡面
console.log(g3);  
// CardName1 { name: 'Jennifer', phone: '0911'}
// 用prototype建立函式，函式不會包含在物件內，只會建立在prototype裡面

g1.hello()

let c5 = {
    name: "Kobe",
    phone:"0900"
}
c5.hellooo = g1.hello
// 誰調用了包含「this」的function，誰就是this
c5.hellooo() 
// ==========================================
//class結構函式
class Card{
    constructor(addName , addPhone){
        this.name = addName
        this.phone = addPhone  
        
    }
 
    hello(){
        console.log("Hello", this.name);
   
    }
}
let b1 = new Card("Jack" ,"0985")
let b2 = new Card("Kevin","0977")
let b3 = new Card("Jennifer","0911")


console.log(b1);  
//Card { name: 'Jack', phone: '0985' }
// 函式沒有包含在物件內 
console.log(b2); 
//Card { name: 'Kevin', phone: '0977' }
// 函式沒有包含在物件內 
console.log(b3); 
//Card { name: 'Jennifer', phone: '0911' }
// 函式沒有包含在物件內 
b1.hello()


let c2 = {
    name: "Kobe",
    phone:"0900"
}
c2.hell000 = b1.hello
// 誰調用了包含「this」的function，誰就是this
c2.hell000() 

// ===============================================
//綁定this在原本class，不讓其他物件調用
//方法一
class Card1{
    constructor(addName , addPhone){
        this.name = addName
        this.phone = addPhone 
        this.hellooo = this.hello.bind(this) 
        
    }
    hello(){
        console.log("Hello", this.name);
   
    }
}
let d1 = new Card1("Jack" ,"0985")
let d2 = new Card1("Kevin","0977")
let d3 = new Card1("Jennifer","0911")


console.log(d1);  
// Card1 { name: 'Jack', phone: '0985', hellooo: [Function: bound hello] }
// hello函式被綁定在constructor裡的hellooo函式中，包含在物件內 
console.log(d2); 
// Card1 { name: 'Kevin', phone: '0977', hellooo: [Function: bound hello] }
// hello函式被綁定在constructor裡的hellooo函式中，包含在物件內 
console.log(d3); 
// Card1 { name: 'Jennifer', phone: '0911', hellooo: [Function: bound hello] }
// hello函式被綁定在constructor裡的hellooo函式中，包含在物件內 
d1.hello()


let c3 = {
    name: "Kobe",
    phone:"0900"
}
c3.hell000 = d1.hellooo
//此時this已被綁定在class，無法被調用
c3.hell000() 

// ===============================================
//綁定this在原本class
//方法二
class Card3{
    constructor(addName , addPhone){
        this.name = addName
        this.phone = addPhone  
        
    }
    //方法二
    hello = () => {
        console.log("Hello", this.name);
   
    }
}
let f1 = new Card3("Jack" ,"0985")
let f2 = new Card3("Kevin","0977")
let f3 = new Card3("Jennifer","0911")


console.log(f1);  
// Card3 { hello: [Function: hello], name: 'Jack', phone: '0985' }
// 利用箭頭函式將hello函式直接被綁定在物件內 
console.log(f2); 
// Card3 { hello: [Function: hello], name: 'Kevin', phone: '0977' }
// 利用箭頭函式將hello函式直接被綁定在物件內 
console.log(f3); 
// Card3 { hello: [Function: hello], name: 'Jennifer', phone: '0911' }
// 利用箭頭函式將hello函式直接被綁定在物件內 
f1.hello()


let c4 = {
    name: "Kobe",
    phone:"0900"
}
c4.hell000 = f1.hello
//此時this已被綁定在class，無法被調用
c4.hell000() 

