// 原本的 function
let fn = function(){
    console.log(this.constructor.name);  // Object(data)
    setTimeout(function(){
      console.log(this.constructor.name) // Window
    },1000);
  }
  
  // 箭頭函式 Arrow function
  let fn_arr = function(){
    console.log(this.constructor.name);  // Object(data)
    setTimeout(() => {
      console.log(this.constructor.name) // Object(data)
    },1000);
  }
  
  let id = 21;
  let data = {
    id: 21
  }
  

  fn.call(data);     
  fn_arr.call(data); 
  