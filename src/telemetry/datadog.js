import { datadogLogs } from '@datadog/browser-logs';
import { onLog } from './logger';

export function initDatadog() {
  datadogLogs.init({
    clientToken: process.env.REACT_APP_DD_CLIENT_TOKEN, // token público do Browser
    site: process.env.REACT_APP_DD_SITE || 'datadoghq.com', // ou 'datadoghq.eu'
    service: process.env.REACT_APP_APP_NAME || 'react-app',
    env: process.env.REACT_APP_ENV || 'dev',
    forwardErrorsToLogs: true,
    sampleRate: 100,
  });

  // Encaminha tudo que seu logger emitir para o Datadog
  onLog(({ level, message, context, time, url }) => {
    datadogLogs.logger.log(message, { ...context, url, time }, level);
  });
}
