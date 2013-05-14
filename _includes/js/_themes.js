$(document).ready(function() {
    var theme = $("#theme");
    var all_themes = $.map($("#theme option"), function(element, index) {
        return $(element).val();
    }).join(" ");
    theme.find("select").change(function() {
        var theme_name = theme.find("option:selected").val();
        $("body").removeClass(all_themes).addClass(theme_name);
    });
});