// Portfolio Dashboard - Main Application

// Constants
const TARGET_EMERGENCY_FUND = 60000;
const MONTHLY_SURPLUS = 943; // From 2025 data
const SAVINGS_RATE = 19.7;
const EXCHANGE_RATES = {
    UAH: 44,    // UAH per EUR
    USD: 0.937  // EUR per USD
};

// S&P 500 Trigger Levels (from ATH of 6900)
const TRIGGERS = {
    base: 6900,
    level15: 5865,  // -15%
    level25: 5175,  // -25%
    level40: 4140   // -40%
};

// Initialize dashboard
document.addEventListener('DOMContentLoaded', async () => {
    try {
        const data = await loadCSVData();
        if (data) {
            renderDashboard(data);
            setupTriggerCalculator();
        }
    } catch (error) {
        console.error('Failed to load dashboard:', error);
        showError('Failed to load data. Make sure CSV files exist.');
    }
});

// Load CSV data
async function loadCSVData() {
    const csvPath = '../data/cash_reserves.csv';

    try {
        const response = await fetch(csvPath);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }
        const csvText = await response.text();

        const result = Papa.parse(csvText, {
            header: true,
            skipEmptyLines: true,
            transformHeader: (header) => header.trim()
        });

        return result.data;
    } catch (error) {
        console.error('Error loading CSV:', error);
        throw error;
    }
}

// Render dashboard with data
function renderDashboard(accounts) {
    // Calculate totals by currency
    const totals = calculateTotals(accounts);

    // Update last updated date
    const lastDate = accounts[0]?.last_updated || 'Unknown';
    document.getElementById('lastUpdated').textContent = formatDate(lastDate);

    // Update progress bar
    updateProgressBar(totals.eur);

    // Update metrics
    updateMetrics(totals, accounts);

    // Render accounts chart
    renderAccountsChart(accounts);

    // Render accounts table
    renderAccountsTable(accounts);
}

// Calculate totals by currency
function calculateTotals(accounts) {
    let eur = 0;
    let usd = 0;
    let uah = 0;
    let interestEur = 0;

    accounts.forEach(account => {
        const amount = parseFloat(account.amount) || 0;
        const rate = parseFloat(account.interest_rate) || 0;

        switch (account.currency) {
            case 'EUR':
                eur += amount;
                interestEur += amount * (rate / 100);
                break;
            case 'USD':
                usd += amount;
                interestEur += (amount * EXCHANGE_RATES.USD) * (rate / 100);
                break;
            case 'UAH':
                uah += amount;
                break;
        }
    });

    // Convert to EUR equivalent
    const usdInEur = usd * EXCHANGE_RATES.USD;
    const uahInEur = uah / EXCHANGE_RATES.UAH;
    const total = eur + usdInEur + uahInEur;

    return {
        eur,
        usd,
        uah,
        usdInEur,
        uahInEur,
        total,
        interestEur
    };
}

// Update progress bar
function updateProgressBar(eurAmount) {
    const percent = Math.min((eurAmount / TARGET_EMERGENCY_FUND) * 100, 100);
    const remaining = TARGET_EMERGENCY_FUND - eurAmount;
    const monthsToGoal = remaining > 0 ? Math.ceil(remaining / MONTHLY_SURPLUS) : 0;

    document.getElementById('progressFill').style.width = `${percent}%`;
    document.getElementById('currentAmount').textContent = formatCurrency(eurAmount);
    document.getElementById('progressPercent').textContent = `${percent.toFixed(0)}%`;
    document.getElementById('monthsToGoal').textContent = `~${monthsToGoal}`;
}

// Update metrics cards
function updateMetrics(totals, accounts) {
    // Total reserves
    document.getElementById('totalReserves').textContent = formatCurrency(totals.total);

    const eurPct = ((totals.eur / totals.total) * 100).toFixed(0);
    const usdPct = ((totals.usdInEur / totals.total) * 100).toFixed(0);
    const uahPct = ((totals.uahInEur / totals.total) * 100).toFixed(0);
    document.getElementById('reservesBreakdown').textContent =
        `EUR ${eurPct}% | USD ${usdPct}% | UAH ${uahPct}%`;

    // Monthly surplus
    document.getElementById('monthlySurplus').textContent = formatCurrency(MONTHLY_SURPLUS);
    document.getElementById('savingsRate').textContent = `${SAVINGS_RATE}% savings rate`;

    // Interest income
    document.getElementById('interestIncome').textContent = formatCurrency(totals.interestEur);
}

// Render accounts pie chart
function renderAccountsChart(accounts) {
    const ctx = document.getElementById('accountsChart').getContext('2d');

    // Group by type for cleaner visualization
    const grouped = {};
    accounts.forEach(account => {
        const amount = parseFloat(account.amount) || 0;
        let eurAmount = amount;

        if (account.currency === 'USD') {
            eurAmount = amount * EXCHANGE_RATES.USD;
        } else if (account.currency === 'UAH') {
            eurAmount = amount / EXCHANGE_RATES.UAH;
        }

        const type = account.bank_type || 'Other';
        grouped[type] = (grouped[type] || 0) + eurAmount;
    });

    const labels = Object.keys(grouped);
    const data = Object.values(grouped);

    const colors = [
        '#3fb950', // Green
        '#58a6ff', // Blue
        '#d29922', // Yellow
        '#f85149', // Red
        '#a371f7', // Purple
        '#8b949e', // Gray
        '#39d353', // Light green
        '#79c0ff'  // Light blue
    ];

    new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels,
            datasets: [{
                data: data,
                backgroundColor: colors.slice(0, labels.length),
                borderColor: '#21262d',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'right',
                    labels: {
                        color: '#8b949e',
                        padding: 12,
                        font: {
                            size: 12
                        },
                        generateLabels: function(chart) {
                            const data = chart.data;
                            const total = data.datasets[0].data.reduce((a, b) => a + b, 0);
                            return data.labels.map((label, i) => {
                                const value = data.datasets[0].data[i];
                                const pct = ((value / total) * 100).toFixed(0);
                                return {
                                    text: `${label}: ${pct}%`,
                                    fillStyle: data.datasets[0].backgroundColor[i],
                                    hidden: false,
                                    index: i
                                };
                            });
                        }
                    }
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const value = context.raw;
                            return ` ${formatCurrency(value)}`;
                        }
                    }
                }
            }
        }
    });
}

