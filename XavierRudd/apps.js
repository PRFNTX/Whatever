$(document).ready(function () {

    //Takes the comment from the input box and puts it into the comment holder
    $("#comment-form").submit(function (event) {
        // Create data object
        var $commentText = $("#input-field").val();
        var $comment = $('<p></p>');
        //pulls the text from the input field and places its value inside the comment variable 
        $comment.text($commentText);
        //appends the comment variable to the div with id comment-holder
        $('#comment-holder').append($comment);
        //stops default events from occurring
        event.preventDefault();
        $('.bottom-margin').scrollTo(100);


    });

    //create image gallery with overlay and click 
    var $overlay = $('<div id="overlay"></div>');
    var $image = $('<img>');

    $overlay.append($image);


    $('body').append($overlay);

    $('#lightbox img').click(function (event) {
        event.preventDefault();

        var imageLocation = $(this).attr('src');

        $image.attr('src', imageLocation);
        $overlay.show();

    });

    $overlay.click(function () {
        $overlay.hide();
    });

    //animate image of the band on hover
    $('.imageContainer').hover(function () {
        $(this).find("img").stop().toggle();
    });
    $('.navbar-nav a').each(function () {
        var anchor = $(this);
        anchor.parent().removeClass("active");
        if(window.location.href.indexOf(anchor.attr('href')) > -1)
            anchor.parent().addClass("active");
        anchor.click(function () {
            $('.navbar-nav a').each(function () {
                $(this).parent().removeClass('active');
            });
            anchor.parent().addClass("active");
        })
    })


});



