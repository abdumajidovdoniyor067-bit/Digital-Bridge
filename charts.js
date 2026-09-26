/* ============ CHART.JS STATISTIKA ============ */
let chartKomissiya = null;
let chartXizmatlar = null;
let chartImtiyoz = null;

function chartYukla() {
  if (typeof Chart === 'undefined') {
    console.warn('⚠️ Chart.js yuklanmagan');
    return;
  }

  // Chart.js default sozlamalari
  Chart.defaults.font.family = "'Inter', system-ui, sans-serif";
  Chart.defaults.font.size = 12;
  Chart.defaults.color = getComputedStyle(document.body)
    .getPropertyValue('--muted').trim() || '#4d6670';
  Chart.defaults.plugins.legend.position = 'bottom';
  Chart.defaults.plugins.legend.labels.usePointStyle = true;
  Chart.defaults.plugins.legend.labels.padding = 15;
}

function chartKomissiyaChiz() {
  const canvas = document.getElementById('chartKomissiya');
  if (!canvas) return;
  if (chartKomissiya) chartKomissiya.destroy();

  const list = meningTolovlar();
  const oxirgi7kun = [];
  const summalar = [];

  for (let i = 6; i >= 0; i--) {
    const d = new Date();
    d.setDate(d.getDate() - i);
    const kun = d.toISOString().slice(0, 10);
    const label = d.toLocaleDateString('uz-UZ', { day: '2-digit', month: 'short' });
    oxirgi7kun.push(label);
    
    const kunlik = list
      .filter(t => (t.vaqt || '').slice(0, 10) === kun)
      .reduce((s, t) => s + (t.komissiyaSumma || 0), 0);
    summalar.push(kunlik);
  }

  chartKomissiya = new Chart(canvas, {
    type: 'line',
    data: {
      labels: oxirgi7kun,
      datasets: [{
        label: 'Komissiya (so\'m)',
        data: summalar,
        borderColor: '#7c3aed',
        backgroundColor: 'rgba(124, 58, 237, 0.1)',
        borderWidth: 3,
        fill: true,
        tension: 0.4,
        pointBackgroundColor: '#7c3aed',
        pointBorderColor: '#fff',
        pointBorderWidth: 2,
        pointRadius: 5,
        pointHoverRadius: 7
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => '💼 ' + ctx.parsed.y.toLocaleString('uz-UZ') + ' so\'m'
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: (v) => v.toLocaleString('uz-UZ')
          }
        }
      }
    }
  });
}

function chartXizmatlarChiz() {
  const canvas = document.getElementById('chartXizmatlar');
  if (!canvas) return;
  if (chartXizmatlar) chartXizmatlar.destroy();

  const list = meningTolovlar();
  const xizmatSoni = {};

  list.forEach(t => {
    (t.xizmatlar || []).forEach(x => {
      xizmatSoni[x.nom] = (xizmatSoni[x.nom] || 0) + 1;
    });
  });

  const sorted = Object.entries(xizmatSoni)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 6);

  if (sorted.length === 0) {
    canvas.parentElement.innerHTML = '<p style="text-align:center;color:var(--muted);padding:40px">Hozircha ma\'lumot yo\'q</p>';
    return;
  }

  chartXizmatlar = new Chart(canvas, {
    type: 'doughnut',
    data: {
      labels: sorted.map(x => x[0]),
      datasets: [{
        data: sorted.map(x => x[1]),
        backgroundColor: [
          '#0d7a7a', '#12344a', '#d4a017', '#7c3aed', '#1a8a5c', '#0066cc'
        ],
        borderWidth: 3,
        borderColor: '#fff',
        hoverOffset: 10
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'right' },
        tooltip: {
          callbacks: {
            label: (ctx) => '💊 ' + ctx.label + ': ' + ctx.parsed + ' ta'
          }
        }
      },
      cutout: '60%'
    }
  });
}

function chartImtiyozChiz() {
  const canvas = document.getElementById('chartImtiyoz');
  if (!canvas) return;
  if (chartImtiyoz) chartImtiyoz.destroy();

  const list = meningTolovlar();
  let imtiyozli = 0, imtiyozsiz = 0, jamiChegirma = 0;

  list.forEach(t => {
    if (t.imtiyozli) {
      imtiyozli++;
      jamiChegirma += t.chegirmaSumma || 0;
    } else {
      imtiyozsiz++;
    }
  });

  if (imtiyozli + imtiyozsiz === 0) {
    canvas.parentElement.innerHTML = '<p style="text-align:center;color:var(--muted);padding:40px">Hozircha ma\'lumot yo\'q</p>';
    return;
  }

  chartImtiyoz = new Chart(canvas, {
    type: 'bar',
    data: {
      labels: ['Imtiyozli', 'Imtiyozsiz'],
      datasets: [{
        label: 'Bemorlar soni',
        data: [imtiyozli, imtiyozsiz],
        backgroundColor: ['#d4a017', '#0d7a7a'],
        borderRadius: 12,
        borderSkipped: false,
        barThickness: 60
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => '👥 ' + ctx.parsed.y + ' ta bemor'
          }
        }
      },
      scales: {
        y: { beginAtZero: true, ticks: { stepSize: 1 } }
      }
    }
  });
}

function barchaChartlarChiz() {
  chartYukla();
  chartKomissiyaChiz();
  chartXizmatlarChiz();
  chartImtiyozChiz();
}