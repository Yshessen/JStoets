 document.getElementById("elemento").addEventListener("click",function(){
let randomNum= [];
for(i = 0; i <= 49;i++){
    randomNum[i] = Math.floor(Math.random()*900)+100;
    document.querySelector(".container") .innerHTML += `<div class="container__item">${randomNum[i]}</div>`
   console.log(randomNum[i])
}
}
 )