export enum DotColors{
    "#ECEE81",
    "#8DDFCB",
    "#82A0D8",
    "#04364A",
    "#176B87",
    "#64CCC5"
}

interface iDot{
    color:DotColors
}

interface iQeueu{
    
}

export class Queue implements iQeueu{
    private elements : iDot[];
    private size : number;
    public front : number;
    private rear : number;
    constructor(size : number){
        this.elements = new Array<iDot>(size);
        this.size=size;
        this.front = 0;
        this.rear = 0;
    }

    Enquee( item : iDot):Queue{
        if(this.rear === this.size-1){
            alert("Queue Overflow");
        }
        else {
            this.elements[++this.rear]=item;
        }
        return this;
    }

    Dequeue():Queue{
        if(this.front===this.rear){
            alert("Queue is empty");
            
        }else{
            this.size--;
            this.elements.shift();
        }

        return this;
    }
    
    GetQueue():iDot[]{
        return this.elements;
    }

}
// comment