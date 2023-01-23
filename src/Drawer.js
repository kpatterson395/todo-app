import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import React, { useState, useContext } from "react";
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import CheckIcon from '@mui/icons-material/Check';
import { ViewContext } from './view-context';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function TemporaryDrawer() {
    const [state, setState] = useState({
        left: false
    });

    const { view, setView } = useContext(ViewContext)

    const toggleDrawer =
        (anchor, open) =>
            (event) => {
                if (
                    event.type === 'keydown' &&
                    ((event).key === 'Tab' ||
                        (event).key === 'Shift')
                ) {
                    return;
                }

                setState({ ...state, [anchor]: open });
            };

    const list = (anchor) => (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setView({ ...view, date: 'today' })}>
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Today" />
                        {view.date === 'today' &&
                            <ListItemIcon>
                                <CheckIcon fontSize="inherit" />
                            </ListItemIcon>}
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setView({ ...view, date: 'tomorrow' })}>
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Tomorrow" />
                        {view.date === 'tomorrow' &&
                            <ListItemIcon>
                                <CheckIcon fontSize="inherit" />
                            </ListItemIcon>}
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setView({ ...view, date: 'week' })}>
                        <ListItemIcon>
                            <CalendarTodayIcon />
                        </ListItemIcon>
                        <ListItemText primary="Next Week" />
                        {view.date === 'week' &&
                            <ListItemIcon>
                                <CheckIcon fontSize="inherit" />
                            </ListItemIcon>}
                    </ListItemButton>
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem disablePadding>
                    <ListItemButton onClick={() => setView({ ...view, filter: view.filter === 'priority' ? 'none' : 'priority' })}>
                        <ListItemIcon>
                            <PriorityHighIcon />
                        </ListItemIcon>
                        <ListItemText primary="Highest Priority" />
                        {view.filter === 'priority' &&
                            <ListItemIcon>
                                <CheckIcon fontSize="inherit" />
                            </ListItemIcon>}
                    </ListItemButton>
                </ListItem>
            </List>
        </Box>
    );

    return (
        <div>
            {(['left']).map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>Change View</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
    );
}