const todoArray = []; 

  renderTodolist(); 

  function renderTodolist(){
  let todoHTML = '';

  for(let i = 0; i < todoArray.length; i++){
   
    const todoObject = todoArray[i];
   // const name = todoObject.name;
   // const date = todoObject.date; 
    const {name, date} =  todoObject 
   const html = `
    <div>${name}</div>
    <div>${date}</div> 
    <button onclick="
      todoArray.splice(${i},1);
      renderTodolist(); 
      "class = "delete-button
    ">Delete</button>`; 
    todoHTML += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoHTML
  }
/***************
 * 
 * Add todo chores
 * 
***************/
function addTodo(){
  const element = document.querySelector('.js-todo-input'); 
  
  const name = element.value; 
  
  const dateInputElement = document.querySelector('.js-date-input'); 
  const date = dateInputElement.value; 

  todoArray.push(
    {//name:name,
    //date:date
    name,
    date
    }); 
  
  element.value = '';
  dateInputElement.value = '';
  renderTodolist(); 
}

