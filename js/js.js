$(function(){
	function turnImg(){};
	turnImg.prototype={
		box:$("ul"),
		imgSpeed:300,
		clickSpeed:1000,
		clickNum:0,
		clone:function(){
			this.box.children("li").eq(0).clone().appendTo(this.box);
		},
		liNum:function(){
			return this.box.children("li").length;
		},
		liW:function(){
			return this.box.children("li").width();
		},
		width:function(){
			this.box.width(this.liNum()*this.liW());
		},
		nextT:function(){
			if(!this.box.is(":animated")){
				var that=this;
				this.clickNum++;
				if(this.clickNum<this.liNum()-1){
					this.box.animate({left:-this.liW()*this.clickNum},this.imgSpeed);
				}else{
					//不露馅的关键在于最后一个动画完成时瞬间变成第一个的位置与变量
					this.box.animate({left:-this.liW()*this.clickNum},this.imgSpeed,function(){
						that.box.css("left",0);
					});
					this.clickNum=0;
				};
			};
		},
		prevT:function(){
			if(!this.box.is(":animated")){
				var that=this;
				this.clickNum--;
				if(this.clickNum<0){
					//不露馅的关键在于先调整成最后一个（克隆节点）的位置然后完成动画  再改变成倒数第二个节点的变量
					that.box.css("left",-this.liW()*(this.liNum()-1)).animate({"left":-this.liW()*(this.liNum()-2)});
					this.clickNum=this.liNum()-2;
					
				}else{
					this.box.animate({left:-this.liW()*this.clickNum},this.imgSpeed);
				}
				
			};
		},
		tri:$("input"),//若用模拟点击事件的方式  则需要定义此项  否则不需要
		mytime:null,
		autoplay:function(){
			var that=this;
			clearInterval(this.mytime);
			this.mytime=setInterval(function(){that.nextT()},this.clickSpeed);//直接运行nextT()函数 不需要定义  默认使用此方法
			//this.mytime=setInterval(function(){that.tri.click();},this.clickSpeed);//模拟点击事件  需要定义tri
		},
		stopplay:function(){
			clearInterval(this.mytime);
		},
		
	};
	
	
	
	
	
	
	
	//插件1
	var t1=new turnImg();
	t1.box=$(".turn");
	t1.clone();
	t1.width();
	//t1.tri=$(".next");
	$(".next").click(function(){
		t1.nextT();
	});
	$(".prev").click(function(){
		t1.prevT();
	});
	t1.autoplay();
	$(".next,.prev").mouseenter(function(){
			//clearInterval(t1.mytime);
			t1.stopplay();
		}).mouseleave(function(){
			t1.autoplay();
		});
	console.log(t1.box,t1.tri)
	
	
	//插件2
	var t2=new turnImg();
	t2.box=$(".turn1");
	t2.imgSpeed=600;
	t2.clickSpeed=2000;
	//t2.tri=$(".next1");
	t2.clone();
	t2.width();
	$(".next1").click(function(){
		t2.nextT();
	});
	$(".prev1").click(function(){
		t2.prevT();
	});
	t2.autoplay();
	
	
	
	//插件3
	var t3=new turnImg();
	t3.box=$(".turn2");
	t3.clone();
	t3.width();
	$(".next2").click(function(){
		t3.nextT();
	});
	$(".prev2").click(function(){
		t3.prevT();
	});
	t3.autoplay();
})
	
