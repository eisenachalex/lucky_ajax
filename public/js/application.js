$(document).ready(function () {

  // PSEUDO-CODE:
  $("form").submit(function(event) {
    event.preventDefault();
    Math.floor((Math.random()*6)+1);
    $.post($(this).attr("action"), function(data) {
      $("#die").html(data);
    });

  });

  //   4- use jQuery to submit an AJAX post to the form's action
  //   5- when the AJAX post is done, replace the contents of the "#die" DIV in the DOM using jQuery

});
