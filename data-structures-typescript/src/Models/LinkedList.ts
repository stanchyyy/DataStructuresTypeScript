export class ListNode implements IListNode{
    data:string;
    next!: ListNode;
    previous!:ListNode;
    constructor(data : string) {
        this.data = data;
    }
}

export interface IListNode{
    data:string;
    next:ListNode;
    previous:ListNode;
}

export class LinkedLst implements IlinkedList{
    head!:ListNode;


    Add(data:string){
        let node = new ListNode(data);
        let current:ListNode;
        if(this.head===undefined){
            this.head=node;
            return;
        }
        else{
            current=this.head;
        }
        while(current.next){
            current=current.next;

        }
        node.previous=current;
        current.next = node;
    }
}

export interface IlinkedList{
    head : ListNode;
    Add(data:string):void
}