//物件內的key預設都式字串型態
//key除了用字串外還可以用Symbol
// 每一個Symbol都是獨一無二 s1 !== s2 
let s1 = Symbol()
let s2 = Symbol()
let s3 = Symbol()

let string = 'Kobe'

let object = {
  name : 'jack',
  age : 26,
  [s1] : function(name){
    console.log('hello',name)
  }, 
  [string + 'Bryant'] : 'GOAT'
  
}

//使用物件內函式用symbol當key
object[s1]('jack') //'hello jack'

// 在物件外面新增property
//不可以用object.s2，因為s2是變數，否則s2會被當成物內裡字串型態的key
object[s2] = 'new symbol'
console.log(object[s2]) //'new symbol'

// 在物件外面用Object prototype函式新增property
Object.defineProperty(object , s3 , {value:'defineProperty'})
console.log(object[s3])

//物件的key只要加上[]就可以計算
console.log(object.KobeBryant) //'GOAT'

// ================================================
// 每一個Symbol都是獨一無二 s1 !== s2 
//除非用Symbol.for(key)幫Symbol取一個名字(key)
let b1 = Symbol('boo')
let b2 = Symbol('boo')
let b3 = Symbol.for('boo')
let b4 = Symbol.for('boo')

//b1跟b2的'boo'並不代表真正的名字，只是方便console.log時辨別
console.log(b1 === b2) //false

//b3跟b4的名字一樣，確實為同一個Symbol
console.log(b3 === b4) //true

//查找Symbol名稱(key)
console.log(Symbol.keyFor(b1)) //沒有名字
console.log(Symbol.keyFor(b2)) //沒有名字
console.log(Symbol.keyFor(b3)) //'boo'
console.log(Symbol.keyFor(b4)) //'boo'


// 建立一個 global Symbol
Symbol.for('foo');

// 不會再重複建立，會直接返回已經建立的 Symbol
Symbol.for('foo');

// true
Symbol.for('bar') === Symbol.for('bar');

// false
Symbol('bar') === Symbol('bar');

// key 名稱也會被當成 Symbol 名稱
var sym = Symbol.for('mario');
// "Symbol(mario)"
sym.toString();

// ================================================
// Symbol無法被迭代，需使用Object.getOwnPropertySymbols()
var obj = {};

obj[Symbol('a')] = 'a';
obj[Symbol.for('b')] = 'b';
obj['c'] = 'c';
obj.d = 'd';

for (var i in obj) {
    console.log(i);
}

// 依序輸出
// "c"
// "d"

var objectSymbols = Object.getOwnPropertySymbols(obj);


console.log(objectSymbols) // [Symbol(a), Symbol(b)]
console.log(objectSymbols[0]) // [Symbol(a)
console.log(obj[objectSymbols[0]]) //'a'
