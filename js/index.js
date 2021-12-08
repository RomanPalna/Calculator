import AverageСonsumption from './averageСonsumption.js';
import AverageDistance from './averageDistance.js';

const refs = {
  buttonSubmit: document.querySelector('.calcFrst'),
  resultAvarage: document.querySelector('.avarage'),
  resultCost: document.querySelector('.cost'),
  resultTotalCost: document.querySelector('.totalCost'),
  clear: document.querySelector('.button__clear'),
  toggleResult: document.querySelector('.result'),
  kilometers: document.querySelector('.kilometers'),
  firstForm: document.querySelector('.calcFrst'),
  secondForm: document.querySelector('.calcScnd'),
};

const refs2 = {
  buttonSubmit: document.querySelector('.calcScnd'),
  gasCosts: document.querySelector('.gasCosts'),
  costOneKm: document.querySelector('.costOneKm'),
  costDistance: document.querySelector('.costDistance'),
  clear: document.querySelector('.clear2calc'),
  toggleResult: document.querySelector('.calc2result'),
  kilometers: document.querySelector('.kilom'),
  firstForm: document.querySelector('.calcFrst'),
  secondForm: document.querySelector('.calcScnd'),
};

refs.buttonSubmit.addEventListener('submit', onInputSubmit);
refs.clear.addEventListener('click', handleClear);

const rounded = function (number) {
  return +number.toFixed(2);
};

function onInputSubmit(event) {
  event.preventDefault();

  const {
    elements: { gasoline, distance, gasolineCost },
  } = event.currentTarget;

  if (
    gasoline.value === '' ||
    distance.value === '' ||
    gasolineCost.value === ''
  ) {
    return alert('Заповніть всі поля!');
  }

  const calculation = {
    gas: gasoline.value,
    distance: distance.value,
    cost: gasolineCost.value,
  };

  renderAverageСonsumption(calculation);

  event.currentTarget.reset();
}

function renderLS() {
  const calc1 = document.getElementById('formOne');

  if (getComputedStyle(calc1).display === 'none') {
    console.log('Calc 1 return');
    return;
  }

  const calc = JSON.parse(window.localStorage.getItem('calculation'));
  if (!calc) {
    return;
  }
  renderAverageСonsumption(calc);
  refs.toggleResult.style.display = 'block';
}

renderLS();

function renderAverageСonsumption(calculation) {
  const averageConsumptionCalc = new AverageСonsumption(calculation);
  const { avarage, averageCost, totalCost } =
    averageConsumptionCalc.calculate();
  refs.resultAvarage.innerText = rounded(avarage);
  refs.resultCost.innerText = rounded(averageCost);
  refs.resultTotalCost.innerText = rounded(totalCost);
  refs.toggleResult.style.display = 'block';
  window.localStorage.setItem('calculation', JSON.stringify(calculation));
}

function handleClear() {
  refs.toggleResult.style.display = 'none';
  window.localStorage.clear();
}

// const averageDistance = new AverageDistance(calc);
// console.log(averageDistance.calculate().gasCost);
