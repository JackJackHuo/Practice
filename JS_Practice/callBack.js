const name = document.getElementById("name")
const input = document.getElementById("input")

name.addEventListener("click" , function(b){
    console.log(b.target.textContent);

})
input.addEventListener("keydown" , changeText)
input.addEventListener("keyup" , changeText1)

function changeText() {
    name.innerText = "Kevin"
}
function changeText1() {
    name.innerText = "Jack"
}

input.addEventListener("click" , function(a){
    console.log(a.target.value);
})
