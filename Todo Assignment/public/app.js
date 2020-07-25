var list = document.getElementById("list")

function addTodo(){
    var todo_item = document.getElementById("todo_item")

    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
  

// create delete btn 
var delBtn = document.createElement("button")
var delText = document.createTextNode("Delete")
delBtn.setAttribute("class","hello")
delBtn.setAttribute("onclick","deleteItem(this)")
delBtn.appendChild(delText)

//create edit button

var editBtn = document.createElement("button")
var editText = document.createTextNode("Edit")
editBtn.setAttribute("class","hello")
editBtn.setAttribute("onclick","editItem(this)")
editBtn.appendChild(editText)

li.appendChild(delBtn)
li.appendChild(editBtn)

list.appendChild(li)

    todo_item.value = ""
    // console.log(li)
}

function deleteItem(i){
    i.parentNode.remove()
}

function editItem(i){
   
    var va1 = i.parentNode.firstChild.nodeValue
    var valu = prompt("Enter Your  Value",va1);

    i.parentNode.firstChild.nodeValue = valu

}

function deleteAll(){
    list.innerHTML = ""
}