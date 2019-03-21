# CSS3 - Review

## **Introduction**
CSS: stands for Cascading Style Sheets.
Describes how HTML elements are displayed on screen, is used to define styles for your web pages, including the design, layout and variations in display for different devices and screen sizes.

## **syntax**
A CSS rule-set consists of a selector and a declaration block:
```
h1        {property: value; property: value}
selector  Declaration
```

The selector points to the HTML element you want to style.
The declaration block contains one or more declarations separated by semicolons.
Each declaration includes a CSS property name and a value, separated by a colon.

```
p {
  color: red;
  text-align: center;
}
```

## **selectors**
CSS selectors are used to "find" (or select) HTML elements based on their element name, id, class, attribute, and more.

<details>
  <summary>See more</summary>

* name: selects elements based on the element name.
All <p> elements on a page will be center-aligned, with a red text color.
```
p {
  text-align: center;
  color: red;
}
```

* id: The id selector uses the id attribute of an HTML element to select a specific element.
The id of an element should be unique within a page
Write a hash (#) character, followed by the id of the element.
```
#para1 {
  text-align: center;
  color: red;
}
```

* class: selects elements with a specific class attribute
write a period (.) character, followed by the name of the class.
Note: A class name cannot start with a number!
```
.center {
  text-align: center;
  color: red;
}
```

* more than one class:
```
<p class="center large"></p>
p.center {text-align: center}
p.large {font-size: 300%}
```

* name & ClassName: p.center {}

* Grouping selectors: To group selectors, separate each selector with a comma.
```
h1, h2, p {
  text-align: center;
  color: red;
}
```

</details>

## **Comments**

```
A CSS comment starts with /* and ends with */. Comments can also span multiple lines:
/* This is a single-line comment */

/* This is
a multi-line
comment */
```

## **Insert CSS**

<details>
  <summary>See more</summary>

* External style sheet: change the look of an entire website by changing just one file
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```

* Internal style sheet: may be used if one single page has a unique style.
```
<style>

h1 {
  color: maroon;
  margin-left: 40px;
}
</style>
```

* Inline style: may be used to apply a unique style for a single element.
```
<h1 style="color:blue;margin-left:30px;">This is a heading</h1>
```

* Multiple style Sheets
If some properties have been defined for the same selector (element) in different style sheets, the value from the last read style sheet will be used.
```
<head>
<link rel="stylesheet" type="text/css" href="mystyle.css">
<style>
h1 {
  color: orange;
}
</style>
</head>
```
Result: orange

```
<head>
<style>
h1 {
  color: orange;
}
</style>
<link rel="stylesheet" type="text/css" href="mystyle.css">
</head>
```
Result: external color

* Cascading order
1. Inline style (inside an HTML element)
2. External and internal style sheets (in the head section)
3. Browser default

</details>

## **Colors**
Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values.
In HTML, a color can be specified by using a color name:
Tomato, orange, gray, slateblue, violet, lightgray, mediumseagreen

<details>
  <summary>See more</summary>

* Background color
```
<h1 style="background-color:DodgerBlue;">Hello World</h1>
```

* Text Color
```
<h1 style="color:Tomato;">Hello World</h1>
```

* Border Color
```
<h1 style="border:2px solid Tomato;">Hello World</h1>
```

* Color values
Same as color name "Tomato":  

RGB: rgb(red, green, blue)  
rgb(255, 99, 71)

HEX:   
#ff6347 Where rr (red), gg (green) and bb (blue) are hexadecimal values between 00 and ff (same as decimal 0-255).  

hsl  hsl(hue, saturation, lightness)  
hsl(9, 100%, 64%)    

Hue is a degree on the color wheel from 0 to 360. 0 is red, 120 is green, and 240 is blue.  
Saturation is a percentage value, 0% means a shade of gray, and 100% is the full color.  
Lightness is also a percentage, 0% is black, 50% is neither light or dark, 100% is white.  

rgba(red, green, blue, alpha)  

The alpha parameter is a number between 0.0 (fully transparent) and 1.0 (not transparent at all):  
transparent
rgba(255, 99, 71, 0.5)

</details>


## **CSS Background**

<details>
  <summary>See more</summary>

* background-color : specifies the background color of an element.
```
body {
  background-color: lightblue;
}
```

* background-image: pecifies an image to use as the background of an element
```
body {
  background-image: url("gradient_bg.png");
}
```
* background-repeat
repeat horizontal: background-repeat: repeat-x;
repeat vertical: background-repeat: repeat-y;
no repeat: background-repeat: no-repeat;

* background-position
position: background-position: right top;

* background-attachment
To specify that the background image should be fixed (will not scroll with the rest of the page)  
background-attachment: fixed;

* painting-area
Specifies the painting area of the background
background-clip: padding-box;

* origin
Specifies where the background image(s) is/are positioned
background-origin: content-box;

* size
Specifies the size of the background image(s)
background-size: auto;
background-size: 300px 100px;

* Short code
To shorten the code, it is also possible to specify all the background properties in one single property.
The order is:  
color, image, repeat, attachment, position
```
body {
  background: #ffffff url("img_tree.png") no-repeat right top;
}
```

</details>
