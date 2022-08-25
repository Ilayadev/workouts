// function changingheight(height,time){
//    return new Promise((resolve,reject)=>{
//        let element:=document.querySelector('.targetelement')
//        let defaultheight=element.getBoundingClientRect().height
//        let targetheight=height-defaultheight
//        let timeperheight=time/targetheight        
//        let setinter=setInterval(setheight,timeperheight)
//        function setheight(){
//            let currentheight=element.getBoundingClientRect().height
//            if(currentheight===height){
//                clearInterval(setinter)
//                resolve('the height is rechead')
//            }else{
//              element.style.height=`${currentheight+1}px`
//            }
//        }     
//    })
// }
function clicking() {
    // changingheight(200,1000).then(console.log)
}
clicking();
function changing(e) {
    console.log(e.target);
}
