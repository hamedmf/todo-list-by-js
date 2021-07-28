let i = 1
let j = 1000
function setElement(textp) {

    let container = document.getElementById("container")
    let todo = document.createElement("li")
    let checked = document.createElement("div")
    let checkbox = document.createElement("input")
    let paragraph = document.createElement("div")
    let text = document.createElement("div")
    let p = document.createElement("p")
    let edit = document.createElement("div")
    let x = document.createElement("button")
    let e = document.createElement("button")
    let ok = document.createElement("button")

    container.appendChild(todo)
    edit.appendChild(x)
    edit.appendChild(e)
    edit.appendChild(ok)
    text.appendChild(p)
    paragraph.appendChild(text)
    checked.appendChild(checkbox)
    todo.appendChild(checked)
    todo.appendChild(paragraph)
    todo.appendChild(edit)

    x.textContent = 'X'
    e.textContent = "E"
    ok.textContent = "OK"
    todo.className = "line-todo"
    checked.className = "checked"
    ok.className = "ok"
    paragraph.className = "paragraph"
    text.className = "text"
    edit.className = "edit-remove"
    checkbox.type = "checkbox"
    ok.style.display ="none"
     i++
     j++

    checkbox.id = j
    p.textContent = textp
    todo.id = i
    x.className = i
    e.className = i

    x.addEventListener("click", removeMe)
    e.addEventListener("click", editMe)
    ok.addEventListener("click", confirm)
   
    checkbox.checked = false
   

    inputMe = document.getElementById("inputme")
    function editMe(event) {
        inputMe.value = p.textContent
        e.style.display = "none"
        ok.style.display = "inline"


    }
    

    function confirm() {
        
       p.textContent = inputMe.value 
       inputMe.value = ""
       ok.style.display = "none"
       e.style.display = "inline"
    }


}
   






function removeMe(event) {
    console.log(event);
    document.getElementById(event.srcElement.className).style.display = "none"
}



document.getElementById("buttonme").addEventListener("click", myfn)

function myfn(event) {
    
   let obj = setElement(document.getElementById("inputme").value)

    inputMe.value =""
    
}



document.querySelector('input[type="checkbox"]').addEventListener("click", ifcheck)
function ifcheck() {
    console.log("kkkk");
    if(checkbox.checked === true){
        document.querySelector("p").style.textDecoration = "line-through"
    }
    else{
        document.querySelector("p").style.textDecoration = "none"
    }
}