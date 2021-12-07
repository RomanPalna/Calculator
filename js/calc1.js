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

refs.buttonSubmit.addEventListener('submit', onInputSubmit);
refs.clear.addEventListener('click', handleClear);

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
    dist: distance.value,
    gasCost: gasolineCost.value,
  };

  averageСonsumption(calculation);

  window.localStorage.setItem('calculation', JSON.stringify(calculation));
  renderLS();

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
  averageСonsumption(calc);
  refs.toggleResult.style.display = 'block';
}

const rounded = function (number) {
  return +number.toFixed(2);
};

function averageСonsumption({ gas, dist, gasCost }) {
  const avarage = (gas / dist) * 100;
  refs.resultAvarage.innerText = rounded(avarage);

  const cost = (gasCost * avarage) / 100;
  refs.resultCost.innerText = rounded(cost);

  const totalCost = cost * dist;
  refs.resultTotalCost.innerText = rounded(totalCost);

  refs.kilometers.innerText = dist;
  refs.toggleResult.style.display = 'block';
}

renderLS();

function handleClear() {
  refs.resultAvarage.innerText = 0;
  refs.resultCost.innerText = 0;
  refs.resultTotalCost.innerText = 0;
  refs.toggleResult.style.display = 'none';
  window.localStorage.clear();
}
