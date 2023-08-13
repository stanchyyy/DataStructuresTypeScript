import Array, {ArraySearch} from "./array";
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import {  RouteObject, RouterProvider, createMemoryRouter } from "react-router-dom";
import { ArrayLoader } from "../Loaders/array-loader";
import Root from "./root";
import App from "../App";


 //ARRANGE

let index = "10";
let value = "Watermelon";

  test("array insert",async ()=> {

    const routes = [
      {
        path: "/",
        element: <Array />,
        loader : ArrayLoader
      },
    ];

    const router = createMemoryRouter(routes);


     render(<RouterProvider router={router} />);
     const insertIndexElement =  await screen.findByLabelText("Index");
     const insertValueElement = await screen.findByLabelText("Value");
     const insertButton = await screen.findByRole("button",{name:"Insert"});

     // eslint-disable-next-line testing-library/no-unnecessary-act
     act(() => {
      userEvent.type(insertIndexElement,index);
      userEvent.type(insertValueElement,value);
      userEvent.click(insertButton);
     })



      //  ASSERT
     expect( await screen.findByText(value)).toBeInTheDocument();
  });

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

test("array search no search value",()=>{
  let searchResult = ArraySearch(arraySearchOriginalValue,"");
  expect(searchResult.length).toBe(arraySearchOriginalValue.length);
})

test("array search no result value",()=>{
  let searchResult = ArraySearch(arraySearchOriginalValue,"Trabanth");
  expect(searchResult[0]).toBe("No Results");
})