// Объявляем переменные для получения HTML элементов
const exchangeForm = document.querySelector('.exchange_form'),
      giveInput = document.getElementById('give-amount'),
      receiveInput = document.getElementById('receive-amount'),
      giveCurrencySelect = document.getElementById('give_currency'),
      receiveCurrencySelect = document.getElementById('receive_currency'),
      rateOutput = document.querySelector('.exchange_form__rate'),
      commissionOutput = document.querySelector('.exchange_form__commission'),
      formSubmit = document.querySelector('.exchange_form__submit'),
      formCheckbox = document.querySelector('.exchange_form__checkbox'),

      applicationsSection = document.querySelector('.applications'),
      applicationsList = document.querySelector('.applications__list'),

      modalBlur = document.querySelector('.modal-blur'),
      modal = document.querySelector('.modal'),
      modalClose = document.querySelector('.modal__close'),
      modalHeader = document.querySelector('.modal__header'),
      modalContent = document.querySelector('.modal__content'),

      demonstrationLinks = document.querySelectorAll('.demo-link'),

      loginBtns = document.querySelectorAll('.login-btn'),
      logoutBtns = document.querySelectorAll('.logout-btn'),

      burgerBlur = document.querySelector('.burger-blur'),
      burgerOpenBtn = document.querySelector('.burger-menu__open-btn'),
      burgerCloseBtn = document.querySelector('.burger-close__span'),
      burgerMenu = document.querySelector('.burger-menu__wrapper');


export {
	exchangeForm, giveInput, receiveInput,
  giveCurrencySelect, receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox, applicationsSection, applicationsList,
  modalBlur, modal, modalClose, modalHeader, modalContent, demonstrationLinks, loginBtns, logoutBtns,
  burgerBlur, burgerOpenBtn, burgerCloseBtn, burgerMenu,
};


