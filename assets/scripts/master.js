'use strict';
/*
* Novicell master
* Use this file to call functions in other files, on document ready, window.resize etc.
*/

var novicell = novicell || {};
var projectName = projectName || {};

// Document ready
document.addEventListener('DOMContentLoaded', function(){
    svg4everybody(); // Fix SVG spritemap in IE/Edge
    novicell.validate.init(); // Init Validation
    novicell.inputMasking.init(); //Init input masking
    novicell.persistentField.init(); //Init persistentField
    novicell.slider.init(); 
    novicell.cookieInfo.init(); 
    console.log('it works!');
});