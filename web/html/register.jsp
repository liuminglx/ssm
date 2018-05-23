<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <link rel="stylesheet" href="/ssm/css/bootstrap.min.css">
    <link rel="stylesheet" href="/ssm/css/register.css">
    <title>注册</title>
</head>
<body id="test">
<div class="test">
    <header class="head" id="head">

    </header>
    <nav class="nav">
        <div class="row">
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                <ul class="nav-ul-l">
                    <li class="nav-ul-li-l">
                        <a href="login.jsp">
                            <span id="denglu">登录</span>
                        </a>
                    </li>
                    <li class="nav-ul-li-l">
                        <a href="register.jsp">
                            <span id="zhuce">注册</span>
                        </a>
                    </li>
                    <li class="dropdown nav-ul-li-l" id="nav-ul-li-l">
                        <a href="" class="title" onmouseover="dropup()">
                            <img id="dropimg" src="/ssm/images/down.png">
                            <span id="shangjia">商家管理</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="col-md-6 col-lg-6 col-sm-6 col-xs-6">
                <span class="nav-ul-r">
                        <span id="spid">正在注册....</span>
                </span>
            </div>
        </div>
        <ul class="dropdown-menu" id="dropdown-menu">
            <li class="xl" onmouseleave="dropdown()">
                <div class="xldiv-l">
                    <a href="login.jsp" onclick="sclick()">
                        <img class="xltp-l" src="/ssm/images/timg.png">
                        <span class="xlsp-l">查询</span>
                    </a>
                </div>
                <div class="xldiv-r">
                    <a href="login.jsp" onclick="iclick()">
                        <img class="xltp-r" src="/ssm/images/zj.png">
                        <span class="xlsp-r">添加</span>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <div class="test">
        <div class="div-login">
            <form action="/ssm/user/UserRegist" method="post" id="rform">
                <div class="login-dl">
                    <ul class="login-ul-l">
                        <li>
                            <label class="login-lbl">用户名</label>
                            <input type="text" class="login-txt" id="txtName" name="userName" onblur="loginCheck()"
                                   placeholder="以字母开头且长度为20位">
                            <span class="check" id="check-name"></span>
                        </li>
                    </ul>
                    <ul class="login-ul-m">
                        <li>
                            <label class="login-lbl">密码</label>
                            <input type="password" class="login-txt" id="txtPwd1" name="userPwd" onblur="loginCheck()"
                                   placeholder="不能纯数字且长度为8位">
                            <span class="check" id="check-pwd1"></span>
                        </li>
                    </ul>
                    <ul class="login-ul-m">
                        <li>
                            <label class="login-lbl">确认密码</label>
                            <input type="password" class="login-txt" id="txtPwd2" onblur="loginCheck()"
                                   placeholder="不能纯数字且长度为8位">
                            <span class="check" id="check-pwd2"></span>
                        </li>
                    </ul>
                    <ul class="login-ul-r">
                        <li>
                            <input type="button" value="注册" class="login-btn" id="login-btn" onclick="success()"
                                   disabled>
                            <input type="button" value="返回首页" class="login-btn-return" id="login-btn-return"
                                   onclick="firm()">
                        </li>
                    </ul>
                </div>
            </form>
        </div>
    </div>
    <footer class="foot" id="foot">

    </footer>
</div>
<script src="/ssm/js/jquery1.12.4.min.js"></script>
<script src="/ssm/js/bootstrap.min.js"></script>
<script src="/ssm/js/register.js"></script>
</body>
</html>