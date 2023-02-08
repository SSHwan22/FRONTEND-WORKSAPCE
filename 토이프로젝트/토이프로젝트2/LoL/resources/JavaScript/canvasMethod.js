// 나중에 접히는 좌표가 다른 도형은 아직 구현 못함
let canvasTool = {
    cross1(id, fill, width, height, cross, color){
    
        let lineW = width-1;
        let lineH = height-1;

        let canvas = document.getElementById(id);

        /** @type {CanvasRenderingContext2D} */
        let ctx = canvas.getContext('2d');
    
        ctx.beginPath();
        ctx.moveTo(lineW-cross, 1);
        ctx.lineTo(1,1);
        ctx.lineTo(1,lineH);
        ctx.lineTo(lineW,lineH);
        ctx.lineTo(lineW,1+cross);
        ctx.closePath();
        if(fill === true){
            ctx.fillStyle = color;
            ctx.fill();
        }else if(fill === false){
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    },
    cross2(id, fill, width, height, crossL, crossR, color){
        let lineW = width-1;
        let lineH = height-1;

        let canvas = document.getElementById(id);

        /** @type {CanvasRenderingContext2D} */
        let ctx = canvas.getContext('2d');

        // (205, 66)
        ctx.beginPath();
        ctx.moveTo(1,crossL);
        ctx.lineTo(crossL,1);
        ctx.lineTo(lineW,1);
        ctx.lineTo(lineW,lineH-crossR);
        ctx.moveTo(lineW,lineH-crossR);
        ctx.lineTo(lineW-crossR,lineH);
        ctx.lineTo(1,lineH);
        ctx.lineTo(1,crossL);
        if(fill === true){
            ctx.fillStyle = color;
            ctx.fill();
        }else if(fill === false){
            ctx.strokeStyle = color;
            ctx.stroke();
        }
    }

};
/* 
croos1(id , fill, width, height, cross, color); 접힌 부분이 하나인 도형메서드

    id(String) : canvas태그의 id값
    fill(boolean) : true = 채우기 , false = 테두리
    width(Number) : canvas의 가로 길이
    height(Number) : canvas의 세로 길이
    cross(Number) : canvas 도형의 접히는 정도
    color(String) : 테두리 또는 면의 색상

    *예시
    canvasTool("canvas1", true, 1682, 399, 40, "red");
 */

/* 
croos2(id , fill, width, height, cross, color); 접힌 부분이 두개인 도형메서드

    id(String) : canvas태그의 id값
    fill(boolean) : true = 채우기 , false = 테두리
    width(Number) : canvas의 가로 길이
    height(Number) : canvas의 세로 길이
    crossL(Number) : canvas 도형의 왼쪽 접히는 정도
    crossR(Number) : canvas 도형의 오른쪽 접히는 정도
    color(String) : 테두리 또는 면의 색상

    *예시
    canvasTool("canvas1", true, 1682, 399, 20, 20 "red");
 */

/* 
    이 파일을 다른 자바스크립트파일에 적용할려면
    import { canvasTool } from "./canvasMethod.js"; 다른 파일에 적어주면 된다.
 */

export {canvasTool};