$( document ).ready(function() {
    // console.log( "test!" );

        // Initial Array of Butttons 
    // _____________________________________________________________________________________________________________________________

          var afv = ["afvbabies", "afvpets", "afv"];
          // console.log(afv);
        // Function for displaying movie data

        function renderButtons() {
        // Deleting the movie buttons prior to adding new movie buttons
            $("#search-view").empty();
        // Looping through the array of afv 
            for (var i = 0; i <afv.length; i++) {
              // Then dynamicaly generating buttons for each afv in the array.
              // This code $("<button>") is all jQuery needs to create the start and end tag. (<button></button>)
                  var a = $("<button>");
              // Adding a class
                  a.addClass("afvSearched");
              // Adding a data-attribute with a value of the afv at index i
                  a.attr("data-name", afv[i]);
              // Providing the button's text with a value of the places at index i
                  a.text(afv[i]);
              // Adding the button to the HTML
                  $("#addAfv").append(a);
              }
          }

      // GIPHY Ajax API Query and data pull 
      // ____________________________________________________________________________________________________________________________
        
          function displayGifs(responseArray) {
            for(i=0; i<responseArray.data.length;i++){
                //Creating and storing a div tag
                var searchDiv =$('<div>');
                var rating = responseArray.data[i].rating; 
                // Creating a paragraph tag with the result item's rating
                var p =$("<p>").text("Rating: " + responseArray.data[i].rating);
                //  create a new DOM element for image
                var afv = $('<img>'); 
                // Setting the src attribute of the image to a property pulled off the result item
                // Image variable holds both animated and still image
                afv.attr('src', responseArray.data[i].images.downsized_still.url);
                // afv.attr('src', response.data[i].images.downsized.url);
             
                // Appending the paragraph and image tag to the searchDiv
                searchDiv.append(p);
                searchDiv.append(afv);
                $("#search-view").prepend(searchDiv);
            }

          }

          function getGifs(searchTerm) {
          var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=chJF2E6dEc4mlE405FcAlzVVkQHncAAG&limit=10";
          
          $.ajax({
            url: queryURL,
            method: "GET"
            }).done( function(response) {
              console.log(response);
              displayGifs(response)
            })
          }


          
   renderButtons();

   $(document).on("click", ".afvSearched", function() {
      console.log(this);
      var myDataValue = $(this).attr("data-name");
      console.log(myDataValue)
      getGifs(myDataValue);

    })
            
})

$("#submit-button").on("click", function(event){
    event.preventDefault();
    var afvSearched = $("#Input-Afv-search").val().trim();
    var a = $("<button>");
        a.addClass("afvSearched");
        a.attr("data-name", afvSearched);
        a.text(afvSearched);
    $("#addAfv").append(a);
          
            // listen to on click for the submit buttion 
            // event.preventDefault() prevents the form from trying to submit itself.
            // create a variable to hold all the afv searched
            // console.log(afv)
            // Adding a class
            // Adding a data-attribute with a value of afv at index i
            // Providing the button's text with a value of the places at index i
            // Adding the new button to the Html

})



            //Then make a function call that takes each topic in the array remakes the buttons on the page

        //       $("#addAfv").on("click", ".afv", function(event) {

        //     // event.preventDefault() prevents the form from trying to submit itself.

        //       event.preventDefault();

        //   // This line will grab the text from the input box

        //       var afvSearched = $(this).attr("data-name");


        //   // The selected afv movie from the textbox is then added to our array

        //      afvSearched.push(afv);

        //   // calling renderButtons which handles the processing of our movie array
          
        //       renderButtons();
              
        //     });

        //   // Calling the renderButtons function at least once to display the initial list of movies
                
        //   renderButtons();
      
            
        //   });

        // // ______________________________________________________________________________________________________________________________

        // // When the user clicks one of the still GIPHY images, the gif should animate. 
        // // If the user clicks the gif again, it should stop play