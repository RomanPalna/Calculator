import AverageСonsumption from './averageСonsumption.js';
import AverageDistance from './averageDistance.js';

const calc = {
  gas: 13,
  distance: 100,
  cost: 32,
};

const averageConsumptionCalc = new AverageСonsumption(calc);
const averageDistance = new AverageDistance(calc);

console.log(averageConsumptionCalc.calculate());
console.log(averageDistance.calculate());
