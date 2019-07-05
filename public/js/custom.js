//ALL CUSTOM JS GOES IN THIS FILE
$(".card").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});