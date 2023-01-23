
import TodoList from "./ToDoList"
import ToDoForm from "./ToDoForm"
import AddCircleIcon from '@mui/icons-material/AddCircle';
import IconButton from '@mui/material/IconButton';
import { useState } from 'react'
import TemporaryDrawer from './Drawer'

const Todos = () => {

    const [showForm, setShowForm] = useState(false)

    const handleSubmit = () => {
        setShowForm(false)
    }

    return (
        <div className="ToDoApp">
            <TemporaryDrawer />
            <TodoList />
            <div className="form-container">
                {showForm ?
                    <ToDoForm handleSubmit={handleSubmit} /> :
                    (<IconButton className="add-button" aria-label="" size="small" onClick={() => setShowForm(true)}>
                        <AddCircleIcon color="primary" fontSize="large" />
                    </IconButton>)
                }
            </div>

        </div>
    );
}

export default Todos;


//list of todos
//form to add todo
