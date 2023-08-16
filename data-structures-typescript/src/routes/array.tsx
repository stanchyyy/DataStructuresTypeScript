import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import { Button, Stack } from "@mui/material";
import { FormEvent, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { IContent } from "../Models/Content";


export function ArrayInsert(event: FormEvent<HTMLFormElement>, array: string[], index: number, value: string): string[] {
  event.preventDefault();
  let result: string[] = [...array];
  result[index] = value;
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
  const [arrayInsert, setArrayInsert] = useState(["Apple", "Pear", "Peach", "Mango", "Banana"]);
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
      <form onSubmit={(event => setArrayInsert(ArrayInsert(event, arrayInsert, index, value)))}>
        <TextField size="small" id="insert-Index" label="Index" name="index" variant="outlined" onChange={(event => setIndex(+event.target.value))} />
        <TextField size="small" id="Insert-Value" label="Value" name="value" variant="outlined" onChange={(event => setValue(event.target.value))} />
        <Button size="medium" variant="outlined" type="submit" id="insert-array-submit">Insert</Button>
      </form>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {arrayInsert.map(element => <Chip label={element} variant="outlined" />)}
      </Stack>
      <div>
        {loadedData.complexityAnalysis}
      </div>
      <Typography variant="h6" display="block" gutterBottom>
        Search in array
      </Typography>
      <Typography variant="body1" gutterBottom>
        Linear Search is defined as a sequential search algorithm that starts at one end and goes through each element of a list until the desired element is found, otherwise the search continues till the end of the data set.
      </Typography>
      <form>
        <TextField size="small" id="Search-Value" label="Search Value" name="search-value" variant="outlined" onChange={(event => setArraySearch(ArraySearch(arraySearchOriginalValue, event.target.value)))} />
      </form>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {arraySearch.map(element => <Chip label={element} variant="outlined" />)}
      </Stack>
      <div>
        {loadedData.complexityAnalysis}
      </div>
      <Typography variant="h6" display="block" gutterBottom>
        Multidimensional array
      </Typography>
      <Typography variant="body1" gutterBottom>
      A multi-dimensional array can be termed as an array of arrays that stores homogeneous data in tabular form. Data in multidimensional arrays is generally stored in row-major order in the memory.
      </Typography>
      <form>
        <TextField size="small" id="Search-Value" label="Search Value" name="search-value" variant="outlined" onChange={(event => setArraySearch(ArraySearch(arraySearchOriginalValue, event.target.value)))} />
      </form>
      <Stack spacing={{ xs: 1, sm: 2 }} direction="row" useFlexGap flexWrap="wrap">
        {arraySearch.map(element => <Chip label={element} variant="outlined" />)}
      </Stack>
      <div>
        {loadedData.complexityAnalysis}
      </div>
    </div>
  )

}