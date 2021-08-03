// 物件取值

// const post = {
//     name : "jack",
//     address : "123street",
// }
// const post1 = {
//     name : "kevin",
//     address : "123street"
// }

// console.log(post.name)//物件第一種取值方式
// console.log(post1['address']); //物件第二種取值方式


// let x = [post,post1]
// console.log(x)
// ============================================================
//陣列資料修改

// let card1 = {
//     name:"Jack",
//     gender:"male"
// }
// let card2 = {
//     name:"Kevin",
//     gender:"male"
// }
// let card3 = {
//     name:"Jennifer",
//     gender:"female"
// }
// let book = [card1,card2,card3]

// console.log(book[0]);
// console.log(book[1]);
// console.log(book[2]);

// let added = book.unshift("hello") //Array增加第一筆資料，其餘往後推
// console.log(added);//回傳陣列長度

// let poped = book.pop()//Array刪除最後一筆資料
// console.log(poped); //回傳刪除的資料

// let deleted = book.splice(2,1)
// console.log(book);
// console.log(deleted);

// spliceAdded = book.splice(1 , 0 , 'Justin' , 'Kobe') //0代表從刪除改增加，從index = 1 增加0後面的元素
// console.log(book);
// ============================================================
//陣列forEach函式

// const myArray = [100 , 200 , 300]
// myArray.forEach(function (item , index , array) {
//     console.log(`${index} = ${item + 10}`)
//     array[index] = item * 10
//     console.log(myArray);
// })





