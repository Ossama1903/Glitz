import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import Checkbox from "@mui/material/Checkbox";
import DeleteRoundedIcon from "@mui/icons-material/DeleteRounded";

export default function TaskList({ tasks }) {
  return (
    <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
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
    </Box>
  );
}
