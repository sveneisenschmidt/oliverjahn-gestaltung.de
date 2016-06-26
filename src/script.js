// Stylesheets
require("./style.less");
require("./nanoscroll.css");
// Javascript
require('expose?$!expose?jQuery!jquery');
require('../node_modules/bootstrap/dist/js/bootstrap.js');
require('../src/nanoscroll.js');


jQuery(window).load(function() {
    jQuery(".nano").nanoScroller({ flash: true });
});

jQuery(document).ready(function() {
    jQuery("#references a").on('click', function(event) { 
        event.preventDefault();
        jQuery('#gallery img').attr('src', jQuery(this).attr('href')).on('load', function() {
            jQuery('#gallery').modal('show');
        });
    });
});
