let id = 1; 
let randomAdvice = "LOVE YOURSEL BEFORE EVERYONE";

async function adviceGen(){
    const advice =	`https://api.adviceslip.com/advice`;
    const fetchAdvice = await fetch(advice);
    console.log(fetchAdvice);
   

    const data = await fetchAdvice.json();
    console.log(data);
     id = data.slip.id;
     randomAdvice = data.slip.advice;


   
 }
 



let dice = document.getElementById("dicerotate");

dice.onclick = function(){
    dice.style.transform = 
    adviceGen();
    document.getElementById("header").innerHTML=`ADVICE  # ${id}`;
    document.getElementById("advice").innerHTML=randomAdvice;
    
    
}