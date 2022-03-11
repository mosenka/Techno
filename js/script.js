function testWebP(callback) {

var webP = new Image();

webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
};

webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}

testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }else{
        document.querySelector('body').classList.add('no-webp');
    }
});;

document.addEventListener('DOMContentLoaded', () => {
    // import gsap from "gsap";


let icon = $('.menu__icon');
const menu = $('.menu__nav-mobile');
let submenu = $('.menu__nav-mobile .submenu');

let items = $('.menu__nav-mobile .menu__item');

const $navbar = $('.navbar');

var tl = gsap.timeline({ paused: true });

// icon.prependTo(mobMenu);
// var $element = $('.section-number');
let isFixed = false;

$(window).scroll(function() {
	if ($(window).scrollTop() >= $navbar.offset().top) {
		if(!isFixed) {
			$navbar.addClass('navbar-fixed');
			isFixed = true;
		}

	} 
	if($(window).scrollTop() == 0){
		if(isFixed) {
			$navbar.removeClass('navbar-fixed');
			isFixed = false;
		}
	}
	
});

tl.to(menu, {
	duration: .5,
	top: '127px',
	y: 0,
	height: 'auto', 
});

tl.reverse();

icon.on( "click", function() {
	$(this).toggleClass('menu__icon-open');
	tl.reversed(!tl.reversed());
});

items.each(function(index,item){
	let plus = $('<span class="menu__plus">+</span>');
	
	if($(item).find('.submenu').length > 0){
		$(item).append(plus);
		let height = $(item).find('.submenu').height();
		gsap.set($(item).find('.submenu'), {
			height: 0, 
		})
		var sb = gsap.timeline({ paused: true });
		
		sb.to($(item).find('.submenu'), {
			duration: .2,
			height: height, 
		});
		sb.reverse();
	}
	plus.on('click', function(){
		sb.reversed( !sb.reversed() );
	})
});






 
    // import Swiper, { Navigation, Autoplay, Parallax }  from 'swiper';
// import gsap from "gsap";


new Swiper('.offer__slider', {
	// modules: [ Navigation, Autoplay, Parallax ],
	loop: true,
	speed: 600,
	autoplay: {
		delay: 8000,
	},
	slidesPerView: 1, 
	navigation: {
		nextEl: '.offer__arrow-next',
		prevEl: '.offer__arrow-prev'
	},
});

gsap.to($('.offer__title'), 1, {
	delay: 1.6,
	opacity: "1",
	y: 0
});
gsap.to([$('.offer__discription'), $('.offer__button-wrapper')], 1, {
	delay: 2,
	opacity: "1",
	y: 0
}); 
    
    MicroModal.init({
	disableScroll: true
}); 
    
    
 
    // import gsap from "gsap";

let elem;

$('.service').on('mouseover', function(){
	gsap.to($(this), {
		duration: .5,
		y: -8,
	});
	gsap.to($(this).find('.service__img'), {
		duration: .5,
		opacity: 1
	});

});




$('.service').on('mouseout', function(){
	elem = gsap.to($(this), {
		duration: .5,
		y: 0
	});
	gsap.to($(this).find('.service__img'), {
		duration: .5,
		opacity: 0
	});

}); 
    

$('.process__item').last().addClass('process__item-last'); 
    // import gsap from "gsap";

gsap.to($('.video__icon'), {
	duration: 1,
	boxShadow: "0 0 0 10px rgba(255, 255, 255, 0.3), 0 0 0 20px rgba(255, 255, 255, 0.3), 0 0 0 30px rgba(2241, 42, 2, 0)",
	repeat: -1,
	ease: 'none'
}); 
    // import gsap from "gsap";
// import { TweenLite } from "gsap/gsap-core";


function counter(number, elem) {
	let start = {score:0};

  	TweenLite.to(start, 3, 
	{
		score:"+="+number, 
		roundProps:"score", 
		onUpdate:updateHandler, 
		onUpdateParams: [elem, start],
		ease:"none"
	});
}
		
function updateHandler(elem, start) {
	$(elem).text(start.score);
}

var $element = $('.section-number');
let isVisited = 0;

$(window).scroll(function() {
	var scroll = $(window).scrollTop() + $(window).height();
	//Если скролл до середины
	var offset = $element.offset().top + ($element.height() * 0.5);

	if (scroll > offset && isVisited == 0) {
		$(".number__number").each(function(index, elem){
			counter(+$(elem).text(), elem);
		});
		isVisited = 1;
	}
});

 
    // import Swiper, { Pagination }  from 'swiper'


new Swiper('.reviews', {
	// modules: [ Pagination ],
	loop: true,
	slidesPerView: 1, 
	spaceBetween: 20,
	pagination: {
		el: '.pagination',
		bulletClass: 'pagination__bullet',
		bulletActiveClass: 'pagination__bullet-active',
		clickable: true
	 },
	// centeredSlides: true,
	breakpoints: {
		991.98: {
			slidesPerView: 3, 
			spaceBetween: 30,
			centeredSlides: true,
		},
		767.98: {
			slidesPerView: 2, 
			spaceBetween: 30,
			centeredSlides: false
		}
	}
	
});

 
    // import Swiper, { Pagination, Navigation }  from 'swiper'

new Swiper('.articles', {
	// modules: [ Pagination, Navigation ],
	loop: true,
	slidesPerView: 1, 
	spaceBetween: 20,
	centeredSlides: true,
	pagination: {
		el: '.pagination',
		bulletClass: 'pagination__bullet',
		bulletActiveClass: 'pagination__bullet-active',
		clickable: true
	 },
	 navigation: {
		nextEl: '.articles__arrow-next',
		prevEl: '.articles__arrow-prev'
	 },
	// centeredSlides: true,
	breakpoints: {
		991.98: {
			slidesPerView: 3, 
			spaceBetween: 30,
			centeredSlides: true,
		},
		767.98: {
			slidesPerView: 2, 
			spaceBetween: 30,
			centeredSlides: false
		}
	}
	
});

 
    let up = $('#up');

let $showScroll;

if($('.section-advantages').length != 0) {
	$showScroll = $('.section-advantages');
}else {
	$showScroll = $('.breadctumbs');
}

let isShow = false;


$("#up").click(function(e) { 
	e.preventDefault();
    $('body, html').animate({scrollTop: 0}, 500);
});

window.addEventListener('scroll', function() {
    let offset = $showScroll.offset().top + $showScroll.height();
    let scroll = $(window).scrollTop() + $(window).height();

    if(scroll <= offset) {
        if(!isShow) {
            up.css({display: 'none'});
            isShow = true;

        }
    } else {
        if(isShow) {
            up.css({display: 'flex'});
            isShow = false;
        }
    }
});


 
    // decision page
$('.decision__card').each(function(index, elem) {
	let height;
	height = $(this).find('.decision__card-font').outerHeight(true);
	$(this).css({height: height}, 200);

	$(this).hover(function(){
		height = $(this).find('.decision__card-back').outerHeight();
		$(this).animate({height: height}, 200);
	}, 
	function() {
		height = $(this).find('.decision__card-font').outerHeight();
		$(this).animate({height: height}, 200);
	})
	
});

// decisions page
let cardHeight = 0;
$('.decisions__card-font').each(function(index, elem){
	if($(elem).outerHeight(true) > cardHeight) {
		cardHeight = $(elem).outerHeight(true);
	}
	return true;
});
$('.decisions__card').css({height: cardHeight});

$('.decisions__card-font').css({height: cardHeight});


showTabsContent();

$('.decision__tabs-item').on('click', function(){
	$('.decision__tabs-item').removeClass('decision__tabs-item-active');
	$(this).addClass('decision__tabs-item-active');
	showTabsContent();

});

function showTabsContent() {
	
	let text = $('.decision__tabs-item-active').find('.decision__tabs-content').text();

	$('.decision__tabs-text').text(text);


} 


    gsap.to($('.range__circle'), {
        duration: 3,
        left: '100%',
        repeat: -1,
        ease: 'none'
    });

    

})
