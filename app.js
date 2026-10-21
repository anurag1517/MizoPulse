/**
 * MIZORAM SENTIMENT INTELLIGENCE PLATFORM - APPLICATION LOGIC
 * Dynamic filtering, interactive charts, survey response engine, and live Mizo/English sentiment playground.
 */

// Application State
const AppState = {
  currentTab: 'overview',
  filters: {
    source: 'all',
    gender: 'all',
    age: 'all',
    tribe: 'all',
    date: '2026-10-20'
  },
  polarPlatformFilter: 'all',
  polarStanceFilter: 'all',
  polarSearchQuery: '',
  charts: {},
  surveyState: {},
  customFeed: []
};

// Initialize application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  initSurveyState();
  initEventListeners();
  renderMetrics();
  renderAllCharts();
  renderNarratives();
  renderTribalGrid();
  renderSecurityCards();
  renderSurveyQuestions();
  renderPolarChannels();
  renderFeed();
});

// Initialize survey voting from data
function initSurveyState() {
  MIZORAM_DATA.surveyQuestions.forEach(q => {
    AppState.surveyState[q.id] = {
      userVoted: null,
      options: JSON.parse(JSON.stringify(q.options)),
      totalVotes: q.totalVotes
    };
  });
}

// Global Event Listeners
function initEventListeners() {
  // Navigation Tabs
  document.querySelectorAll('.nav-tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const tabTarget = btn.getAttribute('data-tab');
      switchTab(tabTarget);
    });
  });

  // Filter Selectors
  const sourceFilter = document.getElementById('filterSource');
  if (sourceFilter) {
    sourceFilter.addEventListener('change', (e) => {
      AppState.filters.source = e.target.value;
      applyFilters();
    });
  }

  const genderFilter = document.getElementById('filterGender');
  if (genderFilter) {
    genderFilter.addEventListener('change', (e) => {
      AppState.filters.gender = e.target.value;
      applyFilters();
    });
  }

  const ageFilter = document.getElementById('filterAge');
  if (ageFilter) {
    ageFilter.addEventListener('change', (e) => {
      AppState.filters.age = e.target.value;
      applyFilters();
    });
  }

  const tribeFilter = document.getElementById('filterTribe');
  if (tribeFilter) {
    tribeFilter.addEventListener('change', (e) => {
      AppState.filters.tribe = e.target.value;
      applyFilters();
    });
  }

  const dateFilter = document.getElementById('filterDate');
  if (dateFilter) {
    dateFilter.value = AppState.filters.date;
    dateFilter.addEventListener('change', (e) => {
      AppState.filters.date = e.target.value;
      renderNarratives();
      showToast(`Narratives updated for ${e.target.value}`);
    });
  }

  // Reset Filters
  const resetBtn = document.getElementById('resetFiltersBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      AppState.filters.source = 'all';
      AppState.filters.gender = 'all';
      AppState.filters.age = 'all';
      AppState.filters.tribe = 'all';
      AppState.filters.date = '2026-10-20';

      if (sourceFilter) sourceFilter.value = 'all';
      if (genderFilter) genderFilter.value = 'all';
      if (ageFilter) ageFilter.value = 'all';
      if (tribeFilter) tribeFilter.value = 'all';
      if (dateFilter) dateFilter.value = '2026-10-20';

      applyFilters();
      showToast('All filters have been reset to default.');
    });
  }

  // Live Sentiment Playground Trigger
  const analyzeBtn = document.getElementById('btnRunAnalysis');
  if (analyzeBtn) {
    analyzeBtn.addEventListener('click', runTextAnalysis);
  }

  const sampleButtons = document.querySelectorAll('.sample-chip');
  sampleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const text = btn.getAttribute('data-sample');
      const inputEl = document.getElementById('textAnalyzerInput');
      if (inputEl) {
        inputEl.value = text;
        runTextAnalysis();
      }
    });
  });

  // Export Buttons
  const exportJsonBtn = document.getElementById('exportJsonBtn');
  if (exportJsonBtn) {
    exportJsonBtn.addEventListener('click', exportDataAsJson);
  }

  const exportCsvBtn = document.getElementById('exportCsvBtn');
  if (exportCsvBtn) {
    exportCsvBtn.addEventListener('click', exportNarrativesAsCsv);
  }

  // Polar Channels Filter Listeners
  document.querySelectorAll('#polarPlatformPills .p-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      document.querySelectorAll('#polarPlatformPills .p-pill').forEach(p => p.classList.remove('active'));
      pill.classList.add('active');
      AppState.polarPlatformFilter = pill.getAttribute('data-platform');
      renderPolarChannels();
    });
  });

  const stanceSelect = document.getElementById('polarStanceSelect');
  if (stanceSelect) {
    stanceSelect.addEventListener('change', (e) => {
      AppState.polarStanceFilter = e.target.value;
      renderPolarChannels();
    });
  }

  const searchInput = document.getElementById('polarSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      AppState.polarSearchQuery = e.target.value.toLowerCase().trim();
      renderPolarChannels();
    });
  }
}

// Switch Active View Tab
function switchTab(tabId) {
  AppState.currentTab = tabId;
  document.querySelectorAll('.nav-tab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-tab') === tabId);
  });

  document.querySelectorAll('.tab-view-content').forEach(view => {
    view.classList.toggle('active', view.id === `tab-${tabId}`);
  });

  // Trigger chart resize if navigating to charts tab
  if (tabId === 'overview' || tabId === 'security') {
    setTimeout(() => {
      Object.values(AppState.charts).forEach(chart => {
        if (chart && typeof chart.resize === 'function') chart.resize();
      });
    }, 100);
  }
}

