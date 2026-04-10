import React, { useState } from 'react';

type Lang = 'en' | 'zh';
type Pair = [string, string];
type Triple = [string, string, string];

type Copy = {
  nav: [string, string, string, string, string];
  heroBadge: string;
  heroTitle: string;
  heroSubtitle: string;
  heroBody: string;
  heroButtons: [string, string];
  heroTags: string[];
  snapshotTitle: string;
  snapshotHeading: string;
  snapshotFlag: string;
  snapshotItems: Pair[];
  promiseLabel: string;
  promiseText: string;
  whatLabel: string;
  whatHeading: string;
  whatText: string;
  whatCards: Pair[];
  processLabel: string;
  processHeading: string;
  processText: string;
  reassuranceLabel: string;
  steps: Triple[];
  whyLabel: string;
  whyHeading: string;
  whyText: string;
  whyCards: Pair[];
  whyClosing: string;
  sampleLabel: string;
  sampleHeading: string;
  sampleText: string;
  sampleSubtext: string;
  sneakPeekLabel: string;
  sneakPeekHeading: string;
  illustrative: string;
  reportTitle: string;
  reportSubtitle: string;
  reportBlur: string;
  reportInsights: Pair[];
  pilotSummary: string;
  nextRecommendation: string;
  illustrativeFormat: string;
  pilotSummaryRows: Pair[];
  salesRows: Pair[];
  recommendationLabel: string;
  recommendationTitle: string;
  recommendationText: string;
  sampleClosing: string;
  faqLabel: string;
  faqHeading: string;
  faqText: string;
  faqItems: Pair[];
  hainanLabel: string;
  hainanHeading: string;
  hainanCards: Pair[];
  contactLabel: string;
  contactHeading: string;
  contactText: string;
  contactSubtext: string;
  wechatLabel: string;
  wechatHeading: string;
  wechatText: string;
  directLabel: string;
  contactItems: Pair[];
  noteLabel: string;
  noteText: string;
};

const WECHAT_ID = '+86 13134936365';

