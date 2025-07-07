const todoUlList = document.querySelector("ul.list-group.mx-auto")
let oldTodosList = []

function silButonlariniGuncelle(){
    const silButonlari = document.querySelectorAll(".silButonu")
    silButonlari.forEach(function(buton){
    buton.onclick = function(){
        buton.parentElement.remove()
    }
})
}

silButonlariniGuncelle()

const tumTodoSilBtn = document.querySelector("#todoTemizle")
tumTodoSilBtn.onclick = function(){
    Array.from(todoUlList.children).forEach(function(todos){
        todos.remove()
    })
}

const todoEkle = document.querySelector("#todoEkle")
todoEkle.onclick = function(){
    const todoInput = document.querySelector("input.form-control.mt-5")
    const newTodoLiElement = document.createElement("li")
    newTodoLiElement.classList = "list-group-item"
    newTodoLiElement.innerHTML = `
    ${todoInput.value}<button type="button" class="btn btn-outline-danger float-end silButonu">X</button>
    `
    if(todoInput.value.trim() !== ""){
        todoUlList.appendChild(newTodoLiElement)
        silButonlariniGuncelle()
        eskiTodoListGuncelle()
    }
    
}

function eskiTodoListGuncelle(){
    Array.from(todoUlList.children).forEach(function(todos){
    if(oldTodosList.includes(todos) == false){
        oldTodosList.push(todos)
    }
})
}

const todoSearchInput = document.querySelector("input.form-control.mx-auto")
todoSearchInput.addEventListener("input",function(){
    console.log(oldTodosList);
    oldTodosList.forEach(function(todos){
        if(todoSearchInput.value.toLowerCase() !== todos.textContent.replace(" X", "").toLowerCase().slice(0,todoSearchInput.value.length)){
            todos.remove()
        }
        else{
            todoUlList.appendChild(todos)
        }
    })
})

document.addEventListener("keydown",function(e){
    if(e.key === "F5"){
        e.preventDefault()
    }
})