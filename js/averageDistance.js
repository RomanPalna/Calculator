export default class averageDistance {
  constructor({ gas, distance, cost }) {
    this.gas = gas;
    this.distance = distance;
    this.cost = cost;
  }

  onSubmit(e) {
    e.preventDefault();
  }

  calculate() {
    const avarage = (this.gas / this.distance) * 100;
    const averageCosts = this.distance / 100;

    return {
      gasCost: averageCosts * avarage,
      costOneKm: (avarage * this.cost) / 100,
      costDistance: averageCosts * this.cost,
    };
  }
}
