<!--*********************************************************************************************************************************-->
<script LANGUAGE="JavaScript"> 
	function WinScroll(direction,xWidth,xHeight)
	{
		if ((navigator.appVersion.indexOf('4')!= -1))
		{
			self.resizeTo(xWidth,xHeight)
			if (direction == 1)
			{ //Up
				self.moveTo((screen.availWidth-xWidth)/2,screen.availHeight-10)
				for (var c=1; c<=(screen.availHeight-(-xHeight))/2; c=c+4)
				self.moveTo((screen.availWidth-xWidth)/2,screen.availHeight-c)
			}
			if (direction == 2)
			{ //Down
				var x=screen.availHeight+screen.Height
				self.moveTo((screen.availWidth-xWidth)/2,(screen.availHeight-x))
				for (var c=0; c<=(screen.availHeight-(-xHeight/2)); c=c+4)
				self.moveTo((screen.availWidth-xWidth)/2,(screen.availHeight-x)+c)
			}
			if (direction == 3)
			{ //left
				var x=screen.availWidth-10
				self.moveTo(x,(screen.availHeight-xHeight)/2)
				for (var c=1; c<=(x-(-xWidth))/2; c=c+4)
				self.moveTo((x-c),(screen.availHeight-xHeight)/2)
			}
			if (direction == 4)
			{ //Right
				var x=screen.availWidth+(xWidth-10)
				self.moveTo((screen.availWidth-x),(screen.availHeight-xHeight)/2)
				for (var c=1; c<=(screen.availWidth-(-xWidth))/2; c=c+4)
				self.moveTo(((screen.availWidth-x)+c),(screen.availHeight-xHeight)/2)
			}
		}
	} 
	WinScroll(1,800,600)
</script>
<!--*********************************************************************************************************************************-->