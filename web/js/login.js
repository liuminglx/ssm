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

//登陆验证
function loginCheck() {
    var res = /^[a-zA-Z]\w{0,19}$/;
    var pwd = /^\d+$/;
    if ($$("txtName").value != "") {
        if ($$("check-name").innerText != "该用户不存在") {
            if (res.test($$("txtName").value)) {
                if ($$("txtPwd").value != "") {
                    if (!pwd.test($$("txtPwd").value)) {
                        if ($$("txtPwd").value.length <= 8) {
                            $$("check-name").innerText = "用户名格式正确";
                            $$("check-pwd").innerText = "密码格式正确";
                            $$("login-btn").style.backgroundColor = "green";
                            $$("login-btn").disabled = false;
                        } else {
                            $$("check-pwd").innerText = "密码不允许大于8位";
                            $$("check-name").innerText = " ";
                            $$("login-btn").style.backgroundColor = "gray";
                            $$("login-btn").disabled = true;
                        }
                    } else {
                        $$("check-pwd").innerText = "密码不允许纯数字";
                        $$("check-name").innerText = " ";
                        $$("login-btn").style.backgroundColor = "gray";
                        $$("login-btn").disabled = true;
                    }
                } else {
                    $$("check-pwd").innerText = "密码必须填写";
                    $$("check-name").innerText = " ";
                    $$("login-btn").style.backgroundColor = "gray";
                    $$("login-btn").disabled = true;
                }
            } else {
                $$("check-name").innerText = "用户名输入不合法";
                $$("check-pwd").innerText = " ";
                $$("login-btn").style.backgroundColor = "gray";
                $$("login-btn").disabled = true;
            }
        } else {
            $$("check-pwd").innerText = " ";
            $$("login-btn").style.backgroundColor = "gray";
            $$("login-btn").disabled = true;
        }
    } else {
        $$("check-name").innerText = "用户名必须填写";
        $$("check-pwd").innerText = " ";
        $$("login-btn").style.backgroundColor = "gray";
        $$("login-btn").disabled = true;
    }
}

function firm() {
    //利用对话框返回的值 （true 或者 false）
    if (confirm("您确定要返回至首页？")) {
        //如果是true ，那么就把页面转向首页
        location.href = "test.html";
    }
}


$(function () {
    $("#head").load("/ssm/html/header.html");
});

$(function () {
    $("#foot").load("/ssm/html/footer.html");
});

$("#txtName").blur(function () {
    var userName = $("#txtName").val();
    $.ajax({
        url: "/ssm/user/UserSelectByName",
        data: {
            userName: userName
        },
        type: "post",
        dataType: "json",
        timeout: 10000,
        success: function (data) {
            var num = data.num;
            if ($$("txtName").value != "") {
                if (num == 0) {
                    $("#check-name").html("该用户不存在");
                    $$("check-pwd").innerText = " ";
                    $$("login-btn").style.backgroundColor = "gray";
                    $$("login-btn").disabled = true;
                } else {
                    $$("check-pwd").innerText = "密码必须填写";
                    $$("check-name").innerText = " ";
                    $$("login-btn").style.backgroundColor = "gray";
                    $$("login-btn").disabled = true;
                }
            }
        }
    })
});

$("#login-btn").click(function () {
    var userName = $("#txtName").val();
    var userPwd = $("#txtPwd").val();
    $.ajax({
        url: "/ssm/user/UserLogin",
        data: {
            userName: userName,
            userPwd: userPwd
        },
        type: "post",
        dataType: "json",
        timeout: 10000,
        success: function (data) {
            var num = data.num;
            if (num == 0) {
                $("#check-name").html("用户名或密码错误");
                $$("check-pwd").innerText = " ";
                $$("login-btn").style.backgroundColor = "gray";
                $$("login-btn").disabled = true;
            }
            else {
                $("#check-name").html(" ");
                location.href = "search.jsp";
            }
        }
    })
});

function sclick() {
    alert("查询操作之前请先登录");
}

function iclick() {
    alert("添加操作之前请先登录");
}
