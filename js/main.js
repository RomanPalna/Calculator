const refs = {
  buttonSubmit: document.querySelector(".calculator__form"),
  resultAvarage: document.querySelector(".avarage"),
  resultCost: document.querySelector(".cost"),
  resultTotalCost: document.querySelector(".totalCost"),
  clear: document.querySelector(".button__clear"),
  toggleResult: document.querySelector(".result"),

  navRightBtn: document.querySelector(".right"),
  navLeftBtn: document.querySelector(".left"),
  description: document.querySelector(".calculator__discription"),
};

refs.buttonSubmit.addEventListener("submit", onInputSubmit);
refs.clear.addEventListener("click", handleClear);
refs.navRightBtn.addEventListener("click", handleChangeDistanse);
refs.navLeftBtn.addEventListener("click", handleChangeAvarage);

function onInputSubmit(event) {
  event.preventDefault();

  const {
    elements: { gasoline, distance, gasolineCost },
  } = event.currentTarget;

  if (
    gasoline.value === "" ||
    distance.value === "" ||
    gasolineCost.value === ""
  ) {
    return alert("Заповніть всі поля!");
  }

  const calculation = {
    gas: gasoline.value,
    dist: distance.value,
    gasCost: gasolineCost.value,
  };

  averageСonsumption(calculation);

  window.localStorage.setItem("calculation", JSON.stringify(calculation));

  event.currentTarget.reset();
}

function renderLS() {
  const calc = JSON.parse(window.localStorage.getItem("calculation"));

  if (!calc) {
    return;
  }

  averageСonsumption(calc);
  refs.toggleResult.style.display = "block";
}
renderLS();

function averageСonsumption({ gas, dist, gasCost }) {
  const avarage = (gas / dist) * 100;
  refs.resultAvarage.innerText = Math.round(avarage);

  const cost = (gasCost * avarage) / 100;
  refs.resultCost.innerText = Math.round(cost);

  const totalCost = cost * dist;
  refs.resultTotalCost.innerText = Math.round(totalCost);

  refs.toggleResult.style.display = "block";
}

function handleClear() {
  refs.resultAvarage.innerText = 0;
  refs.resultCost.innerText = 0;
  refs.resultTotalCost.innerText = 0;
  refs.toggleResult.style.display = "none";
  window.localStorage.clear();
}

/////////////////////////////

function handleChangeDistanse() {
  refs.navRightBtn.classList.add("active");
  refs.navLeftBtn.classList.remove("active");
  refs.description.innerText =
    "Дізнайтеся скільки пального ви витратите у поїздці, знаючи відстань, яку плануєте проїхати, а також середню витрату палива вашого автомобіля.";
}

function handleChangeAvarage() {
  refs.navLeftBtn.classList.add("active");
  refs.navRightBtn.classList.remove("active");

  refs.description.innerText =
    " Дізнайтеся середню витрату палива автомобіля на 100 кілометрів по пройденій відстані та кількості літрів витраченого пального.";
}

console.log(refs.navRightBtn.classList);
