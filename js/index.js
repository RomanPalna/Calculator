import AverageСonsumption from './averageСonsumption.js';
import AverageDistance from './averageDistance.js';

const refs = {
  buttonSubmit: document.querySelector('.calcFrst'),
  resultAvarage: document.querySelector('.avarage'),
  resultCost: document.querySelector('.cost'),
  resultTotalCost: document.querySelector('.totalCost'),
  clear: document.querySelector('.button__clear'),
  toggleResult: document.querySelector('.result'),
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
  renderAverageDistance(calculation);
  renderAverageСonsumption(calculation);

  event.currentTarget.reset();
}

function renderLS() {
  const calc1 = document.getElementById('formOne');
  const calc2 = document.getElementById('formTwo');

  if (getComputedStyle(calc1).display === 'none') {
    const calculation2 = JSON.parse(
      window.localStorage.getItem('calculation2'),
    );
    if (!calculation2) {
      return;
    }
    renderAverageDistance(calculation2);
  }

  if (getComputedStyle(calc2).display === 'none') {
    const calculation = JSON.parse(window.localStorage.getItem('calculation'));
    if (!calculation) {
      return;
    }
    renderAverageСonsumption(calculation);
  }

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

function renderAverageDistance(calculation) {
  const averageDistance = new AverageDistance(calculation);
  const { gasCost, costOneKm, costDistance } = averageDistance.calculate();
  refs2.gasCosts.innerText = rounded(gasCost);
  refs2.costOneKm.innerText = rounded(costOneKm);
  refs2.costDistance.innerText = rounded(costDistance);
  refs.toggleResult.style.display = 'block';
  window.localStorage.setItem('calculation2', JSON.stringify(calculation));
}

function handleClear() {
  refs.toggleResult.style.display = 'none';
  window.localStorage.clear();
}