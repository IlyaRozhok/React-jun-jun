import users from './user_data.js';

const BG_COLORS = ['#FF638433', '#36A2EB33', '#FFCE5633', '#4BC0C033', '#9966FF33', '#FF9F4033'];
const BORDER_COLORS = ['#FF6384FF', '#36A2EBFF', '#FFCE56FF', '#4BC0C0FF', '#9966FFFF', '#FF9F40FF'];

const rating = users.reduce((accum, item) => {
  accum.push(item.rating);
  return accum;
}, []);

const students = users.reduce((accum, item) => {
  accum.push(`${item.firstName[0]}.${item.lastName}`);
  return accum;
}, []);

const ctx = document.getElementById('myChart');

const myChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: students,
    datasets: [{
      label: 'Student rating:',
      data: rating,
      backgroundColor: BG_COLORS,
      borderColor: BORDER_COLORS,
      borderWidth: 2,
      borderRadius: Number.MAX_VALUE,
      borderSkipped: false,
    },
    ],
  },
  options: {
    responsive: true,
    aspectRatio: 0,
    animations: {
      tension: {
        duration: 1000,
        easing: 'easeOutQuint',
        from: 1,
        to: 0,
        loop: true,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        text: 'Chart.js Bar Chart',
        fullSize: false,
      },
    },
  },
});

export default myChart;
