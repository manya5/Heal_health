/* =============================================
   HEAL HEALTH AI — ENHANCED SCRIPT
   ============================================= */

const layers = [
  {
    kicker: 'Layer 1',
    title: 'Provider Attribution OS',
    copy: 'Shows which campaigns, cohorts, locations, and service lines convert into booked appointments, visits, tests, and revenue.',
    question: 'Question answered: Which campaigns created booked patients?',
    bullets: ['Campaign-to-booking dashboard', 'Lead matching and source attribution', 'Cost per booked appointment']
  },
  {
    kicker: 'Layer 2',
    title: 'AI Optimization Engine',
    copy: 'Turns attribution data into lead scores, call priorities, campaign quality scores, and cohort recommendations.',
    question: 'Question answered: What should the growth team prioritize next?',
    bullets: ['Booking probability scoring', 'Campaign and cohort quality scoring', 'Call-center priority queues']
  },
  {
    kicker: 'Layer 3',
    title: 'Activation Layer',
    copy: 'Turns intelligence into action through retargeting, suppression, lookalike seeds, CRM nurture lists, and WhatsApp/SMS follow-up segments.',
    question: 'Question answered: How do we act on high-fit audiences?',
    bullets: ['Retargeting and suppression exports', 'CRM and messaging segments', 'Agency-ready campaign briefs']
  },
  {
    kicker: 'Layer 4',
    title: 'Healthcare Media Measurement',
    copy: 'Helps agencies, publishers, pharma teams, and provider networks measure whether campaigns created real healthcare outcomes.',
    question: 'Question answered: Did this media investment create downstream outcomes?',
    bullets: ['Omnichannel campaign reporting', 'Closed-loop conversion measurement', 'Agency and publisher dashboards']
  },
  {
    kicker: 'Layer 5',
    title: 'Benchmarking Product',
    copy: 'Aggregates anonymized performance patterns so customers can benchmark by service line, geography, channel, and cohort.',
    question: 'Question answered: How do we compare against market patterns?',
    bullets: ['Cost per booked appointment benchmarks', 'Show-up and conversion benchmarks', 'Service-line and city-level norms']
  },
  {
    kicker: 'Layer 6',
    title: 'Privacy-Safe Intelligence Network',
    copy: 'Uses aggregated outcome signals to power healthcare audience planning, clean-room-style collaboration, and ecosystem intelligence.',
    question: 'Question answered: What privacy-safe insights can power the broader healthcare ecosystem?',
    bullets: ['Privacy-safe cohort intelligence', 'Geo-level demand signals', 'Enterprise licensing for pharma, insurers, publishers, and agencies']
  }
];

/* --- Navigation --- */
function initNav() {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.nav-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    });
  });

  // Close mobile menu when clicking outside
  document.addEventListener('click', (e) => {
    if (!menu.contains(e.target) && !toggle.contains(e.target)) {
      menu.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }
  });
}

/* --- Sticky Header Shadow on Scroll --- */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  const onScroll = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 20);
        ticking = false;
      });
      ticking = true;
    }
  };

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
}

/* --- Active Nav Link Highlighting --- */
function initActiveNav() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-menu a:not(.nav-cta)');
  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach((link) => {
          link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { threshold: 0.3, rootMargin: '-80px 0px -50% 0px' });

  sections.forEach((section) => observer.observe(section));
}

/* --- Layer Tabs --- */
function initLayerTabs() {
  const tabs = document.querySelectorAll('.layer-tab');
  const kicker = document.getElementById('layer-kicker');
  const title = document.getElementById('layer-title');
  const copy = document.getElementById('layer-copy');
  const list = document.getElementById('layer-list');
  const question = document.getElementById('layer-question');
  if (!tabs.length || !kicker || !title || !copy || !list || !question) return;

  const panel = document.querySelector('.layer-panel');

  tabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const index = Number(tab.dataset.layer || 0);
      const layer = layers[index];

      tabs.forEach((item) => {
        item.classList.remove('active');
        item.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      // Animate content transition
      if (panel) {
        panel.style.opacity = '0';
        panel.style.transform = 'translateY(8px)';
        setTimeout(() => {
          kicker.textContent = layer.kicker;
          title.textContent = layer.title;
          copy.textContent = layer.copy;
          question.textContent = layer.question;
          list.innerHTML = layer.bullets.map((bullet) => `<li>${bullet}</li>`).join('');
          panel.style.opacity = '1';
          panel.style.transform = 'translateY(0)';
        }, 180);
      } else {
        kicker.textContent = layer.kicker;
        title.textContent = layer.title;
        copy.textContent = layer.copy;
        question.textContent = layer.question;
        list.innerHTML = layer.bullets.map((bullet) => `<li>${bullet}</li>`).join('');
      }
    });
  });

  // Add transition to panel
  if (panel) {
    panel.style.transition = 'opacity 0.3s cubic-bezier(0.22, 1, 0.36, 1), transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)';
  }
}

