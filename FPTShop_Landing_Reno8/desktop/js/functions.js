

$(document).ready(function () {
	// countdown
	$('img').addClass('lazy');
	var currentDate = new Date();
	var futureDate = new Date(currentDate.getFullYear(), 6, 30, 24, 60);
	var diff = futureDate.getTime() / 1000 - currentDate.getTime() / 1000;
	clock = $('.clock').FlipClock(diff, {
		clockFace: 'DailyCounter',
		countdown: true
	});
	//chặn kéo hình
	window.ondragstart = function () { return false };
	// water effect
	$('.rip').ripples({
		resolution: 550,
		dropRadius: 20,
		perturbance: 0.5
		// time: 1000,
	});
	setInterval(function () {
		var $el = $(".rip");
		var x = 0;
		var y = 0;
		var dropRadius = 50;
		var strength = 0.006 + Math.random() * 0.006;

		$el.ripples("drop", x, y, dropRadius, strength);
	}, 500);
	////////////////
	// option version Note
	var li = $('.ld-list li');
	li.on('click', function () {
		var parent = $(this).closest('.ld-price');
		$(this).hasClass('active') ?
			$(this).removeClass('check') : parent.children().find('li').removeClass('check'), $(this).addClass('check');
	});

	//
});

//game
$(document).ready(function () {
	$('.btn-sbmit').on('click', function(){
		$('.step1').fadeIn();
		$('.game').hide();
	});
	$(".btn-fn").click(function () {
		if ($('.qs-ul li input:checked').length == 0) {
			$('.er').html('Bạn chưa chọn câu trả lời !');
			return false;
		}
		else {
			$('.popup2').css('display', 'flex').addClass('show-mask');
			$('html').addClass('no-scroll');
		}
		return false;
	});
	$('.asset li').on('click', function(){
		$('.game-20k').fadeIn();
		$('.popup2, .step1').hide();
		$('html').removeClass('no-scroll');
	});
	$('.ppup-header,.popup1').on('click', function(){
		$('html').removeClass('no-scroll');
		$('.popup1,.popup2').fadeOut();
	});

	$(".qs-ul li input").on('change', function(){
		if ($('.qs-ul li input:checked').length == 1){
			$('.er').html('');
		}
	});
 });



// Cũ
$(document).ready(function () {
	//click scroll
	$(document).on('click', '[toscroll]', function (e) {
		e.preventDefault();
		var link = $(this).attr('toscroll');
		if ($(link).length > 0) {
			var posi = $(link).offset().top - 50;
			$('body,html').animate({ scrollTop: posi }, 500);
		}
	});
	if ($(window).width < 992) {
		$('.btn_').mouseover(function () {
			$(this).addClass('active');
		}).mouseout(function () {
			$(this).removeClass('active');
		});
	}
	let previousScrollY = 0;
	$(document).on('show.bs.modal', () => {
		previousScrollY = window.scrollY;
		$('html').addClass('modal-open').css({
			marginTop: -previousScrollY,
			overflow: 'hidden',
			left: 0,
			right: 0,
			top: 0,
			bottom: 0,
			position: 'fixed',
		});
	}).on('hidden.bs.modal', () => {
		$('html').removeClass('modal-open').css({
			marginTop: 0,
			overflow: 'visible',
			left: 'auto',
			right: 'auto',
			top: 'auto',
			bottom: 'auto',
			position: 'static',
		});
		window.scrollTo(0, previousScrollY);
	});
	// check danh sach
	$('.err').hide();
	$('#p1s4rad').change(function () {
		if ($(this).is(':checked')) {
			$('.err').show();
			$('.data,.ppup-foot').hide();
		} else {
			$('.data,.ppup-foot').show();
			$('.err').hide();
		}
	});
	// no scroll body
	$('[data-toggle*="modal"]').on('click', function () {
		$('html').addClass('data-scroll');
	});
	$('.modal').on('click', function () {
		$('html').removeClass('data-scroll');
	});
});