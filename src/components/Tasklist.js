import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function TaskList({ tasks, removeTask }) {
  return (
    <nav aria-label="secondary mailbox folders">
      <List>
        {tasks.map((task) => (
          <ListItem id={task.id} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Checkbox />
              </ListItemIcon>
              <ListItemText primary={task.name} />
              <DeleteRoundedIcon
                onClick={() => removeTask(task.id)}
                style={{ color: "red" }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </nav>
  );
}
