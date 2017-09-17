$(document).ready(function(){

    var images = ['yael_catalog_home.png', 'robertjohnson_home.png', 'onkozlova_bc_home.png', 'support_portal_home.png', 'ui_toolkit_home.png'];
    $('.bckg-img').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'
    });

});
