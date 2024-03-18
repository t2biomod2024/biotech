function header(){
    $.ajax({
    url: "page_parts/header.html",
    cache: false,
    success: function(html){
    document.write(html);
    }
    });
    }

function footer(){
    $.ajax({
    url: "page_parts/footer.html",
    cache: false,
    success: function(html){
    document.write(html);
    }
    });
    }