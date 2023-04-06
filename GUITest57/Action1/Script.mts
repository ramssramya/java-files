Dim objExcel

Set objExcel = createobject("Excel.Application")
objExcel.visible=true

Set objExcel1= objExcel.workbooks.open("C:\R\ramya.xlsx")
Set objExcel2= objExcel.worksheets("sheet1")
Set objExcel3= objExcel.Cells("1,2").EntireRow
Set objExcel3.Delete
objExcel.Activeworkbook.save
objExcel.Activeworkbook.close
objExcel.Quit


Set objExcel1= Nothing
Set objExcel2= Nothing
Set objExcel3= Nothing
