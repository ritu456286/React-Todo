import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';

import DeleteIcon from '@mui/icons-material/Delete';


export default function TodoItem({ todo, handleToggle, removeTodo }) {
    const labelId = `checkbox-list-label-${todo.id}`;
      
        return (
          <ListItem 
            secondaryAction={
              <IconButton edge="end" aria-label="remove-todo"
              onClick={() => removeTodo(todo.id)}>
                <DeleteIcon />
              </IconButton>
            }
            disablePadding
          >
            <ListItemButton role={undefined} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={todo.completed}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                  onChange={handleToggle}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={todo.item} />
            </ListItemButton>
          </ListItem>
        );
}