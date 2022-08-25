personobj=[
    {
        name:'ilaya',
        age:16
    },
    {
        name:'dhivya',
        age:17
    },
    {
        name:'jesintha',
        age:90
    },
    {
        name:'sakthi',
        age:25
    },
    {
        name:'jawa',
        age:34
    },
    {
        name:'guna',
        age:60
    },
]
function takingperson(){
    var ran=Math.round(Math.random()*5);
    var person=personobj[ran];   
    creatingelement(person);
}
function creatingelement(per){
    var originalele=document.querySelector('.person');
    var copyele=originalele.cloneNode(true);
    copyele.removeAttribute('id');
    console.log(per.name);
    var nameel= copyele.querySelector('.name')
     nameel .innerHTML=per.name;
     var ageel=  copyele.querySelector('.age')
    ageel.innerHTML=per.age;
    document.querySelector('.container').appendChild(copyele);

}