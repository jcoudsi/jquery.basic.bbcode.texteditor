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
Turns the textarea inside the HTML element into a BBCode text editor

Options
-------

### uploadDir
The name of the directory where the media will be uploaded on your server, when the media upload functionality of the text editor is used. If it isn't specified, the file will be uploaded in the directory where the PHP upload script is executed.
