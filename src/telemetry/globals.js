import { log } from './logger';

export function installGlobalErrorHandlers() {
  // Erros não capturados
  window.onerror = (message, source, lineno, colno, error) => {
    log.error('window.onerror', {
      message, source, lineno, colno,
      stack: error?.stack,
    });
  };

  // Promises rejeitadas sem catch
  window.onunhandledrejection = (event) => {
    log.error('onunhandledrejection', {
      reason: event?.reason?.message || String(event?.reason),
      stack: event?.reason?.stack,
    });
  };
}
