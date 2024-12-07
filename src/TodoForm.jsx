import { ListItem } from "@mui/material";
import AddTaskIcon from '@mui/icons-material/AddTask';
import { IconButton } from "@mui/material";
import TextField from "@mui/material/TextField";
import { InputAdornment } from "@mui/material";
import { useState } from "react";
export default function TodoForm({ addTodo }){
    const [text, setText] = useState("");

    const handleChange = (evt) => {
        setText(evt.target.value);
    }
    const handleSubmit = (evt) => {
        evt.preventDefault();
        addTodo(text);
        setText("");
    }
    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
            <TextField 
                id="outlined-basic" 
                label="Add Todo" 
                variant="outlined" 
                onChange={handleChange}
                value={text}
                slotProps={{
                    input: {
                      endAdornment: <InputAdornment position="end">
                        <IconButton aria-label="create todo" edge="end" type="submit">
                            <AddTaskIcon/>
                        </IconButton></InputAdornment>,
                    },
                }}
            />
            </form>
          </ListItem>
    )
}