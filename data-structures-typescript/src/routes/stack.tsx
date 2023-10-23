import { Avatar, Button, Grid, Stack, Typography } from "@mui/material";
import { useLoaderData } from "react-router-dom";
import { IContent } from "../Models/Content";
import {  useState } from "react";
import { Letter,Color, StackModel } from "../Models/Stack";


function scramble(word:string):string[]{
  let letterArray = word.split("");

  let j,k;

  for (let i = 0; i < letterArray.length; i++) {
    j = Math.floor(Math.random() * i)
    k = letterArray[i]
    letterArray[i] = letterArray[j]
    letterArray[j] = k
  }
  let result = letterArray;  
  return result;
  
}

function AvatarLetters (letters:string[]) : Letter[]{
  let avatarArray : Letter[] = [];

  for(let i =0;i<letters.length;i++){
    const newLetter = new Letter(letters[i],Color[i],i);
    avatarArray = [...avatarArray,newLetter];
  }
  return avatarArray;
}

function AvatarLettersComponent(avatarLetters:Letter[]){
  const [avatarStack,setAvatarStack] =useState<StackModel>( new StackModel(avatarLetters.length));
  const [scrambledLetters,setScrambledLetters] = useState<Letter[]>(avatarLetters);

  
  

   const handlePush = (pushedLetter : Letter)=>{
        setAvatarStack(avatarStack.push(pushedLetter));
        setScrambledLetters(scrambledLetters.filter(a=>a.id!==pushedLetter.id))
   }

   const handlePop = ()=>{
    console.log("poppin")
    const lastElement = avatarStack.last();
    if( typeof lastElement === "object"){
    setAvatarStack(avatarStack.pop());
    setScrambledLetters([...scrambledLetters,lastElement]);     
  }
}

  return(
    <Grid container   sx={{display: "flex:",  justifyContent: "center",  alignItems: "center"}}>
    <Grid xs={6} sx={{borderRight:"1px solid black",minHeight:"19rem" }}>
    <Stack direction="column" spacing={2} alignItems={"center"}>
       {scrambledLetters.map((avatar)=>( 
       <button onClick={()=>(handlePush(avatar))}>
                   <Avatar sx={{ bgcolor: avatar.color }}>{avatar.letter}
                   </Avatar>
                 </button>)
       )}
       </Stack>
    </Grid>
    <Grid xs={6}  sx={{minHeight:"19rem"}}>
    <Stack direction="column" spacing={2} alignItems={"center"}>
       {avatarStack.element.map((avatar)=>( 
       <button >
                   <Avatar sx={{ bgcolor: avatar.color }}>{avatar.letter}
                   </Avatar>
                 </button>)
       )}
       </Stack>

    </Grid>
    <Button sx={{marginTop:"1rem"}} size="large" color="secondary"  onClick = {()=>(handlePop())} variant="contained">Pop</Button>
  </Grid>
      
  )
}



export default function StackStructure() {
  const loadedData = useLoaderData() as IContent;
  const letters: string[] = scramble("SMART");
  const avatarLetters : Letter[] = AvatarLetters(letters);
  const [riddleStack,setRiddleStack] = useState<StackModel>();
  

  return (
    <>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{  borderBottom: "0.1rem solid" }} >
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
        Scramble game
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem"}}>
        <Grid >
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            Stack the words to get important objective setting principle.
          </Typography>
        </Grid>
      </Grid>
      {AvatarLettersComponent(avatarLetters)}
    </>
  )
}