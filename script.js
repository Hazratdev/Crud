const input1 = document.querySelector(".text1")
const input2 = document.querySelector(".text2")
const btn = document.querySelector(".btn")
const ol = document.querySelector("ol")
const err = document.querySelector("h2")

btn.addEventListener("click",() => {
    if (input1.value.trim() === "" && input2.value.trim() === "") {
        err.innerHTML = "ERROR"
    } else {
        err.innerHTML = ""
        ol.innerHTML += `<li class= "list-group-item my-1 d-flex justify-content-between align-items-center">
 <span>Fist Name:   ${input1.value} <br>  Last Name:   ${input2.value}</span>
<button class="del-btn btn btn-danger">Удалить</button></li>`
        input1.value = ""
        input2.value= ""
    }
})
ol.addEventListener("click",(e) => {
    if (e.target.classList.contains("del-btn")){
        e.target.parentNode.remove()
    }
})
