var kvArray = [['key1', 'value1'], ['key2', 'value2']];

var myMap = new Map(kvArray);

// 顯示 value1
console.log( myMap.get('key1') );
console.log( myMap.get('value1') );

// 顯示 Map {"key1" => "value1", "key2" => "value2"}
console.log( myMap );


let obj = {
    name:'Jack',
    hobby:'Scuba Diving',
    age:28
}
console.log(Object.values(obj))
console.log(Object.keys(obj))
console.log(Object.entries(obj))

for(let [key , value] of Object.entries(obj)){
    console.log(`${key} ==> ${value}`)
}

