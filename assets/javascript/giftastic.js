$( document ).ready(function() {
    // console.log( "test!" );

        // Initial Array of Butttons 
    // _____________________________________________________________________________________________________________________________

          var afv = ["afvbabies", "afvpets", "afv"];
          console.log(afv);

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
          a.addClass("afv");
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
                        
            var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + afv + "&api_key=chJF2E6dEc4mlE405FcAlzVVkQHncAAG&limit=10";

            $.ajax({
            url: queryURL,
            method: "GET"
            }).done(function(response) {
              console.log(response);

            //  write a For loop that replaces [0] with [i] and grabs the url
          
            for(i=0; i<response.data.length;i++){

            //Creating and storing a div tag
          
             var searchDiv =$('<div>');

             var rating = response.data[i].rating; 

            // Creating a paragraph tag with the result item's rating
          
             var p =$("<p>").text("Rating: "+ response.data[i].rating);
            
            // console.log(rating);

            //  create a new DOM element for image

              var afv = $('<img>'); 

            // Setting the src attribute of the image to a property pulled off the result item
            // Image variable holds both animated and still image
            
              afv.attr('src', response.data[i].images.downsized_still.url);
              afv.attr('src', response.data[i].images.downsized.url);
             
            // Appending the paragraph and image tag to the searchDiv
          
                searchDiv.append(p);
            
                searchDiv.append(afv);
            
            // Prependng the searchDiv to the HTML page in the "search-view" div
              
                $("#search-view").prepend(searchDiv);
         

                  }

                })


            // Take the value from a user input box and adds it to the topics array. 
          
            // _____________________________________________________________________________________________________________________
          

            // listen to on click for the submit buttion 

               $("#submit-button").on("click", function(event){
          
            // event.preventDefault() prevents the form from trying to submit itself.
            
              event.preventDefault();
          
            // create a variable to hold all the afv searched
              
              var afvSearched = $("#Input-Afv-search").val().trim();
            // console.log(afv)
                     
              var a = $("<button>");

            // Adding a class
            
              a.addClass("afvSearched");

            // Adding a data-attribute with a value of afv at index i

              a.attr("data-name", afvSearched);
          
            // Providing the button's text with a value of the places at index i
            
              a.text(afvSearched);
          
            // Adding the new button to the Html
          
            $("#addAfv").append(a);

          })

            //Then make a function call that takes each topic in the array remakes the buttons on the page

              $("#addAfv").on("click", ".afv", function(event) {

            // event.preventDefault() prevents the form from trying to submit itself.

              event.preventDefault();

          // This line will grab the text from the input box

              var afvSearched = $(this).attr("data-name");


          // The selected afv movie from the textbox is then added to our array

             afvSearched.push(afv);

          // calling renderButtons which handles the processing of our movie array
          
              renderButtons();
              
            });

          // Calling the renderButtons function at least once to display the initial list of movies
                
          renderButtons();
      
            
          });

        // ______________________________________________________________________________________________________________________________

        // When the user clicks one of the still GIPHY images, the gif should animate. 
        // If the user clicks the gif again, it should stop play