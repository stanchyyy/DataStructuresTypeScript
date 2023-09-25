export class MusicTrack implements IMusicTrack{
    id:number;
    src:string;
    author:string;
    title:string;
    lenght: string;
    constructor(id:number,author:string,title:string,lenght:string,src:string){
        this.author=author;
        this.src=src;
        this.title=title;
        this.lenght=lenght;
        this.id=id;
    }
}

export interface IMusicTrack{
    id:number;
    src:string;
    author:string;
    title:string;
    lenght: string;
}