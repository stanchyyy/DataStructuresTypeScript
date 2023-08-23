import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import Toolbar from "@mui/material/Toolbar";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InboxIcon from '@mui/icons-material/MoveToInbox';
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Container, Tab, Tabs } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}




let dataStructuresMap = new Map<string, string>();
dataStructuresMap.set("Array", "array");
dataStructuresMap.set("Linked List", "linkedList");
dataStructuresMap.set("Stack", "stack");
dataStructuresMap.set("Queue", "queue");
dataStructuresMap.set("Binary Tree", "binaryTree");
dataStructuresMap.set("Binary Search Tree", "binarySearchTree");
dataStructuresMap.set("Heap", "heap");
dataStructuresMap.set("Hashing", "hashing");
dataStructuresMap.set("Graph", "graph");
dataStructuresMap.set("Matrix", "matrix");

function ListDataStructures(arg_dataStructuresMap: Map<string, string>) {
  let listDataStructures: JSX.Element[] = [];

  for (const [key, value] of arg_dataStructuresMap) {
    listDataStructures.push(
            <Link rel="noreferrer" to={value} >
              <Tab label={key} {...a11yProps(0)} />
            </Link>
    )
  }
  return (
    listDataStructures
  )
}


function topNav() {
  return (
    <Grid container textAlign="center" sx={{ height: "8vh", alignContent: "center", alignItems: "center" }} bgcolor="#352F44">
      <Grid xs={6} display={"flex"} margin={"auto"} alignItems={"baseline"}>
        <Typography variant="h4" component="h2" color="#B9B4C7" marginRight="1rem" marginLeft="1rem">
          Unresolved promises</Typography>
        <Link rel="noreferrer" to="/" >
          <Avatar sx={{ width: "3rem", height: "3rem" }}  >
            <AccountTreeIcon color="disabled" />
          </Avatar>
        </Link>
      </Grid>
      <Grid xs={6} >
        <Link rel="noreferrer" to="https://www.linkedin.com/in/stanislav-atanasov-a0644a123/" >
          <LinkedInIcon color="primary" fontSize="large" />
        </Link>
        <Link rel="noreferrer" to="https://github.com/stanchyyy/data-structures-typescript" >
          <GitHubIcon color="primary" fontSize="large" />
        </Link>
      </Grid>
    </Grid>
  )
}


export default function Root() {
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };


  return (
    <Container maxWidth="lg" >
      {topNav()}
      <Grid display={"flex"}>
        <Tabs value={tabValue} onChange={handleTabChange}
          orientation="vertical"
          variant="scrollable"
          textColor="secondary"
          indicatorColor="secondary"
        >
          {ListDataStructures(dataStructuresMap)}
          <Tab label="Item One1" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        <CustomTabPanel value={tabValue} index={0}>
          Item One111
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={1}>
          Item Two
        </CustomTabPanel>
        <CustomTabPanel value={tabValue} index={2}>
          Item Three
        </CustomTabPanel>
      </Grid>
    </Container>
  );




  // <Box sx={{ display: 'flex' }}>
  //   <CssBaseline />
  //   <AppBar
  //     position="fixed"
  //     sx={{
  //       width: { sm: `calc(100% - ${drawerWidth}px)` },
  //       ml: { sm: `${drawerWidth}px` },
  //     }}
  //   >
  //     <Toolbar>
  //       <IconButton
  //         color="inherit"
  //         aria-label="open drawer"
  //         edge="start"
  //         onClick={handleDrawerToggle}
  //         sx={{ mr: 2, display: { sm: 'none' } }}
  //       > 
  //         <MenuIcon />
  //       </IconButton>
  //       <Typography variant="h6" noWrap component="div">
  //         Responsive drawer
  //       </Typography>
  //     </Toolbar>
  //   </AppBar>
  //   <Box
  //     component="nav"
  //     sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
  //     aria-label="mailbox folders"
  //   >
  //     {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
  //     <Drawer

  //       variant="temporary"
  //       open={mobileOpen}
  //       onClose={handleDrawerToggle}
  //       ModalProps={{
  //         keepMounted: true, // Better open performance on mobile.
  //       }}
  //       sx={{
  //         display: { xs: 'block', sm: 'none' },
  //         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
  //       }}
  //     >
  //       {drawer}
  //     </Drawer>
  //     <Drawer
  //       variant="permanent"
  //       sx={{
  //         display: { xs: 'none', sm: 'block' },
  //         '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
  //       }}
  //       open
  //     >
  //       {drawer}
  //     </Drawer>
  //   </Box>
  //   <Box
  //     component="main"
  //     sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
  //   >
  //     <Toolbar />
  //     <div id="detail">
  //      <Outlet />
  //      </div>
  //   </Box>
  // </Box>

}