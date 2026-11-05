/* STARHUB ACADEMY — shared helpers: plan state + sandboxed code runner. */

const TIERS = ['free', 'pro', 'advanced', 'premium'];

const PLANS = {
  free:     { name: 'Free',     price: '$0',    blurb: 'Learn the basics' },
  pro:      { name: 'Pro',      price: '$15/mo', blurb: 'Go deeper into code' },
  advanced: { name: 'Advanced', price: '$39/mo', blurb: 'Build real things, get help' },
  premium:  { name: 'Premium',  price: '$99/mo', blurb: 'Learn from the best' },
};

const PLAN_KEY = 'academy_plan';
const PROGRESS_KEY = 'academy_progress';
const DESK_KEY = 'academy_desk';

function getPlan() {
  const p = localStorage.getItem(PLAN_KEY);
  return TIERS.includes(p) ? p : 'free';
}
function setPlan(p) { localStorage.setItem(PLAN_KEY, p); }
function tierRank(t) { return TIERS.indexOf(t); }
function canAccess(tier) { return tierRank(getPlan()) >= tierRank(tier); }

function getProgress() {
  try { return JSON.parse(localStorage.getItem(PROGRESS_KEY)) || {}; }
  catch { return {}; }
}
function markDone(id) {
  const p = getProgress();
  p[id] = true;
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));
}

function esc(s) {
  return String(s).replace(/[&<>"]/g, c =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
}

/* ---------- sandboxed runner ----------
   User code runs in a throwaway Web Worker with a captured console.
   A returned promise is awaited; then a short settle window lets queued
   timers (e.g. setTimeout inside an async function) still log.
   The parent kills the worker after `timeout` ms (infinite-loop guard). */
const RUNNER_SRC = `
onmessage = e => {
  const logs = [];
  const fmt = v => {
    if (typeof v === 'string') return v;
    if (v instanceof Error) return v.name + ': ' + v.message;
    try { return JSON.stringify(v); } catch { return String(v); }
  };
  const push = (t, a) => {
    if (logs.length < 300) logs.push({ t, text: a.map(fmt).join(' ') });
  };
  const con = {
    log:   (...a) => push('log', a),
    info:  (...a) => push('log', a),
    warn:  (...a) => push('warn', a),
    error: (...a) => push('err', a),
  };
  const done = ok => postMessage({ ok, logs });
  try {
    const r = new Function('console', e.data)(con);
    if (r && typeof r.then === 'function') {
      r.then(() => setTimeout(() => done(true), 80))
       .catch(err => { push('err', [err.name + ': ' + err.message]); done(false); });
    } else {
      setTimeout(() => done(true), 600);
    }
  } catch (err) {
    push('err', [err.name + ': ' + err.message]);
    done(false);
  }
};
`;

function runCode(code, cb, timeout = 4000) {
  const url = URL.createObjectURL(new Blob([RUNNER_SRC], { type: 'text/javascript' }));
  const w = new Worker(url);
  const kill = setTimeout(() => {
    w.terminate(); URL.revokeObjectURL(url);
    cb({ ok: false, logs: [{ t: 'err', text: 'Timed out — is there an infinite loop?' }] });
  }, timeout);
  w.onmessage = e => {
    clearTimeout(kill); w.terminate(); URL.revokeObjectURL(url);
    cb(e.data);
  };
  w.onerror = e => {
    clearTimeout(kill); w.terminate(); URL.revokeObjectURL(url);
    cb({ ok: false, logs: [{ t: 'err', text: e.message || 'Unknown error' }] });
  };
  w.postMessage(code);
}

/* ---------- exercise grading ----------
   expectLogs:      lines that must appear in the output, in order (substring match)
   mustContain:     regex patterns the source must match
   mustNotContain:  regex patterns the source must NOT match */
function gradeExercise(ex, code, logs) {
  const fails = [];
  const lines = logs.filter(l => l.t !== 'err').map(l => l.text);
  if (logs.some(l => l.t === 'err')) {
    fails.push('Your code threw an error — check the console output above.');
  }
  if (ex.expectLogs) {
    let i = 0;
    for (const l of lines) if (i < ex.expectLogs.length && l.includes(ex.expectLogs[i])) i++;
    if (i < ex.expectLogs.length) {
      fails.push('Expected output line "' + ex.expectLogs[i] + '" was not printed.');
    }
  }
  for (const pat of ex.mustContain || []) {
    if (!new RegExp(pat).test(code)) fails.push('Your code should use: ' + (ex.named?.[pat] || '/' + pat + '/'));
  }
  for (const pat of ex.mustNotContain || []) {
    if (new RegExp(pat).test(code)) fails.push('Try it without using /' + pat + '/.');
  }
  return fails;
}
