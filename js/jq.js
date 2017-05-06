$(document).ready(function(){

$(function() {
    var highest = 1;

    $.fn.bringToTop = function() {
        this.css('z-index', ++highest); // increase highest by 1 and set the style
    };
});
$('div.clickable').click(function() {
    $(this).bringToTop();
});



document.getElementById("video_background").pause();
$(".startKnapp").click(function(){
    $(".startSkram").hide(500);
    document.getElementById("video_background").play();
    setTimeout(hideDiv, 10000); // videon försvinner efter 7 sekunder 
        function hideDiv() {
            document.getElementById("video_background").style.display="none";    
        }
});


    $(".likeButton1").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (680 - 300)) + 750;
  		var randomNumberY = Math.floor(Math.random() * (500 - 0)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam1");
  		} else {
  			$(txt1).last().addClass("reklam2");
  		};
/*
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
*/
 		$(txt1).hide();
        $(".inlagg1").append (txt1);
		$(txt1).bringToTop();
        $(txt1).show(300);
    });
    
    $(".likeButton2").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (680 - 300)) + 750;
  		var randomNumberY = Math.floor(Math.random() * (500 - 0)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam3"); 	
  		} else {
  			$(txt1).last().addClass("reklam4");
  		};
//lägg till random position och visa den i body
/*
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		*/
 		$(txt1).hide();
        $(".inlagg2").append (txt1);
		$(txt1).bringToTop();
        $(txt1).show(300);
        
    });
    
    $(".likeButton3").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (680 - 300)) + 750;
  		var randomNumberY = Math.floor(Math.random() * (500 - 0)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam5"); 	
  		} else {
  			$(txt1).last().addClass("reklam6");
  		};
/*
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
*/
 		$(txt1).hide();
        $(".inlagg3").append (txt1);
		$(txt1).bringToTop();
        $(txt1).show(300);
    });

        $(".likeButton4").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (680 - 300)) + 750;
  		var randomNumberY = Math.floor(Math.random() * (500 - 0)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam1"); 	
  		} else {
  			$(txt1).last().addClass("reklam2");
  		};
/*
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
*/
 		$(txt1).hide();
        $(".inlagg4").append (txt1);
		$(txt1).bringToTop();
        $(txt1).show(300);
    });

    $(".likeButton5").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (680 - 300)) + 750;
  		var randomNumberY = Math.floor(Math.random() * (500 - 0)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam3"); 	
  		} else {
  			$(txt1).last().addClass("reklam4");
  		};
//lägg till random position och visa den i body
/*
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		*/
 		$(txt1).hide();
        $(".inlagg5").append (txt1);
		$(txt1).bringToTop();
        $(txt1).show(300);
        
    });

        $(".likeButton6").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (680 - 300)) + 750;
  		var randomNumberY = Math.floor(Math.random() * (500 - 0)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam5"); 	
  		} else {
  			$(txt1).last().addClass("reklam6");
  		};
/*
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
*/
 		$(txt1).hide();
        $(".inlagg6").append (txt1);
		$(txt1).bringToTop();
        $(txt1).show(300);
    });
    
});
