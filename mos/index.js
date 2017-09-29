var comment = $(".comments");
var tabs = $(".right");
var tabShown=0;
var name;
var spn_count = $("#count");

var frm_newComment = $(".new-comment .submit")
var btn_newComment_clear = $(".new-comment .clear")
var txa_newComment = $(".new-comment textarea")

var cmt_num = 1;

//add bio variables
var btn_bioAdd = $(".add-p")
var btn_bioSub = $(".sub-p")
var btn_itemAdd = $(".add-i")
var btn_itemSub = $(".sub-i")
var txa_bio=$(".bio")
var txt_item=$(".listitem")

var btn_bio=$("#bio-submit")

var div_bio=$(".div-bio")
var div_list=$(".div-list")
var num_p=1;
var num_i=1;

btn_bioAdd.click(function(){
    if(num_p<5){
    div_bio.append("<textarea rows=\"4\" cols=\"40\" class=\"text tab bio form-control\" class=\"bio\" id=\"bio"+num_p+"\"></textarea>")
    num_p+=1;
    } else {
        alert("please be reasonable")
    }
});
btn_bioSub.click(function(){
    if(num_p>0){
        var remove = "#bio"+(num_p-1);
    $(remove).remove();
        num_p-=1;
    
    } else {
        alert("you must have a non-negative number of bio paragraphs")
    }
});
btn_itemAdd.click(function(){
    if(num_i<10){
    div_list.append("<input type=\"text\" class=\"item form-control\" id=\"bio-item"+num_i+"\">")
    num_i+=1;
    } else {
        alert("please be reasonable")
    }
});
btn_itemSub.click(function(){
    if(num_i>0){
        var remove = "#item"+(num_i-1);
    $(remove).remove();
        num_i-=1;
    
    } else {
        alert("you must have a non-negative number of list items")
    }
});
//fields:
var name;
var bio=[];
var img;
var listTitle;
var listItems=[];
btn_bio.click(function(event){
    event.preventDefault();
    name=$("#bio-name").val();
    for (var p=0;p<num_p;p++){
        bio.push($("#bio"+p).val())
    }
    img=$("#bio-image").val();
    listTitle=$("#bio-list-name").val();
    for (var i=0;i<num_i;i++){
        listItems.push($("#bio-item"+i).val())
    }
    spawnBio();

})
function spawnBio(){
    var templateBio=["<div class=\"right\" name=\""+name+"\"><h3>"+name+"</h3><div class=\"box-text\"><h4><strong>Bio:</strong></h4>","</div><div id=\"photo-albums\"><img src="+img+"><div><h3>"+listTitle+"</h3><ul>","</ul></div></div></div>"]
    var bio_parts=templateBio;
    for(var i=listItems.length-1;i>=0;i--){
        bio_parts.splice(2,0,"<li><span>"+listItems[i]+"</span></li>");
    }
    for(var p=bio.length-1;p>=0;p--){
        bio_parts.splice(1,0,"<p>"+bio[p]+"</p>");
    }
    var bio_add="";
    for(var f =0;f<bio_parts.length;f++){
        bio_add=bio_add+bio_parts[f];
    }
    console.log(bio_add);
    $(".left").after(bio_add);
    start();
}
//////
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
frm_newComment.submit(function(event){
    event.preventDefault();
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
        } 
        start();
    }
};
checkSize();