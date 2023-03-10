// JavaScript Document

$(document).ready(function(){
						   
	var int = setInterval(bgScrollNext,5000);

    $("span.ImageScrollBottom a,span.ImageScrollTop a,#bgScroll ul li a").click(function() {
           var lnksleft;
           /*$('ul#leftNav li').each(function() {
            lnksleft+=$(this).find('a').attr('class')+",";            
            });                                       
             document.getElementById("leftlinkCss").value=lnksleft;                          
             var lnkref;
             $('ul#leftNav li').each(function() {
            lnkref+=$(this).find('a').attr('href')+",";            
            });                                    
            document.getElementById("leftlinkRef").value=lnkref;                                                
            var tmpUrl=$(this).attr('href');                        
            if(tmpUrl!="#")
            {
            $.ajax({            
              type: "POST",
              url: "/ajax/ajax-seecollection.aspx",
              async:false,
              data: ({  
                  url:tmpUrl,
                  leftlinkCss: document.getElementById("leftlinkCss").value,
                  leftlinkRef: document.getElementById("leftlinkRef").value  
                                                             
              }),
              success: function(response) 
              {                           
                 getid($("ul#leftNav li a."+response.toString()).attr('id'));   
              }             
          });          
          }      */                   
    });    
    $("ul.mouseslider li a").click(function() {	    		                               
	       //getid($("ul#leftNav li a.COLLECTIONS").attr('id'));	       	       
	        var lnksleft;
           $('ul#leftNav li').each(function() {
            lnksleft+=$(this).find('a').attr('class')+",";            
            });
             document.getElementById("leftlinkCss").value=lnksleft;                          
             var lnkref;
             $('ul#leftNav li').each(function() {
            lnkref+=$(this).find('a').attr('href')+",";            
            });                                    
            document.getElementById("leftlinkRef").value=lnkref;                                                
            var tmpUrl=$(this).attr('href');
            if(tmpUrl!="#")
            {
            $.ajax({            
              type: "POST",
              url: "/ajax/ajax-seecollection.aspx",
              async:false,
              data: ({  
                  url:tmpUrl,
                  leftlinkCss: document.getElementById("leftlinkCss").value,
                  leftlinkRef: document.getElementById("leftlinkRef").value  
                                                             
              }),
              success: function(response) 
              {                           
                 getid($("ul#leftNav li a."+response.toString()).attr('id'));   
              }
              
          });
          
          }
    });
    
   $("ul#leftNav li a").click(function() {
      var link = $(this).attr("href");
      if(link != "" && link != "#")
      {            
         $(this).parent().parent().find("a").removeClass("active");             
	       getid($(this).attr("id"));
	   }
    });
   $("ul#topNav li a").click(function() {    
      var headlink = $(this).attr("href");
      if(headlink != "" && headlink != "#")
      {
	    eraseCookie('page');
	  }
    });
// Clearfix
	$('<style type="text/css">.clearfix:after {visibility: hidden;display: block;font-size: 0;content: " ";clear: both;height: 0;}* html .clearfix { zoom: 1; }*:first-child+html .clearfix { zoom: 1; }</style>').appendTo("head");

// Cufon Move Top in IE 6 and IE 7
	if ($.browser.msie){
		var bW = parseInt($.browser.msie && $.browser.version);
		if(bW<=7 || document.documentMode && document.documentMode == 7){
			$('<style type="text/css">ul#topNav li a cufon { top:-9px; }</style>').appendTo("head");
		}
	}
	
	setMiddle()
	$("a#bgScrollNext").click(function(){
		bgScrollNext();
	});
	
	$("a#bgScrollPrev").click(function(){
		bgScollPrev();
	});
$(document).keydown(function(e){
	if (e.keyCode == 39) {
		if($("a#bgScrollNext").is(":visible")){
			bgScrollNext();
		}
		return false;
	} else if(e.keyCode == 37){
		if($("a#bgScrollPrev").is(":visible")){
			bgScollPrev();
		}
		return false;
	}
	
});

function bgScrollNext(){
        
//    if($("#bgScroll ul li img").hasClass('ScrollImage'))
//    {
//        var lnktxt=$("#bgScroll ul li a").html
//        alert(lnktxt);
//    }
    
    
	$("a#bgScrollNext,a#bgScrollPrev,span.ImageScrollTop,span.ImageScrollBottom").hide();
		$("#bgScroll ul li a img").removeClass("ScrollImage");
		var ulLeftInitialPosition = $("#bgScroll ul").css("left").replace("-","").replace("px","");
		var ulLeftPosition = $("#bgScroll ul").css("left").replace("-","").replace("px","");
		var winWidth = $(window).width();
		var mainWidth = 1024;
		if (winWidth<=1024){
			mainWidth = 800;
		}
		
		var scrollLiCount = $("#bgScroll ul li").size();
		var extraWidth = winWidth-mainWidth;
		var extraHalfWidth = extraWidth/2;
		
		var animatePosition = (ulLeftPosition*1) + mainWidth;
		$("#bgScroll ul li a img").animate({
			top : '0'
		},500);
		$("#bgScroll ul").animate({left : -animatePosition+'px'}, 800, 'easeOutBack' , function(){
			var li =document.createElement("li");
			li.innerHTML = $("#bgScroll ul li:first-child").html();
			$("#bgScroll ul li:first-child").remove();
			if(scrollLiCount > 2) {
				$("#bgScroll ul").css('left',-ulLeftInitialPosition+"px");
			}
			else {
				$("#bgScroll ul").css('left',extraHalfWidth+"px");
			}
			$("#bgScroll ul").append(li);
			$("#bgScroll ul li").css('width',mainWidth);
			moveBgScrollTop();
			showFullImage();
			$("a#bgScrollNext,a#bgScrollPrev").show();
		});
}
function bgScollPrev(){
	$("a#bgScrollNext,a#bgScrollPrev,span.ImageScrollTop,span.ImageScrollBottom").hide();
		$("#bgScroll ul li a img").removeClass("ScrollImage");
		var ulLeftInitialPosition = $("#bgScroll ul").css("left").replace("-","").replace("px","");
		var ulLeftPosition = $("#bgScroll ul").css("left").replace("px","");
		var winWidth = $(window).width();
		
		var mainWidth = 1024;
		if (winWidth<=1024){
			mainWidth = 800;
		}
		
		var scrollLiCount = $("#bgScroll ul li").size();
		var extraWidth = winWidth-mainWidth;
		var extraHalfWidth = extraWidth/2;
		
		var animatePosition = (ulLeftPosition*1) + mainWidth;
		$("#bgScroll ul li a img").animate({
			top : '0'
		},500);
		$("#bgScroll ul").animate({left : animatePosition+'px'}, 800, 'easeOutBack', function(){
			var li =document.createElement("li");
			li.innerHTML = $("#bgScroll ul li:last-child").html();
			$("#bgScroll ul li:last-child").remove();
			if(scrollLiCount > 2) {
				$("#bgScroll ul").css('left',-ulLeftInitialPosition+"px");
			}
			else {
				$("#bgScroll ul").css('left',extraHalfWidth+"px");
			}
			$("#bgScroll ul").prepend(li);
			$("#bgScroll ul li").css('width',mainWidth);
			moveBgScrollTop();
			showFullImage();
			$("a#bgScrollNext,a#bgScrollPrev").show();
		});
}	
function setMiddle(){
	var winHeight = $(window).height();
	var winWidth = $(window).width();
	$("#bgScroll,#bgScroll ul, #bgScroll ul li").css({
		height : winHeight
	});
	$("#bgScroll ul li div").css({
		bottom : (winHeight-(winHeight-350))
	});
	//if(winHeight>1388){
		$("#bgScroll ul li a img").css('height',winHeight-120);
	//}
	var mainWidth = 1024;
	if (winWidth<=1024){
		mainWidth = 800;
	}
	$("span.ImageScrollTop, span.ImageScrollBottom").css({height:'100px',width:'855px'});
	$("span.ImageScrollTop a, span.ImageScrollBottom a").css({height:'100px',width:'855px'});
	$("#main, #bgScroll ul li").css({width : mainWidth});
	$("#bgScroll ul li a img").css({width : mainWidth});
	if (winWidth<=1024){
		$("span.ImageScrollTop, span.ImageScrollBottom").css({height:'70px',width:'650px'});
		$("span.ImageScrollTop a, span.ImageScrollBottom a").css({height:'70px',width:'650px'});
	}
	var scrollLiCount = $("#bgScroll ul li").size();
	var scrollUlWidth = scrollLiCount * mainWidth;
	$("#bgScroll ul").css('width', scrollUlWidth);
	var extraWidth = winWidth-mainWidth;
	var extraHalfWidth = extraWidth/2;
	if(scrollLiCount > 2) {
		var moveLeft = (mainWidth-extraHalfWidth);
		$("#bgScroll ul").css('left', -moveLeft+'px');
	}
	else {
		var moveLeft = extraHalfWidth;
		$("#bgScroll ul").css('left', moveLeft+'px');
	}
	
	$(".leftBar").css({
		height : winHeight-138,
		left : extraHalfWidth,
		//opacity : 0.8
	});
	$(".frame").css({
		height : winHeight-138,
		width : extraHalfWidth,
		//opacity : 0.75
	});
	if(scrollLiCount > 1) {
		$(".aBgLeft").css('left',(extraHalfWidth*1)-17);
		$(".aBgRight").css('right',(extraHalfWidth*1)-17);
		$("span.seeCollections").css('left',(extraHalfWidth*1)+155);
		$("span.ImageScrollTop, span.ImageScrollBottom").css('left',(extraHalfWidth*1)+142);
	}
	else {
		$(".aBgLeft").css('display','none');
		$(".aBgRight").css('display','none');
	}
	moveBgScrollTop();
	showFullImage();
}
function showFullImage(){
	var imageHeight = 1388;
	var imageWidth = 1024;
	var winWidth = $(window).width();
	if(winWidth <= 1024 ){
		var resizedImageWidth = $("#bgScroll ul li a img").width();
		imageHeight = Math.round(imageHeight*(resizedImageWidth/imageWidth));
	}
	var winHeight = $(window).height();
	var scrollInitial = 0;
	var scrollTop = 0;
	if(winHeight<=1024){
		scrollTop = 200;
		$("span.ImageScrollTop, span.ImageScrollBottom").show();
	}else{
		$(".ImageScrollTop").hide();
		$("span.ImageScrollBottom").show();
	}
	var srollBottom = imageHeight-(scrollTop+winHeight-35);
	$("#bgScroll ul li a img").removeClass("ScrollImage");
	$("#bgScroll ul li").eq(2).children('a').children("img").addClass("ScrollImage");		
	var lnktxt=$("#bgScroll ul li").eq(2).children("a").attr('href');        
	var titletxt=$("#bgScroll ul li").eq(2).children("a").attr('title'); 
	var targettxt=$("#bgScroll ul li").eq(2).children("a").attr('target'); 
        /*if(lnktxt !="")
        {        
          $('span.ImageScrollTop a,span.ImageScrollBottom a').attr('href',lnktxt).attr('title',titletxt).attr('target',targettxt);  
        } 
        else
        {
        $('span.ImageScrollTop a,span.ImageScrollBottom a').attr('href','#').attr('title',titletxt).attr('target',targettxt);  
        }   */	
	
	$(".ImageScrollTop").hover(function(){
		$("img.ScrollImage").stop(true).animate({
			top : scrollTop
		},700);
	}, function(){
		$("img.ScrollImage").stop(true).animate({
			top : scrollInitial
		},700);
	});
	$(".ImageScrollBottom").hover(function(){
		$("img.ScrollImage").stop(true).animate({
			top : -srollBottom+"px"
		},700);
	}, function(){
		$("img.ScrollImage").stop(true).animate({
			top : scrollInitial
		},700);
	});
}
function moveBgScrollTop() {
	var winHeight = $(window).height();
	if(winHeight<=1024){
		$("#bgScroll ul").css('top', '101px');
		winHeight = (winHeight*1) + 200
		$("#bgScroll ul, #bgScroll ul li").css({
			height : winHeight
		});
		$(" #bgScroll ul li a img").css('top','0');
	}else {
		$("#bgScroll ul").css('top', '0px');
		$("#bgScroll ul, #bgScroll ul li").css({
			height : winHeight
		});
	}	
}
$(window).resize(setMiddle);	
	
//Hide Home Products When Rollover Image Scroll Trigger
	$(".ImageScrollTop,.ImageScrollBottom").hover(function(){
		$("div#homeProducts").stop(true,true).animate({
			bottom : '-40px'
		});
	}, function(){
		$("div#homeProducts").animate({
			bottom : '40px'
		});
	});
	
$("#bgScroll").mouseover(function(event) {
	clearInterval(int);
});

$("#bgScroll").mouseout(function(event) {
	int = setInterval(bgScrollNext,5000);
});
	
});
$(window).scroll(function() {
	if($.browser.msie && $.browser.version=="6.0"){
    	$('div#bgScroll').css('top', $(this).scrollTop() + "px");
	}
});
function getid(id)
{eraseCookie('page');
createCookie('page',id,1);
}
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}

function eraseCookie(name) {
	createCookie(name,"",-1);
}
