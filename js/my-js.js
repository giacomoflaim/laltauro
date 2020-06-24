

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