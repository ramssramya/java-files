systemutil.Run"https://demo.opencart.com/"


Browser("Your Store").Page("Your Store").WebElement("My Account Register Login").WaitProperty "visible", true, 10000 @@ script infofile_;_ZIP::ssf1.xml_;_
Browser("Your Store").Page("Your Store").WebElement("My Account Register Login").WaitProperty "visible", false, 10000 @@ script infofile_;_ZIP::ssf1.xml_;_

wait(6)

If browser("Your Store").exist(50) Then
	msgbox "your store page is available"
	else
		msgbox "your store page is not available"

End If

browser("Your Store").sync
Browser("Your Store").Page("Your Store").Link("Software").WaitProperty "text", "click", 10000 @@ script infofile_;_ZIP::ssf2.xml_;_
Browser("Your Store").Page("Your Store").WebElement("123456789").WaitProperty "innertext", "visible", 10000 @@ script infofile_;_ZIP::ssf3.xml_;_
wait(8)
Browser("Your Store").Page("Your Store").Image("MacBook").WaitProperty "abs_x", click, 10000 @@ script infofile_;_ZIP::ssf4.xml_;_
Browser("Your Store").Page("Your Store").WebButton("Add to Cart").WaitProperty "abs_x", click, 10000 @@ script infofile_;_ZIP::ssf5.xml_;_
Browser("Your Store").Page("Your Store_2").WebElement("Shopping Cart").WaitProperty "innertext", "click", 10000 @@ script infofile_;_ZIP::ssf6.xml_;_
Browser("Your Store").Page("Your Store_2").WaitProperty "abs_x", close, 10000 @@ script infofile_;_ZIP::ssf7.xml_;_
