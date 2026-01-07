# ✅ Data Validation Checklist

> **Purpose:** Ensure consistency across all portfolio files before committing changes
> **Use:** Run this checklist monthly before git commit

---

## 📊 Cash Reserves Validation

### EUR Totals Must Match

- [ ] **README.md** Emergency Fund EUR = `€47,225`
- [ ] **cash_reserves_analysis.md** Pure EUR Cash = `€47,225`
- [ ] **cash_reserves.csv** sum of EUR accounts = `€47,225`
- [ ] **January review** Current EUR Cash = `€47,225`

### Total Reserves Must Match

- [ ] **README.md** Total Cash Reserves = `€50,010`
- [ ] **cash_reserves_analysis.md** Total = `€50,010`
- [ ] **January review** Current Total = `€50,010`

### Currency Percentages Must Be Correct

- [ ] EUR = `94.4%` of €50,010 = €47,225 ✅
- [ ] UAH = `0.2%` of €50,010 = ~€79 (3,474 hryvnia ÷ 44) ✅
- [ ] USD = `5.4%` of €50,010 = ~€2,706 ($2,889 × 0.937) ✅
- [ ] Total = `100%` ✅

### Exchange Rates Documented

- [ ] UAH/EUR rate shown (currently: 44 UAH/EUR)
- [ ] USD/EUR rate shown (currently: ~0.937)
- [ ] Date of exchange rate noted

---

## 💰 Cashflow Validation

### Monthly Averages (2025)

- [ ] Net Income = `€4,791/month` (€57,496 ÷ 12)
- [ ] Expenses = `€3,848/month` (€46,180 ÷ 12)
- [ ] Surplus = `€943/month` (€4,791 - €3,848)
- [ ] Savings Rate = `19.7%` (€943 ÷ €4,791)

### 3-Year Data Matches

| Year | Income | Expenses | Surplus | Savings % |
|------|--------|----------|---------|-----------|
| 2023 | €41,110 | €21,867 | €19,243 | 46.8% |
| 2024 | €57,640 | €48,994 | €8,646 | 15.0% |
| 2025 | €57,496 | €46,180 | €11,316 | 19.7% |

- [ ] All files show same 3-year numbers
- [ ] Surplus = Income - Expenses ✅
- [ ] Savings % = Surplus ÷ Income ✅

---

## 🎯 Target & Timeline Validation

### €60k EUR Target

- [ ] Current EUR = `€47,225`
- [ ] Target = `€60,000`
- [ ] Gap = `€12,775` (€60,000 - €47,225)
- [ ] Progress = `79%` (€47,225 ÷ €60,000)

### Timeline Calculations

**Current Pace (19.7% savings):**
- [ ] Monthly surplus = `€943`
- [ ] Months to €60k = `13.5` (€12,775 ÷ €943)
- [ ] Target date = `October 2026`

**Optimized (25% savings):**
- [ ] Monthly surplus = `€1,163` (€943 + €220)
- [ ] Months to €60k = `11` (€12,775 ÷ €1,163)
- [ ] Target date = `August 2026`

### Dashboard Shows Correct Timeline

- [ ] README dashboard: "13.5 mo / 11 optimized"
- [ ] Notes: "Oct 2026 current / Aug optimized"

---

## 🚨 Crisis Deployment Validation

### Available EUR (Keep €40k floor)

- [ ] EUR reserves = `€47,225`
- [ ] Emergency floor = `€40,000`
- [ ] Available = `€7,225` (€47,225 - €40,000)

### Bonds Rally Addition

- [ ] Current bonds = `€914.70` (36.6% of portfolio)
- [ ] Sell amount = `€520` (reduce to 3%)
- [ ] Rally value = `€560-620` (€520 × 1.08-1.19)
- [ ] Use midpoint = `€575`

### Total Day 1 Deployment

- [ ] EUR available = `€7,225`
- [ ] Bonds rally = `€575`
- [ ] **Total Day 1 = €7,800** ✅

### Monthly DCA Capacity

- [ ] Monthly surplus = `€943`
- [ ] Crisis DCA = `€600/mo` (63% of surplus)
- [ ] Sustainable? = `YES` ✅

### 12-Month Crisis Total

- [ ] Day 1 = `€7,800`
- [ ] Months 1-6 = `€3,600` (€600 × 6)
- [ ] Months 7-12 = `€2,400` (€400 × 6)
- [ ] **Total = €13,800** ✅

