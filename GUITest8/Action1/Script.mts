Dim a

a=5
Function callbyref(byref a)
   msgbox a	
   a=10
   msgbox a
End Function
Call callbyref(6)
msgbox a









x=msgbox("welcome to vbscript",vbyesno)
If x=vbyes Then
	msgbox "yes button was clicked"
	else
	msgbox "no button was clicked"
End If










Dim a

a=5
Function callbyref(byval var)
   
   var=10
   msgbox var
End Function
Call callbyref(a)
msgbox a










