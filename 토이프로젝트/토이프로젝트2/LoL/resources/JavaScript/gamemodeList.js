window.onload = function () {
  let summonersBtn = document.getElementById("gamemode-right-list-1");
  let howlingabyssBtn = document.getElementById("gamemode-right-list-2");
  let tftBtn = document.getElementById("gamemode-right-list-3");

  let summonersStyle = document.getElementById("gamemode-right-list-1").style;
  let howlingabyssStyle = document.getElementById(
    "gamemode-right-list-2"
  ).style;
  let tftStyle = document.getElementById("gamemode-right-list-3").style;

  let gamemodeBackground = document.getElementsByClassName(
    "gamemode-background-content"
  );
  let gamemodeCenterVideo = document.getElementsByClassName(
    "gamemode-center-video-centent-wrapper"
  );
  let gamoemodeRightListBox = document.getElementsByClassName(
    "gamemode-right-list-btn-box"
  );
  let gamoemodeRightListImg = document.getElementsByClassName(
    "gamemode-right-list-img-wrapper"
  );
  let gamemodeBottomTitle = document.getElementsByClassName(
    "gamemode-bottom-text-title"
  );
  let gamemodeBottomDiscription = document.getElementsByClassName(
    "gamemode-bottom-text-discription"
  );

  summonersStyle.transform = "translate3d(0%, -50%, 0px)";
  howlingabyssStyle.transform = "translate3d(0%, 50%, 0px)";
  tftStyle.transform = "translate3d(0%, 150%, 0px)";
  gamemodeListActive_f(0);

  let count = 1;
  let repeat = setInterval(function () {
    switch (count) {
      case 0:
        summonersStyle.transform = "translate3d(0%, -50%, 0px)";
        howlingabyssStyle.transform = "translate3d(0%, 50%, 0px)";
        tftStyle.transform = "translate3d(0%, 150%, 0px)";
        gamemodeListActive_f(0);
        break;
      case 1:
        summonersStyle.transform = "translate3d(0%, -150%, 0px)";
        howlingabyssStyle.transform = "translate3d(0%, -50%, 0px)";
        tftStyle.transform = "translate3d(0%, 50%, 0px)";
        gamemodeListActive_f(1);
        break;
      case 2:
        summonersStyle.transform = "translate3d(0%, -250%, 0px)";
        howlingabyssStyle.transform = "translate3d(0%, -150%, 0px)";
        tftStyle.transform = "translate3d(0%, -50%, 0px)";
        gamemodeListActive_f(2);
        break;
    }
    if (count < 2) {
      count++;
    } else {
      count = 0;
    }
  }, 2000);

    summonersBtn.addEventListener("click", function () {
      summonersStyle.transform = "translate3d(0%, -50%, 0px)";
      howlingabyssStyle.transform = "translate3d(0%, 50%, 0px)";
      tftStyle.transform = "translate3d(0%, 150%, 0px)";
      gamemodeListActive_f(0);
      clearInterval(repeat);
    });


    howlingabyssBtn.addEventListener("click", function () {
      summonersStyle.transform = "translate3d(0%, -150%, 0px)";
      howlingabyssStyle.transform = "translate3d(0%, -50%, 0px)";
      tftStyle.transform = "translate3d(0%, 50%, 0px)";
      gamemodeListActive_f(1);
      clearInterval(repeat);
    });

    tftBtn.addEventListener("click", function () {
      summonersStyle.transform = "translate3d(0%, -250%, 0px)";
      howlingabyssStyle.transform = "translate3d(0%, -150%, 0px)";
      tftStyle.transform = "translate3d(0%, -50%, 0px)";
      gamemodeListActive_f(2);
      clearInterval(repeat);
    });

    function gamemodeListActive_f(num) {
      for (let i = 0; i < gamemodeBottomDiscription.length; i++) {
        if (i == num) {
          gamemodeBottomDiscription[i].classList.add("gamemodeListActive");
          gamemodeBottomTitle[i].classList.add("gamemodeListActive");
          gamemodeBackground[i].classList.add("gamemodeBackgroundActive");
          gamemodeCenterVideo[i].classList.add("gamemodeVideo-ani-show");
          gamemodeCenterVideo[i].classList.remove("gamemodeVideo-ani-hide");
          gamoemodeRightListBox[i].classList.add("gamemodeListBoxRshow");
          gamoemodeRightListImg[i].classList.add("gamemodeListImgActive");
          gamoemodeRightListBox[i].classList.remove("gamemodeListBoxRhide");
        } else {
          gamemodeBottomDiscription[i].classList.remove("gamemodeListActive");
          gamemodeBottomTitle[i].classList.remove("gamemodeListActive");
          gamemodeBackground[i].classList.remove("gamemodeBackgroundActive");
          gamemodeCenterVideo[i].classList.remove("gamemodeVideo-ani-show");
          gamemodeCenterVideo[i].classList.add("gamemodeVideo-ani-hide");
          gamoemodeRightListBox[i].classList.remove("gamemodeListBoxRshow");
          gamoemodeRightListImg[i].classList.remove("gamemodeListImgActive");
          gamoemodeRightListBox[i].classList.add("gamemodeListBoxRhide");
        }
      }
    }
};
