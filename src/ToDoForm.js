import React, { useState } from "react";
import { ToDoContext } from "./todo-context2"
import { ViewContext } from "./view-context";
import { useContext } from "react"
import Button from '@mui/material/Button';





const ToDoForm = ({ handleSubmit }) => {

    const { dispatch } = useContext(ToDoContext)
    const { view } = useContext(ViewContext)
    const [task, setTask] = useState('')

    const addToDo = (e) => {
        e.preventDefault()
        dispatch({ type: "ADD", task, view: view.date })
        setTask('')
        handleSubmit()
    }

    return (
        <form onSubmit={(e) => addToDo(e)} >
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <Button onClick={(e) => addToDo(e)}>Submit</Button>
        </form>
    );
}

export default ToDoForm;