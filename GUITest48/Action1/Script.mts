Dim Obj
Set Obj=description.Create()
Obj("micclass").value="link"

set chl=Browser("Browser").Page("Online Shopping site in").ChildObjects(Obj) @@ script infofile_;_ZIP::ssf1.xml_;_
msgbox chl.count
For i=0 to chl.count-1  Step 1
	print chl(i).GetRoProperty("innerhtml")
Next

