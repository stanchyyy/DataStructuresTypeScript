import { Box,  Grid, IconButton, List, ListItem, Stack,  Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { IContent } from "../Models/Content";
import SkipPreviousRoundedIcon from '@mui/icons-material/SkipPreviousRounded';
import SkipNextRoundedIcon from '@mui/icons-material/SkipNextRounded';
import PlayArrowRoundedIcon from '@mui/icons-material/PlayArrowRounded';
import PauseCircleRoundedIcon from '@mui/icons-material/PauseCircleRounded';
import {  useEffect, useState } from "react";
import {  LinkedLst, ListNode } from "../Models/LinkedList";
import ReactPlayer from "react-player";
import {  MusicTrack } from "../Models/MusicTrack";



 const  MusicPlayer  = ()=>{
  const [musicTracks,setMusicTracks]=useState<MusicTrack[]>([]);
  const [playlist,setPlaylist] = useState<LinkedLst>(new LinkedLst());
  const [currentTrack,setCurrentTrack] = useState<ListNode>();
  const [playing,setPlaying] = useState(false);
 

  useEffect(()=>{
    async function fetchTracks(){
    try{
    fetch("http://localhost:3001/tracks")
    .then((result)=>result.json())
    .then((tracks)=>{
      if (!ignore){
        console.log(tracks);
        let newTracks:MusicTrack[] = tracks.map((track:MusicTrack)=>new MusicTrack(track.id,track.author,track.title,track.lenght,track.src));
        setMusicTracks(newTracks);
}})} catch(error){
  console.log(error);
}}

    let ignore = false;
    fetchTracks();  

    return () => {
      ignore = true;
    };
 },[])


 useEffect(()=>{
  let newPlaylist = new LinkedLst();
  for(let i=0;i<musicTracks.length;i++){
    newPlaylist.Add(musicTracks[i]);
    setPlaylist(newPlaylist);
  }

 },[musicTracks])

 useEffect(()=>{
  setCurrentTrack(playlist.head);  

 },[playlist])



  function handleClick(){
    setPlaying(!playing);
  }

if(currentTrack !== undefined){
  return (
    <Grid  sx={{ margin:"auto", width:"80%", justifyContent: "center",  alignItems: "center",border:"1px, solid, black" }}>
    <fieldset >
    <legend >Ampwin</legend>
      <Grid sx={{padding:"0.5rem"}}>
      <Typography variant="h4" gutterBottom height={"5.5rem"} margin={"auto"} display={"grid"}>
      {`${currentTrack.data.author} - ${currentTrack.data.title}`}
      </Typography>
      <ReactPlayer width={"100%"} url={currentTrack.data.src} playing={playing} controls={false}/>
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

        {musicTracks.map((track)=>{return (
          <List sx={{display: "grid", textAlign:"start"}} >
          <ListItem >{`${track.author} - ${track.title} ${track.lenght}`}
          </ListItem>
      </List>
        )})}
  </Box>
    </fieldset>
    </Grid>
  )}else{
    return(
      <div>Loading....</div>
    )
  }
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