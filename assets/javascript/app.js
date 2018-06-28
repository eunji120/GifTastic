//initial array of people
var people = ["Drake", "Barak Obama", "Donald Trump", "Oprah Winfrey", "Justin Bieber", "Beyoncé", "Madonna", "Kim Kardashian", "Sarah Palin", "Arnold Schwarzenegger"];


function displayPersonInfo() {
    var person = $(this).attr("data-person");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + person + "&api_key=cZVFvzDv27P3cu5wX8rSTV1gYTrDAJ6Q";

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
            personImage.attr("src", results[i].images.fixed_height_still.url);
            personImage.attr("data-still", results[i].images.fixed_height_still.url);
            personImage.attr("data-animate", results[i].images.fixed_height.url);
            personImage.attr("data-state", "still");
            personImage.addClass("gif");
            
            //showing the rating and image
            personDiv.append(p);
            personDiv.append(personImage);

            $("#people-view").prepend(personDiv);

        }
    });
};

//clicking the gifs changing their animation status
$("#people-view").on("click", ".gif", function(event) {
    event.preventDefault();

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

//display person data
function renderButtons() {

    //deleting the people before adding new person
    $("#buttons-view").empty();

    //lloking through the array of people
    for (var i = 0; i < people.length; i++) {

        //generating buttons for each person in the array
        var button = $("<button>");
        //adding a class of person-btn to the button
        button.addClass("person-btn");
        //adding a data attribute
        button.attr("data-person", people[i]);
        //providing the initial button text
        button.text(people[i]);
        //adding the button to the buttons-view div
        $("#buttons-view").append(button);
    }
}


$("#add-person").on("click", function(event) {

    event.preventDefault();
    //grabbing input from the textbox
    var person = $("#person-input").val().trim();
    //adding person from the textbox to the array
    people.push(person);
    //calling renderButton
    $(document).ready(renderButtons());

});

//Adding a click event listener to all elements with a class of "person-btn"
$(document).on("click", ".person-btn", displayPersonInfo)

$(document).ready(renderButtons());

