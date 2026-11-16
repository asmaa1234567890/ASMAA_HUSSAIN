/**
 * Asmaa Hussain Elsayed - Professional Data Analyst Portfolio
 * Centralized Projects Catalog & Case Studies Data Store
 * Aligned with Verified CV & Technical Competencies
 */

const PORTFOLIO_PROJECTS = [
  {
    "id": "call-center-analytics",
    "title": "Call Center Operations & Agent Performance Dashboard",
    "category": "powerbi",
    "categoryLabel": "Power BI Dashboard",
    "featured": true,
    "badge": "CodeAlpha Internship Project",
    "subtitle": "Operations KPI & Customer Experience Intelligence",
    "shortDesc": "Executive BI dashboard monitoring 5,000+ support interactions, integrating Average Handle Time (AHT), Customer Satisfaction (CSAT), chat engagement, and survey outcomes into a unified model.",
    "businessProblem": "Call center leadership suffered from fragmented reporting across agent shifts, lack of visibility into peak volume surges, and inability to trace the root causes behind declining CSAT ratings.",
    "dataset": "Multi-channel customer support logs including Case ID, Agent ID, call duration, speed of answer, resolved status, and CSAT survey ratings (5,000+ records).",
    "techStack": [
      "Power BI",
      "DAX",
      "Power Query",
      "Data Modeling",
      "KPI Analysis"
    ],
    "techniques": [
      "Time Intelligence DAX for hour-by-hour volume distribution",
      "Constructed complex relational schemas using Case ID and Agent fields",
      "Conditional KPI scorecard highlighting underperforming SLA thresholds",
      "Interactive drill-through filters for agent-specific coaching reviews"
    ],
    "keyFindings": [
      "Identified peak call congestion between 11:00 AM and 2:00 PM, generating 42% of missed calls.",
      "Discovered 18% variance in CSAT between agents receiving dedicated product training versus general support.",
      "Reduced Average Handling Time (AHT) baseline by 14% after implementing real-time SLA breach indicators.",
      "Achieved 89.4% overall first-contact resolution rate across top support tiers."
    ],
    "metrics": [
      {
        "label": "CSAT Score",
        "value": "89.4%"
      },
      {
        "label": "Avg Handling Time",
        "value": "4.2 min"
      },
      {
        "label": "Resolved Rate",
        "value": "91.2%"
      },
      {
        "label": "Interactions Analyzed",
        "value": "5,000+"
      }
    ],
    "image": "assets/images/projects/call_center.png",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Power-BI"
  },
  {
    "id": "uae-real-estate-market",
    "title": "UAE Real Estate Market Analysis & Pricing Segmentation",
    "category": "python",
    "categoryLabel": "Python Data Analysis",
    "featured": true,
    "badge": "Featured Case Study",
    "subtitle": "Exploratory Data Analysis & Price Tier Modeling",
    "shortDesc": "In-depth statistical exploratory data analysis of 492 property listings across Dubai, Abu Dhabi, Sharjah, and Ajman, identifying luxury concentration and bedroom-to-price elasticity.",
    "businessProblem": "Real estate investors and brokerage firms lacked a consolidated price benchmarking model to identify undervalued neighborhoods and understand city-specific premium drivers.",
    "dataset": "492 verified property records across 5 UAE emirates, containing price (AED), property type, location addresses, bedroom counts, listing dates, and developer RERA IDs.",
    "techStack": [
      "Python",
      "Pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn",
      "Statistical Analysis"
    ],
    "techniques": [
      "Data cleaning and string parsing to isolate municipal areas from display addresses",
      "Price bracket categorization (<500K, 500K-1M, 1M-2M, 2M-5M, >5M AED)",
      "Bivariate correlation heatmaps evaluating bedroom elasticity against unit price with Seaborn",
      "Boxplot outlier detection for high-value penthouses versus mid-market inventory"
    ],
    "keyFindings": [
      "Dubai concentrates 78% of luxury inventory above 2M AED (Downtown Dubai, Dubai Hills Estate, Sobha Hartland).",
      "Sharjah and Ajman provide high-volume affordable segments, with 68% of inventory under 1M AED.",
      "Bathroom count was constant (2), confirming that bedroom count and neighborhood are the primary price determinants.",
      "Identified average price increases of 34% per additional bedroom in prime metropolitan districts."
    ],
    "metrics": [
      {
        "label": "Listings Analyzed",
        "value": "492"
      },
      {
        "label": "Emirates Covered",
        "value": "5 Cities"
      },
      {
        "label": "Top Luxury Share",
        "value": "78% Dubai"
      },
      {
        "label": "Price Range",
        "value": "233K - 14.5M AED"
      }
    ],
    "image": "assets/images/projects/real_estate.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Python-Projects"
  },
  {
    "id": "adidas-sales-intelligence",
    "title": "Adidas Global Retail Sales & Operating Margin Intelligence",
    "category": "powerbi",
    "categoryLabel": "Power BI Dashboard",
    "featured": true,
    "badge": "Retail Analytics",
    "subtitle": "Multi-channel Profitability & Product Category Analytics",
    "shortDesc": "Multi-page Power BI executive suite analyzing sales channel effectiveness (in-store, online, outlet), product category margins, and regional sales velocity.",
    "businessProblem": "Retail management needed to evaluate omnichannel performance, determine if aggressive online discounting was cannibalizing outlet margins, and reallocate inventory to high-margin states.",
    "dataset": "Retail sales transactions including invoice dates, retailer names, regions, states, cities, product lines, unit prices, units sold, total sales, operating profit, and sales method.",
    "techStack": [
      "Power BI",
      "DAX",
      "Data Modeling",
      "KPI Tracking",
      "Product Performance"
    ],
    "techniques": [
      "DAX margin calculation: Operating Margin % = [Total Operating Profit] / [Total Sales]",
      "Sales method cross-filtering across Footwear vs Apparel categories",
      "Dynamic geographic visual map highlighting top grossing regions and states",
      "MoM sales performance comparisons using date dimension tables"
    ],
    "keyFindings": [
      "Online sales generated highest transaction volume (43%), while In-Store sales captured top average order values.",
      "Men's Street Footwear and Women's Apparel represented the highest grossing product categories.",
      "Identified that Northeast and West regions generated over 52% of total operating profit.",
      "Discovered 7% margin erosion in specific outlet channels due to unoptimized markdown schedules."
    ],
    "metrics": [
      {
        "label": "Operating Margin",
        "value": "41.8%"
      },
      {
        "label": "Top Category",
        "value": "Footwear"
      },
      {
        "label": "Online Share",
        "value": "43% Vol"
      },
      {
        "label": "Regions Tracked",
        "value": "5 Zones"
      }
    ],
    "image": "assets/images/projects/adidas_sales.png",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Power-BI"
  },
  {
    "id": "executive-sales-dashboard",
    "title": "Executive Sales Velocity & Revenue Analytics Dashboard",
    "category": "powerbi",
    "categoryLabel": "Power BI Dashboard",
    "featured": true,
    "badge": "Executive BI",
    "subtitle": "Enterprise Revenue, Profit Margins & Customer Acquisition",
    "shortDesc": "Comprehensive corporate dashboard providing C-suite visibility into top-line revenue growth, gross profit margins, order velocity, and customer segment contributions.",
    "businessProblem": "Executive leadership lacked real-time visibility into whether revenue growth was being driven by healthy order volume or unsustainable price increases, obscuring customer churn signals.",
    "dataset": "Enterprise sales transaction history tracking customers, product segments, order volumes, revenue, cost of goods sold (COGS), profit, and geographic territories.",
    "techStack": [
      "Power BI",
      "DAX",
      "Data Modeling",
      "Star Schema",
      "Stakeholder Reporting"
    ],
    "techniques": [
      "Star schema architecture with optimized fact and dimension table relationships",
      "Advanced DAX time-intelligence formulas (YTD, MTD, YoY growth variance)",
      "Dynamic category rank slicers and custom tooltips for fast inspection",
      "Executive KPI cards with color-coded trend indicators"
    ],
    "keyFindings": [
      "Achieved 22.4% YoY revenue growth, primarily driven by expanding B2B corporate client retention.",
      "Identified that 20% of high-volume SKUs produced 74% of cumulative net gross profit.",
      "Uncovered supply chain delivery delays in specific regions impacting quarterly reorder velocity.",
      "Enabled executive team to eliminate 12 underperforming product variants."
    ],
    "metrics": [
      {
        "label": "YoY Growth",
        "value": "+22.4%"
      },
      {
        "label": "Gross Margin",
        "value": "38.6%"
      },
      {
        "label": "Top SKUs Share",
        "value": "74% Profit"
      },
      {
        "label": "Data Model",
        "value": "Star Schema"
      }
    ],
    "image": "assets/images/projects/sales_dash.png",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Power-BI"
  },
  {
    "id": "us-canada-job-market",
    "title": "US & Canada Tech Job Market & Skills Demand Intelligence",
    "category": "powerbi",
    "categoryLabel": "Power BI & Python ETL",
    "featured": true,
    "badge": "Cross-National Study",
    "subtitle": "Labor Market Analytics for AI, BI, Data Analyst & IT Roles",
    "shortDesc": "End-to-end analytics project combining Python & BeautifulSoup data wrangling of 8.7MB+ raw job postings with an interactive Power BI dashboard comparing tech salaries and tool demand.",
    "businessProblem": "Tech talent and recruiting teams struggled to benchmark compensation and prioritize critical skill requirements across US and Canadian tech hubs for emerging AI and BI roles.",
    "dataset": "8.7MB+ scraped postings covering titles, company names, cities, salaries, and tool requirements across AI, BI, Data Analysis, and IT roles.",
    "techStack": [
      "Power BI",
      "Python",
      "Pandas",
      "BeautifulSoup",
      "Power Query",
      "DAX"
    ],
    "techniques": [
      "Python pipeline parsing multi-tier job titles and extracting salary ranges from unstructured text",
      "Cross-country exchange rate normalization and cost-of-living index comparisons",
      "Interactive skill frequency matrix tracking SQL, Python, Power BI, and Cloud demands",
      "Role classification segmentation isolating Junior, Mid, and Senior salary spreads"
    ],
    "keyFindings": [
      "SQL and Python emerged as mandatory prerequisites across 73% of Data Analyst and BI postings.",
      "US AI and Data positions carried a 28% median salary premium compared to equivalent Canadian postings.",
      "Remote work options remained highest for AI/ML roles (64%) compared to general IT (38%).",
      "Identified fastest growing demand for DAX and Power Query in mid-market enterprise BI teams."
    ],
    "metrics": [
      {
        "label": "Raw Data Size",
        "value": "8.7 MB+"
      },
      {
        "label": "Roles Mapped",
        "value": "AI, BI, DA, IT"
      },
      {
        "label": "SQL/Python Demand",
        "value": "73%"
      },
      {
        "label": "Countries",
        "value": "US & Canada"
      }
    ],
    "image": "assets/images/projects/jobs_market.png",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Power-BI"
  },
  {
    "id": "time-series-energy-forecasting",
    "title": "Hourly Energy Consumption Forecasting with Machine Learning",
    "category": "ml",
    "categoryLabel": "Machine Learning & Time Series",
    "featured": false,
    "badge": "Predictive ML",
    "subtitle": "Temporal Feature Engineering & Regression Modeling",
    "shortDesc": "Machine learning predictive pipeline utilizing Scikit-learn and XGBoost regression to forecast hourly electricity consumption with temporal feature engineering and RMSE validation.",
    "businessProblem": "Utility operators must accurately predict grid load hours in advance to prevent blackouts, optimize generator scheduling, and minimize costly peak-power market purchases.",
    "dataset": "PJM East (PJME) hourly energy consumption dataset covering over 10 years of continuous hourly electricity demand records.",
    "techStack": [
      "Python",
      "Scikit-learn",
      "XGBoost",
      "Regression",
      "Pandas",
      "Feature Engineering"
    ],
    "techniques": [
      "Temporal lag feature engineering (hour of day, day of week, quarter, month, year, day of year)",
      "Strict chronological train/test splitting to prevent future data leakage",
      "Gradient boosted tree regression hyperparameter tuning with Scikit-learn evaluation metrics",
      "Feature importance ranking to isolate critical load drivers"
    ],
    "keyFindings": [
      "Hour of day and month of year were identified as the strongest predictors of electricity demand.",
      "Model accurately captured seasonal summer AC cooling peaks and winter heating surges.",
      "Achieved low Root Mean Squared Error (RMSE) on out-of-time test dataset, outperforming baseline moving averages.",
      "Provided utility operators with reliable 24-hour lookahead demand estimates."
    ],
    "metrics": [
      {
        "label": "Algorithm",
        "value": "XGBoost / Sklearn"
      },
      {
        "label": "Historical Horizon",
        "value": "10+ Years"
      },
      {
        "label": "Top Predictor",
        "value": "Hour of Day"
      },
      {
        "label": "Task Type",
        "value": "Regression"
      }
    ],
    "image": "assets/images/projects/time_series.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Python-Projects"
  },
  {
    "id": "automotive-sales-analytics",
    "title": "Automotive Sales & Dealership Performance Analytics",
    "category": "excel",
    "categoryLabel": "Excel & Power BI Analytics",
    "featured": false,
    "badge": "Operational Analytics",
    "subtitle": "Inventory Turnover, Body Style & Fuel Type Pricing Analysis",
    "shortDesc": "Interactive dealership performance dashboard tracking vehicle inventory turnover, average transaction prices across body styles, transmission preferences, and sales rep revenue.",
    "businessProblem": "Dealership managers faced inventory aging on specific vehicle trims while losing sales on popular hybrid and SUV models due to misaligned stock replenishment.",
    "dataset": "Automobile retail sales dataset containing model names, body styles (SUV, Sedan, Hatchback), engine types, transmission, dealer regions, MSRP, and selling price.",
    "techStack": [
      "Microsoft Excel",
      "Power BI",
      "Pivot Tables",
      "KPI Analysis",
      "Data Cleaning"
    ],
    "techniques": [
      "Multi-dimensional Pivot Tables calculating average transaction value per body category",
      "Dealer commission and profit spread formulas using nested lookups and logic",
      "Dynamic visual dashboard with synchronized slicers for fuel type and region",
      "Aging inventory risk indicators flagging units exceeding 60 days on lot"
    ],
    "keyFindings": [
      "SUVs and Crossovers accounted for 54% of dealership revenue with the highest gross margin per vehicle.",
      "Automatic transmissions represented 82% of customer purchases, accelerating inventory turnaround.",
      "Identified top 3 dealership branches outperforming regional targets by over 25%.",
      "Optimized inventory mix recommendations reducing average lot-holding days by 11 days."
    ],
    "metrics": [
      {
        "label": "SUV Rev Share",
        "value": "54%"
      },
      {
        "label": "Auto Trans Share",
        "value": "82%"
      },
      {
        "label": "Lot Turnover",
        "value": "-11 Days"
      },
      {
        "label": "Tools",
        "value": "Excel & PBI"
      }
    ],
    "image": "assets/images/projects/car_sales.png",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Excel-Projects"
  },
  {
    "id": "diabetes-patient-analytics",
    "title": "Clinical Healthcare Analytics: Diabetes Risk Factor Analysis",
    "category": "excel",
    "categoryLabel": "Excel & Healthcare Analytics",
    "featured": false,
    "badge": "Healthcare Analytics",
    "subtitle": "Patient Vitals, Glucose Levels & Lifestyle Risk Modeling",
    "shortDesc": "Comprehensive healthcare analysis evaluating clinical vitals, BMI thresholds, blood pressure, insulin, and age distributions to identify high-risk pre-diabetic patient clusters.",
    "businessProblem": "Healthcare administrators needed a systematic way to identify early risk patterns in patient screening data to recommend preventive interventions before chronic onset.",
    "dataset": "Clinical patient records tracking pregnancy counts, glucose concentration, blood pressure, skin fold thickness, insulin levels, BMI, diabetes pedigree function, and age.",
    "techStack": [
      "Microsoft Excel",
      "Statistical Analysis",
      "Data Cleaning",
      "Data Validation",
      "Conditional Formatting"
    ],
    "techniques": [
      "Data cleaning handling zero-value anomalies in biological parameters (e.g. zero blood pressure)",
      "BMI categorization and risk tier assignment according to clinical standards",
      "Statistical summary tables calculating mean, median, standard deviation, and variance by outcome",
      "Interactive executive scorecard with visual KPI thresholds"
    ],
    "keyFindings": [
      "Average BMI among diagnosed patients was 28.6+, exhibiting strong correlation with glucose intolerance.",
      "Glucose levels above 140 mg/dL showed an 83% probability of positive diabetes diagnosis.",
      "Identified patient age group 35-50 as the primary window for high-impact preventive intervention.",
      "Provided structured clinical recommendations for early-stage screening protocols."
    ],
    "metrics": [
      {
        "label": "Avg Patient BMI",
        "value": "28.6"
      },
      {
        "label": "High Risk Glucose",
        "value": ">140 mg/dL"
      },
      {
        "label": "Target Age Tier",
        "value": "35-50 Yrs"
      },
      {
        "label": "Tools",
        "value": "Excel & BI"
      }
    ],
    "image": "assets/images/projects/diabetes.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Excel-Projects"
  },
  {
    "id": "sql-relational-business-intelligence",
    "title": "Enterprise SQL Analytics & Business Logic Query Suite",
    "category": "sql",
    "categoryLabel": "SQL Analytics",
    "featured": true,
    "badge": "Database Querying",
    "subtitle": "Advanced CTEs, Window Functions & MoM Growth Metrics",
    "shortDesc": "Production-ready SQL query suite implementing complex multi-table JOINs, Common Table Expressions (CTEs), Window Functions, and cohort retention calculations for business decision support.",
    "businessProblem": "Transactional relational databases required performant analytical queries to compute MoM revenue growth, customer RFM quintiles, and sales rep leaderboard rankings without degrading OLTP speed.",
    "dataset": "Normalized relational e-commerce schema including Customers, Orders, Order_Items, Products, and Payments tables.",
    "techStack": [
      "SQL",
      "Complex JOINs",
      "CTEs",
      "Window Functions",
      "Data Aggregation"
    ],
    "techniques": [
      "Recursive CTEs and multi-level CTE pipelines for hierarchical reporting",
      "Window Functions: ROW_NUMBER(), DENSE_RANK(), LAG(), LEAD(), and running cumulative totals",
      "RFM (Recency, Frequency, Monetary) quintile scoring using NTILE(5)",
      "Cohort retention matrix tracking monthly customer repurchase behavior"
    ],
    "keyFindings": [
      "Constructed queries resolving customer churn rate and MoM revenue trajectory across multi-million record tables.",
      "Designed window function leaderboards ranking regional sales performance without subquery bottlenecks.",
      "Automated RFM customer segmentation separating VIP champions from at-risk defectors.",
      "Demonstrated deep mastery of relational integrity, indexing strategies, and optimized aggregation."
    ],
    "metrics": [
      {
        "label": "Query Complexity",
        "value": "Advanced CTEs"
      },
      {
        "label": "Window Functions",
        "value": "LAG/LEAD/RANK"
      },
      {
        "label": "Analysis Type",
        "value": "RFM & Cohorts"
      },
      {
        "label": "Standard",
        "value": "ANSI SQL"
      }
    ],
    "image": "assets/images/projects/sql_analytics.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio"
  },
  {
    "id": "mcdonalds-nutritional-analytics",
    "title": "McDonald's Nutritional Content & Dietary Profiling",
    "category": "excel",
    "categoryLabel": "Excel Analytics",
    "featured": false,
    "badge": "Consumer Analytics",
    "subtitle": "Calorie, Sodium & Macronutrient Comparative Analysis",
    "shortDesc": "Nutritional profile breakdown across McDonald's entire menu catalog, analyzing calorie density, sodium spikes, and macronutrient balance across food categories.",
    "businessProblem": "Consumers and health analysts required a transparent, data-driven way to navigate fast-food nutritional tradeoffs, identifying hidden high-sodium and high-sugar menu items.",
    "dataset": "Nutritional dataset covering 260+ menu items, tracking calories, total fat, saturated fat, trans fat, cholesterol, sodium, carbohydrates, dietary fiber, sugars, and protein.",
    "techStack": [
      "Microsoft Excel",
      "Data Cleaning",
      "Conditional Formatting",
      "Pivot Charts",
      "KPI Analysis"
    ],
    "techniques": [
      "Categorical grouping by meal category (Breakfast, Beef & Pork, Chicken & Fish, Beverages, Desserts)",
      "Conditional formatting heatmaps highlighting daily recommended value exceedances",
      "Scatter plot correlation comparing calories against sodium and fat content",
      "Interactive slicers enabling dynamic meal combo nutritional tallying"
    ],
    "keyFindings": [
      "Breakfast items and specialty sandwiches contained up to 92% of the recommended daily sodium intake.",
      "Beverages and milkshakes contributed disproportionately high sugar counts with minimal dietary fiber.",
      "Identified top 5 high-protein, calorie-efficient menu alternatives for health-conscious consumers.",
      "Created an interactive combo calculator simulating total daily nutritional impact."
    ],
    "metrics": [
      {
        "label": "Items Analyzed",
        "value": "260+ Items"
      },
      {
        "label": "Max Daily Sodium",
        "value": "Up to 92%"
      },
      {
        "label": "Categories",
        "value": "9 Meal Types"
      },
      {
        "label": "Tools",
        "value": "Excel Visuals"
      }
    ],
    "image": "assets/images/projects/mcdonalds.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Excel-Projects"
  },
  {
    "id": "mental-health-tech-workplace",
    "title": "Mental Health in Tech Workplace Survey Intelligence",
    "category": "excel",
    "categoryLabel": "Excel & Survey Analytics",
    "featured": false,
    "badge": "Workplace Analytics",
    "subtitle": "Employee Wellness, Benefits Access & Culture Insights",
    "shortDesc": "Workplace survey analytics evaluating attitudes toward mental health in technology organizations, treatment frequency, employer wellness benefits, and remote work sentiment.",
    "businessProblem": "HR and executive leaders needed data-backed evidence on whether employee wellness initiatives and mental health benefits were effectively reaching technical teams.",
    "dataset": "Comprehensive survey of 1,200+ tech industry professionals detailing company size, remote work status, employer wellness benefits, and openness to discussing wellness.",
    "techStack": [
      "Microsoft Excel",
      "Data Cleaning",
      "Pivot Tables",
      "Statistical Analysis",
      "Cross-Tabs"
    ],
    "techniques": [
      "Data cleansing standardizing categorical responses and handling non-mandatory free-text survey fields",
      "Cross-tabulation comparing company size against availability of wellness healthcare coverage",
      "Comparative percentage breakdown of remote workers versus in-office personnel regarding wellness openness",
      "Executive summary dashboard with key metric callouts for HR policy planning"
    ],
    "keyFindings": [
      "Employees at tech companies with 500+ staff reported 2.4x higher awareness of wellness benefits than startups.",
      "Remote workers reported greater flexibility but noted higher isolation concerns during peak sprint deadlines.",
      "Over 48% of respondents indicated willingness to seek care when benefits are explicitly communicated.",
      "Produced strategic recommendations for HR leadership to increase benefits adoption by 35%."
    ],
    "metrics": [
      {
        "label": "Responses Analyzed",
        "value": "1,200+"
      },
      {
        "label": "Benefits Awareness",
        "value": "2.4x in Enterprise"
      },
      {
        "label": "Care Willingness",
        "value": "48% Positive"
      },
      {
        "label": "Tools",
        "value": "Excel & Reporting"
      }
    ],
    "image": "assets/images/projects/mental_health.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Excel-Projects"
  },
  {
    "id": "board-games-eda",
    "title": "Board Game Mechanics & User Rating Correlation Study",
    "category": "python",
    "categoryLabel": "Python Data Analysis",
    "featured": false,
    "badge": "Exploratory Analysis",
    "subtitle": "Statistical Distribution, Outlier Filtering & Review Dynamics",
    "shortDesc": "Statistical exploratory data analysis evaluating board game popularity, publication era trends, player count elasticity, and user rating volume correlations.",
    "businessProblem": "Game publishers and designers needed to evaluate which design mechanics (playtime, minimum players, player age) correlate with higher community longevity and positive reviews.",
    "dataset": "Metadata records of thousands of board games including title, year published, min/max players, playtime duration, minimum age, users rated, and average user score.",
    "techStack": [
      "Python",
      "Pandas",
      "Matplotlib",
      "Seaborn",
      "EDA",
      "Statistical Analysis"
    ],
    "techniques": [
      "Systematic data cleaning removing zero-rated unverified titles and handling missing attributes",
      "Log transformation and boxplot filtering to separate legitimate viral titles from rating noise",
      "Time-series distribution tracking average user rating evolution across publication decades",
      "Pearson correlation matrix highlighting relationships between user rating volume and score"
    ],
    "keyFindings": [
      "Discovered a strong positive correlation between number of user reviews and higher average ratings.",
      "Modern titles (published post-2010) show higher median ratings, reflecting evolved game design mechanics.",
      "Most board games cluster within the 5.5 to 7.8 rating tier, with extreme ratings representing niche genres.",
      "Games optimized for 3-4 players achieved the highest overall community engagement."
    ],
    "metrics": [
      {
        "label": "Rating Range",
        "value": "5.5 - 7.8 Peak"
      },
      {
        "label": "Optimal Players",
        "value": "3 - 4 Players"
      },
      {
        "label": "Era Trend",
        "value": "Post-2010 Rise"
      },
      {
        "label": "Tools",
        "value": "Python / Seaborn"
      }
    ],
    "image": "assets/images/projects/board_games.svg",
    "githubUrl": "https://github.com/asmaa1234567890/Asmaa_Hussain_Portfolio/tree/main/Python-Projects"
  }
];

const FUTURE_PROJECTS = [
  {
    "title": "Customer Churn Prediction & Retention Modeling",
    "category": "Machine Learning",
    "tools": [
      "Python",
      "Scikit-learn",
      "Logistic Regression",
      "Random Forest",
      "Classification"
    ],
    "description": "Supervised classification ML pipeline to identify subscribers likely to cancel services, enabling proactive targeted retention incentives before churn occurs."
  },
  {
    "title": "E-Commerce RFM Customer Segmentation & Clustering",
    "category": "Unsupervised ML & BI",
    "tools": [
      "SQL",
      "Power BI",
      "Python",
      "Clustering (K-Means)",
      "DAX"
    ],
    "description": "Recency, Frequency, and Monetary (RFM) clustering classifying customer bases into Champions, Potential Loyalists, and At-Risk segments to optimize marketing ROI."
  },
  {
    "title": "Marketing Campaign A/B Testing & Statistical Inference",
    "category": "Statistical Inference",
    "tools": [
      "Python",
      "Statistical Analysis",
      "Hypothesis Testing",
      "Power BI"
    ],
    "description": "Rigorous hypothesis testing framework (two-sample t-tests, p-values, and statistical power) measuring conversion lift for digital marketing campaigns."
  }
];
