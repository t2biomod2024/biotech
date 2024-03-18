$(document).ready(function(){
    $.ajax({
        url: "header.html",
        success: function(result){
            $("#header").html(result);
        }
    });
});