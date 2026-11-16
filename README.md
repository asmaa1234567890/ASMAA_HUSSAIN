# Asmaa Hussain Elsayed - Professional Data Analyst Portfolio

A modern, high-performance, responsive personal portfolio website engineered specifically for **Data Analyst**, **Business Intelligence Analyst**, and **Aspiring Machine Learning Practitioner** positions.

Carefully curated and aligned with **Asmaa Hussain Elsayed's verified CV**, featuring her Computer Engineering degree from Ahram Canadian University (August 2024), current role at Giza Security Directorate, instructional experience at English Zone (Abu Dhabi), and analytics role at United Engineering Industries.

---

## 🌟 Key Features

- **Executive UI/UX**: Designed with a sophisticated slate/obsidian palette, warm burgundy ambient lighting matching Asmaa's professional portrait, glassmorphic cards, and clean typography (`Plus Jakarta Sans` & `Fira Code`).
- **Interactive KPI Simulator Widget**: Real-time interactive dashboard widget simulating operational metrics across Call Center SLAs, Adidas Retail Margins, Clinical Diabetes Risk, and Tech Job Demands.
- **Dynamic Project Filtering**: Instant filtering across **Power BI Dashboards**, **Python Data Analysis**, **Excel Analytics**, **SQL Analytics**, and **Machine Learning**.
- **Case Study Modals**: Click "Case Study & Insights" on any project card to inspect the full Business Problem, Dataset Scope, Analytical Methodologies, Key Findings, and Direct GitHub links.
- **Verified Credentials & Internships**: Interactive modals displaying credentials for **Microsoft Power BI Training (MCIT)**, **CodeAlpha Data Analytics Internship**, and **ACC (Analytical Career Connect)**.
- **Dark & Light Mode**: Seamless theme toggle with state preserved in `localStorage`.
- **One-Click Contact & CV**: Instant copy for Email and Phone, direct CV preview modal, and one-click PDF download.
- **Zero Build Dependencies**: Pure HTML5, modern CSS3, and modular ES6 JavaScript. Blazing fast, zero npm build steps, and 100% compatible with GitHub Pages out of the box.

---

## 📁 Project Structure

```text
asmaa-portfolio/
├── index.html                   # Semantic, accessible HTML5 structure aligned with CV
├── README.md                    # Complete deployment & maintenance manual
├── css/
│   ├── style.css               # Design system, layout, responsive queries
│   └── animations.css          # Subtle micro-interactions and transitions
├── js/
│   ├── app.js                  # UI controllers, modal logic, theme toggler
│   └── projects-data.js        # Centralized project catalog (12 verified case studies)
├── assets/
│   ├── images/
│   │   ├── profile.jpg         # High-resolution professional portrait
│   │   ├── certificate1.jpg    # Verified Power BI credential
│   │   ├── internships.jpg     # Verified internship credential
│   │   └── projects/           # Screenshots & SVGs of analytics projects
│   └── docs/
│       └── Asmaa_Hussain_CV.pdf # Professional CV file ready for download
```

---

## 🚀 How to Deploy to GitHub Pages (Step-by-Step)

Deploying this portfolio to GitHub Pages is completely free and takes less than 2 minutes:

### Option A: Via Terminal / PowerShell

1. **Open terminal inside the `asmaa-portfolio` directory**:
   ```bash
   cd asmaa-portfolio
   git init
   git add .
   git commit -m "Deploy updated CV-aligned portfolio"
   ```

2. **Create a new repository on GitHub**:
   - Go to [github.com/new](https://github.com/new)
   - Repository name: `asmaa-portfolio` (or `asmaa1234567890.github.io`)
   - Keep it **Public**
   - Click **Create repository**

3. **Push your code to GitHub**:
   ```bash
   git remote add origin https://github.com/asmaa1234567890/asmaa-portfolio.git
   git branch -M main
   git push -u origin main
   ```

4. **Activate GitHub Pages**:
   - In your GitHub repository, click on the **Settings** tab.
   - On the left sidebar, click **Pages**.
   - Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
   - Under **Branch**, select `main` and folder `/ (root)`.
   - Click **Save**.
   - Your website will be live in 1-2 minutes at:
     ```
     https://asmaa1234567890.github.io/asmaa-portfolio/
     ```

---

## 🛠️ How to Add or Edit Projects in the Future

All project cards and modal case studies are driven by `js/projects-data.js`. Simply open `js/projects-data.js`, add or edit a project object, and push to GitHub. The website updates automatically without touching any HTML!

---

## 📞 Contact Information (from CV)

- **Name**: Asmaa Hussain Elsayed
- **Role**: Data Analyst | Business Intelligence Enthusiast | Aspiring Machine Learning Practitioner
- **Email**: `asmaahussain172001@gmail.com`
- **Phone**: `+20 1125112777`
- **Location**: Giza, Egypt
- **GitHub**: [github.com/asmaa1234567890](https://github.com/asmaa1234567890)
