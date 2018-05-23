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

clock();
