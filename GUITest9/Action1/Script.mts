Dim d
msgbox ("object stored")
Set d=createobject("scripting.dictionary")
d.Add "1001","namrata:pune"
d.Add "1002","rajendra:mumbai"
 
msgbox d.count
a=d.Items
msgbox a(0)
msgbox a(1)
msgbox("added")

If d.exists("1002") Then
	msgbox "emp id is already exists"
else
    msgbox "emp id is not exists"
End If


For each i in a 
	msgbox i
Next
empId=inputbox("enter emp id:")
empname=inputbox("enter emp name:")
emplocation=inputbox("enter the emp location:")

Dim empdetials
empdetails="emp details:" & vbcrLF
For each key in d.keys
	empdetails=empdetails & key & " : " &  d.item(key) & vbcrLF
Next
msgbox empdetails,vbinformation,"all employees"

msgbox "all applied successfully"
