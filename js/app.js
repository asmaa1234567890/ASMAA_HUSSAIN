/**
 * Asmaa Hussain Elsayed - Professional Data Analyst Portfolio
 * Interactive Application Logic & UI Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initNavigation();
  initProjects();
  initLiveWidget();
  initCopyButtons();
  initContactForm();
  initModalListeners();
});

/* ==========================================================================
   1. Theme Toggle (Dark / Light Mode)
   ========================================================================== */
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');
  
  const savedTheme = localStorage.getItem('asmaa_theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  updateThemeIcon(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const nextTheme = currentTheme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', nextTheme);
      localStorage.setItem('asmaa_theme', nextTheme);
      updateThemeIcon(nextTheme);
    });
  }
}

function updateThemeIcon(theme) {
  const themeIcon = document.getElementById('themeIcon');
  if (!themeIcon) return;
  if (theme === 'light') {
    themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`;
    themeIcon.setAttribute('aria-label', 'Switch to dark theme');
  } else {
    themeIcon.innerHTML = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    themeIcon.setAttribute('aria-label', 'Switch to light theme');
  }
}

/* ==========================================================================
   2. Navigation & Scrollspy
   ========================================================================== */
function initNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const mobileToggle = document.getElementById('mobileNavToggle');
  const navMenu = document.getElementById('navMenu');

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });

    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('mobile-open');
      });
    });
  }

  // Scrollspy
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.pageYOffset + 200;

    sections.forEach(section => {
      const top = section.offsetTop;
      const height = section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < top + height) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
}

/* ==========================================================================
   3. Projects Rendering & Interactive Filtering
   ========================================================================== */
function initProjects() {
  const grid = document.getElementById('projectsGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  if (!grid || !window.PORTFOLIO_PROJECTS) return;

  renderProjects(window.PORTFOLIO_PROJECTS);
  renderFutureProjects();

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      
      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        renderProjects(window.PORTFOLIO_PROJECTS);
      } else {
        const filtered = window.PORTFOLIO_PROJECTS.filter(p => p.category === filter);
        renderProjects(filtered);
      }
    });
  });
}

function renderProjects(projects) {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = '';
  
  projects.forEach(p => {
    const card = document.createElement('article');
    card.className = 'project-card fade-in';
    card.setAttribute('data-id', p.id);

    const metricsHtml = p.metrics && p.metrics.length >= 2 
      ? `<div class="project-metrics-row">
          <div class="mini-metric">
            <span class="mini-metric-value">${p.metrics[0].value}</span>
            <span class="mini-metric-label">${p.metrics[0].label}</span>
          </div>
          <div class="mini-metric">
            <span class="mini-metric-value">${p.metrics[1].value}</span>
            <span class="mini-metric-label">${p.metrics[1].label}</span>
          </div>
        </div>`
      : '';

    const tagsHtml = p.techStack.map(t => `<span class="tech-tag">${t}</span>`).join('');

    card.innerHTML = `
      <div class="project-media">
        <img src="${p.image}" alt="${p.title}" class="project-thumbnail" loading="lazy" />
        <div class="project-badges">
          <span class="category-pill">${p.categoryLabel}</span>
          ${p.badge ? `<span class="featured-pill">${p.badge}</span>` : ''}
        </div>
      </div>
      <div class="project-body">
        <h3 class="project-title">${p.title}</h3>
        <p class="project-subtitle">${p.subtitle || ''}</p>
        <p class="project-desc">${p.shortDesc}</p>
        ${metricsHtml}
        <div class="project-tech-tags">${tagsHtml}</div>
        <div class="project-actions">
          <button class="btn-card-details" onclick="openProjectModal('${p.id}')">Case Study &amp; Insights</button>
          <a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-card-gh" aria-label="View on GitHub">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>
        </div>
      </div>
    `;

    grid.appendChild(card);
  });
}

function renderFutureProjects() {
  const container = document.getElementById('futureProjectsGrid');
  if (!container || !window.FUTURE_PROJECTS) return;

  container.innerHTML = window.FUTURE_PROJECTS.map(f => `
    <div class="roadmap-card">
      <span class="roadmap-badge">${f.category}</span>
      <h4 class="roadmap-item-title">${f.title}</h4>
      <p class="roadmap-item-desc">${f.description}</p>
      <div class="project-tech-tags">
        ${f.tools.map(t => `<span class="tech-tag">${t}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ==========================================================================
   4. Project Case Study Modal
   ========================================================================== */
window.openProjectModal = function(projectId) {
  if (!window.PORTFOLIO_PROJECTS) return;
  const project = window.PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('projectModal');
  const container = document.getElementById('modalContentArea');
  if (!modal || !container) return;

  const metricsGridHtml = project.metrics && project.metrics.length 
    ? `<div class="modal-section">
        <h4 class="modal-section-title">Key Performance Indicators</h4>
        <div class="widget-metrics-grid">
          ${project.metrics.map(m => `
            <div class="metric-box">
              <div class="metric-box-title">${m.label}</div>
              <div class="metric-box-value">${m.value}</div>
            </div>
          `).join('')}
        </div>
       </div>`
    : '';

  const techniquesHtml = project.techniques && project.techniques.length 
    ? `<div class="modal-section">
        <h4 class="modal-section-title">Analytical Techniques &amp; Methodology</h4>
        <ul class="modal-bullets">
          ${project.techniques.map(t => `<li>${t}</li>`).join('')}
        </ul>
       </div>`
    : '';

  const findingsHtml = project.keyFindings && project.keyFindings.length 
    ? `<div class="modal-section">
        <h4 class="modal-section-title">Key Findings &amp; Business Value</h4>
        <ul class="modal-bullets">
          ${project.keyFindings.map(f => `<li>${f}</li>`).join('')}
        </ul>
       </div>`
    : '';

  container.innerHTML = `
    <img src="${project.image}" alt="${project.title}" class="modal-hero-image" />
    <div class="modal-body">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <span class="category-pill">${project.categoryLabel}</span>
        <span class="featured-pill">${project.badge || 'Verified Project'}</span>
      </div>
      <h2 style="font-size:1.8rem; margin-bottom:8px;">${project.title}</h2>
      <p style="color:var(--accent-cyan); font-weight:600; margin-bottom:20px;">${project.subtitle || ''}</p>
      
      <div class="modal-section">
        <h4 class="modal-section-title">Business Objective</h4>
        <p style="color:var(--text-secondary); line-height:1.7;">${project.businessProblem}</p>
      </div>

      <div class="modal-section">
        <h4 class="modal-section-title">Dataset &amp; Scope</h4>
        <p style="color:var(--text-secondary); line-height:1.7;">${project.dataset}</p>
      </div>

      ${metricsGridHtml}
      ${techniquesHtml}
      ${findingsHtml}

      <div class="modal-section" style="margin-top:32px; display:flex; gap:16px; flex-wrap:wrap;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-primary" style="text-decoration:none;">
          View Repository on GitHub
        </a>
        <button class="btn-secondary" onclick="closeModal()">Close Overview</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeModal = function() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(m => m.classList.remove('active'));
  document.body.style.overflow = '';
};

function initModalListeners() {
  const modals = document.querySelectorAll('.modal-overlay');
  modals.forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeModal();
      }
    });
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeModal();
    }
  });
}

