import AverageDistanceWidget from './calc-widget.js';
import AverageDistanceCalculator from './averageDistance-calculator.js';

export default function setupAverageDistanceWidget(submitBtn, clearBtn) {
  const refs = {
    resultAverage: document.querySelector('.gasCosts'),
    resultCost: document.querySelector('.costOneKm'),
    resultTotalCost: document.querySelector('.costDistance'),
    toggleResult: document.querySelector('.calc2result'),
  };

  const averageDistanceCalculator = new AverageDistanceCalculator();

  const averageDistanceWidget = new AverageDistanceWidget(
    averageDistanceCalculator,
    refs,
  );

  submitBtn.addEventListener('submit', e => {
    averageDistanceWidget.onSubmit(e);
  });
  clearBtn.addEventListener('click', () => averageDistanceWidget.clear());
}
