'use strict'

import '../index.html'
import '../css/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'


const swiper = new Swiper('.destination-slider.swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  slidesPerView: 3,
  initialSlide: 1,
  loop: true,
  speed: 700,
  centeredSlides: true,
  slideToClickedSlide: true,
  spaceBetween: 30,
  grabCursor: true,

  navigation: {
    nextEl: '.destination-slider.swiper-button-next',
    prevEl: '.destination-slider.swiper-button-prev',
  },
})

const customerRating = () => {
  const customerValue = document.querySelector('.customer__rating').dataset.customerRating,
    stars = document.querySelectorAll('.customer__rating-star')

  return stars.forEach((element, index) => index < customerValue
    ? element.classList.add('--enabled')
    : element.classList.remove('--enabled'))
}
customerRating()