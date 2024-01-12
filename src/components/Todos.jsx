import { useDispatch, useSelector } from "react-redux"
import { removeTodo, updateTodo } from "../features/todo/todoSlice";
import { useState } from "react";
// import { intialState } from "../features/todo/todoSlice";

function Todos() {
    const todos = useSelector((state) => state.todos)
    const [isUpdate,setIsUpdate] = useState(false)
    const [todoId,setTodoId] = useState(" ")
    const [updateText,setUpdateText] = useState("")
    const dispatch = useDispatch()
    const handleEdit = (id) => {
        setIsUpdate((prev) => !prev)
        if(todoId === " "){
            setTodoId(id)
        }
        if(id !== todoId){
            setIsUpdate((prev) => !prev)
            setTodoId(id)
        }
    }
    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id}>
                <input type="text" value={todo.text} style={{border: "none", textAlign: "center", fontWeight:"bold", backgroundColor: "white"}} disabled={isUpdate && todoId === todo.id  ? false : true} /> 
                &nbsp; &nbsp; &nbsp; 
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button> &nbsp; &nbsp; &nbsp; 
                <button onClick={() => handleEdit(todo.id)} >{isUpdate && todoId === todo.id? "✅" : "🥖"}</button></li>
            ))}
            <div>Todo</div>
        </>
    )
}

export default Todos;