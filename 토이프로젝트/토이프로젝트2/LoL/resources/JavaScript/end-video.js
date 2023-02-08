$(function(){
    // console.log($("#end-video-btn-box-background"));
    $("#end-video-btn-box-background").hover(function(){
        $(this).css("background-color","rgb(19, 216, 246)");
        console.log($(this));
    },function(){
        $(this).css("background-color","rgb(11, 198, 227)");
        console.log($(this));
    });
});