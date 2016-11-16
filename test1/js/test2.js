//提示:
//获取选项卡标题和选项卡内容
//选项卡内容多个，需要循环遍历来操作，得知哪个选项卡和哪个选项内容匹配
//通过改变DOM的css类名称,当前点击的选项卡显示，其它隐藏。

	function func(ulmian){
	ulmian.style.borderBottom = "solid 2px";
	ulmian.style.borderBottomColor = "#1874CD";	
	
	}
	function func1(){
		document.getElementById("li1").style.display="block";
		document.getElementById("li2").style.display="none";
		document.getElementById("li2").style.borderBottom="0px";
		document.getElementById("li3").style.display="none";
		document.getElementById("li3").style.borderBottom="0px";
	}
	function func2(){
		document.getElementById("li2").style.display="block";
		document.getElementById("li1").style.display="none";
		document.getElementById("li1").style.borderBottom="0px";
		document.getElementById("li3").style.display="none";
		document.getElementById("li3").style.borderBottom="0px";
	}
	function func3()
	{
		document.getElementById("li3").style.display="block";
		document.getElementById("li2").style.display="none";
		document.getElementById("li2").style.borderBottom="0px";
		document.getElementById("li1").style.display="none";
		document.getElementById("li1").style.borderBottom="0px";
	}
