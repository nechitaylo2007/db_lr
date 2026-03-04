<HTML>
<HEAD><TITLE></TITLE>
<!--*********************************************************************************************************************************-->
<SCRIPT>
	function randomlink()
	{
		var a=Math.round(Math.random()*5);
		title = new Array();
		title[0]="http://www.belcom.khv.ru";
		title[1]="http://www.chat.ru";
		title[2]="http://www.stars.ru";
		title[3]="http://www.webclub.ru";
		title[4]="http://www.download.ru";
		title[5]="http://www.micro.soft.ru";
		location=title[a];
	}
</SCRIPT>
<!--*********************************************************************************************************************************-->
</HEAD>
<BODY>
	<form><p><input type="button" name="B1" value="Прыгаем" onClick="randomlink()"></p></form>
</BODY>
</HTML>