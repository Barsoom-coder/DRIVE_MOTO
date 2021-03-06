import $ from 'jquery'; window.jQuery = $; window.$ = $; // import jQuery module (npm i -D jquery)
import Slick from "slick-carousel";
import rangeSlider from "ion-rangeslider";
import Raty from 'raty-js';
require("../libs/formstyler.js");

document.addEventListener("DOMContentLoaded", () => {
  $(".banner-section__slider").slick({
    dots: true,
    prevArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnprev"><img src="images/dist/banner-section/arrow-left.svg" alt="arrow left icon"></button>',
    nextArrow:
      '<button class="banner-section__slider-btn banner-section__slider-btnnext"><img src="images/dist/banner-section/arrow-right.svg" alt="arrow right icon"></button>',
      responsive: [
        {
          breakpoint: 969,
          settings: {
            arrows: false,
          }
        },
      ]    
  });
  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).closest('.tabs-wrapper').siblings().find("div")).removeClass("tabs-content--active");
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");

    $('.product-slider').slick('setPosition');
  });
  $(".product-item__favorite").on("click", function (e) {
    $(this).toggleClass("product-item__favorite--active");
  });
  $(".product-slider").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow:
      '<button class="products-slider__slider-btn products-slider__slider-btnprev"><img src="images/dist/products/arrow-black-left.svg" alt="arrow left icon"></button>',
    nextArrow:
      '<button class="products-slider__slider-btn products-slider__slider-btnnext"><img src="images/dist/products/arrow-black-right.svg" alt="arrow right icon"></button>',
      responsive: [
        {
          breakpoint: 1301,
          settings: {
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 1201,
          settings: {
            slidesToShow: 3,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 871,
          settings: {
            slidesToShow: 2,
            arrows: false,
            dots: true,
          }
        },
        {
          breakpoint: 591,
          settings: {
            slidesToShow: 1,
            arrows: false,
            dots: true,
          }
        },
      ] 
  });
  
  $(".filter-style").styler();

  $(".filter__item-drop, .filter__extra").on("click", function (e) {
    $(this).toggleClass("filter__item-drop--active");
    $(this).next().slideToggle("100");
  });

  $(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 100000,
    max: 500000,
  });

  $(".catalog__filter-btngrid").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btnline").removeClass("catalog__filter-button--active");
    $(".product-item__wrap").removeClass("product-item__wrap--list");
  });
  $(".catalog__filter-btnline").on("click", function () {
    $(this).addClass("catalog__filter-button--active");
    $(".catalog__filter-btngrid").removeClass("catalog__filter-button--active");
    $(".product-item__wrap").addClass("product-item__wrap--list");
  });
  
  $('.range').raty({
    path: '../images/dist',
  });
  $('.menu__btn').on('click', function() {
    $('.menu-mobile__list').toggleClass('menu-mobile__list--active');
  });

  $('.footer__topdrop').on('click', function () { 
    $(this).next().slideToggle();
    $(this).toggleClass('footer__topdrop--active');
  });
  $('.aside__btn').on('click', function () { 
    $(this).next().slideToggle();
  });
});


