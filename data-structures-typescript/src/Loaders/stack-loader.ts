import { Content } from "../Models/Content";
import { Category } from "../Models/Enums";



export async function StackLoader(){
let contentImageUrls : string[] = [];
let contentId : string = "3";
let contentTitle : string = "Stack";
let contentDescription : string = `
Stacks in Data Structures is a linear type of data structure that follows the LIFO (Last-In-First-Out) principle and allows insertion and deletion operations from one end of the stack data structure, that is top. Implementation of the stack can be done by contiguous memory which is an array, and non-contiguous memory which is a linked list. Stack plays a vital role in many applications.`
let contentIconIndex = 26;
let contentCategory = Category["Data Structure"];
let contentTimeComplexity = "ASSUMED TIME COMPLEXITY : O(N)"

let arrayContent = new Content(contentId,contentTitle, contentDescription,
contentIconIndex,contentCategory,contentImageUrls, contentTimeComplexity
)
    return(
        arrayContent
    )
}