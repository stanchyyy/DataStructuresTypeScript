import Drawer from "@mui/material/Drawer";
import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText/ListItemText";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
import MenuIcon from '@mui/icons-material/Menu';
import InboxIcon from '@mui/icons-material/MoveToInbox';




let dataStructuresMap = new Map<string,string>();
dataStructuresMap.set("Array","array");
dataStructuresMap.set("Linked List","linkedList");
dataStructuresMap.set("Stack","stack");
dataStructuresMap.set("Queue","queue");
dataStructuresMap.set("Binary Tree","binaryTree");
dataStructuresMap.set("Binary Search Tree","binarySearchTree");
dataStructuresMap.set("Heap","heap");
dataStructuresMap.set("Hashing","hashing");
dataStructuresMap.set("Graph","graph");
dataStructuresMap.set("Matrix","matrix");

function ListDataStructures(arg_dataStructuresMap :  Map<string,string>){
  let listDataStructures: JSX.Element [] = [];
  
  for (const [key, value] of arg_dataStructuresMap) {
    listDataStructures.push(
      <ListItem  disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InboxIcon />
                <Link   to={value} >
                <ListItemText primary={key} />
                </Link>
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
    )
  }
  return(
    listDataStructures
  )
}



const drawerWidth = 240;


export default function Root() {

  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
        {ListDataStructures(dataStructuresMap)}
      </List>
    </div>
  );



  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer

          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <div id="detail">
         <Outlet />
         </div>
      </Box>
    </Box>
  );
}