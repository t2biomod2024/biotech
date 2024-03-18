$(document).ready(function(){
    $.ajax({
        url: "page_parts/header.html",
        success: function(result){
            $("#header").html(result);
        }
    });
});

$(document).ready(function(){
    $.ajax({
        url: "page_parts/footer.html",
        success: function(result){
            $("#footer").html(result);
        }
    });
});