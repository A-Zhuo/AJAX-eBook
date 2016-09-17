window.onload=function ()
{
	var oBtn=document.getElementById('btn1');
	var oUl = document.getElementById("list");
	var aLi = oUl.getElementsByTagName("li");
	var content = document.getElementById("text");
	var url;
	for (var i = 0; i < aLi.length; i++) {
		aLi[i].onclick = function() {
			url = this.className;
			showText();
		}
	}
	function showText() {
			var oAjax = null;
			if(window.XMLHttpRequest)
			{
				oAjax=new XMLHttpRequest();
			}
			else
			{
				oAjax=new ActiveXObject("Microsoft.XMLHTTP");
			}
			oAjax.open('GET',"pages/" + url + ".txt?time=new Date().getTime()", true);
			oAjax.send(null);
			
			oAjax.onreadystatechange=function ()
			{
				if(oAjax.readyState==4)
				{
					if(oAjax.status==200)
					{
						var text = oAjax.responseText;
						var pos = text.indexOf("&");
						var title = text.slice(0,pos);
						var chapter = text.slice(pos+1);
						content.innerHTML =oAjax.responseText;
					}
					else
					{
						content.innerHTML = '您要的文章不见鸟';
					}
				}
			}			
	}
}