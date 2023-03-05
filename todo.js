    // We'll pre-populate this array with a couple objects just so it's not undefined if your internet connection isn't working properly.

    let arrayOfTodos = [
        {
        "userId": 14,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
    {
        "userId": 20,
        "id": 2,
        "title": "delectus aut autem",
        "completed": false
    }]
    
    const fetchTodos = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (response) => response.json())
        .then( (json) => arrayOfTodos = json)
    }
    
    const logTodos = () => {
        console.log(arrayOfTodos)
    }
    
    const populateTodos = () => {
        
const ol = document.getElementById("todo-list");
for(let index = 0; index < arrayOfTodos.length; index++) {
const todo = arrayOfTodos[index];
const li = document.createElement("li");
const title = document.createTextNode(todo.title);
li.appendChild(title);
ol.appendChild(li);


}
    
    }


    const filterTodosOldSchool = () => {

        let filtered = [];
        let userId = 2
        for (let index = 0; index < arrayOfTodos.length; index++) {
            const todo = arrayOfTodos[index];
            
            if (todo.userId === userId) {
                filtered.push(todo)
            }
        }
        console.log('filtered:', filtered)
    
        const filteredTodosElement = document.getElementById("todo-list");

        filteredTodosElement.innerHTML = "";
        
            // const ol = document.getElementById("todo-list");
            filtered.forEach((todo) => {
                const listItemElement = document.createElement("li");

                    const textNode = document.createTextNode(todo.title);

                         listItemElement.appendChild(textNode);

                             filteredTodosElement.appendChild(listItemElement);
            });
                
     }
                
  

    const filterTodos = () => {
        const userIdInput = document.getElementById("userId-input");
        const userId = parseInt(userIdInput.value);
      
        let filtered = [];
        for (let index = 0; index < arrayOfTodos.length; index++) {
          const todo = arrayOfTodos[index];
          if (todo.userId === userId) {
            filtered.push(todo);
          }
        }
        console.log("filtered:", filtered);
      
       
        const filteredTodosElement = document.getElementById("filtered-todos");
      
        filteredTodosElement.innerHTML = "";
      
        
        filtered.forEach((todo) => {
          const listItemElement = document.createElement("li");
          const textNode = document.createTextNode(todo.title);
          listItemElement.appendChild(textNode);
          filteredTodosElement.appendChild(listItemElement);
        });
        

    };

let clearlist = () => {
    const filteredTodosElement = document.getElementById("filtered-todos");
    const todoListElement = document.getElementById("todo-list")
        filteredTodosElement.innerHTML = "";
        todoListElement.innerHTML = "";
        
    };

