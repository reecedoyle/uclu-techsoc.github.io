var pipesURL1 = 'http://www.wallflux.com/feed/431246883599277';

/*
*  How to load a feed via the Feeds API.
*/

google.load("feeds", "1");

// Our callback function, for when a feed is loaded.
function feedLoaded(result) {
  if (!result.error) {
    // Grab the container we will put the results into
    var container = document.getElementById("android_recent_news");
    if (!container) {
	    return;
    }


    // Loop through the feeds, putting the titles onto the page.
    // Check out the result object for a list of properties returned in each entry.
    // http://code.google.com/apis/ajaxfeeds/documentation/reference.html#JSON
    var author = "Michael Leong";
    var html = '<ul>';

    for (var i = 0; i < result.feed.entries.length; i++) {
      var entry = result.feed.entries[i];

     // checking for no adverts  
     if (entry.link!="http://www.wallflux.com/") {

      var message = entry.content;
      

      message=new_line(message);         
        
      var text = entry.content; // text of the post
      var date = entry.publishedDate; 
      var link = entry.link;

      html+=author_filter(author,message,text,date,link);
       
      
     }

   }


      html += '</ul>';
  }
}



function OnLoad() {

  // Create a feed instance that will grab Digg's feed.
  var feed = new google.feeds.Feed(pipesURL1);
  feed.setNumEntries(10);


  // Calling load sends the request off.  It requires a callback function.
  feed.load(feedLoaded);
}

google.setOnLoadCallback(OnLoad);


// filter posts, so only admin of the group is showed off
// as well as deletes his/her name from the post (default rss)
function author_filter(author, message, text, date,link) {
      var html="";
      var contains_author = message.indexOf(author);
      if (contains_author!==-1) {
       message = message.replace(author + " wrote on techSoc Mobile App Dev's wall:","");
       message = message.replace(author+" posted a link to techSoc Mobile App Dev's wall:","");


html = '<li>' + '<div class="plugin_message">' + '<h4>'+ message + '</h4>' + '<div class="plugin_message_details">' + '<h3>'+ date + '</h3>'+ '</div>' +'<div class="plugin_message_details">' + '<a href=' + link + '><img alt="Visit our Facebook Group" title="from our Facebook Group" src="/images/facebook.png" /></a>' + '</div>' + '</div>' + '</li>';
     }
return html;
}


// if contains full stop put on the new line, to increase readability
function new_line(message) {
      
      var contains_fullstop = message.indexOf(".");
      if (contains_fullstop===-1) contains_fullstop = message.indexOf("!");
      if (contains_fullstop===-1) contains_fullstop = message.indexOf("?");
       if (contains_fullstop!==-1) {
            message = message.replace(".",".<br>");
            message = message.replace("!","!<br>");
            message = message.replace("?","?<br>");
         }

return message;
}


