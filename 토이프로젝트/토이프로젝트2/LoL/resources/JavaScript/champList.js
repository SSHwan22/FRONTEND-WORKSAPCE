let roleBtn = document.getElementsByClassName("role-btn-flex");
let tankBox = document.getElementById("role-tanks-btn-border-box");
let roleCircle = document.getElementsByClassName("role-btn-icon-border-box");
let roleCircleBottom = document.getElementById("bullet-outCircle").style;
let roleImg = document.getElementsByClassName("role-img-wrapper");
let roleImgAssassion = document.getElementById("role-img-wrapper-assassion");
let roleBackgroundSymbol = document.getElementsByClassName("role-background-symbol");
let championNameWrapper = document.getElementsByClassName("champion-name-wrapper");
let roleVideoActive = document.getElementsByClassName("role-video-content");

let showArr = ["champ-show-sw", "champ-show-se", "champ-show-nw", "champ-show-ne"];
let hideArr = ["champ-hide-sw", "champ-hide-se", "champ-hide-nw", "champ-hide-ne"];

let showRandomNum = Math.floor(Math.random()*4);
let hideRandomNum = Math.floor(Math.random()*4);
let showRandom = "";
let hideRandom = "";

//onload
roleCircleBottom.left = "8.33333%";
showRandomNum = Math.floor(Math.random()*4);
roleAtctive_F(0);
// random_F(showRandomNum, 0);
$(roleImg[0]).addClass(showArr[showRandomNum]);

//interval
var count = 1;
let repeat = setInterval(function () {
    switch (count) {
      case 0:
        roleCircleBottom.left = "8.33333%";
        showRandomNum = Math.floor(Math.random()*4);
        roleAtctive_F(0);
        random_F(showRandomNum, 0);
        for(let i=0; i<roleImg.length; i++){
            if(i==0){
                roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }else{
                roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }
        }
        break;
      case 1:
        roleCircleBottom.left = "25%";   
        showRandomNum = Math.floor(Math.random()*4);
        roleAtctive_F(1);
        random_F(showRandomNum, 1);
        for(let i=0; i<roleImg.length; i++){
            if(i==1){
                roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }else{
                roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }
        }
        break;
      case 2:
        roleCircleBottom.left = "41.6667%"; 
        showRandomNum = Math.floor(Math.random()*4);
        roleAtctive_F(2);
        random_F(showRandomNum, 2);
        for(let i=0; i<roleImg.length; i++){
            if(i==2){
                roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }else{
                roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }
        }
        break;
      case 3:  
        roleCircleBottom.left = "58.3333%" ;
        showRandomNum = Math.floor(Math.random()*4);
        roleAtctive_F(3);
        random_F(showRandomNum, 3);
        for(let i=0; i<roleImg.length; i++){
            if(i==3){
                roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }else{
                roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }
        }
        break;
      case 4:
        roleCircleBottom.left = "75%" ;
        showRandomNum = Math.floor(Math.random()*4);
        roleAtctive_F(4);
        random_F(showRandomNum, 4);
        for(let i=0; i<roleImg.length; i++){
            if(i==4){
                roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }else{
                roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }
        }
        break;
      case 5:
        roleCircleBottom.left = "91.6667%";
        showRandomNum = Math.floor(Math.random()*4);
        roleAtctive_F(5);
        random_F(showRandomNum, 5);
        for(let i=0; i<roleImg.length; i++){
            if(i==5){
                roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }else{
                roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            }
        }
        break;
    }
    if (count < 5) {
      count++;
    } else {
      count = 0;
    }
}, 2000);



//hover
let css = ".role-btn-flex:hover .role-icon-symbol{ fill: rgb(1,1,1) }";
let css2 = ".role-btn-flex:hover .role-text-flex{ color: rgb(1,1,1) }";
let css3 =".role-btn-flex:hover .bullet-inCircle-disable{ background-color : rgb(1,1,1) }";
let css4 = ".role-btn-flex:hover .role-btn-icon-symbol{ transform: translateY(7.5px) scale(0.85, 0.85); transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;}";

let style = document.createElement("style");

style.appendChild(document.createTextNode(css));

document.getElementsByTagName("head")[0].appendChild(style).append(css2, css3, css4);

//active
roleBtn[0].addEventListener("click",function(){
    roleCircleBottom.left = "8.33333%";
    showRandomNum = Math.floor(Math.random()*4);
    roleAtctive_F(0);
    random_F(showRandomNum, 0);
    clearInterval(repeat);
    for(let i=0; i<roleImg.length; i++){
        if(i==0){
            roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }else{
            roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }
    }
});


roleBtn[1].addEventListener("click",function(){
    roleCircleBottom.left = "25%";   
    showRandomNum = Math.floor(Math.random()*4);
    roleAtctive_F(1);
    random_F(showRandomNum, 1);
    clearInterval(repeat);
    for(let i=0; i<roleImg.length; i++){
        if(i==1){
            roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }else{
            roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }
    }
});

