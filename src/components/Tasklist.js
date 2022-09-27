import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function TaskList({ tasks }) {
  return (
    <nav aria-label="secondary mailbox folders">
      <List>
        {tasks.map((task) => (
          <>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox />
                </ListItemIcon>
                <ListItemText primary={task.name} />
                <DeleteRoundedIcon style={{ color: "red" }} />
              </ListItemButton>
            </ListItem>
          </>
        ))}
      </List>
    </nav>
  );
}
