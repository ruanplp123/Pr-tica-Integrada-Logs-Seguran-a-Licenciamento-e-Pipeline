import { datadogLogs } from '@datadog/browser-logs';
import { datadogRum } from '@datadog/browser-rum';
import { reactPlugin } from '@datadog/browser-rum-react';
import { onLog } from './logger';

export function initDatadog() {
  // Configuração para RUM (Monitoramento de Usuários)
  datadogRum.init({
    applicationId: process.env.REACT_APP_DD_APPLICATION_ID,
    clientToken: process.env.REACT_APP_DD_CLIENT_TOKEN,
    site: process.env.REACT_APP_DD_SITE || 'datadoghq.com',
    service: process.env.REACT_APP_APP_NAME || 'react-app',
    env: process.env.REACT_APP_ENV || 'dev',
    version: process.env.npm_package_version,
    sessionSampleRate: 100,
    sessionReplaySampleRate: 100, 
    trackUserInteractions: true,
    trackResources: true,
    trackLongTasks: true,
    defaultPrivacyLevel: 'mask-user-input',
    plugins: [reactPlugin()],
  });

  // Configuração para Logs
  datadogLogs.init({
    clientToken: process.env.REACT_APP_DD_CLIENT_TOKEN,
    site: process.env.REACT_APP_DD_SITE || 'datadoghq.com',
    service: process.env.REACT_APP_APP_NAME || 'react-app',
    env: process.env.REACT_APP_ENV || 'dev',
    forwardErrorsToLogs: true,
    sampleRate: 100,
  });

  // Encaminha os logs para o Datadog
  onLog(({ level, message, context, time, url }) => {
    datadogLogs.logger.log(message, { ...context, url, time }, level);
  });
}