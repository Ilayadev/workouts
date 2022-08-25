function searchaction(){
    var ele=document.querySelector('.search-box');
    ele.style.width=100+'%';
    ele.style.transition='width 0.5s';  
   
}
function cancelingsearch(){
    var ele=document.querySelector('.search-box');
    ele.style.width=70+'%';
    ele.style.transition='width 0.5s';  
   
}
function filteraction(){
    var ele=document.querySelector('.filt-hidd-con');
    ele.style.left='0%';   
    ele.style.transition='0.5s';
    var main=document.querySelector('.main');
    main.style.opacity='0.5';
   
}
function cancelingfilt(){
    var ele=document.querySelector('.filt-hidd-con');
    ele.style.left='-100%';
    var main=document.querySelector('.main');
    main.style.opacity='1';
}
function arrowaction(){
    var ele=document.querySelector('.drop-con');
    ele.style.display='block';
}
function arrowdropdown(){
    var ele=document.querySelector('.icon-drop-con');
    ele.style.display='block';
}
function loader(){
    var  loader=document.querySelector('.loader')
    loader.style.width='40%';
    loader.style.transition='1s';
    setTimeout(() => {
        loader.style.width='70%';
    loader.style.transition='2s';
    }, 1000);
    setTimeout(() => {
        loader.style.width='100%';
    loader.style.transition='1s';
    }, 3000);
    setTimeout(() => {
        document.querySelector('.animation-con').style.display='none';
        document.querySelector('.container').style.display='grid';
    }, 4000);
}
function themechanging(){
    var tags=document.getElementsByTagName('link');
    var light;
    var dark;
    for(var i=0;i<tags.length;i++){
        var att=tags[i].getAttribute('href');
        if(att=='lighttheme.css'){
            light=tags[i];
        }
        else if(att=='darktheme.css'){
            dark=tags[i];
        }
    }
    var dis=light.hasAttribute('disabled');
    if(dis==true){
        light.removeAttribute('disabled');
        dark.setAttribute('disabled',true);
    }else{
        dark.removeAttribute('disabled');
        light.setAttribute('disabled',true);
    }
}
