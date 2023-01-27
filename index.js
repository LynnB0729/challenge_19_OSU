/*button interactions*/
$("button").mouseenter(function () {
    $(this).css("background-color", "#AFD2E9")
  });
  
  $("button").mouseleave(function () {
    $(this).css("background-color", "#373738")
  });
  
  /*My Name Interaction*/
  $(".heroImg").mouseenter(function ()  {
    $(".myName").css({"color":"#EF959C", "font-size":"60px" }) 
  });
  
  $(".heroImg").mouseleave(function ()  {
    $(".myName").css({"color":"", "font-size":"" }) 
  });
  
  /*User Research Div Box*/
  $(".userResearch").mouseenter(function ()  {
    $(".headerUserResearch").css({"color":"#EF959C", "font-size":"40px" }) 
  });
  
  $(".userResearch").mouseleave(function ()  {
    $(".headerUserResearch").css({"color":"", "font-size":"" }) 
  });
  
  /*User Interface Design Div Box*/
  $(".userInterface").mouseenter(function ()  {
    $(".headerUserInterface").css({"color":"#EF959C", "font-size":"40px" }) 
  });
  
  $(".userInterface").mouseleave(function ()  {
    $(".headerUserInterface").css({"color":"", "font-size":"" }) 
  });
  
  /*Web Development Div Box*/
  $(".webDevelopment").mouseenter(function ()  {
    $(".headerWebDevelopment").css({"color":"#EF959C", "font-size":"40px" }) 
  });
  
  $(".webDevelopment").mouseleave(function ()  {
    $(".headerWebDevelopment").css({"color":"", "font-size":"" }) 
  });