const surfaces = {
  glasses: { symbol: '◎', status: 'FOCUS DETECTED', label: 'PERSONAL COMPUTING', title: 'Help that respects your attention.', body: "Glasses that understand what you're doing and surface only what matters—in the right place, at the right time." },
  enterprise: { symbol: 'Ⅱ', status: 'STEP 04 / VERIFIED', label: 'FRONTLINE INTELLIGENCE', title: 'Guidance grounded in the real world.', body: 'Identify the person, equipment and current procedure. Deliver the next safe step without breaking flow.' },
  robotics: { symbol: '↔', status: 'HUMAN INTENT / WAIT', label: 'HUMAN–ROBOT COLLABORATION', title: 'Robots that know when to help.', body: 'Understand human activity, predict assistance needs, and negotiate control before taking action.' },
  xr: { symbol: '⌗', status: 'ANCHOR / CONFIRMED', label: 'SPATIAL COMPUTING', title: 'Information where it belongs.', body: 'Generate guidance, highlights and spatial interfaces from the meaning of a place—not fixed coordinates.' },
  agents: { symbol: '→', status: 'ACTION / APPROVED', label: 'SITUATED AGENTS', title: 'Beyond prompt, plan, answer.', body: 'Agents that carry context into planning and action while keeping intent, uncertainty and agency visible.' }
};

const surfaceVisual = document.querySelector('.surface-visual');
document.querySelectorAll('.surface-tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('.surface-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const item = surfaces[tab.dataset.surface];
  surfaceVisual.dataset.mode = tab.dataset.surface;
  surfaceVisual.classList.remove('interacting');
  void surfaceVisual.offsetWidth;
  surfaceVisual.classList.add('interacting');
  window.setTimeout(() => surfaceVisual.classList.remove('interacting'), 900);
  surfaceVisual.animate([{opacity:.35, transform:'translateY(10px)'},{opacity:1, transform:'none'}], {duration:460, easing:'cubic-bezier(.2,.8,.2,1)'});
  document.querySelector('#surfaceSymbol').textContent = item.symbol;
  document.querySelector('#surfaceStatus').textContent = item.status;
  document.querySelector('#surfaceLabel').textContent = item.label;
  document.querySelector('#surfaceTitle').innerHTML = item.title;
  document.querySelector('#surfaceBody').textContent = item.body;
}));

surfaceVisual.addEventListener('click', () => {
  surfaceVisual.classList.toggle('interacting');
});
surfaceVisual.addEventListener('pointermove', (event) => {
  const bounds = surfaceVisual.getBoundingClientRect();
  const x = (event.clientX - bounds.left) / bounds.width - .5;
  const y = (event.clientY - bounds.top) / bounds.height - .5;
  surfaceVisual.style.setProperty('--mx', `${x * 18}px`);
  surfaceVisual.style.setProperty('--my', `${y * 18}px`);
  surfaceVisual.style.setProperty('--mxn', `${x * -8}px`);
  surfaceVisual.style.setProperty('--myn', `${y * -8}px`);
});
surfaceVisual.addEventListener('pointerleave', () => {
  surfaceVisual.style.setProperty('--mx', '0px');
  surfaceVisual.style.setProperty('--my', '0px');
  surfaceVisual.style.setProperty('--mxn', '0px');
  surfaceVisual.style.setProperty('--myn', '0px');
});

document.querySelectorAll('.engine-node').forEach((node) => node.addEventListener('click', () => {
  document.querySelectorAll('.engine-node').forEach(n => n.classList.remove('active'));
  node.classList.add('active');
  document.querySelector('.detail-panel p').textContent = node.dataset.detail;
  updateEngine(true);
}));

document.querySelectorAll('.principle-card').forEach((card) => {
  const activate = () => {
    const wasActive = card.classList.contains('active');
    document.querySelectorAll('.principle-card').forEach(item => item.classList.remove('active'));
    if (!wasActive) card.classList.add('active');
  };
  card.addEventListener('click', activate);
  card.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); activate(); }
  });
});

const randomBetween = (min, max) => Math.round(min + Math.random() * (max - min));
function updateLiveContext() {
  document.querySelectorAll('.live-value').forEach(value => {
    const lowEvent = Math.random() < .32;
    const next = lowEvent
      ? randomBetween(Number(value.dataset.lowMin), Number(value.dataset.lowMax))
      : randomBetween(Number(value.dataset.min), Number(value.dataset.max));
    const color = next < 30 ? '#ff5b45' : next < 60 ? '#ff9f43' : '#d9ff43';
    const row = value.closest('.context-row');
    value.textContent = `${next}%`;
    value.style.color = color;
    row.classList.toggle('is-critical', next < 30);
    row.classList.toggle('is-warning', next >= 30 && next < 60);
    const bar = row.querySelector('.context-progress i');
    bar.style.width = `${next}%`;
    bar.style.background = color;
  });
}

const engineStates = [
  {state:'WAIT', confidence:[89,96], balance:[68,79], color:'#d9ff43'},
  {state:'OBSERVE', confidence:[82,91], balance:[76,88], color:'#59d9ff'},
  {state:'ASK', confidence:[73,86], balance:[60,72], color:'#ffb347'},
  {state:'ASSIST', confidence:[84,94], balance:[52,66], color:'#ff6b57'}
];
let engineStep = 0;
function updateEngine(userTriggered = false) {
  engineStep = userTriggered ? (engineStep + 1) % engineStates.length : (engineStep + 1) % engineStates.length;
  const current = engineStates[engineStep];
  const confidence = randomBetween(...current.confidence);
  const context = Math.min(.99, Math.max(.76, confidence / 100 + (Math.random() * .04 - .02)));
  const balance = randomBetween(...current.balance);
  const decisionCard = document.querySelector('.decision-card');
  decisionCard.style.setProperty('--policy-color', current.color);
  decisionCard.dataset.policy = current.state.toLowerCase();
  document.querySelector('#contextConfidence').textContent = context.toFixed(2);
  document.querySelector('#decisionState').textContent = current.state;
  document.querySelector('#decisionConfidence').textContent = confidence;
  document.querySelector('.decision-meter i').style.width = `${confidence}%`;
  document.querySelector('#controlBalance').style.width = `${balance}%`;
}

window.setInterval(updateLiveContext, 1700);
window.setInterval(() => updateEngine(false), 2300);

const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const header = document.querySelector('.site-header');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('menu-open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});
header.querySelectorAll('nav a').forEach(link => link.addEventListener('click', () => {
  header.classList.remove('menu-open');
  menuToggle.setAttribute('aria-expanded', 'false');
}));
window.addEventListener('scroll', () => {
  const progress = Math.min(window.scrollY / 500, 1);
  header.style.background = `rgba(15,16,16,${progress * .94})`;
  header.style.position = window.scrollY > 80 ? 'fixed' : 'absolute';
});
