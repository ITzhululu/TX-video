var aaa = [
    {
        name: "国产自拍",
        ji: "更新至10集/全54集",
        bo: "独播",
        img: "../xm/images/图片 3 (10).jpeg"
    },
    {
        name: "日韩专区",
        ji: "更新至10集/全54集",
        bo: "独播",
        img: "../xm/images/图片 3 (10).jpeg"
    },
    {
        name: "欧美经典",
        ji: "更新至10集/全54集",
        bo: "独播",
        img: "../xm/images/图片 3 (10).jpeg"
    },
    {
        name: "cosplay",
        ji: "更新至10集/全54集",
        bo: "独播",
        img: "../xm/images/图片 3 (10).jpeg"
    },
]
var pian = ""
for (var i = 0; i < aaa.length; i++) {
    var pian_rong = aaa[i]

    pian += ` 
    <div>
    <div class="look_img_lf">
<img src="../xm/images/图片 3 (10).jpeg" alt="">
        <span class="dubo">` + pian_rong.bo + `</span>
    </div>
    <div class="look_rd">
        <h4>`+ pian_rong.name + `</h4>
        <span>`+ pian_rong.ji + `</span>
    </div>
    </div>
`

}
$(".look").append($(pian))