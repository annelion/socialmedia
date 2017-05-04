$(document).ready(function(){
    	//var randomNumber = Math.floor(Math.random() * (1000 - 10)) + min;

    $(".likeButton").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (1080 - 300)) + 800;
  		var randomNumberY = Math.floor(Math.random() * (900 - 10)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam1"); 	
  		} else {
  			$(txt1).last().addClass("reklam2");
  		};

 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		$(txt1).hide();
        $("body").append (txt1);
        $(txt1).show(500);
    });
    
    $(".likeButton2").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (1080 - 300)) + 800;
  		var randomNumberY = Math.floor(Math.random() * (900 - 10)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam3"); 	
  		} else {
  			$(txt1).last().addClass("reklam4");
  		};
//lägg till random position och visa den i body
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		$(txt1).hide();
        $("body").append (txt1);
        $(txt1).show(500);
        
    });
    
    $(".likeButton3").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (1090 - 300)) + 800;
  		var randomNumberY = Math.floor(Math.random() * (900 - 10)) + 10;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam5"); 	
  		} else {
  			$(txt1).last().addClass("reklam6");
  		};

 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		$(txt1).hide();
        $("body").append (txt1);
        $(txt1).show(500);
    });

        $(".likeButton4").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (1080 - 300)) + 800;
  		var randomNumberY = Math.floor(Math.random() * (900 - 10)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam1"); 	
  		} else {
  			$(txt1).last().addClass("reklam2");
  		};

 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		$(txt1).hide();
        $("body").append (txt1);
        $(txt1).show(500);
    });

    $(".likeButton5").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (1080 - 300)) + 800;
  		var randomNumberY = Math.floor(Math.random() * (900 - 10)) + 1;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

//slumpa vilken reklam som ska visas upp
  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam3"); 	
  		} else {
  			$(txt1).last().addClass("reklam4");
  		};
//lägg till random position och visa den i body
 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		$(txt1).hide();
        $("body").append (txt1);
        $(txt1).show(500);
        
    });

        $(".likeButton6").click(function(){
	    var txt1 = document.createElement("div");
  		var randomNumberX = Math.floor(Math.random() * (1090 - 300)) + 800;
  		var randomNumberY = Math.floor(Math.random() * (900 - 10)) + 10;
  		var randomReklam = Math.floor(Math.random() * 2) + 1;

  		if(randomReklam == 1){
  			$(txt1).last().addClass("reklam5"); 	
  		} else {
  			$(txt1).last().addClass("reklam6");
  		};

 		$(txt1).css("left", randomNumberX); 
 		$(txt1).css("top", randomNumberY);
 		$(txt1).hide();
        $("body").append (txt1);
        $(txt1).show(500);
    });
    
});
