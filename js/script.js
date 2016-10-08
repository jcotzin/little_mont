(function($) {



	$(".submit").on("click", function(){
		var type = $(this).parents('.form').attr('id');
		send_form(type);
		return false;
	});

	function send_form(type){

		var name = $("#"+type+" input#name").val();
		if (name == "") {
			$("#"+type+" input#name").css({border:"2px solid red"});
			$("#"+type+" input#name").focus();
			return false;
		}
		var lastname = $("#"+type+" input#lastname").val();
		if (lastname == "") {
			$("#"+type+" input#lastname").css({border:"2px solid red"});
			$("#"+type+" input#lastname").focus();
			return false;
		}
		var email = $("#"+type+" input#email").val();
		if (email == "") {
			$("#"+type+" input#email").css({border:"2px solid red"});
			$("#"+type+" input#email").focus();
			return false;
		}

		var phone = $("#"+type+" input#phone").val();
		var message = $("#"+type+" textarea#message").val();

	if(type == "write_us") {
		var dataString = '&name=' + name +'&lastname=' + lastname + '&email=' + email + '&city=' + city
		+ '&country=' + country + '&phone=' + phone + '&message=' + message;
	}

	var form = $(this);
	var str = form.serialize();
	$.ajax({
		method: "POST",
		url: "http://formspree.io/jcotzin@gmail.com",
		data: dataString,
		dataType: "json",
		success: function() {
			$("#"+type).html("<div id='form_send_message'>Thank you for your request, we will contact you as soon as possible.</div>", 1500);
		}
	});

	}

	/* Section Background */
	$('.image_bck').each(function(){
		var image = $(this).attr('data-image');
		var gradient = $(this).attr('data-gradient');
		var color = $(this).attr('data-color');
		var blend = $(this).attr('data-blend');
		var opacity = $(this).attr('data-opacity');
		var position = $(this).attr('data-position');
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (gradient){
			$(this).css('background-image', gradient);
		}
		if (color){
			$(this).css('background-color', color);
		}
		if (blend){
			$(this).css('background-blend-mode', blend);
		}
		if (position){
			$(this).css('background-position', position);
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
	});

	/* Over */
	$('.over').each(function(){
		var color = $(this).attr('data-color');
		var image = $(this).attr('data-image');
		var opacity = $(this).attr('data-opacity');
		var blend = $(this).attr('data-blend');
		if (color){
			$(this).css('background-color', color);
		}
		if (image){
			$(this).css('background-image', 'url('+image+')');
		}
		if (opacity){
			$(this).css('opacity', opacity);
		}
		if (blend){
			$(this).css('mix-blend-mode', blend);
		}
	});

	/*Sub Menu*/
	$('.sub_cont li').on({
		mouseenter:function(){
			$(this).find('.mega_menu').stop().slideDown('fast');
		},
		mouseleave:function(){
			$(this).find('.mega_menu').stop().slideUp('fast');
		}
	});


	if ($(window).width() > 992) {
		$('.row').each(function(){
			setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
			setEqualHeight($(this).find('.block'));
		});
	}

	$('.row').each(function(){
		setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
		setEqualHeight($(this).find('.block'));
	});


	$(window).resize(function() {

	    if ($(window).width() > 992) {
			$('.row').each(function(){
				setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
				setEqualHeight($(this).find('.block'));

			});

		}

		$('.row').each(function(){
			setEqualHeight($(this).find('.bordered_block:not(".col-md-12")'));
			setEqualHeight($(this).find('.block'));
		});
		$('.mid_wrapper').each(function(){
			setEqualHeight($(this).find('.owl-item'));
		});

		if($(".intro_wrapper").length) {
			$('.intro_wrapper').data('owlCarousel').reinit();
		}
		if($(".intro_wrapper_no_auto").length) {
			$('.intro_wrapper_no_auto').data('owlCarousel').reinit();
		}

	});

	$( ".date_arrival, .date_departure" ).datepicker();


	/*Wow*/
	new WOW(
		{
	      boxClass:'wow', animateClass: 'animated', offset:0, mobile:true, live:true
	    }
		).init();

	/* Lettering */
	if ($(window).width() > 992) {
		$("header .logo a b").lettering();
		$("header .logo span").each(function(){
		 	var min = 0;
		 	var max = 50;
		 	var randomNumber = Math.floor(Math.random()*(max-min+1)+min);
		 	$(this).css('transition-delay', '0.'+randomNumber+'s');
		 });
	}

	/* Anchor Scroll */
	$(window).scroll(function(){
		if ($(window).scrollTop() > 100) {
			$(".logo a").trigger('mouseenter');
			$('body').addClass('open');

		}
		else {
			$('body').removeClass('open');
			$(".logo a").trigger('mouseover');
			$('.sub_menu a').removeClass('active')
		}
	});

	/* Menu */
	$('.main_menu').on("click", function(e){
		$(this).parents('header').toggleClass('tm');
	});

	/* Top Menu Click to Section */
	$('.sub_menu').find('a').on("click", function(e){
		$('.sub_menu').find('a').removeClass('active');
		$(this).addClass('active');
		var anchor = $(this);
		if($(this).parents('header').hasClass('white_bck')){
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-58
			}, 1000);
		}else if($(this).parents('header').hasClass('blck_bck')){
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top-58
			}, 1000);
		}else{
			$('html, body').stop().animate({
				scrollTop: $(anchor.attr('href')).offset().top
			}, 1000);
		}
		e.preventDefault();
		$(".main_menu").trigger('click');
	});

	/* Search Hover */
	$('.search_btn').on({
		mouseenter:function(){
			$(this).find('.se_cont').toggleClass('active');
		},mouseleave:function(){
			$(this).find('.se_cont').toggleClass('active');
		}
	});


	/*Scroll Effect*/
	$('.intro_down, .go').on("click", function(e){
		var anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 300);
		e.preventDefault();
	});

	/*OWL Carousel in Intro*/
	$(".intro_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, responsiveBaseElement:window, slideSpeed : 200, addClassActive:true,
		paginationSpeed : 200, rewindSpeed : 200, singleItem:true, autoPlay : true, transitionStyle:"fade",
	    afterAction : function(elem){
	      $('.active .tlt').textillate('start')
	    },
		navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

	/*OWL Carousel in Intro*/

	$(".mid_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, responsiveBaseElement:window, slideSpeed : 200, addClassActive:true,
		paginationSpeed : 200, rewindSpeed : 200,  autoPlay : true, transitionStyle:"fade", items:3,
		itemsCustom : [
	        [0, 1],
	        [570, 1],
	        [768, 2],
	        [1024, 2],
	        [1200, 3],
	        [1400, 4]
	    ],
		navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});

	$(".menu_wrapper").owlCarousel({
 		navigation : true, responsive: true, responsiveRefreshRate : 200, responsiveBaseElement:window, slideSpeed : 200, addClassActive:true,
		paginationSpeed : 200, rewindSpeed : 200,  autoPlay : false, transitionStyle:"fade", items:4,
		 itemsMobile : [570,1], itemsTablet: [768,2], itemsDesktopSmall : [1024,2],
		navigationText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>']
	});


})(jQuery);


$(window).load(function(){

	/*Masonry*/

	if ($(window).width() > 992) {
		/* Autoheight Init */
		$('.mid_wrapper').each(function(){
			setEqualHeight($(this).find('.owl-item'));
		});
	}
	$('.mid_wrapper').each(function(){
		setEqualHeight($(this).find('.owl-item'));
	});

});

 /*Boxes AutoHeight*/
function setEqualHeight(columns)
{
	var tallestcolumn = 0;
	columns.each(
		function()
		{
			$(this).css('height','auto');
			var currentHeight = $(this).height();
			if(currentHeight > tallestcolumn)
				{
				tallestcolumn = currentHeight;
				}
		}
	);
columns.height(tallestcolumn);
}
