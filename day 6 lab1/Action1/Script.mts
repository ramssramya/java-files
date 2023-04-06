Dim objExcel

Set objExcel = createobject("Excel.Application")
objExcel.visible=true

Set objExcel1=objExcel.workbooks.open("‪‪C:\Users\Administrator\Desktop\data.xlsx")
Set objExcel2=objExcel1.worksheets("sheet1")
Set objExcel3=objExcel2.Cells("1,2").EntireRow
objExcel3.Delete

objExcel.ActiveWorkbook.Save
objExcel.ActiveWorkbook.close
objExcel.Quit

Set objExcel1= Nothing
Set objExcel2= Nothing
set objExcel3= Nothing
