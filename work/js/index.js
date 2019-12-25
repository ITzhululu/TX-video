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
// 遍历刷片
var shujia = [
    {
        name: "小戏骨MV·外卖小哥",
        jj: "萌娃致敬烈日下劳动者",
        img: "./images/xxg.jpeg",
        name2:"惹上冷殿下·8.8首播",
        jj2: "迷妹撩爱豆 饭圈高糖恋",
        img2: "./images/rsld.jpeg",
        
    },
    {
        name: "小戏骨MV·外卖小哥",
        jj: "萌娃致敬烈日下劳动者",
        img: "./images/xxg.jpeg",
        name2:"惹上冷殿下·8.8首播",
        jj2: "迷妹撩爱豆 饭圈高糖恋",
        img2: "./images/rsld.jpeg",
        
    },
    {
        name: "小戏骨MV·外卖小哥",
        jj: "萌娃致敬烈日下劳动者",
        img: "./images/xxg.jpeg",
        name2:"惹上冷殿下·8.8首播",
        jj2: "迷妹撩爱豆 饭圈高糖恋",
        img2: "./images/rsld.jpeg",
        
    },
    {
        name: "小戏骨MV·外卖小哥",
        jj: "萌娃致敬烈日下劳动者",
        img: "./images/xxg.jpeg",
        name2:"惹上冷殿下·8.8首播",
        jj2: "迷妹撩爱豆 饭圈高糖恋",
        img2: "./images/rsld.jpeg",
        
    },
    
]

var kong = ""
for (var i = 0; i<shujia.length;i++) {
    var lili = shujia[i]

    kong += `
   
            <div class="bianli">
            <div class="pian_tu">
            <img class="img_jiange imgs" src="`+lili.img+`" alt="">
           <img clsss="imgs" src="`+lili.img2+`" alt="">
       </div>
           <div class="h_neirong_fl">
               <h5>`+lili.name+`</h5>
                   <span>`+lili.jj+`</span>
           </div>
               <div class="h_neirong_fr">
                   <h5>`+lili.name2+`</h5>
                       <span>`+lili.jj2+`</span>
               </div>
            </div>
    
    `


}
$(".list_wrap").append($(kong))
//视频详情JS
 var dian = [
        {
            rgba: "255, 141, 26, 1",
            rong: "【第二组PK】陆政廷又唱rap文兆杰田燚《他他他》...   "
        },
        {   
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },
        {
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },
        {
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },
        {
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },
        {
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },
        {
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },
        {
            rgba: "166, 166, 166, 1",
            rong: "华晨宇没能保住文兆杰，遗憾到流泪：我觉得不公平"
        },

    ]

    var kong = ""
    for (var i = 0; i < dian.length; i++) {
        var he_he = dian[i]

        var kong = kong + `
    <div class="lun_he"  style="color:rgba(`+ he_he.rgba + `);">
                    <span>`+ he_he.rong + `</span>
                </div>
    `
    }



    $(".min_lun_bo").append($(kong))


    var pian_hua = [
        {
            img: "./images/sq_xq6.jpeg",
            zi: "华晨宇聊到魔音选手心疼落 泪：没想到陆政廷会被淘汰..."
        },
        {
            img: "./images/sq_xq6.jpeg",
            zi: "文兆杰专访：没想过自己会复活，以后不会在让花花失望"

        },
        {
            img: "./images/sq_xq6.jpeg",
            zi: "斯外戈专访：能复活超开心，最对不起和感谢的人是春春"
        },
    ]

    var img_pian_hua = ""
    for (var j = 0; j < pian_hua.length; j++) {

        var bian_li = pian_hua[j]
        img_pian_hua += `
        <div class="hua_tu">
                <img class="x_q_hua" src="`+ bian_li.img + `" alt="">
                <span class="s_f_r">`+ bian_li.zi + `</span>
            </div>
        
        `
    }

    $(".img_jj").append($(img_pian_hua))

    var wei_ni_tui = [
        {
            img: "./images/sq_xq6.jpeg",
            h3: "我家那小子",
            zi: "第4期：父母离异，陈学冬武艺受影响",
        },
        {
            img: "./images/sq_xq6.jpeg",
            h3: "放开我北鼻 第3季",
            zi: "第10期：释小龙空降少林寺教萌娃练功夫",
        },
        {
            img: "./images/sq_xq6.jpeg",
            h3: "明日之子悠享版",
            zi: "悠享版第8期：赛道分组密室讨论全程",
        },
    ]
    var mingri_tuijian = ""
    for (var i = 0; i < wei_ni_tui.length; i++) {
        var wei_ntj = wei_ni_tui[i]
        mingri_tuijian += `
        <div class="tui_img_fl">
                    <img class="imgs" src="`+ wei_ntj.img + `" alt="">
                </div>
                <div class="zi_h3">
                    <h3>`+ wei_ntj.h3 + `</h3>
                    <span>`+ wei_ntj.zi + `</span>
                </div>
        `
    }
    $(".img_tui_tui").append($(mingri_tuijian))

//视频详情点击事件
 $(".imgs").click(function () {
    location.href = "tx_spxq.html"

 })
  
 //视频返回
 $(".zhu_input").click(function(){
     location.href = "tx_sousuo.html"
 })
 

