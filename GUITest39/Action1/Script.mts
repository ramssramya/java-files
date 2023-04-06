Set objexcel=CreateObject("Excel.Application")
Set objworkbook=objexcel.workbooks.open("‪C:\Users\Administrator\Documents\Book1.xlxs")

Set objworksheet=objworkbook.worksheets(1)

rowcount=objworksheet.usedrange.rows.count

msgbox rowcount

For  i = 2 To rowcount Step 1
	
systemutil.Run"C:\Program Files (x86)\HPE\Unified Functional Testing\samples\Flights Application\FlightsGUI.exe"
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("agentName").Set cstr(objworksheet.cells(i,1))
WpfWindow("HPE MyFlight Sample Applicatio").WpfEdit("password").Set cstr(objworksheet.cells(i,2))
WpfWindow("HPE MyFlight Sample Applicatio").WpfButton("OK").Click
WpfWindow("HPE MyFlight Sample Applicatio").close
Next

Set objworkbook=nothing
Set objworksheet=nothing
