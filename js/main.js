$(document).ready(function() {
    var containerObj = $(".container");
    var choiceDiv = $(".edition-chosen");
    $(".buy-button").click(function(){
        var edition = $( "input[type=radio]:checked" ).val();
        containerObj
            .removeClass("container--default")
            .addClass("container--thank-you")
            .css("height", "300")
            .animate({height: "130px"});
        (choiceDiv).text(edition + " Edition");
    });
});