// Compute Dynamic Filtered Sentiment Index
function getCalculatedMetrics() {
  let baseScore = 71.2; // State baseline net positive
  let volumeMultiplier = 1.0;

  // Gender filter effect
  if (AppState.filters.gender === 'male') {
    baseScore = MIZORAM_DATA.demographics.gender.male.sentimentIndex;
  } else if (AppState.filters.gender === 'female') {
    baseScore = MIZORAM_DATA.demographics.gender.female.sentimentIndex;
  }

  // Age filter effect
  if (AppState.filters.age !== 'all') {
    const ageData = MIZORAM_DATA.demographics.ageGroups[AppState.filters.age];
    if (ageData) {
      baseScore = (baseScore + ageData.netSentiment) / 2;
    }
  }

  // Tribe filter effect
  if (AppState.filters.tribe !== 'all') {
    const tribeData = MIZORAM_DATA.tribes.find(t => t.id === AppState.filters.tribe);
    if (tribeData) {
      baseScore = (baseScore + tribeData.sentimentMetrics.overallNet) / 2;
      volumeMultiplier *= (tribeData.percentage / 50);
    }
  }

  // Source filter effect
  if (AppState.filters.source !== 'all') {
    const src = MIZORAM_DATA.sources.find(s => s.id === AppState.filters.source);
    if (src) {
      volumeMultiplier *= parseFloat(src.share) / 100 * 3.5;
    }
  }

  const totalAnalyzed = Math.round(11460 * volumeMultiplier);
  const positivePct = Math.min(92, Math.max(45, Math.round(baseScore)));
  const criticalPct = Math.round((100 - positivePct) * 0.45);
  const neutralPct = 100 - positivePct - criticalPct;

  return {
    sentimentIndex: baseScore.toFixed(1),
    totalAnalyzed: totalAnalyzed.toLocaleString(),
    positivePct,
    neutralPct,
    criticalPct
  };
}

// Render Top Summary KPI Cards
function renderMetrics() {
  const metrics = getCalculatedMetrics();
  const indexEl = document.getElementById('kpiSentimentIndex');
  const countEl = document.getElementById('kpiTotalAnalyzed');
  const positiveEl = document.getElementById('kpiPositiveRate');
  const criticalEl = document.getElementById('kpiCriticalRate');

  if (indexEl) indexEl.innerText = `${metrics.sentimentIndex}%`;
  if (countEl) countEl.innerText = metrics.totalAnalyzed;
  if (positiveEl) positiveEl.innerText = `${metrics.positivePct}%`;
  if (criticalEl) criticalEl.innerText = `${metrics.criticalPct}%`;

  const statusBadge = document.getElementById('kpiSentimentStatus');
  if (statusBadge) {
    if (metrics.sentimentIndex >= 70) {
      statusBadge.innerText = 'High Positive Trust';
      statusBadge.className = 'kpi-badge badge-positive';
    } else if (metrics.sentimentIndex >= 55) {
      statusBadge.innerText = 'Moderate / Constructive';
      statusBadge.className = 'kpi-badge badge-neutral';
    } else {
      statusBadge.innerText = 'Critical Sentiment';
      statusBadge.className = 'kpi-badge badge-critical';
    }
  }
}

// Apply Filters to all views
function applyFilters() {
  renderMetrics();
  updateCharts();
  renderNarratives();
  renderTribalGrid();
  renderSecurityCards();
  renderFeed();
}

// RENDER CHARTS USING CHART.JS
function renderAllCharts() {
  renderPolarityDonutChart();
  renderAgeGroupChart();
  renderGenderChart();
  renderSourceBreakdownChart();
  renderSecurityRadarChart();
}

function renderPolarityDonutChart() {
  const ctx = document.getElementById('chartPolarityDonut');
  if (!ctx) return;

  const metrics = getCalculatedMetrics();
  AppState.charts.polarity = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['Positive / Favorable', 'Neutral / Informational', 'Critical / Opposing'],
      datasets: [{
        data: [metrics.positivePct, metrics.neutralPct, metrics.criticalPct],
        backgroundColor: ['#10b981', '#06b6d4', '#f43f5e'],
        borderWidth: 2,
        borderColor: '#0f172a',
        hoverOffset: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#94a3b8', font: { family: 'Plus Jakarta Sans', size: 12 }, padding: 14 }
        },
        tooltip: {
          backgroundColor: '#1e293b',
          titleColor: '#f8fafc',
          bodyColor: '#cbd5e1',
          borderColor: '#334155',
          borderWidth: 1,
          padding: 10
        }
      },
      cutout: '68%'
    }
  });
}

function renderAgeGroupChart() {
  const ctx = document.getElementById('chartAgeGroups');
  if (!ctx) return;

  const ages = MIZORAM_DATA.demographics.ageGroups;
  const labels = Object.values(ages).map(a => a.label.split(' (')[0]);
  const sentiments = Object.values(ages).map(a => a.netSentiment);
  const shares = Object.values(ages).map(a => a.share);

  AppState.charts.age = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Favorable Sentiment %',
          data: sentiments,
          backgroundColor: '#06b6d4',
          borderRadius: 6
        },
        {
          label: 'Demographic Share %',
          data: shares,
          backgroundColor: '#8b5cf6',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8', font: { size: 10 } } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' }, max: 100 }
      },
      plugins: {
        legend: { labels: { color: '#94a3b8', font: { size: 11 } } },
        tooltip: { backgroundColor: '#1e293b' }
      }
    }
  });
}

function renderGenderChart() {
  const ctx = document.getElementById('chartGender');
  if (!ctx) return;

  const m = MIZORAM_DATA.demographics.gender.male;
  const f = MIZORAM_DATA.demographics.gender.female;

  AppState.charts.gender = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['Sentiment Index (%)', 'Population Share (%)', 'Sample Posts Analyzed (x100)'],
      datasets: [
        {
          label: 'Male',
          data: [m.sentimentIndex, m.share, Math.round(m.sampleSize / 100)],
          backgroundColor: '#3b82f6',
          borderRadius: 6
        },
        {
          label: 'Female',
          data: [f.sentimentIndex, f.share, Math.round(f.sampleSize / 100)],
          backgroundColor: '#ec4899',
          borderRadius: 6
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { grid: { display: false }, ticks: { color: '#94a3b8' } },
        y: { grid: { color: 'rgba(255,255,255,0.05)' }, ticks: { color: '#94a3b8' }, max: 100 }
      },
      plugins: {
        legend: { labels: { color: '#94a3b8' } },
        tooltip: { backgroundColor: '#1e293b' }
      }
    }
  });
}

