// controls permanent theme change

$(document).ready(function() {
    var theme = $("#theme");
    var all_themes = $.map($("#theme option"), function(element, index) {

        var theme_name = changeOptionSelection();

        return $("body").removeClass(all_themes).addClass(localStorage.getItem("theme"));

}).join(" ");


    // on theme change event 
    theme.find("select").change(function() {
        $("body").removeClass("light");
        $("body").removeClass("dark");

        var theme_name = theme.find("option:selected").val();
        localStorage.setItem("theme", theme_name);
       
        $("body").addClass(theme_name);
          
    });


});



// function changing option selection in html
function changeOptionSelection() {
var theme_name;
var container = document.getElementById("theme");
        container.innerHTML="";
        var html="";
        

        if (localStorage.getItem("theme")==="light") {
        html='<label>Pick theme:</label> <select> <option selected="selected">light</option> <option>dark</option> </select> <input type="hidden" name="theme" value="light"/>'
        theme_name="light";
        }

        else {
        html='<label>Pick theme:</label> <select> <option>light</option> <option selected="selected">dark</option> </select> <input type="hidden" name="theme" value="dark"/>'
        theme_name="dark";
        }
        container.innerHTML = html; 

return theme_name;

}



