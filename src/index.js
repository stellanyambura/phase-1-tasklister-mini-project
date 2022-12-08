
  document.addEventListener("DOMContentLoaded", () => {
    // your code here
    let form= document.querySelector('form')
    form.addEventListener('submit',(e)=> {
      e.preventDefault()
      makeTask(e.target['new-task-description'].value)
      form.reset()
    })
  });
  
  function makeTask (task){
    let li = document.createElement('li');
    let button = document.createElement('button')
    button.addEventListener('click', deleteTask)
    button.textContent = "DELETE"
    li.textContent = task + " "
    li.appendChild(button)
    document.getElementById("tasks").appendChild(li)
  }
  function deleteTask(e){
    e.target.parentNode.remove
  
  }
