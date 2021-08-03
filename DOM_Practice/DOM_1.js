let list = document.querySelector("#checklist").children


for(let item of list){
    item.addEventListener('click',editMode)
    // item.querySelector('input').addEventListener('blur',update)
    item.querySelector('input').addEventListener('keydown',enter)
}

function editMode() {
    this.className = 'edit'   
    let input = this.querySelector('input')
    input.focus()
    input.setSelectionRange(0,input.value.length)
}

// function update() {
//     this.previousElementSibling.innerHTML = this.value
//     this.parentElement.className = ''
// }
function enter(e){
    if(e.key === 'Escape'){
        this.previousElementSibling.innerHTML = this.attributes['value'].value
        this.parentElement.className = ''
    }
    if(e.key === 'Enter'){
        this.previousElementSibling.innerHTML = this.value
        this.parentElement.className = ''
    }   

}