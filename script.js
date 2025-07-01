document.addEventListener("DOMContentLoaded", () => {
  const dates = [
    "11-Jun", "12-Jun", "13-Jun", "14-Jun", "15-Jun", 
    "16-Jun", "17-Jun", "18-Jun", "19-Jun", "20-Jun", 
    "21-Jun", "22-Jun", "23-Jun", "24-Jun", "25-Jun"
  ];

  const amounts = [
    0, 0, 0, 0, 0, 0.1, 0.2, 0.2, 0.3, 0.4, 0.5, 0.5, 0.6, 0.6, 0.7
  ];

  const ctx = document.getElementById("cashflowChart").getContext("2d");

  new Chart(ctx, {
    type: "line",
    data: {
      labels: dates,
      datasets: [{
        label: "Cashflow",
        data: amounts,
        borderColor: "#FF4C4C",
        backgroundColor: "rgba(255, 76, 76, 0.05)",
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: true,
          labels: {
            color: "#000",
            font: {
              weight: 'bold'
            }
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: "#555",
            maxRotation: 45,
            minRotation: 45
          },
          grid: {
            display: false
          },
          title: {
            display: true,
            text: "Date",
            color: "#000",
            font: {
              weight: "bold"
            }
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "#555"
          },
          title: {
            display: true,
            text: "Amount",
            color: "#000",
            font: {
              weight: "bold"
            }
          },
          grid: {
            color: "#eee"
          }
        }
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const ctx = document.getElementById("incomeExpenseChart").getContext("2d");

  new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
      ],
      datasets: [
        {
          label: "Income",
          data: [1, 1.5, 1, 1.8, 1.6, 1.2, 1.5, 1.3, 1.7, 1.6, 1.9, 2],
          backgroundColor: "#00d1ff",
          barThickness: 8,
          borderRadius: 4
        },
        {
          label: "Expense",
          data: [0.8, 1.2, 1.1, 1.4, 1.3, 1.1, 1.4, 1.2, 1.6, 1.5, 1.8, 1.9],
          backgroundColor: "#ff4d6d",
          barThickness: 8,
          borderRadius: 4
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: {
            usePointStyle: true,
            padding: 20,
            boxWidth: 10
          }
        },
        tooltip: {
          mode: "index",
          intersect: false
        }
      },
      scales: {
        x: {
          stacked: false,
          ticks: {
            color: "#555",
            font: {
              size: 12
            }
          },
          grid: {
            display: false
          }
        },
        y: {
          beginAtZero: true,
          ticks: {
            color: "#888",
            stepSize: 0.4
          },
          grid: {
            color: "#eee"
          }
        }
      }
    }
  });
});
document.addEventListener('DOMContentLoaded', function () {
  const ctx = document.getElementById('storageChart').getContext('2d');

  const usedPercentage = 0.01; // 0.01%

  new Chart(ctx, {
    type: 'doughnut',
    data: {
      datasets: [{
        data: [usedPercentage, 100 - usedPercentage],
        backgroundColor: ['#4CAF50', '#eee'],
        borderWidth: 0
      }]
    },
    options: {
      rotation: -90 * Math.PI / 180,
      circumference: 180 * Math.PI / 180,
      cutout: '75%',
      plugins: {
        legend: { display: false },
        tooltip: { enabled: false }
      }
    }
  });
});
document.addEventListener("DOMContentLoaded", () => {
  const goalText = document.getElementById("goal-text");
  // goalText.textContent = "New goal will appear here!";
});
const greeting = document.getElementById("greetingToggle");
const dropdown = document.getElementById("dropdownMenu");

greeting.addEventListener("click", () => {
  dropdown.style.display = dropdown.style.display === "flex" ? "none" : "flex";
});

window.addEventListener("click", (e) => {
  if (!greeting.contains(e.target)) {
    dropdown.style.display = "none";
  }
});
const languageToggle = document.getElementById("languageToggle");
const languageMenu = document.getElementById("languageMenu");

languageToggle.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevents window click from closing it immediately
  const isOpen = languageMenu.style.display === "flex";
  languageMenu.style.display = isOpen ? "none" : "flex";
});

window.addEventListener("click", (e) => {
  if (!languageToggle.contains(e.target)) {
    languageMenu.style.display = "none";
  }
});
