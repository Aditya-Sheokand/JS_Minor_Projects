const Countvalue=document.querySelector('#values_box');

const increment=()=>
{
    let value=parseInt(Countvalue.innerText);
    value=value+1;

   
    Countvalue.innerText=value;
}

const decrement=()=>
{
    let value=parseInt(Countvalue.innerText);
    value=value-1;
    
    Countvalue.innerText=value;
}

