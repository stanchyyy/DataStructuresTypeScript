import { Category } from "./Enums" 

export class NavContent implements INavContent{
    constructor(
        public title : string,
        public iconIndex : number,
        public category : Category = Category.Undefined,
    ){}
}



export interface INavContent{
         title : string,
         iconIndex : number,
         category : Category,
}