/* ==========================================================================
   5. Certificate Preview Modal
   ========================================================================== */
window.openCertModal = function(imagePath, title) {
  const modal = document.getElementById('projectModal');
  const container = document.getElementById('modalContentArea');
  if (!modal || !container) return;

  container.innerHTML = `
    <div style="padding:24px; text-align:center;">
      <h3 style="margin-bottom:16px; font-size:1.4rem;">${title}</h3>
      <img src="${imagePath}" alt="${title}" style="max-width:100%; max-height:75vh; margin:0 auto; border-radius:12px; box-shadow:0 8px 30px rgba(0,0,0,0.5);" />
      <div style="margin-top:20px;">
        <button class="btn-secondary" onclick="closeModal()">Close View</button>
      </div>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

/* ==========================================================================
   6. Interactive Live KPI Widget
   ========================================================================== */
function initLiveWidget() {
  const widgetData = {
    ops: {
      metrics: [
        { label: 'Avg Handling Time', value: '4.2 min', trend: '↓ 14% improvement', status: 'positive' },
        { label: 'Customer Satisfaction', value: '89.4%', trend: '↑ 4.8 pts CSAT', status: 'positive' },
        { label: 'First Contact Res', value: '91.2%', trend: 'Target: >90%', status: 'neutral' },
        { label: 'Interactions Analyzed', value: '5,000+', trend: 'Multi-agent dataset', status: 'neutral' }
      ]
    },
    retail: {
      metrics: [
        { label: 'Total Operating Margin', value: '41.8%', trend: '↑ High category yield', status: 'positive' },
        { label: 'Online Sales Share', value: '43.0%', trend: 'Top volume channel', status: 'positive' },
        { label: 'Top Margin SKUs', value: 'Footwear', trend: "Men's Streetwear", status: 'neutral' },
        { label: 'Regional Focus', value: '5 Zones', trend: 'Northeast & West lead', status: 'neutral' }
      ]
    },
    health: {
      metrics: [
        { label: 'High-Risk Glucose Cutoff', value: '>140 mg/dL', trend: '83% diagnosis match', status: 'positive' },
        { label: 'Avg Diagnosed BMI', value: '28.6', trend: 'Strong risk factor', status: 'neutral' },
        { label: 'Primary Window Age', value: '35 - 50', trend: 'Preventive window', status: 'neutral' },
        { label: 'Patient Sample', value: 'Pima Cohort', trend: 'Standardized baseline', status: 'neutral' }
      ]
    },
    jobs: {
      metrics: [
        { label: 'SQL / Python Demand', value: '73.2%', trend: 'Mandatory core skills', status: 'positive' },
        { label: 'US Salary Premium', value: '+28%', trend: 'Over Canadian median', status: 'positive' },
        { label: 'AI/ML Remote Ratio', value: '64.0%', trend: 'Highest flexibility', status: 'positive' },
        { label: 'Wrangled Dataset', value: '8.7 MB+', trend: 'AI, BI, DA, IT roles', status: 'neutral' }
      ]
    }
  };

  const tabs = document.querySelectorAll('.widget-tab-btn');
  const metricsContainer = document.getElementById('widgetMetricsContainer');
  if (!metricsContainer) return;

  function updateMetrics(key) {
    const data = widgetData[key];
    if (!data) return;

    metricsContainer.innerHTML = data.metrics.map(m => `
      <div class="metric-box fade-in">
        <div class="metric-box-title">${m.label}</div>
        <div class="metric-box-value">${m.value}</div>
        <div class="metric-box-trend ${m.status}">${m.trend}</div>
      </div>
    `).join('');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      const key = tab.getAttribute('data-widget');
      updateMetrics(key);
    });
  });

  // Initial load
  updateMetrics('ops');
}

/* ==========================================================================
   7. One-Click Copy Buttons
   ========================================================================== */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('.btn-copy-info');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      navigator.clipboard.writeText(textToCopy).then(() => {
        const origText = btn.textContent;
        btn.textContent = 'Copied! ✓';
        btn.style.color = '#10b981';
        btn.style.borderColor = '#10b981';
        setTimeout(() => {
          btn.textContent = origText;
          btn.style.color = '';
          btn.style.borderColor = '';
        }, 2000);
      }).catch(err => {
        console.error('Copy failed:', err);
      });
    });
  });
}

/* ==========================================================================
   8. Contact Form Handler
   ========================================================================== */
function initContactForm() {
  const form = document.getElementById('portfolioContactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('senderName').value;
    const email = document.getElementById('senderEmail').value;
    const subject = document.getElementById('senderSubject').value;
    const message = document.getElementById('senderMessage').value;

    const mailtoUrl = `mailto:asmaahussain172001@gmail.com?subject=${encodeURIComponent(subject + ' - From ' + name)}&body=${encodeURIComponent(message + '\n\nSender Contact: ' + email)}`;
    window.location.href = mailtoUrl;

    const submitBtn = form.querySelector('button[type="submit"]');
    if (submitBtn) {
      submitBtn.textContent = 'Opening Email Client... ✓';
      setTimeout(() => {
        submitBtn.textContent = 'Send Message';
      }, 3000);
    }
  });
}

/* ==========================================================================
   9. CV Preview Modal Toggle
   ========================================================================== */
window.toggleCVPreview = function() {
  const modal = document.getElementById('projectModal');
  const container = document.getElementById('modalContentArea');
  if (!modal || !container) return;

  container.innerHTML = `
    <div style="padding:24px;">
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
        <h3 style="font-size:1.3rem;">Asmaa Hussain - Professional Resume</h3>
        <a href="assets/docs/Asmaa_Hussain_CV.pdf" download="Asmaa_Hussain_CV.pdf" class="btn-primary" style="padding:8px 16px; font-size:0.85rem; text-decoration:none;">
          Download PDF
        </a>
      </div>
      <iframe src="assets/docs/Asmaa_Hussain_CV.pdf" width="100%" height="600px" style="border:1px solid var(--border-color); border-radius:8px;">
        <p>Your browser does not support inline PDFs. <a href="assets/docs/Asmaa_Hussain_CV.pdf" download>Download the CV directly</a>.</p>
      </iframe>
    </div>
  `;

  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};
