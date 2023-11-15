Chart.defaults.pointHitDetectionRadius = 1;
Chart.defaults.plugins.tooltip.enabled = false;
Chart.defaults.plugins.tooltip.mode = 'index';
Chart.defaults.plugins.tooltip.position = 'nearest';
Chart.defaults.plugins.tooltip.external = coreui.ChartJS.customTooltips;
Chart.defaults.color = coreui.Utils.getStyle('--cui-body-color');
document.body.addEventListener('themeChange', () => {
    cardChart1.data.datasets[0].pointBackgroundColor = coreui.Utils.getStyle('--cui-primary');
    cardChart1.update();
});
const mainBarChart = new Chart(document.getElementById('main-bar-chart'), {
    type: 'bar',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: 'Users',
            backgroundColor: coreui.Utils.getStyle('--cui-primary'),
            borderRadius: 6,
            borderSkipped: false,
            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
            barPercentage: 0.6,
            categoryPercentage: 0.5
        }, {
            label: 'New users',
            backgroundColor: coreui.Utils.getStyle('--cui-gray-100'),
            borderRadius: 6,
            borderSkipped: false,
            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
            barPercentage: 0.6,
            categoryPercentage: 0.5
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false,
                    drawTicks: false
                },
                ticks: {
                    color: coreui.Utils.getStyle('--cui-text-disabled'),
                    font: {
                        size: 14
                    },
                    padding: 16
                }
            },
            y: {
                grid: {
                    drawBorder: false,
                    borderDash: [2, 4]
                },
                gridLines: {
                    borderDash: [8, 4],
                    color: '#348632'
                },
                ticks: {
                    beginAtZero: true,
                    color: coreui.Utils.getStyle('--cui-text-disabled'),
                    font: {
                        size: 14
                    },
                    maxTicksLimit: 5,
                    padding: 16,
                    stepSize: Math.ceil(100 / 1)
                }
            }
        }
    }
});

const cardChartNew1 = new Chart(document.getElementById('card-chart-new1'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: `rgba(${coreui.Utils.getStyle('--cui-primary-rgb')}, .1)`,
            borderColor: coreui.Utils.getStyle('--cui-primary'),
            borderWidth: 3,
            data: [78, 81, 80, 45, 34, 22, 40],
            fill: true
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                beginAtZero: true,
                display: false
            }
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});
const cardChart1 = new Chart(document.getElementById('card-chart1'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'transparent',
            borderColor: 'rgba(255,255,255,.55)',
            pointBackgroundColor: coreui.Utils.getStyle('--cui-primary'),
            data: [65, 59, 84, 84, 51, 55, 40]
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                grid: {
                    display: false,
                    drawBorder: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                min: 30,
                max: 89,
                display: false,
                grid: {
                    display: false
                },
                ticks: {
                    display: false
                }
            }
        },
        elements: {
            line: {
                borderWidth: 1,
                tension: 0.4
            },
            point: {
                radius: 4,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});
const cardChart3 = new Chart(document.getElementById('card-chart3'), {
    type: 'line',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40],
            fill: true
        }]
    },
    options: {
        plugins: {
            legend: {
                display: false
            }
        },
        maintainAspectRatio: false,
        scales: {
            x: {
                display: false
            },
            y: {
                display: false
            }
        },
        elements: {
            line: {
                borderWidth: 2,
                tension: 0.4
            },
            point: {
                radius: 0,
                hitRadius: 10,
                hoverRadius: 4
            }
        }
    }
});
const cardChart4 = new Chart(document.getElementById('card-chart4'), {
    type: 'bar',
    data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December', 'January', 'February', 'March', 'April'],
        datasets: [{
            label: 'My First dataset',
            backgroundColor: 'rgba(255,255,255,.2)',
            borderColor: 'rgba(255,255,255,.55)',
            data: [78, 81, 80, 45, 34, 12, 40, 85, 65, 23, 12, 98, 34, 84, 67, 82],
            barPercentage: 0.6
        }]
    },
    options: {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false,
                    drawTicks: false
                },
                ticks: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false,
                    drawBorder: false,
                    drawTicks: false
                },
                ticks: {
                    display: false
                }
            }
        }
    }
});

var xValues = ["Suresh", "Ramesh", "Kumar", "Pavan", "Ravi"];
var yValues = [55, 49, 44, 24, 15];
var barColors = ["#EF376E", "#51CC8A","#5046E5","#FFCC00","brown"];

new Chart("myChart", {
  type: "bar",
  data: {
    labels: xValues,
    datasets: [{
      backgroundColor: barColors,
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    title: {
      display: true,
      
    }
  }
});

// Pie Chart
google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Task', 'Hours per Day'],
          ['Work',     11],
          ['Eat',      2],
          ['Commute',  2],
          ['Watch TV', 2],
          ['Sleep',    7]
        ]);

        var options = {
          title: 'My Daily Activities'
        };

        var chart = new google.visualization.piechart-2(document.getElementById('piechart-2'));

        chart.draw(data, options);
      }