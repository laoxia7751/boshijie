$(function(){
	//header nav
	$(".nav_list > li").hover(function(){
		$(this).addClass("on");
		$(this).find(".submain").addClass("am-animation-fade");
	},function(){
		$(this).removeClass("on");
	})
	
	//头部滚轮监听
	//产品列表自动返回顶部头部显示不出来bug修复
	$(window).scroll(function(){
		if($(window).scrollTop()<20){
			$('.pc_header').removeClass("hide_header").addClass("show_header");
		}
	})
	
	$(window).bind('mousewheel', function(event, delta){
		var dir = delta > 0 ? 'Up' : 'Down';
		if (dir == 'Up') {
			$('.pc_header').removeClass("hide_header").addClass("show_header")
		} else {
			$('.pc_header').removeClass("show_header").addClass("hide_header")
		}
	});
	
	
	$(".nav_list .submain").hover(function(){
		$(this).addClass("on am-animation-fade");
	},function(){
		$(this).removeClass("on am-animation-fade");
	});
	
	//发展历程点击效果
	$(".history_swiper a").click(function(){
		$oId=$(this).attr("href");
		$(".history_swiper a").removeClass("on");
		$(this).addClass("on");
		$(".history_list li").removeClass("active");
		$($oId).addClass("active")
	})
	
	//index_banner
	var swiper = new Swiper('.index_banner', {
	    pagination: '.banner-pagination',
	    paginationClickable: true,
	    loop: true,
	    centeredSlides: true,
	    autoplay: 4000,
	    autoplayDisableOnInteraction: false,
	    speed:500
	});
	
	//banner下新闻
	jQuery(".top_news").slide({mainCell:".infoList",autoPage:true,effect:"topLoop",autoPlay:true,easing:"easeOutCirc",delayTime:1000});
	
	//产品轮播pc
	var swiper = new Swiper('.product_content .swiper-container', {
	    nextButton: '.swiper-button-next',
	    prevButton: '.swiper-button-prev',
	    slidesPerView: 2,
	    paginationClickable: true,
	    spaceBetween: 30,
	    loop:true,
	    autoplay:5000
	});
	
	//产品轮播mobile
	var swiper = new Swiper('.product_banner_m .swiper-container', {
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 10,
        loop:true
   });
	
    //底部二维码
    $(".look_wechat").hover(function(){
    	$(".foot_wechat .ewm_box").addClass("on");
    },function(){
    	$(".foot_wechat .ewm_box").removeClass("on");
    })
    
    //栏目页最新产品
    var swiper = new Swiper('.new_product .swiper-container', {
        nextButton: '.new_product .swiper-button-next',
        prevButton: '.new_product .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 0,
        loop: true,
        autoplay: 5000
    });
    
    //荣誉资质轮播
    jQuery(".honor_bn").slide({titCell:".hd ul",mainCell:".bd ul",autoPage:true,effect:"leftLoop",autoPlay:true,vis:4,delayTime:2000,trigger:"click"});
    
    //发展历程时间轴
    var swiper = new Swiper('.history_swiper', {
    	nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        slidesPerView: 5,
        paginationClickable: true,
        breakpoints: {
            640: {
                slidesPerView: 3
            },
            414: {
                slidesPerView: 2
            }
        }
    });
    
    
    //服务页面图片切换
    $(".service .change").on('click mouseover', function(){
    	$(".c_img").attr("src",$(this).attr("imgurl"));
    })
    
    //产品列表悬浮
    $(window).scroll(function(){
    	$(window).scrollTop() > 100 ? $(".fixed").addClass("on") : $(".fixed").removeClass("on");
    })
    
    $(".product_list .menu,.aside_list").hover(function(){
    	$(".aside_list").addClass("show");
    },function(){
    	$(".aside_list").removeClass("show");
    })
    
    $(".product_list .toTop,.phone_list").hover(function(){
    	$(".phone_list").addClass("show");
    },function(){
    	$(".phone_list").removeClass("show");
    })
})

