# 📊 Portfolio Data Directory

This folder contains all numerical data for portfolio analysis and tracking.

---

## 📁 Data Files

### `current_positions.csv`
**Purpose:** Track current ETF holdings and positions

**Columns:**
```csv
ticker,name,shares,avg_price,current_price,current_value_eur,purchase_date,return_pct,target_pct,current_pct
```

**Example:**
```csv
SPYI,SPDR MSCI World UCITS ETF,10.5,85.50,89.30,937.73,2024-03-15,11.46,35.0,37.5
ERNX,iShares Euro Government Bond,45.2,20.00,20.24,914.70,2024-01-10,0.30,40.0,36.6
```

---

### `cash_reserves.csv`
**Purpose:** Emergency fund breakdown by account

**Columns:**
```csv
account_name,bank,amount_eur,currency,access_type,interest_rate,last_updated
```

**Example:**
```csv
Main Savings,Bank A,25000,EUR,instant,0.5,2026-01-06
Emergency Fund,Bank B,23000,EUR,instant,1.0,2026-01-06
```

**Access Types:**
- `instant` - Can withdraw immediately
- `notice` - Requires X days notice
- `fixed` - Fixed term deposit

---

### `income_expenses.csv`
**Purpose:** Historical cashflow data (3 years)

**Columns:**
```csv
year,month,income_net_eur,expenses_eur,surplus_eur,savings_rate_pct,notes
```

**Example:**
```csv
2023,01,5500,4200,1300,23.6,Normal month
2023,02,5500,4500,1000,18.2,Car repair
2024,01,6000,4000,2000,33.3,Bonus month
```

---

### `monthly_dca_history.csv`
**Purpose:** Track all investment contributions

**Columns:**
```csv
date,ticker,amount_eur,shares,price,type,notes
```

**Example:**
```csv
2024-01-15,SPYI,100,1.15,87.00,regular_dca,Monthly contribution
2024-01-15,ERNX,50,2.45,20.40,regular_dca,Monthly contribution
2024-03-20,SPYI,1000,11.2,89.30,lump_sum,Bonus investment
```

**Types:**
- `regular_dca` - Monthly scheduled investment
- `lump_sum` - One-time large investment
- `rebalancing` - Rebalancing trade
- `crisis_deployment` - Crisis buying

---

### `market_indicators.csv`
**Purpose:** Track market conditions and trigger points

**Columns:**
```csv
date,sp500,sp500_change_pct,cape_ratio,recession_prob_pct,gold_usd,btc_usd,phase,notes
```

**Example:**
```csv
2026-01-06,6902,0.0,40,35,4460,93000,pre_crisis,CAPE extremely high
2026-01-13,6850,-0.75,39.8,36,4500,91000,pre_crisis,Slight correction
```

**Phases:**
- `pre_crisis` - Building reserves, small DCA
- `correction_early` - -15 to -25% drop, increased DCA
- `crisis` - -40%+ drop, full deployment
- `recovery` - Post-crisis, aggressive DCA
- `bull_market` - Normal market, standard strategy

---

## 🔄 Update Frequency

| File | Update Frequency | Who Updates |
|------|------------------|-------------|
| `current_positions.csv` | Monthly + after trades | User |
| `cash_reserves.csv` | Monthly | User |
| `income_expenses.csv` | Monthly | User |
| `monthly_dca_history.csv` | After each investment | User |
| `market_indicators.csv` | Weekly | User or Claude |

---

## 📝 Data Entry Tips

### For User:
1. **Consistency:** Use same format each time (YYYY-MM-DD for dates)
2. **Currency:** Always specify EUR amounts
3. **Notes:** Add context when unusual events occur
4. **Backup:** Keep local copy before committing to git

### For Privacy:
If concerned about exact amounts in git:
- Round to nearest €100
- Use relative percentages instead
- Keep detailed file locally only
- Add to `.gitignore`

---

## 🔒 Data Privacy

**Consider adding to `.gitignore`:**
```
data/*_private.csv
data/backup/
```

**Public repo:** Only store sanitized/rounded data
**Private repo:** Can store exact amounts

---

## 📊 Analysis Queries

With this data, Claude can answer:

- "What's my true savings rate over 3 years?"
- "When will I reach €60k emergency fund?"
- "Can I afford €1000/month DCA in crisis?"
- "What was my best/worst investment timing?"
- "How much did dollar-cost averaging help?"
- "Where should I deploy €10k in next crisis?"
- "Am I on track with my plan?"

---

## 🚀 Getting Started

1. **Initial Setup:**
   - Copy CSV templates above
   - Fill current data
   - Commit to repository

2. **Monthly Updates:**
   - Update positions after DCA
   - Add income/expenses row
   - Record market indicators
   - Run monthly review with Claude

3. **Analysis:**
   - Claude reads all files
   - Generates insights
   - Provides recommendations
   - Updates monthly report

---

**Next:** Populate these files with your actual data when ready for Phase 4!
