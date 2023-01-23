import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { useState } from 'react';
import { ToDoContext } from "./todo-context2"
import { useContext } from "react"
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

const ToDoItem = ({ item }) => {
    const [isEditing, setIsEditing] = useState(false)
    const [editingItem, setEditingItem] = useState(item.task)

    const { dispatch } = useContext(ToDoContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({ type: "EDIT", id: item.id, newTask: editingItem })
        setIsEditing(false)
    }

    return (
        <List className="todoitem" >
            <ListItem className="list-todo-item">
                {isEditing ?
                    (
                        <form onSubmit={(e) => handleSubmit(e)}>
                            <input type="text" value={editingItem} onChange={(e) => setEditingItem(e.target.value)} />
                            <IconButton aria-label="delete" size="small" onClick={(e) => handleSubmit(e)}>
                                <CheckIcon fontSize="inherit" />
                            </IconButton>
                        </form>
                    )
                    :
                    (<span onClick={() => dispatch({ type: "COMPLETE", id: item.id })} style={{ textDecoration: item.completed ? "line-through" : "none" }}><ListItemText primary={item.task} /></span>)
                }
                <span>
                    <IconButton aria-label="" size="small" onClick={() => dispatch({ type: "EDIT_PRIORITY", id: item.id })}>
                        <PriorityHighIcon fontSize="inherit" color={item.highPriority ? 'warning' : 'success'} />
                    </IconButton>
                    {!isEditing &&
                        <IconButton aria-label="edit" size="small" onClick={() => setIsEditing(true)} >
                            <EditIcon fontSize="inherit" />
                        </IconButton>
                    }
                    <IconButton aria-label="delete" size="small" onClick={() => dispatch({ type: "DELETE", id: item.id })} >
                        <DeleteIcon fontSize="inherit" />
                    </IconButton>
                </span>
            </ListItem>
            <Divider />
        </List>
    );
}

export default ToDoItem;