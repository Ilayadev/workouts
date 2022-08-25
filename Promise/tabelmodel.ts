interface types{
    "string":string,
    "number":number,
    "boolean":boolean
}
interface tablemeta{
    rowheight:number,
    reorder:boolean,
    columnorder:string[]
    columns:{name:string,type:keyof types,editable:boolean}[],
   
}
let tablemeta:tablemeta={
    rowheight:20,
    reorder:false,
    columnorder:["Name"],
    columns:[{
        name:"Name",
        type:"string",
        editable:false
    }]
}