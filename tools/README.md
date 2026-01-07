# 🛠️ Portfolio Tools Directory

This folder contains calculators, scripts, and automation tools for portfolio management.

---

## 📁 Available Tools

### Excel VBA Rebalancing Calculator
**Status:** To be added
**Purpose:** Automatically calculate exact rebalancing amounts

**Features:**
- Input target allocation percentages
- Input current portfolio value
- Get exact EUR amounts to buy for each ticker
- Handles over-allocated assets (minimum €1)
- Always sums to exact investment amount

---

## 🤖 Future Automation Ideas

### 1. Market Data Fetcher (Python)
**Purpose:** Auto-fetch current market indicators

**Features:**
- Pull S&P 500 current price
- Get CAPE ratio from Shiller data
- Fetch gold and Bitcoin prices
- Calculate distance to trigger points
- Update `market_indicators.csv` automatically

**Tech Stack:** Python + yfinance / requests

---

### 2. Crisis Alert System
**Purpose:** Notify when S&P hits trigger points

**Trigger Levels:**
- -15% → Email alert "Enter Phase 2"
- -25% → Email alert "Prepare deployment"
- -40% → Email alert "CRISIS - Execute plan"

**Tech Stack:** Python + cron job + email/SMS API

---

### 3. Monthly Report Generator
**Purpose:** Auto-generate monthly review template with data

**Features:**
- Read current portfolio data
- Calculate performance metrics
- Compare to previous month
- Generate markdown report
- Insert into `docs/monthly_reports/`

**Tech Stack:** Python + Jinja2 templates

---

### 4. Cashflow Analyzer
**Purpose:** Analyze income/expenses trends

**Features:**
- 12-month moving averages
- Savings rate trends
- Expense category breakdown
- Projection to emergency fund goals
- Visualization (optional charts)

**Tech Stack:** Python + pandas + matplotlib

---

### 5. Portfolio Optimizer
**Purpose:** Suggest optimal DCA allocation

**Features:**
- Read current positions vs targets
- Calculate drift from allocation
- Suggest this month's DCA distribution
- Consider tax implications (if applicable)

**Tech Stack:** Python + optimization libraries

---

## 🚀 Implementation Priority

**Phase 1 (Manual):**
- Excel calculator for rebalancing
- Manual monthly reviews
- Manual data entry

**Phase 2 (Semi-Automated):**
- Python script for market data fetching
- Auto-update market indicators

**Phase 3 (Automated):**
- Crisis alert system
- Monthly report generator

**Phase 4 (Advanced):**
- Full portfolio dashboard
- Web interface (optional)
- Real-time tracking

---

## 📝 Contributing Your Own Tools

If you build additional tools:

1. Add script to this folder
2. Document in this README
3. Include usage instructions
4. Commit to repository

---

## 🔧 Setup Instructions

### For Python Scripts:

```bash
# Create virtual environment
python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt

# Run script
python script_name.py
```

### For Excel VBA:

1. Open Excel file
2. Enable macros
3. Follow in-file instructions

---

**Next:** Add tools as needed based on Phase 6 automation decisions.
