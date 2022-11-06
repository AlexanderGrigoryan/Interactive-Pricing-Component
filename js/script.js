"use strict"

const barRange = document.querySelector('.pageviews__bar-range');
const pageViewsElement = document.querySelector('.pageviews__title');
const monthlyFeeElement = document.querySelector('.pageviews__price');
const selectPeriod = document.querySelector('.pageviews__month');
let sliderValue = 3;
let pageViews = "100K";
let monthlyFee = 16;
let yearlyBilling = false;

function sliderChange(val) {
sliderValue = val;
switch(sliderValue) {
    case 1:
      pageViews = "10K";
      monthlyFee = 8;
      break;
    case 2:
      pageViews = "50K";
      monthlyFee = 12;
      break;
    case 3:
      pageViews = "100K";
      monthlyFee = 16;
      break;
    case 4:
      pageViews = "500K";
      monthlyFee = 24;
      break;
    case 5:
      pageViews = "1M";
      monthlyFee = 36;
      break;
  }
  updatePageViews();
  updateMonthlyFee();
}

function updatePageViews() {
    pageViewsElement.innerHTML = pageViews + " PAGEVIEWS";
}

function updateMonthlyFee() {
    if(yearlyBilling){
        monthlyFee = monthlyFee - (monthlyFee / 100) * 25;
        monthlyFee *= 12;
        selectPeriod.innerHTML = "/year"
    } else {
      selectPeriod.innerHTML = "/month"
    }
      monthlyFeeElement.innerHTML = "$" + monthlyFee + ".00";
}

function switchPaymentRate() {
    if (yearlyBilling){
        yearlyBilling = false;
        //Setting the 100% price values for monthly payment
        sliderChange(sliderValue);
    } else {
        yearlyBilling = true;
        updateMonthlyFee();        
    }
}

for (let e of document.querySelectorAll('input[type="range"].slider-progress')) {
  e.style.setProperty('--value', e.value);
  e.style.setProperty('--min', e.min == '' ? '0' : e.min);
  e.style.setProperty('--max', e.max == '' ? '100' : e.max);
  e.addEventListener('input', () => e.style.setProperty('--value', e.value));
}

