let lauren = document.querySelector("#nameList").firstElementChild
let rima = document.querySelector("#nameList").children[1]
let lin = document.querySelector("#nameList").lastElementChild



lauren.addEventListener('click' ,showPic)
rima.addEventListener('click' ,showPic)
lin.addEventListener('click' ,showPic)

function showPic() {
    let allPic = document.querySelectorAll('img')
    for(let key of allPic){
        key.className = 'hide'
    }
    thisPic = this.lastElementChild
    if(thisPic.className === 'hide'){
        thisPic.className = ''
    }else{
        thisPic.className = 'hide'
    }
}