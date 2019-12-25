//内容宽高
var screen_h = window.screen.height
var screen_w = window.screen.width


$(".app_content").css({
    "height": screen_h - $(".app_tabbar").outerHeight() + "px"
})
//底部导航上的图片
var one_img = $(".tabbar_item div img")
one_img.css({
    "height": one_img.width()+ "px"
})


$(".tabber_item").click(function(){
    $(".app_content>div").each(function (index , item) {
        if($(this).index() == index) {
            $("item").css({
                "display":"block"
            })
        }else{
            var cur_src =$(that).find("img").attr("src")
            $("item").css({
                "display":"none"
            })
        }
    })
})

