import { Content } from "../Models/Content";
import { Category } from "../Models/Enums";



export async function LinkedListLoader(){
let contentImageUrls : string[] = [];
let contentId : string = "2";
let contentTitle : string = "Linked List";
let contentDescription : string = `A linked list is the most sought-after data structure when it comes to handling dynamic data elements. A linked list consists of a data element known as a node. And each node consists of two fields: one field has data, and in the second field, the node has an address that keeps a reference to the next node.`
let contentIconIndex = 26;
let contentCategory = Category["Data Structure"];
let contentTimeComplexity = "ASSUMED TIME COMPLEXITY : O(N)"

let linkedListContent = new Content(contentId,contentTitle, contentDescription,
contentIconIndex,contentCategory,contentImageUrls, contentTimeComplexity
)
    return(
        linkedListContent
    )
}