

$().ready(function() {

var rootURL = "http://localhost:4000";
var url = shortUpUrl(rootURL,document.URL);

var gaming_ids = ["#gaming_overview","#gaming_competitions","#gaming_leaderboard"];
var gaming_tabs_url = ["/gaming/","/gaming/competitions/","/gaming/leaderboard/"];

var projects_ids = ["#projects_overview", "#projects_reprap","#projects_robots", "#projects_rasppython", "#projects_apps"];
var projects_tabs_url = ["/projects/","/projects/reprap/","/projects/robots/","/projects/raspberrypython/","/projects/apps/"];

var aboutus_ids = ["#aboutus_overview","#aboutus_what","#aboutus_committee"];
var aboutus_tabs_url = ["/aboutus/","/aboutus/what/","/aboutus/committee/"];

var sponsors_ids = ["#sponsors_overview","#sponsors_events"];
var sponsors_tabs_url = ["/sponsors/","/sponsors/events/"];


    
     var menu_projects = url.indexOf("projects");
     if (menu_projects!==-1) parseTab(url,projects_tabs_url,projects_ids);
     else {
      var menu_gaming = url.indexOf("gaming");
      if (menu_gaming!==-1) parseTab(url,gaming_tabs_url,gaming_ids);
      else {
        var menu_aboutus = url.indexOf("aboutus");
        if (menu_aboutus!==-1) parseTab(url,aboutus_tabs_url,aboutus_ids);
        else {
            var menu_sponsors = url.indexOf("sponsors");
            if (menu_sponsors!==-1) parseTab(url,sponsors_tabs_url,sponsors_ids);

        }
         
      }

     }
    
    
});

function shortUpUrl(rootURL, URL) {
return URL.replace(rootURL,"");
}


function parseTab(url,tabs_url,ids){

resetClass(ids);

for (counter=0; counter<tabs_url.length; counter++) {
if (url===tabs_url[counter]) makeActiveTab(ids[counter]);
}

}



function makeActiveTab(tabId){
$(tabId).removeClass("passive").addClass("active");
}

function resetClass(ids){
 var counter = 0;
 for (counter=0; counter<ids.length; counter++) { 
  $(ids[counter]).removeClass("active").addClass("passive");
} 

}
