import AverageConsumptionCalc from './average-cconsump-calc.js';
import AverageConsumptionWidget from './average-consump-widget.js';

export default function setupConsumptionWidget(submitBtn, clearBtn) {
  const refs = {
    resultAvarage: document.querySelector('.avarage'),
    resultCost: document.querySelector('.cost'),
    resultTotalCost: document.querySelector('.totalCost'),
    toggleResult: document.querySelector('.result'),
  };

  const averageConsumptionCalc = new AverageConsumptionCalc();

  const averageConsumptionWidget = new AverageConsumptionWidget(
    refs,
    averageConsumptionCalc,
  );

  submitBtn.addEventListener('submit', e => {
    averageConsumptionWidget.onSubmit(e);
  });

  clearBtn.addEventListener('click', () => averageConsumptionWidget.clear());
}
