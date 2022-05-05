import myChart from './chart_config.js';

// chart position config
(() => {
  myChart.canvas.parentNode.style.position = 'relative';
  myChart.canvas.parentNode.style.height = '50vh';
  myChart.canvas.parentNode.style.width = '90%';
  myChart.canvas.parentNode.style.left = '50%';
  myChart.canvas.parentNode.style.transform = 'translateX(-50%)';
})();
