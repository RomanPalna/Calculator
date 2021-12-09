import AverageDistanceWidget from './calc-widget.js';
import AverageDistanceCalculator from './averageDistance-calculator.js';

export default function setupAverageDistanceWidget(
  submitBtn,
  clearBtn,
  navBtn,
) {
  const refs = {
    resultAverage: document.querySelector('.avarage'),
    resultCost: document.querySelector('.cost'),
    resultTotalCost: document.querySelector('.totalCost'),
    toggleResult: document.querySelector('.result'),
  };

  const averageDistanceCalculator = new AverageDistanceCalculator();

  const averageDistanceWidget = new AverageDistanceWidget(
    averageDistanceCalculator,
    refs,
  );

  console.log(averageDistanceWidget);
  submitBtn.addEventListener('submit', averageDistanceWidget.onSubmit);
  //   clearBtn.addEventListener('click', averageDistanceWidget.clear);
  //   navBtn.addEventListener('click', averageDistanceWidget.onOpen);
}
