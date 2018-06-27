//initial array of people
var people = ["Drake", "Barak Obama", "Donald Trump", "Oprah Winfrey", "Justin Bieber", "Beyoncé", "Madonna", "Kim Kardashian", "Sarah Palin", "Arnold Schwarzenegger"];


$("#buttons-view").on("click", function() {
    var person = $(this).attr("data-person");
    var queryURL = "http://api.giphy.com/v1/gifs/?t=" + person + "&api_key=cZVFvzDv27P3cu5wX8rSTV1gYTrDAJ6Q";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response){
        console.log(queryURL);

        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            //creating a div to hold the person
            var personDiv = $("<div class='person'>");
            
            //creating an element to have the rating shown
            var p = $("<p>").text("Rating: " + results[i].rating);
            
            //Creating and Storing an image tag
            var personImage = $("<img>");
            
            //setting the src attribute of the image to a property pulled off the result item
            personImage.attr("src", results[i].images.url);
            
            //showing the rating and image
            personDiv.append(p);
            personDiv.append(personImage);

            // var gifURL = response.Gif;
            // var gif = $(".gif").attr("src", gifURL);
            // personDiv.append(gif);
            // $("#people-view").prepend(personDiv) 
        }
    });
});












// //displayPeopleGif function re-renders the HTML to show the corresponding gifs
// function displayPeopleGif() {
    
//     var person = $(this).attr("data-name");
//     var queryURL = "http://api.giphy.com/v1/gifs/?t=" + person + "famouse+people&api_key=cZVFvzDv27P3cu5wX8rSTV1gYTrDAJ6Q";

//     //AJAX call for the specific individual
//     $.ajax({
//         url: queryURL,
//         method: "GET"
//     }).then(function(response) {
//         console.log(response);
//         //creating a div to hold the person
//         var personDiv = $("<div class='person'>");
//         //storing the rating data
//         var rating = response.Rated;
//         //creating an element to have the rating shown
//         var pOne = $("<p>").text("Rating: " + rating);
//         //showing the rating
//         personDiv.append(pOne);

//         var gifURL = response.Gif;
//         var gif = $(".gif").attr("src", gifURL);
//         personDiv.append(gif);
//         $("#people-view").prepend(personDiv) 
//     });
// }




var button;

var renderButtons = function () {
    $("#add-person").empty();

    for (var i = 0; i < people.length; i++) {
        var 
    }

}

