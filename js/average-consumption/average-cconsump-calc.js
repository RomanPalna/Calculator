export default class AverageConsumption {
  calculate({ gas = 0, distance = 0, cost = 0 }) {
    const gasPerDistance = gas / distance;
    return {
      average: gasPerDistance * 100,
      averageCost: (cost * (gasPerDistance * 100)) / 100,
      totalCost: cost * distance,
    };
  }
}
