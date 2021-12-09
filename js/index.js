import setupAverageDistanceWidget from './average-distance/mainAverageDist.js';
import setupAverageConsumptionWidget from './average-consumption/main-average-consump.js';

const refs = {
  submitAverDistBtn: document.querySelector('.calcScnd'),
  clearAverDistBtn: document.querySelector('.clear2calc'),
  submitAverageConsump: document.querySelector('.calcFrst'),
  clearAverageConsump: document.querySelector('.button__clear'),
};

setupAverageDistanceWidget(refs.submitAverDistBtn, refs.clearAverDistBtn);

setupAverageConsumptionWidget(
  refs.submitAverageConsump,
  refs.clearAverageConsump,
);
