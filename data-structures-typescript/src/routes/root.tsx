import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, BottomNavigation, BottomNavigationAction, Card, CardContent, CardMedia, Container, List, ListItem, ListItemAvatar, ListItemText, Tab, Tabs } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import mernImage from "../Images/mern-stack2.png"
import compileVsRunImage from "../Images/compilevsrun.png"
import solidImage from "../Images/SOLID.png";
import undefinedImage from "../Images/undefined.png"





interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}


function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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


export default function Root() {
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

let formsMap = new Map<string, string>();
formsMap.set("Sign in","signIn");
formsMap.set("Sign up","signup");
formsMap.set("CRUD","crud");



  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  let listDataStructuresTab: JSX.Element[] = [];
  let listDataStructuresContent : JSX.Element[] = [];

  let index = 0;
  listDataStructuresTab.push(<Tab  label={"Home"} component={Link} to={"/"} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`}/>);
  listDataStructuresContent.push(
    <TabPanel value={tabValue} index={index} >
              <Typography variant="h3" gutterBottom color="secondary.dark" sx={{textAlign:"left", borderBottom:"0.1rem solid"}} >
        MERN stack
      </Typography>

      <Grid container sx={{marginBottom:"1.5rem"}}>
        <Grid xs={6}>

      <Typography variant="subtitle1" gutterBottom color={"#5C5470"}>
        This application has been build employing the MERN stack.
            <List  sx={{ listStyleType: 'disc', paddingLeft:"2rem" }}  >
                <ListItem sx={{ display: 'list-item', padding:"2px" }}>
                  <ListItemText primary="MongoDB — document database"/>
                </ListItem>
                <ListItem sx={{ display: 'list-item', padding:"2px" }}>
                  <ListItemText primary="Express(.js) — Node.js web framework"/>
                </ListItem>
                <ListItem sx={{ display: 'list-item', padding:"2px" }}>
                  <ListItemText primary="React(.js) — a client-side JavaScript framework"/>
                </ListItem>
                <ListItem sx={{ display: 'list-item', padding:"2px" }}>
                  <ListItemText primary="Node(.js) — the premier JavaScript web server"/>
                </ListItem>
            </List>
      </Typography>
        </Grid>
      <Grid xs={6}>
      <img src={mernImage} alt="MERN Stack" width={"100%"}/>
      </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{textAlign:"left", borderBottom:"0.1rem solid"}} >
        Type Script
      </Typography>
    <Box display={"flex"} sx={{marginBottom:"1.5rem"}} >
    <Grid container justifyContent={"space-around"}>
    <Card sx={{ maxWidth: "30%"}}>
      <CardMedia component="img"
        sx={{ height: "6rem" ,maxWidth:"8rem", margin: "auto",paddingTop:"1rem"}}
        image={compileVsRunImage}
        title="Type Script"
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          Compile time type checking
        </Typography>
        <Typography variant="body2" color="text.secondary">
        TypeScript uses compile time type checking. Which means it checks if the specified types match before running the code, not while running the code.


        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: "30%"}}>
      <CardMedia component="img"
        sx={{ height: "6rem" ,maxWidth:"8rem", margin: "auto",paddingTop:"1rem"}}
        image={solidImage}
        title="Type Script"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          TypeScript supports Interfaces
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Interfaces helps foster the O in SOLID - open for extention, closed for modification. Omiting interfaces makes future changes error prone.
        </Typography>
      </CardContent>
    </Card>
    <Card sx={{ maxWidth: "30%"}}>
      <CardMedia component="img"
        sx={{ height: "6rem" ,maxWidth:"8rem", margin: "auto",paddingTop:"1rem"}}
        image={undefinedImage}
        title="Type Script"
      />
      
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
        Static Typing
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Statically-typed languages require you to declare the data types of your variables before you use them. Similar to C#.
        </Typography>
      </CardContent>
    </Card>
    </Grid>
    </Box>
    <Typography variant="h3" gutterBottom color="secondary.dark" sx={{textAlign:"left", borderBottom:"0.1rem solid"}} >
        CI/CD
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{textAlign:"left"}} >
        Every commited & pushed code change triggers a Gitlab pipe. If the pipe succeeds executing all the Jest tests the changes are deployed to production. The host is a locally run Windows server machine virtualizing Ubuntu server that has Docker running on it. Gitlab and NGINX are containerized there.
      </Typography>
    </TabPanel>
  )
  index++;
  listDataStructuresTab.push(<Divider variant="middle" />);
  listDataStructuresContent.push(
    <TabPanel value={tabValue} index={index}>
      <Outlet/>
    </TabPanel>
  )
  index++;
  listDataStructuresTab.push(<Tab  label="Data Structures" disabled />);
  listDataStructuresContent.push(
    <TabPanel value={tabValue} index={index}>
      <Outlet/>
    </TabPanel>
  )
  index++;
  for (const [key, value] of dataStructuresMap) {
    listDataStructuresTab.push(
      <Tab  label={key} component={Link} to={`/${value}`} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`}/>
    )
    listDataStructuresContent.push(
      <TabPanel value={tabValue} index={index}>
        <Outlet/>
      </TabPanel>
    )
  index++;
  }
  listDataStructuresTab.push(<Divider variant="middle" />);
  listDataStructuresContent.push(
    <TabPanel value={tabValue} index={index}>
      <Outlet/>
    </TabPanel>
  )
  index++;
  listDataStructuresTab.push(<Tab  label="Forms" disabled />);
  listDataStructuresContent.push(
    <TabPanel value={tabValue} index={index}>
      <Outlet/>
    </TabPanel>
  )
  index++;
  for (const [key, value] of formsMap) {
    listDataStructuresTab.push(
      <Tab  label={key} component={Link} to={`/${value}`} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`}/>
    )
    listDataStructuresContent.push(
      <TabPanel value={tabValue} index={index}>
        <Outlet/>
      </TabPanel>
    )
  index++;
  }


  return (
    <Container maxWidth="lg" >
          <Grid container textAlign="center" sx={{ height: "10vh", alignContent: "center", alignItems: "center" }} bgcolor="#352F44">
      <Grid xs={6} display={"flex"} margin={"auto"} alignItems={"baseline"}>
        <Typography variant="h4" component="h2" color="#B9B4C7" marginRight="1rem" marginLeft="1rem">
          Promise.all()</Typography>
        <Link rel="noreferrer" to="/" onClick={()=>setTabValue(0)}>
          <Avatar sx={{ width: "3rem", height: "3rem" }}  >
            <AccountTreeIcon color="disabled" />
          </Avatar>
        </Link>
      </Grid>
      <Grid xs={6} display={"flex"} justifyContent={"right"} paddingRight={"3rem"} >
        <Link rel="noreferrer" to="https://www.linkedin.com/in/stanislav-atanasov-a0644a123/" >
          <LinkedInIcon color="primary" fontSize="large" />
        </Link>
        <Link rel="noreferrer" to="https://github.com/stanchyyy/data-structures-typescript"  >
          <GitHubIcon color="primary" fontSize="large" />
        </Link>
      </Grid>
    </Grid>
      <Grid container >
        <Grid xs={2} alignItems={"start"} display="flex">
      <Tabs 
        orientation="vertical"
        variant="scrollable"
        textColor="secondary"
        indicatorColor="secondary"
        value={tabValue}
        onChange={handleTabChange}
        aria-label="Vertical tabs"
        sx={{
           borderRight: 1, borderColor: 'divider' 
        }}>
        {listDataStructuresTab}
      </Tabs>
      </Grid>
      <Grid xs={10} >
        {listDataStructuresContent}
        </Grid>
        </Grid>
        <BottomNavigation showLabels sx={{fontSize:"5rem"}}>
        <BottomNavigationAction label={`All rights reserved ${new Date().getFullYear()}`} />
      </BottomNavigation>
    </Container>
  );
}