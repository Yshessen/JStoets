document.getElementById("elemento").addEventListener("click",function(){
    let randomNum= 1;
    for(i = 0; i <= 49;i++){
        randomNum[i] = Math.floor(Math.random()*900)+100;
        while(randomNum<50){
        console.log(randomNum[i])
        document.querySelector(".container") .innerHTML += `<div class="container__item">${randomNum}</div>`
        randomNum++
       console.log(randomNum[i])
    }
    }
     })