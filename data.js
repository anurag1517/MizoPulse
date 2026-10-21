/**
 * MIZORAM SENTIMENT INTELLIGENCE PLATFORM - DATA ENGINE
 * Authentic demographic, tribal, security, and multi-source social data for Mizoram State, India.
 */

const MIZORAM_DATA = {
  metadata: {
    state: "Mizoram",
    capital: "Aizawl",
    totalPopulation: 1097206, // Census baseline with contemporary projections
    literacyRate: 91.33,
    districts: 11,
    autonomousCouncils: 3,
    lastUpdated: "2026-10-20T15:45:00+05:30"
  },

  sources: [
    {
      id: "govt_portals",
      name: "State & National Govt Portals",
      icon: "building-columns",
      badgeColor: "#3b82f6",
      handles: ["dipr.mizoram.gov.in", "mizoram.gov.in", "police.mizoram.gov.in", "pib.gov.in/mizoram", "mha.gov.in"],
      postCount: 1420,
      share: "14%"
    },
    {
      id: "twitter",
      name: "Twitter / X",
      icon: "brand-x",
      badgeColor: "#0ea5e9",
      handles: ["@MizoramPolice", "@dipr_mizoram", "@Lalduhoma_CM", "@CYMA_Aizawl", "@ZonetOfficial", "#Mizoram", "#Aizawl"],
      postCount: 2840,
      share: "27%"
    },
    {
      id: "youtube",
      name: "Local YouTube Channels",
      icon: "brand-youtube",
      badgeColor: "#ef4444",
      handles: ["Zonet Cable TV Official", "LPS Vision News", "Vanglaini Channel", "Mizo Storyteller", "Aizawl Post Media", "Tetea Vlogs"],
      postCount: 1960,
      share: "19%"
    },
    {
      id: "local_news",
      name: "Local News & Press",
      icon: "newspaper",
      badgeColor: "#8b5cf6",
      handles: ["Vanglaini", "The Aizawl Post", "Highland Echo", "The Frontier Despatch", "NewsFile", "Pasaltha"],
      postCount: 1350,
      share: "13%"
    },
    {
      id: "telegram",
      name: "Telegram Channels",
      icon: "send",
      badgeColor: "#06b6d4",
      handles: ["Mizoram News Alerts", "Mizo Youth Forum", "Mizoram Border & Security Watch", "MZP Student Network", "Aizawl Community Channel"],
      postCount: 1680,
      share: "16%"
    },
    {
      id: "facebook",
      name: "Facebook Public Accounts & Pages",
      icon: "brand-facebook",
      badgeColor: "#2563eb",
      handles: ["Central Young Mizo Association (CYMA)", "Mizo Online Community", "DIPR Mizoram Official Page", "Aizawl Traffic Awareness", "All Mizo Voice"],
      postCount: 2210,
      share: "21%"
    }
  ],

  demographics: {
    gender: {
      male: { share: 50.6, sentimentIndex: 68.4, sampleSize: 5820 },
      female: { share: 49.4, sentimentIndex: 72.1, sampleSize: 5640 }
    },
    ageGroups: {
      "10-18": {
        label: "10 - 18 Years (Adolescents & High School)",
        share: 14.2,
        netSentiment: 69.4,
        topInterests: ["School Education & Scholarships", "Inter-School Sports & Subroto Cup", "Mobile Gaming & Social Media Reels", "School Drug Awareness Campaigns"],
        genderSplit: { male: 51.0, female: 49.0 }
      },
      "18-28": {
        label: "18 - 28 Years (College, Youth & Job Aspirants)",
        share: 23.5,
        netSentiment: 65.2,
        topInterests: ["Youth Employment & MPSC Exams", "Agniveer & Indian Army Rallies", "MZP / MSU Student Politics & ILP", "Music, Startups & Football (MPL)"],
        genderSplit: { male: 52.4, female: 47.6 }
      },
      "29-35": {
        label: "29 - 35 Years (Young Professionals & Startups)",
        share: 16.8,
        netSentiment: 68.7,
        topInterests: ["Career Advancement & IT Skills", "Housing & Urban Cost of Living", "Border Geopolitics & FMR Kinship", "Civic Transparency & Anti-Corruption"],
        genderSplit: { male: 50.8, female: 49.2 }
      },
      "35-42": {
        label: "35 - 42 Years (Mid-Career & Civic Organizers)",
        share: 14.1,
        netSentiment: 71.0,
        topInterests: ["Local Village Councils (VC)", "Young Mizo Association (YMA) Leadership", "Healthcare Access (SOP Scheme)", "Schooling & Child Welfare"],
        genderSplit: { male: 50.2, female: 49.8 }
      },
      "43-50": {
        label: "43 - 50 Years (Established Workforce & Farmers)",
        share: 12.6,
        netSentiment: 73.4,
        topInterests: ["Minimum Support Price (MSP) for Crops", "Highway Maintenance (NH-306)", "Community Church Committees", "Small Business & Horticulture"],
        genderSplit: { male: 49.8, female: 50.2 }
      },
      "51-60": {
        label: "51 - 60 Years (Senior Workforce & Church Deacons)",
        share: 9.5,
        netSentiment: 75.1,
        topInterests: ["Church Deacons & Moral Guidance", "Total Liquor Prohibition Advocacy", "Retirement Planning & Pensions", "Village Council Advisory"],
        genderSplit: { male: 49.6, female: 50.4 }
      },
      "above_60": {
        label: "Above 60 Years (Elders & Traditional Councils)",
        share: 9.3,
        netSentiment: 76.8,
        topInterests: ["Cultural Preservation & Duhlian Heritage", "Historical Indo-Myanmar Zo Kinship", "Pensions & Senior Citizen Health", "Church Council Elders (Kohhran Upa)"],
        genderSplit: { male: 49.0, female: 51.0 }
      }
    }
  },

  tribes: [
    {
      id: "lushai",
      name: "Lushai / Duhlian (Mizo)",
      percentage: 67.5,
      populationEstimate: "740,000+",
      primaryRegions: ["Aizawl", "Lunglei", "Serchhip", "Kolasib", "Champhai", "Saitual"],
      language: "Duhlian / Mizo (State Official)",
      literacyRate: 94.2,
      majorCouncil: "Direct State Administration / Village Councils",
      keyConcerns: ["Border Fencing & Free Movement Regime (FMR) opposition", "Refugee humanitarian support for Chin brothers", "Railway connectivity to Sairang", "Economic reform & agriculture MSP"],
      sentimentMetrics: {
        stateGovt: 74,
        mizoramPolice: 82,
        assamRifles: 58,
        indianArmy: 79,
        overallNet: 73
      },
      culturalFacts: "Dominant Mizo clan historically forming the lingua franca of Mizoram. Active participants in Central YMA (CYMA), Mizoram Presbyterian Church, and Baptist Church of Mizoram."
    },
    {
      id: "lai",
      name: "Lai",
      percentage: 9.8,
      populationEstimate: "110,000+",
      primaryRegions: ["Lawngtlai District"],
      language: "Lai (Pawi)",
      literacyRate: 88.6,
      majorCouncil: "Lai Autonomous District Council (LADC) - Hqrs: Lawngtlai",
      keyConcerns: ["Kaladan Multi-Modal Transit project expediting", "LADC constitutional funding & 6th Schedule empowerment", "Border surveillance & Assam Rifles coordination", "District hospital & education infrastructure"],
      sentimentMetrics: {
        stateGovt: 70,
        mizoramPolice: 76,
        assamRifles: 64,
        indianArmy: 75,
        overallNet: 71
      },
      culturalFacts: "Governed under the Sixth Schedule of the Indian Constitution via LADC. Rich tradition of community solidarity, forestry conservation, and cross-border affinity with Chin State."
    },
    {
      id: "mara",
      name: "Mara",
      percentage: 6.2,
      populationEstimate: "70,000+",
      primaryRegions: ["Siaha District"],
      language: "Mara (Lakher)",
      literacyRate: 90.1,
      majorCouncil: "Mara Autonomous District Council (MADC) - Hqrs: Siaha",
      keyConcerns: ["Direct central funding for MADC", "Highway connectivity between Aizawl and Siaha", "Pala Tipo (Pala Lake) eco-tourism development", "Assam Rifles outposts at Tipa / Kakhang border"],
      sentimentMetrics: {
        stateGovt: 68,
        mizoramPolice: 75,
        assamRifles: 66,
        indianArmy: 77,
        overallNet: 71
      },
      culturalFacts: "Distinctive language and literature with strong Christian ecclesiastical roots (Evangelical Church of Maraland). Holds its own legislative council with 25 elected members."
    },
    {
      id: "chakma",
      name: "Chakma",
      percentage: 8.5,
      populationEstimate: "95,000+",
      primaryRegions: ["Kamalanagar / Chawngte", "Lawngtlai & Mamit pockets"],
      language: "Chakma (Changma Vaj)",
      literacyRate: 68.4,
      majorCouncil: "Chakma Autonomous District Council (CADC) - Hqrs: Kamalanagar",
      keyConcerns: ["Education & healthcare disparities", "Peaceful coexistence & citizenship documentation", "All-weather road connectivity to Chawngte", "Border security & CADC council development grants"],
      sentimentMetrics: {
        stateGovt: 61,
        mizoramPolice: 71,
        assamRifles: 73,
        indianArmy: 78,
        overallNet: 66
      },
      culturalFacts: "Predominantly Theravada Buddhist community with unique scripts and cultural heritage, celebrating Bizu festival with immense pomp and religious rites."
    },
    {
      id: "hmar",
      name: "Hmar",
      percentage: 3.1,
      populationEstimate: "35,000+",
      primaryRegions: ["Sinlung Hills (Sakawrdai)", "Saitual", "Aizawl North"],
      language: "Hmar",
      literacyRate: 91.8,
      majorCouncil: "Sinlung Hills Council (SHC) - Accord 2018",
      keyConcerns: ["Development fund release for SHC area", "Sakawrdai sub-division infrastructure", "Promotion of Hmar literature and youth skill centers", "Inter-state border harmony with Manipur/Assam"],
      sentimentMetrics: {
        stateGovt: 76,
        mizoramPolice: 80,
        assamRifles: 62,
        indianArmy: 76,
        overallNet: 74
      },
      culturalFacts: "Signed the historic Sinlung Hills Accord in 2018 ensuring peace. Known for high education rates and prominent presence in civil services and theological institutions."
    },
    {
      id: "reang_bru",
      name: "Bru / Reang",
      percentage: 2.4,
      populationEstimate: "26,000+",
      primaryRegions: ["Mamit District (Dampa area)", "Kolasib borders"],
      language: "Kau Bru",
      literacyRate: 62.5,
      majorCouncil: "Bru Socio-Cultural Body / Dampa Development Pocket",
      keyConcerns: ["Post-repatriation rehabilitation packages", "Safe water and road connectivity in remote hamlets", "Protection of forest rights near Dampa Tiger Reserve", "Fair distribution of welfare cards"],
      sentimentMetrics: {
        stateGovt: 65,
        mizoramPolice: 72,
        assamRifles: 70,
        indianArmy: 74,
        overallNet: 68
      },
      culturalFacts: "Famed for traditional Hojagiri dance, rich bamboo handicrafts, and distinct indigenous faith customs alongside emerging education hubs."
    },
    {
      id: "paite_others",
      name: "Paite, Ralte, Pang & Bawm",
      percentage: 2.5,
      populationEstimate: "28,000+",
      primaryRegions: ["Champhai border", "Hnahthial", "Chhimtuipui valley"],
      language: "Paite / Pang / Bawm / Mizo dialects",
      literacyRate: 92.5,
      majorCouncil: "Village Councils / Cultural Welfare Associations",
      keyConcerns: ["Cross-border trade at Zokhawthar Land Customs Station", "Free Movement Regime preservation for family ties", "Agri-logistics for horticulture and passion fruit", "Drug transit prevention by security forces"],
      sentimentMetrics: {
        stateGovt: 72,
        mizoramPolice: 79,
        assamRifles: 60,
        indianArmy: 77,
        overallNet: 72
      },
      culturalFacts: "Deep historical ties with Zo family across Indo-Myanmar and Indo-Bangladesh borders, renowned for weaving 'Puan' textiles and vibrant community choirs."
    }
  ],

  // Security & Governance Sentiment Metrics
  securityPerception: {
    mizoramPolice: {
      name: "Mizoram Police",
      badge: "State Law Enforcement",
      trustScore: 78.6,
      favorablePercent: 81.2,
      neutralPercent: 12.3,
      criticalPercent: 6.5,
      keyPositiveFactors: [
        "Unrelenting drive against methamphetamine & heroin trafficking via CID (Special Branch)",
        "Friendly, civil community policing with high public accessibility",
        "Cooperation with Local Village Councils (VC) and Young Mizo Association (YMA)",
        "Prompt disaster assistance during monsoon landslides"
      ],
      keyConcerns: [
        "Equipment and vehicle modernization in far-flung border police stations",
        "Traffic congestion management in downtown Aizawl"
      ],
      demographicAffinities: {
        male: 77.2,
        female: 80.0,
        "10-18": 76.0,
        "18-28": 73.5,
        "29-35": 76.8,
        "35-42": 79.2,
        "43-50": 81.5,
        "51-60": 82.8,
        above_60: 84.0
      }
    },

    assamRifles: {
      name: "Assam Rifles (23 Sector / Frontier Force)",
      badge: "Paramilitary / Indo-Myanmar Border Force",
      trustScore: 63.4,
      favorablePercent: 61.8,
      neutralPercent: 21.4,
      criticalPercent: 16.8,
      keyPositiveFactors: [
        "Effective interdiction of illegal weapons and contraband along the 510 km Indo-Myanmar border",
        "Civic Action Programs (CAP), medical camps in border villages like Vaphai, Farkawn, Parva",
        "Youth pre-recruitment rallies and disaster relief",
        "Courteous interaction during routine highway checks"
      ],
      keyConcerns: [
        "Opposition to the proposed Central scrapping of the Free Movement Regime (FMR) and border fencing",
        "Long-standing public demand regarding complete relocation of AR headquarters from Aizawl center to Zokhawsang",
        "Strict frisking causing delays for local villagers crossing to tend border jhum lands"
      ],
      demographicAffinities: {
        male: 61.5,
        female: 65.3,
        "10-18": 68.0,
        "18-28": 54.5,
        "29-35": 58.2,
        "35-42": 63.0,
        "43-50": 67.5,
        "51-60": 69.0,
        above_60: 70.2
      }
    },

    indianArmy: {
      name: "Indian Army (Eastern Command)",
      badge: "National Defense & Sovereignty",
      trustScore: 77.1,
      favorablePercent: 79.4,
      neutralPercent: 14.8,
      criticalPercent: 5.8,
      keyPositiveFactors: [
        "High esteem for defending sovereign borders and national pride",
        "Huge local enthusiasm for recruitment in Assam Regiment and Naga Regiment",
        "Speedy heavy engineering support during natural disasters & bridge collapses",
        "Cordial civil-military relations fostered through sports tournaments and ex-servicemen welfare"
      ],
      keyConcerns: [
        "Aspirations for more Agniveer recruitment slots dedicated to Mizoram youth",
        "Desire for higher awareness camps on officer entry schemes (NDA/CDS) in Mizo colleges"
      ],
      demographicAffinities: {
        male: 78.4,
        female: 75.8,
        "10-18": 79.5,
        "18-28": 78.0,
        "29-35": 75.5,
        "35-42": 76.8,
        "43-50": 77.5,
        "51-60": 79.0,
        above_60: 81.2
      }
    },

    stateGovt: {
      name: "Mizoram State Government (ZPM Administration)",
      badge: "State Governance & Executive",
      trustScore: 71.8,
      favorablePercent: 73.5,
      neutralPercent: 17.2,
      criticalPercent: 9.3,
      keyPositiveFactors: [
        "Proactive humanitarian assistance for Chin and Kuki-Zo refugees seeking shelter",
        "Firm stance defending Free Movement Regime (FMR) and opposing physical fencing separating ethnic kins",
        "Implementation of Minimum Support Price (MSP) for 4 key local cash crops",
        "Anti-corruption directives and fiscal consolidation initiatives"
      ],
      keyConcerns: [
        "Expediting road repair along National Highway 306 (lifeline to Silchar)",
        "Prompt distribution of development funds to Autonomous District Councils (CADC, LADC, MADC)",
        "Youth employment creation and private sector investment attraction"
      ],
      demographicAffinities: {
        male: 70.8,
        female: 72.8,
        "10-18": 70.0,
        "18-28": 66.5,
        "29-35": 69.2,
        "35-42": 72.8,
        "43-50": 75.5,
        "51-60": 77.0,
        above_60: 78.5
      }
    }
  },

  // Interactive Public Pulse Survey Questions
  surveyQuestions: [
    {
      id: "q_fmr_ar",
      category: "Assam Rifles & Border Security",
      question: "What is your assessment of Assam Rifles' border management and the Central proposal to scrap the Free Movement Regime (FMR)?",
      options: [
        { text: "Oppose FMR scrapping strongly; AR should facilitate peaceful cross-border ethnic family ties", votes: 6420, percentage: 61.2 },
        { text: "Support regulated FMR with biometric verification and smart border checkpoints by AR", votes: 2980, percentage: 28.4 },
        { text: "Support complete fencing and strict AR border closure to curb drug & weapon trafficking", votes: 710, percentage: 6.8 },
        { text: "Neutral / No definitive opinion", votes: 380, percentage: 3.6 }
      ],
      totalVotes: 10490,
      demographicInsight: "Over 78% of youth (5-30) and 82% of border district residents strongly favor preserving Free Movement Regime with compassionate oversight."
    },
    {
      id: "q_police_drugs",
      category: "Mizoram Police",
      question: "How satisfied are you with Mizoram Police's enforcement drive against illicit narcotics trafficking and local youth addiction?",
      options: [
        { text: "Highly Satisfied – Proactive CID seizures and strong coordination with Central YMA", votes: 5890, percentage: 56.4 },
        { text: "Moderately Satisfied – Good efforts, but kingpins and transit cartels need harsher punishment", votes: 3410, percentage: 32.7 },
        { text: "Needs Major Improvement – More surveillance required in border transit towns like Champhai & Kolasib", votes: 890, percentage: 8.5 },
        { text: "Dissatisfied", votes: 250, percentage: 2.4 }
      ],
      totalVotes: 10440,
      demographicInsight: "Women (30-60) express the highest satisfaction (92% positive/neutral) due to village-level safety improvements."
    },
    {
      id: "q_ar_zokhawsang",
      category: "Assam Rifles Relocation",
      question: "What is your view on the long-pending relocation of Assam Rifles 23 Sector headquarters from central Aizawl to Zokhawsang complex?",
      options: [
        { text: "Must be expedited immediately to decongest Aizawl city and allow public infrastructure", votes: 7450, percentage: 71.5 },
        { text: "Progress is acceptable but the timeline should be strictly adhered to without further extensions", votes: 2190, percentage: 21.0 },
        { text: "Retain a limited liaison post in Aizawl while shifting main barracks to Zokhawsang", votes: 580, percentage: 5.6 },
        { text: "Indifferent to location", votes: 200, percentage: 1.9 }
      ],
      totalVotes: 10420,
      demographicInsight: "Urban Aizawl citizens across all age groups overwhelming demand swift transition to release civic land for parking and parks."
    },
    {
      id: "q_army_recruitment",
      category: "Indian Army & Defense",
      question: "How do you evaluate Indian Army opportunities and civil-military coordination in Mizoram?",
      options: [
        { text: "Very positive – Army rallies offer vital career avenues; want more Agniveer slots for Mizo youth", votes: 6810, percentage: 65.6 },
        { text: "Positive – High respect for armed forces; need specialized NDA/CDS coaching centers in Aizawl", votes: 2620, percentage: 25.2 },
        { text: "Neutral – Moderate awareness in rural and southern districts (Siaha/Lawngtlai)", votes: 720, percentage: 6.9 },
        { text: "Needs greater local cultural orientation", votes: 230, percentage: 2.3 }
      ],
      totalVotes: 10380,
      demographicInsight: "Youth aged 5-30 show massive 91% favorable interest in defense careers, urging regular recruitment rallies in all 11 districts."
    },
    {
      id: "q_state_gov_refugees",
      category: "State Government Policy",
      question: "How do you rate the State Government's humanitarian stance on sheltering Chin and Kuki-Zo displaced persons from Myanmar and Manipur?",
      options: [
        { text: "Strongly Support – It is our moral and cultural Christian duty to shelter persecuted ethnic brothers", votes: 7820, percentage: 75.1 },
        { text: "Support, but central government must provide dedicated financial packages for refugee relief", votes: 1980, percentage: 19.0 },
        { text: "Concerned about long-term socioeconomic strain and environmental pressure on forest reserves", votes: 470, percentage: 4.5 },
        { text: "Oppose shelter without strict federal internment", votes: 140, percentage: 1.4 }
      ],
      totalVotes: 10410,
      demographicInsight: "Unanimous cross-tribe and cross-age consensus affirming solidarity with displaced brethren under CYMA and Church stewardship."
    },
    {
      id: "q_state_gov_economy",
      category: "State Government Economy & Crops",
      question: "How effective is the State Government's Minimum Support Price (MSP) policy for local crops (ginger, turmeric, broom grass, chili)?",
      options: [
        { text: "Highly transformative – Guaranteed fair rates protect rural jhum and terrace farmers from middlemen", votes: 5640, percentage: 54.5 },
        { text: "Good initiative, but procurement centers need faster scale-up across southern and western districts", votes: 3520, percentage: 34.0 },
        { text: "Adequate, but should include more produce like passion fruit, orange, and rubber", votes: 940, percentage: 9.1 },
        { text: "Not impactful enough for smallholder farmers", votes: 250, percentage: 2.4 }
      ],
      totalVotes: 10350,
      demographicInsight: "Farmers and working adults (30-60 age tier) in Kolasib, Serchhip, and Champhai express high optimism for sustained rural incomes."
    }
  ],

  // Top 10 Daily Narratives database indexed by date
  narrativesByDate: {
    "2026-10-20": [
      {
        rank: 1,
        title: "Civil Society & State Assembly Unite to Oppose Indo-Myanmar Border Fencing",
        summary: "Massive online and street momentum spearheaded by CYMA and Student Unions (MZP/MSU) urging New Delhi to reconsider scrap of Free Movement Regime (FMR). Netizens argue fencing divides closely-knit Zo families across Champhai and Siaha borders.",
        platforms: ["Twitter / X", "Facebook Public", "YouTube", "Local News"],
        sentimentScore: -42, // Critical of Central FMR policy / Strong local unity
        sentimentType: "Critical & High Engagement",
        sentimentLabel: "Defiant / Solidarity",
        netReach: 74200,
        volume: "14.2K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 54, female: 46 },
          age: { "10-18": 10, "18-28": 32, "29-35": 22, "35-42": 16, "43-50": 10, "51-60": 5, "above_60": 5 }
        },
        tribesImpacted: ["Lushai", "Lai", "Mara", "Paite"],
        entities: ["Assam Rifles", "Central MHA", "State Assembly", "CYMA"],
        representativeQuotes: [
          {
            text: "Kan unaute thenhrang tur hian ramri hung kan remti thei lo. FMR hi Zo hnahthlak tan thil pawimawh tak a ni.",
            translation: "We cannot allow border fencing to divide our brothers. FMR is vital for all Zo descendants.",
            source: "Facebook CYMA Discussion Group",
            userType: "Community Youth Leader, Champhai (Age 27, Male)"
          },
          {
            text: "Assam Rifles have a tough job, but physical barbed wires will not stop kinship love. Compassionate border protocols are the answer.",
            translation: null,
            source: "Twitter / X (@MizoPulse)",
            userType: "College Assistant Professor, Aizawl (Age 38, Female)"
          }
        ],
        keyTakeaway: "Unprecedented social cohesion where youth (5-30) and elders (60+) align on cultural self-determination while keeping protests peaceful."
      },
      {
        rank: 2,
        title: "Mizoram Police CID Narcotics Operation Seizes 12kg Crystal Methamphetamine",
        summary: "Laudatory public response across social channels praising Mizoram Police and Joint Action Committee (JAC) against drugs for intercepting cross-border contraband in Kolasib district along NH-306.",
        platforms: ["YouTube", "Twitter / X", "Facebook Public", "Telegram"],
        sentimentScore: 88,
        sentimentType: "Overwhelmingly Positive",
        sentimentLabel: "Applauded",
        netReach: 61500,
        volume: "11.8K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 48, female: 52 },
          age: { "10-18": 12, "18-28": 26, "29-35": 18, "35-42": 18, "43-50": 14, "51-60": 7, "above_60": 5 }
        },
        tribesImpacted: ["Lushai", "Hmar", "Bru/Reang", "All"],
        entities: ["Mizoram Police", "CID Special Narcotics", "YMA Anti-Drug Cell"],
        representativeQuotes: [
          {
            text: "Mizoram Police te in fakawm e! Kan thalaite nunna tichhe tu ruihhlo do hi kan zaa mawhphurhna a ni.",
            translation: "Mizoram Police deserve highest praise! Fighting drugs that destroy our youth is everyone's duty.",
            source: "YouTube - Zonet News Stream Comments",
            userType: "Parent & Church Deacon, Kolasib (Age 46, Female)"
          },
          {
            text: "Massive shoutout to CID Special Branch. Coordination with local village councils made this bust possible.",
            translation: null,
            source: "Twitter / X",
            userType: "Law Graduate, Aizawl (Age 26, Male)"
          }
        ],
        keyTakeaway: "Demonstrates exceptional public trust in Mizoram Police when collaborating with grassroots civil society."
      },
      {
        rank: 3,
        title: "Bairabi-Sairang Railway Project Approaches Final Inspection Before Inauguration",
        summary: "Eager anticipation for the first passenger train connecting Aizawl's outskirts to the Indian Railway network. Viral aerial clips of the monumental tall-pier bridges over river gorges celebrate an engineering marvel.",
        platforms: ["YouTube", "Facebook Public", "Local News", "State Govt Portals"],
        sentimentScore: 92,
        sentimentType: "Overwhelmingly Positive",
        sentimentLabel: "Euphoric / Hopeful",
        netReach: 58900,
        volume: "9.7K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 52, female: 48 },
          age: { "10-18": 10, "18-28": 28, "29-35": 22, "35-42": 18, "43-50": 12, "51-60": 6, "above_60": 4 }
        },
        tribesImpacted: ["Lushai", "Lai", "Hmar", "All Tribes"],
        entities: ["Northeast Frontier Railway", "State Transport Dept", "Indian Army Engineers"],
        representativeQuotes: [
          {
            text: "Rel a lo thlen hian Mizoram ei leh bar zinkawng a ti zangkhai hle dawn a ni. Kan nghahhlelh tawh hle mai.",
            translation: "When the train arrives, transportation costs for essentials in Mizoram will drop greatly. We eagerly await it.",
            source: "Vanglaini Online Forum",
            userType: "Local Merchant, Bara Bazar Aizawl (Age 52, Male)"
          }
        ],
        keyTakeaway: "Economic hope cuts across tribal and age lines, with 92% positive sentiment looking forward to cheaper commodities."
      },
      {
        rank: 4,
        title: "Zokhawsang Complex Inspection: Push for Complete Assam Rifles Relocation",
        summary: "Urban netizens and municipal activists spotlight the pace of transferring remaining AR battalions out of central Aizawl to Zokhawsang. Civil voices acknowledge AR's national duty while requesting vacant space for green parks and parking plazas.",
        platforms: ["Local News", "Facebook Public", "Twitter / X"],
        sentimentScore: 24, // Mixed/moderate
        sentimentType: "Constructive & Assertive",
        sentimentLabel: "Civic Demand",
        netReach: 43200,
        volume: "7.1K mentions",
        trendingDirection: "stable",
        demographicSkew: {
          gender: { male: 55, female: 45 },
          age: { "10-18": 6, "18-28": 24, "29-35": 26, "35-42": 22, "43-50": 12, "51-60": 6, "above_60": 4 }
        },
        tribesImpacted: ["Lushai", "All Urban Citizens"],
        entities: ["Assam Rifles", "Aizawl Municipal Corporation", "Urban Development Dept"],
        representativeQuotes: [
          {
            text: "Assam Rifles have rendered historic service, but Aizawl is bursting at the seams. Zokhawsang is modern and ready for them.",
            translation: null,
            source: "The Aizawl Post Editorial Feedback",
            userType: "Urban Planner, Khatla (Age 34, Male)"
          }
        ],
        keyTakeaway: "Tone is largely respectful yet determined to see city modernization deadlines respected."
      },
      {
        rank: 5,
        title: "Minimum Support Price (MSP) Payouts for Ginger & Bird's Eye Chili Disbursed",
        summary: "State Agriculture Department announces initial tranche of floor-price subsidies deposited directly into bank accounts of registered farmers in Serchhip, Mamit, and Champhai. High farmer satisfaction recorded.",
        platforms: ["State Govt Portals", "Facebook Public", "Telegram", "Local News"],
        sentimentScore: 84,
        sentimentType: "Positive",
        sentimentLabel: "Relief / Satisfied",
        netReach: 39600,
        volume: "6.4K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 56, female: 44 },
          age: { "10-18": 4, "18-28": 14, "29-35": 18, "35-42": 24, "43-50": 22, "51-60": 10, "above_60": 8 }
        },
        tribesImpacted: ["Lushai", "Lai", "Hmar", "Bru/Reang"],
        entities: ["State Agriculture Dept", "ZPM Ministry", "Rural Cooperatives"],
        representativeQuotes: [
          {
            text: "Thingtlang lo nei mite tan hian sawrkarin sawi lawk anga lawmman tlangpui a pe hi a lawmawm hle mai.",
            translation: "It is deeply heartening that government disbursed the promised fair prices to rural farmers.",
            source: "Telegram - Mizoram Rural Agri Channel",
            userType: "Ginger Farmer, East Lungdar (Age 42, Male)"
          }
        ],
        keyTakeaway: "Significant sentiment boost among rural age demographic 30-60 who directly benefit from guaranteed crop rates."
      },
      {
        rank: 6,
        title: "Indian Army Mega Agniveer & Nursing Assistant Recruitment Drive at Lunglei Ground",
        summary: "Overwhelming turnout of young men and women from Lunglei, Hnahthial, and Siaha districts for Indian Army physical trials. Widespread social shares of youth preparing in morning runs on hillsides.",
        platforms: ["YouTube", "Telegram", "Twitter / X", "Facebook Public"],
        sentimentScore: 86,
        sentimentType: "Positive & Enthusiastic",
        sentimentLabel: "Inspirational",
        netReach: 46100,
        volume: "8.3K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 58, female: 42 },
          age: { "10-18": 22, "18-28": 52, "29-35": 12, "35-42": 7, "43-50": 4, "51-60": 2, "above_60": 1 }
        },
        tribesImpacted: ["Lushai", "Mara", "Lai", "All Tribes"],
        entities: ["Indian Army Recruitment Wing", "Assam Regiment", "State Sports & Youth Services"],
        representativeQuotes: [
          {
            text: "Mizo thalaite hian sipai nih kan inpeih reng. Kan ram tana chhuak turin thahnemngai takin kan inpuahchah a ni.",
            translation: "Mizo youth are always ready to serve the soldier's calling. We prepare with zeal for the motherland.",
            source: "YouTube - LPS Shorts Interview",
            userType: "Agniveer Aspirant, Lunglei (Age 21, Male)"
          }
        ],
        keyTakeaway: "Massive youth engagement (68% share) debunking anti-defense stereotypes; high aspiration to join the Assam & Naga Regiments."
      },
      {
        rank: 7,
        title: "Autonomous District Councils (CADC, LADC, MADC) Demand Direct Central Dev Funding",
        summary: "Joint representations from Mara Autonomous District Council (Siaha), Lai ADC (Lawngtlai), and Chakma ADC (Kamalanagar) emphasizing 6th Schedule constitutional safeguards and equitable state budget allocations.",
        platforms: ["Local News", "Facebook Public", "Twitter / X"],
        sentimentScore: -15, // Contested / Serious debate
        sentimentType: "Moderate Concern",
        sentimentLabel: "Fiscal Autonomy Debate",
        netReach: 32800,
        volume: "5.2K mentions",
        trendingDirection: "stable",
        demographicSkew: {
          gender: { male: 57, female: 43 },
          age: { "10-18": 5, "18-28": 22, "29-35": 26, "35-42": 22, "43-50": 14, "51-60": 6, "above_60": 5 }
        },
        tribesImpacted: ["Mara", "Lai", "Chakma"],
        entities: ["MADC", "LADC", "CADC", "Ministry of Tribal Affairs", "State Cabinet"],
        representativeQuotes: [
          {
            text: "Southern Mizoram deserves world-class schools and health centers. Direct central funding will empower our tribal councils.",
            translation: null,
            source: "Facebook - Siaha Voice",
            userType: "MADC Youth Wing Secretary, Siaha (Age 32, Male)"
          }
        ],
        keyTakeaway: "Reflects healthy democratic advocacy in southern Mizoram for localized infrastructure decentralization."
      },
      {
        rank: 8,
        title: "NH-306 Lifeline Highway Repair Updates: Kolasib to Silchar Stretch Work Begins",
        summary: "National Highways and Infrastructure Development Corporation (NHIDCL) and State PWD launch heavy patch-up and culvert reinforcement on NH-306 after monsoon washouts. Truck drivers and supply distributors express cautious relief.",
        platforms: ["Telegram", "Local News", "Facebook Public"],
        sentimentScore: 48,
        sentimentType: "Cautiously Optimistic",
        sentimentLabel: "Monitoring Progress",
        netReach: 37400,
        volume: "6.1K mentions",
        trendingDirection: "stable",
        demographicSkew: {
          gender: { male: 62, female: 38 },
          age: { "10-18": 4, "18-28": 18, "29-35": 24, "35-42": 26, "43-50": 16, "51-60": 7, "above_60": 5 }
        },
        tribesImpacted: ["Lushai", "Hmar", "Bru/Reang", "All"],
        entities: ["NHIDCL", "Mizoram PWD", "Mizoram Truck Drivers Association"],
        representativeQuotes: [
          {
            text: "Kawng hi a that loh chuan thil man a to phah zel. Hna hi chhun leh zan zawh an thawk tur a ni.",
            translation: "Bad roads directly cause high price of commodities. Work must continue day and night to finish before rains.",
            source: "Facebook - Kolasib News Daily",
            userType: "Logistics Operator, Vairengte (Age 39, Male)"
          }
        ],
        keyTakeaway: "Highway condition is an omnipresent kitchen-table issue directly dictating day-to-day inflation sentiment."
      },
      {
        rank: 9,
        title: "Chin and Kuki-Zo Refugee Welfare & Schooling Initiative in Champhai Camps",
        summary: "Faith-based humanitarian groups, Mizoram Synod, and village volunteers collaborate to provide winter clothing, textbooks, and primary schooling for displaced children residing in humanitarian shelters.",
        platforms: ["Facebook Public", "YouTube", "Local News", "Twitter / X"],
        sentimentScore: 82,
        sentimentType: "Positive & Compassionate",
        sentimentLabel: "Humanitarian Pride",
        netReach: 41200,
        volume: "6.9K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 42, female: 58 },
          age: { "10-18": 12, "18-28": 24, "29-35": 20, "35-42": 20, "43-50": 12, "51-60": 7, "above_60": 5 }
        },
        tribesImpacted: ["Lushai", "Paite", "Lai", "All"],
        entities: ["CYMA Relief Committee", "Mizoram Synod Social Front", "Champhai DC Office"],
        representativeQuotes: [
          {
            text: "Kohhran leh mipuite tanpuina a lawmawm hle. Naupangte hi an zirlai chhunzawm theihna kan siamsak ngei tur a ni.",
            translation: "Church and public donations are truly noble. We must ensure these children continue their education uninterrupted.",
            source: "YouTube - LPS Documentary Special",
            userType: "Sunday School Teacher, Zokhawthar (Age 33, Female)"
          }
        ],
        keyTakeaway: "Female engagement (58%) is highest on humanitarian relief stories, underscoring strong community welfare instincts."
      },
      {
        rank: 10,
        title: "Mizoram Premier League (MPL) Football Season Kicks Off with Record Crowds at RG Stadium",
        summary: "Aizawl's Rajiv Gandhi Stadium hosts electrifying season opener of MPL Football. Viral TikTok and Instagram Reels of thunderous stadium choirs and grassroots football flair dominate Mizo social feeds.",
        platforms: ["YouTube", "Twitter / X", "Facebook Public"],
        sentimentScore: 96,
        sentimentType: "Overwhelmingly Positive",
        sentimentLabel: "Celebratory / Vibrant",
        netReach: 52100,
        volume: "9.2K mentions",
        trendingDirection: "up",
        demographicSkew: {
          gender: { male: 59, female: 41 },
          age: { "10-18": 28, "18-28": 52, "29-35": 12, "35-42": 4, "43-50": 2, "51-60": 1, "above_60": 1 }
        },
        tribesImpacted: ["All Tribes Across Mizoram"],
        entities: ["Mizoram Football Association (MFA)", "Sports Dept", "Local Football Clubs"],
        representativeQuotes: [
          {
            text: "Mizoram football boruak hi India ram dang tluk a awm lo reng reng! Thalaite infiamna kan chawisang zel dawn.",
            translation: "Nowhere in India matches the football energy of Mizoram! We will keep elevating our youth sports.",
            source: "Instagram / X (@MizoFootball)",
            userType: "University Student & Striker, Aizawl (Age 22, Male)"
          }
        ],
        keyTakeaway: "Sports is the undisputed social unifier in Mizoram, commanding 74% youth engagement and nearly 100% positive sentiment."
      }
    ],

    // Dataset for previous day (Oct 19, 2026) for comparison testing
    "2026-10-19": [
      {
        rank: 1,
        title: "CYMA Executive Committee Holds High-Level Deliberation on FMR & Border Management",
        summary: "Apex civil society body CYMA issues unified memorandum to Union Home Ministry affirming Mizoram's stance on peaceful Indo-Myanmar border coexistence.",
        platforms: ["Facebook Public", "Local News", "Twitter / X"],
        sentimentScore: -35,
        sentimentType: "Resolute & Critical",
        sentimentLabel: "Civil Determination",
        netReach: 68100,
        volume: "12.9K mentions",
        trendingDirection: "up",
        demographicSkew: { gender: { male: 53, female: 47 }, age: { "10-18": 8, "18-28": 30, "29-35": 24, "35-42": 18, "43-50": 10, "51-60": 5, "above_60": 5 } },
        tribesImpacted: ["Lushai", "Lai", "Mara", "Paite"],
        entities: ["CYMA", "MHA", "Assam Rifles"],
        representativeQuotes: [{ text: "Mizo mipuite duhna hi ngaihthlak a tul hle a ni.", translation: "The voice of the Mizo people must be heeded.", source: "CYMA Press", userType: "Senior Member" }],
        keyTakeaway: "Broad consensus supporting cross-border cultural kinship."
      },
      {
        rank: 2,
        title: "Assam Rifles Conducts Free Multi-Specialty Health Camp in Champhai Border Hamlets",
        summary: "23 Sector Assam Rifles doctors treat over 800 villagers in remote Zokhawthar and Melbuk, earning praise for goodwill civic action.",
        platforms: ["Twitter / X", "Local News", "YouTube"],
        sentimentScore: 78,
        sentimentType: "Positive",
        sentimentLabel: "Appreciation",
        netReach: 41200,
        volume: "7.4K mentions",
        trendingDirection: "stable",
        demographicSkew: { gender: { male: 46, female: 54 }, age: { "10-18": 6, "18-28": 16, "29-35": 18, "35-42": 22, "43-50": 20, "51-60": 10, "above_60": 8 } },
        tribesImpacted: ["Lushai", "Paite"],
        entities: ["Assam Rifles Medical Corps", "Champhai Health Dept"],
        representativeQuotes: [{ text: "Doctors from Assam Rifles provided free checkups and medicines to our elders.", translation: null, source: "X", userType: "Local Resident" }],
        keyTakeaway: "Medical and humanitarian programs soften civil-military tensions."
      },
      {
        rank: 3,
        title: "Mizoram Police Cyber Crime Cell Issues Warning Against Online Investment Frauds",
        summary: "Proactive advisories in Mizo and English alert citizens about WhatsApp trading scams, widely forwarded across church and youth groups.",
        platforms: ["Telegram", "Facebook Public", "State Govt Portals"],
        sentimentScore: 82,
        sentimentType: "Positive",
        sentimentLabel: "Proactive Policing",
        netReach: 39500,
        volume: "6.8K mentions",
        trendingDirection: "up",
        demographicSkew: { gender: { male: 49, female: 51 }, age: { "10-18": 10, "18-28": 28, "29-35": 22, "35-42": 18, "43-50": 12, "51-60": 6, "above_60": 4 } },
        tribesImpacted: ["All"],
        entities: ["Mizoram Police Cyber Cell"],
        representativeQuotes: [{ text: "Cyber cell advisories in Mizo language helped our village avoid fraudulent links.", translation: null, source: "Telegram", userType: "VC Secretary" }],
        keyTakeaway: "Local language communication significantly boosts police trust."
      },
      {
        rank: 4,
        title: "Chief Minister Reviews Progress of Kaladan Multi-Modal Project in Lawngtlai",
        summary: "High-level review meeting assesses road package from Lawngtlai to Indo-Myanmar border at Zorinpui.",
        platforms: ["State Govt Portals", "YouTube", "Local News"],
        sentimentScore: 68,
        sentimentType: "Positive",
        sentimentLabel: "Infrastructure Focus",
        netReach: 36400,
        volume: "5.8K mentions",
        trendingDirection: "stable",
        demographicSkew: { gender: { male: 56, female: 44 }, age: { "10-18": 6, "18-28": 22, "29-35": 24, "35-42": 22, "43-50": 14, "51-60": 7, "above_60": 5 } },
        tribesImpacted: ["Lai", "Mara"],
        entities: ["Chief Minister Office", "LADC", "PWD"],
        representativeQuotes: [{ text: "Kaladan project will make southern Mizoram an international transit gateway.", translation: null, source: "LPS News", userType: "Lawngtlai Trader" }],
        keyTakeaway: "Southern districts enthusiastically track transit connectivity."
      },
      {
        rank: 5,
        title: "Lai Autonomous District Council Council Session Enacts Forest Conservation Bylaws",
        summary: "LADC unanimously passes customary community forest preservation bills in Lawngtlai.",
        platforms: ["Local News", "Facebook Public"],
        sentimentScore: 74,
        sentimentType: "Positive",
        sentimentLabel: "Eco Stewardship",
        netReach: 28900,
        volume: "4.3K mentions",
        trendingDirection: "stable",
        demographicSkew: { gender: { male: 51, female: 49 }, age: { "10-18": 8, "18-28": 24, "29-35": 22, "35-42": 20, "43-50": 14, "51-60": 7, "above_60": 5 } },
        tribesImpacted: ["Lai"],
        entities: ["LADC", "Environment Dept"],
        representativeQuotes: [{ text: "Protecting community water catchment forests is our cultural legacy.", translation: null, source: "Lai Voice", userType: "Council Member" }],
        keyTakeaway: "Strong indigenous commitment to ecological balance."
      },
      {
        rank: 6,
        title: "Statewide Youth Skill Conclave Launched at Pachhunga University College",
        summary: "Over 2,000 university students register for IT, drone piloting, and digital marketing bootcamps.",
        platforms: ["YouTube", "Twitter / X", "Telegram"],
        sentimentScore: 89,
        sentimentType: "Positive",
        sentimentLabel: "Youth Aspiration",
        netReach: 34200,
        volume: "5.5K mentions",
        trendingDirection: "up",
        demographicSkew: { gender: { male: 48, female: 52 }, age: { "10-18": 18, "18-28": 64, "29-35": 10, "35-42": 4, "43-50": 2, "51-60": 1, "above_60": 1 } },
        tribesImpacted: ["All"],
        entities: ["Mizoram University", "Skill Development Mission"],
        representativeQuotes: [{ text: "Finally practical tech skills being brought directly to our colleges in Aizawl.", translation: null, source: "X", userType: "PUC Student" }],
        keyTakeaway: "High tech hunger among 5-30 youth demographic."
      },
      {
        rank: 7,
        title: "Mara Community Celebrates Chapchar Kut Early Coordination Meet in Siaha",
        summary: "Elders and cultural troupes convene to prepare traditional dances and handloom exhibitions.",
        platforms: ["Facebook Public", "YouTube"],
        sentimentScore: 94,
        sentimentType: "Positive",
        sentimentLabel: "Cultural Heritage",
        netReach: 31000,
        volume: "4.8K mentions",
        trendingDirection: "stable",
        demographicSkew: { gender: { male: 49, female: 51 }, age: { "10-18": 12, "18-28": 24, "29-35": 20, "35-42": 18, "43-50": 14, "51-60": 7, "above_60": 5 } },
        tribesImpacted: ["Mara"],
        entities: ["MADC Cultural Dept", "Mara Youth Association"],
        representativeQuotes: [{ text: "Preserving our unique Mara songs and weaving patterns is our sacred trust.", translation: null, source: "FB", userType: "Cultural Performer" }],
        keyTakeaway: "Cultural pride and solidarity remain highest-rated sentiments."
      },
      {
        rank: 8,
        title: "Aizawl Traffic Police Introduces Smart One-Way Corridors in Chanmari & Zarkawt",
        summary: "Initial friction turns into cautious appreciation as vehicle bottlenecks ease during school commute peak hours.",
        platforms: ["Facebook Public", "Local News"],
        sentimentScore: 38,
        sentimentType: "Mixed",
        sentimentLabel: "Civic Transition",
        netReach: 29500,
        volume: "4.6K mentions",
        trendingDirection: "up",
        demographicSkew: { gender: { male: 58, female: 42 }, age: { "10-18": 8, "18-28": 24, "29-35": 24, "35-42": 22, "43-50": 12, "51-60": 6, "above_60": 4 } },
        tribesImpacted: ["Lushai", "Urban"],
        entities: ["Aizawl Traffic Police", "Taxi Drivers Union"],
        representativeQuotes: [{ text: "First day was confusing, but today Chanmari choke point is noticeably clearer.", translation: null, source: "FB Traffic Group", userType: "Commuter" }],
        keyTakeaway: "Civic patience increases when traffic wardens actively guide citizens."
      },
      {
        rank: 9,
        title: "Hmar Sinlung Hills Council Reviews School Upgradation Projects in Sakawrdai",
        summary: "SHC Chairman meets with headmasters to distribute science laboratory kits across 14 high schools.",
        platforms: ["Local News", "Telegram"],
        sentimentScore: 76,
        sentimentType: "Positive",
        sentimentLabel: "Educational Uplift",
        netReach: 24500,
        volume: "3.7K mentions",
        trendingDirection: "stable",
        demographicSkew: { gender: { male: 51, female: 49 }, age: { "10-18": 10, "18-28": 22, "29-35": 22, "35-42": 20, "43-50": 14, "51-60": 7, "above_60": 5 } },
        tribesImpacted: ["Hmar"],
        entities: ["Sinlung Hills Council", "School Education Dept"],
        representativeQuotes: [{ text: "Science kits will ignite curiosity in remote rural schools of Sakawrdai.", translation: null, source: "Local News", userType: "Teacher" }],
        keyTakeaway: "Concrete educational investments generate steady positive goodwill."
      },
      {
        rank: 10,
        title: "Solar Rooftop Subsidy Registration Crosses 5,000 Homes in Mizoram",
        summary: "Power & Electricity Department reports record sign-ups under clean energy transition in Aizawl and Lunglei.",
        platforms: ["State Govt Portals", "Twitter / X"],
        sentimentScore: 84,
        sentimentType: "Positive",
        sentimentLabel: "Green Energy",
        netReach: 27800,
        volume: "4.1K mentions",
        trendingDirection: "up",
        demographicSkew: { gender: { male: 53, female: 47 }, age: { "10-18": 8, "18-28": 26, "29-35": 24, "35-42": 20, "43-50": 12, "51-60": 6, "above_60": 4 } },
        tribesImpacted: ["All"],
        entities: ["Power & Electricity Dept", "MNRE"],
        representativeQuotes: [{ text: "Renewable energy on hill rooftops is a great sustainable vision for Mizoram.", translation: null, source: "X", userType: "Engineer" }],
        keyTakeaway: "Strong civic enthusiasm for environmental sustainability."
      }
    ]
  },

  // Real-time live feed simulation items across platforms
  liveStreamPosts: [
    {
      id: "post_1",
      platform: "Twitter / X",
      sourceId: "twitter",
      author: "@MizoramPolice",
      authorRole: "Verified Official",
      timestamp: "5 mins ago",
      text: "CID (SB) team arrested two interstate peddlers at Vairengte check gate and recovered 850 grams of Heroin No. 4. Strict vigilance maintained across all entry corridors. #WarOnDrugs #MizoramPolice",
      sentiment: "Positive",
      sentimentScore: 0.88,
      genderInference: "All",
      ageInference: "30-60",
      entities: ["Mizoram Police", "CID"],
      tribeFocus: "Statewide"
    },
    {
      id: "post_2",
      platform: "YouTube",
      sourceId: "youtube",
      author: "Zonet Cable TV Official",
      authorRole: "State News Broadcaster",
      timestamp: "18 mins ago",
      text: "LPS Special Report: Indo-Myanmar ramri hung chungchang ah Mizoram Assembly in lungrual takin lungawi lohna an lantir. FMR chu chhunzawm zel ni se tih an phut.",
      sentiment: "Critical / Concerned",
      sentimentScore: -0.45,
      genderInference: "Male Skewed (55%)",
      ageInference: "30-60 & 60+",
      entities: ["Assam Rifles", "State Govt", "FMR"],
      tribeFocus: "Lushai, Lai, Mara, Paite"
    },
    {
      id: "post_3",
      platform: "Facebook Public",
      sourceId: "facebook",
      author: "Central YMA (CYMA)",
      authorRole: "Apex Civil Society",
      timestamp: "32 mins ago",
      text: "Champhai bial a kan unau raltlan naupangte tan lehkha bu leh thlasik kawrlum sem a ni. Tanpuitu zawng zawngte chungah CYMA hmingin lawmthu kan hrilh e.",
      sentiment: "Positive / Compassionate",
      sentimentScore: 0.94,
      genderInference: "Female Skewed (58%)",
      ageInference: "5-30 & 30-60",
      entities: ["State Govt", "Refugee Welfare"],
      tribeFocus: "All Mizo Tribes"
    },
    {
      id: "post_4",
      platform: "Telegram Channels",
      sourceId: "telegram",
      author: "Mizoram Border & Security Watch",
      authorRole: "Community Intel",
      timestamp: "45 mins ago",
      text: "Assam Rifles 23 Sector medical team conducted free checkup at Vaphai border outpost today. Over 180 villagers given free medicines and eye drops.",
      sentiment: "Positive",
      sentimentScore: 0.76,
      genderInference: "Female Skewed (54%)",
      ageInference: "60+",
      entities: ["Assam Rifles"],
      tribeFocus: "Lushai, Paite"
    },
    {
      id: "post_5",
      platform: "State & National Govt Portals",
      sourceId: "govt_portals",
      author: "DIPR Mizoram (dipr.mizoram.gov.in)",
      authorRole: "Official Government Release",
      timestamp: "1 hour ago",
      text: "Chief Minister Pu Lalduhoma inspects smart road works and drainage systems in Serchhip. Directs engineers to adhere to strict quality benchmarks under zero tolerance for substandard work.",
      sentiment: "Positive",
      sentimentScore: 0.82,
      genderInference: "All",
      ageInference: "30-60",
      entities: ["State Government"],
      tribeFocus: "Statewide"
    },
    {
      id: "post_6",
      platform: "Twitter / X",
      sourceId: "twitter",
      author: "@MizoYouthVoice",
      authorRole: "Youth Digital Creator",
      timestamp: "1.5 hours ago",
      text: "Huge respect to Indian Army Eastern Command for setting up coaching materials for Agniveer written tests at Lunglei Govt College! Need this in Lawngtlai and Siaha as well.",
      sentiment: "Positive",
      sentimentScore: 0.86,
      genderInference: "Male Skewed (62%)",
      ageInference: "5-30",
      entities: ["Indian Army"],
      tribeFocus: "Lushai, Mara, Lai"
    },
    {
      id: "post_7",
      platform: "Local News & Press",
      sourceId: "local_news",
      author: "Vanglaini Daily",
      authorRole: "Premier Mizo Daily",
      timestamp: "2 hours ago",
      text: "Editorial: Aizawl khawpui chhung tawt lutuk tih thawl nan Assam Rifles Zokhawsang insawn hna hi chak zawk a kalpui a hun tawh hle.",
      sentiment: "Neutral / Urgent",
      sentimentScore: 0.20,
      genderInference: "All",
      ageInference: "30-60 & 60+",
      entities: ["Assam Rifles", "Aizawl Civic"],
      tribeFocus: "Urban Aizawl"
    },
    {
      id: "post_8",
      platform: "YouTube",
      sourceId: "youtube",
      author: "LPS Vision News",
      authorRole: "Television & Digital News",
      timestamp: "3 hours ago",
      text: "Bairabi-Sairang Rail Line: Bridge No. 196 over Kurung river tested successfully with heavy locomotive. Mizoram set to join India's main railway network soon.",
      sentiment: "Positive",
      sentimentScore: 0.95,
      genderInference: "All",
      ageInference: "5-30, 30-60, 60+",
      entities: ["State Government", "Railways"],
      tribeFocus: "All Tribes"
    }
  ],

  // DIRECT EXTRACTED SOCIAL MEDIA CHANNELS WITH POLAR THOUGHTS & STANCES
  polarChannels: [
    // --- TELEGRAM CHANNELS ---
    {
      platform: "Telegram",
      platformIcon: "fa-brands fa-telegram text-cyan",
      name: "Mizoram Border & Security Watch",
      handle: "@mizoramborderwatch",
      url: "https://t.me/s/mizoramborderwatch",
      subscribers: "34,200",
      category: "Border & Security",
      polarStance: "Pro-FMR / Kinship Solidarity",
      stancePolarity: "anti-fencing",
      keyThemes: ["Free Movement Regime Defense", "Chin Refugee Status", "Civil-Military Interactions", "Border Jhum Lands"],
      polarSummary: "Strongly advocates for unhindered kinship across the 510 km Indo-Myanmar border. Highly critical of New Delhi's plan to erect physical barbed fencing; scrutinizes Assam Rifles vehicle frisking at border crossings."
    },
    {
      platform: "Telegram",
      platformIcon: "fa-brands fa-telegram text-cyan",
      name: "MZP Student Network Updates",
      handle: "@mzp_mizoram_official",
      url: "https://t.me/s/mzp_mizoram_official",
      subscribers: "42,800",
      category: "Student Movement",
      polarStance: "Mizo Nationalist / Strict ILP",
      stancePolarity: "mizo-nationalist",
      keyThemes: ["Inner Line Permit (ILP) Checks", "Anti-Illegal Immigration", "Opposition to CADC Expansion", "Youth Rights"],
      polarSummary: "Spearheads aggressive grassroots vigilance against illegal influx from Bangladesh and Myanmar. Staunchly opposes any expansion or special status for the Chakma Autonomous District Council (CADC)."
    },
    {
      platform: "Telegram",
      platformIcon: "fa-brands fa-telegram text-cyan",
      name: "Chakma Rights & CADC Bulletin",
      handle: "@chakmarights_mizoram",
      url: "https://t.me/s/chakmarights_mizoram",
      subscribers: "18,400",
      category: "Minority Rights",
      polarStance: "Pro-Minority Autonomy (CADC)",
      stancePolarity: "minority-rights",
      keyThemes: ["Direct Central Funding for CADC", "Protection from Discrimination", "Educational Quota Parity", "Chakma Language Rights"],
      polarSummary: "Lobbies vigorously against Aizawl's administrative dominance over the Chakma Autonomous District Council. Demands direct 6th Schedule grant devolution from the Ministry of Home Affairs."
    },
    {
      platform: "Telegram",
      platformIcon: "fa-brands fa-telegram text-cyan",
      name: "Mizoram Youth Discussion Forum",
      handle: "@mizoyouthforum",
      url: "https://t.me/s/mizoyouthforum",
      subscribers: "28,600",
      category: "Youth & Politics",
      polarStance: "Youth Reform / Anti-Establishment",
      stancePolarity: "reformist",
      keyThemes: ["Unemployment Solutions", "Anti-Corruption in MPSC Exams", "Review of Liquor Prohibition", "Tech Startups"],
      polarSummary: "Expresses progressive and impatient youth views questioning traditional political dynasties and Church social moral policing. Debates economic modernization and repealing total alcohol prohibition."
    },
    {
      platform: "Telegram",
      platformIcon: "fa-brands fa-telegram text-cyan",
      name: "NorthEast Strategic & Defense Intel",
      handle: "@ne_strategic_intel",
      url: "https://t.me/s/ne_strategic_intel",
      subscribers: "51,200",
      category: "National Defense",
      polarStance: "Pro-Fencing / National Security",
      stancePolarity: "pro-fencing",
      keyThemes: ["Indo-Myanmar Border Fencing", "Counter-Narcotics (Meth Cartels)", "Assam Rifles Support", "Arakan Army Containment"],
      polarSummary: "Argues from New Delhi's national security vantage point: contends that porous borders allow insurgent movement, weapons trafficking, and billion-dollar crystal meth cartels, necessitating complete physical fencing."
    },

    // --- TWITTER / X HANDLES ---
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "Pu Lalduhoma (Chief Minister)",
      handle: "@Lalduhoma_CM",
      url: "https://twitter.com/Lalduhoma_CM",
      subscribers: "76,500",
      category: "Ruling State Government",
      polarStance: "Pro-ZPM / Pro-FMR / Humanitarian",
      stancePolarity: "ruling-govt",
      keyThemes: ["Refugee Humanitarian Shelter", "Opposition to Border Fencing", "Agriculture Minimum Support Price (MSP)", "Zero-Tolerance Corruption"],
      polarSummary: "Firmly defends Mizoram's moral right to provide sanctuary to ethnic Chin brothers. Articulates state assembly resolutions opposing the scrap of the Free Movement Regime directly to the Union Government."
    },
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "Pu Zoramthanga (Former CM / MNF Chief)",
      handle: "@ZoramthangaCM",
      url: "https://twitter.com/ZoramthangaCM",
      subscribers: "112,000",
      category: "Opposition Party",
      polarStance: "Pro-MNF / Mizo Nationalism",
      stancePolarity: "opposition-mnf",
      keyThemes: ["Zo Reunification (ZORO)", "Critique of ZPM Infrastructure Lapses", "Financial Allocation Delays", "Christian Heritage"],
      polarSummary: "The veteran voice of historical Mizo nationalism. Critical of current ZPM governance pace, highway maintenance on NH-306, and raises alerts over secular compromises with central allies."
    },
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "Mizoram Police",
      handle: "@mizoram_police",
      url: "https://twitter.com/mizoram_police",
      subscribers: "48,900",
      category: "State Law Enforcement",
      polarStance: "Institutional Neutrality / Anti-Narcotics",
      stancePolarity: "institutional",
      keyThemes: ["CID Narcotics Crackdowns", "Cyber Crime Advisories", "Community Policing with YMA", "Traffic Management"],
      polarSummary: "Maintains a constructive, high-trust public posture with community-led anti-drug crackdowns and cross-border contraband seizures, partnering closely with local Village Councils."
    },
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "Central YMA (CYMA)",
      handle: "@CYMA_Aizawl",
      url: "https://twitter.com/CYMA_Aizawl",
      subscribers: "64,100",
      category: "Apex Civil Society",
      polarStance: "Pan-Mizo Solidarity / Anti-Fencing",
      stancePolarity: "anti-fencing",
      keyThemes: ["Kuki-Zo Kinship", "Relief Camps for Displaced Brethren", "Shifting Assam Rifles to Zokhawsang", "Social Peace"],
      polarSummary: "Mizoram's most powerful non-governmental body. Uncompromising stance against border fencing dividing ethnic families and insists on the rapid completion of the Assam Rifles base transfer to Zokhawsang."
    },
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "BJP Mizoram State",
      handle: "@BJP4Mizoram",
      url: "https://twitter.com/BJP4Mizoram",
      subscribers: "29,400",
      category: "National Political Party",
      polarStance: "Pro-Central Govt / Pro-Border Fencing",
      stancePolarity: "pro-fencing",
      keyThemes: ["National Security & FMR Scrapping", "Double-Engine Development", "Bairabi-Sairang Railway Delivery", "ADC Minority Funding"],
      polarSummary: "Champions central schemes, defends New Delhi's border fencing policy as essential to stop drug smuggling, and courts Buddhist Chakma and Mara tribal councils with promises of direct funding."
    },
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "Mizoram Chakma Dev Forum",
      handle: "@MCDF_Official",
      url: "https://twitter.com/MCDF_Official",
      subscribers: "15,800",
      category: "Minority Advocacy",
      polarStance: "Minority Rights / Anti-Majoritarian",
      stancePolarity: "minority-rights",
      keyThemes: ["Tribal Constitutional Safeguards", "CADC Boundary Rights", "Condemnation of Xenophobia", "Higher Education Grievances"],
      polarSummary: "Highlights documented instances of discrimination against non-Mizo minorities, legal battles over medical college seat allotments, and calls for governor-monitored council budgets."
    },
    {
      platform: "Twitter / X",
      platformIcon: "fa-brands fa-x-twitter text-cyan",
      name: "Assam Rifles Official HQ",
      handle: "@official_assamrifles",
      url: "https://twitter.com/official_assamrifles",
      subscribers: "185,000",
      category: "Central Paramilitary Force",
      polarStance: "Frontier Defense / Civic Action",
      stancePolarity: "pro-fencing",
      keyThemes: ["Indo-Myanmar Border Surveillance", "Contraband Interdiction", "Civic Action Programs (CAP)", "Medical Camps"],
      polarSummary: "Emphasizes the force's role as 'Friends of the Hill People' through goodwill veterinary/medical camps, counter-smuggling victories, while maintaining rigorous checkpoint security along international lines."
    },

    // --- YOUTUBE CHANNELS ---
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "Zonet Cable TV Official",
      handle: "@zonet_mizoram",
      url: "https://www.youtube.com/@zonet_mizoram",
      subscribers: "540,000",
      category: "Television Broadcaster",
      polarStance: "Mainstream Mizo Editorial / Democratic Debates",
      stancePolarity: "mainstream",
      keyThemes: ["Assembly Debates Live", "Indo-Myanmar FMR Public Forums", "ZPM vs MNF Political Panels", "MPL Football"],
      polarSummary: "The prime television square of Mizoram. Features passionate prime-time debates between ministers, civil society leaders, and opposition MLAs on border security, refugee hosting, and economic performance."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "LPS Vision News",
      handle: "@lpsvision",
      url: "https://www.youtube.com/@lpsvision",
      subscribers: "480,000",
      category: "Television Broadcaster",
      polarStance: "Ground Investigative / Community Pulse",
      stancePolarity: "mainstream",
      keyThemes: ["Border Ground Reports from Champhai & Siaha", "Assam Rifles Check Gate Scrutiny", "Youth Culture & Music", "Highway NH-306 Conditions"],
      polarSummary: "Renowned for fearless ground reporting directly from border hamlets like Zokhawthar and Vaphai, capturing unfiltered villager sentiment on border tensions, contraband, and military operations."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "Vanglaini Channel",
      handle: "@vanglaini",
      url: "https://www.youtube.com/@vanglaini",
      subscribers: "210,000",
      category: "Print & Digital Media",
      polarStance: "Critical Independent / Editorial Rigor",
      stancePolarity: "independent",
      keyThemes: ["Fiscal Policy Scrutiny", "Border Fencing Editorials", "Civil Rights & YMA Stance", "Environmental Concerns"],
      polarSummary: "The digital desk of Mizoram's premier newspaper. Offers balanced, deeply analytical perspectives, often criticizing both central heavy-handedness and local administrative lethargy."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "ZPM Media Cell",
      handle: "@zpmmediacell",
      url: "https://www.youtube.com/@zpmmediacell",
      subscribers: "95,000",
      category: "Party Digital Wing",
      polarStance: "Pro-ZPM / Anti-Corruption",
      stancePolarity: "ruling-govt",
      keyThemes: ["Exposing Past MNF Scandals", "MSP Payouts Direct to Farmers", "Administrative Austerity", "Healthcare Reforms"],
      polarSummary: "The political engine of the ruling ZPM. Vigorously promotes Chief Minister Lalduhoma's reformist agenda, contrasts current fiscal discipline with past regimes, and pushes anti-nepotism rhetoric."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "MNF Official / Zalenna Aw",
      handle: "@mizonationalfront",
      url: "https://www.youtube.com/@mizonationalfront",
      subscribers: "88,000",
      category: "Party Digital Wing",
      polarStance: "Pro-MNF / Opposition Critique",
      stancePolarity: "opposition-mnf",
      keyThemes: ["Broken ZPM Campaign Promises", "Stagnant Roads & NH-306 Crisis", "Contractor Payment Grievances", "Mizo Nationalism"],
      polarSummary: "Fiercely attacks the ZPM administration on stalled public works, power outages, and financial bottlenecks, rallying traditional Mizo nationalist sentiment."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "Mizoram Synod Channel",
      handle: "@mizoramsynod",
      url: "https://www.youtube.com/@mizoramsynod",
      subscribers: "165,000",
      category: "Ecclesiastical Council",
      polarStance: "Conservative Christian Morality",
      stancePolarity: "conservative-church",
      keyThemes: ["Total Liquor Prohibition Advocacy", "Anti-Drug Evangelism", "Refugee Compassion", "Traditional Family Values"],
      polarSummary: "The influential ecclesiastical voice of the Presbyterian Church of Mizoram. Opposes any easing of alcohol laws, emphasizes Christian stewardship, and organizes massive church relief for refugees."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "Tetea Vlogs / Mizo Storyteller",
      handle: "@teteavlogs",
      url: "https://www.youtube.com/@teteavlogs",
      subscribers: "320,000",
      category: "Youth Creator",
      polarStance: "Youth Secular / Progressive Social",
      stancePolarity: "reformist",
      keyThemes: ["Youth Aspirations", "Modern Mizo Lifestyle", "Creative Freedom", "Sports & Travel Across Distant Hamlets"],
      polarSummary: "Represents the modern, progressive Gen-Z/Millennial Mizo worldview. Bypasses rigid political alignments to celebrate local entrepreneurship, music, football, and everyday civic reality."
    },
    {
      platform: "YouTube",
      platformIcon: "fa-brands fa-youtube text-rose",
      name: "Kamalanagar News / CADC Media",
      handle: "@kamalanagarnews",
      url: "https://www.youtube.com/@kamalanagarnews",
      subscribers: "34,000",
      category: "Minority News Channel",
      polarStance: "Chakma Minority Self-Determination",
      stancePolarity: "minority-rights",
      keyThemes: ["CADC Executive Council Sessions", "Bizu Cultural Celebrations", "Border Connectivity to Chawngte", "Minority Welfare"],
      polarSummary: "Focuses on the cultural, linguistic, and political life of the Buddhist Chakma community in south-western Mizoram, giving voice to local grievances regarding isolation and state neglect."
    },

    // --- INSTAGRAM HANDLES ---
    {
      platform: "Instagram",
      platformIcon: "fa-brands fa-instagram text-purple",
      name: "Vanglaini Daily",
      handle: "@vanglaini",
      url: "https://www.instagram.com/vanglaini/",
      subscribers: "285,000",
      category: "Daily News & Press",
      polarStance: "Mainstream Editorial Voice",
      stancePolarity: "mainstream",
      keyThemes: ["State Politics & Assembly", "Border Incidents", "Public Notices & Obituary", "Youth Achievements"],
      polarSummary: "Mizoram's most followed daily news Instagram. Comment sections serve as an active battlefield between ZPM supporters, MNF loyalists, and civil society voices."
    },
    {
      platform: "Instagram",
      platformIcon: "fa-brands fa-instagram text-purple",
      name: "Zonet Mizoram Official",
      handle: "@zonet_mizoram",
      url: "https://www.instagram.com/zonet_mizoram/",
      subscribers: "310,000",
      category: "Media & Entertainment",
      polarStance: "Civic & Cultural Mainstream",
      stancePolarity: "mainstream",
      keyThemes: ["Mizoram Premier League (MPL)", "Breaking Crime & Drug Busts", "Assam Rifles Relocation Updates", "Live Broadcast Snippets"],
      polarSummary: "High-reach visual feed connecting rural and urban Mizo diaspora worldwide with high-energy reels on football, state news, and viral debates."
    },
    {
      platform: "Instagram",
      platformIcon: "fa-brands fa-instagram text-purple",
      name: "Central YMA GHQ",
      handle: "@cyma_general_headquarters",
      url: "https://www.instagram.com/cyma_general_headquarters/",
      subscribers: "125,000",
      category: "Civil Society",
      polarStance: "Mizo Cultural Consensus / Anti-Fencing",
      stancePolarity: "anti-fencing",
      keyThemes: ["Grassroots YMA Branch Mobilization", "Refugee Winter Donation Drives", "Anti-Drug Vigilance Teams", "Preservation of Tlawmngaihna"],
      polarSummary: "Direct channel of the Central YMA. Inspires deep cultural volunteerism ('Tlawmngaihna') while taking an assertive, uncompromising stand on Mizo territorial and cultural integrity."
    },
    {
      platform: "Instagram",
      platformIcon: "fa-brands fa-instagram text-purple",
      name: "Mizo Zirlai Pawl (MZP GHQ)",
      handle: "@official_mzp",
      url: "https://www.instagram.com/official_mzp/",
      subscribers: "98,000",
      category: "Apex Student Body",
      polarStance: "Mizo Student Nationalism / Anti-Illegal Influx",
      stancePolarity: "mizo-nationalist",
      keyThemes: ["ILP Surprise Inspections", "Border Boundary Demarcation", "Mizo Language in Curriculum", "Protests Against Central Policies"],
      polarSummary: "Regularly posts photos and press statements of student agitation, gate picketing for Inner Line Permit enforcement, and strongly opposes any dilution of indigenous rights."
    },
    {
      platform: "Instagram",
      platformIcon: "fa-brands fa-instagram text-purple",
      name: "Mizo Trolls & Memes",
      handle: "@mizo_trolls",
      url: "https://www.instagram.com/mizo_trolls/",
      subscribers: "175,000",
      category: "Youth Satire",
      polarStance: "Anti-Political Hypocrisy / Youth Satire",
      stancePolarity: "reformist",
      keyThemes: ["Satirizing MLA Promises", "Aizawl Traffic Gridlocks", "Church Moralizing vs Reality", "Youth Dating & Culture"],
      polarSummary: "Unflinchingly mocks political blunders of both ZPM and MNF, traffic police ticketing in Aizawl, and conservative social hypocrisies, commanding massive engagement among the 5-30 age tier."
    },
    {
      platform: "Instagram",
      platformIcon: "fa-brands fa-instagram text-purple",
      name: "Mara Youth Association (MYA)",
      handle: "@mara_youth_association",
      url: "https://www.instagram.com/mara_youth_association/",
      subscribers: "32,000",
      category: "Tribal Council Youth",
      polarStance: "Mara Autonomy & Southern Rights",
      stancePolarity: "minority-rights",
      keyThemes: ["MADC Siaha Autonomy", "Mara Language Preservation", "Highway Connectivity Aizawl-Siaha", "Border Trade via Tipa"],
      polarSummary: "Vocal advocate for the Mara people of Siaha district, demanding equitable fiscal shares from the state budget and self-reliant district governance under the Sixth Schedule."
    }
  ]
};

// Expose globally
if (typeof window !== "undefined") {
  window.MIZORAM_DATA = MIZORAM_DATA;
}
if (typeof module !== "undefined" && module.exports) {
  module.exports = MIZORAM_DATA;
}
