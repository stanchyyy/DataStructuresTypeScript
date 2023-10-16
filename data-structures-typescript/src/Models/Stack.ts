export enum Color{
    "#1B9C85",
    "purple",
    "#B9B4C7",
    "#CD6688",
    "#279EFF"
}

interface ILetter{
    letter:string;
    color: string;
    id : number;
}

export class Letter implements ILetter{
    letter:string;
    color: string;
    id: number;

    constructor(letter:string, color:string, id:number){
        this.letter=letter;
        this.color = color;
        this.id=id;
    }
}

interface IStackModel{
    
}

export class StackModel implements IStackModel{
    public element : ILetter[];
    private max : number;
    private stackTop : number;

    constructor(size:number){
        this.element = [];
        this.stackTop=-1;
        this.max=size;
    }

    push(item :Letter) :StackModel{
        if(this.stackTop===this.max-1){
            alert("Stack Overflow");
        }else{
            this.element[++this.stackTop] = item;
        }
        return this;
    }

    pop():StackModel{
        if(this.stackTop===-1){
            alert("Stack is empty");
        }else {
            this.stackTop--;
            this.element.pop();

        }
        return this;
    }
    last():ILetter |void{
        if(this.stackTop===-1){
            alert("Stack is empty");
            return ;
        }else {
        return this.element[this.element.length-1];
}}}