let features = document.getElementById("features");
let company = document.getElementById("company");

let imgdownfeature=document.getElementById("featuresimgdown");
let imgdowncompany=document.getElementById("companyimagedown");

let dropdown1 = document.getElementById("dropdown1");

let list2=document.getElementById("list2");


let imgdownfeatureId = imgdownfeature.id;
let imgdowncompanyId = imgdowncompany.id;






features.onclick = function(){
    if(imgdownfeature.id == "featuresimgdown")
    {
       
        
        dropdown1.style.display="block";

        imgdownfeature.id="featuresimgup";

      
       
    }

    else{

        dropdown1.style.display="none";

        imgdownfeature.id="featuresimgdown";
       

    }

    





}



company.onclick = function(){
    if(imgdowncompany.id == "companyimagedown")
    {
       
        
        list2.style.display="flex";

        imgdowncompany.id="companyimageup";
       
    }

    else{

        list2.style.display="none";

        imgdowncompany.id="companyimagedown";
       

    }

    



}




