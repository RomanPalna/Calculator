export default class AverageDistanceCalculator {
  calculate({ gas = 0, distance = 0, cost = 0 }) {
    const avarage = (gas / distance) * 100;
    const averageCosts = distance / 100;

    return {
      gasCost: averageCosts * avarage,
      costOneKm: (avarage * cost) / 100,
      costDistance: averageCosts * cost,
    };
  }
}
