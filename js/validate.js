import {
  giveInput,
} from './elements.js';

import {dataState} from "./state.js";

function inputNumberValidate(value){
  value = value.replace(/\D/, ''); // удаляем все, кроме цифр
  if(value === ''){
    return 0;
  } else {
    return value;
  }
}

function submitValidate(argument){
  if (dataState.get('isChecked') && giveInput.value !== '0' && giveInput.value !== '') {
    return true;
  } else {
    if(!dataState.get('isChecked')){
      alert('Check checkbox!');
    }
    if(!giveInput.value || giveInput.value !== '' || giveInput.value !== '0'){
      alert('Fill give input!');
    }
  }
}

export {inputNumberValidate, submitValidate};