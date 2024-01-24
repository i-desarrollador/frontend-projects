// const output=document.getElementById('output');
// const button=document.getElementsByClassName('buttons');
// console.log(output.innerHTML)
// button.addEventListener("click",()=>{
//     output.innerHTML=""
// })
// output.innerHTML=12781
// console.log(output.innerHTML)

// console.log(1)

// let input = document.getElementById('output');
// let buttons = document.querySelectorAll('button');

// let string = "";
// let arr = Array.from(buttons);
// arr.forEach(button => {
//     button.addEventListener('click', (e) =>{
//         if(input.value==0 && e.target.innerHTML=='='){
//             input.value=0;
//         }
//         else if(e.target.innerHTML == '='){
//             string = eval(string);
//             input.value = string;
//         }

//         else if(e.target.innerHTML == 'AC'){
//             string = "";
//             input.value = string;
//         }
//         else if(e.target.innerHTML == 'DEL'){
//             string = string.substring(0, string.length-1);
//             input.value = string;
//         }
//         else{
//             string += e.target.innerHTML;
//             input.value = string;
//         }
        
//     })
// })
let input=document.getElementById('output');
let buttons=document.querySelectorAll('button');
let string='';
let arr=Array.from(buttons);
arr.forEach(button=>{
 button.addEventListener('click',(e)=>{
    if(input.value==0 && e.target.innerHTML=='='){
        input.value=0
    }
    else if(e.target.innerHTML=='='){
        string=eval(string)
        input.value=string
    }
    else if(e.target.innerHTML=='AC'){
        string=''
        input.value=string
    }
    else if(e.target.innerHTML=='DEL'){
        string=string.substring(0,string.length-1)
        input.value=string
    }
    else{
        string+=e.target.innerHTML
        input.value=string
    }
 })
})