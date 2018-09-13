$(document).ready(function() { 

    var topics = []; 
    function TVShowpic() { 
    var x = $(this).data("search"); 
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=trilogy&limit=10"; 
    
     
 $.ajax({ 
 url: queryURL, 
 method: "GET" 
 }).done(function(response) { 
    
var results = response.data; 
for (var i = 0; i < results.length; i++) { 

var showDiv = $("<div class='col-md-4'>"); 
var rating = results[i].rating;  
var staticSrc = results[i].images.fixed_height_still.url; 
var showImage = $("<img>"); 
var p = $("<p>").text("Rating: " + rating); 
    

     
showImage.attr("src", staticSrc); 
showImage.addClass("netflixGiphy"); 
showImage.attr("data-state", "still"); 
showImage.attr("data-still", staticSrc); 
showImage.attr("data-animate", defaultAnimatedSrc); 
showDiv.append(p); 
showDiv.append(showpic); 
 $("#gifspace").prepend(showDiv); 
 } 
 }); 
  } 

        $("#addShow").on("click", function(event) { 
         event.preventDefault(); 
    
    
     
            var newShow = $("#showinput").val().trim(); 
            topics.push(newShow); 
            console.log(topics); 
            $("#showinput").val(''); 
            displayButtons();
     
          }); 

        function displayButtons() {  
        $("#myButtons").empty(); 
    
    
        for (var i = 0; i < topics.length; i++) {  
          var a = $('<button class="btn btn-primary">'); 
    
          a.attr("id", "show"); 
          a.attr("data-search", topics[i]);
          a.text(topics[i]); 
          $("#myButtons").append(a);
        } 
      } 
     //to display new show gifs//
      displayButtons(); 
      $(document).on("click", "#show", displayNetflixShow); 
      $(document).on("click", ".showgipgh", pausePlayGifs); 
    
    
    
     //pause and play show gifs//
      function pausePlayGifs() { 
           var state = $(this).attr("data-state"); 
          if (state === "still") { 
            $(this).attr("src", $(this).attr("data-animate")); 
            $(this).attr("data-state", "animate"); 
          } else { 
            $(this).attr("src", $(this).attr("data-still")); 
            $(this).attr("data-state", "still"); 
      }  
    }   
    }); 