/**
 * Created with WebStorm.
 * User: rico ricopter@qq.com
 * Date: 2018/3/27
 * Time: 9:11
 * */
'use strict';

// 全局取得ID函数
function $$(id) {
    return document.getElementById(id);
}

// 取得系统时间
function clock() {
    var a = new Date();
    var y = a.getUTCFullYear();
    var month = checkTime(a.getMonth() + 1);
    var day = checkTime(a.getDate());
    var h = checkTime(a.getHours());
    var m = checkTime(a.getMinutes());
    var s = checkTime(a.getSeconds());
    var time = y + "-" + month + "-" + day + " " + h + ":" + m + ":" + s;
    document.getElementById("span-time").innerHTML = time;
    setTimeout("clock()", 1000);
}

// 显示补齐"0"
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
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

function sclick() {
    alert("查询操作之前请先登录");
}

function iclick() {
    alert("添加操作之前请先登录");
}
