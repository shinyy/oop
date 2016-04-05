$(function(){
	var clickNum=0;
	var liNum=$(".turn").children("li").length;
	var liW=$(".turn").children("li").width();
	$(".turn").width(liNum*liW);
	$(".next").click(function(){
		clickNum++;
		clickNum<liNum?clickNum=clickNum:clickNum=0;
		if(!$(".turn").is(":animated")){
			$(".turn").animate({left:-liW*clickNum},300);
		};
	});
	$(".prev").click(function(){
		clickNum--;
		clickNum<0?clickNum=liNum-1:clickNum=clickNum;
		if(!$(".turn").is(":animated")){
			$(".turn").animate({left:-liW*clickNum},300);
		};
		
	});
		
		var mytime=null;
		function autoplay(){
			clearInterval(mytime);
			mytime=setInterval(function(){$(".next").click()},1000)
		};
		autoplay();
		$(".next,.prev").mouseenter(function(){
			clearInterval(mytime);
		}).mouseleave(function(){
			autoplay();
		});
		
	//触摸
//	var t=document.getElementsByClassName("turn")[0];
//	t.addEventListener("touchmove",function(event){
//		var touchP=event.targetTouches[0];
//		t.style.left=touchP.pageX+"px";
//	})



//	function turnImg(){};
//	turnImg.prototype.clickNum=0;
//	turnImg.prototype.liNum=$(".turn").children("li").length;
//	turnImg.prototype.liW=$(".turn").children("li").width();
//	turnImg.prototype.turnI=function(num){
//		this.clickNum+=num;
//		$(".turn").animate({left:-this.liW*this.clickNum},300);
//	};
//	
//	var turnImg1=new turnImg();
//	console.log(turnImg1.clickNum,turnImg1.liNum,turnImg1.liW);
//	$(".next").click(turnImg1.turnI(1))
	
	
})
	
