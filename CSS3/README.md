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

## **Selectors**
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
Three Ways to Insert CSS

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

## **Borders**
The CSS border properties allow you to specify the style, width, and color of an element's border.

<details>
  <summary>See more</summary>

* Border Style

The border-style property specifies what kind of border to display.

The following values are allowed:

dotted - Defines a dotted border
dashed - Defines a dashed border
solid - Defines a solid border
double - Defines a double border
groove - Defines a 3D grooved border. The effect depends on the border-color value
ridge - Defines a 3D ridged border. The effect depends on the border-color value
inset - Defines a 3D inset border. The effect depends on the border-color value
outset - Defines a 3D outset border. The effect depends on the border-color value
none - Defines no border
hidden - Defines a hidden border

The border-style property can have from one to four values (for the top border, right border, bottom border, and the left border).

Example:
```
p.dotted {border-style: dotted;}
p.dashed {border-style: dashed;}
p.solid {border-style: solid;}
p.double {border-style: double;}
```

* Border width

The border-width property specifies the width of the four borders.
The width can be set as a specific size (in px, pt, cm, em, etc)
The border-width property can have from one to four values (for the top border, right border, bottom border, and the left border).

```
p.one {
  border-style: solid;
  border-width: 5px;
}
```

* Border Color

The border-color property is used to set the color of the four borders.
The border-color property can have from one to four values (for the top border, right border, bottom border, and the left border).

```
p.three {
  border-style: solid;
  border-color: red green blue yellow;
}
```

* border radius

The border-radius property is used to add rounded borders to an element
```
p {
  border: 2px solid red;
  border-radius: 5px;
}
```

* Shorthand Property

The border property is a shorthand property for the following individual border properties:
- border-width
- border-style (required)
- border-color
```
p {
  border: 5px solid red;
}
```

You can also specify all the individual border properties for just one side:
```
p {
  border-left: 6px solid red;
  background-color: lightgrey;
}
```

* All css border properties

border	               Sets all the border properties in one declaration
border-bottom	         Sets all the bottom border properties in one declaration
border-bottom-color	   Sets the color of the bottom border
border-bottom-style	   Sets the style of the bottom border
border-bottom-width	   Sets the width of the bottom border
border-color	         Sets the color of the four borders
border-left	           Sets all the left border properties in one declaration
border-left-color	     Sets the color of the left border
border-left-style	     Sets the style of the left border
border-left-width	     Sets the width of the left border
border-radius	         Sets all the four border-radius properties for rounded corners
border-right	         Sets all the right border properties in one declaration
border-right-color	   Sets the color of the right border
border-right-style	   Sets the style of the right border
border-right-width	   Sets the width of the right border
border-style	         Sets the style of the four borders
border-top	           Sets all the top border properties in one declaration
border-top-color	     Sets the color of the top border
border-top-style	     Sets the style of the top border
border-top-width	     Sets the width of the top border
border-width	         Sets the width of the four borders

</details>

## **Margins**
The CSS margin properties are used to create space around elements, outside of any defined borders.

<details>
  <summary>See more</summary>

* individual sides
- margin-top
- margin-right
- margin-bottom
- margin-left

All the margin properties can have the following values:  

auto - the browser calculates the margin  
length - specifies a margin in px, pt, cm, etc.  
% - specifies a margin in % of the width of the containing element  
inherit - specifies that the margin should be inherited from the parent element  

```
p {
  margin-top: 100px;
  margin-bottom: 100px;
  margin-right: 150px;
  margin-left: 80px;
}
```

* Margin - Shorthand

margin: 25px 50px 75px 100px;  
- top margin is 25px  
- right margin is 50px  
- bottom margin is 75px  
- left margin is 100px  

```
p {
  margin: 25px 50px 75px 100px;
}
```

* auto value
You can set the margin property to auto to horizontally center the element within its container.
```
div {
  width: 300px;
  margin: auto;
  border: 1px solid red;
}
```

* margin collapse
Top and bottom margins of elements are sometimes collapsed into a single margin that is equal to the largest of the two margins.

h1 { margin: 0 0 50px 0; }  
h2 { margin: 20px 0 0 0; }

margin would be a total of 70px (50px + 20px). But due to margin collapse, the actual margin ends up being 50px.

</details>

## **Paddings**
The CSS padding properties are used to generate space around an element's content, inside of any defined borders.

<details>
  <summary>See more</summary>

* Individual sides

CSS has properties for specifying the padding for each side of an element:

- padding-top
- padding-right
- padding-bottom
- padding-left

```
div {
  padding-top: 50px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 80px;
}
```

* Padding - Shorthand

To shorten the code, it is possible to specify all the padding properties in one property.

If the padding property has four values:

padding: 25px 50px 75px 100px;
- top padding is 25px
- right padding is 50px
- bottom padding is 75px
- left padding is 100px

```
div {
  padding: 25px 50px 75px 100px;
}
```

* padding an element with width

To keep the width at 300px, no matter the amount of padding, you can use the box-sizing property. This causes the element to maintain its width; if you increase the padding, the available content space will decrease. Here is an example:
```
div {
  width: 300px;
  padding: 25px;
  box-sizing: border-box;
}
```

</details>

## **Height / Width**
The height and width properties are used to set the height and width of an element.

<details>
  <summary>See more</summary>

  * Height / Width

  The height and width can be set to auto (this is default. Means that the browser calculates the height and width), or be specified in length values, like px, cm, etc., or in percent (%) of the containing block.

```
div {
  height: 200px;
  width: 50%;
  background-color: powderblue;
}
```

Note: The height and width properties do not include padding, borders, or margins; they set the height/width of the area inside the padding, border, and margin of the element!

* max-width
The max-width property is used to set the maximum width of an element.

Note: The value of the max-width property overrides width.

* All dimension Properties
height	     Sets the height of an element
max-height	 Sets the maximum height of an element
max-width	   Sets the maximum width of an element
min-height	 Sets the minimum height of an element
min-width	   Sets the minimum width of an element
width	       Sets the width of an element

</details>
