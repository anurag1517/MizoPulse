# MizoPulse: Mizoram Sentiment & Public Perception Intelligence Platform

An advanced, bilingual (English & Mizo Duhlian) intelligence dashboard and sentiment analysis platform designed specifically for the state of **Mizoram, India**.

![MizoPulse](https://img.shields.io/badge/Status-Active_Live-emerald)
![State](https://img.shields.io/badge/Region-Mizoram_India-blue)
![Bilingual](https://img.shields.io/badge/Language-English_%26_Mizo-purple)

---

## 🌟 Core Features & Modules

### 1. Multi-Source Ingestion Engine
Aggregates, processes, and classifies public sentiment across **6 key data channels**:
- **State & National Government Portals**: `dipr.mizoram.gov.in`, `mizoram.gov.in`, `police.mizoram.gov.in`, `pib.gov.in/mizoram`, `mha.gov.in`.
- **Twitter / X**: Verified official handles (`@MizoramPolice`, `@dipr_mizoram`, `@Lalduhoma_CM`, `@CYMA_Aizawl`) and public hashtags (`#Mizoram`, `#Zoram`).
- **Local YouTube Channels**: Zonet Cable TV Official, LPS Vision News, Vanglaini Official Channel, Mizo Storyteller, Aizawl Post TV.
- **Local News & Press**: Premier Mizo and English dailies including *Vanglaini*, *The Aizawl Post*, *Highland Echo*, *The Frontier Despatch*, and *NewsFile*.
- **Telegram Channels**: Community alert channels including *Mizoram News Alerts*, *Mizo Youth Forum*, *Mizoram Border & Security Watch*, and *MZP Student Network*.
- **Facebook Public Accounts & Pages**: *Central Young Mizo Association (CYMA)*, *Mizo Online Community*, *DIPR Mizoram Official Page*, and *Aizawl Traffic Awareness*.

---

### 2. Demographic Segmentation
Cross-filters all sentiment signals across:
- **Gender Breakdown**:
  - **Male** (50.6% demographic share, distinct topic interests including border dynamics, infrastructure, defense careers)
  - **Female** (49.4% demographic share, leading engagement on healthcare, education, refugee child welfare, community anti-drug vigilance)
- **Seven-Tier Granular Age Groups**:
  - **10 – 18 Years (Adolescents & High School - 14.2%)**: School education, Subroto Cup & sports, gaming, drug awareness in campuses.
  - **18 – 28 Years (College, Youth & Job Aspirants - 23.5%)**: High engagement in defense recruitment (Agniveer), MPSC exams, student politics (MZP/MSU), football (MPL), and creative media.
  - **29 – 35 Years (Young Professionals & Startups - 16.8%)**: Career progression, urban cost of living, tech entrepreneurship, civic transparency, and border kinship awareness.
  - **35 – 42 Years (Mid-Career & Civic Organizers - 14.1%)**: Village Council (VC) participation, Young Mizo Association (YMA) branch leadership, healthcare (SOP scheme), and child schooling.
  - **43 – 50 Years (Established Workforce & Farmers - 12.6%)**: Minimum Support Price (MSP) for cash crops (ginger, chili, turmeric), NH-306 transit, church community committees.
  - **51 – 60 Years (Senior Workforce & Church Deacons - 9.5%)**: Church deacons, moral leadership, retirement planning, alcohol prohibition advocacy, and social cohesion.
  - **Above 60 Years (Elders & Traditional Councils - 9.3%)**: Cultural preservation, Duhlian literature, historical Indo-Myanmar Zo kinship, pensions, and Church Council elders (*Kohhran Upa*).

---

### 3. Security Forces & Governance Perception Radar
In-depth perception intelligence, interactive voting, and trust tracking for:
- **Assam Rifles (23 Sector / Frontier Force)**:
  - *Positive Factors*: Effective border contraband interdiction, Civic Action Programs (CAP), free medical camps in border hamlets (*Vaphai, Farkawn, Zokhawthar*), disaster relief.
  - *Citizen Concerns*: Resolute local civil opposition to the proposed Central scrapping of the **Free Movement Regime (FMR)** and physical fencing separating ethnic Zo families; acceleration of the long-pending relocation from central Aizawl to the modern **Zokhawsang** complex.
- **Mizoram Police**:
  - *Trust Score: 78.6%* (High public esteem).
  - *Drivers*: Aggressive drive by CID Special Narcotics against crystal meth/heroin cartels, civil and accessible community policing, strong synergy with Local Village Councils (VC) and the Young Mizo Association (YMA).
- **Indian Army (Eastern Command)**:
  - *Trust Score: 77.1%*.
  - *Drivers*: National defense reverence, high enthusiasm for Agniveer rallies and Assam/Naga Regiments, rapid bridge/engineering rescue during landslides.
- **Mizoram State Government (ZPM Administration)**:
  - *Trust Score: 71.8%*.
  - *Drivers*: Compassionate humanitarian aid for displaced Chin and Kuki-Zo refugees, staunch defense of Mizo cross-border kinship, MSP crop price guarantees for ginger, turmeric, chili, and broom grass.

---

### 4. Facts & Figures as per Various Tribes of Mizoram
Dedicated facts, council structures, literacy rates, and priority concerns for all ethnic communities:
- **Lushai / Duhlian (Mizo)** (67.5% share, 94.2% literacy, Lingua Franca)
- **Lai** (9.8% share, Lawngtlai District, **Lai Autonomous District Council - LADC**)
- **Mara** (6.2% share, Siaha District, **Mara Autonomous District Council - MADC**)
- **Chakma** (8.5% share, Kamalanagar / Chawngte, **Chakma Autonomous District Council - CADC**)
- **Hmar** (3.1% share, Sinlung Hills Council - SHC / Sakawrdai)
- **Bru / Reang** (2.4% share, Mamit / Kolasib belt, post-repatriation welfare)
- **Paite, Ralte, Pang & Bawm** (2.5% share, Champhai border belt, Zokhawthar trade)

---

### 5. Top 10 Daily Social Media Narratives
Dynamic date-indexed explorer ranking the most viral discussions for any chosen day:
- **Rank & Viral Reach Score**
- **Headline & Narrative Summary**
- **Sentiment Polarity** (-100 to +100)
- **Demographic Skews** (Gender split %, Age tier distribution)
- **Tribal & Regional Associations**
- **Platform Badges** (X, YT, News, TG, FB, Govt)
- **Authentic Quotes with Mizo phrases and English translations**
- **Societal Takeaways**

---

### 6. Live Bilingual (Mizo & English) Sentiment Playground
Real-time text analyzer tool that evaluates any typed or pasted comment, social media post, or news article:
- Evaluates polarity using a curated bilingual lexicon (supporting terms like *fakawm, lawmawm, lungawi lo, ruihhlo, muanna*, etc.).
- Automatically detects institutional entities (*Assam Rifles, Mizoram Police, Indian Army, State Govt, CYMA, Tribal Councils*).
- Predicts demographic skew and allows one-click **injection into the Live Intelligence Feed**.

---

## 🚀 How to Run Locally

The application is completely self-contained and requires **zero external build dependencies**.

### Option 1: Start the Local Node.js Server
```bash
npm run dev
# or
node server.js
```
Then open your browser at:
```
http://localhost:3000
```

### Option 2: Direct File Execution
You can also open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Brave):
```
file:///c:/Users/Dell/OneDrive/Desktop/Sentimental/index.html
```

---

## 📁 Project Architecture

```
Sentimental/
├── index.html       # Semantic HTML5 dashboard layout with glassmorphic cards and tabs
├── styles.css       # Custom Vanilla CSS design system (Dark mode, neon accents, responsive)
├── app.js           # Client-side state manager, Chart.js integrations, NLP engine, survey voting
├── data.js          # Authentic Mizoram datasets (demographics, tribes, narratives, security scores)
├── server.js        # Zero-dependency Node.js HTTP static server
├── package.json     # Project metadata and run scripts
└── README.md        # Comprehensive documentation
```

---

## 📊 Exporting Data
- Click **"JSON Export"** on the top header to export filtered metrics, tribal figures, and security perception indices.
- Click **"CSV Export"** to download the Top 10 Daily Narratives for spreadsheet analysis.
