$(function(){

  $("#eel").click(function(event) {
  $("#eel").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item1" ).show("slow");

  });
  
  $("#octopus").click(function(event) {
  $("#octopus").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item3" ).show("slow");


  });

  $("#leafyseadragon").click(function(event) {
  $("#leafyseadragon").hide();
    event.preventDefault();
    $( this ).hide();
    $( "#item2" ).show("slow");


  });



});

// 1. listen to a click on eel image in container
// 2. hide image in the main container
// 3. show item in image bank

