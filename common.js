$(window).on("scroll",function(){
	//判断是否滚动
	if($(window).scrollTop() == 0){
		$(".common-header").removeClass("fixed");
	} else{
		$(".common-header").addClass("fixed");
	}
})
$(function(){
	//点击标题出现相应内容
	$(".info-nav ul li").click(function(){
	    $(this).addClass("active").siblings().removeClass("active");
	    var i = $(".info-nav ul li").index(this);
	    $(".info-txt-box .info-txt").eq(i).show().siblings().hide();
	});
	
	//后退并刷新
//	window.location.href = document.referrer;
})

//判断微信
var ua = navigator.userAgent.toLowerCase();
var isWeixin = ua.indexOf('micromessenger') != -1;

var isIos=/(iPhone|iPad|iPod|iOS)/i.test(navigator.userAgent)
///获取浏览器的参数
function GetQueryString(name)
{
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
    var r = window.location.search.substr(1).match(reg);
    if(r!=null)return  decodeURIComponent(r[2]); return null;
};
//设置cookie
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+";path=/";
}
//获取cookie
function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}
//解决微信返回iphone不刷新
function pushHistory()
{
    //console.log(navigator.userAgent);
    if(isWeixin||isIos){
        window.addEventListener("popstate", function(e) {
            self.location.reload();
        }, false);
        var state = {
            title : "",
            url : "#"
        };
        window.history.replaceState(state, "", "#");
   }
};


//时间转字符串格式
Date.prototype.Format = function (fmt) { //author: meizz
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

//金额千分位（保留两位小数）
Vue.filter('SumFormat', function(value) {
//	console.log(value)
	if(!value) return '0.00';	
	var intPart =  Number(value)|0; //获取整数部分
	var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分每三位加一个逗号
	var floatPart = ".00"; //预定义小数部分
	if(typeof value !== 'string'){
	   value = value.toString();
	}
	var value2Array = value.split(".");

	//=2表示数据有小数位
	if(value2Array.length == 2) {
		floatPart = value2Array[1].toString(); //拿到小数部分

		if(floatPart.length == 1) { //补0
			return intPartFormat + "." + floatPart + '0';
		} else {
			return intPartFormat + "." + floatPart;
		}

	} else {
		return intPartFormat + floatPart;
	}
})
//数量千分位（整数）
Vue.filter('NumFormat', function(value) {
//	console.log(value)
	if(!value) return '0';	
	var intPart =  Number(value)|0; //获取整数部分
	var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
	return intPartFormat;
})