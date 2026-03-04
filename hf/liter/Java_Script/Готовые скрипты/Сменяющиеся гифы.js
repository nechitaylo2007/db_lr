<!--*********************************************************************************************************************************-->
<script>
	var imgwidth=256
	var pos_left=10
	var pos_top=10
	var imgname=new Array()
	imgname[0]="Gray.gif"
	imgname[1]="Big.gif"
	imgname[2]="Quest.gif"
	var imgurl=new Array()
	imgurl[0]="http://"
	imgurl[1]="http://"
	imgurl[2]="http:/"
	var imgpreload=new Array()
		for (i=0;i<=imgname.length-1;i++)
		{
			 imgpreload[i]=new Image()
			 imgpreload[i].src=imgname[i]
		}
	var pause=2000
	var speed=20
	var step=10
	var i_loop=0
	var i_image=0
	function stretchimage() 
	{
		if (i_loop<=imgwidth) 
		{
			if (document.all)
			{
				imgcontainer.innerHTML="<a href='"+imgurl[i_image]+"' target='_blank'><img width='"+i_loop+"' src='"+imgname[i_image]+"' border='0'></a>"
			}
		i_loop=i_loop+step
		var timer=setTimeout("stretchimage()",speed)
		}
		else
		{
			clearTimeout(timer)
			var timer=setTimeout("shrinkimage()",pause)
		}
	}

	function shrinkimage()
	{
		if (i_loop>-step)
		{
			if (document.all)
			{
				imgcontainer.innerHTML="<a href='"+imgurl[i_image]+"' target='_blank'><img width='"+i_loop+"' src='"+imgname[i_image]+"' border='0'></a>"
			}
			i_loop=i_loop-step
			var timer=setTimeout("shrinkimage()",speed)
		}
		else
		{
			clearTimeout(timer)
			changeimage()
		}
	}

	function changeimage()
	{
		i_loop=0
		i_image++
		if (i_image>imgname.length-1) {i_image=0}
		var timer=setTimeout("stretchimage()",pause)
	}

	function initiate()
	{
		if (document.all)
		{
			document.all.imgcontainer.style.posLeft=pos_left
			document.all.imgcontainer.style.posTop=pos_top
			changeimage()
		}
		if (document.layers) 
		{
			document.imgcontainer.left=pos_left
			document.imgcontainer.top=pos_top
			rotatenetscape()
		}
	}

	function rotatenetscape()
	{
		document.imgcontainer.document.write("<a href='"+imgurl[i_image]+"' target='_blank'><img src='"+imgname[i_image]+"' border='0'></a>") 
		document.imgcontainer.document.close() 
		i_image++
		if (i_image>imgname.length-1) {i_image=0}
		var timer=setTimeout("rotatenetscape()",pause*2)
	}
</script>
<!--*********************************************************************************************************************************-->
<span id="imgcontainer" style="position:absolute"></span>