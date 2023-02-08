import { canvasTool } from "./canvasMethod.js";

window.onload = function(){
    /* ---메인 비디오----------------------------------------------------------------------------------- */        
            let canvasVideo = document.getElementById("forgegorund-canvas-style");
    
            /** @type {CanvasRenderingContext2D} */
            let ctxMainVideo = canvasVideo.getContext('2d');
    
    /* ---메인 비디오 버튼--------------------------------------------------------------------------------------------- */
            let canvasMainVideoBtn = document.getElementById("container-canvas-style");
    
            /** @type {CanvasRenderingContext2D} */
            let cvxMainVideoBtn = canvasMainVideoBtn.getContext('2d');
    
            cvxMainVideoBtn.strokeStyle = "white";
            cvxMainVideoBtn.beginPath();
            cvxMainVideoBtn.moveTo(1,20);
            cvxMainVideoBtn.lineTo(20,1);
            cvxMainVideoBtn.lineTo(204,1);
            cvxMainVideoBtn.lineTo(204,46);
            cvxMainVideoBtn.moveTo(204,46);
            cvxMainVideoBtn.lineTo(185,65);
            cvxMainVideoBtn.lineTo(1,65);
            cvxMainVideoBtn.lineTo(1,20);
            cvxMainVideoBtn.stroke();

/* ---공식 소셜 채널 박스--------------------------------------------------------------------------- */
        let canvas = document.getElementById("official-social-canvas-style");

        /** @type {CanvasRenderingContext2D} */
        let ctx = canvas.getContext('2d');

        ctx.fillStyle = "#051C24";
        ctx.beginPath();
        ctx.moveTo(1095, 1);
        ctx.lineTo(1,1);
        ctx.lineTo(1,51);
        ctx.lineTo(1120,51);
        ctx.lineTo(1120,18);
        ctx.closePath();
        ctx.fill();


/* ---챔피언 비디오----------------------------------------------------------------------------------------- */
        //champions-video
        let canvasRoleVideo = document.getElementById("role-video-canvas");

        /** @type {CanvasRenderingContext2D} */
        let ctxRoleVideo = canvasRoleVideo.getContext('2d');
        // (433,275)

        ctxRoleVideo.strokeStyle = "#7E7E7E";
        ctxRoleVideo.beginPath();
        ctxRoleVideo.moveTo(412,1);
        ctxRoleVideo.lineTo(1,1);
        ctxRoleVideo.lineTo(1,274);
        ctxRoleVideo.lineTo(431,274);
        ctxRoleVideo.lineTo(432,30);
        ctxRoleVideo.closePath();
        ctxRoleVideo.stroke();



/* ---챔피언--------------------------------------------------------------------------------*/
        let canvaschampionBtn = document.getElementsByClassName("champion-btn-canvas");
        for(let canvasChampionBtnArr of canvaschampionBtn){

            /** @type {CanvasRenderingContext2D} */
            let ctxChampBtn = canvasChampionBtnArr.getContext('2d');

            if(ctxChampBtn.canvas.id == "champion-btn-canvas-more"){
                ctxChampBtn.fillStyle = "rgb(208, 168, 92)";
            }else{
                ctxChampBtn.fillStyle = "rgb(11, 198, 227)";
            }
            ctxChampBtn.strokeStyle = "black";
            ctxChampBtn.beginPath();
            ctxChampBtn.moveTo(1,10);
            ctxChampBtn.lineTo(10,1);
            ctxChampBtn.lineTo(221,1);
            ctxChampBtn.lineTo(221,23);
            ctxChampBtn.moveTo(221,23);
            ctxChampBtn.lineTo(212,32);
            ctxChampBtn.lineTo(1,32);
            ctxChampBtn.lineTo(1,10);
            ctxChampBtn.fill();
        };

/* ---챔피언 스킨 버튼--------------------------------------------------------------------------------------------- */
let canvasSkinsBtn = document.getElementById("skins-foreground-title-btn-canvas");
/** @type {CanvasRenderingContext2D} */
let ctxSkinsBtn = canvasSkinsBtn.getContext('2d');
// (205, 66)

ctxSkinsBtn.fillStyle = "rgb(11, 198, 227)";
ctxSkinsBtn.beginPath();
ctxSkinsBtn.moveTo(1,10);
ctxSkinsBtn.lineTo(10,1);
ctxSkinsBtn.lineTo(171,1);
ctxSkinsBtn.lineTo(171,22);
ctxSkinsBtn.moveTo(171,23);
ctxSkinsBtn.lineTo(162,32);
ctxSkinsBtn.lineTo(1,32);
ctxSkinsBtn.lineTo(1,10);
ctxSkinsBtn.fill();

/* ---플레이 방법-------------------------------------------------------------------------------------------- */
        let canvasStartLegend = document.getElementsByClassName("start-legend-btn-canvas");
        for(let canvasStartLegendArr of canvasStartLegend){
            console.log("canvasStartLegendArr");
            /** @type {CanvasRenderingContext2D} */ /* 이걸하면 자동완성에 canvas 관련 메서드 나옴 */
            let ctxStartLegend = canvasStartLegendArr.getContext('2d');

            ctxStartLegend.strokeStyle = "white";
            ctxStartLegend.beginPath();
            ctxStartLegend.moveTo(1,20);
            ctxStartLegend.lineTo(20,1);
            ctxStartLegend.lineTo(204,1);
            ctxStartLegend.lineTo(204,46);
            ctxStartLegend.moveTo(204,46);
            ctxStartLegend.lineTo(185,65);
            ctxStartLegend.lineTo(1,65);
            ctxStartLegend.lineTo(1,20);
            ctxStartLegend.stroke();
        }

/* ---게임 모드-------------------------------------------------------------------------------------------------- */

/* ---끝 비디오----------------------------------------------------------------------------------------- */
        let canvasEndVideo = document.getElementById("end-video-btn-box-canvas");
        /** @type {CanvasRenderingContext2D} */
        let ctxEndVideo = canvasEndVideo.getContext('2d');
        // (205, 66)

        ctxEndVideo.strokeStyle = "white";
        ctxEndVideo.beginPath();
        ctxEndVideo.moveTo(1,20);
        ctxEndVideo.lineTo(20,1);
        ctxEndVideo.lineTo(204,1);
        ctxEndVideo.lineTo(204,46);
        ctxEndVideo.moveTo(204,46);
        ctxEndVideo.lineTo(185,65);
        ctxEndVideo.lineTo(1,65);
        ctxEndVideo.lineTo(1,20);
        ctxEndVideo.stroke();

    }

    // canvasTool.cross1("gamemode-content-canvase",false, 1682, 399, 40, "white"); /* 게임모드 BOX */
    