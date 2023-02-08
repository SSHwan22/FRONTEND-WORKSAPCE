// window.onload = function(){
let akaliImg = document.getElementsByClassName("akali-img-wrapper-skins");
let skinCount = 0;

setInterval(function () {
  switch (skinCount) {
    case 0:
      skinsActive_f(0);
      break;
    case 1:
      skinsActive_f(1);
      break;
    case 2:
      skinsActive_f(2);
      break;
  }
  if (skinCount < 2) {
    skinCount++;
  } else {
    skinCount = 0;
  }
}, 2000);



function skinsActive_f(num){
        for(let i=0; i<3; i++){
            if(i==num){
                akaliImg[i].classList.add("champ-show-ne");
                akaliImg[i].classList.remove("champ-hide-ne");
            }else{
                akaliImg[i].classList.add("champ-hide-ne");
                akaliImg[i].classList.remove("champ-show-ne");
            }
    }
}