roleBtn[2].addEventListener("click",function(){
    roleCircleBottom.left = "41.6667%"; 
    showRandomNum = Math.floor(Math.random()*4);
    roleAtctive_F(2);
    random_F(showRandomNum, 2);
    clearInterval(repeat);
    for(let i=0; i<roleImg.length; i++){
        if(i==2){
            roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }else{
            roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }
    }
});

roleBtn[3].addEventListener("click",function(){
    roleCircleBottom.left = "58.3333%" ;
    showRandomNum = Math.floor(Math.random()*4);
    roleAtctive_F(3);
    random_F(showRandomNum, 3);
    clearInterval(repeat);
    for(let i=0; i<roleImg.length; i++){
        if(i==3){
            roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }else{
            roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }
    }
});

roleBtn[4].addEventListener("click",function(){
    roleCircleBottom.left = "75%" ;
    showRandomNum = Math.floor(Math.random()*4);
    roleAtctive_F(4);
    random_F(showRandomNum, 4);
    clearInterval(repeat);
    for(let i=0; i<roleImg.length; i++){
        if(i==4){
            roleImg[i].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }else{
            roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }
    }
});

roleBtn[5].addEventListener("click",function(){
    roleCircleBottom.left = "91.6667%";
    showRandomNum = Math.floor(Math.random()*4);
    roleAtctive_F(5);
    random_F(showRandomNum, 5);
    clearInterval(repeat);
    for(let i=0; i<roleImg.length; i++){
        if(i==5){
            roleImg[5].style = "animation-duration: 1400ms; animation-delay: 200ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
        }else{
            roleImg[i].style = "animation-duration: 1200ms; animation-delay: 0ms; animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);";
            // console.log(roleImg.style);
        }
    }
});

function random_F(num, i){

    // let showArr = ["champ-show-sw", "champ-show-se", "champ-show-nw", "champ-show-ne"];
    // let hideArr = ["champ-hide-sw", "champ-hide-se", "champ-hide-nw", "champ-hide-ne"];

    let arrShowFilter = showArr.filter(function(item){
        if(showArr[num] != item){
            return true;
        };
    });
    let showFilter = arrShowFilter.join(" ");

    let arrHideFilter = hideArr.filter(function(item,index,array){
        if(showArr[num] != item){
            return true;
        };
    });
    let hideFilter = arrHideFilter.join(" ");

    $(roleImg[i]).addClass(showArr[num]).removeClass(`champ-hide-sw champ-hide-nw champ-hide-se champ-hide-ne ${showFilter}`);
    $(roleImg[i]).siblings().removeClass(`champ-show-sw champ-show-nw champ-show-se champ-show-ne ${hideFilter}`);
    if(i>0){
        $(roleImg[i]).prev().addClass(hideArr[num]);
    }else{
        $(roleImg[0]).siblings("#role-img-wrapper-tank").addClass(hideArr[num]);
    }
}


function roleAtctive_F(num){
        for(let i=0; i<roleBtn.length;i++){
            if(i==num){
                roleBtn[i].classList.add("role-btn-icon-border-box-active");
                roleBackgroundSymbol[i].classList.add("role-background-symbol-active");
                championNameWrapper[i].classList.add("champion-name-wrapper-active");
                roleVideoActive[i].classList.add("role-video-content-active");
            }
            else{
                roleBtn[i].classList.remove("role-btn-icon-border-box-active");
                roleBackgroundSymbol[i].classList.remove("role-background-symbol-active");
                championNameWrapper[i].classList.remove("champion-name-wrapper-active");
                roleVideoActive[i].classList.remove("role-video-content-active");

            }
        }
    }

let styleActive = document.createElement("style");
let cssActive = ".role-btn-icon-border-box-active .role-btn-icon-border-box{ opacity: 1; }";
let cssActive2 = ".role-btn-icon-border-box-active .optionline{ opacity: 1; transform: scaleY(1);transition-duration: 400ms;transition-delay: 400ms;}";
let cssActive3 = ".role-btn-icon-border-box-active .bullet-inCircle-disable{ opacity: 0; }";
let cssActive4 = ".role-btn-icon-border-box-active .role-icon-symbol{ fill: rgb(1,1,1) }";
let cssActive5 = ".role-btn-icon-border-box-active .role-text-flex{ color: rgb(1,1,1) }";
let cssActive6 = ".role-btn-icon-border-box-active .bullet-inCircle-disable{ background-color : rgb(1,1,1) }";
let cssActive7 = ".role-btn-icon-border-box-active .role-btn-icon-symbol{ transform: translateY(7.5px) scale(0.85, 0.85); transition: transform 0.2s cubic-bezier(0.215, 0.61, 0.355, 1) 0s;}";
document.getElementsByTagName("head")[0].appendChild(styleActive).append(cssActive,cssActive2,cssActive3,cssActive4,cssActive5,cssActive6,cssActive7,cssActive);