/* --- ROI Calculator --- */
function formatCurrency(value) {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(Number.isFinite(value) ? value : 0);
}

function formatNumber(value) {
  return new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(Number.isFinite(value) ? value : 0);
}

function initRoiCalculator() {
  const fields = ['adSpend', 'cpl', 'currentRate', 'improvedRate', 'contribution'].map((id) => document.getElementById(id));
  const [adSpend, cpl, currentRate, improvedRate, contribution] = fields;
  const leadsOut = document.getElementById('leadsOut');
  const beforeOut = document.getElementById('beforeOut');
  const afterOut = document.getElementById('afterOut');
  const extraBookings = document.getElementById('extraBookings');
  const incrementalValue = document.getElementById('incrementalValue');
  if (fields.some((field) => !field) || !leadsOut || !beforeOut || !afterOut || !extraBookings || !incrementalValue) return;

  const calculate = () => {
    const spend = Number(adSpend.value) || 0;
    const costPerLead = Math.max(Number(cpl.value) || 1, 1);
    const current = Math.max(Number(currentRate.value) || 0, 0) / 100;
    const improved = Math.max(Number(improvedRate.value) || 0, 0) / 100;
    const grossContribution = Number(contribution.value) || 0;

    const leads = spend / costPerLead;
    const before = leads * current;
    const after = leads * improved;
    const extra = Math.max(after - before, 0);
    const value = extra * grossContribution;

    // Animate number updates
    animateValue(leadsOut, formatNumber(leads));
    animateValue(beforeOut, `${formatNumber(before)} bookings`);
    animateValue(afterOut, `${formatNumber(after)} bookings`);
    animateValue(extraBookings, `${formatNumber(extra)} extra bookings`);
    animateValue(incrementalValue, `${formatCurrency(value)} incremental contribution`);
  };

  fields.forEach((field) => field.addEventListener('input', calculate));
  calculate();
}

function animateValue(element, newValue) {
  if (element.textContent === newValue) return;
  element.style.transition = 'opacity 0.15s ease, transform 0.15s ease';
  element.style.opacity = '0.4';
  element.style.transform = 'translateY(2px)';
  setTimeout(() => {
    element.textContent = newValue;
    element.style.opacity = '1';
    element.style.transform = 'translateY(0)';
  }, 100);
}

/* --- Scroll Reveal --- */
function initReveal() {
  const reveals = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || !reveals.length) {
    reveals.forEach((item) => item.classList.add('visible'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach((item) => observer.observe(item));
}

/* --- Contact Form --- */
function initForm() {
  const form = document.getElementById('pilotForm');
  const note = document.getElementById('formNote');
  if (!form || !note) return;

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const name = formData.get('name') || 'there';

    // Button animation
    const btn = form.querySelector('button[type="submit"]');
    if (btn) {
      btn.textContent = 'Submitting...';
      btn.disabled = true;
      setTimeout(() => {
        note.textContent = `Thanks, ${name}. Your pilot request has been captured in the front-end demo. Connect this form to your CRM or backend for production.`;
        note.classList.add('success');
        btn.textContent = 'Submitted ✓';
        setTimeout(() => {
          form.reset();
          btn.textContent = 'Submit pilot request';
          btn.disabled = false;
        }, 3000);
      }, 800);
    }
  });
}

/* --- Footer Year --- */
function initYear() {
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
}

/* --- Smooth Scroll for Anchor Links --- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (targetId === '#top') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerHeight = document.querySelector('.site-header')?.offsetHeight || 0;
        const top = target.getBoundingClientRect().top + window.scrollY - headerHeight - 20;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

/* --- Initialize Everything --- */
document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHeaderScroll();
  initActiveNav();
  initLayerTabs();
  initRoiCalculator();
  initReveal();
  initForm();
  initYear();
  initSmoothScroll();
});
