// Nav toggle (mobile)
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');
if(navToggle){
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    navToggle.textContent = open ? 'CLOSE' : 'MENU';
  });
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.textContent = 'MENU';
  }));
}

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
if('IntersectionObserver' in window && revealEls.length){
  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting){
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  revealEls.forEach(el => io.observe(el));
} else {
  revealEls.forEach(el => el.classList.add('is-visible'));
}

// Pathway motif fill animation (hero signature element)
const pathway = document.querySelector('.pathway');
if(pathway){
  const line = pathway.querySelector('.pathway-line');
  const fill = pathway.dataset.fill || '12.5%';
  if('IntersectionObserver' in window){
    const io2 = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          pathway.style.setProperty('--fill', fill);
          pathway.classList.add('in-view');
          io2.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    io2.observe(pathway);
  } else {
    pathway.style.setProperty('--fill', fill);
    pathway.classList.add('in-view');
  }
}

// Donate tier selection
const tierButtons = document.querySelectorAll('.tier');
const customAmount = document.getElementById('custom-amount');
if(tierButtons.length){
  tierButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      tierButtons.forEach(b => b.classList.remove('selected'));
      btn.classList.add('selected');
      if(customAmount) customAmount.value = btn.dataset.amount || '';
    });
  });
}

// Basic contact form handling (front-end demo only)
const contactForm = document.getElementById('contact-form');
if(contactForm){
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'MESSAGE SENT';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; contactForm.reset(); }, 2600);
  });
}

const donateForm = document.getElementById('donate-form');
if(donateForm){
  donateForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = donateForm.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'THANK YOU — PROCESSING';
    setTimeout(() => { btn.textContent = original; }, 2600);
  });
}
