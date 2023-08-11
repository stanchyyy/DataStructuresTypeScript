import React from "react";
import Array,{ArraySearch} from "./array";
import { render, screen } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";
import { ArrayLoader } from "../Loaders/array-loader";
import Root from "./root";
import { BrowserRouter } from "react-router-dom";

 //ARRANGE

let index = "10";
let value = "Watermelon";

test("array insert",()=>{
  render(<Index />, {wrapper: BrowserRouter})
    const arrayNav = screen.getByTestId("Array");
    const insertIndexElement = screen.getByLabelText("Index");
    const insertValueElement = screen.getByLabelText("Value");
    const insertButton = screen.getByTestId("insert-array-submit");
    
 // ACT
    userEvent.click(arrayNav);
    userEvent.type(insertIndexElement,index);
    userEvent.type(insertValueElement,value);
    userEvent.click(insertButton);


//  ASSERT

    expect(screen.getByText(value)).toBeInTheDocument();
})

 //ARRANGE


let searchvalue = "Audi";
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

test("array search",()=>{
  let searchResult = ArraySearch(arraySearchOriginalValue,searchvalue);
  expect(searchResult[0]).toBe("Audi");
})