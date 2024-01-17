$(document).ready(function () {
    $('.p1_left .input>img').click(function(){
        $('ul.p1_left ul.base li:nth-child(2)').toggleClass('on');
    });


    $('.p1_center .left .top li:nth-child(2)').click(function(){
        $('.p1_center .left .bottom li:nth-child(1)').toggleClass('on');
    });
    $('.p1_center .right ul.mid li:nth-child(4)>img').click(function(){
        $(this).toggleClass('on');
        $('.p1_center .left ul.absolute li:nth-child(1)').toggleClass('on');
    });
    $(' .bottom_left .hover').hover(function(){
        $('.p1_right .bottom_right>li:nth-child(1)').stop().addClass('on');
    },function(){
        $('.p1_right .bottom_right>li:nth-child(1)').stop().removeClass('on');
    });

    $('.right .top li:nth-child(3)>img').click(function(){
        $('.right .top>li:nth-child(2)').toggleClass('on');
    });
    $('.p1_right ul.top li:nth-child(1)').hover(function(){
        $(this).stop().addClass('on');
    },function(){
        $(this).stop().removeClass('on');
    });
    $('.p1_right ul.top li:nth-child(2)').hover(function(){
        $(this).stop().addClass('on');
    },function(){
        $(this).stop().removeClass('on');
    });

});
