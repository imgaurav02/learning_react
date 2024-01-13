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
    const handleEdit = (id,text) => {
        if(isUpdate){
            dispatch(updateTodo({id: todoId, text: updateText}))
            setIsUpdate((prev) => !prev)
            setTodoId("")
            setUpdateText("")
            return
        }
        setIsUpdate((prev) => !prev)
        setTodoId(id)
        setUpdateText(text)
    }
    return ( 
        <>
            {todos.map((todo) => (
                <li key={todo.id}>
                <input type="text" value={todoId === todo.id ? updateText :todo.text} onChange={(e) => {
                    if(todoId === todo.id){
                        return setUpdateText(e.target.value)    
                    }
                }} style={{border: "none", textAlign: "center", fontWeight:"bold", backgroundColor: "white"}} disabled={isUpdate && todoId === todo.id  ? false : true} /> 
                &nbsp; &nbsp; &nbsp; 
                <button onClick={() => dispatch(removeTodo(todo.id))}>X</button> &nbsp; &nbsp; &nbsp; 
                <button onClick={() => handleEdit(todo.id,todo.text)} >{isUpdate && todoId === todo.id? "✅" : "🥖"}</button></li>
            ))}
            <div>Todo</div>
        </>
    )
}

export default Todos;