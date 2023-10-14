let btn=document.querySelector('.shop-dropdown-toggle');
let drop=document.querySelector('.shop-dropdown-menu');

btn.onclick=function(){

    drop.classList.toggle('d-none');
}


let changeable=document.querySelectorAll('.c-card');

let no1=document.querySelector('.no1');
let no2=document.querySelector('.no2');
let no3=document.querySelector('.no3');

no2.onclick=function(){

    for(let card of changeable){

       card.className="col-lg-6";
       card.classList.add("col-6");

    }
}


no1.onclick=function(){

    for(let card of changeable){

        card.className="col-lg-3";
       card.classList.add("col-6");

 
     }

}

no3.onclick=function(){

    for(let card of changeable){

        card.className="col-lg-4";
       card.classList.add("col-6");

 
     }

}