var todolist = {
  todos: [],
  displayTodos: function () {
    // if there are no todos
    if (this.todos.length === 0) {
      // print "your todo list is empty"
      console.log("Your todo list is empty");
    } else {
      // else, print todos as normal
      console.log('My todos:');
      for (let i = 0; i < this.todos.length; i++) {
        // if the property of the item complete property is true
        if (this.todos[i].completed === true) {
          // print it with (x)
          console.log('(x)', this.todos[i].todoText);
        } else {
          // else, print it with ( )
          console.log('( )', this.todos[i].todoText);
        }
      }
    }
  },
  // add method
  addTodo: function (todoText) {
    // add objects instead of plain text
    this.todos.push(
      // this object have two properties (todoText and completed)
      {
        // the first todoText is the name of a property on this object
        // the second todoText is refering to the todoText that is a parameter (line 7),
        // so this can change based on what you pass in when you use the method.
        todoText: todoText,
        // completed property will have a boolean value
        completed: false
      }
    );
    this.displayTodos();
  },
  // change method
  changeTodo: function (position, todoText) {
    // selects the position of the todo object 
    // and grab the todoText property(*) of that todo object 
    // then set it to a new value that is passed in when you run the function

    // (*) the dot (.) is used to just grab the todoText property
    // this will change the property todoText rather than the entire object
    this.todos[position].todoText = todoText;
    this.displayTodos();
  },
  // delete method
  deleteTodo: function (position) {
    this.todos.splice(position, 1);
    this.displayTodos();
  },
  // toggle complete method    
  // function needs a position so it knows which todo needs to modify 
  toggleCompleted: function (position) {
    // grab and save a reference to my todo
    // grab an specific position of todo object
    let todo = this.todos[position];
    // grab todo completed and set it to the oposite status
    // right now True to False
    todo.completed = !todo.completed;
    this.displayTodos();
  },
  // toggle all function
  toggleAll: function () {
    // create totalTodos variable and asign it all items inside the array
    let totalTodos = this.todos.length;
    // create completedTodos variable and asign it value 0 (it's empty)
    let completedTodos = 0;

    // Get number of completed todos
    // go throught every item
    for (let i = 0; i < totalTodos; i++) {
      // if the item inside the array completed property is true
      if (this.todos[i].completed === true) {
        // add 1 to completedTodos variable
        completedTodos++;
      }
    }

    // Case 1: if everything is true, make everything false
    if (completedTodos === totalTodos) {
      // go throught every item
      for (let i = 0; i < totalTodos; i++) {
        // make todo item completed property equal to false
        this.todos[i].completed = false;
      }
    // Case 2: else, make everything true
    } else {
      // go throught every item
      for (let i = 0; i < totalTodos; i++) {
        // make todo item completed property equal to true
        this.todos[i].completed = true;
      }
    }

    this.displayTodos();
  }
};

//Created handlers objects to handle different events
//In this case the events are different clicks
//Inside the object there are two methods
//These methods will get executed once the user clicks a button(html)
let handlers = {
  displayTodos: function() {
    todolist.displayTodos();
  },
  addTodo: function() {
    //grab the text input from the button and store it on the a varible named addTodoTextInput 
    let addTodoTextInput = document.getElementById('addTodoTextInput');

    //run todolist object with the addTodo method
    //addTodo method takes one argument(todoText) so it can pass that in
    //addTodoTextInput element can't be passed directly in, but something similar can be done
    //so it passes the value from addTodoTextInput as an argument, this will give you the value of whatever was typed in that input
    todolist.addTodo(addTodoTextInput.value);
    //grab the addTodoTextInput
    //grab the value property
    //and set it to an empty string
    //this way the box gets cleared so a new value can be input
    addTodoTextInput.value = '';
  },
  changeTodo: function() {
    let changeTodoPositionInput = document.getElementById('changeTodoPositionInput');
    let changeTodoTextInput = document.getElementById('changeTodoTextInput');
    //run todolist object with the changeTodo method
    //the first argument passes the position of the input
    //valueAsNumber is used to ensure that the first argument is a number
    //the second argument passes the text of the input
    todolist.changeTodo(changeTodoPositionInput.valueAsNumber, changeTodoTextInput.value);
    //clear the inputs value
    changeTodoPositionInput.value = '';
    changeTodoTextInput.value = '';
  },
  deleteTodo: function() {
    let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
    todolist.deleteTodo(deleteTodoPositionInput.valueAsNumber);
    deleteTodoPositionInput.value = '';
  },
  toggleCompleted: function() {
    let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
    todolist.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
    toggleCompletedPositionInput.value = '';
  },
  toggleAll: function() {
    todolist.toggleAll();
  }
};