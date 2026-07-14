import type { IconName } from '@/components/ds';

export type ServiceTone = 'brand' | 'blush' | 'sage' | 'dusk';

export interface ServiceItem {
  name: string;
  description: string;
}

export interface Service {
  slug: string;
  /** Full page/card title */
  title: string;
  /** Short label for nav/cards */
  shortTitle: string;
  icon: IconName;
  tone: ServiceTone;
  /** Eyebrow above the detail hero */
  eyebrow: string;
  /** One-line card + meta description */
  summary: string;
  /** Hero lede paragraph on the detail page */
  lede: string;
  /** Longer overview paragraphs */
  overview: string[];
  /** Sub-services within this care area */
  items: ServiceItem[];
  /** What to expect at a visit */
  expect: string[];
  /** SEO keywords */
  keywords: string[];
}

export const SERVICES: Service[] = [
  {
    slug: 'pregnancy-antenatal-care',
    title: 'Pregnancy & Antenatal Care',
    shortTitle: 'Pregnancy Care',
    icon: 'baby',
    tone: 'blush',
    eyebrow: 'Every step of your pregnancy',
    summary: 'Complete antenatal care and safe, supported deliveries — including high-risk pregnancies.',
    lede: 'From your first positive test to holding your baby, Dr. Roma walks with you through every scan, every question and every milestone — so you feel calm, informed and cared for.',
    overview: [
      'Pregnancy is a journey best travelled with a doctor who knows you. Dr. Roma provides complete antenatal care — regular check-ups, growth scans, nutrition and wellness guidance — tailored to your body and your baby.',
      'For pregnancies that need extra attention, she is experienced in managing high-risk cases and bad obstetric history, with careful monitoring from early pregnancy through to a safe delivery.',
    ],
    items: [
      { name: 'Antenatal check-ups', description: 'Regular visits with growth monitoring, blood pressure and wellness checks at every stage.' },
      { name: 'High-risk pregnancy care', description: 'Close monitoring and specialist support for pregnancies that need extra care.' },
      { name: 'Painless & normal delivery', description: 'Gentle, supported labour with a focus on a safe, comfortable normal delivery.' },
      { name: 'Caesarean (C-section)', description: 'Safe surgical delivery when it’s the right choice for you and your baby.' },
      { name: 'Bad obstetric history', description: 'Personalised planning and reassurance after previous pregnancy loss or complications.' },
      { name: 'Pelvic & growth ultrasound', description: 'In-clinic scans to track your baby’s development and wellbeing.' },
    ],
    expect: [
      'A calm, unhurried consultation where every question is welcome.',
      'A clear, personalised care plan for your stage of pregnancy.',
      'Guidance you can reach on WhatsApp between visits.',
    ],
    keywords: ['pregnancy care Meerut', 'antenatal care', 'high-risk pregnancy', 'normal delivery', 'gynaecologist Meerut'],
  },
  {
    slug: 'fertility-care',
    title: 'Fertility Care',
    shortTitle: 'Fertility',
    icon: 'heart',
    tone: 'brand',
    eyebrow: 'Planning for a family',
    summary: 'Fertility evaluation, follicular monitoring and personalised guidance for your journey to parenthood.',
    lede: 'If you’re trying to conceive, you don’t have to navigate it alone. Dr. Roma offers gentle, evidence-based fertility care that starts by understanding you — then builds a plan around your goals.',
    overview: [
      'Fertility care begins with listening. Dr. Roma reviews your history, runs the right investigations, and explains what’s happening in clear, reassuring terms — no jargon, no pressure.',
      'From ovulation tracking and follicular monitoring to hormonal assessment and lifestyle guidance, care is personalised to give you the best possible chance while keeping your wellbeing at the centre.',
    ],
    items: [
      { name: 'Infertility evaluation', description: 'A thorough, kind assessment to understand what may be affecting conception.' },
      { name: 'Follicular monitoring', description: 'Ultrasound tracking of your cycle to time conception with confidence.' },
      { name: 'Ovulation & cycle guidance', description: 'Practical, personalised advice to support natural conception.' },
      { name: 'Hormonal assessment', description: 'Targeted tests (LH/FSH and more) to guide the right next step.' },
      { name: 'Pre-conception counselling', description: 'Getting your body and health ready before you start trying.' },
    ],
    expect: [
      'A private, judgement-free conversation about your goals.',
      'Only the investigations you actually need — explained clearly.',
      'A step-by-step plan you understand and feel comfortable with.',
    ],
    keywords: ['fertility treatment Meerut', 'infertility specialist', 'follicular monitoring', 'trying to conceive'],
  },
  {
    slug: 'pcos-hormonal-health',
    title: 'PCOS & Hormonal Health',
    shortTitle: 'PCOS & Hormonal',
    icon: 'activity',
    tone: 'sage',
    eyebrow: 'Feel like yourself again',
    summary: 'Personalised care for PCOS/PCOD, irregular periods, menopause and other hormonal concerns.',
    lede: 'Mood swings, irregular periods, fatigue or unwanted changes? These are real, and they’re treatable. Dr. Roma helps you understand your hormones and build a plan that fits your life.',
    overview: [
      'Hormonal health shapes how you feel every day. Whether it’s PCOS/PCOD, painful or irregular periods, leucorrhoea, or the changes of menopause, Dr. Roma offers care that treats the whole person — not just a test result.',
      'Care combines the right investigations with lifestyle, nutrition and medical guidance, so you see real, lasting improvement and feel like yourself again.',
    ],
    items: [
      { name: 'PCOS / PCOD care', description: 'Personalised plans covering periods, weight, skin and long-term health.' },
      { name: 'Irregular & painful periods', description: 'Finding the cause and easing symptoms with a plan that suits you.' },
      { name: 'Menopause clinic', description: 'Supportive care through perimenopause and menopause, at your pace.' },
      { name: 'Leucorrhoea & infections', description: 'Diagnosis and gentle treatment of common vaginal concerns.' },
      { name: 'Hormonal profiling', description: 'The right tests to understand what your body is telling you.' },
    ],
    expect: [
      'A consultation that takes your symptoms seriously.',
      'A plan that blends medical care with realistic lifestyle steps.',
      'Ongoing support so you’re never left guessing.',
    ],
    keywords: ['PCOS treatment Meerut', 'PCOD specialist', 'irregular periods', 'menopause clinic', 'hormonal imbalance'],
  },
  {
    slug: 'laparoscopic-surgery',
    title: 'Laparoscopic & Minimal-Access Surgery',
    shortTitle: 'Laparoscopy',
    icon: 'stethoscope',
    tone: 'dusk',
    eyebrow: 'Advanced, gentle surgery',
    summary: 'Keyhole gynaecological surgery for faster recovery, smaller scars and less discomfort.',
    lede: 'When surgery is needed, minimal-access techniques mean smaller incisions, less pain and a quicker return to your life. Dr. Roma is an experienced laparoscopic surgeon you can trust.',
    overview: [
      'Laparoscopic (keyhole) surgery lets Dr. Roma treat many gynaecological conditions through tiny incisions — so recovery is faster and more comfortable than traditional open surgery.',
      'Every procedure is explained fully beforehand, with your questions answered and your family reassured, so you go in feeling confident and cared for.',
    ],
    items: [
      { name: 'Diagnostic laparoscopy & hysteroscopy', description: 'Precise, minimally invasive diagnosis of pelvic and uterine concerns.' },
      { name: 'Myomectomy', description: 'Removal of fibroids while preserving the uterus where possible.' },
      { name: 'Hysterectomy', description: 'Laparoscopic removal of the uterus when clinically needed.' },
      { name: 'Ovarian cystectomy', description: 'Gentle removal of ovarian cysts through keyhole surgery.' },
      { name: 'Endometriosis surgery', description: 'Specialist treatment to relieve pain and protect fertility.' },
      { name: 'Ectopic pregnancy & tubal ligation', description: 'Safe surgical care for ectopic pregnancy and permanent contraception.' },
    ],
    expect: [
      'A clear explanation of why surgery is recommended and what it involves.',
      'Minimal-access techniques for smaller scars and faster recovery.',
      'Attentive after-care and a recovery plan you can follow at home.',
    ],
    keywords: ['laparoscopic surgery Meerut', 'keyhole gynaecology surgery', 'myomectomy', 'hysterectomy', 'endometriosis'],
  },
  {
    slug: 'screening-preventive-care',
    title: 'Screening & Preventive Care',
    shortTitle: 'Screening',
    icon: 'shield-check',
    tone: 'brand',
    eyebrow: 'Stay ahead of your health',
    summary: 'Pap smears, cancer screening, HPV vaccination, breast health and wellness exams.',
    lede: 'The best care is the care that keeps you well. Regular screening catches concerns early — when they’re most treatable — so you can live with confidence and peace of mind.',
    overview: [
      'Preventive care is a gift to your future self. Dr. Roma offers the full range of women’s health screening in a warm, reassuring setting where nothing feels rushed or clinical.',
      'From cervical cancer screening and HPV vaccination to breast health and routine wellness exams, every check is an opportunity to protect your health for years to come.',
    ],
    items: [
      { name: 'Pap smear', description: 'Cervical cancer screening designed for early, reassuring detection.' },
      { name: 'Cervical cancer screening & HPV vaccination', description: 'Screening plus vaccination for lasting protection.' },
      { name: 'Breast health checks', description: 'Thorough clinical breast examination and guidance.' },
      { name: 'Wellness exams', description: 'A complete check-up covering all your health essentials.' },
      { name: 'Pelvic ultrasound', description: 'In-clinic imaging to support accurate diagnosis.' },
      { name: 'Contraception counselling', description: 'Confidential guidance on the options that suit your life.' },
    ],
    expect: [
      'A comfortable, private check-up with clear explanations.',
      'Results discussed with you in plain, reassuring language.',
      'A simple plan for staying well between visits.',
    ],
    keywords: ['pap smear Meerut', 'cervical cancer screening', 'HPV vaccination', 'well woman check', 'breast health'],
  },
];

export function getService(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug);
