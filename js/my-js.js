

$("#myCarousel img").click(function() {
    
    var number = $('div.active').index();
    var x = document.getElementById("myCarousel").children[0].childElementCount;
    if (number==x-1){
       $("#myCarousel").carousel("next"); 
        
    } else{
        $("#myCarousel").carousel(++number);
    }
    console.log(number);
});







$(".easterEgg").mouseover(function () {
    $("body").css("background", "rgb(120,250,128)");
    $("body").css("background", "linear-gradient(330deg, rgba(120,250,128,0.7) 0%, rgba(0,243,255,1) 100%)");   
});

$(".easterEgg").mouseleave(function () {
    $("body").css("background", "white"); 
});




$(document).ready(function () {
  $('.second-button').on('click', function () {      
      $('.nav-chiuso').toggleClass('nav-aperto')
      $('.animated-icon2').toggleClass('open');
  });
});


