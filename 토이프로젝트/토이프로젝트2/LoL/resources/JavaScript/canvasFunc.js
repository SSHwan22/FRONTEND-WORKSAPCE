// import { canvasTool } from "./canvasMethod.js";
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
    },
    cross3(id, fill, cross, color){ 
        let canvas = document.getElementById(id);
        
        /** @type {CanvasRenderingContext2D} */
        let ctx = canvas.getContext('2d');
        
        // window.addEventListener('resize', this.resize.bind(this));
        // this.resize();

        canvas.style.width = "100%";
        canvas.style.height = "100%";
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetHeight;
        
        let lineW = canvas.width ;
        let lineH = canvas.height ;


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
    }

};

// 메인 비디오 버튼
// canvasTool.cross2("container-canvas-style",false, 205, 66, 20, 20, "white");

canvasTool.cross3("new-list-canvas-1",false,20 ,"lightgray");
canvasTool.cross3("new-list-canvas-2",false,20 ,"lightgray");
canvasTool.cross3("new-list-canvas-3",false,20 ,"lightgray");

// 챔피언 직업군 비디오 박스
canvasTool.cross1("role-video-canvas",false, 433,275,20,"lightgray");

// 오피셜 박스 좀 안 맞음
canvasTool.cross1("official-social-canvas-style", true, 1096, 52, 13, "#051C24"); 

// 챔피언 더 많은 챔피언 박스
// canvasTool.cross2("champion-btn-canvas-more", true, 222, 33, 10, 10, "rgb(208, 168, 92)");

// 지금 플레이 박스
// canvasTool.cross2("champion-btn-canvas-now", true, 222, 33, 10, 10, "rgb(11, 198, 227)");

// 스킨 버튼 박스
// canvasTool.cross2("skins-foreground-title-btn-canvas",true,172,33,10,10,"rgb(11, 198, 227)");

// 게임모드 BOX 
canvasTool.cross3("gamemode-content-canvase",false, 40, "white");

// 게임모드 btn 박스
// canvasTool.cross2("gamemode-title-btn-nowPlay-canvas",true, 172,33,10,10, "rgb(11, 198, 227)");

// 플레이방법 시작버튼
// canvasTool.cross2("start-legend-btn-start-canvas",false,205,66,20,20,"white");

// 플레이방법 무료버튼
// canvasTool.cross2("start-legend-btn-free-canvas",false,205,66,20,20,"white");

// 알아보기 무료버튼1
canvasTool.cross1("more-to-discover-list1",false, 442, 461, 40, "lightgray");
// 알아보기 무료버튼2
canvasTool.cross1("more-to-discover-list2",false, 442, 461, 40, "lightgray");
// 추천의 알아보기박스의 애니메이션은 호버 시 최대만큼 증가하여 사각형이 된 후 새로운 도형(선)을 점점 증가하는 애니메이션을 만들면..... 못해.....


// 마지막 비디오 버튼
// canvasTool.cross2("end-video-btn-box-canvas",false,205,66,19,19,"white");
