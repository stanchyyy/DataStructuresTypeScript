import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Button } from "@mui/material";
import { ChangeEvent, FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IContent } from "../Models/Content";




function UpdateArray(array : string[],index : number,value:string):string[]{
    let result : string[] = [...array];
    result[index] = value;
  return(
    result
  )
}

function CreateChipArrayElement(array:string[]):JSX.Element[]{
  return(
  array.map(element=>
    <Chip label={element} variant="outlined" />
  ))
}

function ArrayInsert(){
  const [array,setArray] = useState(["Apple","Pear","Peach","Mango","Banana"]);
  const [index, setIndex]  = useState<number>(-1);
  const [value,setValue] = useState("");

  const handleIndexChange = (event: ChangeEvent<HTMLTextAreaElement>):void=>{
    let numericIndex:number = +event.target.value;
    setIndex(numericIndex);
  }
  const handleValueChange = (event: ChangeEvent<HTMLTextAreaElement>):void=>{
    setValue(event.target.value);
  }


  const handleSubmit = (event: FormEvent<HTMLFormElement>):void=>{
    event.preventDefault();
    let result : string[] = [...array];
    result[index] = value;
    setArray(result)
  }

return(
  <>
  <form onSubmit={handleSubmit}>
      <TextField size="small" id="insert-Index" label="Index" name="index" variant="outlined" onChange={handleIndexChange}/>
      <TextField size="small" id="Insert-Value" label="Value" name="value" variant="outlined" onChange={handleValueChange}/>
      <Button size="medium" variant="outlined" type="submit">Insert</Button>
      </form>
            <Typography variant="h4" gutterBottom>
            {CreateChipArrayElement(array)}
          </Typography>
    </>
)


}


export default function Array() {
  const loadedData  = useLoaderData() as IContent;
  return (
    <div id="contact">
            <Typography variant="h3" gutterBottom>
        {loadedData.title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {loadedData.description}
      </Typography>
      <Typography variant="h6" display="block" gutterBottom>
       Insertion in array
      </Typography>
      <Typography variant="body1" gutterBottom>
      We try to insert a value to a particular array index position, as the array provides random access it can be done easily using the assignment operator.
      </Typography>
      {ArrayInsert()}
      <div>
        {loadedData.complexityAnalysis}
      </div>
      <Typography variant="h6" display="block" gutterBottom>
       Search in Array
      </Typography>
      <Typography variant="body1" gutterBottom>
      Searching is one of the most common operations performed in an array. Array searching can be defined as the operation of finding a particular element or a group of elements in the array.
      </Typography>
      {ArrayInsert()}
      <div>
        {loadedData.complexityAnalysis}
      </div>
      </div>
      )
      
}