$(function(){
	function turnImg(){};
	turnImg.prototype={
		clickNum:0,
		liNum:$(".turn").children("li").length,
		liW:$(".turn").children("li").width(),
		nextT:function(){
			this.clickNum++;
			this.clickNum<this.liNum?this.clickNum=this.clickNum:this.clickNum=0;
			if(!$(".turn").is(":animated")){
				$(".turn").animate({left:-this.liW*this.clickNum},300);
			};
		},
		prevT:function(){
			this.clickNum--;
			this.clickNum<0?this.clickNum=this.liNum-1:this.clickNum=this.clickNum;
			if(!$(".turn").is(":animated")){
				$(".turn").animate({left:-this.liW*this.clickNum},300);
			};
		},
		mytime:null,
		autoplay:function(){
			clearInterval(this.mytime);
			this.mytime=setInterval(function(){$(".next").click()},1000);
		},
		
	};
	
	var t1=new turnImg();
	$(".next").click(function(){
		t1.nextT();
	});
	$(".prev").click(function(){
		t1.prevT();
	});
	t1.autoplay();
	$(".next,.prev").mouseenter(function(){
			clearInterval(t1.mytime);
		}).mouseleave(function(){
			t1.autoplay();
		});
		
		
		
})
	
