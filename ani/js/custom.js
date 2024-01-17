$(document).ready(function () {
   
    $('.left .bottom .input>img').click(function(){
        $('#bars').toggleClass('on');
        $('#bars2').toggleClass('on');
    });
    $('.left .mid li:nth-child(1)>img').hover(function(){
        $('.left .mid li:nth-child(1)').stop().addClass('on');
    },function(){
        $('.left .mid li:nth-child(1)').stop().removeClass('on');
    });
    $('.left .mid li:nth-child(4)>img').hover(function(){
        $('.left .mid li:nth-child(4)').stop().addClass('on');
    },function(){
        $('.left .mid li:nth-child(4)').stop().removeClass('on');
    });


    $('.right li:nth-child(2)').hover(function(){
        $(this).stop().addClass('on');
    },function(){
        $(this).stop().removeClass('on');
    });
    $('.center li:nth-child(2) ').hover(function(){
        $(this).stop().addClass('on');
    },function(){
        $(this).stop().removeClass('on');
    });
    $('.top>li:nth-child(3)').click(function(){
        $('.top>li:nth-child(2)').toggleClass('on');
    });
});
