# 📊 Portfolio Data Directory

This folder contains all numerical data for portfolio analysis and tracking.

---

## 📁 Data Files

### `cash_reserves.csv`
**Purpose:** Emergency fund breakdown by account (17 accounts)

**Columns:**
```csv
account_name,account_holder,bank_type,amount,currency,access_type,interest_rate,last_updated,notes
```

**Example:**
```csv
Trade Republic Saver,Dima,Broker Savings,35160.26,EUR,instant,2.00%,2026-01-06,Main emergency fund
Конверт,Shared,Cash,2050.00,EUR,instant,0%,2026-01-06,Physical cash reserve
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
2024,01,6000,4000,2000,33.3,Bonus month
2025,annual,57496,46180,11316,19.7,Full year rent
```

---

### `expense_categories.csv`
**Purpose:** Track monthly expenses by category for optimization

**Columns:**
```csv
month,groceries,travel,dining,entertainment,other,total_expenses,target_total,saved_vs_target,notes
```

**Example:**
```csv
2026-01,700,294,225,83,2546,3848,3628,0,Baseline month
```

---

## 🔄 Update Frequency

| File | Update Frequency | Who Updates |
|------|------------------|-------------|
| `cash_reserves.csv` | Monthly | User |
| `income_expenses.csv` | Monthly | User |
| `expense_categories.csv` | Monthly | User |

---

## 📝 Data Entry Tips

### For User:
1. **Consistency:** Use same format each time (YYYY-MM-DD for dates)
2. **Currency:** Always specify EUR amounts (or note currency)
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
- "Am I on track with my plan?"
- "Where can I cut expenses?"
- "How much passive income from interest?"

---

## 🚀 Getting Started

1. **Initial Setup:**
   - Fill CSV files with current data
   - Commit to repository

2. **Monthly Updates:**
   - Update cash_reserves.csv with account balances
   - Add income/expenses row for the month
   - Update expense_categories.csv with breakdown
   - Run monthly review with Claude

3. **Analysis:**
   - Claude reads all files
   - Generates insights
   - Provides recommendations
   - Updates monthly report

---

**Dashboard:** View your data visualized at [docs/index.html](../docs/index.html)
