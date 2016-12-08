/**
 * Created by wumeimei on 2016/11/29.
 */
var h=$(window).scrollTop();
if(h<=100){
    $('#goToTop').css('display','none');
    $('#navbar').css('display','none');

}else if(h>100){
    $('#navbar').css('display','block');

}
$('#goToTop').click(function(){
    $('body,html').stop().animate({scrollTop:0},500,"linear");
})
var n=0;
    $(window).scroll(function(){
        var h=$(this).scrollTop();
        //console.log(h);
        if(h>100) {
            $("#goToTop").stop().fadeIn(200);
            $("#navbar").stop().fadeIn(200);
        }else{
            $("#goToTop").stop().fadeOut(200);
            $("#navbar").stop().fadeOut(200);
        }
        //视频播放
        var itemTop=$("#page4").offset().top;
        if(h>itemTop-200&&n<=1){
            n++;
            $('#myVideo')[0].play();
        }
        //page2图片移动
        var page2Top=$('#page2').offset().top;
        var hh2=h-page2Top;
        //console.log(h2);
        if(hh2>=-200&&hh2<=1){
            $('#iphone').animate({opacity:'1',bottom:'0'},1500);
        }
        //长图移动
        var page3Top=$('#page3').offset().top;
        var hh3=h-page3Top+window.innerHeight/2;
        if(h>=page3Top-window.innerHeight/2){
            $('#page3_picture').css('top',-hh3/2)
        }
    })
