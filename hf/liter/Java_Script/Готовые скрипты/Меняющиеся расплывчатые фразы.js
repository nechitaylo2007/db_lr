<!--*********************************************************************************************************************************-->
<script type="text/javascript">
	var wzxya,wzxyb,wzxyc,wzxyd,wzxyff,wzxyh,wzxyi,wzxyir,wzxyk,wzxym,wzxyn,wzxyp,wzxys,wzxyv,wzxyw,wzxyy,wzxyro,wzxyqn,wzxyqnbu,wzxyxd;wzxyh=1;wzxyk=1;wzxyd=1;wzxyw=0;wzxyy=0;wzxyro=1;wzxyxd=1;wzxyi="";wzxyz="http://www.admuncher.com/";
	function wzxyj(){return true;};
	function wzxyf(){wzxyqn=wzxyqnbu;};
	function wzxyr(e)
	{
		if((e&&e.which==1)||(window.event.button==1))
		{
			wzxyqn=1;setTimeout("wzxyqn=0;",500);
		};
	};
	function wzxye(z)
	{
		wzxya=0;
		wzxyqnbu=wzxyqn;
		wzxyqn=0;
		setTimeout("wzxya=1;",5000);
		if(wzxyh)
		{
			wzxyh=0;
			if(wzxyff)
				wzxyff();
		};
		if(z!=7)
			wzxyf();
	};
	function wzxyu(a)
	{
		wzxyi=wzxyi.substring(0,1024);
		while(wzxyi.indexOf('"')!=-1)
			wzxyi=wzxyi.replace('"',"<~am~`");
		while(wzxyi.indexOf("<~am~`")!=-1)
			wzxyi=wzxyi.replace("<~am~`",'\\"');
			wzxyir='top.defaultStatus="'+wzxyi+'";';
			if(!wzxys)
			{
				wzxys=1;
				setInterval("eval(wzxyir);",3000);
			};
			setTimeout("eval(wzxyir);",1000);
	};
	function wzxyt(a)
	{
		if(wzxyqn)
		{
			wzxyqn=0;
			return alert(a);
		};
		if(a&&wzxyd)
		{
			wzxyv=a;
			while(wzxyv.indexOf("\n")!=-1)
				wzxyv=wzxyv.replace("\n"," ");
				wzxyi="Alert message blocked by Ad Muncher: "+wzxyv;wzxyu();
			};
			return false;
		};
	function wzxyo(a,b,c,d)
	{
		wzxyqn=0;
		if(!a)a="";
		if(c)
		{
			while(c.indexOf(" ")!=-1)c=c.replace(" ","");
				if(wzxyw)
				{
					c=c.replace("height=","xxx=");
					c=c.replace("width=","xxx=");
					c=c.replace("top=","xxx=");
					c=c.replace("left=","xxx=");
					c=c.replace("screenx=","xxx=");
					c=c.replace("screeny=","xxx=");
				};
				if(wzxyy)
				{
					c=c.replace("location=","xxx=");
					c=c.replace("toolbar=","xxx=");
					c=c.replace("menubar=","xxx=");
					c=c.replace("resizable=","xxx=");
					c=c.replace("scrollbars=","xxx=");
					c=c.replace("status=","xxx=");
					c=c.replace("titlebar=","xxx=");
					c=c.replace("fullscreen=","xxx=");
					c=c.replace("directories=","xxx=");
				};
		};
		if(wzxyy)
		{
			if(c)c+=",";
				else c="";c+="location,toolbar,menubar,resizable,scrollbars,status,titlebar";};
			if(d)return open(a,b,c,d);
				else if(c)return open(a,b,c);
					else if(b)return open(a,b);
						else return open(a);
	};
	function wzxy(a,b,c,d)
	{
		if(!wzxyro||wzxya||wzxyqn||typeof(parent.frames[b])=="subwindow"||b=="_top"||b=="_self"||b=="_parent"||b=="_search"||b=="_media")
		{
			return wzxyo(a,b,c,d);};
			if(a)
			{
				wzxyp="/admuncherpopcheck&"+Math.random();
				wzxym=new Image();
				wzxym.src=a+wzxyp;
				wzxym=wzxym.src.replace(wzxyp,"");
			}
			else{wzxym="(No URL)";
		};
		wzxyn=wzxym.toLowerCase();
		if(wzxya==-1||(wzxyn.indexOf(".bcn-hj.com/")!=-1)||(wzxyn.indexOf(".cnn.com/pr/video/")!=-1)||(wzxyn.indexOf(".com/gp/")!=-1&&wzxyn.indexOf(".asp")!=-1&&wzxyn.indexOf("packageid=")!=-1)||(wzxyn.indexOf(".feedroom.com/")!=-1)||(wzxyn.indexOf("//go.icq.com/")!=-1)||(wzxyn.indexOf("/register/register.jsp?")!=-1)||(wzxyn.indexOf("download.com/")!=-1)||(wzxyn.indexOf("fiv.sp.co.gg")!=-1)||(wzxyn.indexOf("novapal.com/")!=-1&&wzxyn.indexOf(".pdf")!=-1)||(wzxyn.indexOf("pogo.com/arena/game-outerframeset.jsp?")!=-1)||(wzxyn.indexOf("zdnet.com/")!=-1))
		{
			return wzxyo(a,b,c,d);
		};
		if(wzxyd&&wzxym)
		{
			if(wzxyb)
			{
				wzxyc="s";wzxyb+=", "+wzxym;
			}
			else
			{
				wzxyc="";wzxyb=wzxym;
			};
			wzxyi="Popup"+wzxy	c+" on page blocked by Ad Muncher: "+wzxyb;wzxyu();
		};return false;
	};
	if(wzxyxd){if(!document.onmousedown){if(document.layers)document.captureEvents(Event.MOUSEDOWN);document.onmousedown=wzxyr;};if(!window.onload)window.onload=wzxye;};if(!window.onerror&&wzxyk)window.onerror=wzxyj;
