// 펭구 움직이기
window.addEventListener('mousemove', mousemove);
// setInterval("mousemove()", 50);
function mousemove() {
    // let mapX = 100 - (window.event.offsetX - 960) / 32 + "px";
    // let mapY = 400 - (window.event.offsetY - 468) / 16 + "px";
    let mapX = window.event.clientX/50-16+"px";
    let mapY = window.event.clientX/60-10+"px";
    console.log(mapY);
    // console.log(mapY);
    // document.getElementById('legend-start-map-centent-wrapper').style.transform = `translate3d(${mapX}, ${mapY}, 0px)`;
    document.getElementById('legend-start-map-centent-wrapper').style.transform = `translate3d(${mapX}, ${mapY}, 0px)`;
//   document.getElementById('legend-start-map-img-centent-area').style.top = penguY;
};