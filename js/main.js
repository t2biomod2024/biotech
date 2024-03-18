$(document).ready(function(){
    $.ajax({
        url: "/absolute/path/to/header.html",
        success: function(result){
            $("#header").html(result);
        }
    });
});

$(document).ready(function(){
    $.ajax({
        url: "/absolute/path/to/footer.html",
        success: function(result){
            $("#footer").html(result);
        }
    });
});