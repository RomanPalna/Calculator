import { storeData, clearData } from '../local-storage.js';

export default class AverageConsumptionWidget {
  constructor(refs, calculator) {
    this.refs = refs;
    this.calculator = calculator;
  }

  render({ average, averageCost, totalCost }) {
    this.refs.resultAvarage.innerText = average;
    this.refs.resultCost.innerText = averageCost;
    this.refs.resultTotalCost.innerText = totalCost;
    this.refs.toggleResult.style.display = 'block';
  }

  clear() {
    this.refs.resultAvarage.innerText = '';
    this.refs.resultCost.innerText = '';
    this.refs.resultTotalCost.innerText = '';
    this.refs.toggleResult.style.display = 'none';
    clearData();
  }

  onSubmit(e) {
    e.preventDefault();
    const {
      elements: { gasoline, distance, gasolineCost },
    } = e.currentTarget;

    const calculation = {
      gas: gasoline.value,
      distance: distance.value,
      cost: gasolineCost.value,
    };

    const data = this.calculator.calculate(calculation);

    storeData('average-consumption', data);

    const { average, averageCost, totalCost } = data;

    this.render({ average, averageCost, totalCost });
    e.currentTarget.reset();
  }
}
