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

### Text formatting buttons :

![alt tag](http://s8.postimg.org/6wa2t0f79/2014_11_16_03_08_58_Administration.png)

In order :
- bold
- italic
- underline
- text size (pixels)
- superscript
- subscript
- color picker to set the text color (using jQuery Color Picker plugin)
- uppercase
- lowercase

These BBCode tags can be applied on the current text selection, or at the cursor position if nothing is selected.
Clicking on the text size or the color picker buttons makes a specific panel appear. An other click makes the specific panel disapear.

### Add extra content buttons :

![alt tag](http://s13.postimg.org/l4t4aejkz/2014_11_16_03_10_22_Administration.png)

In order :
- Add an URL (with target option)
- Add an e-mail link
- Add a media outler (using jQuery Media Outlet plugin)

The URL and e-mail BBCode tags can be applied on the current text selection, or at the cursor position if nothing is selected.
Clicking on these three buttons makes a specific panel appear. An other click makes the specific panel disapear.

### Text positioning buttons :

![alt tag](http://s28.postimg.org/5ing7eryh/2014_11_16_03_10_33_Administration.png)

In order :
- left
- center
- right
- justify

These BBCode tags can be applied on the current text selection, or at the cursor position if nothing is selected.

### List button :

![alt tag](http://s4.postimg.org/5f74zg5k9/2014_11_16_03_10_37_Administration.png)

Usage example :

```html
[list]
element 1
element 2
element 3
element 4
[/list]
```

This BBCode tags can be applied on the current text selection, or at the cursor position if nothing is selected.

