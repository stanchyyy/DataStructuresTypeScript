import { Box,  Grid, IconButton, List, ListItem, Stack,  Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { IContent } from "../Models/Content";
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import {  useState } from "react";
import {  LinkedLst } from "../Models/LinkedList";
import ReactPlayer from "react-player";



const MusicPlayer = ()=>{
  const musicTracks : string[] = [ "Roxette - It must have been love","Roxette - Spending my time","Roxette - Listen to your heart",
  "Roxette - The look", "Roxette - Fading like a flower"];
const playlist : LinkedLst = new LinkedLst();
for(let i=0;i<musicTracks.length;i++){
  playlist.Add(musicTracks[i]);
}

const [currentTrack,setCurrentTrack] = useState(playlist.head);
const [playing,setPlaying] = useState(false);
  
  function handleClick(){
    setPlaying(!playing);
  }

  return (
    <Grid  sx={{ margin:"auto", width:"80%", justifyContent: "center",  alignItems: "center",border:"1px, solid, black" }}>
    <fieldset >
    <legend >Ampwin</legend>
      <Grid sx={{padding:"0.5rem"}}>
      <Typography variant="h4" gutterBottom>
      {currentTrack.data}
      <ReactPlayer url='https://www.youtube.com/watch?v=LXb3EKWsInQ' playing={playing} controls={false}/>
      </Typography>
      </Grid>
      <Stack spacing={4} direction="row" margin={"auto"} width={"fit-content"}>
      <IconButton aria-label="previous" color="secondary" onClick={()=>{setCurrentTrack(currentTrack.previous)}} disabled={currentTrack.previous==null?true:false} >
        <SkipPreviousRoundedIcon fontSize="large"   />
      </IconButton >
      <IconButton aria-label="previous" color="secondary" onClick={handleClick}>
           {playing ? <PauseCircleRoundedIcon sx={{ fontSize:"3.5rem" }}  /> : <PlayArrowRoundedIcon sx={{ fontSize:"3.5rem" }}  />}
       </IconButton>
      <IconButton aria-label="previous" color="secondary" onClick={()=>{setCurrentTrack(currentTrack.next)}} disabled={currentTrack.next==null?true:false}>
        <SkipNextRoundedIcon fontSize="large"   />
      </IconButton>
       </Stack>
       <Box textAlign={"center"}>
      <List sx={{display: "inline-block"}}>
        <ListItem >
          Roxette - It must have been love
        </ListItem>
        <ListItem >
        Roxette - Spending my time
        </ListItem>
        <ListItem >
        Roxette - Listen to your heart
        </ListItem>
        <ListItem >
        Roxette - The look
        </ListItem>
        <ListItem >
        Roxette - Fading like a flower
        </ListItem>
      </List>
  </Box>
    </fieldset>
    </Grid>
  )
}




export default function LinkedList(){
    const loadedData = useLoaderData() as IContent;
    return(
        <>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ borderBottom: "0.1rem solid" }} >
        {loadedData.title}
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid >
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            {loadedData.description} 
          </Typography>
        </Grid>
      </Grid>
      <Typography variant="h4" gutterBottom color="secondary.dark" sx={{  borderBottom: "0.1rem solid" }} >
      Doubly Linked List - Music Player
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid >
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
          Music Player - Songs in the music player are linked to the previous and next songs. So you can play songs either from starting or ending of the list.
          </Typography>
        </Grid>
      </Grid>
      <MusicPlayer/>
      </>
    )
}