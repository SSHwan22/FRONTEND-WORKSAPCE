function canvasAni(id, fill, z, color, clickId){
let click = document.getElementById(clickId);

let canvas = document.getElementById(id);
let ctx = canvas.getContext("2d");

let widthLine = canvas.width - 1; /* 205 */
let heightLine = canvas.height - 1; /* 66 */

let x = 1;
let y = 1;
let cUp = 0;
let cDown = 0;

let xCross = x - z;
let widthCross = widthLine - z;

let yCross = y-1 + z;
let heightCross = heightLine - z;

function drawUp() {
//   ctx.beginPath();
//   ctx.moveTo(widthCross + cUp, y);
//   ctx.lineTo(x, y);
//   ctx.lineTo(x, heightLine);
//   ctx.lineTo(widthLine, heightLine);
//   ctx.lineTo(widthLine, yCross - cUp);
//   ctx.closePath();
//   ctx.stroke();
     ctx.beginPath();
     ctx.moveTo(1, z-(cUp));
     ctx.lineTo(z-(cUp), 1);
     ctx.lineTo(widthLine, 1);
     ctx.lineTo(widthLine, (heightCross+(cUp)));
     ctx.moveTo(widthLine, (heightCross+(cUp)));
     ctx.lineTo((widthCross+(cUp)), heightLine);
     ctx.lineTo(1, heightLine);
     ctx.lineTo(1, yCross-(cUp))
     if(fill === true){
        ctx.fillStyle = color;
        ctx.fill();
    }else if(fill === false){
        ctx.strokeStyle = color;
        ctx.stroke();
    }
     
}
function drawDown() {
    ctx.beginPath();
    ctx.moveTo(1, 1+(cDown));
    ctx.lineTo(1+(cDown), 1);
    ctx.lineTo(widthLine, 1);
    ctx.lineTo(widthLine, heightLine-(cDown));
    ctx.moveTo(widthLine, heightLine-(cDown));
    ctx.lineTo(widthLine-(cDown), heightLine);
    ctx.lineTo(1, heightLine);
    ctx.lineTo(1, 1+(cDown));
    if(fill === true){
        ctx.fillStyle = color;
        ctx.fill();
    }else if(fill === false){
        ctx.strokeStyle = color;
        ctx.stroke();
    }
}
function moveToUp() {
  cUp += 1;
  drawUp();
}

function moveToDown() {
  cDown += 1; /* 밑에 있는 if문 여기로 한번 해보자 */
  drawDown();
}
function runUp() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveToUp();
  // console.log(cUp);
  if (cUp<z) {
    window.requestAnimationFrame(runUp);
  }
}
function runDown() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveToDown();
  // console.log(cDown);
  if (cDown < z) {
    window.requestAnimationFrame(runDown);
  }
}
drawUp();
// drawDown();
click.addEventListener("mouseenter", function () {
  cUp = 0;
  cDown = 0;
  runUp(); // 반복해서 그리기
});

click.addEventListener("mouseout", function () {
  cDown = 0;
  cUp = 0;
  runDown();
  console.log(cDown);
});
}

// 메인 비디오 버튼
canvasAni("container-canvas-style",false, 20, "white", "container-canvas-style");

// 챔피언 직업군 비디오 박스 구현 못함
// cross1("role-video-canvas",false, 20,"lightgray", "");

// 오피셜 박스 좀 안 맞음
// cross1("official-social-canvas-style", true, 13, "#051C24", ""); 

// 챔피언 더 많은 챔피언 박스
canvasAni("champion-btn-canvas-more", true, 10, "rgb(208, 168, 92)", "more-champion-btn-wrapper");

// 지금 플레이 박스
canvasAni("champion-btn-canvas-now", true, 10, "rgb(11, 198, 227)", "now-play-btn-wrapper");

// 스킨 버튼 박스
canvasAni("skins-foreground-title-btn-canvas",true,10,"rgb(11, 198, 227)", "skins-foreground-title-btn-container");

// 게임모드 BOX 
// cross1("gamemode-content-canvase",false, 1682, 399, 40, "white", ""); 

// 게임모드 btn 박스
canvasAni("gamemode-title-btn-nowPlay-canvas",true,10, "rgb(11, 198, 227)", "gamemode-title-btn-nowPlay-wrapper");

// 플레이방법 시작버튼
canvasAni("start-legend-btn-start-canvas",false,20,"white", "start-btn-a");

// 플레이방법 무료버튼
canvasAni("start-legend-btn-free-canvas",false,20,"white", "legend-btn-a");

// 마지막 비디오 버튼
canvasAni("end-video-btn-box-canvas",false,19,"white", "end-video-btn-box-background");
