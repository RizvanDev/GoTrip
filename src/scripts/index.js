'use strict'

import '../index.html'
import '../css/style.scss'
import Swiper, { Navigation, Pagination } from 'swiper'

import { authModal, showInputPassword } from './modules/helpFunctions'



// star rating 
const customerRating = () => {
  const customerValue = document.querySelector('.customer__rating').dataset.customerRating,
    stars = document.querySelectorAll('.customer__rating-star')

  return stars.forEach((element, index) => index < customerValue
    ? element.classList.add('--enabled')
    : element.classList.remove('--enabled'))
}
customerRating()


// mobile menu
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



// template HTML auth modal
const modalWindowTemplate = () => {
  return `
    <div class="modal-login" >
     <div class="modal-login__container">
     
     <div class="modal-login__title">Authorization</div>
     
      <form class="modal-login__form">
        <input id="email" type="email" placeholder="email" required>
     
        <label for=""password class="modal-login__label-password"> 
          <input id="password" type="password" placeholder="password" required>
          <button id="show-password" type="button" class="modal-login__show-password">&#128270</button>
        </label>
     
        <button type="submit" class="modal-login__btn">Sign in</button> 
      </form>
     
     </div>
    </div>
  `
}

const addAuthModalToPage = () => {

  document.body.insertAdjacentHTML('beforeend', modalWindowTemplate())

  authModal({
    openLoginButtons: document.querySelectorAll('.navigation__login'),
    modal: document.querySelector('.modal-login'),
    modalContainer: document.querySelector('.modal-login__container'),
  })

  document.querySelector('.modal-login__show-password').addEventListener('click', showInputPassword)
}
// initialize auth modal
window.addEventListener('load', addAuthModalToPage)



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