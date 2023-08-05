import { Category } from "./Enums" 

export class Content implements IContent{
    constructor(
        public id : string,
        public title : string,
        public description : string,
        public iconIndex : number,
        public category : Category = Category.Undefined,
        public imageUrls : string[],
        public  complexityAnalysis : string
    ){}
}



export interface IContent{
         id : string,
         title : string,
         description : string,
         iconIndex : number,
         category : Category,
         imageUrls : string[],
         complexityAnalysis : string
}

