# 📊 Investment Portfolio & Crisis Strategy

> **Personal ETF Portfolio Management System**
> Long-term wealth building with crisis preparedness framework
> **Last Updated:** January 7, 2026

---

## 📊 Current Status Dashboard

| Metric | Value | Status | Notes |
|--------|-------|--------|-------|
| **Portfolio Value** | €2,503 | 🟢 | +11.2% weighted return |
| **Emergency Fund (EUR)** | €47,225 / €60,000 | 🟡 79% | 11.8 months, €12,775 to target |
| **Total Cash Reserves** | €50,010 | 🟢 | 12.5 months expenses (EUR 94% • UAH ~€79 • USD $2.9k) |
| **Monthly Surplus (2025)** | €943 | 🟢 | 19.7% savings rate |
| **Timeline to €60k** | 13.5 mo / 11 optimized | 🟢 | Oct 2026 current / Aug optimized |
| **Current Phase** | Pre-Crisis | ⚠️ | CAPE 40, building reserves |
| **S&P 500** | 6,902 (ATH) | 🔴 | -0% from -15% trigger |
| **Monthly DCA** | €100 | 🟢 | Reduced due to valuations |
| **Crisis Deployment Ready** | €7,800 + €600/mo | ✅ | Verified from 3-year data |
| **Next Review** | Feb 1, 2026 | 📅 | Monthly tracking |

**Distance to Crisis Triggers:**
- 🟡 **Phase 2 (-15%):** S&P 5,865 → -15.0% away
- 🟡 **Phase 2B (-25%):** S&P 5,175 → -25.0% away
- 🔴 **Phase 3 (-40%):** S&P 4,140 → -40.0% away *(DEPLOYMENT)*

---

## 🎯 Key Recommendations (Based on 3-Year Analysis)

### Priority 1: Reach €60k EUR Target by August 2026

**Current Status:** €47,225 / €60,000 (79%)
**Gap:** €12,775 EUR

**Optimization Plan (+€220/month):**

| Category | Current | Optimized | Monthly Savings |
|----------|---------|-----------|-----------------|
| Еда дома (groceries) | €700 | €630 | €70 |
| Путешествия (travel) | €294 | €206 | €88 |
| Рестораны (dining) | €225 | €180 | €45 |
| Развлечения (entertainment) | €83 | €66 | €17 |
| **TOTAL CUTS** | - | - | **€220/mo** |

**Impact:**
- Current savings rate: 19.7% → **25% optimized**
- Monthly surplus: €943 → **€1,163**
- Timeline to €60k: 13.5 months → **11 months (August 2026)** ✅

### Priority 2: Post-€60k Strategy (Sept 2026+)

Once €60k EUR target is reached:

**Emergency Fund Split:**
- **€50,000 floor:** Untouchable core (12.5 months expenses)
- **€10,000 buffer:** Crisis deployment ready

**Increase Portfolio DCA:**
- Current: €100/month
- Post-€60k: **€200-300/month** (optimized surplus allows this)
- Maintain: €600-800/month for regular expenses

**Portfolio Growth Projection:**
- At €100/mo: ~€120k in 30 years
- At €250/mo: ~€300k in 30 years
- **2.5x better outcome** with optimization

### Priority 3: Crisis Deployment Readiness ✅

**Verified from 3-Year Cashflow Data:**

**Phase 1 (Day 1 at S&P -40%):**
- €7,225 EUR reserves above €40k floor
- +€575 from bond rally (ERNX €520 → €560-620)
- **Total: €7,800** immediate deployment ✅

**Phase 2 (Months 1-6):**
- **€600/month** aggressive DCA
- Total: €3,600 over 6 months
- ✅ SUSTAINABLE (monthly surplus €943)

**Phase 3 (Months 7-12):**
- €400/month (rebuild emergency fund)
- Total: €2,400 over 6 months

**12-Month Crisis Deployment: €13,800** ✅ VERIFIED

### Priority 4: Monthly Tracking & Discipline

**Action Items:**
- ✅ Track monthly expenses in `data/income_expenses.csv`
- ✅ Monitor optimization categories (groceries, travel, dining)
- ✅ Review progress toward €60k on 1st of each month
- ✅ Adjust DCA if S&P triggers hit (-15%, -25%, -40%)
- ✅ Document all decisions in monthly reports

