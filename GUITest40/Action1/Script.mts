msgbox "hello"


WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").WaitProperty "visible", true, 10000 @@ hightlight id_;_2082779712_;_script infofile_;_ZIP::ssf1.xml_;_
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").WaitProperty "visible", false, 10000 @@ hightlight id_;_2082779712_;_script infofile_;_ZIP::ssf1.xml_;_

If wpfwindow("HPE MyFlight Sample Applicatio").Exist(50) Then
	msgbox "flight window is available"
	else
		msgbox "flight window is not available"

End If

wait(10)
msgbox "abcd"

Browser("Free Online Math Calculator").sync
Browser("Age Calculator Online").Page("Age Calculator Online").Link("Calculators").Click @@ script infofile_;_ZIP::ssf9.xml_;_
Browser("Age Calculator Online").Page("Free Online Math Calculator").Link("Age Calculator").Click @@ script infofile_;_ZIP::ssf10.xml_;_
msgbox "over"
