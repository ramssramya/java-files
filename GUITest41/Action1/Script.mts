systemutil.Run"https://www.myntra.com/login"

Browser("Myntra_2").Page("Myntra").WebElement("Login or Signup").WaitProperty "visible", true, 10000 @@ script infofile_;_ZIP::ssf14.xml_;_
Browser("Myntra_2").Page("Myntra").WebElement("Login or Signup").WaitProperty "visible", false, 10000
Browser("Myntra_2").Page("Myntra").WebElement("WebElement").WaitProperty "visible", true, 10000 @@ script infofile_;_ZIP::ssf15.xml_;_


wait(5)
 @@ script infofile_;_ZIP::ssf13.xml_;_
If Browser("Myntra_2").Exist(50) then
	msgbox "myntra page is available"
	else
		msgbox "myntra page is not available"

End If
Browser("Myntra_2").sync

Browser("Myntra_2").Page("Myntra").WebElement("WOMEN").Click @@ script infofile_;_ZIP::ssf16.xml_;_
Browser("Myntra_2").Page("Online Shopping for Women").Link("Women").Click @@ script infofile_;_ZIP::ssf17.xml_;_
Browser("Myntra_2").Page("Online Shopping for Women").Link("Women").Click @@ script infofile_;_ZIP::ssf18.xml_;_

wait(7)

Browser("Myntra_2").Page("Shop for Women Kurtas,").Image("Khushal K Ethnic Motifs").WaitProperty "innertext", click, 10000 @@ script infofile_;_ZIP::ssf19.xml_;_
Browser("Myntra_2").Page("Shop for Women Kurtas,").Link("1Bag").Click @@ script infofile_;_ZIP::ssf20.xml_;_
Browser("Myntra_2").Page("SHOPPING BAG").WebButton("PLACE ORDER").Click @@ script infofile_;_ZIP::ssf21.xml_;_



Browser("Myntra_2").WaitProperty "abs_x", close, 10000












