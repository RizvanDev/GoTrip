'use strict'

import '../index.html'
import '../css/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'



const customerRating = () => {
  const customerValue = document.querySelector('.customer__rating').dataset.customerRating,
    stars = document.querySelectorAll('.customer__rating-star')

  return stars.forEach((element, index) => index < customerValue
    ? element.classList.add('--enabled')
    : element.classList.remove('--enabled'))
}
customerRating()



const mobileMenu = () => {
  const menuIcon = document.querySelector('.header__mobile'),
    headerTop = document.querySelector('.header__top')

  const toMobileMenu = () => {
    menuIcon.classList.toggle('--open')
    headerTop.classList.toggle('--open')
    document.body.classList.toggle('--lock')
  }

  return menuIcon.addEventListener('click', toMobileMenu)
}
mobileMenu()



// sliders
const swiper = new Swiper('.destination-slider.swiper', {
  modules: [Navigation, Pagination],

  direction: 'horizontal',
  loop: true,
  speed: 700,
  centeredSlides: true,
  slideToClickedSlide: true,
  grabCursor: true,

  navigation: {
    nextEl: '.destination-slider.swiper-button-next',
    prevEl: '.destination-slider.swiper-button-prev',
  },

  breakpoints: {
    320: {
      spaceBetween: 0,
      slidesPerView: 1,
      initialSlide: 0,
    },
    768: {
      slidesPerView: 3,
      initialSlide: 1,
    },
    1400: {
      slidesPerView: 3,
      spaceBetween: 30,
    }

  }
})