$(document).ready(function() {
    
   var gapikey = 'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M';

  var url = "http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=orcfull&api_key=8caff889c2b5776acba470e7c5473a3d&format=json";
  $.getJSON(url, function(data) {
    var artist = data.recenttracks.track[0].artist["#text"];
    var song = data.recenttracks.track[0]["name"];
    var cover = data.recenttracks.track[0].image[3]["#text"];
    var q = song+artist;
    
    $('.track').html("<h3>"+song+"</h3><p>by "+artist+"</p>");
      
      if ( cover != ''){
      
      $('#art').html("<img src="+cover+"/>");
      }
      
      else if ( cover = ''){
           $('#art').html("<img src='image/placeholder.png'>");

      }
      console.log(song);
      console.log(cover);
	 //alert(data.recenttracks.track[1].artist["#text"]);
      
      
      $.get(
    	"https://www.googleapis.com/youtube/v3/search", {
            part: 'snippet, id',
            q: q,
            type: 'video',
            key: gapikey
        }, function() {

            
            ytEmbed.init({'block':'art','key':'AIzaSyCKMpw2nmPnon_gkh4EIXnbiAmrZNw-v4M','q':q,'type':'search','results':1,'meta':false,'player':'embed','layout':'thumbnails'});
                             
                  console.log('lol :D');
               

        });
            
    
        });
$(".stop").click(function(){
    


    
    var video = $("#artPlayer").attr("src");
$("#artPlayer").stop();
$("#artPlayer").attr("src",video);
    });
  });
    

