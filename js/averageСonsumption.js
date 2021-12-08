export default class AverageСonsumption {
  constructor({ gas = 0, distance = 0, cost = 0 }) {
    this.gas = gas;
    this.distance = distance;
    this.cost = cost;
  }

  calculate() {
    const gasPerDistance = this.gas / this.distance;
    return {
      avarage: gasPerDistance * 100,
      averageCost: (this.cost * (gasPerDistance * 100)) / 100,
      totalCost: this.cost * this.distance,
    };
  }
}
