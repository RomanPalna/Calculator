const refs = {
  buttonSubmit: document.querySelector(".calculator__form"),
  resultAvarage: document.querySelector(".avarage"),
  resultCost: document.querySelector(".cost"),
  resultTotalCost: document.querySelector(".totalCost"),
  clear: document.querySelector(".button__clear"),
  toggleResult: document.querySelector(".result"),
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
  refs.resultAvarage.innerText = avarage;

  const cost = (gasolineCost * avarage) / 100;
  refs.resultCost.innerText = cost;

  const totalCost = cost * distance;
  refs.resultTotalCost.innerText = totalCost;

  refs.toggleResult.style.display = "block";
}

function handleClear() {
  refs.resultAvarage.innerText = 0;
  refs.resultCost.innerText = 0;
  refs.resultTotalCost.innerText = 0;
  refs.toggleResult.style.display = "none";
}