// Render accounts table
function renderAccountsTable(accounts) {
    const tbody = document.getElementById('accountsBody');
    tbody.innerHTML = '';

    // Sort by amount (EUR equivalent) descending
    const sorted = [...accounts].sort((a, b) => {
        const aAmount = getEurEquivalent(a);
        const bAmount = getEurEquivalent(b);
        return bAmount - aAmount;
    });

    sorted.forEach(account => {
        const row = document.createElement('tr');
        const amount = parseFloat(account.amount) || 0;
        const rate = parseFloat(account.interest_rate) || 0;

        let amountClass = 'amount-eur';
        let amountDisplay = formatCurrency(amount);

        if (account.currency === 'USD') {
            amountClass = 'amount-usd';
            amountDisplay = `$${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
        } else if (account.currency === 'UAH') {
            amountClass = 'amount-uah';
            amountDisplay = `${amount.toLocaleString('uk-UA', { minimumFractionDigits: 2 })} UAH`;
        }

        const rateClass = rate > 0 ? 'rate-positive' : 'rate-zero';
        const rateDisplay = rate > 0 ? `${rate.toFixed(2)}%` : '-';

        row.innerHTML = `
            <td>${account.account_name}</td>
            <td>${account.account_holder}</td>
            <td class="${amountClass}">${amountDisplay}</td>
            <td>${account.currency}</td>
            <td class="${rateClass}">${rateDisplay}</td>
        `;

        tbody.appendChild(row);
    });
}

// Setup crisis trigger calculator
function setupTriggerCalculator() {
    const input = document.getElementById('sp500Input');
    input.addEventListener('input', updateTriggers);
    updateTriggers(); // Initial calculation
}

// Update trigger visualizations
function updateTriggers() {
    const current = parseFloat(document.getElementById('sp500Input').value) || TRIGGERS.base;

    // Calculate how close we are to each trigger
    // 100% = at trigger level, 0% = at base (6900)
    const calcProgress = (trigger) => {
        if (current <= trigger) return 100;
        const distance = TRIGGERS.base - trigger;
        const traveled = TRIGGERS.base - current;
        return Math.max(0, (traveled / distance) * 100);
    };

    const progress15 = calcProgress(TRIGGERS.level15);
    const progress25 = calcProgress(TRIGGERS.level25);
    const progress40 = calcProgress(TRIGGERS.level40);

    document.getElementById('trigger15').style.width = `${progress15}%`;
    document.getElementById('trigger25').style.width = `${progress25}%`;
    document.getElementById('trigger40').style.width = `${progress40}%`;

    // Update colors based on progress
    updateTriggerColor('trigger15', progress15);
    updateTriggerColor('trigger25', progress25);
    updateTriggerColor('trigger40', progress40);

    // Update status
    let status = 'Phase: Pre-Crisis';
    let statusColor = '#3fb950';

    if (current <= TRIGGERS.level40) {
        status = 'PHASE 3: CRISIS - Deploy €7,800+';
        statusColor = '#f85149';
    } else if (current <= TRIGGERS.level25) {
        status = 'Phase 2B: Severe Correction - Prepare deployment';
        statusColor = '#ff7b72';
    } else if (current <= TRIGGERS.level15) {
        status = 'Phase 2: Correction - Increase DCA to €200-400';
        statusColor = '#d29922';
    }

    const statusEl = document.getElementById('triggerStatus');
    statusEl.textContent = status;
    statusEl.style.color = statusColor;
}

function updateTriggerColor(id, progress) {
    const el = document.getElementById(id);
    if (progress >= 100) {
        el.style.backgroundColor = '#f85149';
    } else if (progress >= 50) {
        el.style.backgroundColor = '#d29922';
    } else {
        el.style.backgroundColor = '#3fb950';
    }
}

// Helper functions
function getEurEquivalent(account) {
    const amount = parseFloat(account.amount) || 0;
    switch (account.currency) {
        case 'USD': return amount * EXCHANGE_RATES.USD;
        case 'UAH': return amount / EXCHANGE_RATES.UAH;
        default: return amount;
    }
}

function formatCurrency(amount) {
    return `€${amount.toLocaleString('de-DE', {
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    })}`;
}

function formatDate(dateStr) {
    if (!dateStr) return 'Unknown';
    try {
        const date = new Date(dateStr);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    } catch {
        return dateStr;
    }
}

function showError(message) {
    const container = document.querySelector('.container');
    container.innerHTML = `
        <div class="error">
            <h2>Error Loading Dashboard</h2>
            <p>${message}</p>
            <p>Please check that the data files exist and the page is served from a web server.</p>
        </div>
    `;
}
