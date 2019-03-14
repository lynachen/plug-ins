/**
 * Created by Administrator on 2018/4/8.
 */
/*var apiUrl='http://192.168.1.8:8666/api/WXWeChatApi/'
var imgUrl='http://192.168.1.8:8666';
//获取商户号及调起支付接口
var apiUrlSecond='http://192.168.1.8:8666/Api/WXOnlineApi/'*/

//  .8测试环境

//
//var apiUrlxin='http://192.168.1.8:8666/api/WXKCPublicNumberApi/'
//var apiUrl="http://192.168.1.8:8666/api/WXKCPublicNumberApi/"
//var imgUrl='http://192.168.0.8:8666'
//var apiUrlSecond='http://192.168.0.8:8666/Api/WXOnlineApi/'
//   135测试环境


//var apiUrlxin='http://tst.zhongqizhiyun.com:8020/api/WXKCPublicNumberApi/'
//var apiUrl="http://tst.zhongqizhiyun.com:8020/api/WXKCPublicNumberApi/"
//var imgUrl='http://tst.zhongqizhiyun.com:8020'
//var apiUrlSecond='http://tst.zhongqizhiyun.com:8020/Api/WXOnlineApi/'


//正式环境
//var wxUrl="http://erp.jingke.com/api/PublicNumberApi/" 
var apiUrlxin="http://erp.jingke.com/api/ZQZYBasicsApi/"
var apiUrl="http://erp.jingke.com/api/PublicNumberApi/" //正式
//var apiUrl="http://tst.jingke.com/api/PublicNumberApi/"
var imgUrl='http://erp.jingke.com' //正式
//var imgUrl='http://tst.jingke.com' //测试
//var Employee ='http://erp.jingke.com/Api/FurnitureApi/'//员工绑定
var Employee ='http://erp.jingke.com/api/JingKePublicApi/'//员工绑定（正式）
//var Employee ='http://tst.jingke.com/api/JingKePublicApi/'//员工绑定（测试）


//var companyIDs='';//家具
//sessionStorage.companyID='80001'  //文新companyID
sessionStorage.openId='o4Je4whLp4idugPjTZFb85kjFjbI'
//sessionStorage.stuID='ST00289'

var companyID=GetQueryString('companyID')
sessionStorage.companyID=companyID
var companyID='80000'; //companyID 调用8000的地方：微信支付和getCodeOpenId
// h5支付授权域名
//var wap_url='http://wxt.wenxinedu.com'
// h5支付网站名称
//var wap_name='精课'
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
