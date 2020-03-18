// Buttons.js//

$(document).ready(function(){
 
  $(".bdesign").click(function(){
    $(".design").removeClass("d-none");
    $(".enforce").addClass("d-none");
    $(".build").addClass("d-none");
 });

   $(".benforce").click(function(){
    $(".enforce").removeClass("d-none");
    $(".design").addClass("d-none");
    $(".build").addClass("d-none");
 });
 
  $(".bbuild").click(function(){
    $(".build").removeClass("d-none");
    $(".design").addClass("d-none");
    $(".enforce").addClass("d-none");
 });
  
 });
