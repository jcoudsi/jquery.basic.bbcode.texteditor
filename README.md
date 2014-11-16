# jQuery Basic BBCode Text Editor

Features
--------
This text editor provides the following options using some BBCode tags :

- Text format :
  - bold
  - italic
  - underline
  - text size (in pixels)
  - superscript
  - subscript
  - color text
  - uppercase
  - lowercase

- Extra content :
  - insert a link
  - insert a media
  - insert an e-mail address

- Text alignment :
  - left
  - center
  - right
  - justify

- List

Browser support
---------------
Tested with :

- Internet Explorer 10
-	Chrome 38
- Firefox 31

Requirements
------------
jQuery Core v1.10.x or higher required.

- jQuery plugins and others toolkits :
  - jQuery Color Picker Plugin (http://www.eyecon.ro/colorpicker/)
  - jQuery Caret (https://github.com/acdvorak/jquery.caret)
  - jQuery Media Outlet (https://github.com/jcoudsi/jquery.media.outlet)
  - Font Awesome (http://fortawesome.github.io/Font-Awesome/) 

Documentation
=============
`.textEditor(options)`
--------------------
Turns the textarea inside the HTML element into a BBCode text editor.

Options
-------

### uploadDir
The name of the directory where the media will be uploaded on your server, when the media upload functionality of the text editor is used. If it isn't specified, the file will be uploaded in the directory where the PHP upload script is executed.

Usage
=====

The textarea element must be the immediate children of the used container.

Working example :

```html
<div class="texteditor">
  <textarea>Some text</texarea>
</div>
```

```javascript
$('.texteditor').textEditor();
```

No working example :

```html
<div class="texteditor">
  <div class="subdiv">
    <textarea>Some text</texarea>
  </div>
</div>
```

```javascript
$('.texteditor').textEditor();
```

Overview
--------

![alt tag](http://s1.postimg.org/7lgllbmtr/2014_11_16_03_05_44_Administration.png)

Text formatting buttons :

![alt tag](http://s8.postimg.org/6wa2t0f79/2014_11_16_03_08_58_Administration.png)


<i class="fa fa-bold"></i>

