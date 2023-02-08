let canvas = document.getElementById("role-img-canvas");
/** @type {CanvasRenderingContext2D} */
let ctxChamp = canvas.getContext('2d');
// (205, 66)

canvas.style.width = "100%";
canvas.style.height = "100%";
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;



ctxChamp.strokeStyle = "rgb(186, 194, 204)";
ctxChamp.beginPath();
ctxChamp.arc(canvas.width/2, canvas.height/2, canvas.width/2, 0, 2*Math.PI);
ctxChamp.stroke();

/* ------------------------------------------------------------------------------------------------------- */
let canvasSkins = document.getElementById("skins-foreground-img-canvas");
/** @type {CanvasRenderingContext2D} */
let ctxSkins = canvasSkins.getContext('2d');
// (205, 66)

ctxSkins.rotate(0.78);
// ctxSkins.translate(256, -256);
ctxSkins.translate(250, -247 );

ctxSkins.strokeStyle = "rgb(186, 194, 204)";
ctxSkins.strokeRect(0,0,500,500);

