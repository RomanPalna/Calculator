import storeData from './local-storage.js';

export default class AverageDistanceWidget {
  constructor(calculator, refs) {
    this.calculator = calculator;
    this.refs = refs;
  }

  render(data) {
    this.refs.resultAverage.innerText = data.costOneKm;
    this.refs.resultCost.innerText = data.gasCost;
    this.refs.resultTotalCost.innerText = data.costDistance;
    this.refs.toggleResult.style.display = 'block';
  }

  clear() {
    this.refs.resultAverage.innerText = '';
    this.refs.resultCost.innerText = '';
    this.refs.resultTotalCost.innerText = '';
    this.refs.toggleResult.style.display = '';
  }

  onSubmit(e) {
    e.preventDefault();

    const {
      elements: { gasoline, distance, gasolineCost },
    } = e.currentTarget;

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

    console.log(calculation);
    console.log(this.calculator);
    const data = this.calculator.calculate(calculation);

    storeData('average-consumption', data);

    this.render(data);
  }

  onOpen(e) {
    e.preventDefault();

    // const data = getData('average-consumption');

    this.render(data);
  }
}
