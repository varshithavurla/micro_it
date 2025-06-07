let display = document.querySelector('.inputfield');
let buttons = document.querySelectorAll('button');

let str="";
let arr=[];
for(let i=0;i<buttons.length;i++){
    arr.push(buttons[i]);
}
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            str=eval(str);
            display.value=str;
        }
        else if(e.target.innerHTML=='AC'){
            str="";
            display.value=str;
        }
        else if(e.target.innerHTML=='DEL'){
            str=str.substring(0,str.length-1);
            display.value=str;
        }
        else{
            str+=e.target.innerHTML;
            display.value=str;
        }
    })
})