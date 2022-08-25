let table={
    columnreorder:false,
    rowheight:0,
    tableheight:0,
    totalcolumn:1,
    columns:[],
    aboutdata:{
        datatype:"Manual",
        datavalue:""
    }
}
//reorder-element functionality
function changingvalue(e){
    if(e.target.value==="true"){
        table.columnreorder=true
    }else{
        table.columnreorder=false
    }   
}
//row-height-element functionality
let tableincomplete=false;
function focusOnRowElement(e){    
    checkingTableHeight(e).then(addingborder).catch(console.log)
   
}
function blurOnRowElement(e){
    let element=e.target   
    removeingborder(element)
}
function focusOnTableElement(e){
    let element=e.target
    if(!tableincomplete){
        addingborder(element)
    }
}
function blurOnTableElement(e){
    let element=e.target
    let  value=element.value
    table.tableheight=value
    if(tableincomplete){
        tableincomplete=false       
        element.classList.remove('adderror')
    }else{
        removeingborder(element)
    }
   
}
function assingTableHeight(e){
    let value=e.target.value    
    let tableelement=document.querySelector('.component-overall')   
    tableelement.style.height=`${value}px`
}
function assingRowHeight(e){   
    let element=e.target
   if(!tableincomplete){       
     let value=element.value    
     table.rowheight=value     
   }else{
       element.value=''
   }
   
}
function checkingTableHeight(e){
    return new Promise((resolve,reject)=>{
        let element=e.target
        if(table.tableheight){           
            resolve(element)
        }else{
            document.querySelector('#tableinput').classList.add('adderror')
            tableincomplete=true          
            reject("tableheight must be required")
        }
    })
}
//common functionality
function addingborder(element){
    element.classList.add('borderadding')
}
function removeingborder(element){
    element.classList.remove('borderadding')
}
////column-details-element functionality

function addingcolumn(e){   
    table.totalcolumn+=1    
   let cloningelement=e.target.parentElement.parentElement.parentElement  
   let columnno=cloningelement.getAttribute('columnno')/1
   let container=cloningelement.parentElement
   let clonedelement=cloningelement.cloneNode(true)
   clonedelement.setAttribute('columnno',columnno+1)
   let  elementAtIndex=container.children[columnno]   
   if(elementAtIndex){      
      container.insertBefore(clonedelement,elementAtIndex)
   }else{
    container.appendChild(clonedelement)
   }  
   for(let i=0;i<table.totalcolumn;i++){
       container.children[i].setAttribute('columnno',i+1)      
   }
    addColumnAtSpecIndex(columnno+1)
}
function checkingColumn(e){
    return new Promise((resolve,reject)=>{
        if(table.totalcolumn!==1){            
            resolve(e)
        }else{
            reject('there should be one column')
        }
    })
}
function removingcolumnelement(e){    
    let target=e.target.parentElement.parentElement.parentElement  
    let columnno=target.getAttribute('columnno')/1
    console.log(columnno)
    let container=target.parentElement
    table.columns.splice(`${columnno-1}`,1)
    target.remove()
    table.totalcolumn-=1
    removeColumnAtSpecIndex(columnno)
    for(let i=0;i<table.totalcolumn;i++){
        container.children[i].setAttribute('columnno',i+1)
     }
}
function removingcolumn(e){
    checkingColumn(e).then(removingcolumnelement).catch(alert)
}
//data-value-component-componnet
function changingDataType(e){
    let element=e.target
    let value=element.value
    table.aboutdata.datatype=value
}
function onloading(){   
    let container=document.querySelector('.childrencontainer')
    let Sno=creatingelement()
    Sno.innerHTML='S.No'  
    container.appendChild(Sno)
    addColumnAtSpecIndex(1)    
}
function creatingelement(){
    let element=document.createElement('div')
    element.classList.add('element')
    return element
}
function settingGridTemplateColumn(){
    let  gridContainer=document.querySelector('.childrencontainer')
    gridContainer.style.gridTemplateColumns = ` auto`;
    table.columns.forEach(()=>{
        gridContainer.style.gridTemplateColumns += ` 1fr`;      
    })

}
function addColumnAtSpecIndex(index){
    let container=document.querySelector('.childrencontainer')
    let elementInIndex=container.children[index]
    let newElement=creatingelement()
    if(elementInIndex){
        table.columns.splice(`${index-1}`,0,{})
        container.insertBefore(newElement,elementInIndex)
    }else{
        table.columns.push({})
        container.appendChild(newElement)
    }
    settingGridTemplateColumn()
}
function removeColumnAtSpecIndex(index){
    let container=document.querySelector('.childrencontainer')
    let targetElement=container.children[index]
    targetElement.remove()
    settingGridTemplateColumn()
}
function returningIndexOfParent(element){
    let target=element.parentElement.parentElement.parentElement   
    return target.getAttribute('columnno')/1
}
function focusOnColumnNameElement(e){
  let element=e.target
  addingborder(element)
}
function blurOnColumnNameElement(e){
    let element=e.target
    let index=returningIndexOfParent(element)   
    let value=element.value    
    table.columns[index-1]["columnName"]=value
    removeingborder(element)
    renderingColumnName()
}
function renderingColumnName(){    
    let container=document.querySelector('.childrencontainer')
    table.columns.forEach((x,index)=>{
        if(x.columnName){
          container.children[index+1].innerHTML=x.columnName
        }
    })
}