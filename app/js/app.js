import $ from 'jquery'; window.jQuery = $; window.$ = $; // import module example (npm i -D jquery)
import Slick from 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {

	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/dist/banner-section/arrow-left.svg" alt="arrow left icon"></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/dist/banner-section/arrow-right.svg" alt="arrow right icon"></button>',
	});

	$('.tab').on('click', function (e) { 
		e.preventDefault();

		$($(this).siblings()).removeClass('tab--active');
		$($(this).parent().siblings().find('div')).removeClass('tabs-content--active');

		$(this).addClass('tab--active');
		$($(this).attr('href')).addClass('tabs-content--active');
	});

	$('.product-item__favorite').on('click', function (e) {
		$(this).toggleClass('product-item__favorite--active');
	});

	$('.product-slider').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/dist/products/arrow-black-left.svg" alt="arrow left icon"></button>',
		nextArrow: '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/dist/products/arrow-black-right.svg" alt="arrow right icon"></button>',
	});
});
