const surfaces = {
  glasses: { symbol: '◎', status: 'FOCUS DETECTED', label: 'PERSONAL COMPUTING', title: 'Help that respects<br>your attention.', body: "Glasses that understand what you're doing and surface only what matters—in the right place, at the right time.", zh:{status:'检测到专注状态',label:'个人计算',title:'尊重注意力的<br>智能协助。',body:'眼镜理解你正在做什么，只在正确的时间、正确的位置呈现真正重要的信息。'} },
  enterprise: { symbol: 'Ⅱ', status: 'STEP 04 / VERIFIED', label: 'FRONTLINE INTELLIGENCE', title: 'Guidance grounded<br>in the real world.', body: 'Identify the person, equipment and current procedure. Deliver the next safe step without breaking flow.', zh:{status:'步骤 04 / 已核验',label:'一线情境智能',title:'扎根真实世界的<br>现场指导。',body:'识别人、设备和当前流程，在不中断工作节奏的前提下给出下一步安全指引。'} },
  robotics: { symbol: '↔', status: 'HUMAN INTENT / WAIT', label: 'HUMAN–ROBOT COLLABORATION', title: 'Robots that know<br>when to help.', body: 'Understand human activity, predict assistance needs, and negotiate control before taking action.', zh:{status:'人的意图 / 等待',label:'人机协作',title:'知道何时伸手的<br>机器人。',body:'理解人的活动，预判协助需求，并在采取行动之前协商控制权。'} },
  xr: { symbol: '⌗', status: 'ANCHOR / CONFIRMED', label: 'SPATIAL COMPUTING', title: 'Information where<br>it belongs.', body: 'Generate guidance, highlights and spatial interfaces from the meaning of a place—not fixed coordinates.', zh:{status:'空间锚点 / 已确认',label:'空间计算',title:'让信息出现在<br>它该在的位置。',body:'根据场所的语义生成指导、高亮和空间界面，而不是依赖固定坐标。'} },
  agents: { symbol: '→', status: 'ACTION / APPROVED', label: 'SITUATED AGENTS', title: 'Beyond prompt,<br>plan, answer.', body: 'Agents that carry context into planning and action while keeping intent, uncertainty and agency visible.', zh:{status:'行动 / 已批准',label:'情境智能体',title:'超越提示、<br>规划与回答。',body:'把情境带入规划与行动，同时让意图、不确定性和人的能动性始终可见。'} }
};

document.querySelectorAll('.surface-tab').forEach((tab) => tab.addEventListener('click', () => {
  document.querySelectorAll('.surface-tab').forEach(t => t.classList.remove('active'));
  tab.classList.add('active');
  const base = surfaces[tab.dataset.surface];
  const item = language === 'zh' ? {...base, ...base.zh} : base;
  const visual = document.querySelector('.surface-visual');
  visual.animate([{opacity:.35,transform:'translateY(8px)'},{opacity:1,transform:'none'}],{duration:380,easing:'ease-out'});
  document.querySelector('#surfaceSymbol').textContent = item.symbol;
  document.querySelector('#surfaceStatus').textContent = item.status;
  document.querySelector('#surfaceLabel').textContent = item.label;
  document.querySelector('#surfaceTitle').innerHTML = item.title;
  document.querySelector('#surfaceBody').textContent = item.body;
}));

document.querySelectorAll('.engine-node').forEach((node) => node.addEventListener('click', () => {
  document.querySelectorAll('.engine-node').forEach(n => n.classList.remove('active'));
  node.classList.add('active');
  document.querySelector('.detail-panel p').textContent = node.dataset.detail;
}));

const observer = new IntersectionObserver((entries) => entries.forEach(entry => {
  if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
}), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const translations = {
  zh: {
    navEngine:'情境引擎', navSurfaces:'产品载体', navPrinciples:'设计原则', navTalk:'联系我们 ↗',
    heroEyebrow:'情境智能 / 01', heroTitle:'理解此刻，<br><em>而后行动。</em>', heroBody:'我们构建人机协作的情境操作系统——让技术知道何时介入、在哪里出现，以及何时退后一步。', heroCta:'探索情境引擎', liveContext:'实时情境', signalActivity:'活动', signalWriting:'深度工作', signalIntent:'意图', signalFinish:'完成当前思路', signalPolicy:'策略', signalWait:'等待，不打扰',
    thesisKicker:'AI 已经学会如何回答。<br>现在，它必须学会<em>何时回答。</em>', thesisBody:'下一代计算平台不是另一块屏幕或提示框，而是对人、活动、意图、空间和时机的持续理解——并将这种理解克制地转化为行动。',
    engineTitle:'一个引擎，<br><em>连接所有终端。</em>', engineBody:'多模态运行时将原始信号转化为可解释的决策：现在协助、等待、询问，或主动让开。',
    surfacesTitle:'情境随行，<br><em>界面万变。</em>', tabGlasses:'AI 眼镜', tabEnterprise:'企业场景', tabRobotics:'机器人',
    principlesTitle:'放大行动，<br><em>保留人的能动性。</em>', p1Title:'行动', p1Body:'系统存在的意义，是减少意图与有意义进展之间的摩擦。', p2Title:'智能', p2Body:'理解先于行动。不确定性始终可见，绝不隐藏。', p3Title:'连接', p3Body:'人、AI 与环境协调成为一个清晰可理解的系统。', p4Title:'未来', p4Body:'面向一个计算无处不在、具备空间感且更人性的未来。',
    closingKicker:'我们正在构建 Prompt 之后的计算方式。', closingTitle:'让智能，<br><em>真正理解情境。</em>', closingCta:'开启对话'
  }
};
let language = 'en';
const original = {};
document.querySelectorAll('[data-i18n]').forEach(el => original[el.dataset.i18n] = el.innerHTML);
document.querySelector('.lang-toggle').addEventListener('click', (e) => {
  language = language === 'en' ? 'zh' : 'en';
  document.documentElement.lang = language === 'zh' ? 'zh-CN' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = language === 'zh' ? translations.zh[el.dataset.i18n] : original[el.dataset.i18n]);
  e.currentTarget.textContent = language === 'en' ? '中' : 'EN';
  document.querySelector('.surface-tab.active').click();
});

const header = document.querySelector('.site-header');
window.addEventListener('scroll', () => {
  const progress = Math.min(window.scrollY / 500, 1);
  header.style.background = `rgba(15,16,16,${progress * .94})`;
  header.style.position = window.scrollY > 80 ? 'fixed' : 'absolute';
});
