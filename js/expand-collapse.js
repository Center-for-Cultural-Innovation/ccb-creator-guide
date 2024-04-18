
$(function() {



	$("#page-layout").scroll(function(){
	   console.log('Event Fired');
	});


	const sections = $(".section");
	const navLi = $(".navigation-button");
	$("#page-layout").scroll(function(){
		console.log("scrolling")
	  	var current = "";

	  	sections.forEach((section) => {
	    	const sectionTop = section.offsetTop;
	    	if (pageYOffset >= sectionTop - 60) {
	    	  	current = section.getAttribute("id"); 
			}
			console.log(current);
	  	});

	  	navLi.forEach((li) => {
	    	li.removeClass("active");
	    	if (li.attr('id')==current) {
	      		li.addClass("active");
	    	}
	  	});
	});



	$("#ccb-stage-1").slideToggle();
	$("#ccb-stage-2").slideToggle();
	$("#ccb-stage-3").slideToggle();
	$("#ccb-stage-4").slideToggle();
	$("#ccb-stage-5").slideToggle();
	$("#ccb-stage-6").slideToggle();
	$("#ccb-stage-7").slideToggle();



  	$("#header-legal-disclaimer").tooltip({
  		show: { effect: "fade", duration: 200 }
	});


	$(".ccb-stage-header").click(function(){
		$('#' + $(this).attr('for')).slideToggle();
		if ($(this).hasClass('collapsed-content')) {
			$(this).removeClass('collapsed-content');
			$(this).addClass('expanded-content');
		} else {
			$(this).addClass('collapsed-content');
			$(this).removeClass('expanded-content');
		}
	})

})