function renderSourceBreakdownChart() {
  const ctx = document.getElementById('chartSources');
  if (!ctx) return;

  const labels = MIZORAM_DATA.sources.map(s => s.name);
  const data = MIZORAM_DATA.sources.map(s => parseInt(s.share));
  const colors = MIZORAM_DATA.sources.map(s => s.badgeColor);

  AppState.charts.sources = new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: colors,
        borderWidth: 2,
        borderColor: '#0f172a'
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'right',
          labels: { color: '#94a3b8', boxWidth: 12, font: { size: 10 } }
        },
        tooltip: { backgroundColor: '#1e293b' }
      }
    }
  });
}

function renderSecurityRadarChart() {
  const ctx = document.getElementById('chartSecurityTrust');
  if (!ctx) return;

  const sec = MIZORAM_DATA.securityPerception;

  AppState.charts.security = new Chart(ctx, {
    type: 'radar',
    data: {
      labels: [
        'Mizoram Police',
        'Assam Rifles',
        'Indian Army',
        'State Government'
      ],
      datasets: [
        {
          label: 'Favorable Trust Index (%)',
          data: [sec.mizoramPolice.trustScore, sec.assamRifles.trustScore, sec.indianArmy.trustScore, sec.stateGovt.trustScore],
          backgroundColor: 'rgba(16, 185, 129, 0.25)',
          borderColor: '#10b981',
          pointBackgroundColor: '#10b981',
          borderWidth: 2
        },
        {
          label: 'Youth & Job Aspirants (18-28)',
          data: [sec.mizoramPolice.demographicAffinities["18-28"], sec.assamRifles.demographicAffinities["18-28"], sec.indianArmy.demographicAffinities["18-28"], sec.stateGovt.demographicAffinities["18-28"]],
          backgroundColor: 'rgba(6, 182, 212, 0.2)',
          borderColor: '#06b6d4',
          pointBackgroundColor: '#06b6d4',
          borderWidth: 2
        },
        {
          label: 'Mid-Career & Civic (35-42)',
          data: [sec.mizoramPolice.demographicAffinities["35-42"], sec.assamRifles.demographicAffinities["35-42"], sec.indianArmy.demographicAffinities["35-42"], sec.stateGovt.demographicAffinities["35-42"]],
          backgroundColor: 'rgba(139, 92, 246, 0.2)',
          borderColor: '#8b5cf6',
          pointBackgroundColor: '#8b5cf6',
          borderWidth: 2
        },
        {
          label: 'Traditional Councils (Above 60)',
          data: [sec.mizoramPolice.demographicAffinities.above_60, sec.assamRifles.demographicAffinities.above_60, sec.indianArmy.demographicAffinities.above_60, sec.stateGovt.demographicAffinities.above_60],
          backgroundColor: 'rgba(245, 158, 11, 0.2)',
          borderColor: '#f59e0b',
          pointBackgroundColor: '#f59e0b',
          borderWidth: 2
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          angleLines: { color: 'rgba(255,255,255,0.08)' },
          grid: { color: 'rgba(255,255,255,0.08)' },
          pointLabels: { color: '#cbd5e1', font: { size: 12, weight: 'bold' } },
          ticks: { color: '#64748b', backdropColor: 'transparent', min: 40, max: 100 }
        }
      },
      plugins: {
        legend: { position: 'bottom', labels: { color: '#94a3b8' } }
      }
    }
  });
}

function updateCharts() {
  if (AppState.charts.polarity) {
    const metrics = getCalculatedMetrics();
    AppState.charts.polarity.data.datasets[0].data = [metrics.positivePct, metrics.neutralPct, metrics.criticalPct];
    AppState.charts.polarity.update();
  }
}

