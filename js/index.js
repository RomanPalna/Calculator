import setupAverageDistanceWidget from './average-distance/mainAverageDist.js';

const refs = {
  submitAverDistBtn: document.querySelector('.calcScnd'),
  clearBtn: document.querySelector('.clear2calc'),
};

setupAverageDistanceWidget(refs.submitAverDistBtn, refs.clearBtn, {});
