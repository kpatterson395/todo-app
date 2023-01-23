import ToDoItem from "./ToDoItem";
import { ToDoContext } from "./todo-context2"
import { ViewContext } from "./view-context";
import { useContext } from "react"

const ToDoList = () => {
    const { toDos } = useContext(ToDoContext)
    const { view } = useContext(ViewContext)
    const viewToDos = toDos.filter((t) => {
        if (view.filter === 'priority') {
            return t.view === view.date && t.highPriority
        } else {
            return t.view === view.date
        }
    })

    return (
        viewToDos.map((t) => <ToDoItem item={t} key={t.id} />)
    );
}

export default ToDoList;