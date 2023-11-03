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
      const bgColor = dataset.fillStyle;

      const li = document.createElement("li");
      li.style.padding = "1px 3px";
      li.style.backgroundColor = "#9e9e9e29";

      const span = document.createElement("span");
      span.style.backgroundColor = `${bgColor}`;

      // text
      const p = document.createElement("P");
      p.style.fontSize = "12px";
      p.style.marginLeft = "5px";
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

let dailyChart = new Chart(Daily, {
  type: 'bar',
  data: {
    labels: ["",'10-14', ,'10-15', ,'10-16', ,'10-17', ,'10-18', ,'10-19', ,'10-20', ""],
    datasets: [{
      label: 'Daily PNL',
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
      label: 'Net Worth',
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

// days loop
const daysLi = Array.from(document.querySelectorAll(".days li:not(:last-child)"));

console.log(daysLi);
const charts = [CulumativeChart, dailyChart,profitsChart, NetChart];

daysLi.forEach((li) => {
  li.addEventListener("click", (e) => {
    daysLi.forEach((li) => {
      li.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    if (e.currentTarget.textContent.includes("30"))
    {
      charts.forEach((chart) => {
        chart.data.labels = ["",
        "9-21",
        "9-22",
        "9-23",
        "9-24",
        "9-25",
        "9-26",
        "9-27",
        "9-28",
        "9-29",
        "9-30",
        "10-1",
        "10-2",
        "10-3",
        "10-4",
        "10-5",
        "10-6",
        "10-7",
        "10-8",
        "10-9",
        "10-10",
        "10-11",
        "10-12",
        "10-13",
        '10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20',
        ""];
        if (chart.data.datasets[0].label == 'Cumulative PNL(%)')
        {
          if (chart.data.datasets[0].data.length > 20)
          {
            return;
          }else {
            chart.data.datasets[0].data.push(10, 20, 12, 30, 50, 80, 60, 10 , 20, 15, 60, 22, 15, 19, 10, 20, 30, 20, 22.5, 27, 30, 36, 0);
            chart.data.datasets[1].data.push(10, 0, 5, 9, 24, 60, 60, 11 , 5, 15, 13, 31, 60, 20, 22, 24, 16, 18, 32.5, 48, 3, 0, 10);
          }
  
        }else if (chart.data.datasets[0].label == "Daily PNL")
        {
          chart.data.datasets[0].backgroundColor = ["#20b26c", "#20b26c"  ,"#ef454a" ,"#ef454a" ,"#ef454a" ,"#ef454a" ,"#ef454a" ,"#20b26c",
          "#ef454a",
          "#ef454a",
          "#ef454a",
          "#20b26c",
          "#20b26c",
          "#ef454a",
          "#20b26c",
          "#20b26c",
          "#20b26c",
          "#20b26c",
          "#ef454a",
          "#ef454a",
          "#ef454a",
          "#ef454a",
          "#20b26c",
          "#ef454a",
          "#ef454a",
          "#20b26c",
          "#ef454a",
          "#ef454a",
          "#20b26c"
          ];
          chart.data.datasets[0].data.push(10, 20, 12, 30, 50, 80, 60, 10 , 20, 15, 60, 22, 15, 19, 10, 20, 30, 20, 22.5, 27, 30, 36, 0);
        }
        else {
          if (chart.data.datasets[0].data.length > 20)
          {
            return;
          }else {
            chart.data.datasets[0].data.push(10, 20, 12, 30, 50, 80, 60, 10 , 20, 15, 60, 22, 15, 19, 10, 20, 30, 20, 22.5, 27, 30, 36, 0);
          }
          
        }

        chart.update();
      });
      // table
      function appendRow(date, daily, cumulative, cumulativePercent)
      {
        let row = document.createElement("div");
        row.className = "row";
        let spans = [];
        for (let i = 0; i < 4; i++)
        {
          spans.push(document.createElement("span"));
        }
        
        spans[0].textContent = date;
        spans[1].textContent = daily;
        spans[2].textContent = cumulative;
        spans[3].textContent = cumulativePercent;
        for (let i = 0; i < 4; i++)
        {
          row.appendChild(spans[i]);
        }
        document.querySelector(".table .body").appendChild(row);
      }
      appendRow("2023-10-14", "$ 1.02", "$38", "7%");
      appendRow("2023-10-13", "$ 1.02", "$38", "7%");
      appendRow("2023-10-12", "$ 1.02", "$38", "7%");
      appendRow("2023-10-11", "$ 1.02", "$38", "7%");
      appendRow("2023-10-10", "$ 1.02", "$38", "7%");
      appendRow("2023-10-9", "$ 1.02", "$38", "7%");
      appendRow("2023-10-8", "$ 1.02", "$38", "7%");
      appendRow("2023-10-7", "$ 1.02", "$38", "7%");
      appendRow("2023-10-6", "$ 1.02", "$38", "7%");
      appendRow("2023-10-5", "$ 1.02", "$38", "7%");
      appendRow("2023-10-4", "$ 1.02", "$38", "7%");
      appendRow("2023-10-3", "$ 1.02", "$38", "7%");
      appendRow("2023-10-2", "$ 1.02", "$38", "7%");
      appendRow("2023-10-1", "$ 1.02", "$38", "7%");
      appendRow("2023-9-30", "$ 1.02", "$38", "7%");
      appendRow("2023-9-29", "$ 1.02", "$38", "7%");
      appendRow("2023-9-28", "$ 1.02", "$38", "7%");
      appendRow("2023-9-27", "$ 1.02", "$38", "7%");
      appendRow("2023-9-26", "$ 1.02", "$38", "7%");
      appendRow("2023-9-25", "$ 1.02", "$38", "7%");
      appendRow("2023-9-24", "$ 1.02", "$38", "7%");
      appendRow("2023-9-23", "$ 1.02", "$38", "7%");
      appendRow("2023-9-22", "$ 1.02", "$38", "7%");
      appendRow("2023-9-21", "$ 1.02", "$38", "7%");

    }else if (e.currentTarget.textContent.includes("7"))
    {
      charts.forEach((chart) => {
        chart.data.labels = ["",'10-14', '10-15', '10-16', '10-17', '10-18', '10-19', '10-20',""];
        if (chart.data.datasets[0].label == 'Cumulative PNL(%)')
        {
          chart.data.datasets[0].data = [,8, 7, 6, 5.5, 5.2, 5.2, 5.2,];
          chart.data.datasets[1].data = [,2, 4, 3, 2, 3, 4.2, 4,];
          
        }else if (chart.data.datasets[0].label == "Daily PNL") {
          console.log(chart);
          chart.data.datasets[0].data = [,46, ,-1, ,-3, ,-5, ,-0.5, ,-0.5, ,0.5,];
          chart.data.labels = ["",'10-14', ,'10-15', ,'10-16', ,'10-17', ,'10-18', ,'10-19', ,'10-20', ""];
        }else if (chart.data.datasets[0].label == "Net Worth")
        {
          chart.data.datasets[0].data = [,620, 400, 400, 300, 100, 30, 40,];
        }else if (chart.data.datasets[0].label == "Profits")
        {
          chart.data.datasets[0].data = [,46, 45, 41, 37, 37.5, 37.5, 37.5,];
        }
        chart.update();
      });
      document.querySelector(".table .body").innerHTML = `
      <div class="row">
      <span>2023-10-20</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-19</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-18</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-17</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-16</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
  <div class="row">
      <span>2023-10-15</span>
      <span>$ 0.02</span>
      <span>$37.27</span>
      <span>6.4%</span>
  </div>
      `
    }
  });
});

