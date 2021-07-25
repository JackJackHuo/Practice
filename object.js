let myPhone = {
    name: 'iPhone 13',
    price: 999,
    feature:['long battery life' , 'face ID recognition'],
    hardware:{
        ram: '8GB',
        memory:'256GB'
    }
}
//以下兩種效果一樣
//都表示myPhone 的 name
console.log(myPhone.name); //第一種
console.log(myPhone['name']);//第二種

//新增物件內項目
myPhone.owner = 'Jack' 
myPhone['owner2'] = 'Kevin'
console.log(myPhone.owner , myPhone['owner2']);

//使用第二種的時機
//利用for迴圈取出所有的key, 這裡的key變數可以取任何名稱
for(let key in myPhone){
    console.log(myPhone[key]); 
    //此時不能用console.log(myPhone.key); 因為myPhone.key會被當作未被定義的物件內容
    //此時也不能用console.log(myPhone['key']);因為key此時是變數，代表物件內所有的內容
}
//直接顯示所有的key
for(let key in myPhone){
    console.log(key); 
    
}

//以陣列方式取出物件內容
console.log(Object.keys(myPhone)); //一維陣列，顯示所有的key
console.log(Object.values(myPhone));//一維陣列，顯示所有的value
console.log(Object.entries(myPhone));//二維陣列，顯示物件所有內容 key + value

//因為是陣列，所以可以用陣列方式取出

//取出index = 0 的 ke
const keys = Object.keys(myPhone)
console.log(keys[0]);
//取出二維陣列
const entries = Object.entries(myPhone)
console.log(entries[0][1]);
//取出key當中是陣列的值
console.log(myPhone.feature[0]);
console.log(myPhone['feature'][1]);