---

## 📈 Portfolio Validation

### Portfolio Value

- [ ] Total portfolio = `€2,503`
- [ ] SPYI = `€937.73` (37.5%)
- [ ] ERNX = `€914.70` (36.6%)
- [ ] XDWT = `€240.13` (9.6%)
- [ ] 10AF = `€231.93` (9.3%)
- [ ] LYP6 = `€178.05` (7.1%)
- [ ] Sum = `€2,502.54` ≈ €2,503 ✅

### Percentages Sum to 100%

- [ ] 37.5% + 36.6% + 9.6% + 9.3% + 7.1% = `100.1%` ✅ (rounding)

### Target Allocation

- [ ] SPYI target = `35%` (current 37.5%, drift +2.5%)
- [ ] ERNX target = `40%` (current 36.6%, drift -3.4%)
- [ ] All others within ±2%

---

## 💡 Optimization Plan Validation

### €220/month Cuts

| Category | Current | Target | Cut |
|----------|---------|--------|-----|
| Groceries | €700 | €630 | €70 |
| Travel | €294 | €206 | €88 |
| Dining | €225 | €180 | €45 |
| Entertainment | €83 | €66 | €17 |

- [ ] Total cuts = `€220` (€70 + €88 + €45 + €17)
- [ ] New total expenses = `€3,628` (€3,848 - €220)
- [ ] New surplus = `€1,163` (€4,791 - €3,628)
- [ ] New savings rate = `24.3%` (€1,163 ÷ €4,791) ≈ 25% ✅

---

## 🔢 Common Math Checks

### Percentages

```
Savings Rate = Surplus ÷ Income × 100
Example: €943 ÷ €4,791 × 100 = 19.7% ✅

Progress = Current ÷ Target × 100
Example: €47,225 ÷ €60,000 × 100 = 78.7% ≈ 79% ✅

Drift = Current % - Target %
Example: 37.5% - 35% = +2.5% drift ✅
```

### Timeline

```
Months to Goal = Gap ÷ Monthly Surplus
Example: €12,775 ÷ €943 = 13.5 months ✅
```

### Currency Conversion

```
UAH to EUR = UAH Amount ÷ Exchange Rate
Example: 3,474 UAH ÷ 44 = €78.95 ≈ €79 ✅

USD to EUR = USD Amount × Exchange Rate
Example: $2,889 × 0.937 = €2,707 ≈ €2,706 ✅
```

---

## 📁 File Cross-Reference Checklist

### Before Every Commit

- [ ] **README.md** dashboard matches latest numbers
- [ ] **cash_reserves_analysis.md** total = €50,010
- [ ] **cashflow_analysis_3year.md** shows 19.7% savings rate
- [ ] **January review** has all TBDs removed
- [ ] **CHANGELOG.md** updated with changes
- [ ] **expense_categories.csv** has current month baseline

### Monthly Update (1st of Month)

- [ ] Update **income_expenses.csv** with last month's data
- [ ] Update **expense_categories.csv** with actual spending
- [ ] Update **market_indicators.csv** with S&P, CAPE, etc.
- [ ] Create new monthly report in `docs/monthly_reports/`
- [ ] Update **README.md** dashboard with new numbers
- [ ] Add entry to **CHANGELOG.md**
- [ ] Run this validation checklist
- [ ] Git commit with clear message

---

## 🚨 Red Flags (Investigate Immediately)

- [ ] ❌ Total reserves changed but no transaction recorded
- [ ] ❌ Percentages don't sum to 100% (±0.5% tolerance)
- [ ] ❌ Surplus ≠ Income - Expenses
- [ ] ❌ Savings rate changed but no income/expense change
- [ ] ❌ Timeline to target increased (should only decrease)
- [ ] ❌ Emergency fund below €40k EUR (minimum floor)
- [ ] ❌ Crisis DCA capacity > monthly surplus (not sustainable)
- [ ] ❌ Portfolio value changed but no trades recorded
- [ ] ❌ Exchange rate used without date/source

---

## ✅ Sign-Off

**Validation Date:** _________________

**Validated By:** _________________

**All Checks Passed:** [ ] YES / [ ] NO

**Issues Found:**
- _______________________________________
- _______________________________________

**Actions Taken:**
- _______________________________________
- _______________________________________

---

**Next Validation:** February 1, 2026

---

*"Trust, but verify. Especially with your own data."*
