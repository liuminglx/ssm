<%@ page contentType="text/html; charset=UTF-8" language="java" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport">
    <link rel="stylesheet" href="/ssm/css/bootstrap.min.css">
    <link rel="stylesheet" href="/ssm/css/search.css">
    <title>查询</title>
</head>
<body id="test" onload="load()">
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
                        <a href="register.html">
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
            <form>
                <div class="reg-div form-group">
                    <ul class="reg-ul">
                        <li class="reg-li">
                            <label class="col-lg-1 control-label">商家ID</label>
                            <input type="text" class="col-lg-1 form-control" id="bns_id">
                            <label class="col-lg-1 control-label">商家名</label>
                            <input type="text" class="col-lg-1 form-control" id="bns_name">
                            <label class="col-lg-1 control-label">电话</label>
                            <input type="text" class="col-lg-1 form-control" id="bns_tel"
                                   onkeyup="this.value=this.value.replace(/[^0-9-]+/,'')">
                        </li>
                        <li class="reg-li">
                            <label class="col-lg-1 control-label">商家分类</label>
                            <label class="radio-inline col-lg-1">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio1" value="中餐">
                                <span>中餐</span>
                            </label>
                            <label class="radio-inline col-lg-1">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio2" value="韩餐">
                                <span>韩餐</span>
                            </label>
                            <label class="radio-inline col-lg-1">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio3" value="日料">
                                <span>日料</span>
                            </label>
                            <label class="radio-inline col-lg-1">
                                <input type="radio" name="inlineRadioOptions" id="inlineRadio4" value="" checked>
                                <span>全部</span>
                            </label>
                        </li>
                        <li class="reg-li">
                            <label class="col-lg-1 control-label">商家地址</label>
                            <select class="col-lg-1 form-control" id="bns_area">
                                <option value="">全部</option>
                                <option value="甘井子区">甘井子区</option>
                                <option value="沙河口区">沙河口区</option>
                                <option value="中山区">中山区</option>
                                <option value="西岗区">西岗区</option>
                                <option value="高新园区">高新园区</option>
                            </select>
                            <label class="col-lg-1 control-label">详细地址</label>
                            <input type="text" class="col-lg-1 form-control address" id="bns_addr">
                        </li>
                        <li class="reg-li">
                            <label class="col-lg-1 control-label">人均消费</label>
                            <input type="text" class="col-lg-1 form-control" id="bns_moneyFrom"
                                   onkeyup="value=value.replace(/[^\d]/g,'')"  maxlength="9">
                            <label class="col-lg-1 control-label">~&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</label>
                            <input type="text" class="col-lg-1 form-control" id="bns_moneyTo"
                                   onkeyup="value=value.replace(/[^\d]/g,'')"  maxlength="9">
                            <label class="col-lg-1 control-label">元/人</label>
                        </li>
                        <li class="reg-li">
                            <input class="btn btn-default1 btn-clear" type="reset" value="清空">
                            <input class="btn btn-default1 btn-search" type="button" id="serach-btn" value="查询">
                            <input class="btn btn-default1 btn-exit" type="button" value="退出登录" onclick="firm()">
                        </li>
                    </ul>
                    <hr class="hr-1">
                </div>
            </form>
            <div class="login-tb">
                <ul class="search-ul">
                    <li>
                        <input class="btn btn-clear" type="button" value="删除所选" onclick="deleteSelect()">
                        <label class="search-lbl-l">第
                            <label class="shuzi" id="thisPage">1</label>
                            页/共
                            <label class="shuzi" id="maxPage">1</label>
                            页
                        </label>
                        <label class="search-lbl-r">共查到
                            <c:if test="${business!=null}">
                                <label class="shuzi" id="tiaoshu">1</label>
                            </c:if>
                            <c:if test="${business==null}">
                                <label class="shuzi" id="tiaoshu">0</label>
                            </c:if>
                            条消息
                        </label>
                    </li>
                </ul>
                <div class="div-table">
                    <table class="table table-bordered table-condensed table-striped" id="myTable">
                        <thead class="table-head">
                        <tr class="danger">
                            <th>
                                <input type="checkbox" id="all" onclick="checkAll()">
                            </th>
                            <th>商家ID</th>
                            <th>商家名</th>
                            <th>电话</th>
                            <th>分类</th>
                            <th>地址</th>
                            <th>详细信息</th>
                            <th>人均(元/人)</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody class="table-body" id="all-checkbox">
                        <c:if test="${business!=null}">
                            <tr>
                                <td>
                                    <input type="checkbox" name="checkname" onclick="cancel()">
                                </td>
                                <td>${business.bnsId}</td>
                                <td>${business.bnsName}</td>
                                <td>${business.bnsTel}</td>
                                <td>${business.bnsGroup}</td>
                                <td>${business.bnsArea}</td>
                                <td>${business.bnsAddr}</td>
                                <td>${business.bnsMoney}</td>
                                <td>
                                    <a href="insert.jsp?id=${business.bnsId}">
                                        <input class="btn btn-update" type="button" value="修改">
                                    </a>
                                </td>
                            </tr>
                        </c:if>
                        <%
                            session.removeAttribute("business");
                        %>
                        </tbody>
                    </table>
                </div>
            </div>
            <nav aria-label="...">
                <ul class="pager">
                    <li>
                        <a style="cursor: pointer" id="first-btn">首页</a>
                    </li>
                    <li>
                        <a style="cursor: pointer" id="pre-btn">上一页</a>
                    </li>
                    <li>
                        <a style="cursor: pointer" id="next-btn">下一页</a>
                    </li>
                    <li>
                        <a style="cursor: pointer" id="last-btn">末页</a>
                    </li>
                    <li>
                        <a style="cursor: pointer" id="jump-btn">跳转到</a>
                    </li>
                    <li>
                        <input type="text" id="jump-txt" onkeyup="value=value.replace(/[^\d]/g,'')">
                    </li>
                    <li>
                        <label>页</label>
                    </li>
                    <li>
                        <label>&nbsp&nbsp&nbsp&nbsp每页显示</label>
                    </li>
                    <li>
                        <%--<select id="pageCount">--%>
                        <%--<option>5</option>--%>
                        <%--<option>10</option>--%>
                        <%--</select>--%>
                        <input type="text" value="5" id="pageCount" onkeyup="value=value.replace(/^0|\D*$/g,'')">
                    </li>
                    <li>
                        <label>行</label>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
    <footer class="foot" id="foot">

    </footer>
</div>
<script src="/ssm/js/jquery1.12.4.min.js"></script>
<script src="/ssm/js/bootstrap.min.js"></script>
<script src="/ssm/js/search.js"></script>
</body>
</html>
