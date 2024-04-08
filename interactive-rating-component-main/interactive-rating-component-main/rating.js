

let rating = document.getElementsByClassName("rating");
let ratingArray = Array.from(rating)
let e;
ratingArray.forEach((element)=>{
element.addEventListener("click",()=>{
e = element.innerHTML;
element.style.background ="hsl(25, 97%, 53%)";
console.log(e);
})
})

let ratingPage = document.getElementById("ratingPage");
let thankYouPage = document.getElementById("thankyouPage");

document.getElementById("submit").onclick=function(){
    document.getElementById("result").innerHTML=`You selected ${e} out of 5`;
    ratingPage.style.display="none";
    thankYouPage.style.display="block";
}
