import $ from "jquery";
window.jQuery = $;
window.$ = $; // import module example (npm i -D jquery)
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
  });
  $(".tab").on("click", function (e) {
    e.preventDefault();
    $($(this).siblings()).removeClass("tab--active");
    $($(this).parent().siblings().find("div")).removeClass("tabs-content--active");
    $(this).addClass("tab--active");
    $($(this).attr("href")).addClass("tabs-content--active");
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
});


