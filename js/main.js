const refs = {
  buttonSubmit: document.querySelector(".calculator__form"),
  navButton: document.querySelector(".calculator__nav--item"),
  resultAvarage: document.querySelector(".avarage"),
  resultCost: document.querySelector(".cost"),
  resultTotalCost: document.querySelector(".totalCost"),
  clear: document.querySelector(".button__clear"),
};

refs.buttonSubmit.addEventListener("submit", onInputSubmit);
refs.clear.addEventListener("click", handleClear);

function onInputSubmit(event) {
  event.preventDefault();

  const {
    elements: { gasoline, distance, gasolineCost },
  } = event.currentTarget;

  if (gasoline.value === "" || distance.value === "" || gasolineCost === "") {
    return alert("Заповніть всі поля!");
  }

  averageСonsumption(gasoline.value, distance.value, gasolineCost.value);

  event.currentTarget.reset();
}

function averageСonsumption(gasoline, distance, gasolineCost) {
  const avarage = (gasoline / distance) * 100;
  console.log("Середній розхід: ", avarage);
  refs.resultAvarage.innerText = avarage;

  const cost = (gasolineCost * avarage) / 100;
  console.log("Середня вартість: ", cost);
  refs.resultCost.innerText = cost;

  const totalCost = cost * distance;
  console.log("Середня вартість: ", totalCost);
  refs.resultTotalCost.innerText = totalCost;
}

function handleClear() {
  refs.resultAvarage.innerText = 0;
  refs.resultCost.innerText = 0;
  refs.resultTotalCost.innerText = 0;
}
