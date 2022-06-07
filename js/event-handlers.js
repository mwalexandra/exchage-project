import {
  exchangeForm, giveInput,
  giveCurrencySelect,receiveCurrencySelect,
  formCheckbox, modalBlur, modalClose, demonstrationLinks,
  loginBtns, logoutBtns, 
  burgerBlur, burgerOpenBtn, burgerCloseBtn, burgerMenu,
} from './elements.js';

import {
   DEMO_HEAD, DEMO_MESSAGE,
} from "./consts.js";

import {dataState} from "./state.js";

import {updateCurriency, exchange, callToModal, login} from "./app-main-functions.js";

import {inputNumberValidate, submitValidate} from "./validate.js";

// Обработчики событий
// FLEXSLIDER
  document.addEventListener('DOMContentLoaded', () => {
    // if(window.innerWidth < 769) {
      const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        spaceBetween: 10,
        // pagination: {
        //   el: '.swiper-pagination',
        // },
      });
    // }
  })

giveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedGiveCurrency', this.value);
  updateCurriency();
})

receiveCurrencySelect.addEventListener('change', function () {
  dataState.set('selectedReceiveCurrency', this.value);
  updateCurriency();
})

giveInput.addEventListener('input', function(){
  if(this.value[0] === '0' && this.value.length > 1){
    this.value = this.value.slice(1);
  }
  this.value = inputNumberValidate(this.value);
  dataState.set('currentGive', this.value);
  updateCurriency();
})

exchangeForm.addEventListener('submit', function(event){ 
  event.preventDefault();
  if (submitValidate()) {
    exchange();
  }
})

formCheckbox.addEventListener('change', function(){
  dataState.set('isChecked', this.checked);
})

modalClose.addEventListener('click', function(){
  modalBlur.style.display = 'none';
})

demonstrationLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    callToModal(DEMO_HEAD, DEMO_MESSAGE);
  })
})

// LOGIN LOGOUT
loginBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    login(true);
  })
}) 

logoutBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    login(false);
  })
}) 

// BURGER
burgerOpenBtn.addEventListener('click', e => {
  e.preventDefault();
  burgerMenu.style.display = 'block';
  burgerBlur.style.display = 'block';
})

burgerCloseBtn.addEventListener('click', e => {
  burgerMenu.style.display = 'none';
  burgerBlur.style.display = 'none';
})

