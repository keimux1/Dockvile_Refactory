const labels = ['Parking','Tires','Battery Rent','Battery Sale' ];
const data = {
  labels: labels,
  datasets: [{
    label: 'Daily Revenue',
    data: [65, 59, 80, 81],
    backgroundColor: [
      'rgba(255, 99, 132, 0.8)',
      'rgba(54, 162, 235, 0.8)',
      'rgba(255, 206, 86, 0.8)',
      'rgba(75, 192, 192, 0.8)'
    ],
    borderColor: [
      'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 206, 86)',
      'rgb(75, 192, 192)'
    ],
    borderWidth: 1,
    borderRadius: 16,


  }]
};
const config = {
  type: 'bar',
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
};
var myChart = new Chart(
  document.getElementById('myChart'),
  config
);