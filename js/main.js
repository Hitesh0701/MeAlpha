    $(".menu-btn").click(function(){
    	$(".menu").css("right","0px");
    });
    $(".close-menu").click(function(){
    	$(".menu").css("right","-100%");
    });
		
	$(document).ready(function(){
		$('.owl-carousel').owlCarousel({
			loop:true,
			responsive:{
				320:{
					items:1
				}
			}
		}); 
	});
	$(document).ready(function(){
		$('.carousel-expert').owlCarousel({
			loop:true,
			responsive:{
				320:{
					items:1
				}
			}
		}); 
	});