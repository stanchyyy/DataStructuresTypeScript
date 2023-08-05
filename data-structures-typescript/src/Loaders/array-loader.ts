import { Content } from "../Models/Content";
import { Category } from "../Models/Enums";



export async function ArrayLoader(){
let contentImageUrls : string[] = [];
let contentId : string = "1";
let contentTitle : string = "Array";
let contentDescription : string = `Description
In JavaScript, arrays aren't primitives but are instead Array objects with the following core characteristics:

JavaScript arrays are resizable and can contain a mix of different data types. (When those characteristics are undesirable, use typed arrays instead.)
JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.
JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.
JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).`
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