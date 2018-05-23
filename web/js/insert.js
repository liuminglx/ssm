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

function firm() {
    //利用对话框返回的值 （true 或者 false）
    if (confirm("您确定要返回到查询页？")) {
        //如果是true ，那么就把页面转向查询页
        location.href = "search.jsp";
    }
}

$(function () {
    $("#head").load("/ssm/html/header.html");
});

$(function () {
    $("#foot").load("/ssm/html/footer.html");
});

if ($("#bnsid").text() != "") {
    $.ajax({
        url: "/ssm/BusinessSelectById",
        data: {
            bnsId: $("#bnsid").html()
        },
        type: "post",
        dataType: "json",
        timeout: 10000,
        success:
            function (data) {
                $("input[name='bnsName']").val(data.businessModel.bnsName);
                $("input[name='bnsTel']").val(data.businessModel.bnsTel);
                for (var i = 0; i < $("input[name='bnsGroup']").length; i++) {
                    if ($("input[name='bnsGroup']").eq(i).val() == data.businessModel.bnsGroup) {
                        $("input[name='bnsGroup']").eq(i).prop("checked", true);
                    }
                }
                if ($("#bnsid").val() != null) {
                    $("select[name='bnsArea']").val(data.businessModel.bnsArea);
                }
                $("input[name='bnsAddr']").val(data.businessModel.bnsAddr);
                $("input[name='bnsMoney']").val(data.businessModel.bnsMoney);
            }
    });
}

$("#update-btn").click(function () {
    var bns_id = $("#bnsid").html();
    var bns_name = $("input[name='bnsName']").val();
    var bns_tel = $("input[name='bnsTel']").val();
    var bns_group = $("input[name='bnsGroup']:checked").val();
    var bns_area = $("select[name='bnsArea']").val();
    var bns_addr = $("input[name='bnsAddr']").val();
    var bns_money = $("input[name='bnsMoney']").val();
    if ($$("bnsName").value != "") {
        if ($$("bnsTel").value != "") {
            if ($$("bnsAddr").value != "") {
                if ($$("bnsMoney").value != "") {
                    $.ajax({
                        url: "/ssm/BusinessUpdate",
                        data: {
                            bnsId: bns_id,
                            bnsName: bns_name,
                            bnsTel: bns_tel,
                            bnsGroup: bns_group,
                            bnsArea: bns_area,
                            bnsAddr: bns_addr,
                            bnsMoney: bns_money
                        },
                        type: "post",
                        dataType: "json",
                        timeout: 10000,
                        success: function (data) {
                            if (data.num != 0) {
                                window.location.href = "/ssm/html/search.jsp";
                            } else {
                                alert("抱歉，数据没有任何改变，修改失败");
                            }
                        }
                    });
                } else {
                    alert("人均消费必须填写");
                    return false;
                }
            } else {
                alert("详细地址必须填写");
                return false;
            }
        } else {
            alert("商家电话必须填写");
            return false;
        }
    } else {
        alert("商家名必须填写");
        return false;
    }
});

//添加验证
function bnsCheck() {
    if ($$("bnsName").value != "") {
        if ($$("bnsTel").value != "") {
            if ($$("bnsAddr").value != "") {
                if ($$("bnsMoney").value != "") {
                    return true;
                } else {
                    alert("人均消费必须填写");
                    return false;
                }
            } else {
                alert("详细地址必须填写");
                return false;
            }
        } else {
            alert("商家电话必须填写");
            return false;
        }
    } else {
        alert("商家名必须填写");
        return false;
    }
}
