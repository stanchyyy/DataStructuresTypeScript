import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Button, Grid, Stack } from "@mui/material";
import { FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IContent } from "../Models/Content";


export function ArrayInsert(event: FormEvent<HTMLFormElement>, array: string[], index: number, value: string): string[] {
  event.preventDefault();
  let result: string[] = [...array];
  if(index<result.length){
    result.splice(index,0,value);
  }
  else {
    for(let i = result.length;i<index;i++){
      result.splice(i,0,"-");
    }
     result[index] = value;}
  return (
    result
  )
}

export function ArraySearch(array: string[], value: string): string[] {
  let arrayToLower: string[] = array.map(element => {
    return element.toLocaleLowerCase();
  })
  let searchValueToLower: string = value.toLocaleLowerCase();
  let searchResult = arrayToLower.filter((element) => { return element.includes(searchValueToLower) });
  let matchedIndexes: number[] = [];
  let result: string[] = [];

  if (searchValueToLower === "") {
    result = array;
  }
  if (searchResult.length === 0) {
    result = ["No Results"];
  }
  if (searchResult.length > 0 && searchValueToLower.length > 0) {
    for (let i = 0; i < arrayToLower.length; i++) {
      if (arrayToLower[i].includes(searchValueToLower)) {
        matchedIndexes.push(i);
      }
    }
    for (let i = 0; i < matchedIndexes.length; i++) {
      result.push(array[matchedIndexes[i]]);
    }
  }
  return result;
}

export default function Array() {
  const [arrayInsert, setArrayInsert] = useState(["Apple", "Pear", "Peach", "Mango", "Banana", "Pineapple","Tomato","Lemon","Orange"]);
  const [index, setIndex] = useState<number>(-1);
  const [value, setValue] = useState("");
  const loadedData = useLoaderData() as IContent;
  const arraySearchOriginalValue = [
    "Abarth",
    "Alfa Romeo",
    "Aston Martin",
    "Audi",
    "Audi RS",
    "Bentley",
    "BMW",
    "Bugatti",
    "Cadillac",
    "Chevrolet",
    "Chrysler",
    "Citroën",
    "Dacia",
    "Daewoo",
    "Daihatsu",
    "Dodge",
    "Donkervoort",
    "DS",
    "Ferrari",
    "Fiat",
    "Fisker",
    "Ford",
    "Honda",
    "Hummer",
    "Hyundai",
    "Infiniti",
    "Iveco",
    "Jaguar",
    "Jeep",
    "Kia",
    "KTM",
    "Lada",
    "Lamborghini",
    "Lancia",
    "Land Rover",
    "Landwind",
    "Lexus",
    "Lotus",
    "Maserati",
    "Maybach",
    "Mazda",
    "McLaren",
    "Mercedes-Benz",
    "MG",
    "Mini",
    "Mitsubishi",
    "Morgan",
    "Nissan",
    "Opel",
    "Peugeot",
    "Porsche",
    "Renault",
    "Rolls-Royce",
    "Rover",
    "Saab",
    "Seat",
    "Skoda",
    "Smart",
    "SsangYong",
    "Subaru",
    "Suzuki",
    "Tesla",
    "Toyota",
    "Volkswagen",
    "Volvo"
  ];
  const [arraySearch, setArraySearch] = useState(arraySearchOriginalValue);


  return (
    <>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ textAlign: "left", borderBottom: "0.1rem solid" }} >
        {loadedData.title}
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid >
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            {loadedData.description}
          </Typography>
        </Grid>

      </Grid>
      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ textAlign: "left", borderBottom: "0.1rem solid" }} >
        Insertion in array
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid >
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            We try to insert a value to a particular array index position, as the array provides random access it can be done easily using the assignment operator.
          </Typography>
        </Grid>
      </Grid>
      <Grid container   sx={{ margin: "auto", width: "40%",border:"1px, solid, black" }}>
      <fieldset >
      <legend >Insert</legend>
      <form onSubmit={(event => setArrayInsert(ArrayInsert(event, arrayInsert, index, value)))}>
        <Grid sx={{padding:"0.5rem"}}>
        <TextField size="small" required id="insert-Index" label="Index" name="index" variant="outlined" color="secondary"    onChange={(event => setIndex(+event.target.value))} />
        </Grid>
        <Grid sx={{padding:"0.5rem"}}>
        <TextField size="small" color="secondary" required id="Insert-Value" label="Value" name="value" variant="outlined"  onChange={(event => setValue(event.target.value))} />
        </Grid>
        <Grid sx={{padding:"0.5rem"}}>
        <Button  size="medium" variant="contained" type="submit" id="insert-array-submit" color="secondary">Insert</Button>
        </Grid>
      </form>
      </fieldset>
      </Grid>
      <Grid sx={{padding:"0.5rem"}} >
      <Stack spacing={{ xs: 1, sm: 2 }} sx={{ margin: "1rem" }} direction="row" useFlexGap flexWrap="wrap" alignContent={"center"}>
        {arrayInsert.map(element => <Button  variant="outlined" color="secondary" >{element}</Button>)}
      </Stack>
      </Grid>

      <Typography variant="h3" gutterBottom color="secondary.dark" sx={{ textAlign: "left", borderBottom: "0.1rem solid" }} >
        Search in array
      </Typography>
      <Grid container sx={{ marginBottom: "1.5rem" }}>
        <Grid >
          <Typography variant="subtitle1" gutterBottom color={"#5C5470"} sx={{ display: "flex", textAlign: "left", alignSelf: "center", flexFlow: "wrap" }}>
            Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.
          </Typography>
        </Grid>
      </Grid>
      <Grid container  sx={{ margin: "auto", width: "40%",border:"1px, solid, black" }}>
      <fieldset >
      <legend >Search</legend>
      <form>
      <Grid sx={{padding:"0.5rem"}}>
        <TextField required size="small" color="secondary" id="Search-Value" label="Search Value" name="search-value" variant="outlined" onChange={(event => setArraySearch(ArraySearch(arraySearchOriginalValue, event.target.value)))} />
      </Grid>
      </form>
      </fieldset >
      </Grid>
      <Grid sx={{padding:"0.5rem"}} >
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" sx={{ margin: "1rem" }} useFlexGap flexWrap="wrap" alignContent={"center"}>
        {arraySearch.map(element => <Button  variant="outlined" color="secondary" >{element}</Button>)}
      </Stack>
      </Grid>

    </>
  )

}