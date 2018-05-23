<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <link rel="stylesheet" href="/ssm/css/bootstrap.min.css">
    <link rel="stylesheet" href="/ssm/css/insert.css">
    <title>添加</title>
    <link rel="stylesheet" href="/ssm/css/test.css">
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
                        <span>${userName}已登录</span>
                </span>
            </div>
        </div>
        <ul class="dropdown-menu" id="dropdown-menu">
            <li class="xl" onmouseleave="dropdown()">
                <div class="xldiv-l">
                    <a href="search.jsp">
                        <img class="xltp-l" src="/ssm/images/timg.png">
                        <span class="xlsp-l">查询</span>
                    </a>
                </div>
                <div class="xldiv-r">
                    <a href="insert.jsp">
                        <img class="xltp-r" src="/ssm/images/zj.png">
                        <span class="xlsp-r">添加</span>
                    </a>
                </div>
            </li>
        </ul>
    </nav>
    <div class="div-login">
        <div class="login-dl">
            <c:if test="${param.id!=null}">
            <form>
                <div class="reg-div form-group">
                    <ul class="reg-ul">
                        <li class="reg-li">
                            <label class="col-lg-1 control-label">商家ID</label>
                            <label class="col-lg-2 lblsystem" id="bnsid">${param.id}</label>
                            </c:if>
                            <c:if test="${param.id==null}">
                            <form action="/ssm/BusinessInsert" method="post" onsubmit="return bnsCheck()">
                                <div class="reg-div form-group">
                                    <ul class="reg-ul">
                                        <li class="reg-li">
                                            <label class="col-lg-1 control-label">商家ID</label>
                                            <label class="col-lg-2 lblsystem">系统自动生成</label>
                                            </c:if>
                                            <label class="col-lg-1 control-label">商家名</label>
                                            <input type="text" class="col-lg-1 form-control" name="bnsName"
                                                   id="bnsName">
                                        </li>
                                        <li class="reg-li">
                                            <label class="col-lg-1 control-label">电话</label>
                                            <input type="text" class="col-lg-1 form-control" name="bnsTel" id="bnsTel"
                                                   onkeyup="this.value=this.value.replace(/[^0-9-]+/,'')">
                                            <label class="col-lg-1 control-label">商家分类</label>
                                            <label class="radio-inline col-lg-1">
                                                <input type="radio" name="bnsGroup" id="inlineRadio1"
                                                       value="中餐" checked>
                                                <span>中餐</span>
                                            </label>
                                            <label class="radio-inline col-lg-1">
                                                <input type="radio" name="bnsGroup" id="inlineRadio2"
                                                       value="韩餐">
                                                <span>韩餐</span>
                                            </label>
                                            <label class="radio-inline col-lg-1">
                                                <input type="radio" name="bnsGroup" id="inlineRadio3"
                                                       value="日料">
                                                <span>日料</span>
                                            </label>
                                        </li>
                                        <li class="reg-li">
                                            <label class="col-lg-1 control-label">商家地址</label>
                                            <select class="col-lg-1 form-control" name="bnsArea">
                                                <option value="甘井子区">甘井子区</option>
                                                <option value="沙河口区">沙河口区</option>
                                                <option value="中山区">中山区</option>
                                                <option value="西岗区">西岗区</option>
                                                <option value="高新园区">高新园区</option>
                                            </select>
                                            <label class="col-lg-1 control-label">详细地址</label>
                                            <input type="text" class="col-lg-1 form-control address" name="bnsAddr"
                                                   id="bnsAddr">
                                        </li>
                                        <li class="reg-li">
                                            <label class="col-lg-1 control-label">人均消费</label>
                                            <input type="text" class="col-lg-1 form-control" name="bnsMoney"
                                                   id="bnsMoney"
                                                   onkeyup="value=value.replace(/[^\d]/g,'')" maxlength="6">
                                            <label style="color: red;font-size: 15px;margin: 8px 0 0 40px;">※注意：每一项都是必填项，否则数据无法保存※</label>
                                        </li>
                                        <li class="reg-li">
                                            <input class="btn btn-default1 btn-clear" type="reset" value="清空">
                                            <c:if test="${param.id!=null}">
                                                <input class="btn btn-default1 btn-save" type="button" id="update-btn"
                                                       value="保存">
                                            </c:if>
                                            <c:if test="${param.id==null}">
                                                <input class="btn btn-default1 btn-save" type="submit" value="保存">
                                            </c:if>
                                            <input class="btn btn-default1 btn-back" type="button" value="返回"
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
    <script src="/ssm/js/insert.js"></script>
</body>
</html>
