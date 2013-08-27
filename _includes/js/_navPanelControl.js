


/****************************************
 * Floating Navigation jQuery feature
 ****************************************/
 $(document).ready(function() {
         
    // get initial top offset of navigation
             
    // define the floating navigation function
 

   var floating_navigation = function(){
               
if ($(".right_news_column")[0]){

     
    

     var floating_navigation_offset_top = $('.right_news_column').offset().top + $('.right_news_column').height();   
     var scroll_top = $(window).scrollTop();
     var element = document.getElementById("pageNav");

        if (scroll_top > floating_navigation_offset_top) {
            element.classList.add("plugin_page_navigation");
        } 
        else {
             document.getElementById("pageNav").className = "";  
        }  
    
}
    };


     
    // run function on load
    floating_navigation();

    
    // run function every time you scroll
    $(window).scroll(function() {
         floating_navigation();

    });

 
});





