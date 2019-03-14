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