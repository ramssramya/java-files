print(formatcurrency(2000.9867,2))
print(formatnumber(3000.46789,1))
print(formatpercent(10))



Function hello()
	print("hello world")
End Function
eval("hello()")


Dim x
print(isempty(x))
print(isnull(x))

x=2
y=null
print(isempty(x))
print(isnumeric(x))
print(isnull(y))






Dim salesofmonths()
ReDim salesofmonths(2)
salesofmonths(0)=100

print(salesofmonths(0))
print(salesofmonths(1))
print(isarray(salesofmonths))
print(ubound(salesofmonths))

days=array("sun","mon","tues")
print(join(days,"$$$"))



a1=split("welcome to vbscript")
For each l1 in a1
	print l1
Next




Dim mu(9,9)
For i=0  To 9 Step 1
For j=0  To 9 Step 1


mu(i,j)=(i+1)*(j+1)
print(i+1&"*"&j+1&"="&mu(i,j))
next
Next
