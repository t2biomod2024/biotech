$(document).ready(function(){
    $.ajax({
        url: "header.html",
        success: function(result){
            $("#header").html(result);
        }
    });
});

$(document).ready(function(){
    $.ajax({
        url: "footer.html",
        success: function(result){
            $("#footer").html(result);
        }
    });
});