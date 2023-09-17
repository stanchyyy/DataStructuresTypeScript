import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Unstable_Grid2';
import { Avatar, Card, CardContent, CardMedia, Container, List, ListItem, ListItemText, Tab, Tabs } from "@mui/material";
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import mernImage from "../Images/mern-stack2.png"
import compileVsRunImage from "../Images/compilevsrun.png"
import solidImage from "../Images/SOLID.png";
import undefinedImage from "../Images/undefined.png"
import cicdImage from "../Images/CICD.png"
import tabsPanelData from '../Data/TabsPanelData.json';
import { TabsContent } from '../Models/TabsContent';


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


  const Header = () => {
    const headerTitle = "Promise.all()";
    
    return (
      <Grid container textAlign="center" sx={{ height: "10vh", alignContent: "center", alignItems: "center" }} bgcolor="#352F44">
        <Grid xs={6} display={"flex"} margin={"auto"} alignItems={"baseline"}>
          <Typography variant="h4" component="h2" color="#B9B4C7" marginRight="1rem" marginLeft="1rem">
            {headerTitle}</Typography>
          <a href="/"> <Avatar sx={{ width: "3rem", height: "3rem" }}  >
              <AccountTreeIcon color="disabled" />
            </Avatar></a>
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
    )
  }
  
  const HomeTabPanel = ()=>{
    return(
      <>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ textAlign: "center", borderBottom: "0.1rem solid" }} >
        MERN stack
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid xs={6}>
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            This application has been build employing the MERN stack.
            <List sx={{ listStyleType: 'disc', paddingLeft: "2rem" }}  >
              <ListItem sx={{ display: 'list-item', padding: "2px" }}>
                <ListItemText primary="MongoDB — document database" />
              </ListItem>
              <ListItem sx={{ display: 'list-item', padding: "2px" }}>
                <ListItemText primary="Express(.js) — Node.js web framework" />
              </ListItem>
              <ListItem sx={{ display: 'list-item', padding: "2px" }}>
                <ListItemText primary="React(.js) — a client-side JavaScript framework" />
              </ListItem>
              <ListItem sx={{ display: 'list-item', padding: "2px" }}>
                <ListItemText primary="Node(.js) — the premier JavaScript web server" />
              </ListItem>
            </List>
          </Typography>
        </Grid>
        <Grid xs={6}>
          <img src={mernImage} alt="MERN Stack" width={"70%"} />
        </Grid>
      </Grid>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ textAlign: "center", borderBottom: "0.1rem solid" }} >
        Type Script
      </Typography>
      <Box display={"flex"} sx={{ marginBottom: "1.5rem" }} >
        <Grid container justifyContent={"space-around"}>
          <Card sx={{ maxWidth: "30%" }}>
            <CardMedia component="img"
              sx={{ height: "6rem", maxWidth: "8rem", margin: "auto", paddingTop: "1rem" }}
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
          <Card sx={{ maxWidth: "30%" }}>
            <CardMedia component="img"
              sx={{ height: "6rem", maxWidth: "8rem", margin: "auto", paddingTop: "1rem" }}
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
          <Card sx={{ maxWidth: "30%" }}>
            <CardMedia component="img"
              sx={{ height: "6rem", maxWidth: "8rem", margin: "auto", paddingTop: "1rem" }}
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
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ textAlign: "center", borderBottom: "0.1rem solid" }} >
        CI/CD
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid xs={6}>
          <img src={cicdImage} alt="MERN Stack" width={"70%"} />
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            Code commited & pushed triggers a Gitlab pipe. If the pipe succeeds executing all the Jest / React testing library tests the changes are deployed to production. The host is a locally run Windows server machine virtualizing Ubuntu server that has Docker running on it. Gitlab and NGINX are containerized there.      </Typography>
        </Grid>
      </Grid>
      </>
    )
  }
  let listDataStructuresTab: JSX.Element[] = [];
  let listDataStructuresContent: JSX.Element[] = [];
  let tabData : TabsContent[] = tabsPanelData.map((data)=> new TabsContent(data.label,data.disabled,data.category,data.order,data.link));
  let tabDataAllOrders:number[] = tabData.map((data)=>data.order);
  let tabMaxOrder:number = Math.max(...tabDataAllOrders);
  const [tabValue, setTabValue] = React.useState(0);
  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  let index = 0;
  for (let order = 1; order <= tabMaxOrder; order++) {
    let currentTabSet = tabData.filter((data)=>data.order===order);
    for(let tab of currentTabSet){
      if(tab.disabled){
          listDataStructuresTab.push(<Tab label={tab.label} disabled />);
      }
      else (
        listDataStructuresTab.push(<Tab label={tab.label} component={Link} to={tab.link} id={`vertical-tab-${index}`} aria-controls={`vertical-tabpanel-${index}`} />)
      )
      if(tab.label==="Home"){
        listDataStructuresContent.push(
          <TabPanel value={tabValue} index={index} >
            <HomeTabPanel/>
          </TabPanel>
        )
      }
      else (
        listDataStructuresContent.push(
          <TabPanel value={tabValue} index={index}>
            <Outlet />
          </TabPanel>
        )
        )
      index++;
    }
    listDataStructuresTab.push(<Divider variant="middle" />);
  }

  const Footer = () => {

    const footerText =  `All rights reserved ${new Date().getFullYear()}.`;

    return (
      <Box
        sx={{
          backgroundColor: "#352F44",
          p: 2,
        }}
        component="footer"
      >
        <Container maxWidth="sm">
          <Typography variant="body2" color="#B9B4C7" align="center">
            {footerText}
          </Typography>
        </Container>
      </Box>
    )
  }

  return (
    <Container maxWidth="lg" >
      <Header />
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
      <Footer />
    </Container>
  );
}