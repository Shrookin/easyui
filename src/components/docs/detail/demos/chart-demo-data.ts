import type { BarDatum, BarSeries } from '../../../ui/BarChart';
import type { DonutDatum } from '../../../ui/DonutChart';
import type { HeatDay } from '../../../ui/ActivityHeatmap';
import type { FunnelStage } from '../../../ui/FunnelChart';

function rng(seed: number) {
  return () => {
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const DAY_MS = 86_400_000;

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const CHART_BARS: BarDatum[] = MONTHS.map((label, i) => ({
  label,
  web: Math.round(2400 + i * 140 + Math.sin(i * 1.3) * 520),
  mobile: Math.round(1700 + i * 190 + Math.cos(i * 0.9) * 380),
  api: Math.round(900 + i * 120 + Math.sin(i * 2.1) * 260),
}));

export const CHART_SERIES: BarSeries[] = [
  { key: 'web', label: 'Web' },
  { key: 'mobile', label: 'Mobile' },
  { key: 'api', label: 'API' },
];

export const CHART_DONUT: DonutDatum[] = [
  { label: 'Compute', value: 5240 },
  { label: 'Storage', value: 3180 },
  { label: 'Bandwidth', value: 2260 },
  { label: 'Databases', value: 1610 },
];

function createDays(): HeatDay[] {
  const r = rng(7);
  const out: HeatDay[] = [];
  const end = Date.UTC(2026, 9, 21);
  for (let i = 0; i < 371; i++) {
    const t = new Date(end - i * DAY_MS);
    const wd = t.getUTCDay();
    const streak = Math.sin(i / 11) > 0.1 ? 1.6 : 0.5;
    const base = wd === 0 || wd === 6 ? 0.25 : 1;
    const v = r() < 0.18 * (2 - base) ? 0 : Math.round(r() * 11 * base * streak);
    out.push({ date: t.toISOString().slice(0, 10), value: v });
  }
  return out;
}

export const CHART_DAYS = createDays();

export const CHART_MATRIX = (() => {
  const r = rng(21);
  return Array.from({ length: 7 }, (_, d) =>
    Array.from({ length: 24 }, (_, h) => {
      const work = d < 5 ? 1 : 0.35;
      const peak = Math.exp(-((h - 11) ** 2) / 22) + 0.7 * Math.exp(-((h - 16) ** 2) / 14);
      return Math.round(r() * 8 + work * peak * 38);
    }),
  );
})();

/* ------------------------------ Dashboard data ----------------------------- */

const clamp = (v: number, min: number, max: number) => Math.min(Math.max(v, min), max);

const walk = (seed: number, n: number, start: number, drift: number, vol: number) => {
  const r = rng(seed);
  let v = start;
  return Array.from({ length: n }, () => (v = Math.max(1, v + drift + (r() - 0.5) * vol)));
};

export const DASHBOARD_DAYS = Array.from({ length: 14 }, (_, i) => `Oct ${i + 8}`);
export const DASHBOARD_REVENUE = walk(3, 14, 41000, 700, 3200);
export const DASHBOARD_USERS = walk(5, 14, 8200, 120, 380);
export const DASHBOARD_CONVERSION = walk(8, 14, 3.1, 0.03, 0.22);
export const DASHBOARD_CHURN = walk(13, 14, 2.6, -0.02, 0.18);

export const DASHBOARD_FUNNEL: FunnelStage[] = [
  { label: 'Visited site', value: 48200 },
  { label: 'Signed up', value: 15840 },
  { label: 'Created project', value: 9120 },
  { label: 'Invited a teammate', value: 4210 },
  { label: 'Started paid plan', value: 1380 },
];

/** A pretend websocket: a random walk with a daily wobble, one reading per second */
export const DASHBOARD_LIVE_SOURCE = (push: (value: number, time?: number) => void) => {
  const r = rng(99);
  let v = 1240;
  const id = setInterval(() => {
    v = clamp(v + (r() - 0.5) * 110 + Math.sin(Date.now() / 6000) * 22, 700, 1900);
    push(Math.round(v));
  }, 1000);
  return () => clearInterval(id);
};

export const DASHBOARD_LIVE_INITIAL = (() => {
  const r = rng(77);
  let v = 1200;
  return Array.from({ length: 60 }, (_, i) =>
    (v = clamp(v + (r() - 0.5) * 90 + Math.sin(i / 7) * 18, 700, 1900)),
  ).map(Math.round);
})();
