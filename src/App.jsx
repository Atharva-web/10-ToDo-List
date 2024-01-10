import { useState, useEffect } from "react";
import { TodoProvider } from "./context/index";
import { TodoForm, TodoItem } from "./components/index";

function App() {

    // Note: callback gives access to existing values

    const [todos, setTodos] = useState([]);

    function addTodo(todo) {
        console.log(todo);
        setTodos(function(prevTodos) {
            return [{...todo}, ...prevTodos];
        });
    }

    function updateTodo(id, todo) {
        setTodos(function(prevTodos) {
            return prevTodos.map(function(prevTodo) {
                if(prevTodo.id === id) {
                    return todo;
                }
                else {
                    return prevTodo;
                }
            });
        });
    }

    function deleteTodo(id) {
        setTodos(function(prevTodos) {
            return prevTodos.filter(function(prevTodo) {
                if(prevTodo.id !== id) {
                    return true;
                }
                else {
                    false;
                }
            });
        });
    }

    function toggleComplete(id) {
        setTodos(function(prevTodos) {
            return prevTodos.map(function(prevTodo) {
                if(prevTodo.id === id) {
                    return {...prevTodo, completed: !prevTodo.completed}
                }
                else {
                    return prevTodo;
                }
            });
        });
    }

    useEffect(function() {
        const storedTodos = JSON.parse(localStorage.getItem("todos"));
        if (storedTodos && storedTodos.length > 0) {
          setTodos(storedTodos);
        }
      }, []); // Run only on mount
    
    useEffect(function() {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);  // having dependecies makes this function to run everytime the dependecies change


    return (
        <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TodoForm />
                    </div>
                    <div>
                        {
                            todos.map(function(todo) {
                                return (
                                    <div key={todo.id} className="w-full">
                                        <TodoItem todo={todo}/>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </TodoProvider>
    );
}

export default App;