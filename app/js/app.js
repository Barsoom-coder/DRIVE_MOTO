import $ from 'jquery'; window.jQuery = $; window.$ = $; // import module example (npm i -D jquery)
import Slick from 'slick-carousel';

document.addEventListener('DOMContentLoaded', () => {

	$('.banner-section__slider').slick({
		dots: true,
		prevArrow: '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/dist/banner-section/arrow-left.svg" alt="arrow left icon"></button>',
		nextArrow: '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/dist/banner-section/arrow-right.svg" alt="arrow right icon"></button>',
	});

	$('.search__tabs-item').on('click', function (e) { 
		e.preventDefault();

		$('.search__tabs-item').removeClass('search__tabs-item--active');
		$('.search__content-item').removeClass('search__content-item--active');

		$(this).addClass('search__tabs-item--active');
		$($(this).attr('href')).addClass('search__content-item--active');
	});
});
