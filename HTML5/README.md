# HTML5 - Review

## HTML5 is the latest evolution of the standard that defines HTML

* Document summary

<html> ... </html> : Beginning and end of and HTML document.
<head> ... </head> : Contains information that specific the page(tags, meta data, links to scripts and styles).
<title> ... </title> : Title for the page.
<body> ... </body> : The body includes all the content that will be shown to users.

```
<html>
  <head>
    <title>Document summary</title>
  </head>
  <body>

  </body>
</html>
```

* Document information

<base /> : The base URL is useful for specifying all relative links in a document.
<meta /> : Meta data spells out additional information about the page () description, author, published date, keyword).
<link /> : Can be used to create relationships with external pages or documents, including style sheets.
<style> ... </style> : This element includes document style information, typically to css.
<script> ... </script>  : This element includes all scripting information, or links to external scripts.

```
<html>
  <head>
    <meta charset="utf-8">
    <base href="URL" target="_blank">
    <title>Document information</title>
    <link rel="stylesheet" href="master.css">

    <script>
    let message = "Hello world";
    </script>
  </head>
  <body>

  </body>
</html>
```

(see App for live examples)
* Document structure

h1 to h6 : 'All six leaves of Headings, with 1 being the most important on a page and 6 being the least. These elements are used to describe content sections on a page.'
span : 'An inline section or block container, typically used for grouping styling elements'
p : 'This foundational tag is used to organize paragraphs of text'
br : 'Crates a line break useful to for writing blocks of text that need to be on different lines.'
hr : 'Create a horizontal rule, a sectional break in an HTML page. Typically used to denote a change in topic or section of a page.'

```
<div className="result">
  <h3> Lorem ipsum </h3>
  <p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br />
  Pellentesque volutpat congue velit. <br />
  Ut maximus diam at nunc auctor, id rutrum nisl tincidunt. <br />
  <hr />
  Cras sed erat sed risus fringilla sagittis. <br />
  Maecenas <span>quis arcu turpis.</span> <br />
  In pellentesque eget augue nec lacinia. <br />
  Phasellus vel justo volutpat, sollicitudin purus et, volutpat felis. <br />
  </p>
</div>
```
* Text + formatting

strong : 'Indicates STROG emphasis, displayed bold in most browsers'
b 'Another way to create bold text, it is more for drawing attention'
em 'The emphasis tags also are like they sound, emphasizing text'
i : 'add italics to text, used to denote things like thoughts or names'
cite : 'Tags used to cite or reference information, useful for quotes and statements in a document'
pre : 'pre.formatted, monospace text laid out with whitespace'
del : 'Helps denote a previously deleted section of text'
ins : 'Represents a section of text thats been inserted into the document'
blockquote : 'Reserved for long paragraphs of quotations often cited'
q : 'These are used for shorter quotations'
abbr : 'Abbreviation these help denote abbreviations, while also making the full form available'
address : 'Displays the author's contact information'
dfn : 'Definition used to create an inline definition in the body text'
code : 'Code text displays code snippets'
sub : 'Subscript text a helpful way to subscript text'
small : 'Small size text Historically used to simply reduce text size, in HTML5 it also refers to information that may no longer be valid'

```
<div className="result">
  <p>
  <strong>Aenean tempus finibus tristique.</strong>
  Duis lorem urna, <em>tincidunt et posuere nec</em>, <i>euismod pellentesque tortor</i>.
  <blockquote>
  Curabitur pulvinar, elit sit amet interdum sagittis, tellus nibh dictum turpis, a <b>rutrum tellus massa et dolor</b>.
  </blockquote>
  <cite>- Fusce aliquam tortor eget ex pharetra, ac malesuada lorem luctus.</cite>
  <br />
  <pre>Vivamus sit amet tempor nisl, sit amet dapibus nulla.</pre>
  <q>Morbi fermentum eleifend odio</q>,<address>ut pulvinar massa interdum in.</address>
  <ins>Etiam vel augue cursus</ins>, <small>porta ipsum sit amet, tristique erat.</small>
  <code>Ut vitae molestie arcu.</code>
  <del>In hac habitasse platea dictumst.</del>
  </p>
</div>
```

* Links

href: 'anchor text for hyperlink'
mailto: 'A link used to pull up an outgoing message to a specific email addresses'
tel: 'A link to make phone numbers clickable, especially useful for mobiles users'
name: 'An anchor thats useful for bringing users to specific document elements'
#name: 'An anchor link that brings users specifically to a div element'

```
<div className="result">

  <a href="example">hyperlink </a> {html5.href} <br/>
  <a href="mailto:">mailto</a> {html5.mailto} <br/>
  <a href="tel://###-###">tel</a> {html5.tel} <br/>
  <a href="name">name</a> {html5.name} <br/>
  <a href="#structure">Document structure</a> {html5.tagname} <br/>

</div>
```

* Images
* Lists + formatting
* Forms
* Tables
* Objects & iFrames
* HTML5 New Tags
* Collective Characters Objects

### Extra symbols
* <code> &#34, &quot </code> Quotation Marks - "
* <code>&#38, &amp </code> Ampersand - &
* <code>&#60, &lt </code> Less than sign - <
* <code>&#62, &gt </code> Greater than sign - >
* <code>&#160, &nbsp </code> Non-breaking space
* <code>&#169, &copy </code> Copyright simbol - ©
* <code>&#64, &Uuml </code> @ Symbol - @
* <code>&#149, &ouml </code> Small bullet - •
* <code>&#153, &ucirc </code> Trademark symbol - ™
