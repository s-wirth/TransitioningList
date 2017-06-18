$(document).ready(function() {
    var containerObj = $(".container");
    var formObj = $(".edition-choices");
    var choiceDiv = $(".edition-chosen");
    var textObj = $(".thank-you-text");
    $(".buy-button").click(function(){
        var edition = $( "input[type=radio]:checked" ).val();
        containerObj
            .removeClass("container--default")
            .addClass("container--thank-you")
            .css("height", "300")
            .animate({height: "130px"});
        formObj.hide();
        textObj.css("display", "block");
        choiceDiv.css("display", "block");
        (choiceDiv).text(edition + " Edition");
    });
});