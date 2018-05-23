// 全局取得ID函数
function $$(id) {
    return document.getElementById(id);
}

// 箭头向上
function dropup() {
    $$("dropimg").src = "/ssm/images/up.png";
    $("#dropdown-menu").fadeIn(1000);
}

// 剪头向下
function dropdown() {
    $$("dropimg").src = "/ssm/images/down.png";
    $("#dropdown-menu").fadeOut(1000);
}

// 全选按钮
function checkAll() {
    var all = $$("all");//获取到点击全选的那个复选框的id
    var one = document.getElementsByName("checkname");//获取到所有复选框名为checkname
    if (all.checked == true) {//因为获得的是数组，所以要循环 为每一个checked赋值
        for (var i = 0; i < one.length; i++) {
            one[i].checked = true;
        }
    } else {
        for (var j = 0; j < one.length; j++) {
            one[j].checked = false;
        }
    }
}

// 取消全选
function cancel() {
    var all = $$("all");//获取到点击全选的那个复选框的id
    var one = document.getElementsByName("checkname");//获取到所有复选框名为checkname
    var num = 0;
    for (var i = 0; i < one.length; i++) {
        if (one[i].checked == false) {
            $$("all").checked = false;
        } else {
            num++;
            if (num == one.length) {
                $$("all").checked = true;
            }
        }
    }
}

//删除所选
function deleteSelect() {
    var all = $$("all-checkbox");//获取到checkbox所属父级tbody的id
    var one = document.getElementsByName("checkname");//获取到所有复选框名为checkname
    var flag = false;
    var num = 0;
    var arr = [];
    var count = 0;
    for (var j = 0; j < one.length; j++) {
        if (one[j].checked) {
            flag = true;
            num++;
        }
    }
    if (flag == true) {
        if (confirm("您确定要删除" + num + "条数据？")) {
            var sum = 0;
            for (var i = one.length - 1; i >= 0; i--) {
                if (one[i].checked) {
                    arr[sum++] = $$("myTable").rows[i + 1].cells[1].innerText;
                    all.deleteRow(i);
                    count++;
                }
            }
            $$("maxPage").innerText = (Math.ceil((nc - count) / parseInt($$("pageCount").value)));
            // $$("thisPage").innerText = 1;
            $$("tiaoshu").innerText = nc - count;  // 动态显示表格里的数据条数
            if (one.length == 0) {
                $$("all").checked = false;   // 如果没有数据，将全选按钮状态改为不被选中
            }
            var moye = $("#maxPage").text();
            var dangqian = $("#thisPage").text();
            if (dangqian > moye) {
                $("#thisPage").val(moye);
            }
        }
    }

    for (i in arr) {
        $.ajax({
            async: false,
            url: "/ssm/BusinessDelete",
            data: {
                bnsId: arr[i]
            },
            type: "post",
            dataType: "json",
            timeout:
                10000,
            success:
                function (data) {
                    pageing();
                }
        });
    }
}

function firm() {
    //利用对话框返回的值 （true 或者 false）
    if (confirm("您确定要退出登录并返回至首页？")) {
        //如果是true ，那么就把页面转向首页
        location.href = "/ssm/html/test.html";
    }
}

$(function () {
    $("#head").load("/ssm/html/header.html");
});

$(function () {
    $("#foot").load("/ssm/html/footer.html");
});


// 不带分页的显示按钮
// $("#serach-btn").click(function () {
//     var bns_id = $("#bns_id").val();
//     var bns_name = $("#bns_name").val();
//     var bns_tel = $("#bns_tel").val();
//     var bns_group = $("input[name='inlineRadioOptions']:checked").val();
//     var bns_area = $("#bns_area").val();
//     var bns_addr = $("#bns_addr").val();
//     var bns_moneyFrom = $("#bns_moneyFrom").val();
//     var bns_moneyTo = $("#bns_moneyTo").val();
//     $.ajax({
//         url: "../BusinessSelect",
//         data: {
//             bns_id: bns_id,
//             bns_name: bns_name,
//             bns_tel: bns_tel,
//             bns_group: bns_group,
//             bns_area: bns_area,
//             bns_addr: bns_addr,
//             bns_moneyFrom: bns_moneyFrom,
//             bns_moneyTo: bns_moneyTo
//         },
//         type: "post",
//         dataType: "json",
//         timeout: 10000,
//         success: function (data) {
//             $("tbody").html("");
//             if (data != null) {
//                 $("#tiaoshu").html(data.length);
//                 for (i in data) {
//                     $("tbody").html($("tbody").html() + "<tr>\n" +
//                         "<td>" +
//                         "<input type=\"checkbox\" name=\"checkname\" onclick=\"cancel()\">" +
//                         "</td>" +
//                         "<td>" + data[i].bns_id + "</td>" +
//                         "<td>" + data[i].bns_name + "</td>" +
//                         "<td>" + data[i].bns_tel + "</td>" +
//                         "<td>" + data[i].bns_group + "</td>" +
//                         "<td>" + data[i].bns_area + "</td>" +
//                         "<td>" + data[i].bns_addr + "</td>" +
//                         "<td>" + data[i].bns_money + "</td>" +
//                         "<td>" +
//                         "  <a href=\"insert.jsp?id=" + data[i].bns_id + "\"><input class=\"btn btn-update\" type=\"button\" value=\"修改\"></a>" +
//                         "</td>" +
//                         "</tr>");
//                 }
//             }
//         }
//     });
// });


