

export class Todo_Item{
    id:number;
    title:string;
    description:string;
    time:any;
    checkState: boolean;
    check:string;
    index:number;
    constructor(id:number,title:string,description:string,time:any, checkState: boolean){
        this.id=id;
        this.title=title;
        this.description=description;
        this.time=time;
        this.checkState = checkState;
        this.check="checked";
        this.index=0;
    }
}