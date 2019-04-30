/*jslint devel: true */
/*global $, jQuery, alert*/
$(function () {
    
    'use strict';
   
    var myHeader = $('.header');
    
    myHeader.height($(window).height());
    
    $(window).resize(function () {
        
        myHeader.height($(window).height());
        
        // Adjust Bxslider List Item Center 
        
        $('.bxslider').each(function () {
            $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
        });
        
    });
    // Links Add Actice Class
    
    $('.links li').click(function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
    
    // Adjust Bxslider List Item Center 
        
    $('.bxslider').each(function () {
        $(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2);
    });
    
    // Trigger The Bx Slider
    
    $('.bxslider').bxSlider({
		pager: false
	});
	
	// Smooth Scroll To Div
	
	$('.links li a').click(function () {
		
		$('html, body').animate({
			
			scrollTop: $('#' + $(this).data('value')).offset().top
			
		}, 2000);
	});
	
	// Our Auto Slider Code Part( Testimonials )
	
	(function autoSlider() {
		
		$('.center .active').each(function () {
			
			if (!$(this).is(':last-child')) {
				
				$(this).delay(1000).fadeOut(1000, function () {
					
					$(this).removeClass('active').next().addClass('active').fadeIn();
					
					autoSlider();
				});
				
			} else {
				$(this).delay(3000).fadeOut(1000, function () {
					
					$(this).removeClass('active');
					
					$('.center div').eq(0).addClass('active').fadeIn();
					
					autoSlider();
				});
			}
		});
		
		
	}());
	
	// Trigger NiceScroll
	
	$("html").niceScroll({
		cursoropacitymin: 0.8,
		cursorcolor: "#1a8e1a",
		cursorwidth: "10px",
		cursorborder: "1px solid #1a8e1a",
        cursorborderradius: "3px",
		touchbehavior: false,

	});

	
});


/*
    Hide  Show / Toggle
    */
/*
    $("button").mouseleave(function(){
        $("p").css("color","red");  
        $("p").hide();
    }) 
    
     $("button").hover(function(){
        $("p").css("color","#080");  
        
    })

     Call Back Function
        $("p").hide(3000, function(){ $("button").hide()})----  (Speed, Callback)
        ----------------------------------------------
        $("button").click(function(){
        $("p").fadeIn(1000,function(){$("span").fadeOut(2000)});  
        ----------------------------------------------------
         Effects - SlideDown / SlideUp / SlideToggle
         ---------------------------------------------
         
    })
    
}); */