systemutil.run"C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"

'WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=agentName").Set "john"
'WpfWindow("devname:=HPE MyFlight Sample Application").WpfEdit("devname:=password").Set "hp"
'WpfWindow("devname:=HPE MyFlight Sample Application").WpfButton("text:=OK").Click
Dim win,agentName,password,okbutton
Set win=description.Create()
Set agentName=description.Create()
Set password=description.Create()
Set okbutton=description.Create()
win("devname").value="HPE MyFlight sample Application"
agentName("devname").value="agentName"
password("devname").value="password"
okbutton("text").value="OK"
WpfWindow(win).WpfEdit(agentName).Set "john"
WpfWindow(win).WpfEdit(password).Set "hp"
WpfWindow(win).WpfButton(okbutton).click
WpfWindow(win).close


