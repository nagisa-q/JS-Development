

//编写一个函数，供添加按钮调用，动态在表格的最后一行添加子节点；

//提示: 使用createElement()、innerHTML、appendChild()。
var num=2;
function addTB(){
	
	num++;
	var tr=document.createElement("tr");
	var xh=document.createElement("td");
	var name=document.createElement("td");
	xh.innerHTML="xh00"+num;
	var del=document.createElement("td");
	del.innerHTML="<a href='javascript:;' onclick='del(this)'  >删除</a>";
	var tb=document.getElementById("table");
	tb.appendChild(tr);
	tb.appendChild(xh);
	tb.appendChild(name);
	tb.appendChild(del);
	var tr=document.getElementsByTagName("tr");
	for(var i=0;i<tr.length;i++){
		bgChange([i]);
	}
	
}



window.onload= function() {
	 var co=document.getElementsByTagName("tr");
	for(var i=0;i<co.length;i++){
		bgChange(co[i]);
	}
	
}
function bgChange(obj){
		obj.onmouseover=function(){
			obj.style.backgroundColor="#f2f2f2";
		}
		obj.onmouseout=function(){
			obj.style.backgroundColor="#fff";
		}
}


  function del(obj)
     {
         var tr=obj.parentNode.parentNode;
         tr.parentNode.removeChild(tr);
     }
//

//}
//}
