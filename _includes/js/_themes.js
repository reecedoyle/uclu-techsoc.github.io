(function() {
    var DEFAULT_THEME = "light";

    _setTheme = function(all_themes, theme_name) {
        var selector = $("#theme option"),
	    i, il;
	
        for (i = 0, il = selector.length; i < il; i++) {
	    if (selector[i].innerHTML === theme_name) {
		selector[i].selected = true;
	    }
	}
	
        $("body").removeClass(all_themes).addClass(theme_name);
    };

    _getLocalStorageTheme = function() {
        var theme_name = localStorage.getItem("theme");
	if (!theme_name) {
		return DEFAULT_THEME;
	}
        return theme_name;
    };

    _setLocalStorageTheme = function(theme_name) {
        localStorage.setItem("theme", theme_name);
    };

    $(document).ready(function() {
        var theme = $("#theme");

        var all_themes = $.map($("#theme option"), function(element, index) {
            return $(element).val();
        }).join(" ");

        _setTheme(all_themes, _getLocalStorageTheme());

        theme.find("select").change(function() {
            var theme_name = theme.find("option:selected").val();
            $("body").removeClass(all_themes).addClass(theme_name);

	    _setTheme(all_themes, theme_name);
            _setLocalStorageTheme(theme_name);
        });
    });

})();
