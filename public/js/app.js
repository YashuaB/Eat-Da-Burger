

$(document).ready(function() {
  
  $(".devour-burger").on("click", function(event) {
    var id = $(this).data("id")
    var newBurger = $(this).data("newBurger")

    var newBurgerState = {
      devoured: newBurger
    }

    
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newBurgerState
    }).then(
      function() {
        console.log("changed Burger to", newBurger)
        
        location.reload()
      }
    )
  })

  $(".create-form").on("submit", function(event) {
  
    event.preventDefault()

    var newYummyBurger
     = {
      name: $("#ca").val(),
    }

    
    $.ajax("/api/burgers", {
      type: "POST",
      data: newYummyBurger

    }).then(
      function() {
        console.log("created new burger")
        
        location.reload()
      }
    )
  })

})