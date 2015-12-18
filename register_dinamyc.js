if(jQuery('html').hasClass('page-register')) {
    jQuery('fieldset label').each(function() {
        jQuery(this).find('input').attr('placeholder', jQuery(this).text());
    });
}
