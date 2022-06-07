import {
  exchangeForm, giveInput, receiveInput,
  giveCurrencySelect,receiveCurrencySelect,
  rateOutput, commissionOutput, formSubmit, 
  formCheckbox, modalBlur, modal, modalClose, 
  modalHeader, modalContent, demonstrationLinks,
  loginBtns, logoutBtns,
} from './elements.js';

import {
  EXCHANGE_HEAD, EXCHANGE_MESSAGE, DEMO_HEAD, DEMO_MESSAGE,
  LOGIN_HEAD, LOGIN_MESSAGE, LOGOUT_HEAD, LOGOUT_MESSAGE,
} from "./consts.js";

import getDataCurrency from "./api.js";

import {
  renderCurrencySelect, renderRate,
  renderCommission, renderApplications,
} from "./render.js";

import calculateСurriency from "./calc.js";

import {userState, dataState, calcState} from "./state.js";

import "./event-handlers.js"


initialApp();
async function initialApp(){ // инициализация приложения
  const dataCurrency = await getDataCurrency(); // получили данные
  dataState.set('currencies', dataCurrency.conversion_rates); // получили список валют и их значение 
  renderCurrencySelect(); // отрендерили selects
  dataState.set('selectedGiveCurrency', giveCurrencySelect.value); // после рендеринга 
  dataState.set('selectedReceiveCurrency', receiveCurrencySelect.value); // обновили state
  giveInput.disabled = false; // app state
  giveCurrencySelect.disabled = false; // app state
  receiveCurrencySelect.disabled = false; // app state
}

function updateCurriency() {
  calculateСurriency(); // обновить calc state
  renderRate(); // рендерим rate
  if (dataState.currentGive === '') return false
  receiveInput.value = calcState.get('outputMoney'); // вывели итоговую сумму в receiveInput
  renderCommission(); // рендерим commission
}

function exchange() {
  addNewApplication();
  callToModal(EXCHANGE_HEAD, EXCHANGE_MESSAGE);
}

//TODO fix blur for modals
function callToModal(head, message) {
  console.log(modal, blur);
  modalHeader.textContent = head;
  modalContent.textContent = message;
  modalBlur.style.display = 'block';
  modal.style.display = 'block';
}

// Applications to LOCALSTORAGE
function addNewApplication(){
  const applications = JSON.parse(localStorage.getItem('applications')) || [];
  // создали строку времени
  const now = new Date();
  let month;
  if (now.getMonth()+1 < 10) {
    month = `0${now.getMonth()+1}`;
  } else {
    month = `${now.getMonth()+1}`;
  }
  // создать объект application
  const application = {
    date: `${now.getDate()}.${month}.${now.getFullYear()}, ${now.getHours()}:${now.getMinutes()}`,
    currentGive: dataState.get('currentGive'),
    selectedGiveCurrency: dataState.get('selectedGiveCurrency'),
    outputMoney: calcState.get('outputMoney'),
    selectedReceiveCurrency: dataState.get('selectedReceiveCurrency'),
  }
  applications.unshift(application);
  if(applications.length > 4){
    applications.pop();
  }
  // обновить localStorage
  localStorage.setItem('applications', JSON.stringify(applications));
  // отрендерить applications
  renderApplications();
}

function login(status){
  userState.set('isClient', status);
  updateCurriency();

  loginBtns.forEach(btn => {
    btn.style.display = status ? 'none' : 'block';
  });

  logoutBtns.forEach(btn => {
    btn.style.display = status ? 'block' : 'none';
  })

  if(status) {
    callToModal(LOGIN_HEAD, LOGIN_MESSAGE);
  } else {
    callToModal(LOGOUT_HEAD, LOGOUT_MESSAGE);
  }
}

export {updateCurriency, exchange, callToModal, addNewApplication, login};