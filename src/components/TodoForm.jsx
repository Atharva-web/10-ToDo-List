import { useState } from "react";
import { useToDo } from "../context";

function TodoForm() {
    const [todoText, setTodoText] = useState("");
    const { addTodo } = useToDo();

    function add(e) {
        e.preventDefault(); // form event
        
        if(!todoText) {
            return;
        }
        
        addTodo({id: Date.now(), todoText: todoText, completed: false});
        setTodoText("");
    }

    return (
        <form onSubmit={add} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todoText} // our todo text goes here
                onChange={function(e) {
                    setTodoText(e.target.value);
                }}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm;