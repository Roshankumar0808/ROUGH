const sum = document.querySelector("#add");
const diff = document.querySelector("#sub");
const pro = document.querySelector("#mul");
const part = document.querySelector("#div");
const first = document.querySelector("#num1");
const second = document.querySelector("#num2");
const showresult = document.querySelector("#show-result");


function plus(){
    const s1 = Number(first.value);
    const s2 = Number(second.value);
    // const s = (s1+s2);
    const result = (s1+s2);
    
    showresult.innerText = result;
}
sum.addEventListener("click",plus) ;

function minus(){
    const s1 = Number(first.value);
    const s2 = Number(second.value);
    const s = (s1-s2);
    const result = (s)
    showresult.innerText = (s);
}
diff.addEventListener("click",minus) ;

function mul(){
    const s1 = Number(first.value);
    const s2 = Number(second.value);
    const s = (s1*s2);
    const result = (s)
    showresult.innerText = (s);
}
pro.addEventListener("click",mul) ;

function divd(){
    const s1 = Number(first.value);
    const s2 = Number(second.value);
    const s = (s1/s2);
    const result = (s)
    showresult.innerText = (s);
}
part.addEventListener("click",divd) ;

 