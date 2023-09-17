export class MusicTrack implements IMusicTrack{
    author:string;
    song:string;
    lenght: TimeRanges;
    constructor(autor:string,song:string,lenght:TimeRanges){
        this.author=autor;
        this.song=song;
        this.lenght=lenght;
    }
}

export interface IMusicTrack{
    author:string;
    song:string;
    lenght: TimeRanges;
}