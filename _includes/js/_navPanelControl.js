/****************************************
 * Floating Navigation jQuery feature
 ****************************************/
$(function() {
         
    // get initial top offset of navigation
    var floating_navigation_offset_top = $('.right_news_column').offset().top + $('.right_news_column').height();
             
    // define the floating navigation function
    var floating_navigation = function(){
                // current vertical position from the top
        var scroll_top = $(window).scrollTop();
         
        // if scrolled more than the navigation, change its
                // position to fixed to float to top, otherwise change
                // it back to relative
        if (scroll_top > floating_navigation_offset_top) {
            $('#pageNav').css({ 'position': 'fixed','top':0, 'right':0});
            
        } else {
            $('#pageNav').css({ 'position': 'relative' });
             //ad.style.display = 'none';
        }  
    };
     
    // run function on load
    floating_navigation();
     
    // run function every time you scroll
    $(window).scroll(function() {
         floating_navigation();
    });
 
});





