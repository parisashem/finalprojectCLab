var barChartData = {
    labels: [
      "First Question",
      "Second Question",
      "Third Question",
      "Fourth Question",
      "Fifth Question",
      "Sixth Question",
      "Seventh Question",
      "Eigth Question"
    ],
    datasets: [
      {
        label: "First Choice",
        backgroundColor: "pink",
        borderColor: "red",
        borderWidth: 1,
        data: [3, 5, 6, 7,3, 5, 6, 7]
      },
      {
        label: "Second Choice",
        backgroundColor: "lightblue",
        borderColor: "blue",
        borderWidth: 1,
        data: [4, 7, 3, 6, 10,7,4,6]
      },
    ]
  };
  
  var chartOptions = {
    responsive: true,
    legend: {
      position: "top"
    },
    title: {
      display: true,
      text: "Results"
    },
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
  
  window.onload = function() {
    var ctx = document.getElementById("myChart").getContext("2d");
    window.myBar = new Chart(ctx, {
      type: "bar",
      data: barChartData,
      options: chartOptions
    });
  };
  

// var ctx = document.getElementById("myChart");
// var myChart = new Chart(ctx, {
//   type: 'bar',
//   data: {
//     labels: ["2015-01", "2015-02", "2015-03", "2015-04", "2015-05", "2015-06", "2015-07", "2015-08", "2015-09", "2015-10"],
//     datasets: [{
//       label: '# of Tomatoes',
//       data: [12, 19, 3, 5, 2, 3, 20, 3, 5, 6],
//       backgroundColor: [
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)',
//         'rgba(255, 99, 132, 0.2)',
//         'rgba(54, 162, 235, 0.2)',
//         'rgba(255, 206, 86, 0.2)',
//         'rgba(75, 192, 192, 0.2)',
//         'rgba(153, 102, 255, 0.2)',
//         'rgba(255, 159, 64, 0.2)'
//       ],
//       borderColor: [
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)',
//         'rgba(255,99,132,1)',
//         'rgba(54, 162, 235, 1)',
//         'rgba(255, 206, 86, 1)',
//         'rgba(75, 192, 192, 1)',
//         'rgba(153, 102, 255, 1)',
//         'rgba(255, 159, 64, 1)'
//       ],
//       borderWidth: 1
//     }]
//   },
//   options: {
//     responsive: false,
//     scales: {
//       xAxes: [{
//         ticks: {
//           maxRotation: 90,
//           minRotation: 80
//         }
//       }],
//       yAxes: [{
//         ticks: {
//           beginAtZero: true
//         }
//       }]
//     },
//     legend: { 
//         display: false 
//     },
//     title: {
//         display: true,
//         lineHeight: 3,
//         fontSize: 22,
//         text: 'Predicted world population (millions) in 2050'
//     }
//   }
// });