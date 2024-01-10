import { useContext, createContext } from "react";

const todoContext = createContext({
    todos: [{ 
        // this is a "todo"
        id: 1,
        todoText: "ToDo message",
        completed: false
    }],
    addTodo: function(todo) {},
    updateTodo: function(id, todo) {},
    deleteTodo: function(id) {},
    toggleComplete: function(id) {}
});

const TodoProvider = todoContext.Provider;

function useToDo() {
    return useContext(todoContext);
}

export {
    todoContext,
    TodoProvider,
    useToDo
}


/*

*/