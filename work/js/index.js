// 内容区域的高度
var screen_h = window.screen.height
var screen_w = window.screen.width

$(".app_content").css({
    "height": screen_h - $(".app_tabbar").outerHeight() + "px"
})

// 底部导航上的图片
var one_img = $(".tabbar_item div img")
one_img.css({
    "height": one_img.width() + "px"
})


// 底部到行上的点击事件
$(".tabbar_item").click(function () {

    var that = this

    var dian_index = $(this).index()

    $(".tabbar_item").each(function (index, item) {
        if (dian_index == index) {
            var cur_src = $(item).find("img").attr("src")
            if (cur_src.indexOf("_a") == -1) {
                $(item).find("img").attr("src", cur_src.replace(".png", "_a.png"))
            }
        } else {
            var cur_src = $(item).find("img").attr("src")
            $(item).find("img").attr("src", cur_src.replace("_a", ""))

        }
    })


    $(".app_content>div").each(function (index, item) {
        if ($(that).index() == index) {
            $(item).css({
                "display": "block"
            })
        } else {
            $(item).css({
                "display": "none"
            })
        }
    })
})

// 轮播图的高度
$(".lunbo_img").css({
    "height": $(".lunbo_img").width() * 194 / 345 + "px"
})
//遍历刷片
// var shujia = [
//     {
//         name: "小戏骨MV·外卖小哥",
//         jj: "萌娃致敬烈日下劳动者",
//         img: "./images/xxg.jpeg",
//         name2:"惹上冷殿下·8.8首播",
//         jj2: "迷妹撩爱豆 饭圈高糖恋",
//         img2: "./images/rsld.jpeg",
        
//     },
//     {
//         name: "小戏骨MV·外卖小哥",
//         jj: "萌娃致敬烈日下劳动者",
//         img: "./images/xxg.jpeg",
//         name2:"惹上冷殿下·8.8首播",
//         jj2: "迷妹撩爱豆 饭圈高糖恋",
//         img2: "./images/rsld.jpeg",
        
//     },
    
// ]

// var kong = ""
// for (var i = 0; i<shujia.length;) {
//     var lili = shujia[i]

//     kong += `
//     <div class="pian_tu">
//          <img class="img_jiange" src="`+lili.img+`" alt="">
//         <img src="`+lili.img2+`" alt="">
//     </div>
//         <div class="h_neirong_fl">
//             <h5>`+lili.name+`</h5>
//                 <span>`+lili.jj+`</span>
//         </div>
//             <div class="h_neirong_fr">
//                 <h5>`+lili.name2+`</h5>
//                     <span>`+lili.jj2+`</span>
//             </div>
    
//     `
// $(".bianli").append($(kong))

// }

