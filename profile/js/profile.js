$(document).ready(function() {
    // On Click SignUp It Will Hide profile Form and Display setting Form
    $("#account-edit").click(function() {

        $("#first").fadeOut("slow", function() {
            $("#second").fadeIn("slow");
        });
    });

    // On Click save It Will Hide save Form and Display profile Form
    $("#save-changes").click(function() {
        $("#second").fadeOut("slow", function() {
            $("#first").fadeIn("slow");
        });
    });

    $("#cancel-changes").click(function() {
        $("#second").fadeOut("slow", function() {
            $("#first").fadeIn("slow");
        });
    });



});