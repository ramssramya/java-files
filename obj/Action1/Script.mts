Dim objfso
Set objfso=CreateObject("Scripting.FilesystemObject")
objfso.CreateFolder "C:\Users\apple1"
objfso.CreateTextFile ("C:\Users\apple2.text")
objfso.CreateTextFile ("C:\Users\apple2.doc")
objfso.CreateTextFile ("C:\Users\apple2.pdf")
objfso.CreateTextFile ("C:\Users\apple2.xls")
Set objfso=nothing

