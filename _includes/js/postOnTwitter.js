 var twitterConsumerKey = 'fwQsiH8vIGSeAAVp2mHxA';
 var twitterConsumerSecret =  'BaktkIPCzpShCtrTlVdNseRRSxxI7fvN1MrfiLfc7fg';

 var twitterAccessToken = '180748016-Mu3gy7Ksp0al1jIbGoCMT9pwwZ9W4ZuhFqjVnF49';
 var twitterAccessTokenSecret = 'zUBf1wlsJNK5MNztmrvi3VbmypuoKtcljPxsPrXuvI';

 
 var OAuth = require('oauth').OAuth;


 oAuth = new OAuth(
 "https://api.twitter.com/oauth/request_token",
 "https://api.twitter.com/oauth/access_token",
 twitterConsumerKey, twitterConsumerSecret,
 "1.0A",null,"HMAC-SHA1"
 );


 oAuth.post(
 "http://api.twitter.com/1.1/statuses/update.json",
 twitterAccessToken, twitterAccessTokenSecret,
 {"status":"how are you?"},
 function(error,data) {
    if (error) console.log(require('sys').inspect(error))
    //else console.log(data)
 }
 );


 oAuth.get("https://api.twitter.com/1.1/statuses/user_timeline.json?user_id=VladKolesnik",   twitterAccessToken, twitterAccessTokenSecret, function(error, data) {
  
  var tweets = JSON.parse(data);

  var x = tweets.length;
  var n = 0;
  var module = document.querySelector("#apps");
  var html = '<ul>';
  
for(t in tweets) {
   if (tweets[n].innerHTML) {

           var tweettext = tweets[n].textContent.toString();
           var contains_overview = tweettext.indexOf("#overview");
  
           if (contains_overview!==-1) {

               tweettext = tweettext.replace("#overview","");
               html += '<li>' + '<div id="tweets_style">' + '<h1>'+ tweettext + '</h1>' + '<div id="tweets_date">'+ date[n].textContent + '</div>' + '</div>' + '</li>';

           }
                 
    }
  }

 
system 

 });

window.onload=getStuff;