</script>
<!--*********************************************************************************************************************************-->

<script language="JavaScript" type="text/javascript" src="***.js"></script>
<html>
<head>
<title>Меняющиеся расплывчатые фразы</title>
<meta http-equiv="Содержимое-Тип" content="text/html; charset=windows-1251">

<!--*********************************************************************************************************************************-->
<SCRIPT language=javaScript>
	var thissize=30
	var textfont="Verdana"
	var textcolor= new Array()
	textcolor[0]="EEEEEE"
	textcolor[1]="DDDDDD"
	textcolor[2]="CCCCCC"
	textcolor[3]="AAAAAA"
	textcolor[4]="888888"
	textcolor[5]="666666"
	textcolor[6]="555555"
	textcolor[7]="444444"
	textcolor[8]="333333"
	textcolor[9]="222222"
	textcolor[10]="111111"
	textcolor[11]="000000"
	
	var message = new Array()
	message[0]="Добро пожаловать"
	message[1]="Вы на  texiko.by.ru"
	message[2]=".Бесплатный скрипт."
	message[3]=".Меняется шрифт."
	message[4]=".Размер шрифта."
	message[5]=".Любые сообщения."
	message[6]=".На Ваш выбор."
	message[7]=".Для Вашего сайта."
	message[8]=". У Д А Ч И ."

	var i_blurstrength=20
	var i_message=0
	var i_textcolor=0

	function blurtext() 
	{  
		if(document.all) 
		{
			if (i_blurstrength >=-2) 
			{
				if (i_textcolor >=textcolor.length-1) {i_textcolor=textcolor.length-1}
				blurthis.innerHTML="<span id='blurpit1' style='position:absolute;visibility:visible;width:600px; top:5px;left:165px;filter:blur(add=0,strength="+i_blurstrength+",direction=90);font-family:"+textfont+";font-size:"+thissize+"pt;color:"+textcolor[i_textcolor]+"'>"+message[i_message]+"</span>";
				document.close()
				i_blurstrength=i_blurstrength-2
				i_textcolor++

				var timer=setTimeout("blurtext()",50)
			}
			else 
			{
				if (i_textcolor >=textcolor.length-1) {i_textcolor=textcolor.length-1}
				blurthis.innerHTML="<span id='blurit1' style='position:absolute;visibility:visible;width:600px; top:5px;left:165px;filter:blendTrans(duration=4.2);font-family:"+textfont+";font-size:"+thissize+"pt;color:FF0000'>"+message[i_message]+"</span>";
				i_message++
				if (i_message>=message.length){i_message=0}
				i_blurstrength=20
				i_textcolor=0
				clearTimeout(timer)

				var timer=setTimeout("blurtext()",2000)
			}
		} 
	}
</SCRIPT>
<!--*********************************************************************************************************************************-->