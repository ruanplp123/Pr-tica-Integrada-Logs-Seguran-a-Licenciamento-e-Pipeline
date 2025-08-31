const subscribers = [];

export function onLog(subscriber) {
  subscribers.push(subscriber);
  return () => {
    const i = subscribers.indexOf(subscriber);
    if (i >= 0) subscribers.splice(i, 1);
  };
}

function notify(entry) {
  subscribers.forEach((s) => s(entry));
}

function baseLog(level, message, context = {}) {
  const entry = {
    level, // 'debug' | 'info' | 'warn' | 'error'
    message: String(message),
    context,
    time: new Date().toISOString(),
    url: typeof window !== "undefined" ? window.location.href : undefined,
  };

  // Console (sempre útil no dev)
  (console[level] || console.log)(`[${level.toUpperCase()}] ${entry.message}`, entry.context);

  // Encaminhar para "sinks" (Datadog, backend, etc.)
  notify(entry);
}

export const log = {
  debug: (msg, ctx) => baseLog('debug', msg, ctx),
  info:  (msg, ctx) => baseLog('info',  msg, ctx),
  warn:  (msg, ctx) => baseLog('warn',  msg, ctx),
  error: (msg, ctx) => baseLog('error', msg, ctx),
};
