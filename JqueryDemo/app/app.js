// //this is exactly equal to dcoument.getElementById in js.
// $("#pnlHeading").text("Welcome");

// //Class based selector 
// //document.getElementsByClassName
// //Class based or tag based selector will always return as array of elements.
// var panelBodyList = $(".panel-body");
// console.log(panelBodyList)

// //Tag based selector
// console.log($("div"));

// //Dom Traversing from element

function getChildElement(){
    var children = $('#pnlBody').children();
    console.log(children);
}


function getParentElement(){
    var parent = $('#lblFirstName').parent();
    console.log(parent);
}


function getSiblings(){
    var siblings = $('#lblFirstName').siblings();
    console.log(siblings);
}

function changeBackGroundForFirstDiv(){
   // console.log($(".panel-default div").first());
   $(".panel-default div").first().css("background-color","lightblue");
}
//changeBackGroundForFirstDiv();
//getSiblings();
//getChildElement();
//getParentElement();

//each loop
var users=[{name:"kiran",age:30},
{name:"ravi",age:20},
{name:"krishna",age:25}];
$.each(users,function(item,index){
    console.log(index);
    console.log(item);
});