// RENDER TOP 10 NARRATIVES FOR SELECTED DATE
function renderNarratives() {
  const container = document.getElementById('narrativesListContainer');
  if (!container) return;

  const dateKey = AppState.filters.date;
  let narratives = MIZORAM_DATA.narrativesByDate[dateKey];

  // If selected date is not in pre-defined set, generate dynamic realistic daily narratives
  if (!narratives || narratives.length === 0) {
    narratives = generateNarrativesForDate(dateKey);
  }

  // Filter narratives if tribe or source selected
  let filtered = narratives.filter(n => {
    if (AppState.filters.tribe !== 'all') {
      const tribe = MIZORAM_DATA.tribes.find(t => t.id === AppState.filters.tribe);
      if (tribe && !n.tribesImpacted.includes(tribe.name.split(' ')[0]) && !n.tribesImpacted.includes('All') && !n.tribesImpacted.includes('All Tribes')) {
        return false;
      }
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <p>No narratives strictly match this tribal/source filter for ${dateKey}. Showing statewide narratives below.</p>
      </div>
    `;
    filtered = narratives;
  }

  container.innerHTML = filtered.map(item => {
    const isCritical = item.sentimentScore < 0;
    const isHighPos = item.sentimentScore >= 70;
    const badgeClass = isHighPos ? 'sentiment-pill-pos' : (isCritical ? 'sentiment-pill-neg' : 'sentiment-pill-neu');

    const platformPills = item.platforms.map(p => `<span class="platform-mini-tag">${p}</span>`).join(' ');

    const quotesHtml = (item.representativeQuotes || []).map(q => `
      <div class="narrative-quote-box">
        <div class="quote-text">"${escapeHtml(q.text)}"</div>
        ${q.translation ? `<div class="quote-trans"><em>English Translation:</em> "${escapeHtml(q.translation)}"</div>` : ''}
        <div class="quote-meta">
          <span>Source: ${escapeHtml(q.source)}</span> &bull; 
          <span>Persona: ${escapeHtml(q.userType)}</span>
        </div>
      </div>
    `).join('');

    return `
      <div class="narrative-card ${isCritical ? 'border-critical' : (isHighPos ? 'border-favorable' : '')}">
        <div class="narrative-header">
          <div class="narrative-rank">#${item.rank}</div>
          <div class="narrative-headline-box">
            <h3 class="narrative-title">${escapeHtml(item.title)}</h3>
            <div class="narrative-meta-strip">
              <span class="reach-tag"><i class="fa-solid fa-chart-line"></i> Reach: ${item.netReach.toLocaleString()}</span>
              <span class="volume-tag"><i class="fa-solid fa-comments"></i> ${item.volume}</span>
              <span class="${badgeClass}">Score: ${item.sentimentScore > 0 ? '+' : ''}${item.sentimentScore} (${item.sentimentLabel})</span>
              <span class="trend-icon ${item.trendingDirection}"><i class="fa-solid fa-arrow-trend-${item.trendingDirection}"></i> Trending</span>
            </div>
          </div>
        </div>

        <p class="narrative-summary">${escapeHtml(item.summary)}</p>

        <div class="narrative-demographics-grid">
          <div class="demo-box">
            <div class="demo-label">Gender Skew</div>
            <div class="demo-bar-wrap">
              <div class="demo-bar-male" style="width: ${item.demographicSkew.gender.male}%" title="Male: ${item.demographicSkew.gender.male}%">M: ${item.demographicSkew.gender.male}%</div>
              <div class="demo-bar-female" style="width: ${item.demographicSkew.gender.female}%" title="Female: ${item.demographicSkew.gender.female}%">F: ${item.demographicSkew.gender.female}%</div>
            </div>
          </div>

          <div class="demo-box">
            <div class="demo-label">Age Distribution</div>
            <div class="age-pills">
              ${Object.entries(item.demographicSkew.age).map(([k, v]) => `
                <span class="age-chip">${k === 'above_60' ? '>60' : k}: <strong>${v}%</strong></span>
              `).join('')}
            </div>
          </div>

          <div class="demo-box">
            <div class="demo-label">Tribes & Communities</div>
            <div class="tribe-pills">
              ${item.tribesImpacted.map(t => `<span class="tribe-mini-tag">${t}</span>`).join(' ')}
            </div>
          </div>

          <div class="demo-box">
            <div class="demo-label">Platforms Active</div>
            <div class="platform-tags">${platformPills}</div>
          </div>
        </div>

        ${quotesHtml ? `<div class="quotes-container">${quotesHtml}</div>` : ''}

        <div class="narrative-footer">
          <div class="takeaway">
            <strong>Key Societal Insight:</strong> ${escapeHtml(item.keyTakeaway)}
          </div>
        </div>
      </div>
    `;
  }).join('');
}

// Dynamic generator for arbitrary dates (if user picks another date on calendar)
function generateNarrativesForDate(dateStr) {
  const seed = dateStr.split('-').reduce((acc, part) => acc + parseInt(part), 0);
  const base = MIZORAM_DATA.narrativesByDate["2026-10-20"];
  return base.map((item, idx) => {
    const shift = ((seed + idx) % 11) - 5;
    return {
      ...item,
      sentimentScore: Math.min(95, Math.max(-65, item.sentimentScore + shift)),
      netReach: item.netReach + (seed * 120) % 8000
    };
  });
}

// RENDER TRIBAL FACTS & FIGURES SECTION
function renderTribalGrid() {
  const container = document.getElementById('tribalGridContainer');
  if (!container) return;

  const tribes = MIZORAM_DATA.tribes;

  container.innerHTML = tribes.map(t => {
    const isSelected = AppState.filters.tribe === t.id;
    return `
      <div class="tribe-card ${isSelected ? 'selected-tribe-highlight' : ''}" id="card-tribe-${t.id}">
        <div class="tribe-card-header">
          <div>
            <h3 class="tribe-name">${escapeHtml(t.name)}</h3>
            <span class="tribe-population-badge">${t.percentage}% of Mizoram (${t.populationEstimate})</span>
          </div>
          <div class="tribe-sentiment-circle">
            <span class="t-score">${t.sentimentMetrics.overallNet}</span>
            <span class="t-sub">Trust</span>
          </div>
        </div>

        <div class="tribe-meta-table">
          <div class="meta-row">
            <span class="m-title"><i class="fa-solid fa-map-location-dot"></i> Stronghold:</span>
            <span class="m-val">${t.primaryRegions.join(', ')}</span>
          </div>
          <div class="meta-row">
            <span class="m-title"><i class="fa-solid fa-language"></i> Language/Dialect:</span>
            <span class="m-val">${escapeHtml(t.language)}</span>
          </div>
          <div class="meta-row">
            <span class="m-title"><i class="fa-solid fa-graduation-cap"></i> Literacy Rate:</span>
            <span class="m-val"><strong>${t.literacyRate}%</strong></span>
          </div>
          <div class="meta-row">
            <span class="m-title"><i class="fa-solid fa-landmark"></i> Governance Council:</span>
            <span class="m-val">${escapeHtml(t.majorCouncil)}</span>
          </div>
        </div>

        <div class="tribe-metrics-bar-section">
          <div class="metric-line">
            <span>State Government Trust</span>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-green" style="width: ${t.sentimentMetrics.stateGovt}%"></div></div>
            <span class="pct">${t.sentimentMetrics.stateGovt}%</span>
          </div>
          <div class="metric-line">
            <span>Mizoram Police Trust</span>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-cyan" style="width: ${t.sentimentMetrics.mizoramPolice}%"></div></div>
            <span class="pct">${t.sentimentMetrics.mizoramPolice}%</span>
          </div>
          <div class="metric-line">
            <span>Assam Rifles Perception</span>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-amber" style="width: ${t.sentimentMetrics.assamRifles}%"></div></div>
            <span class="pct">${t.sentimentMetrics.assamRifles}%</span>
          </div>
          <div class="metric-line">
            <span>Indian Army Regard</span>
            <div class="prog-bar-bg"><div class="prog-bar-fill fill-purple" style="width: ${t.sentimentMetrics.indianArmy}%"></div></div>
            <span class="pct">${t.sentimentMetrics.indianArmy}%</span>
          </div>
        </div>

        <div class="tribe-concerns-box">
          <div class="concerns-title"><i class="fa-solid fa-bullhorn"></i> Primary Public Issues & Topics:</div>
          <ul class="concerns-list">
            ${t.keyConcerns.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
          </ul>
        </div>

        <p class="tribe-cultural-notes">${escapeHtml(t.culturalFacts)}</p>
      </div>
    `;
  }).join('');
}

// RENDER SECURITY FORCES & GOVERNANCE CARDS
function renderSecurityCards() {
  const container = document.getElementById('securityCardsContainer');
  if (!container) return;

  const sec = MIZORAM_DATA.securityPerception;
  const list = [
    { key: 'assamRifles', data: sec.assamRifles, icon: 'fa-shield-halved', color: '#f59e0b' },
    { key: 'mizoramPolice', data: sec.mizoramPolice, icon: 'fa-user-shield', color: '#10b981' },
    { key: 'indianArmy', data: sec.indianArmy, icon: 'fa-medal', color: '#8b5cf6' },
    { key: 'stateGovt', data: sec.stateGovt, icon: 'fa-landmark-flag', color: '#06b6d4' }
  ];

  container.innerHTML = list.map(item => {
    const d = item.data;
    return `
      <div class="security-card">
        <div class="sec-card-header">
          <div class="sec-icon-circle" style="background: ${item.color}22; color: ${item.color};">
            <i class="fa-solid ${item.icon}"></i>
          </div>
          <div>
            <h3 class="sec-title">${escapeHtml(d.name)}</h3>
            <span class="sec-badge">${escapeHtml(d.badge)}</span>
          </div>
          <div class="sec-score-box">
            <div class="score-val" style="color: ${item.color}">${d.trustScore}%</div>
            <div class="score-sub">Net Trust</div>
          </div>
        </div>

        <div class="sec-distribution-bar">
          <div class="bar-pos" style="width: ${d.favorablePercent}%" title="Favorable: ${d.favorablePercent}%">${d.favorablePercent}% Fav</div>
          <div class="bar-neu" style="width: ${d.neutralPercent}%" title="Neutral: ${d.neutralPercent}%">${d.neutralPercent}%</div>
          <div class="bar-crit" style="width: ${d.criticalPercent}%" title="Critical: ${d.criticalPercent}%">${d.criticalPercent}%</div>
        </div>

        <div class="sec-breakdown-grid">
          <div class="factors-col">
            <h4 class="factors-heading text-pos"><i class="fa-solid fa-circle-check"></i> Positive Drivers & Merits</h4>
            <ul class="factors-list">
              ${d.keyPositiveFactors.map(f => `<li>${escapeHtml(f)}</li>`).join('')}
            </ul>
          </div>
          <div class="factors-col">
            <h4 class="factors-heading text-crit"><i class="fa-solid fa-triangle-exclamation"></i> Citizen Concerns & Deliberations</h4>
            <ul class="factors-list">
              ${d.keyConcerns.map(c => `<li>${escapeHtml(c)}</li>`).join('')}
            </ul>
          </div>
        </div>

        <div class="demographic-strip">
          <div class="d-chip">Male: <strong>${d.demographicAffinities.male}%</strong></div>
          <div class="d-chip">Female: <strong>${d.demographicAffinities.female}%</strong></div>
          <div class="d-chip">10-18: <strong>${d.demographicAffinities["10-18"] || 76}%</strong></div>
          <div class="d-chip">18-28: <strong>${d.demographicAffinities["18-28"] || 73}%</strong></div>
          <div class="d-chip">29-35: <strong>${d.demographicAffinities["29-35"] || 76}%</strong></div>
          <div class="d-chip">35-42: <strong>${d.demographicAffinities["35-42"] || 78}%</strong></div>
          <div class="d-chip">43-50: <strong>${d.demographicAffinities["43-50"] || 80}%</strong></div>
          <div class="d-chip">51-60: <strong>${d.demographicAffinities["51-60"] || 82}%</strong></div>
          <div class="d-chip">Above 60: <strong>${d.demographicAffinities.above_60 || 84}%</strong></div>
        </div>
      </div>
    `;
  }).join('');
}

// RENDER PUBLIC PULSE QUESTIONS & HANDLE VOTES
function renderSurveyQuestions() {
  const container = document.getElementById('surveyQuestionsContainer');
  if (!container) return;

  const questions = MIZORAM_DATA.surveyQuestions;

  container.innerHTML = questions.map(q => {
    const state = AppState.surveyState[q.id];
    const userVote = state ? state.userVoted : null;

    const optionsHtml = state.options.map((opt, optIdx) => {
      const isChecked = userVote === optIdx;
      return `
        <div class="survey-option-item ${isChecked ? 'survey-option-selected' : ''}" onclick="submitSurveyVote('${q.id}', ${optIdx})">
          <div class="option-check-circle">
            ${isChecked ? '<i class="fa-solid fa-check"></i>' : ''}
          </div>
          <div class="option-content">
            <div class="option-text">${escapeHtml(opt.text)}</div>
            <div class="option-bar-container">
              <div class="option-bar-fill" style="width: ${opt.percentage}%"></div>
            </div>
          </div>
          <div class="option-percentage">${opt.percentage}%</div>
        </div>
      `;
    }).join('');

    return `
      <div class="survey-question-card" id="sq-${q.id}">
        <div class="sq-header">
          <span class="sq-category"><i class="fa-solid fa-tag"></i> ${escapeHtml(q.category)}</span>
          <span class="sq-votes-count"><i class="fa-solid fa-users"></i> ${state.totalVotes.toLocaleString()} responses</span>
        </div>
        <h4 class="sq-title">${escapeHtml(q.question)}</h4>
        <div class="sq-options-list">${optionsHtml}</div>
        <div class="sq-insight">
          <i class="fa-solid fa-chart-pie"></i> <em>Demographic Finding:</em> ${escapeHtml(q.demographicInsight)}
        </div>
      </div>
    `;
  }).join('');
}

// User Interactive Vote on Public Survey
function submitSurveyVote(questionId, optionIndex) {
  const state = AppState.surveyState[questionId];
  if (!state) return;

  if (state.userVoted === optionIndex) {
    // Un-vote
    state.options[optionIndex].votes -= 1;
    state.totalVotes -= 1;
    state.userVoted = null;
  } else {
    // If previously voted for another, decrement
    if (state.userVoted !== null) {
      state.options[state.userVoted].votes -= 1;
      state.totalVotes -= 1;
    }
    state.options[optionIndex].votes += 1;
    state.totalVotes += 1;
    state.userVoted = optionIndex;
  }

  // Recalculate percentages
  state.options.forEach(opt => {
    opt.percentage = parseFloat(((opt.votes / state.totalVotes) * 100).toFixed(1));
  });

  renderSurveyQuestions();
  showToast('Your sentiment vote has been added to the Mizoram Public Pulse database.');
}

// LIVE SENTIMENT ANALYZER PLAYGROUND (Mizo & English NLP Lexicon Engine)
function runTextAnalysis() {
  const inputEl = document.getElementById('textAnalyzerInput');
  const resultsEl = document.getElementById('textAnalyzerResults');
  if (!inputEl || !resultsEl) return;

  const rawText = inputEl.value.trim();
  if (!rawText) {
    showToast('Please type or paste some text, news snippet, or comment to analyze.');
    return;
  }

  const analysis = analyzeSentimentNLP(rawText);
  displayAnalysisResults(analysis, rawText);
}

// Built-in Bilingual NLP Sentiment Classification Function
function analyzeSentimentNLP(text) {
  const lower = text.toLowerCase();

  // Mizo & English Positives
  const positiveLexicon = [
    'fakawm', 'lawmawm', 'tha', 'ropui', 'hmasawnna', 'muanna', 'tluang', 'tanpui', 'venghim', 'hlim',
    'chawisang', 'inremna', 'duhawm', 'hnehsawh', 'hlimawm', 'lawm', 'fel', 'huaisen', 'inlungrual',
    'great', 'good', 'excellent', 'praise', 'commend', 'helpful', 'peaceful', 'progress', 'honor',
    'safe', 'relieve', 'support', 'development', 'superb', 'proud', 'brave', 'transparent', 'speedy',
    'applaud', 'victory', 'friend', 'relief', 'blessing', 'historic', 'welcome', 'congratulations'
  ];

  // Mizo & English Negatives
  const negativeLexicon = [
    'lungawi lo', 'buaina', 'chhe', 'chhia', 'hlauhawm', 'thil sual', 'ruihhlo', 'harsa', 'tlai',
    'vau', 'thenhrang', 'diklo', 'tichhe', 'hrehawm', 'tuar', 'fencing', 'barbed wire', 'scrap fmr',
    'poor', 'bad', 'corrupt', 'delay', 'danger', 'crime', 'scam', 'suffer', 'fail', 'protest',
    'oppose', 'angry', 'terrible', 'pathetic', 'struggle', 'neglect', 'smuggle', 'cartel', 'crisis'
  ];

  let posCount = 0;
  let negCount = 0;

  positiveLexicon.forEach(word => {
    const reg = new RegExp('\\b' + word + '\\b', 'gi');
    const matches = lower.match(reg);
    if (matches) posCount += matches.length * 1.5;
  });

  negativeLexicon.forEach(word => {
    const reg = new RegExp('\\b' + word + '\\b', 'gi');
    const matches = lower.match(reg);
    if (matches) negCount += matches.length * 1.8;
  });

  // Calculate sentiment score from -100 to +100
  let score = 0;
  if (posCount === 0 && negCount === 0) {
    score = 10; // Neutral slight positive default
  } else {
    score = Math.round(((posCount - negCount) / (posCount + negCount)) * 100);
  }

  // Detect entities
  const entities = [];
  if (/assam rifles|ar|23 sector|zokhawsang|fmr|free movement regime/i.test(text)) {
    entities.push({ name: 'Assam Rifles', badge: 'Border Force' });
  }
  if (/police|mizoram police|cid|traffic|check gate|vairengte/i.test(text)) {
    entities.push({ name: 'Mizoram Police', badge: 'Law Enforcement' });
  }
  if (/army|indian army|eastern command|agniveer|sipai/i.test(text)) {
    entities.push({ name: 'Indian Army', badge: 'National Defense' });
  }
  if (/state govt|sawrkar|chief minister|cm|lalduhoma|zpm|assembly|cabinet|pwd|dipr/i.test(text)) {
    entities.push({ name: 'State Government', badge: 'Governance' });
  }
  if (/cyma|yma|mzp|msu|synod|kohhran/i.test(text)) {
    entities.push({ name: 'Civil Society / Church', badge: 'Community NGO' });
  }
  if (/lai|mara|chakma|hmar|bru|reang|lushai|paite|cadc|ladc|madc/i.test(text)) {
    entities.push({ name: 'Tribal / ADC Body', badge: 'Cultural Council' });
  }

  // Demographic Inference for the 7 Tiers
  let ageGuess = '35-42 (Mid-Career & Civic)';
  let genderGuess = 'Balanced (Male & Female)';
  if (/school|naupang|subroto|hsslc|board exam|gaming|teen/i.test(lower)) {
    ageGuess = '10-18 (Adolescents & School Teens)';
  } else if (/thalaite|student|college|university|mzu|agniveer|football|mzp|msu|reel/i.test(lower)) {
    ageGuess = '18-28 (College & Youth Aspirants)';
  } else if (/mpsc|upsc|startup|office|interview|it park|salary|housing/i.test(lower)) {
    ageGuess = '29-35 (Young Professionals)';
  } else if (/nupa|chhungkua|school fees|traffic|village council|yma branch/i.test(lower)) {
    ageGuess = '35-42 (Mid-Career & Parents)';
  } else if (/lo nei|farmer|ginger|turmeric|chili|msp|pwd|nh-306/i.test(lower)) {
    ageGuess = '43-50 (Established Workforce & Farmers)';
  } else if (/deacon|prohibition|chhanghlan|senior|subdivision/i.test(lower)) {
    ageGuess = '51-60 (Senior Workforce & Deacons)';
  } else if (/kohhran upa|church elder|pi leh pu|traditional|pension|history|kum upa/i.test(lower)) {
    ageGuess = 'Above 60 (Elders & Traditional Councils)';
  }

  if (/nu|female|women|girl|mother|chhungkua|puan|weaving/i.test(lower)) {
    genderGuess = 'Female Skewed (approx 65%)';
  } else if (/pa|male|soldier|footballer|lorry|driver|hunting/i.test(lower)) {
    genderGuess = 'Male Skewed (approx 62%)';
  }

  // Sentiment classification
  let label = 'Neutral / Informational';
  let color = '#06b6d4';
  if (score >= 35) {
    label = 'Positive / Favorable';
    color = '#10b981';
  } else if (score <= -25) {
    label = 'Critical / Opposing';
    color = '#f43f5e';
  }

  return {
    score,
    label,
    color,
    posCount,
    negCount,
    entities,
    demographics: {
      age: ageGuess,
      gender: genderGuess
    }
  };
}

function displayAnalysisResults(res, originalText) {
  const container = document.getElementById('textAnalyzerResults');
  if (!container) return;

  const entityTags = res.entities.length > 0
    ? res.entities.map(e => `<span class="tag-entity">${e.name} (${e.badge})</span>`).join(' ')
    : '<span class="tag-entity-none">No specific institutional entities flagged</span>';

  container.innerHTML = `
    <div class="result-card" style="border-left: 4px solid ${res.color};">
      <div class="result-header">
        <div class="result-badge" style="background: ${res.color}22; color: ${res.color};">
          <i class="fa-solid fa-fingerprint"></i> ${res.label}
        </div>
        <div class="result-score" style="color: ${res.color};">
          Score: ${res.score > 0 ? '+' : ''}${res.score} / 100
        </div>
      </div>

      <div class="analysis-meta-grid">
        <div class="a-box">
          <div class="a-label">Detected Entities:</div>
          <div class="a-val">${entityTags}</div>
        </div>
        <div class="a-box">
          <div class="a-label">Inferred Dominant Age:</div>
          <div class="a-val"><strong>${res.demographics.age}</strong></div>
        </div>
        <div class="a-box">
          <div class="a-label">Inferred Gender Skew:</div>
          <div class="a-val"><strong>${res.demographics.gender}</strong></div>
        </div>
        <div class="a-box">
          <div class="a-label">Lexicon Signal Tokens:</div>
          <div class="a-val">Positive hits: <strong class="text-pos">${res.posCount}</strong> | Critical hits: <strong class="text-crit">${res.negCount}</strong></div>
        </div>
      </div>

      <div class="result-actions">
        <button class="btn-primary-action" onclick="addCustomPostToFeed('${encodeURIComponent(originalText)}', ${res.score}, '${res.label}')">
          <i class="fa-solid fa-plus-circle"></i> Inject into Live Intelligence Stream
        </button>
      </div>
    </div>
  `;
}

// User can inject their analyzed text directly into live feed
function addCustomPostToFeed(encodedText, score, label) {
  const text = decodeURIComponent(encodedText);
  const newPost = {
    id: 'post_custom_' + Date.now(),
    platform: 'Live User Submission / Playground',
    sourceId: 'live_user',
    author: 'Anonymous Citizen Pulse',
    authorRole: 'Live User Analyzed Post',
    timestamp: 'Just now',
    text: text,
    sentiment: label,
    sentimentScore: score / 100,
    genderInference: 'Crowdsourced',
    ageInference: 'All Ages',
    entities: ['User Ingested'],
    tribeFocus: 'Statewide'
  };

  AppState.customFeed.unshift(newPost);
  renderFeed();
  switchTab('feed');
  showToast('Injected into Live Intelligence Feed! View it on the Source Feed tab.');
}

// RENDER REAL-TIME STREAM FEED
function renderFeed() {
  const container = document.getElementById('liveFeedContainer');
  if (!container) return;

  const combined = [...AppState.customFeed, ...MIZORAM_DATA.liveStreamPosts];

  let filtered = combined.filter(post => {
    if (AppState.filters.source !== 'all' && post.sourceId !== AppState.filters.source && post.sourceId !== 'live_user') {
      return false;
    }
    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = '<div class="empty-state">No feed items for this source.</div>';
    return;
  }

  container.innerHTML = filtered.map(item => {
    const isPos = item.sentimentScore > 0.3;
    const isCrit = item.sentimentScore < -0.2;
    const badgeColor = isPos ? 'feed-badge-pos' : (isCrit ? 'feed-badge-neg' : 'feed-badge-neu');

    return `
      <div class="feed-post-card">
        <div class="feed-post-top">
          <div class="author-info">
            <span class="author-name">${escapeHtml(item.author)}</span>
            <span class="author-role">${escapeHtml(item.authorRole)}</span>
            <span class="platform-chip">${escapeHtml(item.platform)}</span>
          </div>
          <div class="feed-right">
            <span class="${badgeColor}">${escapeHtml(item.sentiment)}</span>
            <span class="time-ago">${item.timestamp}</span>
          </div>
        </div>

        <p class="feed-text">${escapeHtml(item.text)}</p>

        <div class="feed-footer-tags">
          <span><i class="fa-solid fa-users"></i> Inferred: ${escapeHtml(item.genderInference)} | ${escapeHtml(item.ageInference)}</span>
          <span><i class="fa-solid fa-location-crosshairs"></i> ${escapeHtml(item.tribeFocus)}</span>
          ${item.entities.map(e => `<span class="feed-entity-chip">${e}</span>`).join(' ')}
        </div>
      </div>
    `;
  }).join('');
}

// EXPORT FUNCTIONS
function exportDataAsJson() {
  const dataExport = {
    exportDate: new Date().toISOString(),
    state: "Mizoram",
    activeFilters: AppState.filters,
    calculatedMetrics: getCalculatedMetrics(),
    securityPerception: MIZORAM_DATA.securityPerception,
    tribalFacts: MIZORAM_DATA.tribes,
    topNarrativesForDate: MIZORAM_DATA.narrativesByDate[AppState.filters.date] || generateNarrativesForDate(AppState.filters.date)
  };

  const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(dataExport, null, 2));
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", dataStr);
  dlAnchor.setAttribute("download", `mizoram_sentiment_intelligence_${AppState.filters.date}.json`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showToast('JSON Export downloaded successfully.');
}

function exportNarrativesAsCsv() {
  const narratives = MIZORAM_DATA.narrativesByDate[AppState.filters.date] || generateNarrativesForDate(AppState.filters.date);
  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "Rank,Headline,Sentiment Score,Classification,Net Reach,Platforms,Male Skew %,Female Skew %,10-18 %,18-28 %,29-35 %,35-42 %,43-50 %,51-60 %,Above 60 %\n";

  narratives.forEach(n => {
    const age = n.demographicSkew.age || {};
    const row = [
      n.rank,
      `"${n.title.replace(/"/g, '""')}"`,
      n.sentimentScore,
      `"${n.sentimentLabel}"`,
      n.netReach,
      `"${n.platforms.join('; ')}"`,
      n.demographicSkew.gender.male,
      n.demographicSkew.gender.female,
      age["10-18"] || 10,
      age["18-28"] || 24,
      age["29-35"] || 18,
      age["35-42"] || 16,
      age["43-50"] || 14,
      age["51-60"] || 10,
      age["above_60"] || age["60+"] || 8
    ].join(",");
    csvContent += row + "\n";
  });

  const encodedUri = encodeURI(csvContent);
  const dlAnchor = document.createElement('a');
  dlAnchor.setAttribute("href", encodedUri);
  dlAnchor.setAttribute("download", `mizoram_top10_narratives_${AppState.filters.date}.csv`);
  document.body.appendChild(dlAnchor);
  dlAnchor.click();
  dlAnchor.remove();
  showToast('CSV Export downloaded successfully.');
}

