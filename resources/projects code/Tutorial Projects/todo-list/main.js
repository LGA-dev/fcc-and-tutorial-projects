var todoList = {
  todos: [],
  // Method to add a todo
  addTodo: function (todoText) {
    // .push will add two objects, instead of plain text
    this.todos.push(
      // This object has two properties (todoText: and completed:)
      {
        // The first todoText is the name of a property on this object
        // The second todoText is refering to the todoText that is a parameter (line 26)
        // *This means that this can change based on what you pass in when you use the method
        todoText: todoText,
        // The second property will have a boolean value
        completed: false
      }
    );
  },
  // Method to change a todo
  changeTodo: function (position, todoText) {
    // Select the position of the todo object in the todos array
    // and grab the todoText property of that todo object 
    // Then set it to a new value that is passed in when you run the function

    // *".todoText" is used to just grab the todoText property
    // *This will change the property todoText, rather than the entire object
    this.todos[position].todoText = todoText;
  },
  // Method to delete a todo
  // The function needs a position so it knows which todo needs to delete
  deleteTodo: function (position) {
    // Select the todos array with the splice method
    // and delete the position passed in
    
    // *1 means the number of elements to delete
    this.todos.splice(position, 1);
  },
  // Method to mark a todo as completed
  // The function needs a position so it knows which todo needs to modify 
  toggleCompleted: function (test) {
    // Create the todo variable and set it to an specific position of todo object in the todos array
    let todo = this.todos[test];
    // Set the todo completed property and set it to the oposite status
    todo.completed = !todo.completed;
  },
  // Method to toggle all todos
  toggleAll: function () {
    // Create totalTodos variable 
    // and asign it all items inside the array
    let totalTodos = this.todos.length;
    // Create completedTodos variable and asign it to 0
    let completedTodos = 0;

    // Get the number of completed todos
    this.todos.forEach(function (todo) {
      // If the element complete property is true
      if (todo.completed === true) {
        // Add 1 to the completedTodos variable
        completedTodos++;
      }
    });

    // Check if the number completedTodos variable is equal to totalTodos variable
    this.todos.forEach(function (todo) {
    // Case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      todo.completed = false;

    // Case 2: else, make everything true
    // *This means that if the number of completedTodos isn't equal to totalTodos
    // *then all elements are going to be changed to true
    } else {
      todo.completed = true;
    }
    })
  }
};

// The handlers objects is created to handle different events
// In this case the events are different clicks
// These methods will get executed when the user clicks a button
let handlers = {
  addTodo: function() {
    // Create addTodoTextInput variable 
    // and asign it to the text input that is passed on the Input element in HTML
    let addTodoTextInput = document.getElementById('addTodoTextInput');
    // Run the todoList object with the addTodo method
    // and pass addTodoTextInput as an argument

    // *The addTodo method takes one argument(todoText) so it can pass that in
    // *but the addTodoTextInput element can't be passed directly in, but something similar can be done
    // *So the solution was to pass the value property from addTodoTextInput as an argument
    // *This returns the value of whatever was typed in that input
    todoList.addTodo(addTodoTextInput.value);

    // Grab the addTodoTextInput variable with the value property
    // and asign it to an empty string

    // *This way the box gets cleared so a new value can be input 
    addTodoTextInput.value = '';

    // Run the displayTodos function
    view.displayTodos();
  },
  changeTodo: function() {
    // Create changeTodoPositionInput variable 
    // and asign it to the number input that is passed on the Input element in HTML
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    // Create changeTodoTextInput variable and asign it to the text input that is passed on the Input element in HTML
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');

    // Run todoList object with the changeTodo method
    // then pass changeTodoPositionInput and changeTodoTextInput as an argument

    // The first argument passes the position of the input as a number
    // The second argument passes the text of the input 

    // *The valueAsNumber property is used to ensure that the first argument is always number
    todoList.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);

    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';

    view.displayTodos();
  },
  deleteTodo: function(position) {
    // Run todoList object with the deleteTodo method
    // and pass position as an argument
    todoList.deleteTodo(position);

    view.displayTodos();
  },
  toggleCompleted: function() {
    // Create toggleCompletedPositionInput variable 
    // and asign it to the number input that is passed on the Input element in HTML
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');

    // Run todoList object with the toggleCompleted method
    // then pass toggleCompletedPositionInput with the valueAsNumber property as an argument
    todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);

    toggleCompletedPositionInput.value = '';

    view.displayTodos();
  },
  toggleAll: function() {
    //Run todoList object with the toggleAll method
    todoList.toggleAll();

    view.displayTodos();
  }
};

