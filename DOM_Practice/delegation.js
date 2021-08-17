let grandpa = document.querySelector('.grandpa') 
let parent = document.querySelector('.parent') 
let child = document.querySelector('.child') 

child.addEventListener('click', function (e) {
    console.log(`Capturing: ${child.tagName}, Phase: ${e.eventPhase}`)
    console.log(e.target,this)
  }, true)
parent.addEventListener('click', function (e) {
    e.stopPropagation()
    console.log(`Capturing: ${parent.tagName}, Phase: ${e.eventPhase}`)
    console.log(e.target,this)
  }, true)
  
grandpa.addEventListener('click', function (e) {
    console.log(`Capturing: ${grandpa.tagName}, Phase: ${e.eventPhase}`)
    console.log(e.target,this)
  }, true)

//使用capturing傳遞機制, grandpa -> parent -> child 
//在parent設定e.stopPropagation()代表傳遞到parent就停了，child的監聽事件不會被觸發
