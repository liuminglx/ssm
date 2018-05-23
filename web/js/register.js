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
    var res = /^(?=[a-zA-Z])(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{0,19}$/;
    var pwd = /^\d+$/;
    if ($$("txtName").value != "") {
        if (res.test($$("txtName").value)) {
            if ($$("check-name").innerText != "该用户名已存在") {
                if ($$("txtPwd1").value != "") {
                    if ($$("txtPwd1").value.length <= 8) {
                        if (!pwd.test($$("txtPwd1").value)) {
                            if ($$("txtPwd2").value != "") {
                                if ($$("txtPwd1").value == $$("txtPwd2").value) {
                                    $$("check-name").innerText = "✔";
                                    $$("check-pwd1").innerText = "✔";
                                    $$("check-pwd2").innerText = "✔";
                                    $$("login-btn").style.backgroundColor = "#31b0d5";
                                    $$("login-btn").disabled = false;
                                } else {
                                    $$("check-pwd1").innerText = "两次密码输入不一致";
                                    // $$("check-name").innerText = "✔";
                                    $$("check-pwd2").innerText = " ";
                                    $$("login-btn").style.backgroundColor = "gray";
                                    $$("login-btn").disabled = true;
                                }
                            } else {
                                $$("check-pwd2").innerText = "确认密码必须填写";
                                // $$("check-name").innerText = "✔";
                                $$("check-pwd1").innerText = "✔";
                                $$("login-btn").style.backgroundColor = "gray";
                                $$("login-btn").disabled = true;
                            }
                        } else {
                            $$("check-pwd1").innerText = "密码不允许纯数字";
                            // $$("check-name").innerText = "✔";
                            $$("check-pwd2").innerText = " ";
                            $$("login-btn").style.backgroundColor = "gray";
                            $$("login-btn").disabled = true;
                        }
                    } else {
                        $$("check-pwd1").innerText = "密码不允许大于8位";
                        // $$("check-name").innerText = "✔";
                        $$("check-pwd2").innerText = " ";
                        $$("login-btn").style.backgroundColor = "gray";
                        $$("login-btn").disabled = true;
                    }
                } else {
                    $$("check-pwd1").innerText = "密码必须填写";
                    // $$("check-name").innerText = "✔";
                    $$("check-pwd2").innerText = " ";
                    $$("login-btn").style.backgroundColor = "gray";
                    $$("login-btn").disabled = true;
                }
            } else {
                $$("check-name").innerText = "该用户名已存在";
                $$("check-pwd1").innerText = " ";
                $$("check-pwd2").innerText = " ";
                $$("login-btn").style.backgroundColor = "gray";
                $$("login-btn").disabled = true;
            }
        } else {
            $$("check-name").innerText = "用户名输入不合法";
            $$("check-pwd1").innerText = " ";
            $$("check-pwd2").innerText = " ";
            $$("login-btn").style.backgroundColor = "gray";
            $$("login-btn").disabled = true;
        }
    } else {
        $$("check-name").innerText = "用户名必须填写";
        $$("check-pwd1").innerText = " ";
        $$("check-pwd2").innerText = " ";
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
                if (num > 0) {
                    $("#check-name").html("该用户名已存在");
                    $$("check-pwd1").innerText = " ";
                    $$("check-pwd2").innerText = " ";
                    $$("login-btn").style.backgroundColor = "gray";
                    $$("login-btn").disabled = true;
                } else {
                    if (/^(?=[a-zA-Z])(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{0,19}$/.test($$("txtName").value)) {
                        $("#check-name").html("✔");
                    } else {
                        $("#check-name").html("用户名输入不合法");
                    }
                }
            }
        }
    })
});

function success() {
    setTimeout("$$('rform').submit()", 5000);

    var n = 5;
    setInterval(function () {
        var sp = $$("spid");
        sp.innerHTML = "注册成功" + n-- + "秒后跳转到登录页面";
    }, 1000);
}

function sclick() {
    alert("查询操作之前请先登录");
}

function iclick() {
    alert("添加操作之前请先登录");
}
