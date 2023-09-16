document.addEventListener("DOMContentLoaded", () => {
  const form= document.getElementById('create-task-form')

  form.addEventListener('submit', (e) => {
    /* When the button is clicked, we want to add the what the user input to the unordered list
    */
    e.preventDefault()
    const userInput= e.target['new-task-description'].value
    
    const task= document.createElement('li')
    const deleteButton= document.createElement('button')
    deleteButton.innerText= 'X'
    task.innerText= `${userInput}     `

    document.getElementById('tasks').append(task)
    task.append(deleteButton)

    deleteButton.addEventListener('click', (e) => {
      e.target.parentNode.remove()
    })

    e.target.reset()
    
  })
});
