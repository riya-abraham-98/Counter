document.getElementById("increase").onclick = function(){
    let increase = document.getElementById("counter").textContent ;
    increase = Number(increase)+1;
    document.getElementById("counter").textContent=increase;
   
}

document.getElementById("decrease").onclick = function(){
    let decrease = document.getElementById("counter").textContent ;
    decrease = Number(decrease)-1;
    document.getElementById("counter").textContent=decrease;
    
}

document.getElementById("reset").onclick = function(){
    document.getElementById("counter").textContent=0;
}