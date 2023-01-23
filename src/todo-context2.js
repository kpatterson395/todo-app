import React, { createContext, useReducer } from 'react';
import reducer from "./toDosReducer2"
import { v4 as uuidv4 } from 'uuid';

const defaultValue = [{
    id: uuidv4(),
    task: "clean",
    completed: false,
    highPriority: false,
    view: 'today'
}]

export const ToDoContext = createContext()



export const ToDoProvider = (props) => {
    // const [toDos, setToDos] = useState(defaultValue)
    const [toDos, dispatch] = useReducer(reducer, defaultValue)

    return (
        <ToDoContext.Provider value={{ toDos, dispatch }}>
            {props.children}
        </ToDoContext.Provider>
    );
}