var bns_id = "";
var bns_name = "";
var bns_tel = "";
var bns_group = "";
var bns_area = "";
var bns_addr = "";
var bns_moneyFrom = "";
var bns_moneyTo = "";
var nc = "";
var mpage = "";
var npage = "";

// 带分页的显示按钮
$("#serach-btn").click(function () {
    $("#thisPage").val("1");
    bns_id = $("#bns_id").val();
    bns_name = $("#bns_name").val();
    bns_tel = $("#bns_tel").val();
    bns_group = $("input[name='inlineRadioOptions']:checked").val();
    bns_area = $("#bns_area").val();
    bns_addr = $("#bns_addr").val();
    bns_moneyFrom = $("#bns_moneyFrom").val();
    bns_moneyTo = $("#bns_moneyTo").val();
    pageing();
    $("#first-btn").css("pointer-events", "auto");
    $("#pre-btn").css("pointer-events", "auto");
    $("#next-btn").css("pointer-events", "auto");
    $("#last-btn").css("pointer-events", "auto");
    $("#jump-btn").css("pointer-events", "auto");
});

// 分页
function pageing() {
    if ($$("pageCount").value != "") {
        var pc = parseInt($$("pageCount").value);
        var count = $("#thisPage").val();
        $("#thisPage").text(count);
        npage = count;

        $.ajax({
            url: "/ssm/PageIng",
            data: {
                pc: pc,
                count: count,
                bnsId: bns_id,
                bnsName: bns_name,
                bnsTel: bns_tel,
                bnsGroup: bns_group,
                bnsArea: bns_area,
                bnsAddr: bns_addr,
                bnsMoneyFrom: bns_moneyFrom,
                bnsMoneyTo: bns_moneyTo
            },
            type: "post",
            dataType: "json",
            timeout: 10000,
            success: function (data) {
                if (data.page.maxPage == 0) {
                    $("#maxPage").html(1);
                    mpage = 1;
                } else {
                    $("#maxPage").html(data.page.maxPage);
                    mpage = data.page.maxPage;
                }
                $("tbody").html("");
                if (data.page.list != null && data.page.list.length != 0) {
                    $("#tiaoshu").html(data.page.page);
                    $$("all").checked = false;
                    nc = data.page.page;
                    for (i in data.page.list) {
                        $("tbody").html($("tbody").html() + "<tr>" +
                            "<td>" +
                            "<input type=\"checkbox\" name=\"checkname\" onclick=\"cancel()\">" +
                            "</td>" +
                            "<td>" + data.page.list[i].bnsId + "</td>" +
                            "<td>" + data.page.list[i].bnsName + "</td>" +
                            "<td>" + data.page.list[i].bnsTel + "</td>" +
                            "<td>" + data.page.list[i].bnsGroup + "</td>" +
                            "<td>" + data.page.list[i].bnsArea + "</td>" +
                            "<td>" + data.page.list[i].bnsAddr + "</td>" +
                            "<td>" + data.page.list[i].bnsMoney + "</td>" +
                            "<td>" +
                            "  <a href=\"insert.jsp?id=" + data.page.list[i].bnsId + "\"><input class=\"btn btn-update\" type=\"button\" value=\"修改\"></a>" +
                            "</td>" +
                            "</tr>");
                    }
                } else {
                    $("#tiaoshu").html(0);
                    $("#maxPage").html(1);
                    $("#thisPage").html(1);
                    $$("all").checked = false;
                }
            }
        });
    }
}


// 下一页
$("#next-btn").click(function () {
    var thisPage = $("#thisPage").text();
    var maxPage = $("#maxPage").text();
    if (thisPage * 1 + 1 > maxPage * 1) {
        $("#thisPage").val(maxPage)
        alert("已经是最后一页");
    } else {
        $("#thisPage").val(thisPage * 1 + 1)
    }
    pageing();
});

// 首页
$("#first-btn").click(function () {
    $("#thisPage").val("1");
    pageing();
});

// 上一页
$("#pre-btn").click(function () {
    var thisPage = $("#thisPage").text();
    if (thisPage * 1 - 1 < 1) {
        $("#thisPage").val("1")
        alert("已经是第一页");
    } else {
        $("#thisPage").val(thisPage * 1 - 1)
    }
    pageing();
});

// 末页
$("#last-btn").click(function () {
    var moye = $("#maxPage").text();
    $("#thisPage").val(moye);
    pageing();
});

// 跳转到
$("#jump-btn").click(function () {
    if ($("#jump-txt").val() != "") {
        var thisPage = $("#thisPage").text();
        var maxPage = $("#maxPage").text();
        var jump = $("#jump-txt").val();
        if (jump != 0) {
            if (jump * 1 > maxPage * 1) {
                $("#thisPage").val(maxPage);
            } else {
                $("#thisPage").val(jump);
            }
        } else {
            $("#thisPage").val(1);
        }
        pageing();
    }
});

// 行数控制
$("#pageCount").change(function () {
    if ($("#tiaoshu").html() != 0) {
        $("#thisPage").val("1");
        pageing();
    }
});

function load() {
    $("#first-btn").css("pointer-events", "none");
    $("#pre-btn").css("pointer-events", "none");
    $("#next-btn").css("pointer-events", "none");
    $("#last-btn").css("pointer-events", "none");
    $("#jump-btn").css("pointer-events", "none");
}
