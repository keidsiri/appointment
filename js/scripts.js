$(document).ready(function() {
  $("form#appointment").submit(function(event) {
    event.preventDefault();
    const name = $("#name").val();
    const description = $("#description").val();
    const date = $("#date").val();
    const time = $("#time").val();
   
    $("#output").text("Your appointment is confirmed, " + name + " " + description + " " + date + " " + time + ".");
  });
});