const COPY: Record<Lang, Copy> = {
  en: {
    nav: ['What You Get', 'How It Works', 'Why Us', 'Sample Outputs', 'Contact'],
    heroBadge: 'Hainan Pilot for Global Brands',
    heroTitle: 'Test your product in Hainan before a full China launch',
    heroSubtitle: 'Low-cost pilot. Real sales data. Clear next step.',
    heroBody:
      'We help global brands test real market demand in Hainan through small-batch pilots, local selling scenes, and structured market feedback.',
    heroButtons: ['Contact', 'View Process'],
    heroTags: ['Based in Haikou', 'Local execution', 'Post-expo follow-up'],
    snapshotTitle: 'Pilot Snapshot',
    snapshotHeading: 'Structured first-step market test',
    snapshotFlag: '30-day logic',
    snapshotItems: [
      ['Start quantity', '50–100 units'],
      ['Market focus', 'Hainan'],
      ['Output style', 'Pilot report'],
      ['Goal', 'Decide next step'],
    ],
    promiseLabel: 'Core promise',
    promiseText:
      'No blind rollout. No heavy first-step commitment. Just a more controlled way to test China through Hainan.',
    whatLabel: 'What You Get',
    whatHeading: 'A structured first-step market test, not just trying to sell a few units',
    whatText:
      'This pilot is designed to help you decide what to do next in China with clearer market signals, lower risk, and better visibility.',
    whatCards: [
      ['Small-Batch Pilot Execution', 'Start with a manageable quantity instead of a full launch.'],
      ['Local Channel Testing', 'Test your product through selected retail and event-based selling scenes in Hainan.'],
      ['Structured Market Data Report', 'Receive a clearer view of sales pace, scene fit, and market response.'],
      ['Next-Step Recommendation', 'Know whether to reorder, adjust, expand, or stop before heavier investment.'],
    ],
    processLabel: 'How It Works',
    processHeading: 'A transparent 4-step process built for clarity and speed',
    processText:
      'The goal is to test product-market fit in a more controlled way before a wider China rollout.',
    reassuranceLabel: 'Reassurance',
    steps: [
      ['Step 1', 'Selection', 'We review your product, positioning, and small-batch potential, then shape a pilot approach that fits Hainan testing scenes.'],
      ['Step 2', 'Compliance', 'We support practical first-step coordination around labeling and entry requirements.'],
      ['Step 3', 'Real-World Testing', 'We run a 30-day pilot through suitable local retail and event-based selling scenes in Haikou and wider Hainan.'],
      ['Step 4', 'Data Delivery', 'You receive a structured pilot output covering sales movement, scene performance, market response, and a recommendation for what to do next.'],
    ],
    whyLabel: 'Why Work With Us',
    whyHeading: 'A Hainan-based pilot system, not a random middle layer asking for samples',
    whyText:
      'We are building a smarter first-step China testing path for brands that want local execution, structured outputs, and clearer next-step decisions.',
    whyCards: [
      ['5+ Years in Cross-Border Trade', 'Cross-border product understanding, communication experience, and practical business judgment.'],
      ['Local Execution Team in Haikou', 'On-the-ground coordination, pilot support, and local follow-up in Hainan.'],
      ['Retail Partner Types in Hainan', 'Pilot-friendly scenes such as malls, pop-up zones, specialty retail spaces, and event-based displays.'],
      ['Post-Expo Follow-Up Program', 'A pathway for exhibitors and brands that want to continue local testing after the expo.'],
    ],
    whyClosing:
      'If the pilot works, the next step can move toward repeat orders, wider channels, and deeper local cooperation.',
    sampleLabel: 'Sample Outputs',
    sampleHeading: 'What a pilot can produce',
    sampleText: 'A preview of the kind of outputs you receive after a structured Hainan market test.',
    sampleSubtext: 'Not just feedback. A pilot with visible outputs.',
    sneakPeekLabel: 'Sample report sneak-peek',
    sneakPeekHeading: 'See how your product performs against the China market average',
    illustrative: 'Illustrative preview',
    reportTitle: 'Sample Market Report',
    reportSubtitle: 'Pilot performance snapshot',
    reportBlur: 'Illustrative preview',
    reportInsights: [
      ['Sell-through rate', 'See how much of the first batch moved within the test window.'],
      ['Best channel fit', 'Understand which sales scene creates the strongest conversion.'],
      ['Price sensitivity', 'Compare customer response across tested price levels.'],
      ['Reorder signal', 'Judge whether the product shows enough momentum for a second step.'],
    ],
    pilotSummary: 'Pilot Summary',
    nextRecommendation: 'Next-Step Recommendation',
    illustrativeFormat: 'Illustrative format',
    pilotSummaryRows: [
      ['Product', 'Imported specialty snack'],
      ['Pilot period', '30 days'],
      ['Units tested', '100'],
      ['Selling scenes', 'Retail shelf / Pop-up / Event booth'],
      ['Objective', 'Validate first-round demand in Hainan'],
    ],
    salesRows: [
      ['Units sold', 'XX / 100'],
      ['Best-performing week', 'Week 2'],
      ['Strongest selling scene', 'Event-based display'],
      ['Price response', 'Stronger at mid-range pricing'],
    ],
    recommendationLabel: 'Recommended next step',
    recommendationTitle: 'Continue with a second-round pilot',
    recommendationText:
      'Demand signal is positive, but results are stronger in event-based scenes than static shelf placement.',
    sampleClosing:
      'The goal is not just to sell a few units. It is to understand what to do next with clearer market signals.',
    faqLabel: 'FAQ',
    faqHeading: 'Questions brands usually ask before starting a pilot',
    faqText:
      'Clear answers help reduce hesitation. The point is to make the first step easier to understand and easier to trust.',
    faqItems: [
      ['Do I need a China company to start?', 'No. The pilot is designed for brands that want a lighter first step before setting up locally.'],
      ['Who handles import coordination and labeling?', 'We support practical first-step coordination so the pilot can move in a more controlled way.'],
      ['How is money settled during the pilot?', 'Settlement is handled case by case based on product type, pilot scale, and cooperation structure before launch.'],
      ['What happens to unsold inventory?', 'This is defined in advance as part of the pilot arrangement so responsibilities stay clear on both sides.'],
    ],
    hainanLabel: 'Why Hainan First',
    hainanHeading: 'A more practical first-step market before wider China expansion',
    hainanCards: [
      ['Controlled First-Step Market', 'Better suited for a lower-risk first-round pilot before wider China expansion.'],
      ['Local + Visitor Demand', 'Resident demand and visitor-driven consumption make it easier to observe different selling responses.'],
      ['Better for Early Validation', 'A practical place to test products, selling scenes, and market fit before heavier investment.'],
    ],
    contactLabel: 'Contact',
    contactHeading: 'Start the conversation',
    contactText:
      'You are already on the website, so there is no need to show a second website QR here. This section is focused on direct contact.',
    contactSubtext:
      'The fastest and most stable option is to show the WeChat number directly. For international messaging or formal business communication, use WhatsApp, phone, or email below.',
    wechatLabel: 'WeChat',
    wechatHeading: 'Fastest contact in China',
    wechatText: 'WeChat ID: +86 13134936365',
    directLabel: 'Direct contact options',
    contactItems: [
      ['WeChat', '+86 13134936365'],
      ['Phone', '+86 13134936365'],
      ['WhatsApp', '+86 13134936365'],
      ['Email', 'lucasfirebrick@gmail.com'],
    ],
    noteLabel: 'Contact note',
    noteText: 'If QR display is unreliable, showing the WeChat number directly is the simplest and most stable option.',
  },
  zh: {
    nav: ['你将获得什么', '合作流程', '为什么找我们', '交付样例', '联系'],
    heroBadge: '海南市场测试服务｜面向全球品牌',
    heroTitle: '在全面进入中国市场之前，先在海南测试你的产品',
    heroSubtitle: '低成本试点｜真实销售数据｜更清晰的下一步',
    heroBody:
      '我们通过小批量试点、本地销售场景测试和结构化市场反馈，帮助全球品牌先看清海南、再判断中国。',
    heroButtons: ['联系', '查看流程'],
    heroTags: ['海口落地执行', '本地协同', '展后延伸跟进'],
    snapshotTitle: '试点概览',
    snapshotHeading: '结构化的第一步市场测试',
    snapshotFlag: '30天逻辑',
    snapshotItems: [
      ['起测数量', '50–100件'],
      ['测试市场', '海南'],
      ['交付形式', '测试报告'],
      ['核心目标', '判断下一步'],
    ],
    promiseLabel: '核心原则',
    promiseText: '不是盲目铺货，不是重投入试错，而是先通过海南，用更可控的方式测试中国市场。',
    whatLabel: '你将获得什么',
    whatHeading: '这不是帮你卖几件货，而是一套结构化的第一步市场验证',
    whatText: '这套试点的目标，是让你用更低风险、更清晰的市场信号，看清下一步值不值得继续做中国。',
    whatCards: [
      ['小批量试点执行', '先从可控数量开始，而不是直接重投入铺开。'],
      ['本地渠道测试', '在海南合适的零售和活动场景中测试你的产品。'],
      ['结构化市场数据报告', '更清楚地看到动销速度、场景适配和市场反应。'],
      ['下一步建议', '判断是补货、调整、扩大，还是先暂停。'],
    ],
    processLabel: '合作流程',
    processHeading: '透明的四步流程，帮助你更快理解、更敢尝试',
    processText: '目标是在更可控的前提下，先验证产品与市场的匹配，再决定是否扩大进入中国。',
    reassuranceLabel: '你需要知道',
    steps: [
      ['步骤 1', '选品评估', '我们会先看你的产品定位、卖点和小批量测试可行性，再设计更适合海南场景的试点方式。'],
      ['步骤 2', '合规与执行准备', '处理第一步所需的标签与入场协调，让试点更顺畅。'],
      ['步骤 3', '真实场景实测', '在海口及海南合适的零售和活动场景中进行30天试销测试。'],
      ['步骤 4', '数据交付', '你会拿到一份结构化输出，包括销售表现、场景反馈、市场反应以及下一步建议。'],
    ],
    whyLabel: '为什么找我们',
    whyHeading: '我们不是随便拿样品的人，而是在搭建一套海南市场试点系统',
    whyText: '我们想做的不是简单中间层，而是帮助品牌用更聪明的第一步进入中国测试路径。',
    whyCards: [
      ['5年以上跨境贸易经验', '对跨境产品、沟通与执行有真实理解，也有实际判断力。'],
      ['海口本地执行团队', '能做本地协同、试点支持和后续跟进。'],
      ['海南零售合作类型', '包括商场、快闪区、特色零售空间和活动型销售场景。'],
      ['展后延伸试点计划', '适合展商和品牌在消博展后继续推进本地测试。'],
    ],
    whyClosing: '如果试点结果成立，下一步就可以自然进入补货、渠道放大和更深合作。',
    sampleLabel: '交付样例',
    sampleHeading: '一次试点，最终会产出什么',
    sampleText: '下面是你在海南完成一次结构化市场测试后，可能拿到的输出预览。',
    sampleSubtext: '不只是反馈，而是看得见的交付物。',
    sneakPeekLabel: '报告预览',
    sneakPeekHeading: '看看你的产品，相对中国市场平均表现会处在什么位置',
    illustrative: '示意预览',
    reportTitle: '样例市场报告',
    reportSubtitle: '试点表现快照',
    reportBlur: '示意预览',
    reportInsights: [
      ['售罄率', '看首批货在测试周期内卖掉了多少。'],
      ['最佳渠道匹配', '看哪一种销售场景带来更强转化。'],
      ['价格敏感度', '比较不同价格带下客户反应的差异。'],
      ['补货信号', '判断产品是否具备进入第二步的动力。'],
    ],
    pilotSummary: '试点概览',
    nextRecommendation: '下一步建议',
    illustrativeFormat: '示意格式',
    pilotSummaryRows: [
      ['产品', '进口特色零食'],
      ['测试周期', '30天'],
      ['测试数量', '100件'],
      ['销售场景', '货架 / 快闪 / 活动展位'],
      ['目标', '验证海南第一轮需求'],
    ],
    salesRows: [
      ['已售数量', 'XX / 100'],
      ['表现最好周次', '第2周'],
      ['最强场景', '活动型展示'],
      ['价格反馈', '中端价格带反应更强'],
    ],
    recommendationLabel: '推荐下一步',
    recommendationTitle: '建议进入第二轮试点',
    recommendationText: '已有需求信号，但在活动型场景中的表现明显强于静态货架。',
    sampleClosing: '目标不是只卖掉几件货，而是通过更清晰的市场信号，判断下一步该怎么做。',
    faqLabel: '常见问题',
    faqHeading: '品牌在开始试点前，最常问的几个问题',
    faqText: '清楚的回答能降低顾虑。重点是让第一步更容易理解，也更容易被信任。',
    faqItems: [
      ['开始之前需要中国公司吗？', '不需要。这套试点本来就是为那些还不想马上设立中国主体的品牌设计的。'],
      ['谁处理进口协调和标签？', '我们会协助完成第一步所需的协调，让试点更可控。'],
      ['测试期间怎么结算？', '会在开始前根据产品类型、试点规模和合作方式，先把结算规则定义清楚。'],
      ['卖不完的库存怎么办？', '会在试点前就明确责任和处理方式，避免双方模糊不清。'],
    ],
    hainanLabel: '为什么先从海南开始',
    hainanHeading: '在更大规模进入中国之前，海南是更实际的第一步市场',
    hainanCards: [
      ['更可控的第一站市场', '相比一开始就全面铺开，海南更适合作为低风险的第一轮试点。'],
      ['本地消费 + 游客消费', '常住需求和游客消费叠加，更容易观察不同场景下的反应。'],
      ['适合早期验证', '适合先测产品、场景和市场适配度，再决定要不要加大投入。'],
    ],
    contactLabel: '联系',
    contactHeading: '开始沟通',
    contactText: '你已经在网站里了，所以这里不需要再放第二个网站二维码。这一块只负责帮助你更快联系到我们。',
    contactSubtext: '最快也最稳的方式，就是直接展示微信号。如果你更习惯国际沟通或正式商务联系，也可以直接用 WhatsApp、电话或邮箱。',
    wechatLabel: '微信',
    wechatHeading: '中国场景下最快的联系路径',
    wechatText: '微信号：+86 13134936365',
    directLabel: '其他直接联系方式',
    contactItems: [
      ['微信', '+86 13134936365'],
      ['电话', '+86 13134936365'],
      ['WhatsApp', '+86 13134936365'],
      ['邮箱', 'lucasfirebrick@gmail.com'],
    ],
    noteLabel: '联系说明',
    noteText: '如果二维码显示不稳定，直接展示微信号就是最简单也最稳的方案。',
  },
};

