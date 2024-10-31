let a=document.getElementById("a");
let b=document.getElementById("b");
let buttonadd=document.getElementById("buttonadd");
let c=document.getElementById("c");

function suma(){
    c.value=Number(a.value) + Number(b.value)
}

buttonadd.addEventListener("click",suma());

buttonadd.addEventListener("click",(ev)=>{
    c.value=Number(a.value) + Number(b.value)
}); 