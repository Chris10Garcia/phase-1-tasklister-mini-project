document.addEventListener("DOMContentLoaded", () => {
  
  let form = document.getElementById('create-task-form')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    let formData = document.getElementById('new-task-description').value 
    addToDo(formData)
    form.reset
  })
  
});


function addToDo(todo){
  
  let newList = document.createElement('li')
  let newBttn = document.createElement('button')

  
  newList.textContent =` ${todo} `
  newBttn.textContent = "X"
  
  newBttn.addEventListener('click', deleteTodo)
  newList.appendChild(newBttn)

  document.getElementById('tasks').appendChild(newList)
}

function deleteTodo(e){
  e.target.parentNode.remove()
}