function MetricBar(props: { widthClass: string; colorClass: string }) {
  return (
    <div className="mt-3 h-2 rounded-full bg-white/10">
      <div className={`h-2 rounded-full ${props.widthClass} ${props.colorClass}`} />
    </div>
  );
}

function SectionHeading(props: { label: string; title: string; text?: string }) {
  return (
    <div className="max-w-4xl">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{props.label}</p>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">{props.title}</h2>
      {props.text ? <p className="mt-6 text-lg leading-8 text-slate-600">{props.text}</p> : null}
    </div>
  );
}

function WechatCard(props: { label: string; value: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-full rounded-[24px] border border-slate-200 bg-white p-6 text-center shadow-inner">
        <div className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{props.label}</div>
        <div className="mt-4 break-all text-2xl font-semibold text-slate-900">{props.value}</div>
      </div>
    </div>
  );
}

function SampleChart(props: { lang: Lang }) {
  const bars = [38, 64, 86, 72, 91, 78];
  const points = bars
    .map((value, idx) => {
      const x = 8 + idx * 16.8;
      const y = 92 - value * 0.75;
      return `${x},${y}`;
    })
    .join(' ');

  return (
    <div className="mt-6 rounded-[22px] border border-white/10 bg-slate-950/60 p-5">
      <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
        <span>{props.lang === 'en' ? 'Weekly movement' : '周度动销'}</span>
        <span>{props.lang === 'en' ? '30-day sample chart' : '30天样例图'}</span>
      </div>
      <div className="relative h-64 rounded-2xl bg-gradient-to-b from-white/5 to-transparent p-4">
        <svg viewBox="0 0 100 100" className="absolute inset-4 h-[calc(100%-2rem)] w-[calc(100%-2rem)]">
          <defs>
            <linearGradient id="lineFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(56,189,248,0.25)" />
              <stop offset="100%" stopColor="rgba(56,189,248,0.02)" />
            </linearGradient>
          </defs>
          {[20, 40, 60, 80].map((y) => (
            <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="rgba(255,255,255,0.08)" strokeDasharray="2 3" />
          ))}
          <polyline points={`8,92 ${points} 92,92`} fill="url(#lineFill)" stroke="none" />
          <polyline points={points} fill="none" stroke="rgba(255,255,255,0.95)" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          {bars.map((value, idx) => {
            const x = 8 + idx * 16.8;
            const y = 92 - value * 0.75;
            return (
              <g key={idx}>
                <circle cx={x} cy={y} r="2.3" fill="white" />
                <circle cx={x} cy={y} r="4.5" fill="rgba(255,255,255,0.12)" />
              </g>
            );
          })}
        </svg>
        <div className="absolute inset-x-4 bottom-4 flex justify-between text-xs text-slate-500">
          {bars.map((_, idx) => (
            <span key={idx}>W{idx + 1}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function HainanPilotLandingPage() {
  const [lang, setLang] = useState<Lang>('en');
  const t = COPY[lang];
  const hrefs = ['#what-you-get', '#how-it-works', '#why-us', '#sample-outputs', '#contact'];
  const channelRows: Triple[] =
    lang === 'en'
      ? [
          ['Event booth', 'Strong', 'Highest conversion after direct product explanation'],
          ['Retail shelf', 'Medium', 'Needs stronger packaging visibility'],
          ['Pop-up display', 'Medium+', 'Works better with sampling or traffic support'],
        ]
      : [
          ['活动展位', '强', '在直接讲解后转化最高'],
          ['货架陈列', '中等', '需要更强包装可见度'],
          ['快闪陈列', '中强', '更适合搭配试吃或导流'],
        ];
  const widths = ['w-[74%]', 'w-[83%]', 'w-[61%]', 'w-[69%]'];
  const colors = ['bg-sky-400', 'bg-emerald-400', 'bg-amber-400', 'bg-fuchsia-400'];

  return (
    <div className="min-h-screen bg-stone-50 text-slate-900">
      <style>{`
        html { scroll-behavior: smooth; }
        .bg-grid {
          background-image:
            linear-gradient(to right, rgba(15,23,42,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(15,23,42,0.05) 1px, transparent 1px);
          background-size: 32px 32px;
        }
      `}</style>

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-stone-50/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <a href="#home" className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-700">
            Hainan Pilot
          </a>
          <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
            {t.nav.map((item, index) => (
              <a key={item} href={hrefs[index]} className="hover:text-slate-900">
                {item}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3 text-sm">
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`rounded-full px-3 py-1.5 font-medium ${lang === 'en' ? 'bg-slate-900 text-white' : 'border border-slate-300 text-slate-500'}`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLang('zh')}
              className={`rounded-full px-3 py-1.5 font-medium ${lang === 'zh' ? 'bg-slate-900 text-white' : 'border border-slate-300 text-slate-500'}`}
            >
              中文
            </button>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-60" />
          <div className="absolute -top-32 right-0 h-80 w-80 rounded-full bg-amber-200/40 blur-3xl" />
          <div className="absolute left-0 top-40 h-72 w-72 rounded-full bg-sky-100/60 blur-3xl" />
          <div className="relative mx-auto grid max-w-7xl gap-14 px-6 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div>
              <div className="mb-6 inline-flex items-center rounded-full border border-slate-300/80 bg-white/70 px-4 py-2 text-xs font-medium uppercase tracking-[0.18em] text-slate-600 shadow-sm">
                {t.heroBadge}
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight tracking-tight text-slate-950 md:text-6xl">
                {t.heroTitle}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700 md:text-xl">{t.heroSubtitle}</p>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">{t.heroBody}</p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a href="#contact" className="inline-flex items-center justify-center rounded-2xl bg-slate-900 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-slate-900/15 transition hover:-translate-y-0.5 hover:bg-slate-800">
                  {t.heroButtons[0]}
                </a>
                <a href="#how-it-works" className="inline-flex items-center justify-center rounded-2xl border border-slate-300 bg-white px-6 py-4 text-sm font-semibold text-slate-900 transition hover:-translate-y-0.5 hover:border-slate-400">
                  {t.heroButtons[1]}
                </a>
              </div>
              <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-600">
                {t.heroTags.map((item) => (
                  <span key={item} className="rounded-full border border-slate-300 bg-white px-4 py-2">
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="lg:pl-6">
              <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">{t.snapshotTitle}</p>
                    <h2 className="mt-2 text-2xl font-semibold text-slate-950">{t.snapshotHeading}</h2>
                  </div>
                  <div className="rounded-2xl bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-700">{t.snapshotFlag}</div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {t.snapshotItems.map(([label, value]) => (
                    <div key={label} className="rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">{label}</p>
                      <p className="mt-2 text-lg font-semibold text-slate-900">{value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-5 rounded-2xl bg-slate-900 p-5 text-white">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">{t.promiseLabel}</p>
                  <p className="mt-3 text-base leading-7 text-slate-100">{t.promiseText}</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="what-you-get" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading label={t.whatLabel} title={t.whatHeading} text={t.whatText} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.whatCards.map(([title, body], index) => (
              <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-sm font-semibold text-white">
                  0{index + 1}
                </div>
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-3 text-base leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="how-it-works" className="border-y border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeading label={t.processLabel} title={t.processHeading} text={t.processText} />
                <div className="mt-8 rounded-[24px] bg-slate-900 p-6 text-white shadow-lg shadow-slate-900/10">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">{t.reassuranceLabel}</p>
                  <p className="mt-3 text-base leading-7 text-slate-100">{t.promiseText}</p>
                </div>
              </div>
              <div className="space-y-5">
                {t.steps.map(([step, title, body]) => (
                  <div key={`${step}-${title}`} className="rounded-[24px] border border-slate-200 bg-stone-50 p-6 shadow-sm">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-white">{step}</span>
                      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
                    </div>
                    <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="why-us" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <SectionHeading label={t.whyLabel} title={t.whyHeading} text={t.whyText} />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {t.whyCards.map(([title, body]) => (
              <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-amber-900">
            <p className="text-base leading-7">{t.whyClosing}</p>
          </div>
        </section>

        <section id="sample-outputs" className="bg-slate-950 text-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-400">{t.sampleLabel}</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-5xl">{t.sampleHeading}</h2>
              <p className="mt-6 text-lg leading-8 text-slate-300">{t.sampleText}</p>
              <p className="mt-4 text-base leading-7 text-slate-400">{t.sampleSubtext}</p>
            </div>

            <div className="mt-12 rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">{t.sneakPeekLabel}</p>
                  <h3 className="mt-2 max-w-4xl text-2xl font-semibold text-white md:text-3xl">{t.sneakPeekHeading}</h3>
                </div>
                <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{t.illustrative}</span>
              </div>

              <div className="mt-8 grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
                <div className="rounded-[24px] border border-white/10 bg-black/20 p-6">
                  <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                    <div>
                      <p className="text-sm text-slate-400">{t.reportTitle}</p>
                      <p className="mt-1 text-xl font-semibold text-white">{t.reportSubtitle}</p>
                    </div>
                    <div className="rounded-xl bg-white/10 px-3 py-2 text-xs text-slate-300">{t.reportBlur}</div>
                  </div>

                  <div className="mt-6 grid gap-4 md:grid-cols-4">
                    {t.reportInsights.map(([title], idx) => (
                      <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                        <p className="text-xs uppercase tracking-[0.14em] text-slate-400">KPI 0{idx + 1}</p>
                        <p className="mt-2 text-base font-semibold text-white">{title}</p>
                        <MetricBar widthClass={widths[idx]} colorClass={colors[idx]} />
                      </div>
                    ))}
                  </div>

                  <SampleChart lang={lang} />

                  <div className="mt-6 overflow-hidden rounded-[22px] border border-white/10">
                    <div className="grid grid-cols-[1fr_0.7fr_1.2fr] bg-white/10 px-4 py-3 text-sm font-medium text-slate-200">
                      <div>{lang === 'en' ? 'Channel' : '渠道'}</div>
                      <div>{lang === 'en' ? 'Result' : '结果'}</div>
                      <div>{lang === 'en' ? 'Observation' : '观察'}</div>
                    </div>
                    {channelRows.map((row, idx) => (
                      <div key={idx} className="grid grid-cols-[1fr_0.7fr_1.2fr] border-t border-white/10 px-4 py-4 text-sm text-slate-300">
                        <div>{row[0]}</div>
                        <div>{row[1]}</div>
                        <div>{row[2]}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-1">
                  {t.reportInsights.map(([title, body]) => (
                    <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                      <p className="text-base font-semibold text-white">{title}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-400">{body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{t.pilotSummary}</h3>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{t.illustrativeFormat}</span>
                </div>
                <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
                  {t.pilotSummaryRows.map(([label, value], idx) => (
                    <div key={label} className={`flex justify-between gap-4 ${idx < t.pilotSummaryRows.length - 1 ? 'border-b border-white/10 pb-3' : ''}`}>
                      <span>{label}</span>
                      <span className="text-right text-white">{value}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/10 backdrop-blur-sm">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold text-white">{t.nextRecommendation}</h3>
                  <span className="rounded-full border border-white/15 px-3 py-1 text-xs text-slate-300">{t.illustrativeFormat}</span>
                </div>
                <div className="mt-6 rounded-2xl bg-emerald-500/10 p-5 ring-1 ring-emerald-400/20">
                  <p className="text-sm text-emerald-200">{t.recommendationLabel}</p>
                  <p className="mt-2 text-xl font-semibold text-white">{t.recommendationTitle}</p>
                  <p className="mt-4 text-base leading-7 text-slate-300">{t.recommendationText}</p>
                </div>
                <div className="mt-5 grid gap-4 sm:grid-cols-2">
                  {t.salesRows.map(([label, value]) => (
                    <div key={label} className="rounded-2xl border border-white/10 bg-black/10 p-4">
                      <p className="text-sm text-slate-400">{label}</p>
                      <p className="mt-3 text-lg font-semibold text-white">{value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-10 max-w-3xl text-lg leading-8 text-slate-300">{t.sampleClosing}</div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <SectionHeading label={t.faqLabel} title={t.faqHeading} text={t.faqText} />
            </div>
            <div className="space-y-4">
              {t.faqItems.map(([q, a]) => (
                <div key={q} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-950">{q}</h3>
                  <p className="mt-3 text-base leading-7 text-slate-600">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading label={t.hainanLabel} title={t.hainanHeading} />
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {t.hainanCards.map(([title, body]) => (
                <div key={title} className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-sm">
                  <h3 className="text-xl font-semibold text-slate-950">{title}</h3>
                  <p className="mt-4 text-base leading-7 text-slate-600">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-slate-200 bg-white">
          <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
              <div>
                <SectionHeading label={t.contactLabel} title={t.contactHeading} text={t.contactText} />
                <p className="mt-4 text-base leading-7 text-slate-600">{t.contactSubtext}</p>
              </div>

              <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                <div className="rounded-[28px] border border-slate-200 bg-stone-50 p-6 shadow-sm">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t.wechatLabel}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-950">{t.wechatHeading}</h3>
                  <p className="mt-2 text-base text-slate-600">{t.wechatText}</p>
                  <div className="mt-6 flex justify-center rounded-[24px] border border-slate-200 bg-white p-4 shadow-inner">
                    <WechatCard label={lang === 'en' ? 'WeChat ID' : '微信号'} value={WECHAT_ID} />
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-slate-500">{t.directLabel}</p>
                    <div className="mt-5 grid gap-4">
                      {t.contactItems.map(([label, value]) => (
                        <div key={label} className="rounded-2xl bg-slate-50 p-4">
                          <p className="text-sm text-slate-500">{label}</p>
                          <p className="mt-2 text-base font-semibold text-slate-950">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="rounded-[28px] border border-amber-200 bg-amber-50 p-6 text-amber-900 shadow-sm">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em]">{t.noteLabel}</p>
                    <p className="mt-3 text-base leading-7">{t.noteText}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
