// A $( document ).ready() block.
$(document).ready(function () {
    //your jquery method blocks here 
    showAlbums();
    imageChange();
});
//Hides albums on load
$(function hideAlbums() {
    $('.hidden').hide();
});

//Shows extra albums when the more button is clicked and hides the button
function showAlbums() {

    $("#morebutton").click(function () {
        $('.hidden').show();
        $('#morebutton').hide();
    });
}
//Increases the size of the main image 5% and reduces it back to normal in the same animation
function imageChange() {
    $('.mainimage').hover(function () {
        $('.mainimage').animate({
            height: '+=5%',
            width: '+=5%'
        }, 'slow');
        $('.mainimage').animate({
            height: '-=5%',
            width: '-=5%'
        }, 'slow');    
    });
};