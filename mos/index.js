var comment = $(".comments");
var tabs = $(".right");
var tabShown=1;
var name;
var spn_count = $("#count");

var btn_newComment = $(".new-comment .submit")
var btn_newComment_clear = $(".new-comment .clear")
var txa_newComment = $(".new-comment textarea")

var cmt_num = 1;

console.log(tabs.length);
console.log(typeof(tabs[0]));

function start(){
    tabs = $(".right");
    for(var i=0;i<tabs.length;i++){
        $(tabs[i]).hide();
    }
    reset();
}

function reset(){

    $(tabs[tabShown]).show("slide",{direction:"right"},1);
    name=$(tabs[(tabShown+1)%tabs.length]).attr("name");
    $("#next-name").text(name);
}


comment.click(function(){
        $(tabs[tabShown]).hide("slide",{direction:"left"},500,function(){

            tabShown= (tabShown+1)%tabs.length;
            $(tabs[tabShown]).show("slide",{direction:"right"},500,function(){
                name=$(tabs[(tabShown+1)%tabs.length]).attr("name");
                $("#next-name").text(name);

            });
        });

        console.log("show: "+tabShown);

});

txa_newComment.keyup(function(){
    console.log("text area change")
    if($(this).val().length>=255){
        $(this).text($(this).val().substring(0,253));
    } else {
        spn_count.text(txa_newComment.val().length);
    }
});


txa_newComment.keydown(function(event){
    if(event.which===13){
        if((txa_newComment.val().length>0)&(txa_newComment.val().length<255)){
            addComment(txa_newComment.val());
        }
        else if(txa_newComment.val().length===0){
            alert("Type a comment, then press submit")
        }
        else if(txa_newComment.val().length>=255){
            alert("Comment is too long. Please limit to 255 characters.")
        }
        else {
            alert("Im really not sure what went wrong...")
        }
    }
    console.log(event.which)
});

// on form submit
btn_newComment.click(function(){
    if((txa_newComment.val().length>0)&(txa_newComment.val().length<255)){
        addComment(txa_newComment.val());
    }
    else if(txa_newComment.val().length===0){
        alert("Type a comment, then press submit")
    }
    else if(txa_newComment.val().length>=255){
        alert("Comment is too long. Please limit to 255 characters.")
    }
    else {
        alert("Im really not sure what went wrong...")
    }
});

btn_newComment_clear.click(function(){

    txa_newComment.val(null);
    spn_count.text(txa_newComment.val().length);
});

var div_commentsList = $("#comments-list");
function addComment(data){
    div_commentsList.append("<div class=\"comment-item\"><p>"+cmt_num+": "+data+"</p></div><hr>");
    cmt_num+=1;
    txa_newComment.val("");
    spn_count.text(txa_newComment.val().length);
    div_commentsList[0].scrollTop = div_commentsList[0].scrollHeight;
    
}

$(window).resize(function(event){
    if($(window).width() <=500){
        var change = $(".left");
        console.log(change)
        change.removeClass("left");
        change.addClass("right main");
        tabShown = 0;
        start();

    } else {
        var change = $(".main");
        if(change.length>0){
            change.removeClass("right main");
            change.addClass("left");
            tabShown = 0;
            start();
        }
    }
});

function checkSize(){
    if($(window).width() <=500){
        var change = $(".left");
        change.removeClass("left");
        change.addClass("right main");
        tabShown = 0;
        start();

    } else {
        var change = $(".main");
        if(change.length>0){
            change.removeClass("right main");
            change.addClass("left");
            tabShown = 1;
            start();
        } 
    }
};
checkSize();