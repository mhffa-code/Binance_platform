// sidebar active class loop
const sidebarLis = document.querySelectorAll("aside ul li");
sidebarLis.forEach((li) => {
    li.addEventListener("click", (e) => {
        sidebarLis.forEach((li) => {
            li.classList.remove("active");
        });
        e.currentTarget.classList.add("active");
    });
});

// Culumative canvas
const Culumative = document.getElementById("cumulative").getContext("2d");
Chart.defaults.font.size = 10;



let CulumativeChart = new Chart(Culumative, {
    type: 'line',
    data: {
      labels: ["",'10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20', ""],
      datasets: [
        {
        label: 'Cumulative PNL(%)',
        data: [,8, 7, 6, 5.5, 5.2, 5.2, 5.2,],
        borderWidth: 2,
        pointStyle:"circle",
        borderColor: "#f7a600",
        tension: 0.5,
        backgroundColor: "#f7a600",
        fill : false
      },
      {
        label: 'Cumulative PNL(%)',
        data: [,2, 4, 3, 2, 3, 4.2, 4,],
        borderWidth: 0.8,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },

    
    options: {
      interaction: {
        mode: "index"
      },
      responsive: true,
        plugins : {
            legend: {
                labels: {
                  boxWidth: 8,
                  boxHeight: 8,
                    usePointStyle: true,
                    pointStyle: 'star',
                    font: {
                        size: 12
                    },
                    color : "#81858c",
                }
            }
        },
      scales: {
        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + "%";
                    },
                    color: "#81858c",
                    stepSize: 5,

                },
          grid : {
              color: "#ffffff2e",
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 10,
            },
          beginAtZero: true,
          grid : {
              display: false,
          }
        }
      }
    },
});



// asset
const asset = document.getElementById("Asset");


let assetChart = new Chart(asset, {
  type: 'doughnut',
  data: {
    labels: ['USDT 96.46', "API3 1.32%", "XRP 1.13%", "FTM 0.37%", "LINK 0.22%", "OTHER 0.5%"],
    datasets: [
      {
        label: 'Dataset 1',
        data: [40,1,1,1,1,1],
        backgroundColor: ['#0365f4', "orange", "yellow", "red", "green", "#fcd535"],
        cutout: "80%",
        borderWidth : 0,
      }
    ]
  },
  options : {
    plugins : {
      legend : {
        display: false
      }
    }
  },
});




// generate legend
function generateLegend()
{
    const chartBox = document.querySelector(".Asset");
    const div =document.createElement("div");
    div.setAttribute("id", "custom");

    const ul = document.createElement("ul");

    assetChart.legend.legendItems.forEach((dataset, index) => {
      const text = dataset.text;
      console.log(dataset)
      const bgColor = dataset.fillStyle;

      const li = document.createElement("li");
      const span = document.createElement("span");
      span.style.backgroundColor = `${bgColor}`;

      // text
      const p = document.createElement("P");

      p.textContent = text;

    ul.appendChild(li);
    li.appendChild(span);
    li.appendChild(p);

    div.appendChild(ul);
    chartBox.appendChild(div);
    });

 
}


generateLegend();


const Daily = document.getElementById('Daily');

new Chart(Daily, {
  type: 'bar',
  data: {
    labels: ["",'10-14', ,'10-15', ,'10-16', ,'10-17', ,'10-18', ,'10-19', ,'10-20', ""],
    datasets: [{
      label: '# of Votes',
      data: [,46, ,-1, ,-3, ,-5, ,-0.5, ,-0.5, ,0.5,],
      borderWidth: 1,
      backgroundColor: ["","#20b26c", ,"#ef454a", ,"#ef454a", ,"#ef454a", ,"#ef454a", ,"#ef454a", ,"#20b26c",""]
    }]
  },
  options: {
    responsive: true,
    plugins : {
      legend : {
        display: false
      }
    },
    scales: {
      y: {
        ticks : {
          color: "#81858c",
          stepSize: 10,
      },
      grid : {
        color: "#ffffff2e"
    }
      },
      x: {
        ticks : {
          color: "#81858c",
          stepSize: 20
      },
      grid : {
        display : false,
    }
      }
    }
  }
});

const Net = document.getElementById("Net");

let NetChart = new Chart(Net, {
  type: 'line',
  data: {
    labels: ["",'10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20', ""],
    datasets: [
      {
      label: 'Cumulative PNL(%)',
      data: [,620, 400, 400, 300, 100, 30, 40,],
      borderWidth: 2,
      pointStyle:"circle",
      borderColor: "#f7a600",
      tension: 0,
      backgroundColor: "#f7a600",
      fill : false
    }
  ]
  },

  
  options: {
    responsive: true,
      plugins : {
          legend: {
            display: false
          }
      },
    scales: {
      y: {
              ticks : {
                  callback: (value, index, values) => {
                      return value + ".00";
                  },
                  color: "#81858c",
                  stepSize: 200,

              },
        grid : {
            color: "#ffffff2e",
        }
      },
      x: {
          ticks : {
              color: "#81858c",
          },
        beginAtZero: true,
        grid : {
            display: false,
        }
      }
    }
  },
});


const profits = document.getElementById("Profits");

let profitsChart = new Chart(profits, {
    type: 'line',
    data: {
      labels: ["",'10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20', ""],
      datasets: [
      {
        label: 'Profits',
        data: [,46, 45, 41, 37, 37.5, 37.5, 37.5,],
        borderWidth: 0.8,
        pointStyle:"circle",
        borderColor: "#ffc107",
        tension: 0.5,
        backgroundColor: "#ffc107",
        fill : false
      },
    ]
    },

    
    options: {
      responsive: true,
        plugins : {
            legend: {
              display: false
            }
        },
      scales: {
        y: {
                ticks : {
                    callback: (value, index, values) => {
                        return value + ".00";
                    },
                    color: "#81858c",
                    stepSize: 5,

                },
          grid : {
              color: "#ffffff2e",
          }
        },
        x: {
            ticks : {
                color: "#81858c",
                stepSize: 2,
            },
          beginAtZero: true,
          grid : {
              display: false,
          }
        }
      }
    },
});