<body onload="start(document.forms[0])" foo1 ="cleartids()">

<!--*********************************************************************************************************************************-->
<script language="LiveScript">
	function GoBack()
	{
		if (confirm("Are you sure you want to go to the previous page?"))
		{
			history.back()
		}
	}
	timestr = "00:00:00";
	tid = 0;
	pause = 0;
	var to;
	var bcount;
	var tcount;

	function writer()
	{
		document.write("test"); 
	}
	
	function time(n)
	{
		tid=window.setTimeout("time(1)",to);
		today = new Date()
		if(today.getMinutes() < 10)
			{
				pad = "0"
			}
		else 
			pad = "";
			if(today.getSeconds() < 10)
				{
					pads = "0"
				}
		else 
				pads = "";
				timestr=today.getHours()+":"+pad+today.getMinutes()+":"+pads+today.getSeconds();
				f.result.value = timestr;
				foo0 = timestr;
				window.clearTimeout(tid);
				tid=window.setTimeout("time()",to);
	}

	function start(x)
	{
		f=x;
		to=60;
		time(x);
	}

	function cleartids() 
	{
		window.clearTimeout(tid);
	}
</script>
<!--*********************************************************************************************************************************-->

<form name="time">
<input type="text" size="8" name="result" onfocus="this.blur()" style="text-align: center; font-family: sans-serif; font-size: 8pt; background-color: #DAFADE; color: rgb(255,0,0)">
</form>