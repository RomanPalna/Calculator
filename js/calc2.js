const refs = {
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

  averageDistance(calculation);

  window.localStorage.setItem('calculation2', JSON.stringify(calculation));
  renderLSTwo();
  event.currentTarget.reset();
}

function renderLSTwo() {
  const calc2 = document.getElementById('formTwo');
  if (getComputedStyle(calc2).display === 'none') {
    return;
  }

  const calc = JSON.parse(window.localStorage.getItem('calculation2'));
  if (!calc) {
    return;
  }

  averageDistance(calc);
  refs.toggleResult.style.display = 'block';
}

function averageDistance({ gas, dist, gasCost }) {
  const gasCosts = (dist / 100) * (gas / dist) * 100;
  refs.gasCosts.innerText = Math.round(gasCosts);

  const costOneKm = (gas * gasCost) / 100;
  refs.costOneKm.innerText = Math.round(costOneKm);

  const costDistance = costOneKm * gasCosts;
  refs.costDistance.innerText = Math.round(costDistance);

  refs.kilometers.innerText = dist;
  refs.toggleResult.style.display = 'block';
}

renderLSTwo();

function handleClear() {
  refs.gasCosts.innerText = 0;
  refs.costOneKm.innerText = 0;
  refs.costDistance.innerText = 0;
  refs.toggleResult.style.display = 'none';
  window.localStorage.clear();
}

/////////////////////////////
