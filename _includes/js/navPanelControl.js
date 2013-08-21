/****************************************
 * Floating Navigation jQuery feature
 ****************************************/
$(function() {
         
    // get initial top offset of navigation
   /* var floating_navigation_offset_top = $('#pageNav').offset().top;
             
    // define the floating navigation function
    var floating_navigation = function(){
                // current vertical position from the top
        var scroll_top = $(window).scrollTop(); */

      var ad = document.getElementById("pageNav");
      ad.style.display = 'none';

        // if scrolled more than the navigation, change its
                // position to fixed to float to top, otherwise change
                /* it back to relative
        if (scroll_top > floating_navigation_offset_top) {
            $('#pageNav').css({'position': 'fixed', 'right':0});
           // ad.style.display = 'block';
        } else {
            $('#pageNav').css({'position': 'relative' });
        }  
    };
     
    // run function on load
    floating_navigation();
     
    // run function every time you scroll
    $(window).scroll(function() {
         floating_navigation();
    });
 */
});
