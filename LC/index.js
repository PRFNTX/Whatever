// A $( document ).ready() block.
$(document).ready(function () {
    //Comment section
    $(function appendComment() {
        $('.btn-comment').click(function () {
            var commentName = $("#usr").val();
            var commentText = $("#comment").val();
            $('#thecomment').append('<div class="bg-white col-xs-12 col-sm-12 col-md-12 col-md-offset-0 col-lg-12 col-lg-offset-0">' + commentName + ' wrote: <br/> ' + commentText + '</div>');
        })
    });
    //Extra Function 1 - Hides all spotify iframes on load
    $(function hideSpotify() {
        $('.spotify').hide();
    });
    //Extra Function 2 - Loads all spotify iframes on button click
    $(function showSpotify() {
        $('.btn-spotify').click(function () {
            $('.spotify').toggle('slow');
        })
    });
    
    //Main Image Hover - Main image changes image slightly when hovered over
    $(".mainimage").hover(function () {
        console.log('hovered');
        $('.mainimage').animate({
            width: '-=5px',
            height: '-=5px'
        }, 'slow');
        $('.mainimage').animate({
            width: '+=5px',
            height: '+=5px'
        }, 'slow');
    });
});
