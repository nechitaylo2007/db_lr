<!--*********************************************************************************************************************************-->
<script language="JavaScript1.2"> 
	var scroller_msg=''
	var dismissafter=0
	var initialvisible=0
	if (document.all) document.write('<marquee id="curscroll" style="position:absolute;width:150px;border:0px; font-size:12px;visibility:hidden">'+scroller_msg+'</marquee>')

	function followcursor()
	{
		if (initialvisible==0)
		{
			curscroll.style.visibility="visible"
			initialvisible=1
		}
		curscroll.style.left=document.body.scrollLeft+event.clientX+10
		curscroll.style.top=document.body.scrollTop+event.clientY+10
	}

	function dismissmessage()
	{
		curscroll.style.visibility="hidden"}
		if (document.all)
		{
			document.onmousemove=followcursor
			document.ondblclick=dismissmessage
			if (dismissafter!=0) setTimeout("dismissmessage()",dismissafter*1000)
		}
</script>
<!--*********************************************************************************************************************************-->

<style type="text/css">
	A:hover{
		COLOR: red
	}
</style>

<!--*********************************************************************************************************************************-->
<script language="JavaScript1.2">
	var no = 5;
	var speed = 120;
	var snowflake = "r222.gif";
	var ns4up = (document.layers) ? 1 : 0;
	var ie4up = (document.all) ? 1 : 0;
	var dx, xp, yp; 
	var am, stx, sty; 
	var i, doc_width = 640, doc_height = 480;
	if (ns4up) 
	{
		doc_width = self.innerWidth;
		doc_height = self.innerHeight;
	} 
	else if (ie4up)
	{
		doc_width = document.body.clientWidth;
		doc_height = document.body.clientHeight;
	}
	dx = new Array();
	xp = new Array();
	yp = new Array();
	am = new Array();
	stx = new Array();
	sty = new Array();
	for (i = 0; i < no; ++ i) 
	{ 
		dx[i] = 0; 
		xp[i] = Math.random()*(doc_width-30); 
		yp[i] = Math.random()*doc_height;
		am[i] = Math.random()*40; 
		stx[i] = 0.08 + Math.random()/10; 
		sty[i] = 0.9 + Math.random(); 
		if (ns4up) 
		{ 
			if (i == 0) 
			{
				document.write("<layer name=\"dot1"+ i +"\" left=\"15\" ");
				document.write("top=\"15\" visibility=\"show\"><img src=\"");
				document.write(snowflake + "\" border=\"0\"></layer>");
			}
			else 
			{
				document.write("<layer name=\"dot1"+ i +"\" left=\"15\" ");
				document.write("top=\"15\" visibility=\"show\"><img src=\"");
				document.write(snowflake + "\" border=\"0\"></layer>");
			}
		} 
		else if (ie4up) 
		{
			if (i == 0) 
			{
				document.write("<span width=1 id=\"dot1"+ i +"\" style=\"POSITION: ");
				document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
				document.write("visible; TOP: 15px; LEFT: 15px; width: 1px\"><img src=\"");
				document.write(snowflake + "\" border=\"0\"></span>");
			}
			else 
			{
				document.write("<span width=1 id=\"dot1"+ i +"\" style=\"POSITION: ");
				document.write("absolute; Z-INDEX: "+ i +"; VISIBILITY: ");
				document.write("visible; TOP: 15px; LEFT: 15px;width: 1px\"><img src=\"");
				document.write(snowflake + "\" border=\"0\"></span>");
			}
		}
	}
	
	function snowNS() 
	{ 
		for (i = 0; i < no; ++ i) 
		{ 
			yp[i] += sty[i];
			if (yp[i] > doc_height-10) 
			{
				xp[i] = Math.random()*(doc_width-am[i]-10);
				yp[i] = 0;
				stx[i] = 0.08 + Math.random()/10;
				sty[i] = 0.9 + Math.random();
				doc_width = self.innerWidth;
				doc_height = self.innerHeight;
			}
			dx[i] += stx[i];
			document.layers["dot1"+i].top = yp[i];
			document.layers["dot1"+i].left = xp[i] + am[i]*Math.sin(dx[i]+30);
		}
		setTimeout("snowNS()", speed);
	}

	function snowIE() 
	{
		for (i = 0; i < no; ++ i) 
		{ 
			yp[i] += sty[i];
			if (yp[i] > doc_height-10) 
			{
				xp[i] = Math.random()*(doc_width-am[i]-10);
				yp[i] = 0;
				stx[i] = 0.08 + Math.random()/10;
				sty[i] = 0.9 + Math.random();
				doc_width = document.body.clientWidth;
				doc_height = document.body.clientHeight;
			}
			dx[i] += stx[i];
			document.all["dot1"+i].style.pixelTop = yp[i];
			document.all["dot1"+i].style.pixelLeft = xp[i] + am[i]*Math.sin(dx[i]+30);
		}
		setTimeout("snowIE()", speed);
	}

	if (ns4up) 
	{
		snowNS();
	} 
	else if (ie4up) 
	{
		snowIE();
	}

</script>
<!--*********************************************************************************************************************************-->