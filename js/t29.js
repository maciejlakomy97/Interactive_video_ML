var video;

$(document).ready(function () {

	//GET VIDO
	video = document.getElementById("video_background");
	
	
	
$("#playbtn").click(function(){
    $("#intro").fadeOut(500);
	video.play();
});
	
	//check function
	var update = setInterval(check, 100);
	// inside check function we need confitions

	//set interval function // to call check
	function check() {
		//round down the time to get a whole number
		var time = video.currentTime.toFixed(1);
		time = Number(time);
		console.log(video.currentTime, time);
		
	
		
//		hide overlay kitchen
		if (time === 0.0) {
			//video.pause();
			$('#overlaykitchen').hide();
			$('#overlay').hide();
			$('#overlaybedroom').hide();
			$('#closevid').hide();
		}
		
		
//overlay fadeIns 	
		if (time === 1.0) {
			//video.pause();
			$('#overlay').fadeIn(500);
		}
		
		if (time === 58.0) {
			//video.pause();
			$('#overlaykitchen').fadeIn(500);
		}
		
		if (time === 38.0) {
			//video.pause();
			$('#overlaybedroom').fadeIn(500);
		}
		
		if (time === 86.0) {
			//video.pause();
			$('#closevid').fadeIn(500);
		}
//overlay fadeOuts
		if (time === 12.1) {
			//video.pause();
			$('#overlay').fadeOut(500);
		}
		
		if (time === 86.0) {
			//video.pause();
			$('#overlay').fadeOut(500);
		}
		
		if (time === 14.0) {
			//video.pause();
			$('#overlay').fadeOut(500);
		}
		
		if (time === 62.3) {
			//video.pause();
			$('#overlaykitchen').fadeOut(500);
		}
		
		if (time === 44.1) {
			//video.pause();
			$('#overlaybedroom').fadeOut(500);
		}
		
		
//black google -- - - - -- 
		if (time === 218.0) {
			video.currentTime = 3.0
			//video.pause();
			$('#closevid').fadeIn(500);
		}
		
		$("#close").bind("click", function () {
			video.play();
			video.currentTime = 3.0;
			$("#closevid").hide();
			$("#overlay").fadeIn(500);
		});
		
		$("#goo").bind("click", function () {
			video.play();
			video.currentTime = 86.0;
			$("#overlay").hide();
			
		});
		
//		Living Room - -- - -- - -- - - - -
		
//livingroom loop
		if (time === 12.0) {
			video.currentTime = 3.0;
			//video.pause();
			$('#overlay').show(); 
		}
//go to kitchen
		if (time === 13.4) {
			video.currentTime = 57.0;
			//video.pause();
			$('#overlay').hide();
		}
//go to bedroom
		if (time === 15.6) {
			video.currentTime = 37.0;
			//video.pause();
			$('#overlay').hide();
		}
//edits 
//		A
		if (time === 18.9) {
			video.currentTime = 3.0;
			//video.pause();
			$('#overlay').show();
		}
//		S
		if (time === 22.1) {
			video.currentTime = 4.0;
			//video.pause();
			$('#overlay').show();
		}
//		D
		if (time === 24.2) {
			video.currentTime = 5.0;
			//video.pause();
			$('#overlay').show();
		}
//		F
		if (time === 26.2) {
			video.currentTime = 6.0;
			//video.pause();
			$('#overlay').show();
		}
//		G
		if (time === 27.8) {
			video.currentTime = 7.0;
			//video.pause();
			$('#overlay').show();
		}
//		H
		if (time === 29.7) {
			video.currentTime = 8.0;
			//video.pause();
			$('#overlay').show();
		}
//		J
		if (time === 32.1) {
			video.currentTime = 9.0;
			//video.pause();
			$('#overlay').show();
		}
//		K
		if (time === 33.8) {
			video.currentTime = 10.0;
			//video.pause();
			$('#overlay').show();
		}
//		L
		if (time === 36.1) {
			video.currentTime = 11.0;
			//video.pause();
			$('#overlay').show();
		}
//end living room edits
//living room key press
		
	
		$("#A").bind("click", function () {
			video.play();
			video.currentTime = 17.0;
			$("#overlay").hide();
			
		});

		$("#S").bind("click", function () {
			video.play();
			video.currentTime = 19.0;
			$("#overlay").hide();
		});

		$("#D").bind("click", function () {
			video.play();
			video.currentTime = 22.5;
			$("#overlay").hide();
		});

		$("#F").bind("click", function () {
			video.play();
			video.currentTime = 24.5;
			$("#overlay").hide();
		});

		$("#G").bind("click", function () {
			video.play();
			video.currentTime = 26.5;
			$("#overlay").hide();
		});
		
		$("#H").bind("click", function () {
			video.play();
			video.currentTime = 28.0;
			$("#overlay").hide();
		});
		
		$("#J").bind("click", function () {
			video.play();
			video.currentTime = 30.0;
			$("#overlay").hide();
		});
		
		$("#K").bind("click", function () {
			video.play();
			video.currentTime = 32.5;
			$("#overlay").hide();
		});

		$("#L").bind("click", function () {
			video.play();
			video.currentTime = 34.0;
			$("#overlay").hide();
		});
//living room key press end\
	
		
//go to button presses --  - - - - - - -- - - - - - 	
		
//		go to kitchen from living room
		$("#kit").bind("click", function () {
			video.play();
			video.currentTime = 12.1;
			
		});
		
//		go to bedroom from living room
		$("#bed").bind("click", function () {
			video.play();
			video.currentTime = 14.0;
			
		});
		
//		go to living room from kitchen
		$("#liv").bind("click", function () {
			video.play();
			video.currentTime = 62.3;
			
//		go to living room from bedroom
		
		});
//- - - - - - --  -- - - - - - - - - - - - - - - -
		
//		Bedroom loops
		
//bedroom loop
		if (time === 43.8) {
			video.currentTime = 40.1;
			//video.pause();		 
		}
		
//go to living room
		if (time === 45.9) {
			video.currentTime = 0.0;
			//video.pause();
			
		}
		
//bedroom edits
//		Z
		if (time === 48.5) {
			video.currentTime = 40.2;
			//video.pause();
			$('#overlaybedroom').show(); 
		}
		
//		X
		if (time === 51.2) {
			video.currentTime = 40.2;
			//video.pause();
			$('#overlaybedroom').show(); 
		}
		
//		C
		if (time === 52.6) {
			video.currentTime = 40.2;
			//video.pause();
			$('#overlaybedroom').show(); 
		}
		
//		V
		if (time === 54.4) {
			video.currentTime = 40.2;
			//video.pause();
			$('#overlaybedroom').show(); 
		}
		
//		B
		if (time === 56.5) {
			video.currentTime = 40.2;
			//video.pause();
			$('#overlaybedroom').show(); 
		}
//bedroom edits end
		
//bedroom key press
		$("#livbed").bind("click", function () {
			video.play();
			video.currentTime = 44.1;
			
			
		});
		
		$("#Z").bind("click", function () {
			video.play();
			video.currentTime = 46.0;
			$("#overlaybedroom").hide();
			
		});
		
		$("#X").bind("click", function () {
			video.play();
			video.currentTime = 49.0;
			$("#overlaybedroom").hide();
			
		});
		
		$("#C").bind("click", function () {
			video.play();
			video.currentTime = 51.5;
			$("#overlaybedroom").hide();
			
		});
		
		$("#V").bind("click", function () {
			video.play();
			video.currentTime = 53.0;
			$("#overlaybedroom").hide();
			
		});
		
		$("#B").bind("click", function () {
			video.play();
			video.currentTime = 55.0;
			$("#overlaybedroom").hide();
			
		});
		
//		Kitchen - -- - - - -- - - - - -- - 
		
//		Intro
		if (time === 58.0) {
			//video.pause();
			$('#overlaykitchen').fadeIn(500); 
		}
		
//kitchen loop
		if (time === 62.0) {
			video.currentTime = 59.5;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//go to living room
		if (time === 65.1) {
			video.currentTime = 0.0;
			//video.pause();
			
		}
		
//kitchen edits
//		Q
		if (time === 68.4) {
			video.currentTime = 60.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		W
		if (time === 70.3) {
			video.currentTime = 61.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		E
		if (time === 73.6) {
			video.currentTime = 61.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		R
		if (time === 75.8) {
			video.currentTime = 60.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		U
		if (time === 77.8) {
			video.currentTime = 60.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		I
		if (time === 79.6) {
			video.currentTime = 61.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		O
		if (time === 81.8) {
			video.currentTime = 60.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
		
//		P
		if (time === 84.9) {
			video.currentTime = 61.0;
			//video.pause();
			$('#overlaykitchen').show(); 
		}
//kitchen edits end
		
//Kitchen key press
		
		$("#Q").bind("click", function () {
			video.play();
			video.currentTime = 66.0;
			$("#overlaykitchen").hide();
			
		});
		
		$("#W").bind("click", function () {
			video.play();
			video.currentTime = 69.0;
			$("#overlaykitchen").hide();
			
		});
		
		$("#E").bind("click", function () {
			video.play();
			video.currentTime = 70.5;
			$("#overlaykitchen").hide();
			
		});
		
		$("#R").bind("click", function () {
			video.play();
			video.currentTime = 74.0;
			$("#overlaykitchen").hide();
			
		});
		
		$("#U").bind("click", function () {
			video.play();
			video.currentTime = 76.0;
			$("#overlaykitchen").hide();
			
		});
		
		$("#I").bind("click", function () {
			video.play();
			video.currentTime = 78.0;
			$("#overlaykitchen").hide();
			
		});
		
		$("#O").bind("click", function () {
			video.play();
			video.currentTime = 80.0;
			$("#overlaykitchen").hide();
			
		});
		
		$("#P").bind("click", function () {
			video.play();
			video.currentTime = 82.0;
			$("#overlaykitchen").hide();
			
		});
	}// end check func
	
	$(window).keypress(function (e) {
	
	$("#overlay").hide()
	$("#overlaykitchen").hide()
	$("#overlaybedroom").hide()	
 ;
		
//living room edits
	if (e.key === 'a') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault();
		video.currentTime = 17.0;
		
	}
	if (e.key === 's') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 19.0;
	}

	if (e.key === 'd') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 22.5;
	}

	if (e.key === 'f') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 24.5;
	}

	if (e.key === 'g') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 26.5;
	}
	
	if (e.key === 'h') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 28.0;

	}
		
	if (e.key === 'j') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 30.0;
	}
		
	if (e.key === 'k') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 32.5;

	}
		
	if (e.key === 'l') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 34.0;
	}
//end living room edits
		
//bedroom edits
	if (e.key === 'z') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 46.0;
	}
		
	if (e.key === 'x') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 49.0;
	}
		
	if (e.key === 'c') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 51.5;
	}
		
	if (e.key === 'v') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 53.0;
	}
	
	if (e.key === 'b') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 55.0;
	}
//bedroom edits end
		
//kitchen edits
	if (e.key === 'q') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 66.0;
	}
		
	if (e.key === 'w') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 69.0;

	}
		
	if (e.key === 'e') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 70.5;

	}
		
	if (e.key === 'r') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 74.0;
	}
		
	if (e.key === 'u') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 76.0;

	}
		
	if (e.key === 'i') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 78.0;
	}
		
	if (e.key === 'o') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 80.0;

	}
		
	if (e.key === 'p') {
		// ' ' is standard, 'Spacebar' was used by IE9 and Firefox < 37
		e.preventDefault()
		video.currentTime = 82.0;

	}
//kitchen edits end
		

});
});// end ready func



