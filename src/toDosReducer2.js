import { v4 as uuidv4 } from 'uuid';


const reducer = (state, action) => {
    switch (action.type) {
        case "EDIT":
            return state.map((t) => t.id === action.id ? { ...t, task: action.newTask } : t)
        case "EDIT_PRIORITY":
            return state.map((t) => t.id === action.id ? { ...t, highPriority: !t.highPriority } : t)
        case "DELETE":
            return state.filter(t => t.id !== action.id)
        case "ADD":
            return [...state, { task: action.task, id: uuidv4(), completed: false, highPriority: false, view: action.view }]
        case "COMPLETE":
            return state.map((t) => t.id === action.id ? { ...t, completed: !t.completed } : t)
        default:
            return state
    }

}


export default reducer;