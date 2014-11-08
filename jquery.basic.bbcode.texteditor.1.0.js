/*! jQuery Basic Text Editor Plugin - v1.0 - 2014-07-11
 * https://github.com/jcoudsi/jquery.media.outlet
 * Copyright (c) 2014 Julien Coudsi; Licensed MIT */

(function($)
{
    
    $.fn.textEditor = function(params)
    {
        return this.each(function()
        {
            //Gets optionnal user parameters instead of default parameters
            params = $.extend({
                uploadDir:null, //Default upload dir
            }, params);
            
            //Saves the textarea DOM element
            var $textarea = $(this).children('textarea');

            //Generates the text editor buttons
            generatesTextEditorButtons($textarea, params);
           
            var $button = $textarea.siblings('.basic_bbcode_text_editor_buttons').find('i');
            
            //Text editor button click event handler
            $button.click(function()
            {
                onButtonClick($(this), $textarea);
            });
            
        });
        
        
        
        /*
         * Do some actions when a text editor button is clicked
         * @param $button the button DOM element
         * 
         */
        function onButtonClick($button, $textarea)
        {
            //Gets the bbcode tag name
            var bbcode = $button.attr('data-bbcode');
            //Gets the insertion zone DIV element to display
            var divClassToShow = $button.attr('data-divClassToShow');
            
            //Defines the BBCode tags
            var openTag = '[' + bbcode + ']';
            var closeTag = '[/' + bbcode + ']';
            
            //If an insertion zone to show is specified for the button, an user interaction panel must be showed in a first time
            if (divClassToShow)
            {
                
                //Hides all the insertion zones
                $textarea.siblings('div[class^=\'basic_bbcode_text_editor_insert\']').slideUp();
                
                //Displays the insertion zone associated to the button
                if ($textarea.siblings('.' + divClassToShow).css('display') === 'none')
                {
                    $textarea.siblings('.' + divClassToShow).slideDown();
                }
                
            }
            //Others buttons : The BBCode is directly inserted around the selection
            else
            {
                insertsBBCode(openTag, closeTag, $textarea);
            }


        }
        
        
        /**
         * Inserts BBCode
         * @param openTag the open tag
         * @param closeTag the close tag (if it's exists)
         * 
         */
        function insertsBBCode(openTag, closeTag, $textarea)
        {
            //Gets the text selection
            var range = $textarea.range();
            //Places the cursor at the start of selection
            $textarea.caret(range.start);
            //Adds the open BBCode tag before the selection
            $textarea.caret(openTag);
            
            if (closeTag)
            {

                //Places the cursor at the end of the selection
                //It's necessary to consider the length of the new added BBCode open tag to place the cursor at the correct position
                $textarea.caret(range.end + openTag.length);
                //Adds the close BBCode tag
                $textarea.caret(closeTag);
                //Places the cursor at the start of the selected text
                //It's necessary to consider the length of the new added BBCode open tag to place the cursor at the correct position
                $textarea.caret(range.start + openTag.length);
                //Re-selected the text which was selected before the click
                $textarea.range(range.start + openTag.length, range.start + openTag.length + range.length);
            }

        }
        
        /**
         * Generates the text editor buttons
         * @param $textarea the text area DOM element
         * @param params the parameters
         * 
         */
        function generatesTextEditorButtons($textarea, params)
        {
            var $textEditorZone = $textarea.parent();
 
            //Text editor text size zone
            $textEditorZone.prepend('<div class="basic_bbcode_text_editor_insert_size_text_zone"><label for="basic_bbcode_text_editor_input_size">Taille (pixels) :</label><input type="text" id="basic_bbcode_text_editor_input_size" class="basic_bbcode_text_editor_input_size" value="10" /><input type="button" value="Choisir" class="basic_bbcode_text_editor_button_set_size" /></div>');
            
            //Initializes the text size zone
            initializesTextSizeZone($textEditorZone, $textarea);
            
            //Text editor color picker zone
            $textEditorZone.prepend('<div class="basic_bbcode_text_editor_insert_color_zone"><div class="basic_bbcode_text_editor_color_picker" data-color=""></div><input type="button" value="Choisir" class="basic_bbcode_text_editor_button_choose_color" /></div>');
            
            //Initializes the color picker zone
            initializesColorPickerZone($textEditorZone, $textarea);
            
            //Text editor media insertion zone
            $textEditorZone.prepend('<div class="basic_bbcode_text_editor_insert_media_zone"><div class="basic_bbcode_text_editor_media_outlet" data-noPreviewImage="/pimpouces/web/img/nopreview.gif"></div><div><input type="checkbox" class="basic_bbcode_text_editor_media_outlet_size_choice" value="true" />Taille personnalisée</div><div class="basic_bbcode_text_editor_media_outlet_size_zone"><label for="basic_bbcode_text_editor_media_outlet_input_width">Largeur (pixels) :</label><input type="text" id="basic_bbcode_text_editor_media_outlet_input_width" class="basic_bbcode_text_editor_media_outlet_input_width" value="" /><label for="basic_bbcode_text_editor_media_outlet_input_height">Hauteur (pixels) :</label><input type="text" id="basic_bbcode_text_editor_media_outlet_input_height" class="basic_bbcode_text_editor_media_outlet_input_height" value="" /></div><input type="button" value="Insérer" class="basic_bbcode_text_editor_button_insert_media" /></div>');
            
            //Initializes the media insertion zone
            initializesMediaInsertionZone($textEditorZone, $textarea, params);
            
            //Text editor link insertion zone
            $textEditorZone.prepend('<div class="basic_bbcode_text_editor_insert_link_zone"><div><label for="basic_bbcode_text_editor_input_link">URL :</label><input type="text" id="basic_bbcode_text_editor_input_link" class="basic_bbcode_text_editor_input_link" value="http://" /></div><div><input type="checkbox" class="basic_bbcode_text_editor_link_blank" value="blank" />Nouvelle fenêtre </div><input type="button" value="Insérer" class="basic_bbcode_text_editor_button_insert_link" /></div>');
            
            //Initializes the link insertion zone
            initializesLinkInsertionZone($textEditorZone, $textarea);
            
            //Text editor e-mail insertion zone
            $textEditorZone.prepend('<div class="basic_bbcode_text_editor_insert_email_zone"><label for="basic_bbcode_text_editor_input_email">E-mail :</label><input type="text" id="basic_bbcode_text_editor_input_email" class="basic_bbcode_text_editor_input_email" value="Saisir un e-mail" /><input type="button" value="Insérer" class="basic_bbcode_text_editor_button_insert_email" /></div>');
            
            //Initializes the e-mail insertion zone
            initializesEmailInsertionZone($textEditorZone, $textarea);
            
            //Text editor buttons zone
            $textEditorZone.prepend('<div class="basic_bbcode_text_editor_buttons"><div>');
            var $textEditorButtons =  $textEditorZone.children('.basic_bbcode_text_editor_buttons');
            
            //Appareance buttons
            $textEditorButtons.append('<div class="basic_bbcode_text_editor_appareance_buttons"></div>');
            var $appareanceButtons = $textEditorButtons.children('.basic_bbcode_text_editor_appareance_buttons');
            $appareanceButtons.append('<i class="fa fa-bold" data-bbcode="bold"></i><i class="fa fa-italic" data-bbcode="italic"></i><i class="fa fa-underline" data-bbcode="underline"></i><i class="fa fa-text-height" data-bbcode="size" data-divClassToShow="basic_bbcode_text_editor_insert_size_text_zone"></i><i class="fa fa-superscript" data-bbcode="superscript"></i><i class="fa fa-subscript" data-bbcode="subscript"></i><i class="fa fa-tint color_button" data-bbcode="color" data-divClassToShow="basic_bbcode_text_editor_insert_color_zone"></i><i class="fa fa-chevron-up" data-bbcode="uppercase"></i><i class="fa fa-chevron-down" data-bbcode="lowercase"></i>');

            //Insertion button
            $textEditorButtons.append('<div class="basic_bbcode_text_editor_insertion_buttons"></div>');
            var $insertionButtons = $textEditorButtons.children('.basic_bbcode_text_editor_insertion_buttons');
            $insertionButtons.append('<i class="fa fa-link" data-bbcode="link" data-divClassToShow="basic_bbcode_text_editor_insert_link_zone"></i><i class="fa fa-envelope" data-bbcode="email" data-divClassToShow="basic_bbcode_text_editor_insert_email_zone"></i><i class="fa fa-file-image-o" data-bbcode="media" data-divClassToShow="basic_bbcode_text_editor_insert_media_zone"></i>');
            
            //Position buttons
            $textEditorButtons.append('<div class="basic_bbcode_text_editor_position_buttons"></div>');
            var $positionButtons = $textEditorButtons.children('.basic_bbcode_text_editor_position_buttons');
            $positionButtons.append('<i class="fa fa-align-left" data-bbcode="left"></i><i class="fa fa-align-center" data-bbcode="center"></i><i class="fa fa-align-right" data-bbcode="right"></i><i class="fa fa-align-justify" data-bbcode="justify"></i>');
            
            //Miscellaneous buttons
            $textEditorButtons.append('<div class="basic_bbcode_text_editor_miscellaneous_buttons"></div>');
            var $miscellaneousButtons = $textEditorButtons.children('.basic_bbcode_text_editor_miscellaneous_buttons');
            $miscellaneousButtons.append('<i class="fa fa-list" data-bbcode="list"></i>');
            
            //Mouse over on any text button div
            $textEditorButtons.hover(function()
            {
               //Changes the cursor pointer
               $(this).css('cursor', 'pointer');
            });

        }
        
        
        /**
         * Initializes the text size zone in the text editor zone
         * @param $textEditorZone the text editor DOM element
         * @param $textarea the textarea to edit
         * 
         */
        function initializesTextSizeZone($textEditorZone, $textarea)
        {
            var $textEditorTextSizeZone = $textEditorZone.children('.basic_bbcode_text_editor_insert_size_text_zone');
            $textEditorTextSizeZone.hide();
            
            var $textEditorButtonSetSize = $textEditorTextSizeZone.children('.basic_bbcode_text_editor_button_set_size');
            
            $textEditorButtonSetSize.click(function()
            {
                //Defines the BBCode tags
                var bbcode = 'size';
                var size = $(this).siblings('.basic_bbcode_text_editor_input_size').val();
                var openTag = '[' + bbcode + '="' + size + '"]';
                var closeTag = '[/' + bbcode + ']';
                
                //Inserts the BBCode for the mail
                insertsBBCode(openTag, closeTag, $textarea);
                
            });
        }
        
        /**
         * Initializes the color picker zone in the text editor zone
         * @param $textEditorZone the text editor DOM element
         * @param $textarea the textarea to edit
         * 
         */
        function initializesColorPickerZone($textEditorZone, $textarea)
        {
            var $textEditorInsertColorZone = $textEditorZone.children('.basic_bbcode_text_editor_insert_color_zone');
            $textEditorInsertColorZone.hide();
            var $textEditorColorPicker =  $textEditorInsertColorZone.children('.basic_bbcode_text_editor_color_picker');
            
            var selectedColor = '0000ff';

            $textEditorColorPicker.ColorPicker({
                flat: true,
                color: '0000ff',
                onChange: function (hsb, hex, rgb) 
                {
                    //Saves the selected color
                    selectedColor = hex;
                }
            });
            
            var $textEditorButtonChooseColor = $textEditorInsertColorZone.children('.basic_bbcode_text_editor_button_choose_color');
            
            $textEditorButtonChooseColor.click(function()
            {
                //Defines the BBCode tags
                var bbcode = 'color';
                var openTag = '[' + bbcode + '="#' + selectedColor + '"]';
                var closeTag = '[/' + bbcode + ']';
                
                //Inserts the BBCode for the mail
                insertsBBCode(openTag, closeTag, $textarea);
                
            });
            
        }
        
        
        /**
         * Initializes the e-mail insertion zone in the text editor zone
         * @param $textEditorZone the text editor DOM element
         * @param $textarea the textarea to edit
         * 
         */
        function initializesEmailInsertionZone($textEditorZone, $textarea)
        {
            var $textEditorInsertEmailZone = $textEditorZone.children('.basic_bbcode_text_editor_insert_email_zone');
            $textEditorInsertEmailZone.hide();
            
            var $textEditorButtonInsertEmail = $textEditorInsertEmailZone.children('.basic_bbcode_text_editor_button_insert_email');
            var $textEditorInputEmail = $textEditorInsertEmailZone.children('.basic_bbcode_text_editor_input_email');
            
            //Manages the clic in the e-mail input
            $textEditorInputEmail.focus(function()
            {
                //Field initialization
                if ($(this).val() === 'Saisir un e-mail')
                {
                    $(this).val('');
                }
            });
            
            //Manages the clic on the insert email button
            $textEditorButtonInsertEmail.click(function()
            {
                var bbcode = 'email';
                var email = $textEditorInputEmail.val();
                
                //Defines the BBCode tags
                var openTag = '[' + bbcode + '="' + email + '"]';
                var closeTag = '[/' + bbcode + ']';

                //If an e-mail is specified
                if (email)
                {
                    //Inserts the BBCode for the mail
                    insertsBBCode(openTag, closeTag, $textarea);
                }
                
                
            });
            
            
        }
        
        
        /**
         * Initializes the link insertion zone in the text editor zone
         * @param $textEditorZone the text editor DOM element
         * @param $textarea the textarea to edit
         * 
         */
        function initializesLinkInsertionZone($textEditorZone, $textarea)
        {
            var $textEditorInsertLinkZone = $textEditorZone.children('.basic_bbcode_text_editor_insert_link_zone');
            $textEditorInsertLinkZone.hide();
            
            //Manages the clic on the insert email button
            var $textEditorButtonInsertLink = $textEditorInsertLinkZone.children('.basic_bbcode_text_editor_button_insert_link');
            $textEditorButtonInsertLink.click(function()
            {
                var bbcode = 'link';
                var link = $(this).siblings('div').find('.basic_bbcode_text_editor_input_link').val();
                
                //Defines the BBCode tags
                var openTag = '[' + bbcode + ' href="' + link + '"';
                if ($(this).siblings('div').find('.basic_bbcode_text_editor_link_blank').prop('checked') === true)
                {
                    openTag += ' target="_blank"';
                }
                openTag += ']';
                
                var closeTag = '[/' + bbcode + ']';

                //If an e-mail is specified
                if (link)
                {
                    //Inserts the BBCode for the link
                    insertsBBCode(openTag, closeTag, $textarea);
                }
                
            });
        }
        
        
        /**
         * Initializes the media insertion zone in the text editor zone
         * @param $textEditorZone the text editor DOM element
         * @param $textarea the textarea to edit
         * @param $params the user parameters
         * 
         */
        function initializesMediaInsertionZone($textEditorZone, $textarea, params)
        {
            var $textEditorInsertMediaZone = $textEditorZone.children('.basic_bbcode_text_editor_insert_media_zone');
            var $textEditorMediaOutletSizeZone = $textEditorInsertMediaZone.children('.basic_bbcode_text_editor_media_outlet_size_zone');
            //Hides the media size choice zone
            $textEditorMediaOutletSizeZone.hide();
            //Hides all the media insertion zone
            $textEditorInsertMediaZone.hide();
            
            var $textEditorMediaOutlet =  $textEditorInsertMediaZone.children('.basic_bbcode_text_editor_media_outlet');
            
            var mediaSelected = null;
            
            //Generates the URL to call for file upload
            var url = Routing.generate('media_upload_file');
                        
            //Initializes the media manager
            $textEditorMediaOutlet.mediaOutlet({
                urlService:url,
                uploadDir:params.uploadDir,
                defaultMode:'upload',
                noPreviewImage:'data-noPreviewImage',
                onSuccess:function(result, $textEditorMediaOutlet)
                {
                    if (result.mediaSelectionType === 'upload')
                    {
                        mediaSelected = result.mediaName;       
                    }
                    else if (result.mediaSelectionType === 'url')
                    {
                        mediaSelected = result.mediaUrl;
                    }

                }
            });
            
            //Creates the thumbnails for the media manager images
            creerVignetteImage('.media_outlet_image_preview', 150, 100, 'crop');
            
            //Manages the clic on the size choice checkbox
            var $textEditorMediaOutletSizeChoice = $textEditorInsertMediaZone.find('.basic_bbcode_text_editor_media_outlet_size_choice');
            var customSize = false;
            $textEditorMediaOutletSizeChoice.click(function()
            {
                //Displays the size choice
                if ($(this).prop('checked') === true)
                {
                    $textEditorMediaOutletSizeZone.slideDown();
                    customSize = true;
                }
                //Hides the size choice
                else
                {
                    $textEditorMediaOutletSizeZone.slideUp();
                    customSize = false;
                }
            });
            
            //Manages the clic on the insert media button
            var $textEditorButtonInsertMedia = $textEditorInsertMediaZone.children('.basic_bbcode_text_editor_button_insert_media');
            $textEditorButtonInsertMedia.click(function()
            {
                //If a media is selected
                if (mediaSelected)
                {
                    //Defines the BBCode tag
                    var openTag = '[media src="' + mediaSelected + '"';
                    
                    //If a custom size is specified, it's added to the BBCode tag
                    if (customSize)
                    {
                        var customWidth = $textEditorMediaOutletSizeZone.children('#basic_bbcode_text_editor_media_outlet_input_width').val();
                        var customHeight = $textEditorMediaOutletSizeZone.children('#basic_bbcode_text_editor_media_outlet_input_height').val();
                        openTag += ' width="' + customWidth + '" height="' + customHeight + '"';
                    }
                    
                    openTag += ' alt="media description"]';
                    
                    //Inserts the BBCode for the media
                    insertsBBCode(openTag, null, $textarea); 
                }
            });
        }


    } 
    
})(jQuery);