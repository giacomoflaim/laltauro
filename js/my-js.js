

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


/*
var arrayImg = new Array();
arrayImg[0] = "web_A.mp4";
arrayImg[1] = "web_B.mp4";
arrayImg[2] = "web_C.mp4";

function getRandomImage(arrayImg,);

function getRandomImage(imgAr, path) {
    path = path || '/Users/giacomo/Documents/GitHub/laltauro/asset/video/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var myPlayer = '<source class="player" src="' + path + img + '" type="video/mp4">'      
    document.write(myPlayer);
};*/