// The view object is created to handle the view functions
let view = {
  displayTodos: function () {
    // Create the todosUl variable and asign it to the ul element in HTML
    let todosUL = document.querySelector('ul');

    // Grab the todosUl variable with the innerHTML property
    // and set it to an empty string

    // *This will clear out the ul before it starts adding the new li elements
    todosUL.innerHTML = '';

    // Run the forEach method on every todo element inside the todos array
    // *The function needs two parameters
    // *todo is the text element that is being passed on
    // *and position is the position of that text element 
    todoList.todos.forEach(function(todo, position) {
      // Create todoLi variable
      // and create new list item element for each element inside the todos array
      let todoLi = document.createElement('li');

      // Create todoTextWithCompletion
      // and set it to an empty string
      let todoTextWithCompletion = '';

      // Check if the todo completed property is true

      // Case 1: if the element completed property is true
      if (todo.completed === true) {
        // Assign a X mark to the todo with the todoText property that is passed on
        todoTextWithCompletion = '(x) ' + todo.todoText;
      } else {
        // Assign an empty mark to the todo with the todoText property that is passed on
        todoTextWithCompletion = '( ) ' + todo.todoText;
      }

      // Grabs the todoLi variable with the id property
      // and asign it to the position that is being passed on

      // *The id from todoLi variable is equal to the li element position
      todoLi.id = position;

      // Grabs the todoLi variable with the textContext property
      // and asign it to the todoTextWithCompletion variable
      todoLi.textContent = todoTextWithCompletion;

      // Grabs the todoLi variable with the appendChild method
      // and run the createDeleteButton function

      // *This will create the delete button when a todo is created
      todoLi.appendChild(this.createDeleteButton());

      // Grab the todoUL variable with the appendChild method
      // and pass the todoLi variable as an argument

      // *This will create the li item inside the ul
      todosUL.appendChild(todoLi);

      // I'm not able to explain the this below this comment yet
    }, this)
  },
  // This functions creates the delete button
  createDeleteButton: function() {
    // Creates the deleteButton variable
    // and asign it to the document element with the createElement method

    // *This will create the button
    let deleteButton = document.createElement('button');


    // Grab the deleteButton variable with the text context property
    // and asign it to the string Delete

    // *This will change the name inside the button
    deleteButton.textContent = 'Delete';

    // Grab the deleteButton variable with the className property
    // and asign the class deleteButton
    deleteButton.className = 'deleteButton';

    // Return the value of deleteButton
    // *Without the return statement, the function wouldn't work
    return deleteButton;
  },
  // This funct
  setUpEventHandlers: function () {
    // Create the todosUl variable
    // and asign it to the ul element in HTML
    let todosUl = document.querySelector('ul');

    // Grab the todosUl variable with the addEventListener method
    // The function needs a parameter to work

    // *This will wait for the user to make an action, in this case a click
    // *and it will run the function
    todosUl.addEventListener('click', function (event) {
      // Create the elementClicked variable
      // and asign it to the current event element target

      // *This means it will store the event element that was clicked inside the variable
      let elementClicked = event.target;

      // Check if the elementClicked class name is equal to deleteButton
      // If it is true, then delete the current item
      if (elementClicked.className === 'deleteButton') {
        // Run handlers object with the deleteTodo method
        // then it will check the elementClicked parentNode id
        // *parseInt will convert a string to a number

        // *This means that it is going to grab the id of the clicked element
        // *then is going to convert it to a number
        // *and then this number is passed to the deleteTodo method
        // *then the method is going to run and proceed to delete it

        // **This means that the element that was clicked is getting deleted
        handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
      }
    });
  }
};

view.setUpEventHandlers();