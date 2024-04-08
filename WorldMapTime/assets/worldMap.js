async function getTime(place){

    const url = `https://timezone.abstractapi.com/v1/current_time/?api_key=d93a44a3434a485984afde9d0341cfec&location=${place}`;
    //const url = `api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=ca8cf9f7d5fa20400b1f536f58b085cc`;
    const response = await fetch(url);
    console.log(response);
    const data = await response.json();
   console.log(data);
    let time = data.datetime;
    console.log(time);


  

    document.getElementById("time").innerText = `${place}'s time is : ${time}`;
    document.getElementById("time").style.color = "pink";
    document.getElementById("time").style.fontSize = "3rem"
}


document.querySelectorAll(".allPaths").forEach(e=>{

    e.addEventListener("mouseover",function(){
        window.onmousemove=function(j){
            x=j.clientX;
            y=j.clientY;
            document.getElementById("name").style.top = y-20+"px";
            document.getElementById("name").style.left = x+20+"px";


        }

       e.style.fill="black";
        document.getElementById("namep").innerText = e.id;
        document.getElementById("name").style.opacity=1;
    })


    e.addEventListener("mouseleave",function(){
        e.style.fill="#ececec";
        document.getElementById("name").style.opacity=0;
        
    })


    e.addEventListener("click",function(){
        getTime(e.id);
    })
})

