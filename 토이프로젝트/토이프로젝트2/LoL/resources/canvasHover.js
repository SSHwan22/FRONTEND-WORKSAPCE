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
  cDown += 1;
  drawDown();
}
function runUp() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveToUp();
  console.log(cUp);
  if (cUp != z) {
    window.requestAnimationFrame(runUp);
  }
}
function runDown() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  moveToDown();
  console.log(cDown);
  if (cDown != z) {
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
});
}

// 예시 canvasAni("id",fill,접힌길이, "색상","버튼id")
canvasAni("container-canvas-style",false, 20, "white", "container-canvas-style");
/* 
id : 캔버스 id
fill : true(fill), false(stroke);
접힌길이: 접히는 크기;
색상 : 색상
버튼id : 호버이벤트
*/
