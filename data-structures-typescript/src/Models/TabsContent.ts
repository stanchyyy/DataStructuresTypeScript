export interface ITabsContent{
    label : string,
    link : string,
    disabled : boolean,
    category : string,
    order : number
}

export class TabsContent implements ITabsContent{
    constructor(
    public label : string,
    public disabled : boolean,
    public category : string,
    public order : number,
    public link : string,

    ){}
}