import { storeData, clearData } from '../local-storage.js';

export default class AverageDistanceWidget {
  constructor(calculator, refs) {
    this.calculator = calculator;
    this.refs = refs;
  }

  render({ gasCost, costOneKm, costDistance }) {
    this.refs.resultAverage.innerText = costOneKm;
    this.refs.resultCost.innerText = gasCost;
    this.refs.resultTotalCost.innerText = costDistance;
    this.refs.toggleResult.style.display = 'block';
  }

  clear() {
    this.refs.resultAverage.innerText = '';
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

    storeData('average-distance', data);

    const { gasCost, costOneKm, costDistance } = data;
    this.render({ gasCost, costOneKm, costDistance });
    e.currentTarget.reset();
  }
}