// RENDER POLAR CHANNELS & HANDLES RADAR
function renderPolarChannels() {
  const container = document.getElementById('polarChannelsContainer');
  if (!container) return;

  const list = MIZORAM_DATA.polarChannels || [];

  let filtered = list.filter(item => {
    // Platform filter
    if (AppState.polarPlatformFilter !== 'all' && item.platform !== AppState.polarPlatformFilter) {
      return false;
    }

    // Stance filter
    if (AppState.polarStanceFilter !== 'all' && item.stancePolarity !== AppState.polarStanceFilter) {
      return false;
    }

    // Search query
    if (AppState.polarSearchQuery) {
      const q = AppState.polarSearchQuery;
      const match = item.name.toLowerCase().includes(q) ||
                    item.handle.toLowerCase().includes(q) ||
                    item.polarStance.toLowerCase().includes(q) ||
                    item.polarSummary.toLowerCase().includes(q) ||
                    item.keyThemes.some(t => t.toLowerCase().includes(q));
      if (!match) return false;
    }

    return true;
  });

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <i class="fa-solid fa-satellite-dish"></i>
        <p>No social channels match your selected platform, polar stance, or search query.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(ch => {
    // Badge color mapping
    let stanceBadgeClass = 'stance-badge-neutral';
    if (ch.stancePolarity === 'anti-fencing' || ch.stancePolarity === 'mizo-nationalist') {
      stanceBadgeClass = 'stance-badge-orange';
    } else if (ch.stancePolarity === 'pro-fencing') {
      stanceBadgeClass = 'stance-badge-blue';
    } else if (ch.stancePolarity === 'ruling-govt') {
      stanceBadgeClass = 'stance-badge-green';
    } else if (ch.stancePolarity === 'opposition-mnf') {
      stanceBadgeClass = 'stance-badge-purple';
    } else if (ch.stancePolarity === 'minority-rights') {
      stanceBadgeClass = 'stance-badge-amber';
    } else if (ch.stancePolarity === 'reformist') {
      stanceBadgeClass = 'stance-badge-cyan';
    }

    const themesHtml = ch.keyThemes.map(t => `<span class="polar-theme-tag">${escapeHtml(t)}</span>`).join(' ');

    return `
      <div class="polar-channel-card">
        <div class="polar-card-top">
          <div class="channel-identity">
            <span class="platform-icon"><i class="${ch.platformIcon}"></i></span>
            <div>
              <h4 class="channel-name">${escapeHtml(ch.name)}</h4>
              <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="channel-handle-link" title="Open ${ch.handle} directly">
                ${escapeHtml(ch.handle)} <i class="fa-solid fa-arrow-up-right-from-square"></i>
              </a>
            </div>
          </div>
          <div class="channel-stats">
            <span class="stat-badge"><i class="fa-solid fa-users"></i> ${ch.subscribers}</span>
            <span class="channel-platform-pill">${escapeHtml(ch.platform)}</span>
          </div>
        </div>

        <div class="stance-banner-row">
          <span class="stance-pill ${stanceBadgeClass}"><i class="fa-solid fa-scale-balanced"></i> ${escapeHtml(ch.polarStance)}</span>
          <span class="category-chip">${escapeHtml(ch.category)}</span>
        </div>

        <p class="polar-summary-text">${escapeHtml(ch.polarSummary)}</p>

        <div class="polar-themes-box">
          <span class="themes-label">Core Agendas & Deliberations:</span>
          <div class="themes-pills-row">${themesHtml}</div>
        </div>

        <div class="polar-card-footer">
          <button class="btn-channel-sample" onclick="testChannelInPlayground('${encodeURIComponent(ch.name + ': ' + ch.polarSummary)}')">
            <i class="fa-solid fa-flask"></i> Analyze Stance in Playground
          </button>
          <a href="${ch.url}" target="_blank" rel="noopener noreferrer" class="btn-channel-visit">
            <i class="fa-solid fa-arrow-up-right-from-square"></i> View Source
          </a>
        </div>
      </div>
    `;
  }).join('');
}

// User can send a polar channel stance to the sentiment analyzer playground
function testChannelInPlayground(encodedText) {
  const text = decodeURIComponent(encodedText);
  const inputEl = document.getElementById('textAnalyzerInput');
  if (inputEl) {
    inputEl.value = text;
    switchTab('playground');
    runTextAnalysis();
    showToast('Polar narrative loaded into Sentiment Playground!');
  }
}

// UI Notification Toast
function showToast(message) {
  let toast = document.getElementById('globalToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'globalToast';
    toast.className = 'global-toast';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${escapeHtml(message)}`;
  toast.classList.add('show');

  setTimeout(() => {
    toast.classList.remove('show');
  }, 3200);
}

// Utility: Escape HTML for security
function escapeHtml(text) {
  if (!text) return '';
  return String(text)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