**Timeline Summary:**

| Milestone | Target Date | Action |
|-----------|-------------|--------|
| **Reach €60k EUR** | August 2026 | Optimize €220/mo cuts |
| **Increase DCA** | September 2026 | €100 → €200-300/mo |
| **Crisis Ready** | NOW | €13,800 verified capacity |

📄 **See full analysis:** [3-Year Cashflow Analysis](docs/cashflow_analysis_3year.md)

---

## 📑 Table of Contents

- [Current Status Dashboard](#-current-status-dashboard)
- [How to Use This Repository](#-how-to-use-this-repository)
- [Financial Context](#-financial-context)
- [Portfolio Overview](#-portfolio-overview)
- [Current Allocation](#-current-allocation)
- [Market Context](#-market-context-january-2026)
- [Investment Strategy](#-investment-strategy)
- [Crisis Response Plan](#-crisis-response-plan)
- [Bond Rebalancing Strategy](#-bond-rebalancing-strategy)
- [Key Lessons Learned](#-key-lessons-learned)
- [Action Plan](#-action-plan)
- [Monitoring Checklist](#-monitoring-checklist)
- [Monthly Reviews](#-monthly-reviews)

---

## 📖 How to Use This Repository

### For Monthly Reviews

1. **Update data files** in `data/` folder:
   - `current_positions.csv` - After each trade
   - `cash_reserves.csv` - Monthly
   - `income_expenses.csv` - Monthly
   - `market_indicators.csv` - Weekly

2. **Run monthly review** (1st of each month):
   - Copy `docs/monthly_review_template.md`
   - Fill with current data
   - Save to `docs/monthly_reports/YYYY-MM-month.md`
   - Share with Claude for analysis

3. **Get Claude's analysis**:
   - Claude reads all data files
   - Provides insights and recommendations
   - Updates projections
   - Suggests actions

### For Crisis Response

When market correction begins:
1. Check Dashboard for trigger distances
2. Follow crisis response plan (see below)
3. Document all actions in monthly report
4. Update strategy as executed

### Repository Structure

```
Portfolio/
├── README.md                    # Main strategy document (you are here)
├── CHANGELOG.md                 # History of all changes
├── data/                        # All numerical data (CSV files)
│   ├── cash_reserves.csv        # 17 accounts breakdown
│   ├── current_positions.csv    # ETF holdings
│   ├── income_expenses.csv      # 3-year cashflow
│   └── expense_categories.csv   # Monthly expense tracking
├── docs/                        # Analysis and reports
│   ├── cash_reserves_analysis.md
│   ├── cashflow_analysis_3year.md
│   ├── VALIDATION_CHECKLIST.md  # Data consistency checks
│   ├── monthly_review_template.md
│   └── monthly_reports/         # Historical monthly reports
└── tools/                       # Calculators and automation
```

---

## 💰 Financial Context

### Income & Cashflow (3-Year Data Complete)

| Metric | 2023 | 2024 | 2025 | Trend |
|--------|------|------|------|-------|
| **Annual Income** | €41,110 | €57,640 | €57,496 | ✅ Stable |
| **Annual Expenses** | €21,867 | €48,994 | €46,180 | ⬆️ Lifestyle |
| **Annual Surplus** | €19,243 | €8,646 | €11,316 | 🟢 Recovering |
| **Savings Rate** | 46.8% | 15.0% | 19.7% | 🟢 Normalizing |
| **Monthly Surplus** | €1,604 | €720 | **€943** | ✅ Current |

**Context:**
- **2023:** Lived free (refugee program), high savings possible
- **2024:** Car purchase €10.6k + started rent €700/mo (July)
- **2025:** Full year rent, no major purchases, normalizing

**Current Monthly Breakdown (2025):**
- Net Income: €4,791/month
- Expenses: €3,848/month
- **Surplus: €943/month (19.7% savings rate)**

📄 **[Full 3-Year Cashflow Analysis](docs/cashflow_analysis_3year.md)** - Complete income/expense breakdown, optimization opportunities, projections

### Emergency Fund

**Current EUR Cash:** €47,225 (11.8 months expenses)
**Current Total (all currencies):** €50,010 EUR equivalent (12.5 months)
**Target:** €60,000 pure EUR (15 months expenses)
**Remaining:** €12,775 EUR
**Progress:** 79% complete 🟡

**Currency Breakdown:**
- **EUR (94.4%):** €47,225 - Main emergency fund, stable ✅
- **UAH (0.2%):** 3,474 hryvnia = ~€79 - Ukrainian accounts
- **USD (5.4%):** $2,889 - Crypto staking (5.25% APR)

**EUR Reserves Detail:**
- **Main Reserve:** €35,160 (Trade Republic Saver, earning 2.00%)
- **Traditional Bank:** €1,862 (Bank of Ireland Dima, 0%)
- **Digital Banks:** €5,667 (Revolut Saver, Revolut Maria, Monobank)
- **Physical Cash:** €2,526 (Конверт + wallets)
- **Small Accounts:** €621 (5 accounts <€200 each)
- **Trade Republic Maria:** €3,727 (earning 2.00%)

**Interest Income:**
- EUR accounts: €829/year (2% avg on €42k)
- USD crypto staking: $152/year (5.25% on $2,889)
- **Total: ~€971/year passive income**

**Purpose:**
- **Safety Net:** €40,000 EUR floor (10 months minimum)
- **Crisis Deployment (EUR):** €7,225 available
- **Crisis Deployment (Total):** €7,800-14,000 (if using UAH/USD)
- **Buffer to Target:** €12,775 (to reach €60k EUR)

**Projected Timeline to €60k EUR:**

| Scenario | Monthly Surplus | Timeline | Target Date |
|----------|----------------|----------|-------------|
| **Current Pace (19.7%)** | €943/mo | 13.5 months | October 2026 |
| **Optimized (25%)** ✅ | €1,163/mo | 11 months | **August 2026** |
| **Aggressive (30%)** | €1,437/mo | 9 months | July 2026 |

**Optimization:** Cut €220/month (food, travel, restaurants) → reach target 3 months faster

📄 **[Detailed Cash Reserves Analysis](docs/cash_reserves_analysis.md)** - Full multi-currency breakdown, optimization recommendations, and 17-account liquidity analysis

### Investment Capacity

**Current Mode (Pre-Crisis):**
- Monthly DCA: €100
- Focus: 40% bonds (ERNX), 35% global equity (SPYI), 25% satellites

**Crisis Mode (When S&P -40%):**

**Deployment Plan (Verified from 3-Year Data)** ✅

**Phase 1: Initial Deployment**
- Day 1: **€7,800** (€7,225 EUR + €575 bonds rally)
- Keep €40,000 EUR floor (10 months safety net)

**Phase 2: Monthly DCA (Months 1-6)**
- **€600/month** aggressive buying ✅ VERIFIED
- Total: €3,600 over 6 months

**Phase 3: Monthly DCA (Months 7-12)**
- **€400/month** (rebuild emergency fund)
- Total: €2,400 over 6 months

**Total 12-Month Crisis Deployment:**
- Initial: €7,800
- 6 months x €600: €3,600
- 6 months x €400: €2,400
- **TOTAL: €13,800** ✅

**Option B (If S&P -50%+):**
- Add UAH ~€79 + USD $2,889
- Maximum deployment: €14,000
- Higher risk (crypto/currency volatility)

**Deployment Capacity VERIFIED:**
- ✅ Monthly surplus €943 supports €600/mo DCA
- ✅ Can maintain for 6 months comfortably
- ✅ Realistic plan based on real cashflow data

---

## 🎯 Portfolio Overview

### Profile
- **Investment Horizon:** 30+ years
- **Risk Tolerance:** Moderate-conservative
- **Base Currency:** EUR (Ireland-based)
- **Strategy:** Long-term growth with defensive positioning
- **Total Portfolio:** ~€2,503
- **Emergency Fund:** ~€48,000 (12 months expenses)

### Investment Philosophy
- **Buy and Hold:** Focus on long-term compounding
- **Crisis Preparation:** Maintain dry powder for major corrections
- **Diversification:** Geographic, sectoral, and asset class spread
- **Low Cost:** Index ETFs with 0.07-0.25% TER
- **Disciplined Rebalancing:** Follow allocation targets

---

## 💼 Current Allocation

### Holdings (Total: €2,502.54)

| Asset Class | Ticker | Amount | Current % | Target % | Return | Purpose |
|-------------|--------|--------|-----------|----------|--------|---------|
| **Global Equity** | SPYI | €937.73 | 37.5% | 35% | +11.46% | Core growth, world diversification |
| **EUR Bonds** | ERNX | €914.70 | 36.6% | 40% | +0.30% | Defensive anchor, crisis hedge |
| **Technology** | XDWT | €240.13 | 9.6% | 10% | +25.07% | Quality growth (AI, semiconductors) |
| **Emerging Markets** | 10AF | €231.93 | 9.3% | 8% | +14.25% | Demographics upside |
| **Europe** | LYP6 | €178.05 | 7.1% | 7% | +9.23% | EUR hedge, sector diversity |

### Allocation Status
- ✅ Global Equity: Slightly overweight (within tolerance)
- ⚠️ Bonds: Slightly underweight (correcting via DCA)
- ✅ Tech, EM, Europe: On target

---

## 📈 Market Context (January 2026)

### Current Market Snapshot

| Indicator | Value | Status | Interpretation |
|-----------|-------|--------|----------------|
| **S&P 500** | ~6,902 | ATH | +16% in 2025 (3rd consecutive year) |
| **CAPE Ratio** | ~40 | ⚠️ EXTREME | 2nd highest in history (dot-com era was first) |
| **Gold** | $4,460/oz | 🔥 | +66% in 2025 (best since 1979) |
| **Bitcoin** | $93,000 | ➡️ | -6% in 2025 after +125% in 2024 |
| **USD** | -6-10% (2025) | ⚠️ | Worst year since 2017 |

### Recession Probability: **30-42%** (2026)

**Risk Indicators:**
- 🔴 Moody's estimate: 42% recession risk
- 🟡 Bloomberg consensus: 30% probability
- 🔴 CAPE Ratio: 40+ (extreme overvaluation)
- 🟡 Employment: Low unemployment but hiring at decade lows
- 🔴 Consumer: Bottom 50% in "mini-recession"
- 🟡 Conference Board LEI: Signals slowing into early 2026

**Key Quote:**
> "We're pretty much on the edge. Nothing else can go wrong."
> — Mark Zandi, Chief Economist, Moody's Analytics

### Geopolitical Factors
- US military action in Venezuela (January 4, 2026)
- Fed Chair Powell term ending May 2026
- Trump tariff policy uncertainty
- Accelerating de-dollarization (BRICS, central bank gold buying)

**Assessment:** Economy balancing on knife's edge. Recession delayed but not cancelled. Market extremely overvalued (CAPE 40). Gold's +66% rally confirms structural dollar decline.

---

## 🎲 Investment Strategy

### Pre-Crisis DCA (Current): €100/month

| Asset | Monthly € | % |
|-------|-----------|---|
| ERNX | €40 | 40% |
| SPYI | €35 | 35% |
| XDWT | €10 | 10% |
| 10AF | €8 | 8% |
| LYP6 | €7 | 7% |

**Rationale:**
- **Small DCA:** CAPE at 40 = extreme overvaluation
- **Focus on bonds:** Building defensive position
- **Accumulating cash:** Target €60k emergency fund (15 months)
- **Crisis preparation:** Reserve €10-15k for deployment at S&P -30%+

### Emergency Fund Strategy

**Current:** €48,000 (12 months expenses)
**Target:** €60,000 (15 months expenses)

**Purpose:**
- Core safety net: €48k (untouchable)
- Crisis deployment reserve: €10-15k
- Enables aggressive investing during corrections without liquidity risk

---

## 🚨 Crisis Response Plan

### Trigger Levels (S&P 500 currently ~6,900)

| Correction | S&P Level | Action |
|-----------|-----------|--------|
| **-15% to -25%** | 5,175-5,865 | Double DCA to €200-400/month |
| **-25% to -40%** | 4,140-5,175 | Deploy €10k + €600-1,000/month DCA |
| **-40% to -60%** | <4,140 | Maximum deployment + shift allocation |

### Post-Crisis Allocation (3 Options)

#### Option A: Conservative (No BTC, With Gold)
Use when: BTC didn't reach $30k, dollar decline continues

| Asset | % |
|-------|---|
| SPYI | 62% |
| XDWT | 12% |
| 10AF | 10% |
| LYP6 | 8% |
| **Gold** | 5% |
| ERNX | 3% |

#### Option B: Aggressive (With BTC) ✅ **RECOMMENDED**
Use when: BTC reached $30-50k, 30-year horizon justifies risk

| Asset | % |
|-------|---|
| SPYI | 58% |
| **BTC** | 10% |
| XDWT | 11% |
| 10AF | 10% |
| LYP6 | 8% |
| ERNX | 3% |

**BTC Entry Point:** $30-50k (currently $93k, waiting for -45-65% correction)

#### Option C: Balanced (Both BTC & Gold)
Use when: Maximum protection desired

| Asset | % |
|-------|---|
| SPYI | 55% |
| BTC | 10% |
| XDWT | 10% |
| 10AF | 10% |
| LYP6 | 7% |
| Gold | 5% |
| ERNX | 3% |

---

## 🔄 Bond Rebalancing Strategy

### Critical Understanding: Bonds Rally During Crisis ✅

**Historical Performance:**
- **2008 Crisis:** Stocks -57%, Bonds **+5-8%** ✅
- **2020 COVID:** Stocks -34%, Bonds **+8-12%** ✅

**Mechanism:**
1. Fed cuts rates → Bond prices rise
2. Flight to safety → Demand for bonds increases
3. Bonds become expensive exactly when stocks are cheap

### Current Bond Position

**Status:** €914.70 (36.6% of portfolio)
**Performance:** +0.30% (rates haven't dropped yet)
**Assessment:** "Loaded spring" ready to rally in crisis

### Rebalancing Execution (When S&P Reaches -40%)

**Day 1 Deployment:**

1. **Sell bonds:** €520 (keep €390 = 3% of new portfolio)
2. **Expected proceeds:** €560-620 (bonds rally +10-15% during crisis)
3. **Deploy emergency fund:** €10,000
4. **Total deployment:** €10,540-10,600

**Distribution** (Option B - With BTC):
- €6,100 → SPYI (58%)
- €1,160 → XDWT (11%)
- €1,050 → BTC (10%, only if at $30-50k)
- €1,050 → 10AF (10%)
- €840 → LYP6 (8%)
- €320 → ERNX (3%)

**Months 2-12:**
- Aggressive DCA: €600-1,000/month
- Follow post-crisis allocation percentages
- No additional bond purchases

---

## 💡 Key Lessons Learned

### 1. Currency Risk Is Real
- ❌ **USD Bonds (QDV4):** -7.65% loss due to FX drag
- ✅ **EUR Bonds (ERNX):** +0.30% stable
- **Rule:** Bonds MUST be in base currency; stocks can be any currency

### 2. Sunk Cost Fallacy
Sold QDV4 at -7.65% loss - correct decision:
- Small loss today < (small loss + years of opportunity cost)
- Stopped bleeding, redirected to better asset

### 3. Dollar Decline Accelerating
- US debt unsustainable
- Central banks buying gold at record levels (+66% in 2025)
- BRICS de-dollarization underway
- Dollar down 6-10% in 2025 (worst since 2017)
- **Protection:** ~47% US exposure (vs 70% standard portfolio)

### 4. Index Funds > Active Management
- Private equity: 90% underperform S&P 500
- Hedge funds: 4-6% fees, poor returns
- Your ETFs: 0.07-0.25% TER, outperform 90% active managers

### 5. Emergency Fund = Competitive Advantage
€48k (12 months) enables:
- Aggressive investing without liquidity risk
- €10-15k deployment capacity during crisis
- Peace of mind during market volatility

### 6. Gold Breakout Confirmed
- October 2025: $4,300 (considered expensive)
- January 2026: $4,460 (+66% for 2025, best since 1979)
- **Assessment:** Structural bull market confirmed, but entry point missed
- **Strategy:** Wait for crisis pullback (-15-20%) or use BTC as alternative

### 7. Recession Timing Is Hard
- October 2025: Expected recession Q4 2025-Q2 2026
- January 2026: Recession delayed but not cancelled
- **Lesson:** Don't try to time exactly, maintain dry powder

---

## 📋 Action Plan

### Phase 1: NOW (Pre-Crisis) ← **YOU ARE HERE**

- ✅ Monthly DCA: €100
- ✅ Build cash reserves toward €60k
- ✅ Monitor triggers: S&P levels, unemployment, Fed actions
- ✅ Maintain ~37% bonds (will rally in crisis)
- ⚠️ Watch: CAPE at 40, third consecutive +16% year

### Phase 2: Correction Begins (-15% to -25%)

- 🎯 Increase DCA to €200-400/month
- 🎯 Monitor for deeper correction
- 🎯 Prepare bond sell order

### Phase 3: Crisis Hits (-40%)

- 🎯 Sell €520 bonds at rally price (€560-620 expected)
- 🎯 Deploy €10k emergency fund
- 🎯 Total deployment: €10,540-10,600
- 🎯 Shift to Option B allocation (with BTC if $30-50k)

### Phase 4: Recovery (Months 2-12)

- 🎯 Aggressive DCA: €600-1,000/month
- 🎯 Maintain post-crisis allocation
- 🎯 Rebuild emergency fund to €60k over 24 months

### Phase 5: Bull Market Returns

- 🎯 Consider reducing bonds to 0%
- 🎯 Increase equity to 75%+
- 🎯 Take BTC/gold profits if massive gains

---

## 📊 Performance Projections

### Pre-Crisis (Current Portfolio)
- **Expected Return:** 8.1% annualized
- **Volatility:** 8.2%
- **Max Drawdown:** -15-18% (vs -30-40% pure equity)
- **30-Year Projection @ €100/month:** €100-120k

### Post-Crisis (After Deployment)
- **Expected Return:** 11-14% annualized
- **30-Year Projection:** €400-600k
- **Recovery Boost:** First 2 years post-crisis typically +40-60%

---

## 🔍 Monitoring Checklist

### Key Events to Watch (2026)

| Date | Event | Impact |
|------|-------|--------|
| Jan 13 | CPI Inflation Report | Fed policy direction |
| Jan 28 | Tesla Q4 Earnings | Tech sector sentiment |
| Q1 2026 | Fed Chair transition | Volatility risk |
| Ongoing | Venezuela situation | Oil prices, geopolitics |
| Ongoing | Tariff negotiations | Trade uncertainty |
| Monthly | Employment reports | Recession indicators |

### Weekly Monitoring
- [ ] S&P 500 level vs trigger points
- [ ] CAPE ratio trends
- [ ] Employment data releases
- [ ] Fed commentary and meeting minutes
- [ ] Portfolio drift from target allocation

### Monthly Review
- [ ] Execute DCA according to current phase
- [ ] Review emergency fund level
- [ ] Check for over/under-allocated positions
- [ ] Monitor geopolitical developments
- [ ] Update recession probability assessment

---

## 🛠️ Tools & Resources

**Portfolio Management:**
- Excel VBA Calculator for automatic rebalancing
- Handles over-allocated assets (minimum €1)
- Always sums to exact investment amount

**Data Sources:**
- Yahoo Finance (real-time quotes)
- FRED Economic Data (macro indicators)
- Conference Board LEI (recession signals)
- Moody's Analytics (probability estimates)

---

## 📅 Monthly Reviews

### Latest Review
📄 **[January 2026](docs/monthly_reports/2026-01-january.md)** - Baseline setup, CAPE at 40, pre-crisis positioning

### All Reviews
- [January 2026](docs/monthly_reports/2026-01-january.md) - Initial system setup
- *More reviews will appear here as they're completed*

### Review Process
1. **Update data files** (1st of month)
2. **Run review using template** (`docs/monthly_review_template.md`)
3. **Share with Claude** for analysis
4. **Document decisions** and commit to repository
5. **Execute actions** (DCA, rebalancing, etc.)

---

## ⚠️ Disclaimer

This document represents a personal investment strategy based on individual circumstances, risk tolerance, and financial goals. It is:

- **Not financial advice:** Consult a qualified financial advisor
- **Not a recommendation:** Do your own research
- **Personal record:** For tracking decisions and learning from outcomes
- **Subject to change:** Market conditions and personal circumstances evolve

**Remember:**
- Past performance does not guarantee future results
- All investments carry risk
- Diversification does not ensure profit or protect against loss
- Maintain emotional discipline during volatility

---

**Next Review:** When recession triggers hit or Q2 2026 (whichever comes first)

---

*Built with discipline. Managed with patience. Optimized for the long term.*
